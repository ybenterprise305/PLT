/** Build-time service-image optimizer.
 * Source PNG originals remain in Git. Only responsive WebP derivatives ship to clients.
 * This reduces 12 ~2.5MB source images to small, correctly sized and cached assets.
 */
import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const inputDir = path.resolve('src/assets/images/services');
const outputDir = path.resolve('public/service-images');
await mkdir(outputDir,{recursive:true});
const names=(await readdir(inputDir)).filter(n=>n.endsWith('.png'));
if(names.length !== 12) throw new Error('Expected 12 dedicated PNG service images, found '+names.length);
let before=0,after=0;
for(const name of names){
  const src=path.join(inputDir,name);
  const base=name.slice(0,-4);
  const sourceBytes=(await stat(src)).size;
  before+=sourceBytes;
  for(const [width,tag,quality] of [[480,'480',66],[960,'960',70]]){
    const dest=path.join(outputDir,`${base}-${tag}.webp`);
    await sharp(src,{limitInputPixels:30000000})
      .rotate()
      .resize({width,withoutEnlargement:true})
      .webp({quality,effort:5})
      .toFile(dest);
    after+=(await stat(dest)).size;
  }
}
console.log('Optimized '+names.length+' service photos: '+(before/1048576).toFixed(1)+' MB originals -> '+(after/1048576).toFixed(1)+' MB total across both WebP sizes');

/** The 15 distinct PPC scenes were created for this website as one lightweight atlas.
 * Crop a different photographed locksmith job for each campaign. Never claim these
 * illustrative scenes are photos of real completed customer jobs.
 */
const ppcSlugs = [
 'car-lockout','car-key-replacement','house-lockout','lock-rekeying','commercial-locksmith',
 'emergency-locksmith','smart-lock-installation','ignition-repair','broken-key-extraction','deadbolt-installation',
 'lock-change','safe-lockout','storage-unit-lockout','car-key-fob-programming','lost-car-keys',
];
const atlasFile = path.resolve('src/assets/images/ppc_photo_atlas.webp');
const atlasSize = await sharp(atlasFile).metadata();
if (!atlasSize.width || !atlasSize.height) throw new Error('PPC atlas dimensions are missing');
const tileWidth = Math.floor(atlasSize.width / 5);
const tileHeight = Math.floor(atlasSize.height / 3);
const ppcDir = path.resolve('public/ppc-images');
await mkdir(ppcDir, { recursive: true });
let ppcTotal = 0;
for (const [i, slug] of ppcSlugs.entries()) {
  const col = i % 5;
  const row = Math.floor(i / 5);
  const extract = { left: col * tileWidth, top: row * tileHeight, width: tileWidth, height: tileHeight };
  for (const [width, quality] of [[480, 69], [960, 73]]) {
    const target = path.join(ppcDir, slug + '-' + width + '.webp');
    await sharp(atlasFile).extract(extract)
      .resize({ width, height: Math.round(width * 11 / 16), fit: 'cover', kernel: 'lanczos3' })
      .sharpen({ sigma: 0.5 })
      .webp({ quality, effort: 5 }).toFile(target);
    ppcTotal += (await stat(target)).size;
  }
}
console.log('Generated ' + ppcSlugs.length + ' distinct PPC photographic scenes, responsive WebP total ' + (ppcTotal/1048576).toFixed(2) + ' MB');

// Separate, smaller hero images are critical for mobile largest-contentful-paint.
const hero=path.resolve('src/assets/images/locksmith_van_clean_1790360598992.webp');
const heroDir=path.resolve('public/home-images');
await mkdir(heroDir,{recursive:true});
for (const [width,quality] of [[480,65],[960,70]]) {
 await sharp(hero).resize({width,withoutEnlargement:true}).webp({quality,effort:5}).toFile(path.join(heroDir,'mobile-van-'+width+'.webp'));
}
