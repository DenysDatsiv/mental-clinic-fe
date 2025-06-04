import {
  DomHandler
} from "./chunk-LB42WWNC.js";
import {
  CommonModule
} from "./chunk-KUZ63KOD.js";
import {
  Directive,
  ElementRef,
  Input,
  NgModule,
  Renderer2,
  setClassMetadata,
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
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-animate.mjs
var _Animate = class _Animate {
  constructor(host, el, renderer) {
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
    __publicField(this, "observer");
    __publicField(this, "timeout");
    this.host = host;
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    console.log("pAnimate directive is deprecated in 16.7.0 and will be removed in the future. Use pAnimateOnScroll directive instead");
  }
  ngAfterViewInit() {
    this.bindIntersectionObserver();
  }
  bindIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1
    };
    this.observer = new IntersectionObserver((el) => this.isVisible(el), options);
    this.observer.observe(this.host.nativeElement);
  }
  isVisible(element) {
    const [intersectionObserverEntry] = element;
    intersectionObserverEntry.isIntersecting ? this.enter() : this.leave();
  }
  enter() {
    this.host.nativeElement.style.visibility = "visible";
    DomHandler.addClass(this.host.nativeElement, this.enterClass);
  }
  leave() {
    DomHandler.removeClass(this.host.nativeElement, this.enterClass);
    if (this.leaveClass) {
      DomHandler.addClass(this.host.nativeElement, this.leaveClass);
    }
    const animationDuration = this.host.nativeElement.style.animationDuration || 500;
    this.timeout = setTimeout(() => {
      this.host.nativeElement.style.visibility = "hidden";
    }, animationDuration);
  }
  unbindIntersectionObserver() {
    if (this.observer) {
      this.observer.unobserve(this.host.nativeElement);
    }
  }
  ngOnDestroy() {
    this.unbindIntersectionObserver();
    clearTimeout(this.timeout);
  }
};
__publicField(_Animate, "ɵfac", function Animate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Animate)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
});
__publicField(_Animate, "ɵdir", ɵɵdefineDirective({
  type: _Animate,
  selectors: [["", "pAnimate", ""]],
  hostVars: 2,
  hostBindings: function Animate_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("p-animate", true);
    }
  },
  inputs: {
    enterClass: "enterClass",
    leaveClass: "leaveClass"
  }
}));
var Animate = _Animate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Animate, [{
    type: Directive,
    args: [{
      selector: "[pAnimate]",
      host: {
        "[class.p-animate]": "true"
      }
    }]
  }], () => [{
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
    }]
  });
})();
var _AnimateModule = class _AnimateModule {
};
__publicField(_AnimateModule, "ɵfac", function AnimateModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AnimateModule)();
});
__publicField(_AnimateModule, "ɵmod", ɵɵdefineNgModule({
  type: _AnimateModule,
  declarations: [Animate],
  imports: [CommonModule],
  exports: [Animate]
}));
__publicField(_AnimateModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule]
}));
var AnimateModule = _AnimateModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimateModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Animate],
      declarations: [Animate]
    }]
  }], null, null);
})();
export {
  Animate,
  AnimateModule
};
//# sourceMappingURL=primeng_animate.js.map
