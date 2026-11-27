export const homeVan = {
  width: 1200,
  height: 670,
  sizes: '(max-width: 1023px) calc(100vw - 40px), (max-width: 1359px) 50vw, 632px',
  src: '/home-images/mobile-van-720.webp',
  avif: '/home-images/mobile-van-720.avif',
  srcSet(format: 'avif' | 'webp') {
    return [360, 480, 600, 720, 960].map(width => `/home-images/mobile-van-${width}.${format} ${width}w`).join(', ');
  },
};
