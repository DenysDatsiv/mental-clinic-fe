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
import {
  MessageService,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule
} from "./chunk-ZROJCIWL.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-5S7AEMUZ.js";
import {
  CommonModule,
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
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Optional,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-R75KKECJ.js";
import {
  timer
} from "./chunk-FHTVLBLO.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-messages.mjs
var _c0 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c1 = (a0) => ({
  value: "visible",
  params: a0
});
function Messages_ng_container_1_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const msg_r1 = ɵɵnextContext().$implicit;
    ɵɵclassMap("p-message-icon pi " + msg_r1.icon);
    ɵɵattribute("data-pc-section", "icon");
  }
}
function Messages_ng_container_1_div_1_span_3_CheckIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CheckIcon");
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "icon");
  }
}
function Messages_ng_container_1_div_1_span_3_InfoCircleIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "InfoCircleIcon");
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "icon");
  }
}
function Messages_ng_container_1_div_1_span_3_TimesCircleIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesCircleIcon");
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "icon");
  }
}
function Messages_ng_container_1_div_1_span_3_ExclamationTriangleIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ExclamationTriangleIcon");
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "icon");
  }
}
function Messages_ng_container_1_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵelementContainerStart(1);
    ɵɵtemplate(2, Messages_ng_container_1_div_1_span_3_CheckIcon_2_Template, 1, 1, "CheckIcon", 11)(3, Messages_ng_container_1_div_1_span_3_InfoCircleIcon_3_Template, 1, 1, "InfoCircleIcon", 11)(4, Messages_ng_container_1_div_1_span_3_TimesCircleIcon_4_Template, 1, 1, "TimesCircleIcon", 11)(5, Messages_ng_container_1_div_1_span_3_ExclamationTriangleIcon_5_Template, 1, 1, "ExclamationTriangleIcon", 11);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const msg_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵproperty("ngIf", msg_r1.severity === "success");
    ɵɵadvance();
    ɵɵproperty("ngIf", msg_r1.severity === "info");
    ɵɵadvance();
    ɵɵproperty("ngIf", msg_r1.severity === "error");
    ɵɵadvance();
    ɵɵproperty("ngIf", msg_r1.severity === "warn");
  }
}
function Messages_ng_container_1_div_1_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 14);
  }
  if (rf & 2) {
    const msg_r1 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("innerHTML", msg_r1.summary, ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "summary");
  }
}
function Messages_ng_container_1_div_1_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 15);
  }
  if (rf & 2) {
    const msg_r1 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("innerHTML", msg_r1.detail, ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "detail");
  }
}
function Messages_ng_container_1_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Messages_ng_container_1_div_1_ng_container_4_span_1_Template, 1, 2, "span", 12)(2, Messages_ng_container_1_div_1_ng_container_4_span_2_Template, 1, 2, "span", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const msg_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", msg_r1.summary);
    ɵɵadvance();
    ɵɵproperty("ngIf", msg_r1.detail);
  }
}
function Messages_ng_container_1_div_1_ng_template_5_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const msg_r1 = ɵɵnextContext(2).$implicit;
    ɵɵattribute("data-pc-section", "summary");
    ɵɵadvance();
    ɵɵtextInterpolate(msg_r1.summary);
  }
}
function Messages_ng_container_1_div_1_ng_template_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const msg_r1 = ɵɵnextContext(2).$implicit;
    ɵɵattribute("data-pc-section", "detail");
    ɵɵadvance();
    ɵɵtextInterpolate(msg_r1.detail);
  }
}
function Messages_ng_container_1_div_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Messages_ng_container_1_div_1_ng_template_5_span_0_Template, 2, 2, "span", 16)(1, Messages_ng_container_1_div_1_ng_template_5_span_1_Template, 2, 2, "span", 17);
  }
  if (rf & 2) {
    const msg_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngIf", msg_r1.summary);
    ɵɵadvance();
    ɵɵproperty("ngIf", msg_r1.detail);
  }
}
function Messages_ng_container_1_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 20);
    ɵɵlistener("click", function Messages_ng_container_1_div_1_button_7_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const i_r3 = ɵɵnextContext().index;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.removeMessage(i_r3));
    });
    ɵɵelement(1, "TimesIcon", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵattribute("aria-label", ctx_r3.closeAriaLabel)("data-pc-section", "closebutton");
    ɵɵadvance();
    ɵɵproperty("styleClass", "p-message-close-icon");
    ɵɵattribute("data-pc-section", "closeicon");
  }
}
function Messages_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "div", 6);
    ɵɵtemplate(2, Messages_ng_container_1_div_1_span_2_Template, 1, 3, "span", 7)(3, Messages_ng_container_1_div_1_span_3_Template, 6, 4, "span", 8)(4, Messages_ng_container_1_div_1_ng_container_4_Template, 3, 2, "ng-container", 3)(5, Messages_ng_container_1_div_1_ng_template_5_Template, 2, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor)(7, Messages_ng_container_1_div_1_button_7_Template, 2, 4, "button", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const msg_r1 = ctx.$implicit;
    const escapeOut_r5 = ɵɵreference(6);
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassMap("p-message p-message-" + msg_r1.severity);
    ɵɵproperty("@messageAnimation", ɵɵpureFunction1(13, _c1, ɵɵpureFunction2(10, _c0, ctx_r3.showTransitionOptions, ctx_r3.hideTransitionOptions)));
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "wrapper")("id", msg_r1.id || null);
    ɵɵadvance();
    ɵɵproperty("ngIf", msg_r1.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !msg_r1.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r3.escape)("ngIfElse", escapeOut_r5);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r3.closable && ((tmp_14_0 = msg_r1.closable) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : true));
  }
}
function Messages_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Messages_ng_container_1_div_1_Template, 8, 15, "div", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r3.messages);
  }
}
function Messages_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Messages_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22)(1, "div", 6);
    ɵɵtemplate(2, Messages_ng_template_2_ng_container_2_Template, 1, 0, "ng-container", 23);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", "p-message p-message-" + ctx_r3.severity);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.contentTemplate);
  }
}
var _Messages = class _Messages {
  constructor(messageService, el, cd, config) {
    __publicField(this, "messageService");
    __publicField(this, "el");
    __publicField(this, "cd");
    __publicField(this, "config");
    /**
     * Defines if message box can be closed by the click icon.
     * @group Props
     */
    __publicField(this, "closable", true);
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
     * Whether displaying services messages are enabled.
     * @group Props
     */
    __publicField(this, "enableService", true);
    /**
     * Id to match the key of the message to enable scoping in service based messaging.
     * @group Props
     */
    __publicField(this, "key");
    /**
     * Whether displaying messages would be escaped or not.
     * @group Props
     */
    __publicField(this, "escape", true);
    /**
     * Severity level of the message.
     * @group Props
     */
    __publicField(this, "severity");
    /**
     * Transition options of the show animation.
     * @group Props
     */
    __publicField(this, "showTransitionOptions", "300ms ease-out");
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    __publicField(this, "hideTransitionOptions", "200ms cubic-bezier(0.86, 0, 0.07, 1)");
    /**
     * This function is executed when the value changes.
     * @param {Message[]} value - messages value.
     * @group Emits
     */
    __publicField(this, "valueChange", new EventEmitter());
    /**
     * This function is executed when a message is closed.
     * @param {Message} value - Closed message.
     * @group Emits
     */
    __publicField(this, "onClose", new EventEmitter());
    __publicField(this, "templates");
    __publicField(this, "messages");
    __publicField(this, "messageSubscription");
    __publicField(this, "clearSubscription");
    __publicField(this, "timerSubscriptions", []);
    __publicField(this, "contentTemplate");
    this.messageService = messageService;
    this.el = el;
    this.cd = cd;
    this.config = config;
  }
  /**
   * An array of messages to display.
   * @group Props
   */
  set value(messages) {
    this.messages = messages;
    this.startMessageLifes(this.messages);
  }
  ngAfterContentInit() {
    var _a;
    (_a = this.templates) == null ? void 0 : _a.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
    if (this.messageService && this.enableService && !this.contentTemplate) {
      this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
        if (messages) {
          if (!Array.isArray(messages)) {
            messages = [messages];
          }
          const filteredMessages = messages.filter((m) => this.key === m.key);
          this.messages = this.messages ? [...this.messages, ...filteredMessages] : [...filteredMessages];
          this.startMessageLifes(filteredMessages);
          this.cd.markForCheck();
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
  }
  hasMessages() {
    let parentEl = this.el.nativeElement.parentElement;
    if (parentEl && parentEl.offsetParent) {
      return this.contentTemplate != null || this.messages && this.messages.length > 0;
    }
    return false;
  }
  clear() {
    this.messages = [];
    this.valueChange.emit(this.messages);
  }
  removeMessage(i) {
    var _a;
    const removedMessage = this.messages[i];
    this.messages = (_a = this.messages) == null ? void 0 : _a.filter((msg, index) => index !== i);
    removedMessage && this.onClose.emit(removedMessage);
    this.valueChange.emit(this.messages);
  }
  get icon() {
    const severity = this.severity || (this.hasMessages() ? this.messages[0].severity : null);
    if (this.hasMessages()) {
      switch (severity) {
        case "success":
          return "pi-check";
        case "info":
          return "pi-info-circle";
        case "error":
          return "pi-times";
        case "warn":
          return "pi-exclamation-triangle";
        default:
          return "pi-info-circle";
      }
    }
    return null;
  }
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  ngOnDestroy() {
    var _a;
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }
    (_a = this.timerSubscriptions) == null ? void 0 : _a.forEach((subscription) => subscription.unsubscribe());
  }
  startMessageLifes(messages) {
    messages == null ? void 0 : messages.forEach((message) => message.life && this.startMessageLife(message));
  }
  startMessageLife(message) {
    const timerSubsctiption = timer(message.life).subscribe(() => {
      var _a, _b;
      this.messages = (_a = this.messages) == null ? void 0 : _a.filter((msgEl) => msgEl !== message);
      this.timerSubscriptions = (_b = this.timerSubscriptions) == null ? void 0 : _b.filter((timerEl) => timerEl !== timerSubsctiption);
      this.valueChange.emit(this.messages);
      this.cd.markForCheck();
    });
    this.timerSubscriptions.push(timerSubsctiption);
  }
};
__publicField(_Messages, "ɵfac", function Messages_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Messages)(ɵɵdirectiveInject(MessageService, 8), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig));
});
__publicField(_Messages, "ɵcmp", ɵɵdefineComponent({
  type: _Messages,
  selectors: [["p-messages"]],
  contentQueries: function Messages_ContentQueries(rf, ctx, dirIndex) {
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
    value: "value",
    closable: [2, "closable", "closable", booleanAttribute],
    style: "style",
    styleClass: "styleClass",
    enableService: [2, "enableService", "enableService", booleanAttribute],
    key: "key",
    escape: [2, "escape", "escape", booleanAttribute],
    severity: "severity",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions"
  },
  outputs: {
    valueChange: "valueChange",
    onClose: "onClose"
  },
  features: [ɵɵInputTransformsFeature],
  decls: 4,
  vars: 8,
  consts: [["staticMessage", ""], ["escapeOut", ""], ["role", "alert", 1, "p-messages", "p-component", 3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["role", "alert", 3, "class", 4, "ngFor", "ngForOf"], ["role", "alert"], [1, "p-message-wrapper"], [3, "class", 4, "ngIf"], ["class", "p-message-icon", 4, "ngIf"], ["class", "p-message-close p-link", "type", "button", "pRipple", "", 3, "click", 4, "ngIf"], [1, "p-message-icon"], [4, "ngIf"], ["class", "p-message-summary", 3, "innerHTML", 4, "ngIf"], ["class", "p-message-detail", 3, "innerHTML", 4, "ngIf"], [1, "p-message-summary", 3, "innerHTML"], [1, "p-message-detail", 3, "innerHTML"], ["class", "p-message-summary", 4, "ngIf"], ["class", "p-message-detail", 4, "ngIf"], [1, "p-message-summary"], [1, "p-message-detail"], ["type", "button", "pRipple", "", 1, "p-message-close", "p-link", 3, "click"], [3, "styleClass"], ["role", "alert", 3, "ngClass"], [4, "ngTemplateOutlet"]],
  template: function Messages_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 2);
      ɵɵtemplate(1, Messages_ng_container_1_Template, 2, 1, "ng-container", 3)(2, Messages_ng_template_2_Template, 3, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      const staticMessage_r6 = ɵɵreference(3);
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngStyle", ctx.style);
      ɵɵattribute("aria-atomic", true)("aria-live", "assertive")("data-pc-name", "message");
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.contentTemplate)("ngIfElse", staticMessage_r6);
    }
  },
  dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Ripple, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon, TimesIcon],
  styles: ["@layer primeng{.p-message-wrapper{display:flex;align-items:center}.p-message-close{display:flex;align-items:center;justify-content:center;flex:none}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}.p-messages .p-message.ng-animating{overflow:hidden}}\n"],
  encapsulation: 2,
  data: {
    animation: [trigger("messageAnimation", [transition(":enter", [style({
      opacity: 0,
      transform: "translateY(-25%)"
    }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
      height: 0,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      opacity: 0
    }))])])]
  },
  changeDetection: 0
}));
var Messages = _Messages;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Component,
    args: [{
      selector: "p-messages",
      template: '\n        <div class="p-messages p-component" role="alert" [ngStyle]="style" [class]="styleClass" [attr.aria-atomic]="true" [attr.aria-live]="\'assertive\'" [attr.data-pc-name]="\'message\'">\n            <ng-container *ngIf="!contentTemplate; else staticMessage">\n                <div\n                    *ngFor="let msg of messages; let i = index"\n                    [class]="\'p-message p-message-\' + msg.severity"\n                    role="alert"\n                    [@messageAnimation]="{ value: \'visible\', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"\n                >\n                    <div class="p-message-wrapper" [attr.data-pc-section]="\'wrapper\'" [attr.id]="msg.id || null">\n                        <span *ngIf="msg.icon" [class]="\'p-message-icon pi \' + msg.icon" [attr.data-pc-section]="\'icon\'"> </span>\n                        <span class="p-message-icon" *ngIf="!msg.icon">\n                            <ng-container>\n                                <CheckIcon *ngIf="msg.severity === \'success\'" [attr.data-pc-section]="\'icon\'" />\n                                <InfoCircleIcon *ngIf="msg.severity === \'info\'" [attr.data-pc-section]="\'icon\'" />\n                                <TimesCircleIcon *ngIf="msg.severity === \'error\'" [attr.data-pc-section]="\'icon\'" />\n                                <ExclamationTriangleIcon *ngIf="msg.severity === \'warn\'" [attr.data-pc-section]="\'icon\'" />\n                            </ng-container>\n                        </span>\n                        <ng-container *ngIf="!escape; else escapeOut">\n                            <span *ngIf="msg.summary" class="p-message-summary" [innerHTML]="msg.summary" [attr.data-pc-section]="\'summary\'"></span>\n                            <span *ngIf="msg.detail" class="p-message-detail" [innerHTML]="msg.detail" [attr.data-pc-section]="\'detail\'"></span>\n                        </ng-container>\n                        <ng-template #escapeOut>\n                            <span *ngIf="msg.summary" class="p-message-summary" [attr.data-pc-section]="\'summary\'">{{ msg.summary }}</span>\n                            <span *ngIf="msg.detail" class="p-message-detail" [attr.data-pc-section]="\'detail\'">{{ msg.detail }}</span>\n                        </ng-template>\n                        <button class="p-message-close p-link" (click)="removeMessage(i)" *ngIf="closable && (msg.closable ?? true)" type="button" pRipple [attr.aria-label]="closeAriaLabel" [attr.data-pc-section]="\'closebutton\'">\n                            <TimesIcon [styleClass]="\'p-message-close-icon\'" [attr.data-pc-section]="\'closeicon\'" />\n                        </button>\n                    </div>\n                </div>\n            </ng-container>\n            <ng-template #staticMessage>\n                <div [ngClass]="\'p-message p-message-\' + severity" role="alert">\n                    <div class="p-message-wrapper">\n                        <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>\n                    </div>\n                </div>\n            </ng-template>\n        </div>\n    ',
      animations: [trigger("messageAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "translateY(-25%)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-message-wrapper{display:flex;align-items:center}.p-message-close{display:flex;align-items:center;justify-content:center;flex:none}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}.p-messages .p-message.ng-animating{overflow:hidden}}\n"]
    }]
  }], () => [{
    type: MessageService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    value: [{
      type: Input
    }],
    closable: [{
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
    enableService: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    key: [{
      type: Input
    }],
    escape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    severity: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    onClose: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var _MessagesModule = class _MessagesModule {
};
__publicField(_MessagesModule, "ɵfac", function MessagesModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MessagesModule)();
});
__publicField(_MessagesModule, "ɵmod", ɵɵdefineNgModule({
  type: _MessagesModule,
  declarations: [Messages],
  imports: [CommonModule, RippleModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon, TimesIcon, SharedModule],
  exports: [Messages, SharedModule]
}));
__publicField(_MessagesModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, RippleModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon, TimesIcon, SharedModule, SharedModule]
}));
var MessagesModule = _MessagesModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessagesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RippleModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon, TimesIcon, SharedModule],
      exports: [Messages, SharedModule],
      declarations: [Messages]
    }]
  }], null, null);
})();

export {
  Messages,
  MessagesModule
};
//# sourceMappingURL=chunk-HYYZX53O.js.map
