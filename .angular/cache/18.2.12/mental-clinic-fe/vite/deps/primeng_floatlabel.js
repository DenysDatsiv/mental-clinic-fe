import {
  RouterModule
} from "./chunk-JBMGT7BE.js";
import {
  SharedModule
} from "./chunk-ZROJCIWL.js";
import "./chunk-U3NLM53U.js";
import "./chunk-MWP4G2UW.js";
import "./chunk-RWZD3TDV.js";
import {
  CommonModule
} from "./chunk-KUZ63KOD.js";
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-floatlabel.mjs
var _c0 = ["*"];
var _FloatLabel = class _FloatLabel {
};
__publicField(_FloatLabel, "ɵfac", function FloatLabel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FloatLabel)();
});
__publicField(_FloatLabel, "ɵcmp", ɵɵdefineComponent({
  type: _FloatLabel,
  selectors: [["p-floatLabel"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "p-float-label"]],
  template: function FloatLabel_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "span", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
  },
  encapsulation: 2,
  changeDetection: 0
}));
var FloatLabel = _FloatLabel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatLabel, [{
    type: Component,
    args: [{
      selector: "p-floatLabel",
      template: '\n        <span class="p-float-label">\n            <ng-content></ng-content>\n        </span>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, null);
})();
var _FloatLabelModule = class _FloatLabelModule {
};
__publicField(_FloatLabelModule, "ɵfac", function FloatLabelModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FloatLabelModule)();
});
__publicField(_FloatLabelModule, "ɵmod", ɵɵdefineNgModule({
  type: _FloatLabelModule,
  declarations: [FloatLabel],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [FloatLabel, SharedModule]
}));
__publicField(_FloatLabelModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, SharedModule, RouterModule, SharedModule]
}));
var FloatLabelModule = _FloatLabelModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatLabelModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, RouterModule],
      exports: [FloatLabel, SharedModule],
      declarations: [FloatLabel]
    }]
  }], null, null);
})();
export {
  FloatLabel,
  FloatLabelModule
};
//# sourceMappingURL=primeng_floatlabel.js.map
