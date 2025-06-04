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
  Component,
  ContentChildren,
  ElementRef,
  Input,
  NgModule,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-toolbar.mjs
var _c0 = ["*"];
function Toolbar_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Toolbar_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtemplate(1, Toolbar_div_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "start");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.startTemplate);
  }
}
function Toolbar_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Toolbar_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, Toolbar_div_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "center");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.centerTemplate);
  }
}
function Toolbar_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Toolbar_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, Toolbar_div_4_ng_container_1_Template, 1, 0, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "end");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.endTemplate);
  }
}
var _Toolbar = class _Toolbar {
  constructor(el) {
    __publicField(this, "el");
    /**
     * Inline style of the component.
     * @group Props
     */
    __publicField(this, "style");
    /**
     * Style class of the component.
     * @group Props
     */
    __publicField(this, "styleClass");
    /**
     * Defines a string value that labels an interactive element.
     * @group Props
     */
    __publicField(this, "ariaLabelledBy");
    __publicField(this, "templates");
    __publicField(this, "startTemplate");
    __publicField(this, "endTemplate");
    __publicField(this, "centerTemplate");
    this.el = el;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "start":
        case "left":
          this.startTemplate = item.template;
          break;
        case "end":
        case "right":
          this.endTemplate = item.template;
          break;
        case "center":
          this.centerTemplate = item.template;
          break;
      }
    });
  }
};
__publicField(_Toolbar, "ɵfac", function Toolbar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Toolbar)(ɵɵdirectiveInject(ElementRef));
});
__publicField(_Toolbar, "ɵcmp", ɵɵdefineComponent({
  type: _Toolbar,
  selectors: [["p-toolbar"]],
  contentQueries: function Toolbar_ContentQueries(rf, ctx, dirIndex) {
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
    ariaLabelledBy: "ariaLabelledBy"
  },
  ngContentSelectors: _c0,
  decls: 5,
  vars: 9,
  consts: [["role", "toolbar", 3, "ngClass", "ngStyle"], ["class", "p-toolbar-group-left p-toolbar-group-start", 4, "ngIf"], ["class", "p-toolbar-group-center", 4, "ngIf"], ["class", "p-toolbar-group-right p-toolbar-group-end", 4, "ngIf"], [1, "p-toolbar-group-left", "p-toolbar-group-start"], [4, "ngTemplateOutlet"], [1, "p-toolbar-group-center"], [1, "p-toolbar-group-right", "p-toolbar-group-end"]],
  template: function Toolbar_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵtemplate(2, Toolbar_div_2_Template, 2, 2, "div", 1)(3, Toolbar_div_3_Template, 2, 2, "div", 2)(4, Toolbar_div_4_Template, 2, 2, "div", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", "p-toolbar p-component")("ngStyle", ctx.style);
      ɵɵattribute("aria-labelledby", ctx.ariaLabelledBy)("data-pc-name", "toolbar");
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.startTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.centerTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.endTemplate);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
  styles: ["@layer primeng{.p-toolbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.p-toolbar-group-start,.p-toolbar-group-center,.p-toolbar-group-end,.p-toolbar-group-left,.p-toolbar-group-right{display:flex;align-items:center}}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var Toolbar = _Toolbar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toolbar, [{
    type: Component,
    args: [{
      selector: "p-toolbar",
      template: '\n        <div [ngClass]="\'p-toolbar p-component\'" [attr.aria-labelledby]="ariaLabelledBy" [ngStyle]="style" [class]="styleClass" role="toolbar" [attr.data-pc-name]="\'toolbar\'">\n            <ng-content></ng-content>\n            <div class="p-toolbar-group-left p-toolbar-group-start" *ngIf="startTemplate" [attr.data-pc-section]="\'start\'">\n                <ng-container *ngTemplateOutlet="startTemplate"></ng-container>\n            </div>\n            <div class="p-toolbar-group-center" *ngIf="centerTemplate" [attr.data-pc-section]="\'center\'">\n                <ng-container *ngTemplateOutlet="centerTemplate"></ng-container>\n            </div>\n            <div class="p-toolbar-group-right p-toolbar-group-end" *ngIf="endTemplate" [attr.data-pc-section]="\'end\'">\n                <ng-container *ngTemplateOutlet="endTemplate"></ng-container>\n            </div>\n        </div>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-toolbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.p-toolbar-group-start,.p-toolbar-group-center,.p-toolbar-group-end,.p-toolbar-group-left,.p-toolbar-group-right{display:flex;align-items:center}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var _ToolbarModule = class _ToolbarModule {
};
__publicField(_ToolbarModule, "ɵfac", function ToolbarModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToolbarModule)();
});
__publicField(_ToolbarModule, "ɵmod", ɵɵdefineNgModule({
  type: _ToolbarModule,
  declarations: [Toolbar],
  imports: [CommonModule, SharedModule],
  exports: [Toolbar, SharedModule]
}));
__publicField(_ToolbarModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, SharedModule, SharedModule]
}));
var ToolbarModule = _ToolbarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule],
      exports: [Toolbar, SharedModule],
      declarations: [Toolbar]
    }]
  }], null, null);
})();
export {
  Toolbar,
  ToolbarModule
};
//# sourceMappingURL=primeng_toolbar.js.map
