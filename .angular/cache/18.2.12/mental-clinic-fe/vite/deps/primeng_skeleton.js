import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-KUZ63KOD.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField,
  __spreadProps,
  __spreadValues
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-skeleton.mjs
var _Skeleton = class _Skeleton {
  constructor() {
    /**
     * Class of the element.
     * @group Props
     */
    __publicField(this, "styleClass");
    /**
     * Inline style of the element.
     * @group Props
     */
    __publicField(this, "style");
    /**
     * Shape of the element.
     * @group Props
     */
    __publicField(this, "shape", "rectangle");
    /**
     * Type of the animation.
     * @gruop Props
     */
    __publicField(this, "animation", "wave");
    /**
     * Border radius of the element, defaults to value from theme.
     * @group Props
     */
    __publicField(this, "borderRadius");
    /**
     * Size of the skeleton.
     * @group Props
     */
    __publicField(this, "size");
    /**
     * Width of the element.
     * @group Props
     */
    __publicField(this, "width", "100%");
    /**
     * Height of the element.
     * @group Props
     */
    __publicField(this, "height", "1rem");
  }
  containerClass() {
    return {
      "p-skeleton p-component": true,
      "p-skeleton-circle": this.shape === "circle",
      "p-skeleton-none": this.animation === "none"
    };
  }
  get containerStyle() {
    if (this.size) return __spreadProps(__spreadValues({}, this.style), {
      width: this.size,
      height: this.size,
      borderRadius: this.borderRadius
    });
    else return __spreadValues({
      width: this.width,
      height: this.height,
      borderRadius: this.borderRadius
    }, this.style);
  }
};
__publicField(_Skeleton, "ɵfac", function Skeleton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Skeleton)();
});
__publicField(_Skeleton, "ɵcmp", ɵɵdefineComponent({
  type: _Skeleton,
  selectors: [["p-skeleton"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    styleClass: "styleClass",
    style: "style",
    shape: "shape",
    animation: "animation",
    borderRadius: "borderRadius",
    size: "size",
    width: "width",
    height: "height"
  },
  decls: 1,
  vars: 7,
  consts: [[3, "ngClass", "ngStyle"]],
  template: function Skeleton_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.containerStyle);
      ɵɵattribute("data-pc-name", "skeleton")("aria-hidden", true)("data-pc-section", "root");
    }
  },
  dependencies: [NgClass, NgStyle],
  styles: ['@layer primeng{.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:"";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n'],
  encapsulation: 2,
  changeDetection: 0
}));
var Skeleton = _Skeleton;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Skeleton, [{
    type: Component,
    args: [{
      selector: "p-skeleton",
      template: ' <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="containerStyle" [attr.data-pc-name]="\'skeleton\'" [attr.aria-hidden]="true" [attr.data-pc-section]="\'root\'"></div> ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ['@layer primeng{.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:"";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n']
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    shape: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    borderRadius: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }]
  });
})();
var _SkeletonModule = class _SkeletonModule {
};
__publicField(_SkeletonModule, "ɵfac", function SkeletonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SkeletonModule)();
});
__publicField(_SkeletonModule, "ɵmod", ɵɵdefineNgModule({
  type: _SkeletonModule,
  declarations: [Skeleton],
  imports: [CommonModule],
  exports: [Skeleton]
}));
__publicField(_SkeletonModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule]
}));
var SkeletonModule = _SkeletonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Skeleton],
      declarations: [Skeleton]
    }]
  }], null, null);
})();
export {
  Skeleton,
  SkeletonModule
};
//# sourceMappingURL=primeng_skeleton.js.map
