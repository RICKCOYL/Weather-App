import { resolve } from 'path';

export const entry = './src/index.js';
export const output = {
  filename: 'main.js',
  path: resolve(__dirname, 'dist'),
};
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.worker\.js$/,
      use: { loader: 'worker-loader' },
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
  ],
};