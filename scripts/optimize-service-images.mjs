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
