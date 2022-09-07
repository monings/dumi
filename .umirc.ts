import { defineConfig } from 'dumi';
const repo = 'dumi'; // 项目名
export default defineConfig({
  title: 'dumi',
  mode: 'site',
  devServer: {
    port: 8080, // 自定义端口号
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});
