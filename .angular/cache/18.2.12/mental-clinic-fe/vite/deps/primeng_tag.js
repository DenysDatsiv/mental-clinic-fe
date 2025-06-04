import {
  PrimeTemplate,
  SharedModule
} from "./chunk-ZROJCIWL.js";
import "./chunk-U3NLM53U.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-KUZ63KOD.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  NgModule,
  ViewEncapsulation$1,
  booleanAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-tag.mjs
var _c0 = ["*"];
function Tag_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r0.icon);
  }
}
function Tag_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Tag_ng_container_2_span_1_Template, 1, 1, "span", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.icon);
  }
}
function Tag_span_3_1_ng_template_0_Template(rf, ctx) {
}
function Tag_span_3_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Tag_span_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tag_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtemplate(1, Tag_span_3_1_Template, 1, 0, null, 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.iconTemplate);
  }
}
var _Tag = class _Tag {
  constructor(cd) {
    __publicField(this, "cd");
    /**
     * Style class of the component.
     * @group Props
     */
    __publicField(this, "styleClass");
    /**
     * Severity type of the tag.
     * @group Props
     */
    __publicField(this, "severity");
    /**
     * Value to display inside the tag.
     * @group Props
     */
    __publicField(this, "value");
    /**
     * Icon of the tag to display next to the value.
     * @group Props
     */
    __publicField(this, "icon");
    /**
     * Whether the corners of the tag are rounded.
     * @group Props
     */
    __publicField(this, "rounded");
    __publicField(this, "templates");
    __publicField(this, "iconTemplate");
    __publicField(this, "_style");
    this.cd = cd;
  }
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
    this.cd.markForCheck();
  }
  ngAfterContentInit() {
    var _a;
    (_a = this.templates) == null ? void 0 : _a.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this.iconTemplate = item.template;
          break;
      }
    });
  }
  containerClass() {
    return {
      "p-tag p-component": true,
      ["p-tag-".concat(this.severity)]: this.severity,
      "p-tag-rounded": this.rounded
    };
  }
};
__publicField(_Tag, "ɵfac", function Tag_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tag)(ɵɵdirectiveInject(ChangeDetectorRef));
});
__publicField(_Tag, "ɵcmp", ɵɵdefineComponent({
  type: _Tag,
  selectors: [["p-tag"]],
  contentQueries: function Tag_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    style: "style",
    styleClass: "styleClass",
    severity: "severity",
    value: "value",
    icon: "icon",
    rounded: [2, "rounded", "rounded", booleanAttribute]
  },
  features: [ɵɵInputTransformsFeature],
  ngContentSelectors: _c0,
  decls: 6,
  vars: 7,
  consts: [[3, "ngClass", "ngStyle"], [4, "ngIf"], ["class", "p-tag-icon", 4, "ngIf"], [1, "p-tag-value"], ["class", "p-tag-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tag-icon", 3, "ngClass"], [1, "p-tag-icon"], [4, "ngTemplateOutlet"]],
  template: function Tag_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "span", 0);
      ɵɵprojection(1);
      ɵɵtemplate(2, Tag_ng_container_2_Template, 2, 1, "ng-container", 1)(3, Tag_span_3_Template, 2, 1, "span", 2);
      ɵɵelementStart(4, "span", 3);
      ɵɵtext(5);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !ctx.iconTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconTemplate);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.value);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
  styles: ["@layer primeng{.p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var Tag = _Tag;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tag, [{
    type: Component,
    args: [{
      selector: "p-tag",
      template: '\n        <span [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">\n            <ng-content></ng-content>\n            <ng-container *ngIf="!iconTemplate">\n                <span class="p-tag-icon" [ngClass]="icon" *ngIf="icon"></span>\n            </ng-container>\n            <span class="p-tag-icon" *ngIf="iconTemplate">\n                <ng-template *ngTemplateOutlet="iconTemplate"></ng-template>\n            </span>\n            <span class="p-tag-value">{{ value }}</span>\n        </span>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var _TagModule = class _TagModule {
};
__publicField(_TagModule, "ɵfac", function TagModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TagModule)();
});
__publicField(_TagModule, "ɵmod", ɵɵdefineNgModule({
  type: _TagModule,
  declarations: [Tag],
  imports: [CommonModule, SharedModule],
  exports: [Tag, SharedModule]
}));
__publicField(_TagModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, SharedModule, SharedModule]
}));
var TagModule = _TagModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule],
      exports: [Tag, SharedModule],
      declarations: [Tag]
    }]
  }], null, null);
})();
export {
  Tag,
  TagModule
};
//# sourceMappingURL=primeng_tag.js.map
