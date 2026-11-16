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

/** One service-specific responsive landing-page asset per PPC campaign.
 * Twelve sources are distinct; three related campaigns use different subject-focused
 * crops. All images are illustrative marketing imagery, never a claimed customer job.
 */
const ppcSources = [
 ['car-lockout','automotive-locksmith','attention'],
 ['car-key-replacement','key-replacement','attention'],
 ['house-lockout','emergency-lockout-service','attention'],
 ['lock-rekeying','lock-rekeying','attention'],
 ['commercial-locksmith','commercial-locksmith','attention'],
 ['emergency-locksmith','emergency-locksmith-service','attention'],
 ['smart-lock-installation','residential-locksmith','attention'],
 ['ignition-repair','automotive-locksmith','west'],
 ['broken-key-extraction','lock-repair','attention'],
 ['deadbolt-installation','lock-installation','attention'],
 ['lock-change','lock-replacement','attention'],
 ['safe-lockout','security-hardware','attention'],
 ['storage-unit-lockout','commercial-locksmith','east'],
 ['car-key-fob-programming','key-duplication','attention'],
 ['lost-car-keys','key-replacement','west'],
];
const ppcDir=path.resolve('public/ppc-images');
await mkdir(ppcDir,{recursive:true});
let ppcTotal=0;
for (const [slug, source, position] of ppcSources) {
 const file=path.join(inputDir, source+'.png');
 for (const [width,quality] of [[480,64],[960,70]]) {
  const height=Math.round(width*11/16);
  const target=path.join(ppcDir, slug+'-'+width+'.webp');
  await sharp(file).rotate().resize({width,height,fit:'cover',position}).webp({quality,effort:5}).toFile(target);
  ppcTotal+=(await stat(target)).size;
 }
}
console.log('Generated '+ppcSources.length+' responsive PPC image variants totaling '+(ppcTotal/1048576).toFixed(2)+' MB');

// Separate, smaller hero images are critical for mobile largest-contentful-paint.
const hero=path.resolve('src/assets/images/locksmith_van_clean_1790360598992.webp');
const heroDir=path.resolve('public/home-images');
await mkdir(heroDir,{recursive:true});
for (const [width,quality] of [[480,65],[960,70]]) {
 await sharp(hero).resize({width,withoutEnlargement:true}).webp({quality,effort:5}).toFile(path.join(heroDir,'mobile-van-'+width+'.webp'));
}
