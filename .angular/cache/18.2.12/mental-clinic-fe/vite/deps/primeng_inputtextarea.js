import {
  NgControl,
  NgModel
} from "./chunk-ZOG4HQFG.js";
import {
  PrimeNGConfig
} from "./chunk-ZROJCIWL.js";
import "./chunk-U3NLM53U.js";
import {
  CommonModule
} from "./chunk-KUZ63KOD.js";
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgModule,
  Optional,
  Output,
  booleanAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵlistener
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-inputtextarea.mjs
var _InputTextarea = class _InputTextarea {
  constructor(el, ngModel, control, cd, config) {
    __publicField(this, "el");
    __publicField(this, "ngModel");
    __publicField(this, "control");
    __publicField(this, "cd");
    __publicField(this, "config");
    /**
     * When present, textarea size changes as being typed.
     * @group Props
     */
    __publicField(this, "autoResize");
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    __publicField(this, "variant", "outlined");
    /**
     * Callback to invoke on textarea resize.
     * @param {(Event | {})} event - Custom resize event.
     * @group Emits
     */
    __publicField(this, "onResize", new EventEmitter());
    __publicField(this, "filled");
    __publicField(this, "cachedScrollHeight");
    __publicField(this, "ngModelSubscription");
    __publicField(this, "ngControlSubscription");
    this.el = el;
    this.ngModel = ngModel;
    this.control = control;
    this.cd = cd;
    this.config = config;
  }
  ngOnInit() {
    if (this.ngModel) {
      this.ngModelSubscription = this.ngModel.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
    if (this.control) {
      this.ngControlSubscription = this.control.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
  }
  ngAfterViewInit() {
    if (this.autoResize) this.resize();
    this.updateFilledState();
    this.cd.detectChanges();
  }
  onInput(e) {
    this.updateState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
  }
  resize(event) {
    this.el.nativeElement.style.height = "auto";
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + "px";
    if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
      this.el.nativeElement.style.overflowY = "scroll";
      this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
    } else {
      this.el.nativeElement.style.overflow = "hidden";
    }
    this.onResize.emit(event || {});
  }
  updateState() {
    this.updateFilledState();
    if (this.autoResize) {
      this.resize();
    }
  }
  ngOnDestroy() {
    if (this.ngModelSubscription) {
      this.ngModelSubscription.unsubscribe();
    }
    if (this.ngControlSubscription) {
      this.ngControlSubscription.unsubscribe();
    }
  }
};
__publicField(_InputTextarea, "ɵfac", function InputTextarea_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputTextarea)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgModel, 8), ɵɵdirectiveInject(NgControl, 8), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig));
});
__publicField(_InputTextarea, "ɵdir", ɵɵdefineDirective({
  type: _InputTextarea,
  selectors: [["", "pInputTextarea", ""]],
  hostAttrs: [1, "p-inputtextarea", "p-inputtext", "p-component", "p-element"],
  hostVars: 6,
  hostBindings: function InputTextarea_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", function InputTextarea_input_HostBindingHandler($event) {
        return ctx.onInput($event);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("p-filled", ctx.filled)("p-inputtextarea-resizable", ctx.autoResize)("p-variant-filled", ctx.variant === "filled" || ctx.config.inputStyle() === "filled");
    }
  },
  inputs: {
    autoResize: [2, "autoResize", "autoResize", booleanAttribute],
    variant: "variant"
  },
  outputs: {
    onResize: "onResize"
  },
  features: [ɵɵInputTransformsFeature]
}));
var InputTextarea = _InputTextarea;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextarea, [{
    type: Directive,
    args: [{
      selector: "[pInputTextarea]",
      host: {
        class: "p-inputtextarea p-inputtext p-component p-element",
        "[class.p-filled]": "filled",
        "[class.p-inputtextarea-resizable]": "autoResize",
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
    type: NgControl,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    autoResize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    onResize: [{
      type: Output
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var _InputTextareaModule = class _InputTextareaModule {
};
__publicField(_InputTextareaModule, "ɵfac", function InputTextareaModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputTextareaModule)();
});
__publicField(_InputTextareaModule, "ɵmod", ɵɵdefineNgModule({
  type: _InputTextareaModule,
  declarations: [InputTextarea],
  imports: [CommonModule],
  exports: [InputTextarea]
}));
__publicField(_InputTextareaModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule]
}));
var InputTextareaModule = _InputTextareaModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextareaModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [InputTextarea],
      declarations: [InputTextarea]
    }]
  }], null, null);
})();
export {
  InputTextarea,
  InputTextareaModule
};
//# sourceMappingURL=primeng_inputtextarea.js.map
