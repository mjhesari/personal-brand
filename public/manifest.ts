'use server';

// Public imports
import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const manifestGenerator = async (data: any, domain: string) => {
  // Create json file
  const filePath = path.join(process.cwd(), 'public', `${domain?.split('.').join('-')}.json`);

  if (!fs.existsSync(filePath)) {
    // Manifest data
    const siteData = data?.siteData || {};
    const lang: 'fa' | 'en' = data?.siteConfig?.lang ?? 'fa';
    const manifest: MetadataRoute.Manifest = {
      name: `${siteData?.name?.[lang] ?? 'Web application'}`,
      short_name: siteData?.name?.[lang] ?? 'Web application',
      description:
        siteData?.description?.[lang] ?? 'Website maker for every businesses in the iran',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#000000',
      icons: [
        {
          src: data?.siteConfig?.icon ?? './pazh-local-logo.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    };

    await fs.promises
      .writeFile(filePath, JSON.stringify(manifest))
      .then(() => {
        fs.chmod(filePath, 0o666, () => {});
        console.log('File updated successfully');
      })
      .catch(() => console.log('Error updating file'));
  }
};

export default manifestGenerator;
