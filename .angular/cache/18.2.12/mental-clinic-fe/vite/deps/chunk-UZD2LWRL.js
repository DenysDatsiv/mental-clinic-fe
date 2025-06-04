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
  Input,
  NgModule,
  PLATFORM_ID,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-R75KKECJ.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-focustrap.mjs
var _FocusTrap = class _FocusTrap {
  constructor() {
    /**
     * When set as true, focus wouldn't be managed.
     * @group Props
     */
    __publicField(this, "pFocusTrapDisabled", false);
    __publicField(this, "platformId", inject(PLATFORM_ID));
    __publicField(this, "host", inject(ElementRef));
    __publicField(this, "document", inject(DOCUMENT));
    __publicField(this, "firstHiddenFocusableElement");
    __publicField(this, "lastHiddenFocusableElement");
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && !this.pFocusTrapDisabled) {
      !this.firstHiddenFocusableElement && !this.lastHiddenFocusableElement && this.createHiddenFocusableElements();
    }
  }
  ngOnChanges(changes) {
    if (changes.pFocusTrapDisabled && isPlatformBrowser(this.platformId)) {
      if (changes.pFocusTrapDisabled.currentValue) {
        this.removeHiddenFocusableElements();
      } else {
        this.createHiddenFocusableElements();
      }
    }
  }
  removeHiddenFocusableElements() {
    if (this.firstHiddenFocusableElement && this.firstHiddenFocusableElement.parentNode) {
      this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement);
    }
    if (this.lastHiddenFocusableElement && this.lastHiddenFocusableElement.parentNode) {
      this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement);
    }
  }
  getComputedSelector(selector) {
    return ':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(selector != null ? selector : "");
  }
  createHiddenFocusableElements() {
    const tabindex = "0";
    const createFocusableElement = (onFocus) => {
      return DomHandler.createElement("span", {
        class: "p-hidden-accessible p-hidden-focusable",
        tabindex,
        role: "presentation",
        "data-p-hidden-accessible": true,
        "data-p-hidden-focusable": true,
        onFocus: onFocus == null ? void 0 : onFocus.bind(this)
      });
    };
    this.firstHiddenFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
    this.lastHiddenFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);
    this.firstHiddenFocusableElement.setAttribute("data-pc-section", "firstfocusableelement");
    this.lastHiddenFocusableElement.setAttribute("data-pc-section", "lastfocusableelement");
    this.host.nativeElement.prepend(this.firstHiddenFocusableElement);
    this.host.nativeElement.append(this.lastHiddenFocusableElement);
  }
  onFirstHiddenElementFocus(event) {
    var _a;
    const {
      currentTarget,
      relatedTarget
    } = event;
    const focusableElement = relatedTarget === this.lastHiddenFocusableElement || !((_a = this.host.nativeElement) == null ? void 0 : _a.contains(relatedTarget)) ? DomHandler.getFirstFocusableElement(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.lastHiddenFocusableElement;
    DomHandler.focus(focusableElement);
  }
  onLastHiddenElementFocus(event) {
    var _a;
    const {
      currentTarget,
      relatedTarget
    } = event;
    const focusableElement = relatedTarget === this.firstHiddenFocusableElement || !((_a = this.host.nativeElement) == null ? void 0 : _a.contains(relatedTarget)) ? DomHandler.getLastFocusableElement(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.firstHiddenFocusableElement;
    DomHandler.focus(focusableElement);
  }
};
__publicField(_FocusTrap, "ɵfac", function FocusTrap_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FocusTrap)();
});
__publicField(_FocusTrap, "ɵdir", ɵɵdefineDirective({
  type: _FocusTrap,
  selectors: [["", "pFocusTrap", ""]],
  hostAttrs: [1, "p-element"],
  inputs: {
    pFocusTrapDisabled: [2, "pFocusTrapDisabled", "pFocusTrapDisabled", booleanAttribute]
  },
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
}));
var FocusTrap = _FocusTrap;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrap, [{
    type: Directive,
    args: [{
      selector: "[pFocusTrap]",
      host: {
        class: "p-element"
      }
    }]
  }], null, {
    pFocusTrapDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _FocusTrapModule = class _FocusTrapModule {
};
__publicField(_FocusTrapModule, "ɵfac", function FocusTrapModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FocusTrapModule)();
});
__publicField(_FocusTrapModule, "ɵmod", ɵɵdefineNgModule({
  type: _FocusTrapModule,
  declarations: [FocusTrap],
  imports: [CommonModule],
  exports: [FocusTrap]
}));
__publicField(_FocusTrapModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule]
}));
var FocusTrapModule = _FocusTrapModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [FocusTrap],
      declarations: [FocusTrap]
    }]
  }], null, null);
})();

export {
  FocusTrap,
  FocusTrapModule
};
//# sourceMappingURL=chunk-UZD2LWRL.js.map
