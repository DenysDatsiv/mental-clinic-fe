import {
  PrimeNGConfig
} from "./chunk-ZROJCIWL.js";
import {
  DomHandler
} from "./chunk-LB42WWNC.js";
import {
  DOCUMENT,
  isPlatformBrowser
} from "./chunk-KUZ63KOD.js";
import {
  Directive,
  ElementRef,
  Inject,
  NgModule,
  NgZone,
  Optional,
  PLATFORM_ID,
  Renderer2,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject
} from "./chunk-R75KKECJ.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-ripple.mjs
var _Ripple = class _Ripple {
  constructor(document, platformId, renderer, el, zone, config) {
    __publicField(this, "document");
    __publicField(this, "platformId");
    __publicField(this, "renderer");
    __publicField(this, "el");
    __publicField(this, "zone");
    __publicField(this, "config");
    __publicField(this, "animationListener");
    __publicField(this, "mouseDownListener");
    __publicField(this, "timeout");
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.el = el;
    this.zone = zone;
    this.config = config;
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.config && this.config.ripple) {
        this.zone.runOutsideAngular(() => {
          this.create();
          this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
        });
      }
    }
  }
  onMouseDown(event) {
    var _a;
    let ink = this.getInk();
    if (!ink || ((_a = this.document.defaultView) == null ? void 0 : _a.getComputedStyle(ink, null).display) === "none") {
      return;
    }
    DomHandler.removeClass(ink, "p-ink-active");
    if (!DomHandler.getHeight(ink) && !DomHandler.getWidth(ink)) {
      let d = Math.max(DomHandler.getOuterWidth(this.el.nativeElement), DomHandler.getOuterHeight(this.el.nativeElement));
      ink.style.height = d + "px";
      ink.style.width = d + "px";
    }
    let offset = DomHandler.getOffset(this.el.nativeElement);
    let x = event.pageX - offset.left + this.document.body.scrollTop - DomHandler.getWidth(ink) / 2;
    let y = event.pageY - offset.top + this.document.body.scrollLeft - DomHandler.getHeight(ink) / 2;
    this.renderer.setStyle(ink, "top", y + "px");
    this.renderer.setStyle(ink, "left", x + "px");
    DomHandler.addClass(ink, "p-ink-active");
    this.timeout = setTimeout(() => {
      let ink2 = this.getInk();
      if (ink2) {
        DomHandler.removeClass(ink2, "p-ink-active");
      }
    }, 401);
  }
  getInk() {
    const children = this.el.nativeElement.children;
    for (let i = 0; i < children.length; i++) {
      if (typeof children[i].className === "string" && children[i].className.indexOf("p-ink") !== -1) {
        return children[i];
      }
    }
    return null;
  }
  resetInk() {
    let ink = this.getInk();
    if (ink) {
      DomHandler.removeClass(ink, "p-ink-active");
    }
  }
  onAnimationEnd(event) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    DomHandler.removeClass(event.currentTarget, "p-ink-active");
  }
  create() {
    let ink = this.renderer.createElement("span");
    this.renderer.addClass(ink, "p-ink");
    this.renderer.appendChild(this.el.nativeElement, ink);
    this.renderer.setAttribute(ink, "aria-hidden", "true");
    this.renderer.setAttribute(ink, "role", "presentation");
    if (!this.animationListener) {
      this.animationListener = this.renderer.listen(ink, "animationend", this.onAnimationEnd.bind(this));
    }
  }
  remove() {
    let ink = this.getInk();
    if (ink) {
      this.mouseDownListener && this.mouseDownListener();
      this.animationListener && this.animationListener();
      this.mouseDownListener = null;
      this.animationListener = null;
      DomHandler.removeElement(ink);
    }
  }
  ngOnDestroy() {
    if (this.config && this.config.ripple) {
      this.remove();
    }
  }
};
__publicField(_Ripple, "ɵfac", function Ripple_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Ripple)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PrimeNGConfig, 8));
});
__publicField(_Ripple, "ɵdir", ɵɵdefineDirective({
  type: _Ripple,
  selectors: [["", "pRipple", ""]],
  hostAttrs: [1, "p-ripple", "p-element"],
  standalone: true
}));
var Ripple = _Ripple;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ripple, [{
    type: Directive,
    args: [{
      selector: "[pRipple]",
      standalone: true,
      host: {
        class: "p-ripple p-element"
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
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: PrimeNGConfig,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var _RippleModule = class _RippleModule {
};
__publicField(_RippleModule, "ɵfac", function RippleModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RippleModule)();
});
__publicField(_RippleModule, "ɵmod", ɵɵdefineNgModule({
  type: _RippleModule,
  imports: [Ripple],
  exports: [Ripple]
}));
__publicField(_RippleModule, "ɵinj", ɵɵdefineInjector({}));
var RippleModule = _RippleModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleModule, [{
    type: NgModule,
    args: [{
      imports: [Ripple],
      exports: [Ripple]
    }]
  }], null, null);
})();

export {
  Ripple,
  RippleModule
};
//# sourceMappingURL=chunk-MUJBADSC.js.map
