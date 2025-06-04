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
  Input,
  NgModule,
  PLATFORM_ID,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-R75KKECJ.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-autofocus.mjs
var _AutoFocus = class _AutoFocus {
  constructor() {
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    __publicField(this, "autofocus", false);
    __publicField(this, "focused", false);
    __publicField(this, "platformId", inject(PLATFORM_ID));
    __publicField(this, "document", inject(DOCUMENT));
    __publicField(this, "host", inject(ElementRef));
  }
  ngAfterContentChecked() {
    if (this.autofocus === false) {
      this.host.nativeElement.removeAttribute("autofocus");
    } else {
      this.host.nativeElement.setAttribute("autofocus", true);
    }
    if (!this.focused) {
      this.autoFocus();
    }
  }
  ngAfterViewChecked() {
    if (!this.focused) {
      this.autoFocus();
    }
  }
  autoFocus() {
    if (isPlatformBrowser(this.platformId) && this.autofocus) {
      setTimeout(() => {
        var _a;
        const focusableElements = DomHandler.getFocusableElements((_a = this.host) == null ? void 0 : _a.nativeElement);
        if (focusableElements.length === 0) {
          this.host.nativeElement.focus();
        }
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
        this.focused = true;
      });
    }
  }
};
__publicField(_AutoFocus, "ɵfac", function AutoFocus_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutoFocus)();
});
__publicField(_AutoFocus, "ɵdir", ɵɵdefineDirective({
  type: _AutoFocus,
  selectors: [["", "pAutoFocus", ""]],
  hostAttrs: [1, "p-element"],
  inputs: {
    autofocus: [2, "autofocus", "autofocus", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
}));
var AutoFocus = _AutoFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocus, [{
    type: Directive,
    args: [{
      selector: "[pAutoFocus]",
      standalone: true,
      host: {
        class: "p-element"
      }
    }]
  }], null, {
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _AutoFocusModule = class _AutoFocusModule {
};
__publicField(_AutoFocusModule, "ɵfac", function AutoFocusModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutoFocusModule)();
});
__publicField(_AutoFocusModule, "ɵmod", ɵɵdefineNgModule({
  type: _AutoFocusModule,
  imports: [AutoFocus],
  exports: [AutoFocus]
}));
__publicField(_AutoFocusModule, "ɵinj", ɵɵdefineInjector({}));
var AutoFocusModule = _AutoFocusModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocusModule, [{
    type: NgModule,
    args: [{
      imports: [AutoFocus],
      exports: [AutoFocus]
    }]
  }], null, null);
})();

export {
  AutoFocus,
  AutoFocusModule
};
//# sourceMappingURL=chunk-LND2F6FW.js.map
