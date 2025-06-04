import {
  SharedModule
} from "./chunk-ZROJCIWL.js";
import "./chunk-U3NLM53U.js";
import {
  CommonModule,
  NgClass
} from "./chunk-KUZ63KOD.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-inputicon.mjs
var _c0 = ["*"];
var _InputIcon = class _InputIcon {
  constructor() {
    /**
     * Style class of the element.
     * @group Props
     */
    __publicField(this, "styleClass");
  }
};
__publicField(_InputIcon, "ɵfac", function InputIcon_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputIcon)();
});
__publicField(_InputIcon, "ɵcmp", ɵɵdefineComponent({
  type: _InputIcon,
  selectors: [["p-inputIcon"]],
  inputs: {
    styleClass: "styleClass"
  },
  ngContentSelectors: _c0,
  decls: 2,
  vars: 1,
  consts: [[1, "p-input-icon", 3, "ngClass"]],
  template: function InputIcon_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "span", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.styleClass);
    }
  },
  dependencies: [NgClass],
  styles: ["@layer primeng{.p-fluid .p-icon-field-left,.p-fluid .p-icon-field-right{width:100%}}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var InputIcon = _InputIcon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputIcon, [{
    type: Component,
    args: [{
      selector: "p-inputIcon",
      template: '<span class="p-input-icon" [ngClass]="styleClass"><ng-content></ng-content></span>',
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ["@layer primeng{.p-fluid .p-icon-field-left,.p-fluid .p-icon-field-right{width:100%}}\n"]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }]
  });
})();
var _InputIconModule = class _InputIconModule {
};
__publicField(_InputIconModule, "ɵfac", function InputIconModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputIconModule)();
});
__publicField(_InputIconModule, "ɵmod", ɵɵdefineNgModule({
  type: _InputIconModule,
  declarations: [InputIcon],
  imports: [CommonModule],
  exports: [InputIcon, SharedModule]
}));
__publicField(_InputIconModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, SharedModule]
}));
var InputIconModule = _InputIconModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputIconModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [InputIcon, SharedModule],
      declarations: [InputIcon]
    }]
  }], null, null);
})();
export {
  InputIcon,
  InputIconModule
};
//# sourceMappingURL=primeng_inputicon.js.map
