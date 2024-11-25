// node.js 방식 -> common.js
module.exports = {
  plugins : [ /* postcss에서 autorefixer기능을 사용하겠다. */
   require('autoprefixer')
  ]
};

// ES
// 내부에서 동작을 관리
// import autoprefixer from 'autoprefixer';
// export {
//   plugins : [
//     autoprefixer
//   ]
// }

