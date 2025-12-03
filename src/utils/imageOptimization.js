/**
 * Image Optimization Utility
 * Handles preloading, caching, and lazy loading strategies
 */

/**
 * Preload an image to cache it in the browser
 * @param {string} src - The image source URL
 * @returns {Promise} - Resolves when image is loaded
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

/**
 * Preload multiple images in parallel
 * @param {string[]} srcs - Array of image source URLs
 * @returns {Promise} - Resolves when all images are loaded
 */
export const preloadImages = (srcs) => {
  return Promise.all(srcs.map(src => preloadImage(src).catch(() => null)));
};

/**
 * Set up resource hints for images
 * Adds preload/prefetch links to the document head
 * @param {string[]} images - Array of image paths
 * @param {'preload'|'prefetch'} type - Type of hint
 */
export const addResourceHints = (images, type = 'preload') => {
  images.forEach(src => {
    const link = document.createElement('link');
    link.rel = type;
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

/**
 * Enable HTTP/2 Server Push or HTTP caching headers
 * (These are typically configured on the server, not client-side)
 * This function helps identify which images should be prioritized
 */
export const getCriticalImages = () => {
  return [
    './mylogo.png',
    './me/Hi.png',
    './me/thinking.png',
  ];
};

/**
 * Get all carousel images for preloading
 */
export const getCarouselImages = () => {
  return [
    './me/Hi.png',
    './me/thinking.png',
    './me/profile.png',
    './me/coding.png',
  ];
};
