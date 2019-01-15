/****************/
/*** 各种目录 ***/
/****************/

let moduleExports = {};
const path = require('path');

/* 项目根目录 */
moduleExports.rootDir = path.resolve(__dirname, '../../');

/* 源文件相关目录 */
moduleExports.srcDir = path.resolve(moduleExports.rootDir, './src'); // 源文件目录
moduleExports.pageDir = path.resolve(moduleExports.srcDir, './pages'); // 页面目录
moduleExports.comDir = path.resolve(moduleExports.srcDir, './components'); //组件目录
moduleExports.publicDir = path.resolve(moduleExports.srcDir, './public'); //公用源文件目录
moduleExports.bsDir = path.resolve(moduleExports.publicDir, './css/bootstrap/stylesheets/_bootstrap'); //bootstrap
moduleExports.cdnDir = path.resolve(moduleExports.publicDir, './js/cdn'); //cdn

/* 开发环境相关目录 */
moduleExports.devDir = path.resolve(moduleExports.rootDir, './dev'); // 开发环境编译目录
moduleExports.devDllDir = path.resolve(moduleExports.devDir, './dll'); // 开发环境dll目录

/* 生产环境相关目录 */
moduleExports.proDir = path.resolve(moduleExports.rootDir, './dist'); // 生产环境编译目录
moduleExports.proDllDir = path.resolve(moduleExports.proDir, './dll'); // 开发环境dll目录

module.exports = moduleExports;