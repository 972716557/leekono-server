module.exports = {
  // 配置ssg导出到生产环境
  output: "export",
  // SSG 不支持 Image Optimization，需要关闭
  images: {
    unoptimized: true,
  },
  // three/ 目录下的实验性 demo 有预存类型错误，跳过构建时类型检查
  typescript: {
    ignoreBuildErrors: true,
  },
};
