/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: "serverless",
  future: { webpack5: true },

  webpack(config, { isServer, dev }) {
    const ASSET_OUTPUT_PATH = `${isServer ? '../' : ''}../public/`;

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
