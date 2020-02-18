// module.exports = {
//     baseUrl: '/', // 根路径
//     outputDir: 'dist', //打包后生成的文件名
//     assetsDit: 'assets', //静态资源目录
//     lintOnSave: false, //是否开启eslint保存检测，
//     devServer: {
//         open: true, //启动项目后自动开启浏览器
//         host: 'localhost', // 主机名
//         port: 8080,
//         https: false, //是否开启协议
//         // hotOnly: false,// 热更新

//         // 配置跨域
//         proxy: {
//             '/api': { // 配置跨域的名字
//                 target: 'http://www.dzyong.top:3005', //跨域的地址
//                 ws: true,
//                 changOrigin: true, // 是否跨域
//                 pathRewrite: { // 当前的名字
//                     '^/api': ''
//                 }
//             }
//         }

//     }
// }