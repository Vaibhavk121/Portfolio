// vite.config.server.js - Server configuration for optimal caching
export const serverConfig = {
  headers: {
    // Cache images for 30 days
    'Cache-Control': 'public, max-age=2592000, immutable',
  },
  middlewares: [
    (req, res, next) => {
      // Set cache headers for images
      if (req.url.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        res.setHeader('Content-Type', 'image/*');
      }
      // Set cache headers for fonts
      if (req.url.match(/\.(woff|woff2|ttf|otf|eot)$/i)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
      next();
    },
  ],
};
