import {
  ButtonDirective,
  ButtonModule
} from "./chunk-ZLJ4QAH5.js";
import "./chunk-VYCWYYRS.js";
import "./chunk-MUJBADSC.js";
import "./chunk-LND2F6FW.js";
import "./chunk-BJLZ3T2F.js";
import {
  ConfirmationService,
  OverlayService,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  TranslationKeys
} from "./chunk-ZROJCIWL.js";
import {
  zindexutils
} from "./chunk-U3NLM53U.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-5S7AEMUZ.js";
import {
  ConnectedOverlayScrollHandler,
  DomHandler
} from "./chunk-LB42WWNC.js";
import {
  CommonModule,
  DOCUMENT,
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
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  NgModule,
  Renderer2,
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
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
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

// node_modules/primeng/fesm2022/primeng-confirmpopup.mjs
var _c0 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c1 = (a0) => ({
  value: "open",
  params: a0
});
var _c2 = (a0) => ({
  $implicit: a0
});
function ConfirmPopup_div_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ConfirmPopup_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfirmPopup_div_0_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headlessTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r1.confirmation));
  }
}
function ConfirmPopup_div_0_ng_template_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ConfirmPopup_div_0_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfirmPopup_div_0_ng_template_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r1.confirmation));
  }
}
function ConfirmPopup_div_0_ng_template_2_ng_template_3_i_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 14);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.icon);
    ɵɵproperty("ngClass", "p-confirm-popup-icon");
  }
}
function ConfirmPopup_div_0_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ConfirmPopup_div_0_ng_template_2_ng_template_3_i_0_Template, 1, 3, "i", 12);
    ɵɵelementStart(1, "span", 13);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.icon);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.message);
  }
}
function ConfirmPopup_div_0_ng_template_2_button_6_i_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectIcon);
  }
}
function ConfirmPopup_div_0_ng_template_2_button_6_2_ng_template_0_Template(rf, ctx) {
}
function ConfirmPopup_div_0_ng_template_2_button_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ConfirmPopup_div_0_ng_template_2_button_6_2_ng_template_0_Template, 0, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
  }
}
function ConfirmPopup_div_0_ng_template_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click", function ConfirmPopup_div_0_ng_template_2_button_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.reject());
    });
    ɵɵtemplate(1, ConfirmPopup_div_0_ng_template_2_button_6_i_1_Template, 1, 2, "i", 16)(2, ConfirmPopup_div_0_ng_template_2_button_6_2_Template, 2, 0, null, 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap((ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectButtonStyleClass) || "p-button-text");
    ɵɵproperty("label", ctx_r1.rejectButtonLabel)("ngClass", "p-confirm-popup-reject p-button-sm");
    ɵɵattribute("aria-label", ctx_r1.rejectButtonLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectIcon)("ngIfElse", ctx_r1.rejecticon);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.rejectIconTemplate);
  }
}
function ConfirmPopup_div_0_ng_template_2_button_7_i_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptIcon);
  }
}
function ConfirmPopup_div_0_ng_template_2_button_7_2_ng_template_0_Template(rf, ctx) {
}
function ConfirmPopup_div_0_ng_template_2_button_7_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ConfirmPopup_div_0_ng_template_2_button_7_2_ng_template_0_Template, 0, 0, "ng-template", null, 4, ɵɵtemplateRefExtractor);
  }
}
function ConfirmPopup_div_0_ng_template_2_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click", function ConfirmPopup_div_0_ng_template_2_button_7_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.accept());
    });
    ɵɵtemplate(1, ConfirmPopup_div_0_ng_template_2_button_7_i_1_Template, 1, 2, "i", 16)(2, ConfirmPopup_div_0_ng_template_2_button_7_2_Template, 2, 0, null, 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptButtonStyleClass);
    ɵɵproperty("label", ctx_r1.acceptButtonLabel)("ngClass", "p-confirm-popup-accept p-button-sm");
    ɵɵattribute("aria-label", ctx_r1.acceptButtonLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptIcon)("ngIfElse", ctx_r1.accepticon);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.acceptIconTemplate);
  }
}
function ConfirmPopup_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9, 1);
    ɵɵtemplate(2, ConfirmPopup_div_0_ng_template_2_ng_container_2_Template, 2, 4, "ng-container", 7)(3, ConfirmPopup_div_0_ng_template_2_ng_template_3_Template, 3, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 10);
    ɵɵtemplate(6, ConfirmPopup_div_0_ng_template_2_button_6_Template, 3, 8, "button", 11)(7, ConfirmPopup_div_0_ng_template_2_button_7_Template, 3, 8, "button", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const withoutContentTemplate_r5 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.contentTemplate)("ngIfElse", withoutContentTemplate_r5);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", (ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectVisible) !== false);
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptVisible) !== false);
  }
}
function ConfirmPopup_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("click", function ConfirmPopup_div_0_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayClick($event));
    })("@animation.start", function ConfirmPopup_div_0_Template_div_animation_animation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationStart($event));
    })("@animation.done", function ConfirmPopup_div_0_Template_div_animation_animation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationEnd($event));
    });
    ɵɵtemplate(1, ConfirmPopup_div_0_ng_container_1_Template, 2, 4, "ng-container", 7)(2, ConfirmPopup_div_0_ng_template_2_Template, 8, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const notHeadless_r6 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("ngClass", "p-confirm-popup p-component")("ngStyle", ctx_r1.style)("@animation", ɵɵpureFunction1(10, _c1, ɵɵpureFunction2(7, _c0, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.headlessTemplate)("ngIfElse", notHeadless_r6);
  }
}
var _ConfirmPopup = class _ConfirmPopup {
  constructor(el, confirmationService, renderer, cd, config, overlayService, document) {
    __publicField(this, "el");
    __publicField(this, "confirmationService");
    __publicField(this, "renderer");
    __publicField(this, "cd");
    __publicField(this, "config");
    __publicField(this, "overlayService");
    __publicField(this, "document");
    /**
     * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
     * @group Props
     */
    __publicField(this, "key");
    /**
     * Element to receive the focus when the popup gets visible, valid values are "accept", "reject", and "none".
     * @group Props
     */
    __publicField(this, "defaultFocus", "accept");
    /**
     * Transition options of the show animation.
     * @group Props
     */
    __publicField(this, "showTransitionOptions", ".12s cubic-bezier(0, 0, 0.2, 1)");
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    __publicField(this, "hideTransitionOptions", ".1s linear");
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
     * Inline style of the component.
     * @group Props
     */
    __publicField(this, "style");
    /**
     * Style class of the component.
     * @group Props
     */
    __publicField(this, "styleClass");
    __publicField(this, "templates");
    __publicField(this, "container");
    __publicField(this, "subscription");
    __publicField(this, "confirmation");
    __publicField(this, "contentTemplate");
    __publicField(this, "acceptIconTemplate");
    __publicField(this, "rejectIconTemplate");
    __publicField(this, "headlessTemplate");
    __publicField(this, "_visible");
    __publicField(this, "documentClickListener");
    __publicField(this, "documentResizeListener");
    __publicField(this, "scrollHandler");
    __publicField(this, "window");
    this.el = el;
    this.confirmationService = confirmationService;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
    this.overlayService = overlayService;
    this.document = document;
    this.window = this.document.defaultView;
    this.subscription = this.confirmationService.requireConfirmation$.subscribe((confirmation) => {
      if (!confirmation) {
        this.hide();
        return;
      }
      if (confirmation.key === this.key) {
        this.confirmation = confirmation;
        if (this.confirmation.accept) {
          this.confirmation.acceptEvent = new EventEmitter();
          this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
        }
        if (this.confirmation.reject) {
          this.confirmation.rejectEvent = new EventEmitter();
          this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
        }
        this.visible = true;
      }
    });
  }
  /**
   * Defines if the component is visible.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    this.cd.markForCheck();
  }
  ngAfterContentInit() {
    var _a;
    (_a = this.templates) == null ? void 0 : _a.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        case "rejecticon":
          this.rejectIconTemplate = item.template;
          break;
        case "accepticon":
          this.acceptIconTemplate = item.template;
          break;
        case "headless":
          this.headlessTemplate = item.template;
          break;
      }
    });
  }
  onEscapeKeydown(event) {
    if (this.confirmation && this.confirmation.closeOnEscape) {
      this.reject();
    }
  }
  onAnimationStart(event) {
    if (event.toState === "open") {
      this.container = event.element;
      this.renderer.appendChild(this.document.body, this.container);
      this.align();
      this.bindListeners();
      const element = this.getElementToFocus();
      if (element) {
        element.focus();
      }
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.onContainerDestroy();
        break;
    }
  }
  getElementToFocus() {
    switch (this.defaultFocus) {
      case "accept":
        return DomHandler.findSingle(this.container, ".p-confirm-popup-accept");
      case "reject":
        return DomHandler.findSingle(this.container, ".p-confirm-popup-reject");
      case "none":
        return null;
    }
  }
  align() {
    var _a, _b;
    if (this.autoZIndex) {
      zindexutils.set("overlay", this.container, this.config.zIndex.overlay);
    }
    if (!this.confirmation) {
      return;
    }
    DomHandler.absolutePosition(this.container, (_a = this.confirmation) == null ? void 0 : _a.target, false);
    const containerOffset = DomHandler.getOffset(this.container);
    const targetOffset = DomHandler.getOffset((_b = this.confirmation) == null ? void 0 : _b.target);
    let arrowLeft = 0;
    if (containerOffset.left < targetOffset.left) {
      arrowLeft = targetOffset.left - containerOffset.left;
    }
    this.container.style.setProperty("--overlayArrowLeft", "".concat(arrowLeft, "px"));
    if (containerOffset.top < targetOffset.top) {
      DomHandler.addClass(this.container, "p-confirm-popup-flipped");
    }
  }
  hide() {
    this.visible = false;
  }
  accept() {
    var _a;
    if ((_a = this.confirmation) == null ? void 0 : _a.acceptEvent) {
      this.confirmation.acceptEvent.emit();
    }
    this.hide();
  }
  reject() {
    var _a;
    if ((_a = this.confirmation) == null ? void 0 : _a.rejectEvent) {
      this.confirmation.rejectEvent.emit();
    }
    this.hide();
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }
  bindListeners() {
    setTimeout(() => {
      this.bindDocumentClickListener();
      this.bindDocumentResizeListener();
      this.bindScrollListener();
    });
  }
  unbindListeners() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      let documentEvent = DomHandler.isIOS() ? "touchstart" : "click";
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
      this.documentClickListener = this.renderer.listen(documentTarget, documentEvent, (event) => {
        var _a;
        if (this.confirmation && this.confirmation.dismissableMask !== false) {
          let targetElement = this.confirmation.target;
          if (this.container !== event.target && !((_a = this.container) == null ? void 0 : _a.contains(event.target)) && targetElement !== event.target && !targetElement.contains(event.target)) {
            this.hide();
          }
        }
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  onWindowResize() {
    if (this.visible && !DomHandler.isTouchDevice()) {
      this.hide();
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.window, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    var _a;
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler((_a = this.confirmation) == null ? void 0 : _a.target, () => {
        if (this.visible) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unsubscribeConfirmationSubscriptions() {
    if (this.confirmation) {
      if (this.confirmation.acceptEvent) {
        this.confirmation.acceptEvent.unsubscribe();
      }
      if (this.confirmation.rejectEvent) {
        this.confirmation.rejectEvent.unsubscribe();
      }
    }
  }
  onContainerDestroy() {
    this.unbindListeners();
    this.unsubscribeConfirmationSubscriptions();
    if (this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.confirmation = null;
    this.container = null;
  }
  restoreAppend() {
    if (this.container) {
      this.renderer.removeChild(this.document.body, this.container);
    }
    this.onContainerDestroy();
  }
  get acceptButtonLabel() {
    var _a;
    return ((_a = this.confirmation) == null ? void 0 : _a.acceptLabel) || this.config.getTranslation(TranslationKeys.ACCEPT);
  }
  get rejectButtonLabel() {
    var _a;
    return ((_a = this.confirmation) == null ? void 0 : _a.rejectLabel) || this.config.getTranslation(TranslationKeys.REJECT);
  }
  ngOnDestroy() {
    this.restoreAppend();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
__publicField(_ConfirmPopup, "ɵfac", function ConfirmPopup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmPopup)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ConfirmationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(OverlayService), ɵɵdirectiveInject(DOCUMENT));
});
__publicField(_ConfirmPopup, "ɵcmp", ɵɵdefineComponent({
  type: _ConfirmPopup,
  selectors: [["p-confirmPopup"]],
  contentQueries: function ConfirmPopup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  hostAttrs: [1, "p-element"],
  hostBindings: function ConfirmPopup_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown.escape", function ConfirmPopup_keydown_escape_HostBindingHandler($event) {
        return ctx.onEscapeKeydown($event);
      }, false, ɵɵresolveDocument);
    }
  },
  inputs: {
    key: "key",
    defaultFocus: "defaultFocus",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
    baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
    style: "style",
    styleClass: "styleClass",
    visible: "visible"
  },
  features: [ɵɵInputTransformsFeature],
  decls: 1,
  vars: 1,
  consts: [["notHeadless", ""], ["content", ""], ["withoutContentTemplate", ""], ["rejecticon", ""], ["accepticon", ""], ["role", "alertdialog", 3, "ngClass", "ngStyle", "class", "click", 4, "ngIf"], ["role", "alertdialog", 3, "click", "ngClass", "ngStyle"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-confirm-popup-content"], [1, "p-confirm-popup-footer"], ["type", "button", "pButton", "", 3, "label", "ngClass", "class", "click", 4, "ngIf"], [3, "ngClass", "class", 4, "ngIf"], [1, "p-confirm-popup-message"], [3, "ngClass"], ["type", "button", "pButton", "", 3, "click", "label", "ngClass"], [3, "class", 4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"]],
  template: function ConfirmPopup_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ConfirmPopup_div_0_Template, 4, 12, "div", 5);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.visible);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle, ButtonDirective],
  styles: ['@layer primeng{.p-confirm-popup{position:absolute;margin-top:10px;top:0;left:0}.p-confirm-popup-flipped{margin-top:0;margin-bottom:10px}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after{border-bottom-color:transparent}.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{display:flex;align-items:center}}\n'],
  encapsulation: 2,
  data: {
    animation: [trigger("animation", [state("void", style({
      transform: "scaleY(0.8)",
      opacity: 0
    })), state("open", style({
      transform: "translateY(0)",
      opacity: 1
    })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => void", animate("{{hideTransitionParams}}"))])]
  },
  changeDetection: 0
}));
var ConfirmPopup = _ConfirmPopup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmPopup, [{
    type: Component,
    args: [{
      selector: "p-confirmPopup",
      template: '\n        <div\n            *ngIf="visible"\n            [ngClass]="\'p-confirm-popup p-component\'"\n            [ngStyle]="style"\n            [class]="styleClass"\n            role="alertdialog"\n            (click)="onOverlayClick($event)"\n            [@animation]="{ value: \'open\', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"\n            (@animation.start)="onAnimationStart($event)"\n            (@animation.done)="onAnimationEnd($event)"\n        >\n            <ng-container *ngIf="headlessTemplate; else notHeadless">\n                <ng-container *ngTemplateOutlet="headlessTemplate; context: { $implicit: confirmation }"></ng-container>\n            </ng-container>\n            <ng-template #notHeadless>\n                <div #content class="p-confirm-popup-content">\n                    <ng-container *ngIf="contentTemplate; else withoutContentTemplate">\n                        <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: confirmation }"></ng-container>\n                    </ng-container>\n                    <ng-template #withoutContentTemplate>\n                        <i [ngClass]="\'p-confirm-popup-icon\'" [class]="confirmation?.icon" *ngIf="confirmation?.icon"></i>\n                        <span class="p-confirm-popup-message">{{ confirmation?.message }}</span>\n                    </ng-template>\n                </div>\n                <div class="p-confirm-popup-footer">\n                    <button\n                        type="button"\n                        pButton\n                        [label]="rejectButtonLabel"\n                        (click)="reject()"\n                        [ngClass]="\'p-confirm-popup-reject p-button-sm\'"\n                        [class]="confirmation?.rejectButtonStyleClass || \'p-button-text\'"\n                        *ngIf="confirmation?.rejectVisible !== false"\n                        [attr.aria-label]="rejectButtonLabel"\n                    >\n                        <i [class]="confirmation?.rejectIcon" *ngIf="confirmation?.rejectIcon; else rejecticon"></i>\n                        <ng-template #rejecticon *ngTemplateOutlet="rejectIconTemplate"></ng-template>\n                    </button>\n                    <button\n                        type="button"\n                        pButton\n                        [label]="acceptButtonLabel"\n                        (click)="accept()"\n                        [ngClass]="\'p-confirm-popup-accept p-button-sm\'"\n                        [class]="confirmation?.acceptButtonStyleClass"\n                        *ngIf="confirmation?.acceptVisible !== false"\n                        [attr.aria-label]="acceptButtonLabel"\n                    >\n                        <i [class]="confirmation?.acceptIcon" *ngIf="confirmation?.acceptIcon; else accepticon"></i>\n                        <ng-template #accepticon *ngTemplateOutlet="acceptIconTemplate"></ng-template>\n                    </button>\n                </div>\n            </ng-template>\n        </div>\n    ',
      animations: [trigger("animation", [state("void", style({
        transform: "scaleY(0.8)",
        opacity: 0
      })), state("open", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => void", animate("{{hideTransitionParams}}"))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ['@layer primeng{.p-confirm-popup{position:absolute;margin-top:10px;top:0;left:0}.p-confirm-popup-flipped{margin-top:0;margin-bottom:10px}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after{border-bottom-color:transparent}.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{display:flex;align-items:center}}\n']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ConfirmationService
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }, {
    type: OverlayService
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    key: [{
      type: Input
    }],
    defaultFocus: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
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
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onEscapeKeydown: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
var _ConfirmPopupModule = class _ConfirmPopupModule {
};
__publicField(_ConfirmPopupModule, "ɵfac", function ConfirmPopupModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmPopupModule)();
});
__publicField(_ConfirmPopupModule, "ɵmod", ɵɵdefineNgModule({
  type: _ConfirmPopupModule,
  declarations: [ConfirmPopup],
  imports: [CommonModule, ButtonModule, SharedModule],
  exports: [ConfirmPopup, SharedModule]
}));
__publicField(_ConfirmPopupModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, ButtonModule, SharedModule, SharedModule]
}));
var ConfirmPopupModule = _ConfirmPopupModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmPopupModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ButtonModule, SharedModule],
      exports: [ConfirmPopup, SharedModule],
      declarations: [ConfirmPopup]
    }]
  }], null, null);
})();
export {
  ConfirmPopup,
  ConfirmPopupModule
};
//# sourceMappingURL=primeng_confirmpopup.js.map
