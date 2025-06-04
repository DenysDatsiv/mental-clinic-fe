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
  ɵɵclassMap,
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

// node_modules/primeng/fesm2022/primeng-avatargroup.mjs
var _c0 = ["*"];
var _AvatarGroup = class _AvatarGroup {
  constructor() {
    /**
     * Style class of the component
     * @group Props
     */
    __publicField(this, "styleClass");
    /**
     * Inline style of the component.
     * @group Props
     */
    __publicField(this, "style");
  }
};
__publicField(_AvatarGroup, "ɵfac", function AvatarGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AvatarGroup)();
});
__publicField(_AvatarGroup, "ɵcmp", ɵɵdefineComponent({
  type: _AvatarGroup,
  selectors: [["p-avatarGroup"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    styleClass: "styleClass",
    style: "style"
  },
  ngContentSelectors: _c0,
  decls: 2,
  vars: 4,
  consts: [[3, "ngClass", "ngStyle"]],
  template: function AvatarGroup_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", "p-avatar-group p-component")("ngStyle", ctx.style);
    }
  },
  dependencies: [NgClass, NgStyle],
  styles: ["@layer primeng{.p-avatar-group p-avatar+p-avatar{margin-left:-1rem}.p-avatar-group{display:flex;align-items:center}}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var AvatarGroup = _AvatarGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarGroup, [{
    type: Component,
    args: [{
      selector: "p-avatarGroup",
      template: '\n        <div [ngClass]="\'p-avatar-group p-component\'" [class]="styleClass" [ngStyle]="style">\n            <ng-content></ng-content>\n        </div>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-avatar-group p-avatar+p-avatar{margin-left:-1rem}.p-avatar-group{display:flex;align-items:center}}\n"]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }]
  });
})();
var _AvatarGroupModule = class _AvatarGroupModule {
};
__publicField(_AvatarGroupModule, "ɵfac", function AvatarGroupModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AvatarGroupModule)();
});
__publicField(_AvatarGroupModule, "ɵmod", ɵɵdefineNgModule({
  type: _AvatarGroupModule,
  declarations: [AvatarGroup],
  imports: [CommonModule],
  exports: [AvatarGroup]
}));
__publicField(_AvatarGroupModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule]
}));
var AvatarGroupModule = _AvatarGroupModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarGroupModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [AvatarGroup],
      declarations: [AvatarGroup]
    }]
  }], null, null);
})();
export {
  AvatarGroup,
  AvatarGroupModule
};
//# sourceMappingURL=primeng_avatargroup.js.map
