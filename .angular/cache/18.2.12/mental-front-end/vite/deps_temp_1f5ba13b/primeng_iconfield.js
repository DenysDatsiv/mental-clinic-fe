import {
  SharedModule
} from "./chunk-TQSVMJ6K.js";
import "./chunk-3OF44R55.js";
import {
  CommonModule,
  NgClass
} from "./chunk-UBZYO7FG.js";
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
} from "./chunk-ZI2Q76R4.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import "./chunk-3OV72XIM.js";

// node_modules/primeng/fesm2022/primeng-iconfield.mjs
var _c0 = ["*"];
var IconField = class _IconField {
  /**
   * Position of the icon.
   * @group Props
   */
  iconPosition = "left";
  get containerClass() {
    return {
      "p-icon-field-left": this.iconPosition === "left",
      "p-icon-field-right": this.iconPosition === "right"
    };
  }
  static ɵfac = function IconField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconField)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _IconField,
    selectors: [["p-iconField"]],
    inputs: {
      iconPosition: "iconPosition"
    },
    ngContentSelectors: _c0,
    decls: 2,
    vars: 1,
    consts: [[1, "p-icon-field", 3, "ngClass"]],
    template: function IconField_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "span", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ctx.containerClass);
      }
    },
    dependencies: [NgClass],
    styles: ["@layer primeng{.p-icon-field{position:relative}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconField, [{
    type: Component,
    args: [{
      selector: "p-iconField",
      template: ` <span class="p-icon-field" [ngClass]="containerClass"><ng-content></ng-content> </span>`,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ["@layer primeng{.p-icon-field{position:relative}}\n"]
    }]
  }], null, {
    iconPosition: [{
      type: Input
    }]
  });
})();
var IconFieldModule = class _IconFieldModule {
  static ɵfac = function IconFieldModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconFieldModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _IconFieldModule,
    declarations: [IconField],
    imports: [CommonModule],
    exports: [IconField, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconFieldModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [IconField, SharedModule],
      declarations: [IconField]
    }]
  }], null, null);
})();
export {
  IconField,
  IconFieldModule
};
//# sourceMappingURL=primeng_iconfield.js.map
