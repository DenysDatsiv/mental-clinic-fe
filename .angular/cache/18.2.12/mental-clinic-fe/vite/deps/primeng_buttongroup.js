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

// node_modules/primeng/fesm2022/primeng-buttongroup.mjs
var _c0 = ["*"];
var _ButtonGroup = class _ButtonGroup {
};
__publicField(_ButtonGroup, "ɵfac", function ButtonGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ButtonGroup)();
});
__publicField(_ButtonGroup, "ɵcmp", ɵɵdefineComponent({
  type: _ButtonGroup,
  selectors: [["p-buttonGroup"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [["role", "group", 1, "p-button-group", "p-component"]],
  template: function ButtonGroup_Template(rf, ctx) {
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
var ButtonGroup = _ButtonGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroup, [{
    type: Component,
    args: [{
      selector: "p-buttonGroup",
      template: '\n        <span class="p-button-group p-component" role="group">\n            <ng-content></ng-content>\n        </span>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, null);
})();
var _ButtonGroupModule = class _ButtonGroupModule {
};
__publicField(_ButtonGroupModule, "ɵfac", function ButtonGroupModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ButtonGroupModule)();
});
__publicField(_ButtonGroupModule, "ɵmod", ɵɵdefineNgModule({
  type: _ButtonGroupModule,
  declarations: [ButtonGroup],
  imports: [CommonModule],
  exports: [ButtonGroup]
}));
__publicField(_ButtonGroupModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule]
}));
var ButtonGroupModule = _ButtonGroupModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [ButtonGroup],
      declarations: [ButtonGroup]
    }]
  }], null, null);
})();
export {
  ButtonGroup,
  ButtonGroupModule
};
//# sourceMappingURL=primeng_buttongroup.js.map
