import {
  ExclamationTriangleIcon,
  InfoCircleIcon
} from "./chunk-K6X7NG43.js";
import {
  CheckIcon
} from "./chunk-A2QFKI6F.js";
import {
  TimesCircleIcon
} from "./chunk-OLOIW27Q.js";
import "./chunk-BJLZ3T2F.js";
import "./chunk-U3NLM53U.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle
} from "./chunk-KUZ63KOD.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  ViewEncapsulation$1,
  booleanAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-message.mjs
function UIMessage_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CheckIcon", 4);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_InfoCircleIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "InfoCircleIcon", 4);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_TimesCircleIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesCircleIcon", 4);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_ExclamationTriangleIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ExclamationTriangleIcon", 4);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r0.text, ɵɵsanitizeHtml);
  }
}
function UIMessage_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, UIMessage_div_5_span_1_Template, 1, 1, "span", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.escape);
  }
}
function UIMessage_ng_template_6_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.text);
  }
}
function UIMessage_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, UIMessage_ng_template_6_span_0_Template, 2, 1, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.escape);
  }
}
var _UIMessage = class _UIMessage {
  constructor() {
    /**
     * Severity level of the message.
     * @group Props
     */
    __publicField(this, "severity");
    /**
     * Text content.
     * @group Props
     */
    __publicField(this, "text");
    /**
     * Whether displaying messages would be escaped or not.
     * @group Props
     */
    __publicField(this, "escape", true);
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
  }
  get icon() {
    if (this.severity) {
      return this.severity;
    } else {
      return "info";
    }
  }
  get containerClass() {
    return {
      ["p-inline-message-".concat(this.severity)]: this.severity,
      "p-inline-message-icon-only": this.text == null
    };
  }
};
__publicField(_UIMessage, "ɵfac", function UIMessage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UIMessage)();
});
__publicField(_UIMessage, "ɵcmp", ɵɵdefineComponent({
  type: _UIMessage,
  selectors: [["p-message"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    severity: "severity",
    text: "text",
    escape: [2, "escape", "escape", booleanAttribute],
    style: "style",
    styleClass: "styleClass"
  },
  features: [ɵɵInputTransformsFeature],
  decls: 8,
  vars: 10,
  consts: [["escapeOut", ""], ["aria-live", "polite", 1, "p-inline-message", "p-component", "p-inline-message", 3, "ngStyle", "ngClass"], [3, "styleClass", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "styleClass"], ["class", "p-inline-message-text", 3, "innerHTML", 4, "ngIf"], [1, "p-inline-message-text", 3, "innerHTML"], ["class", "p-inline-message-text", 4, "ngIf"], [1, "p-inline-message-text"]],
  template: function UIMessage_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 1);
      ɵɵtemplate(1, UIMessage_CheckIcon_1_Template, 1, 1, "CheckIcon", 2)(2, UIMessage_InfoCircleIcon_2_Template, 1, 1, "InfoCircleIcon", 2)(3, UIMessage_TimesCircleIcon_3_Template, 1, 1, "TimesCircleIcon", 2)(4, UIMessage_ExclamationTriangleIcon_4_Template, 1, 1, "ExclamationTriangleIcon", 2)(5, UIMessage_div_5_Template, 2, 1, "div", 3)(6, UIMessage_ng_template_6_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      const escapeOut_r2 = ɵɵreference(7);
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngStyle", ctx.style)("ngClass", ctx.containerClass);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.icon === "success");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.icon === "info");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.icon === "error");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.icon === "warn");
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.escape)("ngIfElse", escapeOut_r2);
    }
  },
  dependencies: () => [NgClass, NgIf, NgStyle, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon],
  styles: ["@layer primeng{.p-inline-message{display:inline-flex;align-items:center;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var UIMessage = _UIMessage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UIMessage, [{
    type: Component,
    args: [{
      selector: "p-message",
      template: '\n        <div aria-live="polite" class="p-inline-message p-component p-inline-message" [ngStyle]="style" [class]="styleClass" [ngClass]="containerClass">\n            <CheckIcon *ngIf="icon === \'success\'" [styleClass]="\'p-inline-message-icon\'" />\n            <InfoCircleIcon *ngIf="icon === \'info\'" [styleClass]="\'p-inline-message-icon\'" />\n            <TimesCircleIcon *ngIf="icon === \'error\'" [styleClass]="\'p-inline-message-icon\'" />\n            <ExclamationTriangleIcon *ngIf="icon === \'warn\'" [styleClass]="\'p-inline-message-icon\'" />\n            <div *ngIf="!escape; else escapeOut">\n                <span *ngIf="!escape" class="p-inline-message-text" [innerHTML]="text"></span>\n            </div>\n            <ng-template #escapeOut>\n                <span *ngIf="escape" class="p-inline-message-text">{{ text }}</span>\n            </ng-template>\n        </div>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-inline-message{display:inline-flex;align-items:center;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}}\n"]
    }]
  }], null, {
    severity: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    escape: [{
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
    }]
  });
})();
var _MessageModule = class _MessageModule {
};
__publicField(_MessageModule, "ɵfac", function MessageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MessageModule)();
});
__publicField(_MessageModule, "ɵmod", ɵɵdefineNgModule({
  type: _MessageModule,
  declarations: [UIMessage],
  imports: [CommonModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon],
  exports: [UIMessage]
}));
__publicField(_MessageModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon]
}));
var MessageModule = _MessageModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon],
      exports: [UIMessage],
      declarations: [UIMessage]
    }]
  }], null, null);
})();
export {
  MessageModule,
  UIMessage
};
//# sourceMappingURL=primeng_message.js.map
