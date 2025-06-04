import {
  NgModel
} from "./chunk-ZOG4HQFG.js";
import {
  PrimeNGConfig
} from "./chunk-ZROJCIWL.js";
import {
  CommonModule
} from "./chunk-KUZ63KOD.js";
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  NgModule,
  Optional,
  setClassMetadata,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵlistener
} from "./chunk-R75KKECJ.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-inputtext.mjs
var _InputText = class _InputText {
  constructor(el, ngModel, cd, config) {
    __publicField(this, "el");
    __publicField(this, "ngModel");
    __publicField(this, "cd");
    __publicField(this, "config");
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    __publicField(this, "variant", "outlined");
    __publicField(this, "filled");
    this.el = el;
    this.ngModel = ngModel;
    this.cd = cd;
    this.config = config;
  }
  ngAfterViewInit() {
    this.updateFilledState();
    this.cd.detectChanges();
  }
  ngDoCheck() {
    this.updateFilledState();
  }
  onInput() {
    this.updateFilledState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length || this.ngModel && this.ngModel.model;
  }
};
__publicField(_InputText, "ɵfac", function InputText_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputText)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgModel, 8), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig));
});
__publicField(_InputText, "ɵdir", ɵɵdefineDirective({
  type: _InputText,
  selectors: [["", "pInputText", ""]],
  hostAttrs: [1, "p-inputtext", "p-component", "p-element"],
  hostVars: 4,
  hostBindings: function InputText_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", function InputText_input_HostBindingHandler($event) {
        return ctx.onInput($event);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("p-filled", ctx.filled)("p-variant-filled", ctx.variant === "filled" || ctx.config.inputStyle() === "filled");
    }
  },
  inputs: {
    variant: "variant"
  }
}));
var InputText = _InputText;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputText, [{
    type: Directive,
    args: [{
      selector: "[pInputText]",
      host: {
        class: "p-inputtext p-component p-element",
        "[class.p-filled]": "filled",
        "[class.p-variant-filled]": 'variant === "filled" || config.inputStyle() === "filled"'
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgModel,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    variant: [{
      type: Input
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var _InputTextModule = class _InputTextModule {
};
__publicField(_InputTextModule, "ɵfac", function InputTextModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputTextModule)();
});
__publicField(_InputTextModule, "ɵmod", ɵɵdefineNgModule({
  type: _InputTextModule,
  declarations: [InputText],
  imports: [CommonModule],
  exports: [InputText]
}));
__publicField(_InputTextModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule]
}));
var InputTextModule = _InputTextModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [InputText],
      declarations: [InputText]
    }]
  }], null, null);
})();

export {
  InputText,
  InputTextModule
};
//# sourceMappingURL=chunk-SJTFEDMT.js.map
