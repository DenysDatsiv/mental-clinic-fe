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

// node_modules/primeng/fesm2022/primeng-inputgroup.mjs
var _c0 = ["*"];
var _InputGroup = class _InputGroup {
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
__publicField(_InputGroup, "ɵfac", function InputGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputGroup)();
});
__publicField(_InputGroup, "ɵcmp", ɵɵdefineComponent({
  type: _InputGroup,
  selectors: [["p-inputGroup"]],
  hostAttrs: [1, "p-element", "p-inputgroup"],
  inputs: {
    style: "style",
    styleClass: "styleClass"
  },
  ngContentSelectors: _c0,
  decls: 2,
  vars: 3,
  consts: [[1, "p-inputgroup", 3, "ngClass", "ngStyle"]],
  template: function InputGroup_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.styleClass)("ngStyle", ctx.style);
      ɵɵattribute("data-pc-name", "inputgroup");
    }
  },
  dependencies: [NgClass, NgStyle],
  encapsulation: 2
}));
var InputGroup = _InputGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroup, [{
    type: Component,
    args: [{
      selector: "p-inputGroup",
      template: '\n        <div class="p-inputgroup" [attr.data-pc-name]="\'inputgroup\'" [ngClass]="styleClass" [ngStyle]="style">\n            <ng-content></ng-content>\n        </div>\n    ',
      host: {
        class: "p-element p-inputgroup"
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
var _InputGroupModule = class _InputGroupModule {
};
__publicField(_InputGroupModule, "ɵfac", function InputGroupModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputGroupModule)();
});
__publicField(_InputGroupModule, "ɵmod", ɵɵdefineNgModule({
  type: _InputGroupModule,
  declarations: [InputGroup],
  imports: [CommonModule],
  exports: [InputGroup, SharedModule]
}));
__publicField(_InputGroupModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, SharedModule]
}));
var InputGroupModule = _InputGroupModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [InputGroup, SharedModule],
      declarations: [InputGroup]
    }]
  }], null, null);
})();
export {
  InputGroup,
  InputGroupModule
};
//# sourceMappingURL=primeng_inputgroup.js.map
