'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},getCurrent=function(a){var b=window.innerWidth,c='desktop';return a.sort(function(c,a){return c.width<a.width?1:-1}),a.forEach(function(a){a.width>=b&&(c=a.mode)}),c},defaultConfig=[{mode:'mobile',width:575},{mode:'tablet',width:1024}],ResizeAction=function(a){return{type:'resize',windowSize:a}},Resize=function(a,b){var c=b?b:defaultConfig,d=getCurrent(c);a(ResizeAction(d)),window.addEventListener('resize',function(){var b=getCurrent(c);b!==d&&(d=b,a(ResizeAction(b)))})},ResizeReducer=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{windowSize:''},b=arguments[1],c=b.type,d=b.windowSize;return'resize'===c?_extends({},a,{windowSize:d}):a};/**
 * @param [config] - config width options {width: breakpoint, mode: breakpoint name}
 * @returns string - current size mode.
 *//**
 *
 * @param windowSize
 * @returns {{windowSize: string, type: string}}
 * @constructor
 *//**
 * Send dispatch event on breakpoint change.
 *
 * @param dispatch
 * @param config
 * @constructor
 */exports.ResizeReducer=ResizeReducer,exports.Resize=Resize;