import {
  ObjectUtils
} from "./chunk-U3NLM53U.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation$1,
  booleanAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-R75KKECJ.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-baseicon.mjs
var _c0 = ["*"];
var _BaseIcon = class _BaseIcon {
  constructor() {
    __publicField(this, "label");
    __publicField(this, "spin", false);
    __publicField(this, "styleClass");
    __publicField(this, "role");
    __publicField(this, "ariaLabel");
    __publicField(this, "ariaHidden");
  }
  ngOnInit() {
    this.getAttributes();
  }
  getAttributes() {
    const isLabelEmpty = ObjectUtils.isEmpty(this.label);
    this.role = !isLabelEmpty ? "img" : void 0;
    this.ariaLabel = !isLabelEmpty ? this.label : void 0;
    this.ariaHidden = isLabelEmpty;
  }
  getClassNames() {
    return "p-icon ".concat(this.styleClass ? this.styleClass + " " : "").concat(this.spin ? "p-icon-spin" : "");
  }
};
__publicField(_BaseIcon, "ɵfac", function BaseIcon_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BaseIcon)();
});
__publicField(_BaseIcon, "ɵcmp", ɵɵdefineComponent({
  type: _BaseIcon,
  selectors: [["ng-component"]],
  hostAttrs: [1, "p-element", "p-icon-wrapper"],
  inputs: {
    label: "label",
    spin: [2, "spin", "spin", booleanAttribute],
    styleClass: "styleClass"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function BaseIcon_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
}));
var BaseIcon = _BaseIcon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseIcon, [{
    type: Component,
    args: [{
      template: " <ng-content></ng-content> ",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element p-icon-wrapper"
      }
    }]
  }], null, {
    label: [{
      type: Input
    }],
    spin: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }]
  });
})();

export {
  BaseIcon
};
//# sourceMappingURL=chunk-BJLZ3T2F.js.map
