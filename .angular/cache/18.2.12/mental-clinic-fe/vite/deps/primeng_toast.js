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
import {
  TimesIcon
} from "./chunk-AP6UZX4B.js";
import {
  Ripple,
  RippleModule
} from "./chunk-MUJBADSC.js";
import "./chunk-BJLZ3T2F.js";
import {
  MessageService,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule
} from "./chunk-ZROJCIWL.js";
import {
  ObjectUtils,
  UniqueComponentId,
  zindexutils
} from "./chunk-U3NLM53U.js";
import {
  animate,
  animateChild,
  query,
  state,
  style,
  transition,
  trigger
} from "./chunk-5S7AEMUZ.js";
import {
  DomHandler
} from "./chunk-LB42WWNC.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
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
  Inject,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  numberAttribute,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-toast.mjs
var _c0 = ["container"];
var _c1 = (a0) => [a0, "p-toast-message"];
var _c2 = (a0, a1, a2, a3) => ({
  showTransformParams: a0,
  hideTransformParams: a1,
  showTransitionParams: a2,
  hideTransitionParams: a3
});
var _c3 = (a0) => ({
  value: "visible",
  params: a0
});
var _c4 = (a0, a1) => ({
  $implicit: a0,
  closeFn: a1
});
var _c5 = (a0) => ({
  $implicit: a0
});
function ToastItem_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ToastItem_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ToastItem_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headlessTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c4, ctx_r1.message, ctx_r1.onCloseIconClick));
  }
}
function ToastItem_ng_template_3_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap("p-toast-message-icon pi " + ctx_r1.message.icon);
  }
}
function ToastItem_ng_template_3_ng_container_1_span_2_CheckIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CheckIcon");
  }
  if (rf & 2) {
    ɵɵattribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_ng_template_3_ng_container_1_span_2_InfoCircleIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "InfoCircleIcon");
  }
  if (rf & 2) {
    ɵɵattribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_ng_template_3_ng_container_1_span_2_TimesCircleIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesCircleIcon");
  }
  if (rf & 2) {
    ɵɵattribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_ng_template_3_ng_container_1_span_2_ExclamationTriangleIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ExclamationTriangleIcon");
  }
  if (rf & 2) {
    ɵɵattribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_ng_template_3_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵelementContainerStart(1);
    ɵɵtemplate(2, ToastItem_ng_template_3_ng_container_1_span_2_CheckIcon_2_Template, 1, 2, "CheckIcon", 6)(3, ToastItem_ng_template_3_ng_container_1_span_2_InfoCircleIcon_3_Template, 1, 2, "InfoCircleIcon", 6)(4, ToastItem_ng_template_3_ng_container_1_span_2_TimesCircleIcon_4_Template, 1, 2, "TimesCircleIcon", 6)(5, ToastItem_ng_template_3_ng_container_1_span_2_ExclamationTriangleIcon_5_Template, 1, 2, "ExclamationTriangleIcon", 6);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵattribute("aria-hidden", true)("data-pc-section", "icon");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.message.severity === "success");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.message.severity === "info");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.message.severity === "error");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.message.severity === "warn");
  }
}
function ToastItem_ng_template_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ToastItem_ng_template_3_ng_container_1_span_1_Template, 1, 2, "span", 8)(2, ToastItem_ng_template_3_ng_container_1_span_2_Template, 6, 6, "span", 9);
    ɵɵelementStart(3, "div", 10)(4, "div", 11);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 12);
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.message.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.message.icon);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "text");
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "summary");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.message.summary);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "detail");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.message.detail);
  }
}
function ToastItem_ng_template_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ToastItem_ng_template_3_button_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap("pt-1 text-base p-toast-message-icon pi " + ctx_r1.message.closeIcon);
  }
}
function ToastItem_ng_template_3_button_3_TimesIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesIcon", 16);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-toast-icon-close-icon");
    ɵɵattribute("aria-hidden", true)("data-pc-section", "closeicon");
  }
}
function ToastItem_ng_template_3_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 14);
    ɵɵlistener("click", function ToastItem_ng_template_3_button_3_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onCloseIconClick($event));
    })("keydown.enter", function ToastItem_ng_template_3_button_3_Template_button_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onCloseIconClick($event));
    });
    ɵɵtemplate(1, ToastItem_ng_template_3_button_3_span_1_Template, 1, 2, "span", 8)(2, ToastItem_ng_template_3_button_3_TimesIcon_2_Template, 1, 3, "TimesIcon", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("aria-label", ctx_r1.closeAriaLabel)("data-pc-section", "closebutton");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.message.closeIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.message.closeIcon);
  }
}
function ToastItem_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, ToastItem_ng_template_3_ng_container_1_Template, 8, 7, "ng-container", 6)(2, ToastItem_ng_template_3_ng_container_2_Template, 1, 0, "ng-container", 4)(3, ToastItem_ng_template_3_button_3_Template, 3, 4, "button", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.message == null ? null : ctx_r1.message.contentStyleClass);
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.template);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.template)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c5, ctx_r1.message));
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r1.message == null ? null : ctx_r1.message.closable) !== false);
  }
}
function Toast_p_toastItem_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-toastItem", 3);
    ɵɵlistener("onClose", function Toast_p_toastItem_2_Template_p_toastItem_onClose_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMessageClose($event));
    })("@toastAnimation.start", function Toast_p_toastItem_2_Template_p_toastItem_animation_toastAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationStart($event));
    })("@toastAnimation.done", function Toast_p_toastItem_2_Template_p_toastItem_animation_toastAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationEnd($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("message", msg_r3)("index", i_r4)("life", ctx_r1.life)("template", ctx_r1.template)("headlessTemplate", ctx_r1.headlessTemplate)("@toastAnimation", void 0)("showTransformOptions", ctx_r1.showTransformOptions)("hideTransformOptions", ctx_r1.hideTransformOptions)("showTransitionOptions", ctx_r1.showTransitionOptions)("hideTransitionOptions", ctx_r1.hideTransitionOptions);
  }
}
var _ToastItem = class _ToastItem {
  constructor(zone, config) {
    __publicField(this, "zone");
    __publicField(this, "config");
    __publicField(this, "message");
    __publicField(this, "index");
    __publicField(this, "life");
    __publicField(this, "template");
    __publicField(this, "headlessTemplate");
    __publicField(this, "showTransformOptions");
    __publicField(this, "hideTransformOptions");
    __publicField(this, "showTransitionOptions");
    __publicField(this, "hideTransitionOptions");
    __publicField(this, "onClose", new EventEmitter());
    __publicField(this, "containerViewChild");
    __publicField(this, "timeout");
    __publicField(this, "onCloseIconClick", (event) => {
      this.clearTimeout();
      this.onClose.emit({
        index: this.index,
        message: this.message
      });
      event.preventDefault();
    });
    this.zone = zone;
    this.config = config;
  }
  ngAfterViewInit() {
    this.initTimeout();
  }
  initTimeout() {
    var _a;
    if (!((_a = this.message) == null ? void 0 : _a.sticky)) {
      this.zone.runOutsideAngular(() => {
        var _a2;
        this.timeout = setTimeout(() => {
          this.onClose.emit({
            index: this.index,
            message: this.message
          });
        }, ((_a2 = this.message) == null ? void 0 : _a2.life) || this.life || 3e3);
      });
    }
  }
  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
  onMouseEnter() {
    this.clearTimeout();
  }
  onMouseLeave() {
    this.initTimeout();
  }
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  ngOnDestroy() {
    this.clearTimeout();
  }
};
__publicField(_ToastItem, "ɵfac", function ToastItem_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastItem)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PrimeNGConfig));
});
__publicField(_ToastItem, "ɵcmp", ɵɵdefineComponent({
  type: _ToastItem,
  selectors: [["p-toastItem"]],
  viewQuery: function ToastItem_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    message: "message",
    index: [2, "index", "index", numberAttribute],
    life: [2, "life", "life", numberAttribute],
    template: "template",
    headlessTemplate: "headlessTemplate",
    showTransformOptions: "showTransformOptions",
    hideTransformOptions: "hideTransformOptions",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions"
  },
  outputs: {
    onClose: "onClose"
  },
  features: [ɵɵInputTransformsFeature],
  decls: 5,
  vars: 18,
  consts: [["container", ""], ["notHeadless", ""], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 3, "mouseenter", "mouseleave", "ngClass"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-toast-message-content", 3, "ngClass"], [4, "ngIf"], ["type", "button", "class", "p-toast-icon-close p-link", "pRipple", "", 3, "click", "keydown.enter", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "p-toast-message-icon", 4, "ngIf"], [1, "p-toast-message-text"], [1, "p-toast-summary"], [1, "p-toast-detail"], [1, "p-toast-message-icon"], ["type", "button", "pRipple", "", 1, "p-toast-icon-close", "p-link", 3, "click", "keydown.enter"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"]],
  template: function ToastItem_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 2, 0);
      ɵɵlistener("mouseenter", function ToastItem_Template_div_mouseenter_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onMouseEnter());
      })("mouseleave", function ToastItem_Template_div_mouseleave_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onMouseLeave());
      });
      ɵɵtemplate(2, ToastItem_ng_container_2_Template, 2, 5, "ng-container", 3)(3, ToastItem_ng_template_3_Template, 4, 8, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      const notHeadless_r4 = ɵɵreference(4);
      ɵɵclassMap(ctx.message == null ? null : ctx.message.styleClass);
      ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c1, "p-toast-message-" + (ctx.message == null ? null : ctx.message.severity)))("@messageState", ɵɵpureFunction1(16, _c3, ɵɵpureFunction4(11, _c2, ctx.showTransformOptions, ctx.hideTransformOptions, ctx.showTransitionOptions, ctx.hideTransitionOptions)));
      ɵɵattribute("id", ctx.message == null ? null : ctx.message.id)("data-pc-name", "toast")("data-pc-section", "root");
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.headlessTemplate)("ngIfElse", notHeadless_r4);
    }
  },
  dependencies: () => [NgClass, NgIf, NgTemplateOutlet, Ripple, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon, TimesIcon],
  encapsulation: 2,
  data: {
    animation: [trigger("messageState", [state("visible", style({
      transform: "translateY(0)",
      opacity: 1
    })), transition("void => *", [style({
      transform: "{{showTransformParams}}",
      opacity: 0
    }), animate("{{showTransitionParams}}")]), transition("* => void", [animate("{{hideTransitionParams}}", style({
      height: 0,
      opacity: 0,
      transform: "{{hideTransformParams}}"
    }))])])]
  },
  changeDetection: 0
}));
var ToastItem = _ToastItem;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastItem, [{
    type: Component,
    args: [{
      selector: "p-toastItem",
      template: '\n        <div\n            #container\n            [attr.id]="message?.id"\n            [class]="message?.styleClass"\n            [ngClass]="[\'p-toast-message-\' + message?.severity, \'p-toast-message\']"\n            [@messageState]="{ value: \'visible\', params: { showTransformParams: showTransformOptions, hideTransformParams: hideTransformOptions, showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"\n            (mouseenter)="onMouseEnter()"\n            (mouseleave)="onMouseLeave()"\n            role="alert"\n            aria-live="assertive"\n            aria-atomic="true"\n            [attr.data-pc-name]="\'toast\'"\n            [attr.data-pc-section]="\'root\'"\n        >\n            <ng-container *ngIf="headlessTemplate; else notHeadless">\n                <ng-container *ngTemplateOutlet="headlessTemplate; context: { $implicit: message, closeFn: onCloseIconClick }"></ng-container>\n            </ng-container>\n            <ng-template #notHeadless>\n                <div class="p-toast-message-content" [ngClass]="message?.contentStyleClass" [attr.data-pc-section]="\'content\'">\n                    <ng-container *ngIf="!template">\n                        <span *ngIf="message.icon" [class]="\'p-toast-message-icon pi \' + message.icon"></span>\n                        <span class="p-toast-message-icon" *ngIf="!message.icon" [attr.aria-hidden]="true" [attr.data-pc-section]="\'icon\'">\n                            <ng-container>\n                                <CheckIcon *ngIf="message.severity === \'success\'" [attr.aria-hidden]="true" [attr.data-pc-section]="\'icon\'" />\n                                <InfoCircleIcon *ngIf="message.severity === \'info\'" [attr.aria-hidden]="true" [attr.data-pc-section]="\'icon\'" />\n                                <TimesCircleIcon *ngIf="message.severity === \'error\'" [attr.aria-hidden]="true" [attr.data-pc-section]="\'icon\'" />\n                                <ExclamationTriangleIcon *ngIf="message.severity === \'warn\'" [attr.aria-hidden]="true" [attr.data-pc-section]="\'icon\'" />\n                            </ng-container>\n                        </span>\n                        <div class="p-toast-message-text" [attr.data-pc-section]="\'text\'">\n                            <div class="p-toast-summary" [attr.data-pc-section]="\'summary\'">{{ message.summary }}</div>\n                            <div class="p-toast-detail" [attr.data-pc-section]="\'detail\'">{{ message.detail }}</div>\n                        </div>\n                    </ng-container>\n                    <ng-container *ngTemplateOutlet="template; context: { $implicit: message }"></ng-container>\n                    <button\n                        type="button"\n                        class="p-toast-icon-close p-link"\n                        (click)="onCloseIconClick($event)"\n                        (keydown.enter)="onCloseIconClick($event)"\n                        *ngIf="message?.closable !== false"\n                        pRipple\n                        [attr.aria-label]="closeAriaLabel"\n                        [attr.data-pc-section]="\'closebutton\'"\n                    >\n                        <span *ngIf="message.closeIcon" [class]="\'pt-1 text-base p-toast-message-icon pi \' + message.closeIcon"></span>\n                        <TimesIcon *ngIf="!message.closeIcon" [styleClass]="\'p-toast-icon-close-icon\'" [attr.aria-hidden]="true" [attr.data-pc-section]="\'closeicon\'" />\n                    </button>\n                </div>\n            </ng-template>\n        </div>\n    ',
      animations: [trigger("messageState", [state("visible", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => *", [style({
        transform: "{{showTransformParams}}",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("* => void", [animate("{{hideTransitionParams}}", style({
        height: 0,
        opacity: 0,
        transform: "{{hideTransformParams}}"
      }))])])],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: NgZone
  }, {
    type: PrimeNGConfig
  }], {
    message: [{
      type: Input
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    template: [{
      type: Input
    }],
    headlessTemplate: [{
      type: Input
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }]
  });
})();
var _Toast = class _Toast {
  constructor(document, renderer, messageService, cd, config) {
    __publicField(this, "document");
    __publicField(this, "renderer");
    __publicField(this, "messageService");
    __publicField(this, "cd");
    __publicField(this, "config");
    /**
     * Key of the message in case message is targeted to a specific toast component.
     * @group Props
     */
    __publicField(this, "key");
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    __publicField(this, "autoZIndex", true);
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    __publicField(this, "baseZIndex", 0);
    /**
     * The default time to display messages for in milliseconds.
     * @group Props
     */
    __publicField(this, "life", 3e3);
    /**
     * Inline style of the component.
     * @group Props
     */
    __publicField(this, "style");
    /**
     * Inline class of the component.
     * @group Props
     */
    __publicField(this, "styleClass");
    /**
     * It does not add the new message if there is already a toast displayed with the same content
     * @group Props
     */
    __publicField(this, "preventOpenDuplicates", false);
    /**
     * Displays only once a message with the same content.
     * @group Props
     */
    __publicField(this, "preventDuplicates", false);
    /**
     * Transform options of the show animation.
     * @group Props
     */
    __publicField(this, "showTransformOptions", "translateY(100%)");
    /**
     * Transform options of the hide animation.
     * @group Props
     */
    __publicField(this, "hideTransformOptions", "translateY(-100%)");
    /**
     * Transition options of the show animation.
     * @group Props
     */
    __publicField(this, "showTransitionOptions", "300ms ease-out");
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    __publicField(this, "hideTransitionOptions", "250ms ease-in");
    /**
     * Object literal to define styles per screen size.
     * @group Props
     */
    __publicField(this, "breakpoints");
    /**
     * Callback to invoke when a message is closed.
     * @param {ToastCloseEvent} event - custom close event.
     * @group Emits
     */
    __publicField(this, "onClose", new EventEmitter());
    __publicField(this, "containerViewChild");
    __publicField(this, "templates");
    __publicField(this, "messageSubscription");
    __publicField(this, "clearSubscription");
    __publicField(this, "messages");
    __publicField(this, "messagesArchieve");
    __publicField(this, "template");
    __publicField(this, "headlessTemplate");
    __publicField(this, "_position", "top-right");
    __publicField(this, "styleElement");
    __publicField(this, "id", UniqueComponentId());
    this.document = document;
    this.renderer = renderer;
    this.messageService = messageService;
    this.cd = cd;
    this.config = config;
  }
  /**
   * Position of the toast in viewport.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    this.cd.markForCheck();
  }
  ngOnInit() {
    this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
      if (messages) {
        if (Array.isArray(messages)) {
          const filteredMessages = messages.filter((m) => this.canAdd(m));
          this.add(filteredMessages);
        } else if (this.canAdd(messages)) {
          this.add([messages]);
        }
      }
    });
    this.clearSubscription = this.messageService.clearObserver.subscribe((key) => {
      if (key) {
        if (this.key === key) {
          this.messages = null;
        }
      } else {
        this.messages = null;
      }
      this.cd.markForCheck();
    });
  }
  ngAfterViewInit() {
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  add(messages) {
    this.messages = this.messages ? [...this.messages, ...messages] : [...messages];
    if (this.preventDuplicates) {
      this.messagesArchieve = this.messagesArchieve ? [...this.messagesArchieve, ...messages] : [...messages];
    }
    this.cd.markForCheck();
  }
  canAdd(message) {
    let allow = this.key === message.key;
    if (allow && this.preventOpenDuplicates) {
      allow = !this.containsMessage(this.messages, message);
    }
    if (allow && this.preventDuplicates) {
      allow = !this.containsMessage(this.messagesArchieve, message);
    }
    return allow;
  }
  containsMessage(collection, message) {
    if (!collection) {
      return false;
    }
    return collection.find((m) => {
      return m.summary === message.summary && m.detail == message.detail && m.severity === message.severity;
    }) != null;
  }
  ngAfterContentInit() {
    var _a;
    (_a = this.templates) == null ? void 0 : _a.forEach((item) => {
      switch (item.getType()) {
        case "message":
          this.template = item.template;
          break;
        case "headless":
          this.headlessTemplate = item.template;
          break;
        default:
          this.template = item.template;
          break;
      }
    });
  }
  onMessageClose(event) {
    var _a;
    (_a = this.messages) == null ? void 0 : _a.splice(event.index, 1);
    this.onClose.emit({
      message: event.message
    });
    this.cd.detectChanges();
  }
  onAnimationStart(event) {
    var _a, _b, _c;
    if (event.fromState === "void") {
      this.renderer.setAttribute((_a = this.containerViewChild) == null ? void 0 : _a.nativeElement, this.id, "");
      if (this.autoZIndex && ((_b = this.containerViewChild) == null ? void 0 : _b.nativeElement.style.zIndex) === "") {
        zindexutils.set("modal", (_c = this.containerViewChild) == null ? void 0 : _c.nativeElement, this.baseZIndex || this.config.zIndex.modal);
      }
    }
  }
  onAnimationEnd(event) {
    var _a;
    if (event.toState === "void") {
      if (this.autoZIndex && ObjectUtils.isEmpty(this.messages)) {
        zindexutils.clear((_a = this.containerViewChild) == null ? void 0 : _a.nativeElement);
      }
    }
  }
  createStyle() {
    var _a, _b;
    if (!this.styleElement) {
      this.styleElement = this.renderer.createElement("style");
      this.styleElement.type = "text/css";
      DomHandler.setAttribute(this.styleElement, "nonce", (_b = (_a = this.config) == null ? void 0 : _a.csp()) == null ? void 0 : _b.nonce);
      this.renderer.appendChild(this.document.head, this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        let breakpointStyle = "";
        for (let styleProp in this.breakpoints[breakpoint]) {
          breakpointStyle += styleProp + ":" + this.breakpoints[breakpoint][styleProp] + " !important;";
        }
        innerHTML += "\n                    @media screen and (max-width: ".concat(breakpoint, ") {\n                        .p-toast[").concat(this.id, "] {\n                           ").concat(breakpointStyle, "\n                        }\n                    }\n                ");
      }
      this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
    }
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    if (this.containerViewChild && this.autoZIndex) {
      zindexutils.clear(this.containerViewChild.nativeElement);
    }
    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }
    this.destroyStyle();
  }
};
__publicField(_Toast, "ɵfac", function Toast_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Toast)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(MessageService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig));
});
__publicField(_Toast, "ɵcmp", ɵɵdefineComponent({
  type: _Toast,
  selectors: [["p-toast"]],
  contentQueries: function Toast_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Toast_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    key: "key",
    autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
    baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
    life: [2, "life", "life", numberAttribute],
    style: "style",
    styleClass: "styleClass",
    position: "position",
    preventOpenDuplicates: [2, "preventOpenDuplicates", "preventOpenDuplicates", booleanAttribute],
    preventDuplicates: [2, "preventDuplicates", "preventDuplicates", booleanAttribute],
    showTransformOptions: "showTransformOptions",
    hideTransformOptions: "hideTransformOptions",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    breakpoints: "breakpoints"
  },
  outputs: {
    onClose: "onClose"
  },
  features: [ɵɵInputTransformsFeature],
  decls: 3,
  vars: 5,
  consts: [["container", ""], [1, "p-toast", "p-component", 3, "ngClass", "ngStyle"], [3, "message", "index", "life", "template", "headlessTemplate", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "onClose", 4, "ngFor", "ngForOf"], [3, "onClose", "message", "index", "life", "template", "headlessTemplate", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions"]],
  template: function Toast_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 1, 0);
      ɵɵtemplate(2, Toast_p_toastItem_2_Template, 1, 10, "p-toastItem", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", "p-toast-" + ctx._position)("ngStyle", ctx.style);
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.messages);
    }
  },
  dependencies: [NgClass, NgForOf, NgStyle, ToastItem],
  styles: ["@layer primeng{.p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{display:flex;align-items:flex-start}.p-toast-message-text{flex:1 1 auto}.p-toast-top-right{top:20px;right:20px}.p-toast-top-left{top:20px;left:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{top:20px;left:50%;transform:translate(-50%)}.p-toast-bottom-center{bottom:20px;left:50%;transform:translate(-50%)}.p-toast-center{left:50%;top:50%;min-width:20vw;transform:translate(-50%,-50%)}.p-toast-icon-close{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative;flex:none}.p-toast-icon-close.p-link{cursor:pointer}}\n"],
  encapsulation: 2,
  data: {
    animation: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])]
  },
  changeDetection: 0
}));
var Toast = _Toast;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toast, [{
    type: Component,
    args: [{
      selector: "p-toast",
      template: '\n        <div #container class="p-toast p-component" [ngClass]="\'p-toast-\' + _position" [ngStyle]="style" [class]="styleClass">\n            <p-toastItem\n                *ngFor="let msg of messages; let i = index"\n                [message]="msg"\n                [index]="i"\n                [life]="life"\n                (onClose)="onMessageClose($event)"\n                [template]="template"\n                [headlessTemplate]="headlessTemplate"\n                @toastAnimation\n                (@toastAnimation.start)="onAnimationStart($event)"\n                (@toastAnimation.done)="onAnimationEnd($event)"\n                [showTransformOptions]="showTransformOptions"\n                [hideTransformOptions]="hideTransformOptions"\n                [showTransitionOptions]="showTransitionOptions"\n                [hideTransitionOptions]="hideTransitionOptions"\n            ></p-toastItem>\n        </div>\n    ',
      animations: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{display:flex;align-items:flex-start}.p-toast-message-text{flex:1 1 auto}.p-toast-top-right{top:20px;right:20px}.p-toast-top-left{top:20px;left:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{top:20px;left:50%;transform:translate(-50%)}.p-toast-bottom-center{bottom:20px;left:50%;transform:translate(-50%)}.p-toast-center{left:50%;top:50%;min-width:20vw;transform:translate(-50%,-50%)}.p-toast-icon-close{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative;flex:none}.p-toast-icon-close.p-link{cursor:pointer}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Renderer2
  }, {
    type: MessageService
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    key: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    preventOpenDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preventDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var _ToastModule = class _ToastModule {
};
__publicField(_ToastModule, "ɵfac", function ToastModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastModule)();
});
__publicField(_ToastModule, "ɵmod", ɵɵdefineNgModule({
  type: _ToastModule,
  declarations: [Toast, ToastItem],
  imports: [CommonModule, RippleModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon, TimesIcon],
  exports: [Toast, SharedModule]
}));
__publicField(_ToastModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, RippleModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon, TimesIcon, SharedModule]
}));
var ToastModule = _ToastModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RippleModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon, TimesIcon],
      exports: [Toast, SharedModule],
      declarations: [Toast, ToastItem]
    }]
  }], null, null);
})();
export {
  Toast,
  ToastItem,
  ToastModule
};
//# sourceMappingURL=primeng_toast.js.map
