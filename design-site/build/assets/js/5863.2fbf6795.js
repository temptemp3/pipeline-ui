(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[5863],{16441:function(e,t,r){"use strict";var n=r(67294),o=r(45697),i=r.n(o),a=r(78735);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}var f=n.forwardRef((function(e,t){return n.createElement(a.Z,s({className:"pipeline-card",ref:t},e))}));f.defaultProps={position:"relative",bg:"#ffffff",border:1,borderColor:"#dadde1",boxShadow:2,p:4},f.propTypes=l(l({},a.Z.propTypes),{},{theme:i().object}),f.displayName="Card",t.Z=f},86837:function(e,t,r){"use strict";var n=r(67294),o=(r(45697),r(78735));function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}var l=n.forwardRef((function(e,t){return n.createElement(o.Z,u({ref:t},e))}));l.defaultProps={display:"flex"},l.propTypes=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},o.Z.propTypes),l.displayName="Flex",t.Z=l},74854:function(e,t,r){"use strict";r.d(t,{F:function(){return L},Z:function(){return T}});var n=r(67294),o=r(45697),i=r.n(o),a=r(91288),u=r(50056),l=r(88776),c=r(4374),s=r(48604);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}var p=["variant"];function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return b(this,r)}}function b(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var w=(0,a.ZP)("input").withConfig({displayName:"FileInput__StyledFileInput",componentId:"sc-1i3ij93-0"})(["&{width:0;height:0;opacity:0;position:absolute;overflow:hidden;z-index:-1;}"]),O=(0,a.ZP)("label").withConfig({displayName:"FileInput__StyledFileLabel",componentId:"sc-1i3ij93-1"})(["&{display:inline-block;position:relative;cursor:pointer;}"]),C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,r,o,i=v(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).handleClick=function(e){t.fileInput.current.click()},t.handleChange=function(e){var r=t.fileInput.current.files;t.setState({files:!!r.length}),r&&r.length>1?t.setState({buttonLabel:r.length+" files selected"}):r&&r.length?t.setState({buttonLabel:r[0].name}):t.setState({buttonLabel:"Choose file\u2026"}),t.props.onChange&&t.props.onChange(e)},t.fileInput=n.createRef(),t.state={buttonLabel:"Choose file\u2026",files:!1},t}return t=a,(r=[{key:"render",value:function(){var e=this.props,t=e.variant,r=d(e,p);return"unstyled"===t?n.createElement("input",h({type:"file"},r)):n.createElement(O,null,n.createElement(w,h({type:"file"},r,{ref:this.fileInput,onChange:this.handleChange})),n.createElement(s.Z,{icon:this.state.files?"CloudDone":"CloudUpload",onClick:this.handleClick},this.state.buttonLabel))}}])&&g(t.prototype,r),o&&g(t,o),a}(n.Component);C.displayName="FileInput";var P=C,E=r(78735);function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(this,arguments)}var L=(0,a.ZP)(E.D).attrs((function(e){return{as:"input"}})).withConfig({displayName:"Input__StyledInput",componentId:"sc-1l6guh8-0"})(["&{appearance:none;}&:hover{box-shadow:0px 2px 6px rgba(0,0,0,0.3);}&:focus{outline:none;border-color:",';}&:disabled{opacity:0.4;pointer-events:none;}&[type="color"]{min-width:3rem;padding:0;&::-webkit-color-swatch-wrapper{display:flex;align-items:center;justify-content:center;padding:0;}&::-webkit-color-swatch{flex:0 0 auto;height:2rem;width:2rem;border:none;border-radius:100%;}&::-moz-color-swatch{height:2rem;width:2rem;border:none;border-radius:100%;}}.was-validated &{&:valid{border-color:',";}&:valid ~ svg.icon-valid{visibility:visible;color:",";}&:invalid{border-color:",";}&:invalid ~ svg.icon-invalid{visibility:visible;color:",";}}}"],(0,u.R)("colors.primary","#000"),(0,u.R)("colors.success"),(0,u.R)("colors.success"),(0,u.R)("colors.danger"),(0,u.R)("colors.danger")),B=a.ZP.div.withConfig({displayName:"Input__StyledIconWrapper",componentId:"sc-1l6guh8-1"})(["&{position:relative;display:flex;align-items:center;width:100%;}> ","{padding-right:3rem;text-overflow:ellipsis;white-space:no-wrap;}> svg{position:absolute;right:1rem;visibility:hidden;}"],L),D=n.forwardRef((function(e,t){return n.createElement(B,{className:"pipeline-icon-wrapper"},n.createElement(L,j({className:"pipeline-input"},e,{ref:t})),n.createElement(l.Z,_({className:"pipeline-check-circle"},"className","icon-valid")),n.createElement(c.Z,_({className:"pipeline-invalid"},"className","icon-invalid")))})),k=n.forwardRef((function(e,t){return"file"===e.type?n.createElement(P,j({className:"pipeline-file-input"},e,{ref:t})):n.createElement(L,j({},e,{ref:t}))})),S={color:"text",bg:"background",fontSize:"1rem",lineHeight:"initial",height:"3rem",p:3,border:1,borderColor:"moon-gray",borderRadius:1,boxShadow:1};k.WithValidationStyle=D,D.defaultProps=S,L.defaultProps=S,k.defaultProps=S,k.propTypes={theme:i().object},k.displayName="Input";var T=k},8306:function(e,t,r){"use strict";r.d(t,{_:function(){return g}});var n=r(67294),o=r(45697),i=r.n(o),a=r(91288),u=r(56503),l=r(78735);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d(e);if(t){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var g=(0,a.ZP)(l.Z).withConfig({displayName:"Modal__StyledOverlay",componentId:"sc-12s6a2m-0"})(["&{position:fixed;top:0;bottom:0;left:0;right:0;z-index:9999;height:100vh;width:100vw;display:flex;flex-flow:column;place-items:center;place-content:center;}"]);g.defaultProps={bg:"blacks.10",color:"text",fontSize:"2",fontFamily:"sansSerif",p:3};var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,r,o,i=p(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).closeModal=function(e){e.preventDefault(),t.setState((function(e,t){return{isOpen:!1}}))},t.openModal=function(e){e.preventDefault(),t.setState((function(e,t){return{isOpen:!0}}))},t.state={isOpen:t.props.isOpen||!1},t}return t=a,(r=[{key:"render",value:function(){return this.props.isOpen?n.createElement(u.Z,{className:"pipeline-portal"},n.createElement(g,{className:"pipeline-overlay"},this.props.children)):null}}])&&s(t.prototype,r),o&&s(t,o),a}(n.Component);y.defaultProps={isOpen:!1},y.propTypes={isOpen:i().bool},y.displayName="Modal",t.Z=y},56503:function(e,t,r){"use strict";var n=r(67294),o=r(73935),i=r(45697),a=r.n(i),u=r(91856);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function p(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var d=(0,u.j)()?document.body:null,g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(a,e);var t,r,n,i=f(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).el=(0,u.j)()?document.createElement("div"):null,t}return t=a,(r=[{key:"componentDidMount",value:function(){d.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){d.removeChild(this.el)}},{key:"render",value:function(){return(0,u.j)()?o.createPortal(this.props.children,this.el):null}}])&&c(t.prototype,r),n&&c(t,n),a}(n.Component);g.propTypes={children:a().element.isRequired},t.Z=g},66967:function(e,t,r){"use strict";var n=r(67294),o=r(45697),i=r.n(o),a=r(79361),u=r.n(a);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}var c=n.forwardRef((function(e,t){return n.createElement(u(),l({className:"pipeline-qr-code",ref:t},e))}));c.propTypes={value:i().string.isRequired,renderAs:i().oneOf(["canvas","svg"]),size:i().number,bgColor:i().string,fgColor:i().string,level:i().oneOf(["L","M","Q","H"]),includeMargin:i().bool},c.defaultProps={renderAs:"svg",size:128,bgColor:"#FFFFFF",fgColor:"#000000",level:"L",includeMargin:!1},c.displayName="QR",t.Z=c},91856:function(e,t,r){"use strict";r.d(t,{j:function(){return n}});var n=function(){return"undefined"!=typeof window&&"undefined"!=typeof document}},3655:function(e,t,r){var n=r(32792);function o(e){this.mode=n.MODE_8BIT_BYTE,this.data=e}o.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}},e.exports=o},27321:function(e){function t(){this.buffer=new Array,this.length=0}t.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var r=0;r<t;r++)this.putBit(1==(e>>>t-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},49381:function(e){e.exports={L:1,M:0,Q:3,H:2}},32832:function(e,t,r){var n=r(11518);function o(e,t){if(null==e.length)throw new Error(e.length+"/"+t);for(var r=0;r<e.length&&0==e[r];)r++;this.num=new Array(e.length-r+t);for(var n=0;n<e.length-r;n++)this.num[n]=e[n+r]}o.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),r=0;r<this.getLength();r++)for(var i=0;i<e.getLength();i++)t[r+i]^=n.gexp(n.glog(this.get(r))+n.glog(e.get(i)));return new o(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=n.glog(this.get(0))-n.glog(e.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<e.getLength();i++)r[i]^=n.gexp(n.glog(e.get(i))+t);return new o(r,0).mod(e)}},e.exports=o},14450:function(e,t,r){var n=r(3655),o=r(17611),i=r(27321),a=r(93160),u=r(32832);function l(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var c=l.prototype;c.addData=function(e){var t=new n(e);this.dataList.push(t),this.dataCache=null},c.isDark=function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},c.getModuleCount=function(){return this.moduleCount},c.make=function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=o.getRSBlocks(e,this.errorCorrectLevel),r=new i,n=0,u=0;u<t.length;u++)n+=t[u].dataCount;for(u=0;u<this.dataList.length;u++){var l=this.dataList[u];r.put(l.mode,4),r.put(l.getLength(),a.getLengthInBits(l.mode,e)),l.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},c.makeImpl=function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=l.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},c.setupPositionProbePattern=function(e,t){for(var r=-1;r<=7;r++)if(!(e+r<=-1||this.moduleCount<=e+r))for(var n=-1;n<=7;n++)t+n<=-1||this.moduleCount<=t+n||(this.modules[e+r][t+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},c.getBestMaskPattern=function(){for(var e=0,t=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=a.getLostPoint(this);(0==r||e>n)&&(e=n,t=r)}return t},c.createMovieClip=function(e,t,r){var n=e.createEmptyMovieClip(t,r);this.make();for(var o=0;o<this.modules.length;o++)for(var i=1*o,a=0;a<this.modules[o].length;a++){var u=1*a;this.modules[o][a]&&(n.beginFill(0,100),n.moveTo(u,i),n.lineTo(u+1,i),n.lineTo(u+1,i+1),n.lineTo(u,i+1),n.endFill())}return n},c.setupTimingPattern=function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},c.setupPositionAdjustPattern=function(){for(var e=a.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var r=0;r<e.length;r++){var n=e[t],o=e[r];if(null==this.modules[n][o])for(var i=-2;i<=2;i++)for(var u=-2;u<=2;u++)this.modules[n+i][o+u]=-2==i||2==i||-2==u||2==u||0==i&&0==u}},c.setupTypeNumber=function(e){for(var t=a.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!e&&1==(t>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!e&&1==(t>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},c.setupTypeInfo=function(e,t){for(var r=this.errorCorrectLevel<<3|t,n=a.getBCHTypeInfo(r),o=0;o<15;o++){var i=!e&&1==(n>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++){i=!e&&1==(n>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!e},c.mapData=function(e,t){for(var r=-1,n=this.moduleCount-1,o=7,i=0,u=this.moduleCount-1;u>0;u-=2)for(6==u&&u--;;){for(var l=0;l<2;l++)if(null==this.modules[n][u-l]){var c=!1;i<e.length&&(c=1==(e[i]>>>o&1)),a.getMask(t,n,u-l)&&(c=!c),this.modules[n][u-l]=c,-1==--o&&(i++,o=7)}if((n+=r)<0||this.moduleCount<=n){n-=r,r=-r;break}}},l.PAD0=236,l.PAD1=17,l.createData=function(e,t,r){for(var n=o.getRSBlocks(e,t),u=new i,c=0;c<r.length;c++){var s=r[c];u.put(s.mode,4),u.put(s.getLength(),a.getLengthInBits(s.mode,e)),s.write(u)}var f=0;for(c=0;c<n.length;c++)f+=n[c].dataCount;if(u.getLengthInBits()>8*f)throw new Error("code length overflow. ("+u.getLengthInBits()+">"+8*f+")");for(u.getLengthInBits()+4<=8*f&&u.put(0,4);u.getLengthInBits()%8!=0;)u.putBit(!1);for(;!(u.getLengthInBits()>=8*f||(u.put(l.PAD0,8),u.getLengthInBits()>=8*f));)u.put(l.PAD1,8);return l.createBytes(u,n)},l.createBytes=function(e,t){for(var r=0,n=0,o=0,i=new Array(t.length),l=new Array(t.length),c=0;c<t.length;c++){var s=t[c].dataCount,f=t[c].totalCount-s;n=Math.max(n,s),o=Math.max(o,f),i[c]=new Array(s);for(var p=0;p<i[c].length;p++)i[c][p]=255&e.buffer[p+r];r+=s;var h=a.getErrorCorrectPolynomial(f),d=new u(i[c],h.getLength()-1).mod(h);l[c]=new Array(h.getLength()-1);for(p=0;p<l[c].length;p++){var g=p+d.getLength()-l[c].length;l[c][p]=g>=0?d.get(g):0}}var y=0;for(p=0;p<t.length;p++)y+=t[p].totalCount;var v=new Array(y),b=0;for(p=0;p<n;p++)for(c=0;c<t.length;c++)p<i[c].length&&(v[b++]=i[c][p]);for(p=0;p<o;p++)for(c=0;c<t.length;c++)p<l[c].length&&(v[b++]=l[c][p]);return v},e.exports=l},17611:function(e,t,r){var n=r(49381);function o(e,t){this.totalCount=e,this.dataCount=t}o.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o.getRSBlocks=function(e,t){var r=o.getRsBlockTable(e,t);if(null==r)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var n=r.length/3,i=new Array,a=0;a<n;a++)for(var u=r[3*a+0],l=r[3*a+1],c=r[3*a+2],s=0;s<u;s++)i.push(new o(l,c));return i},o.getRsBlockTable=function(e,t){switch(t){case n.L:return o.RS_BLOCK_TABLE[4*(e-1)+0];case n.M:return o.RS_BLOCK_TABLE[4*(e-1)+1];case n.Q:return o.RS_BLOCK_TABLE[4*(e-1)+2];case n.H:return o.RS_BLOCK_TABLE[4*(e-1)+3];default:return}},e.exports=o},11518:function(e){for(var t={glog:function(e){if(e<1)throw new Error("glog("+e+")");return t.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return t.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},r=0;r<8;r++)t.EXP_TABLE[r]=1<<r;for(r=8;r<256;r++)t.EXP_TABLE[r]=t.EXP_TABLE[r-4]^t.EXP_TABLE[r-5]^t.EXP_TABLE[r-6]^t.EXP_TABLE[r-8];for(r=0;r<255;r++)t.LOG_TABLE[t.EXP_TABLE[r]]=r;e.exports=t},32792:function(e){e.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},93160:function(e,t,r){var n=r(32792),o=r(32832),i=r(11518),a=0,u=1,l=2,c=3,s=4,f=5,p=6,h=7,d={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;d.getBCHDigit(t)-d.getBCHDigit(d.G15)>=0;)t^=d.G15<<d.getBCHDigit(t)-d.getBCHDigit(d.G15);return(e<<10|t)^d.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;d.getBCHDigit(t)-d.getBCHDigit(d.G18)>=0;)t^=d.G18<<d.getBCHDigit(t)-d.getBCHDigit(d.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;0!=e;)t++,e>>>=1;return t},getPatternPosition:function(e){return d.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,r){switch(e){case a:return(t+r)%2==0;case u:return t%2==0;case l:return r%3==0;case c:return(t+r)%3==0;case s:return(Math.floor(t/2)+Math.floor(r/3))%2==0;case f:return t*r%2+t*r%3==0;case p:return(t*r%2+t*r%3)%2==0;case h:return(t*r%3+(t+r)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new o([1],0),r=0;r<e;r++)t=t.multiply(new o([1,i.gexp(r)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:case n.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),r=0,n=0;n<t;n++)for(var o=0;o<t;o++){for(var i=0,a=e.isDark(n,o),u=-1;u<=1;u++)if(!(n+u<0||t<=n+u))for(var l=-1;l<=1;l++)o+l<0||t<=o+l||0==u&&0==l||a==e.isDark(n+u,o+l)&&i++;i>5&&(r+=3+i-5)}for(n=0;n<t-1;n++)for(o=0;o<t-1;o++){var c=0;e.isDark(n,o)&&c++,e.isDark(n+1,o)&&c++,e.isDark(n,o+1)&&c++,e.isDark(n+1,o+1)&&c++,0!=c&&4!=c||(r+=3)}for(n=0;n<t;n++)for(o=0;o<t-6;o++)e.isDark(n,o)&&!e.isDark(n,o+1)&&e.isDark(n,o+2)&&e.isDark(n,o+3)&&e.isDark(n,o+4)&&!e.isDark(n,o+5)&&e.isDark(n,o+6)&&(r+=40);for(o=0;o<t;o++)for(n=0;n<t-6;n++)e.isDark(n,o)&&!e.isDark(n+1,o)&&e.isDark(n+2,o)&&e.isDark(n+3,o)&&e.isDark(n+4,o)&&!e.isDark(n+5,o)&&e.isDark(n+6,o)&&(r+=40);var s=0;for(o=0;o<t;o++)for(n=0;n<t;n++)e.isDark(n,o)&&s++;return r+=10*(Math.abs(100*s/t/t-50)/5)}};e.exports=d},79361:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){g(e,t,r[t])}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}function s(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?d(e):t}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=r(67294),v=r(45697),b=r(14450),m=r(49381);function w(e){for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):n<2048?(t+=String.fromCharCode(192|n>>6),t+=String.fromCharCode(128|63&n)):n<55296||n>=57344?(t+=String.fromCharCode(224|n>>12),t+=String.fromCharCode(128|n>>6&63),t+=String.fromCharCode(128|63&n)):(r++,n=65536+((1023&n)<<10|1023&e.charCodeAt(r)),t+=String.fromCharCode(240|n>>18),t+=String.fromCharCode(128|n>>12&63),t+=String.fromCharCode(128|n>>6&63),t+=String.fromCharCode(128|63&n))}return t}var O={size:128,level:"L",bgColor:"#FFFFFF",fgColor:"#000000",includeMargin:!1},C={value:v.string.isRequired,size:v.number,level:v.oneOf(["L","M","Q","H"]),bgColor:v.string,fgColor:v.string,includeMargin:v.bool};function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=[];return e.forEach((function(e,n){var o=null;e.forEach((function(i,a){if(!i&&null!==o)return r.push("M".concat(o+t," ").concat(n+t,"h").concat(a-o,"v1H").concat(o+t,"z")),void(o=null);if(a!==e.length-1)i&&null===o&&(o=a);else{if(!i)return;null===o?r.push("M".concat(a+t,",").concat(n+t," h1v1H").concat(a+t,"z")):r.push("M".concat(o+t,",").concat(n+t," h").concat(a+1-o,"v1H").concat(o+t,"z"))}}))})),r.join("")}var E=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}(),_=function(e){function t(){var e,r;u(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return g(d(d(r=s(this,(e=f(t)).call.apply(e,[this].concat(o))))),"_canvas",void 0),r}return p(t,e),c(t,[{key:"componentDidMount",value:function(){this.update()}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"update",value:function(){var e=this.props,t=e.value,r=e.size,n=e.level,o=e.bgColor,i=e.fgColor,a=e.includeMargin,u=new b(-1,m[n]);if(u.addData(w(t)),u.make(),null!=this._canvas){var l=this._canvas,c=l.getContext("2d");if(!c)return;var s=u.modules;if(null===s)return;var f=a?4:0,p=s.length+2*f,h=window.devicePixelRatio||1;l.height=l.width=r*h;var d=r/p*h;c.scale(d,d),c.fillStyle=o,c.fillRect(0,0,p,p),c.fillStyle=i,E?c.fill(new Path2D(P(s,f))):s.forEach((function(e,t){e.forEach((function(e,r){e&&c.fillRect(r+f,t+f,1,1)}))}))}}},{key:"render",value:function(){var e=this,t=this.props,r=(t.value,t.size),n=(t.level,t.bgColor,t.fgColor,t.style),u=(t.includeMargin,a(t,["value","size","level","bgColor","fgColor","style","includeMargin"])),l=i({height:r,width:r},n);return y.createElement("canvas",o({style:l,height:r,width:r,ref:function(t){return e._canvas=t}},u))}}]),t}(y.PureComponent);g(_,"defaultProps",O),g(_,"propTypes",C);var j=function(e){function t(){return u(this,t),s(this,f(t).apply(this,arguments))}return p(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.value,r=e.size,n=e.level,i=e.bgColor,u=e.fgColor,l=e.includeMargin,c=a(e,["value","size","level","bgColor","fgColor","includeMargin"]),s=new b(-1,m[n]);s.addData(w(t)),s.make();var f=s.modules;if(null===f)return null;var p=l?4:0,h=P(f,p),d=f.length+2*p;return y.createElement("svg",o({shapeRendering:"crispEdges",height:r,width:r,viewBox:"0 0 ".concat(d," ").concat(d)},c),y.createElement("path",{fill:i,d:"M0,0 h".concat(d,"v").concat(d,"H0z")}),y.createElement("path",{fill:u,d:h}))}}]),t}(y.PureComponent);g(j,"defaultProps",O),g(j,"propTypes",C);var L=function(e){var t=e.renderAs,r=a(e,["renderAs"]),n="svg"===t?j:_;return y.createElement(n,r)};L.defaultProps=i({renderAs:"canvas"},O),e.exports=L}}]);