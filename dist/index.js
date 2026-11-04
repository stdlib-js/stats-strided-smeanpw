"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=i(function(b,s){
var f=require('@stdlib/number-float64-base-to-float32/dist'),y=require('@stdlib/blas-ext-base-ssumpw/dist').ndarray;function d(e,r,a,n){return e<=0?NaN:e===1||a===0?r[n]:f(y(e,r,a,n)/e)}s.exports=d
});var o=i(function(g,v){
var w=require('@stdlib/strided-base-stride2offset/dist'),l=t();function j(e,r,a){return l(e,r,a,w(e,a))}v.exports=j
});var m=i(function(h,p){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=o(),R=t();x(q,"ndarray",R);p.exports=q
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),O=m(),u,c=E(_(__dirname,"./native.js"));F(c)?u=O:u=c;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
