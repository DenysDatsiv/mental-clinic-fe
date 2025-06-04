import {
  SharedModule
} from "./chunk-ZROJCIWL.js";
import "./chunk-U3NLM53U.js";
import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-KUZ63KOD.js";
import {
  Component,
  Input,
  NgModule,
  setClassMetadata,
  ɵɵattribute,
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

// node_modules/primeng/fesm2022/primeng-inputgroupaddon.mjs
var _c0 = ["*"];
var _InputGroupAddon = class _InputGroupAddon {
  constructor() {
    /**
     * Inline style of the element.
     * @group Props
     */
    __publicField(this, "style");
    /**
     * Class of the element.
     * @group Props
     */
    __publicField(this, "styleClass");
  }
};
__publicField(_InputGroupAddon, "ɵfac", function InputGroupAddon_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputGroupAddon)();
});
__publicField(_InputGroupAddon, "ɵcmp", ɵɵdefineComponent({
  type: _InputGroupAddon,
  selectors: [["p-inputGroupAddon"]],
  hostAttrs: [1, "p-element", "p-inputgroup-addon"],
  inputs: {
    style: "style",
    styleClass: "styleClass"
  },
  ngContentSelectors: _c0,
  decls: 2,
  vars: 3,
  consts: [[3, "ngClass", "ngStyle"]],
  template: function InputGroupAddon_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.styleClass)("ngStyle", ctx.style);
      ɵɵattribute("data-pc-name", "inputgroupaddon");
    }
  },
  dependencies: [NgClass, NgStyle],
  encapsulation: 2
}));
var InputGroupAddon = _InputGroupAddon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddon, [{
    type: Component,
    args: [{
      selector: "p-inputGroupAddon",
      template: '\n        <div [attr.data-pc-name]="\'inputgroupaddon\'" [ngClass]="styleClass" [ngStyle]="style">\n            <ng-content></ng-content>\n        </div>\n    ',
      host: {
        class: "p-element p-inputgroup-addon"
      }
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }]
  });
})();
var _InputGroupAddonModule = class _InputGroupAddonModule {
};
__publicField(_InputGroupAddonModule, "ɵfac", function InputGroupAddonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputGroupAddonModule)();
});
__publicField(_InputGroupAddonModule, "ɵmod", ɵɵdefineNgModule({
  type: _InputGroupAddonModule,
  declarations: [InputGroupAddon],
  imports: [CommonModule],
  exports: [InputGroupAddon, SharedModule]
}));
__publicField(_InputGroupAddonModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, SharedModule]
}));
var InputGroupAddonModule = _InputGroupAddonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [InputGroupAddon, SharedModule],
      declarations: [InputGroupAddon]
    }]
  }], null, null);
})();
export {
  InputGroupAddon,
  InputGroupAddonModule
};
//# sourceMappingURL=primeng_inputgroupaddon.js.map
