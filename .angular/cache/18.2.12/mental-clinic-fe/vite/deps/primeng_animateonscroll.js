import {
  DomHandler
} from "./chunk-LB42WWNC.js";
import {
  CommonModule,
  DOCUMENT,
  isPlatformBrowser
} from "./chunk-KUZ63KOD.js";
import {
  Directive,
  ElementRef,
  Inject,
  Input,
  NgModule,
  PLATFORM_ID,
  Renderer2,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField,
  __spreadProps,
  __spreadValues
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-animateonscroll.mjs
var _AnimateOnScroll = class _AnimateOnScroll {
  constructor(document, platformId, host, el, renderer) {
    __publicField(this, "document");
    __publicField(this, "platformId");
    __publicField(this, "host");
    __publicField(this, "el");
    __publicField(this, "renderer");
    /**
     * Selector to define the CSS class for enter animation.
     * @group Props
     */
    __publicField(this, "enterClass");
    /**
     * Selector to define the CSS class for leave animation.
     * @group Props
     */
    __publicField(this, "leaveClass");
    /**
     * Specifies the root option of the IntersectionObserver API.
     * @group Props
     */
    __publicField(this, "root");
    /**
     * Specifies the rootMargin option of the IntersectionObserver API.
     * @group Props
     */
    __publicField(this, "rootMargin");
    /**
     * Specifies the threshold option of the IntersectionObserver API
     * @group Props
     */
    __publicField(this, "threshold");
    /**
     * Whether the scroll event listener should be removed after initial run.
     * @group Props
     */
    __publicField(this, "once", true);
    __publicField(this, "observer");
    __publicField(this, "resetObserver");
    __publicField(this, "isObserverActive", false);
    __publicField(this, "animationState");
    __publicField(this, "animationEndListener");
    this.document = document;
    this.platformId = platformId;
    this.host = host;
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.setStyle(this.host.nativeElement, "opacity", this.enterClass ? "0" : "");
    }
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.bindIntersectionObserver();
    }
  }
  get options() {
    return {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    };
  }
  bindIntersectionObserver() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (this.isObserverActive) {
        if (entry.boundingClientRect.top > 0) {
          entry.isIntersecting ? this.enter() : this.leave();
        }
      } else if (entry.isIntersecting) {
        this.enter();
      }
      this.isObserverActive = true;
    }, this.options);
    setTimeout(() => this.observer.observe(this.host.nativeElement), 0);
    this.resetObserver = new IntersectionObserver(([entry]) => {
      if (entry.boundingClientRect.top > 0 && !entry.isIntersecting) {
        this.host.nativeElement.style.opacity = this.enterClass ? "0" : "";
        DomHandler.removeMultipleClasses(this.host.nativeElement, [this.enterClass, this.leaveClass]);
        this.resetObserver.unobserve(this.host.nativeElement);
      }
      this.animationState = void 0;
    }, __spreadProps(__spreadValues({}, this.options), {
      threshold: 0
    }));
  }
  enter() {
    if (this.animationState !== "enter" && this.enterClass) {
      this.host.nativeElement.style.opacity = "";
      DomHandler.removeMultipleClasses(this.host.nativeElement, this.leaveClass);
      DomHandler.addMultipleClasses(this.host.nativeElement, this.enterClass);
      this.once && this.unbindIntersectionObserver();
      this.bindAnimationEvents();
      this.animationState = "enter";
    }
  }
  leave() {
    if (this.animationState !== "leave" && this.leaveClass) {
      this.host.nativeElement.style.opacity = this.enterClass ? "0" : "";
      DomHandler.removeMultipleClasses(this.host.nativeElement, this.enterClass);
      DomHandler.addMultipleClasses(this.host.nativeElement, this.leaveClass);
      this.bindAnimationEvents();
      this.animationState = "leave";
    }
  }
  bindAnimationEvents() {
    if (!this.animationEndListener) {
      this.animationEndListener = this.renderer.listen(this.host.nativeElement, "animationend", () => {
        DomHandler.removeMultipleClasses(this.host.nativeElement, [this.enterClass, this.leaveClass]);
        !this.once && this.resetObserver.observe(this.host.nativeElement);
        this.unbindAnimationEvents();
      });
    }
  }
  unbindAnimationEvents() {
    if (this.animationEndListener) {
      this.animationEndListener();
      this.animationEndListener = null;
    }
  }
  unbindIntersectionObserver() {
    var _a, _b;
    (_a = this.observer) == null ? void 0 : _a.unobserve(this.host.nativeElement);
    (_b = this.resetObserver) == null ? void 0 : _b.unobserve(this.host.nativeElement);
    this.isObserverActive = false;
  }
  ngOnDestroy() {
    this.unbindAnimationEvents();
    this.unbindIntersectionObserver();
  }
};
__publicField(_AnimateOnScroll, "ɵfac", function AnimateOnScroll_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AnimateOnScroll)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
});
__publicField(_AnimateOnScroll, "ɵdir", ɵɵdefineDirective({
  type: _AnimateOnScroll,
  selectors: [["", "pAnimateOnScroll", ""]],
  hostVars: 2,
  hostBindings: function AnimateOnScroll_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("p-animateonscroll", true);
    }
  },
  inputs: {
    enterClass: "enterClass",
    leaveClass: "leaveClass",
    root: "root",
    rootMargin: "rootMargin",
    threshold: [2, "threshold", "threshold", numberAttribute],
    once: [2, "once", "once", booleanAttribute]
  },
  features: [ɵɵInputTransformsFeature]
}));
var AnimateOnScroll = _AnimateOnScroll;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimateOnScroll, [{
    type: Directive,
    args: [{
      selector: "[pAnimateOnScroll]",
      host: {
        "[class.p-animateonscroll]": "true"
      }
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    enterClass: [{
      type: Input
    }],
    leaveClass: [{
      type: Input
    }],
    root: [{
      type: Input
    }],
    rootMargin: [{
      type: Input
    }],
    threshold: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    once: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _AnimateOnScrollModule = class _AnimateOnScrollModule {
};
__publicField(_AnimateOnScrollModule, "ɵfac", function AnimateOnScrollModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AnimateOnScrollModule)();
});
__publicField(_AnimateOnScrollModule, "ɵmod", ɵɵdefineNgModule({
  type: _AnimateOnScrollModule,
  declarations: [AnimateOnScroll],
  imports: [CommonModule],
  exports: [AnimateOnScroll]
}));
__publicField(_AnimateOnScrollModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule]
}));
var AnimateOnScrollModule = _AnimateOnScrollModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimateOnScrollModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [AnimateOnScroll],
      declarations: [AnimateOnScroll]
    }]
  }], null, null);
})();
export {
  AnimateOnScroll,
  AnimateOnScrollModule
};
//# sourceMappingURL=primeng_animateonscroll.js.map
