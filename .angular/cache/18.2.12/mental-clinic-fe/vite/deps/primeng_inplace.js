import {
  ButtonDirective,
  ButtonModule
} from "./chunk-ZLJ4QAH5.js";
import "./chunk-VYCWYYRS.js";
import {
  TimesIcon
} from "./chunk-AP6UZX4B.js";
import "./chunk-MUJBADSC.js";
import "./chunk-LND2F6FW.js";
import "./chunk-BJLZ3T2F.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-ZROJCIWL.js";
import "./chunk-U3NLM53U.js";
import "./chunk-LB42WWNC.js";
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
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewEncapsulation$1,
  booleanAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-inplace.mjs
var _c0 = ["*"];
var _c1 = [[["", "pInplaceDisplay", ""]], [["", "pInplaceContent", ""]]];
var _c2 = ["[pInplaceDisplay]", "[pInplaceContent]"];
var _c3 = (a0) => ({
  "p-inplace p-component": true,
  "p-inplace-closable": a0
});
var _c4 = (a0) => ({
  "p-disabled": a0
});
function Inplace_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Inplace_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵlistener("click", function Inplace_div_1_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onActivateClick($event));
    })("keydown", function Inplace_div_1_Template_div_keydown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKeydown($event));
    });
    ɵɵprojection(1);
    ɵɵtemplate(2, Inplace_div_1_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c4, ctx_r1.disabled));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.displayTemplate);
  }
}
function Inplace_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Inplace_div_2_ng_container_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function Inplace_div_2_ng_container_3_button_1_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onDeactivateClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("icon", ctx_r1.closeIcon);
    ɵɵattribute("aria-label", ctx_r1.closeAriaLabel);
  }
}
function Inplace_div_2_ng_container_3_button_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesIcon");
  }
}
function Inplace_div_2_ng_container_3_button_2_2_ng_template_0_Template(rf, ctx) {
}
function Inplace_div_2_ng_container_3_button_2_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Inplace_div_2_ng_container_3_button_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Inplace_div_2_ng_container_3_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function Inplace_div_2_ng_container_3_button_2_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onDeactivateClick($event));
    });
    ɵɵtemplate(1, Inplace_div_2_ng_container_3_button_2_TimesIcon_1_Template, 1, 0, "TimesIcon", 6)(2, Inplace_div_2_ng_container_3_button_2_2_Template, 1, 0, null, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", "p-button-icon-only");
    ɵɵattribute("aria-label", ctx_r1.closeAriaLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.closeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.closeIconTemplate);
  }
}
function Inplace_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Inplace_div_2_ng_container_3_button_1_Template, 1, 2, "button", 7)(2, Inplace_div_2_ng_container_3_button_2_Template, 3, 4, "button", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.closeIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.closeIcon);
  }
}
function Inplace_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵprojection(1, 1);
    ɵɵtemplate(2, Inplace_div_2_ng_container_2_Template, 1, 0, "ng-container", 4)(3, Inplace_div_2_ng_container_3_Template, 3, 2, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.closable);
  }
}
var _InplaceDisplay = class _InplaceDisplay {
};
__publicField(_InplaceDisplay, "ɵfac", function InplaceDisplay_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InplaceDisplay)();
});
__publicField(_InplaceDisplay, "ɵcmp", ɵɵdefineComponent({
  type: _InplaceDisplay,
  selectors: [["p-inplaceDisplay"]],
  hostAttrs: [1, "p-element"],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function InplaceDisplay_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
}));
var InplaceDisplay = _InplaceDisplay;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InplaceDisplay, [{
    type: Component,
    args: [{
      selector: "p-inplaceDisplay",
      template: "<ng-content></ng-content>",
      host: {
        class: "p-element"
      }
    }]
  }], null, null);
})();
var _InplaceContent = class _InplaceContent {
};
__publicField(_InplaceContent, "ɵfac", function InplaceContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InplaceContent)();
});
__publicField(_InplaceContent, "ɵcmp", ɵɵdefineComponent({
  type: _InplaceContent,
  selectors: [["p-inplaceContent"]],
  hostAttrs: [1, "p-element"],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function InplaceContent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
}));
var InplaceContent = _InplaceContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InplaceContent, [{
    type: Component,
    args: [{
      selector: "p-inplaceContent",
      template: "<ng-content></ng-content>",
      host: {
        class: "p-element"
      }
    }]
  }], null, null);
})();
var _Inplace = class _Inplace {
  constructor(cd) {
    __publicField(this, "cd");
    /**
     * Whether the content is displayed or not.
     * @group Props
     */
    __publicField(this, "active", false);
    /**
     * Displays a button to switch back to display mode.
     * @group Props
     */
    __publicField(this, "closable", false);
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    __publicField(this, "disabled", false);
    /**
     * Allows to prevent clicking.
     * @group Props
     */
    __publicField(this, "preventClick");
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
    /**
     * Icon to display in the close button.
     * @group Props
     */
    __publicField(this, "closeIcon");
    /**
     * Establishes a string value that labels the close button.
     * @group Props
     */
    __publicField(this, "closeAriaLabel");
    /**
     * Callback to invoke when inplace is opened.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    __publicField(this, "onActivate", new EventEmitter());
    /**
     * Callback to invoke when inplace is closed.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    __publicField(this, "onDeactivate", new EventEmitter());
    __publicField(this, "templates");
    __publicField(this, "hover");
    __publicField(this, "displayTemplate");
    __publicField(this, "contentTemplate");
    __publicField(this, "closeIconTemplate");
    this.cd = cd;
  }
  ngAfterContentInit() {
    var _a;
    (_a = this.templates) == null ? void 0 : _a.forEach((item) => {
      switch (item.getType()) {
        case "display":
          this.displayTemplate = item.template;
          break;
        case "closeicon":
          this.closeIconTemplate = item.template;
          break;
        case "content":
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  onActivateClick(event) {
    if (!this.preventClick) this.activate(event);
  }
  onDeactivateClick(event) {
    if (!this.preventClick) this.deactivate(event);
  }
  /**
   * Activates the content.
   * @param {Event} event - Browser event.
   * @group Method
   */
  activate(event) {
    if (!this.disabled) {
      this.active = true;
      this.onActivate.emit(event);
      this.cd.markForCheck();
    }
  }
  /**
   * Deactivates the content.
   * @param {Event} event - Browser event.
   * @group Method
   */
  deactivate(event) {
    if (!this.disabled) {
      this.active = false;
      this.hover = false;
      this.onDeactivate.emit(event);
      this.cd.markForCheck();
    }
  }
  onKeydown(event) {
    if (event.code === "Enter") {
      this.activate(event);
      event.preventDefault();
    }
  }
};
__publicField(_Inplace, "ɵfac", function Inplace_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Inplace)(ɵɵdirectiveInject(ChangeDetectorRef));
});
__publicField(_Inplace, "ɵcmp", ɵɵdefineComponent({
  type: _Inplace,
  selectors: [["p-inplace"]],
  contentQueries: function Inplace_ContentQueries(rf, ctx, dirIndex) {
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
    active: [2, "active", "active", booleanAttribute],
    closable: [2, "closable", "closable", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    preventClick: [2, "preventClick", "preventClick", booleanAttribute],
    style: "style",
    styleClass: "styleClass",
    closeIcon: "closeIcon",
    closeAriaLabel: "closeAriaLabel"
  },
  outputs: {
    onActivate: "onActivate",
    onDeactivate: "onDeactivate"
  },
  features: [ɵɵInputTransformsFeature],
  ngContentSelectors: _c2,
  decls: 3,
  vars: 9,
  consts: [[3, "ngClass", "ngStyle"], ["class", "p-inplace-display", "tabindex", "0", "role", "button", 3, "ngClass", "click", "keydown", 4, "ngIf"], ["class", "p-inplace-content", 4, "ngIf"], ["tabindex", "0", "role", "button", 1, "p-inplace-display", 3, "click", "keydown", "ngClass"], [4, "ngTemplateOutlet"], [1, "p-inplace-content"], [4, "ngIf"], ["type", "button", "pButton", "", 3, "icon", "click", 4, "ngIf"], ["type", "button", "pButton", "", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", "pButton", "", 3, "click", "icon"], ["type", "button", "pButton", "", 3, "click", "ngClass"]],
  template: function Inplace_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, Inplace_div_1_Template, 3, 4, "div", 1)(2, Inplace_div_2_Template, 4, 2, "div", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c3, ctx.closable))("ngStyle", ctx.style);
      ɵɵattribute("aria-live", "polite");
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.active);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.active);
    }
  },
  dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, ButtonDirective, TimesIcon],
  styles: ["@layer primeng{.p-inplace .p-inplace-display{display:inline;cursor:pointer}.p-inplace .p-inplace-content{display:inline}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content{display:flex}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content>.p-inputtext{flex:1 1 auto;width:1%}}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var Inplace = _Inplace;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Inplace, [{
    type: Component,
    args: [{
      selector: "p-inplace",
      template: '\n        <div [ngClass]="{ \'p-inplace p-component\': true, \'p-inplace-closable\': closable }" [ngStyle]="style" [class]="styleClass" [attr.aria-live]="\'polite\'">\n            <div class="p-inplace-display" (click)="onActivateClick($event)" tabindex="0" role="button" (keydown)="onKeydown($event)" [ngClass]="{ \'p-disabled\': disabled }" *ngIf="!active">\n                <ng-content select="[pInplaceDisplay]"></ng-content>\n                <ng-container *ngTemplateOutlet="displayTemplate"></ng-container>\n            </div>\n            <div class="p-inplace-content" *ngIf="active">\n                <ng-content select="[pInplaceContent]"></ng-content>\n                <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>\n\n                <ng-container *ngIf="closable">\n                    <button *ngIf="closeIcon" type="button" [icon]="closeIcon" pButton (click)="onDeactivateClick($event)" [attr.aria-label]="closeAriaLabel"></button>\n                    <button *ngIf="!closeIcon" type="button" pButton [ngClass]="\'p-button-icon-only\'" (click)="onDeactivateClick($event)" [attr.aria-label]="closeAriaLabel">\n                        <TimesIcon *ngIf="!closeIconTemplate" />\n                        <ng-template *ngTemplateOutlet="closeIconTemplate"></ng-template>\n                    </button>\n                </ng-container>\n            </div>\n        </div>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-inplace .p-inplace-display{display:inline;cursor:pointer}.p-inplace .p-inplace-content{display:inline}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content{display:flex}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content>.p-inputtext{flex:1 1 auto;width:1%}}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preventClick: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    closeAriaLabel: [{
      type: Input
    }],
    onActivate: [{
      type: Output
    }],
    onDeactivate: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var _InplaceModule = class _InplaceModule {
};
__publicField(_InplaceModule, "ɵfac", function InplaceModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InplaceModule)();
});
__publicField(_InplaceModule, "ɵmod", ɵɵdefineNgModule({
  type: _InplaceModule,
  declarations: [Inplace, InplaceDisplay, InplaceContent],
  imports: [CommonModule, ButtonModule, SharedModule, TimesIcon],
  exports: [Inplace, InplaceDisplay, InplaceContent, ButtonModule, SharedModule]
}));
__publicField(_InplaceModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, ButtonModule, SharedModule, TimesIcon, ButtonModule, SharedModule]
}));
var InplaceModule = _InplaceModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InplaceModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ButtonModule, SharedModule, TimesIcon],
      exports: [Inplace, InplaceDisplay, InplaceContent, ButtonModule, SharedModule],
      declarations: [Inplace, InplaceDisplay, InplaceContent]
    }]
  }], null, null);
})();
export {
  Inplace,
  InplaceContent,
  InplaceDisplay,
  InplaceModule
};
//# sourceMappingURL=primeng_inplace.js.map
