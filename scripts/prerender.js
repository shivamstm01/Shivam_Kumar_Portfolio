import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import handler from 'serve-handler';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 45678;
const BASE_URL = `http://localhost:${PORT}`;
const DIST_DIR = path.join(process.cwd(), 'dist');

// Routes to prerender
const routes = [
    '/',
    '/about',
    '/skills',
    '/experience',
    '/projects',
    '/contact'
];

async function serveDist() {
    const server = http.createServer((request, response) => {
        return handler(request, response, {
            public: DIST_DIR,
            rewrites: [
                { source: '**', destination: '/index.html' }
            ]
        });
    });

    return new Promise((resolve) => {
        server.listen(PORT, () => {
            console.log(`Static server running at ${BASE_URL}`);
            resolve(server);
        });
    });
}

async function prerender(server) {
    let browser;
    try {
        // Attempt to launch browser with arguments that help in containerized environments
        browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
    } catch (err) {
        console.warn('\n⚠️ WARNING: Could not launch browser for prerendering.');
        console.warn('This is expected in some CI/CD environments (like standard Vercel builds) that lack system libraries.');
        console.warn('Optimization: Falling back to standard SPA (Client-Side Rendering) for this build.');
        console.warn('The site will still work perfectly, just without pre-generated HTML for these routes.');
        console.warn(`Original Error: ${err.message}\n`);

        server.close();
        // Exit normally so the build counts as "Success"
        return;
    }

    try {
        const page = await browser.newPage();

        for (const route of routes) {
            const url = `${BASE_URL}${route}`;
            const filePath = path.join(DIST_DIR, route === '/' ? 'index.html' : `${route}/index.html`);

            console.log(`Prerendering: ${route}...`);

            try {
                await page.goto(url, { waitUntil: 'networkidle0' });

                // Allow some time for animations/content to settle
                await new Promise(r => setTimeout(r, 1000));

                const content = await page.content();

                // Ensure directory exists
                const dir = path.dirname(filePath);
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }

                fs.writeFileSync(filePath, content);
                console.log(`Saved: ${filePath}`);
            } catch (err) {
                console.error(`Failed to prerender ${route}:`, err);
            }
        }
    } catch (err) {
        console.error('Error during prerendering pages:', err);
    } finally {
        if (browser) await browser.close();
        server.close();
        console.log('Prerendering process finished.');
    }
}

async function main() {
    if (!fs.existsSync(DIST_DIR)) {
        console.error('Error: dist directory not found. Run "npm run build" first.');
        process.exit(1);
    }

    try {
        const server = await serveDist();
        await prerender(server);
        process.exit(0);
    } catch (err) {
        console.error('Prerendering failed:', err);
        // Even if the whole process fails, we might want to let the build pass if it's just prerendering
        // But for main() errors, usually something basic is wrong.
        process.exit(1);
    }
}

main();
