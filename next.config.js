module.exports = {
  images: {
    domains: ['static.coinpaprika.com', 'graphs.coinpaprika.com'],
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
};
