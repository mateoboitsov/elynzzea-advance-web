/** @type {import('next').NextConfig} */
const nextConfig = {
  // Deshabilitar Turbopack para builds de producción
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
