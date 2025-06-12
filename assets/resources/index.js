System.register("chunks:///_virtual/index.ts",["cc"],(function(n){"use strict";var r,e,t,o;return{setters:[function(n){r=n.cclegacy,e=n.Node,t=n.UITransform,o=n.Layers}],execute:function(){r._RF.push({},"23180hDuGVD27OgmhTbJSiM","index",void 0);n("createUINode",(function(n){void 0===n&&(n=" ");var r=new e(n);return r.addComponent(t).setAnchorPoint(0,1),r.layer=1<<o.nameToLayer("UI_2D"),r})),n("randomByLen",(function(n){return Array.from({length:n}).reduce((function(n,r){return n+Math.floor(10*Math.random())}),"")})),n("randomByRange",(function(n,r){return Math.floor(n+(r-n)*Math.random())}));var a=/\((\d+)\)/,u=function(n){return parseInt(n.match(a)[1]||"0")};n("sortSpriteFrame",(function(n){return n.sort((function(n,r){return u(n.name)-u(r.name)}))}));r._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./index.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});