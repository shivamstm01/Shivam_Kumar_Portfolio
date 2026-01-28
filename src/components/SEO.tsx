import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    keywords?: string;
}

const SEO = ({ title, description, image, url, keywords }: SEOProps) => {
    const siteUrl = window.location.origin; // Or process.env.VITE_SITE_URL if you have one
    const fullImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : '';
    const fullUrl = url ? (url.startsWith('http') ? url : `${siteUrl}${url}`) : siteUrl;

    return (
        <Helmet>
            {/* Basic */}
            <title>{title} | Shivam Portfolio</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {fullImage && <meta property="og:image" content={fullImage} />}

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            {fullImage && <meta property="twitter:image" content={fullImage} />}
        </Helmet>
    );
};

export default SEO;
