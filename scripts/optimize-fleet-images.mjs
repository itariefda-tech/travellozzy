import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const sourceDirectory = path.resolve('content/fleet');
const outputDirectory = path.resolve('public/images/fleet');

const outputNames = {
  'all-new_avanza.jpg': 'toyota-avanza-new.webp',
  'Alphard-gen4_hybrid.jpg': 'toyota-alphard-gen-4-hybrid.webp',
  'fortuner_gr.jpg': 'toyota-fortuner-gr.webp',
  'Hiace_Premio_14Seat.jpg': 'toyota-hiace-premio-14-seat.webp',
  'hiace_premio.jpg': 'toyota-hiace-premio.webp',
  'hiace.jpg': 'toyota-hiace.webp',
  'innova_zeniz_g_hybrid.jpg': 'toyota-innova-zenix-g-hybrid.webp',
  'innova-reborn-fc.jpg': 'toyota-innova-reborn.webp',
  'Pajero_sport.jpg': 'mitsubishi-pajero-sport.webp',
  'stargazer.jpg': 'hyundai-stargazer.webp',
  'suzuki_xl7.jpg': 'suzuki-xl7.webp',
  'Toyota-Rush-GR.jpg': 'toyota-rush-gr.webp',
  'voxy_facelift.jpg': 'toyota-voxy-facelift.webp',
  'xpander.jpg': 'mitsubishi-xpander.webp',
};

await mkdir(outputDirectory, { recursive: true });

const sourceFiles = await readdir(sourceDirectory);
for (const [sourceName, outputName] of Object.entries(outputNames)) {
  if (!sourceFiles.includes(sourceName)) {
    throw new Error(`Missing fleet source image: ${sourceName}`);
  }

  await sharp(path.join(sourceDirectory, sourceName))
    .rotate()
    .resize(1200, 900, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82, effort: 5 })
    .toFile(path.join(outputDirectory, outputName));
}

console.log(`Optimized ${Object.keys(outputNames).length} fleet images.`);
