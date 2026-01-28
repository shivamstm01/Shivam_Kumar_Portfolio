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
    const browser = await puppeteer.launch({ headless: "new" });
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

    await browser.close();
    server.close();
    console.log('Prerendering complete!');
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
        process.exit(1);
    }
}

main();
