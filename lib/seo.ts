import { Metadata } from 'next';

const siteConfig = {
    name: 'SuperCX',
    url: 'https://supercx.co',
    ogImage: '/og-image.png',
    description: 'Drive revenue growth with data-backed engagement. SuperCX powers smarter, faster growth with enterprise-grade chatbots, CRM integrations, and marketing automation workflows.',
    twitterHandle: '@supercx',
};

interface SEOProps {
    title: string;
    description: string;
    keywords?: string[];
    canonical?: string;
    ogImage?: string;
    noIndex?: boolean;
    type?: 'website' | 'article' | 'product';
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
}

export function generateSEO({
    title,
    description,
    keywords = [],
    canonical,
    ogImage,
    noIndex = false,
    type = 'website',
    publishedTime,
    modifiedTime,
    authors,
}: SEOProps): Metadata {
    const fullTitle = title.includes('SuperCX') ? title : `${title} | SuperCX`;
    const ogImageUrl = ogImage || siteConfig.ogImage;
    const canonicalUrl = canonical ? `${siteConfig.url}${canonical}` : undefined;

    const baseKeywords = ['SuperCX', 'customer experience', 'CX platform', 'AI automation'];
    const allKeywords = [...new Set([...baseKeywords, ...keywords])];

    return {
        title: fullTitle,
        description,
        keywords: allKeywords,
        authors: authors?.map(name => ({ name })) || [{ name: 'SuperCX', url: siteConfig.url }],
        creator: siteConfig.name,
        publisher: siteConfig.name,
        robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
        alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
        openGraph: {
            type: type === 'article' ? 'article' : 'website',
            locale: 'en_US',
            url: canonicalUrl || siteConfig.url,
            siteName: siteConfig.name,
            title: fullTitle,
            description,
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: fullTitle,
                },
            ],
            ...(type === 'article' && {
                publishedTime,
                modifiedTime,
                authors,
            }),
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [ogImageUrl],
            creator: siteConfig.twitterHandle,
            site: siteConfig.twitterHandle,
        },
    };
}

// JSON-LD Structured Data Generators
export function generateWebsiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SuperCX',
        alternateName: 'SuperCX',
        url: 'https://supercx.co',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://supercx.co/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
        },
    };
}

export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'SuperCX',
        url: 'https://supercx.co',
        logo: 'https://supercx.co/logo.png',
        description: 'AI-Powered Customer Experience & Revenue Growth Platform',
        foundingDate: '2020',
        sameAs: [
            'https://twitter.com/supercx',
            'https://linkedin.com/company/supercx',
            'https://facebook.com/supercx',
        ],
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '+91-80-4123-4567',
                contactType: 'sales',
                email: 'hello@supercx.co',
                availableLanguage: ['English', 'Hindi'],
                areaServed: 'IN',
            },
            {
                '@type': 'ContactPoint',
                telephone: '+91-80-4123-4567',
                contactType: 'customer support',
                email: 'support@supercx.co',
                availableLanguage: ['English', 'Hindi'],
            },
        ],
        address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Tech Park, Whitefield',
            addressLocality: 'Bangalore',
            addressRegion: 'Karnataka',
            postalCode: '560066',
            addressCountry: 'IN',
        },
    };
}

export function generateProductSchema(product: {
    name: string;
    description: string;
    url: string;
    image?: string;
    brand?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: product.name,
        description: product.description,
        url: product.url,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
        },
        brand: {
            '@type': 'Brand',
            name: product.brand || 'SuperCX',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '150',
            bestRating: '5',
            worstRating: '1',
        },
    };
}

export function generateServiceSchema(service: {
    name: string;
    description: string;
    url: string;
    provider?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.description,
        url: service.url,
        provider: {
            '@type': 'Organization',
            name: service.provider || 'SuperCX',
            url: 'https://supercx.co',
        },
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'SuperCX Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: service.name,
                    },
                },
            ],
        },
    };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `https://supercx.co${item.url}`,
        })),
    };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

export function generateArticleSchema(article: {
    title: string;
    description: string;
    url: string;
    image?: string;
    publishedTime: string;
    modifiedTime?: string;
    author: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        image: article.image || 'https://supercx.co/og-image.png',
        url: article.url,
        datePublished: article.publishedTime,
        dateModified: article.modifiedTime || article.publishedTime,
        author: {
            '@type': 'Person',
            name: article.author,
        },
        publisher: {
            '@type': 'Organization',
            name: 'SuperCX',
            logo: {
                '@type': 'ImageObject',
                url: 'https://supercx.co/logo.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': article.url,
        },
    };
}

export function generateLocalBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'SuperCX',
        image: 'https://supercx.co/logo.png',
        '@id': 'https://supercx.co',
        url: 'https://supercx.co',
        telephone: '+91-80-4123-4567',
        email: 'hello@supercx.co',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Tech Park, Whitefield',
            addressLocality: 'Bangalore',
            addressRegion: 'Karnataka',
            postalCode: '560066',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 12.9698,
            longitude: 77.7499,
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
        },
        priceRange: '$$',
    };
}
