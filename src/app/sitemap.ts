import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://ig60.maak-corp.tn',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        }
    ]
}