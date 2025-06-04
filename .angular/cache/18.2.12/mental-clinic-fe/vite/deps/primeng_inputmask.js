import {
  InputText,
  InputTextModule
} from "./chunk-SJTFEDMT.js";
import {
  TimesIcon
} from "./chunk-AP6UZX4B.js";
import {
  AutoFocus,
  AutoFocusModule
} from "./chunk-LND2F6FW.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-ZOG4HQFG.js";
import "./chunk-BJLZ3T2F.js";
import {
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule
} from "./chunk-ZROJCIWL.js";
import "./chunk-U3NLM53U.js";
import {
  DomHandler
} from "./chunk-LB42WWNC.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-KUZ63KOD.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  forwardRef,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-inputmask.mjs
var _c0 = ["input"];
function InputMask_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "TimesIcon", 5);
    ɵɵlistener("click", function InputMask_ng_container_2_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.clear());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-inputmask-clear-icon");
    ɵɵattribute("data-pc-section", "clearIcon");
  }
}
function InputMask_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function InputMask_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, InputMask_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputMask_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 6);
    ɵɵlistener("click", function InputMask_ng_container_2_span_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.clear());
    });
    ɵɵtemplate(1, InputMask_ng_container_2_span_2_1_Template, 1, 0, null, 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "clearIcon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.clearIconTemplate);
  }
}
function InputMask_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, InputMask_ng_container_2_TimesIcon_1_Template, 1, 2, "TimesIcon", 3)(2, InputMask_ng_container_2_span_2_Template, 2, 2, "span", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.clearIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.clearIconTemplate);
  }
}
var INPUTMASK_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputMask),
  multi: true
};
var _InputMask = class _InputMask {
  constructor(document, platformId, el, cd, config) {
    __publicField(this, "document");
    __publicField(this, "platformId");
    __publicField(this, "el");
    __publicField(this, "cd");
    __publicField(this, "config");
    /**
     * HTML5 input type.
     * @group Props
     */
    __publicField(this, "type", "text");
    /**
     * Placeholder character in mask, default is underscore.
     * @group Props
     */
    __publicField(this, "slotChar", "_");
    /**
     * Clears the incomplete value on blur.
     * @group Props
     */
    __publicField(this, "autoClear", true);
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    __publicField(this, "showClear", false);
    /**
     * Inline style of the input field.
     * @group Props
     */
    __publicField(this, "style");
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    __publicField(this, "inputId");
    /**
     * Style class of the input field.
     * @group Props
     */
    __publicField(this, "styleClass");
    /**
     * Advisory information to display on input.
     * @group Props
     */
    __publicField(this, "placeholder");
    /**
     * Size of the input field.
     * @group Props
     */
    __publicField(this, "size");
    /**
     * Maximum number of character allows in the input field.
     * @group Props
     */
    __publicField(this, "maxlength");
    /**
     * Specifies tab order of the element.
     * @group Props
     */
    __publicField(this, "tabindex");
    /**
     * Title text of the input text.
     * @group Props
     */
    __publicField(this, "title");
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    __publicField(this, "variant", "outlined");
    /**
     * Used to define a string that labels the input element.
     * @group Props
     */
    __publicField(this, "ariaLabel");
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    __publicField(this, "ariaLabelledBy");
    /**
     * Used to indicate that user input is required on an element before a form can be submitted.
     * @group Props
     */
    __publicField(this, "ariaRequired");
    /**
     * When present, it specifies that the element value cannot be altered.
     * @group Props
     */
    __publicField(this, "disabled");
    /**
     * When present, it specifies that an input field is read-only.
     * @group Props
     */
    __publicField(this, "readonly");
    /**
     * Defines if ngModel sets the raw unmasked value to bound value or the formatted mask value.
     * @group Props
     */
    __publicField(this, "unmask");
    /**
     * Name of the input field.
     * @group Props
     */
    __publicField(this, "name");
    /**
     * When present, it specifies that an input field must be filled out before submitting the form.
     * @group Props
     */
    __publicField(this, "required");
    /**
     * Regex pattern for alpha characters
     * @group Props
     */
    __publicField(this, "characterPattern", "[A-Za-z]");
    /**
     * When present, the input gets a focus automatically on load.
     * @group Props
     */
    __publicField(this, "autofocus");
    /**
     * Used to define a string that autocomplete attribute the current element.
     * @group Props
     */
    __publicField(this, "autocomplete");
    /**
     * When present, it specifies that whether to clean buffer value from model.
     * @group Props
     */
    __publicField(this, "keepBuffer", false);
    /**
     * Callback to invoke when the mask is completed.
     * @group Emits
     */
    __publicField(this, "onComplete", new EventEmitter());
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    __publicField(this, "onFocus", new EventEmitter());
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    __publicField(this, "onBlur", new EventEmitter());
    /**
     * Callback to invoke on input.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    __publicField(this, "onInput", new EventEmitter());
    /**
     * Callback to invoke on input key press.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    __publicField(this, "onKeydown", new EventEmitter());
    /**
     * Callback to invoke when input field is cleared.
     * @group Emits
     */
    __publicField(this, "onClear", new EventEmitter());
    __publicField(this, "inputViewChild");
    __publicField(this, "templates");
    __publicField(this, "clearIconTemplate");
    __publicField(this, "value");
    __publicField(this, "_mask");
    __publicField(this, "onModelChange", () => {
    });
    __publicField(this, "onModelTouched", () => {
    });
    __publicField(this, "input");
    __publicField(this, "filled");
    __publicField(this, "defs");
    __publicField(this, "tests");
    __publicField(this, "partialPosition");
    __publicField(this, "firstNonMaskPos");
    __publicField(this, "lastRequiredNonMaskPos");
    __publicField(this, "len");
    __publicField(this, "oldVal");
    __publicField(this, "buffer");
    __publicField(this, "defaultBuffer");
    __publicField(this, "focusText");
    __publicField(this, "caretTimeoutId");
    __publicField(this, "androidChrome", true);
    __publicField(this, "focused");
    __publicField(this, "_variant", "outlined");
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.cd = cd;
    this.config = config;
  }
  /**
   * When present, the input gets a focus automatically on load.
   * @group Props
   * @deprecated Use autofocus property instead.
   */
  set autoFocus(value) {
    this.autofocus = value;
    console.warn("autoFocus is deprecated. Use autofocus property instead.");
  }
  /**
   * Mask pattern.
   * @group Props
   */
  get mask() {
    return this._mask;
  }
  set mask(val) {
    this._mask = val;
    this.initMask();
    this.writeValue("");
    this.onModelChange(this.value);
  }
  get inputClass() {
    return {
      "p-inputmask": true
    };
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      let ua = navigator.userAgent;
      this.androidChrome = /chrome/i.test(ua) && /android/i.test(ua);
    }
    this.initMask();
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "clearicon":
          this.clearIconTemplate = item.template;
          break;
      }
    });
  }
  initMask() {
    this.tests = [];
    this.partialPosition = this.mask.length;
    this.len = this.mask.length;
    this.firstNonMaskPos = null;
    this.defs = {
      "9": "[0-9]",
      a: this.characterPattern,
      "*": "".concat(this.characterPattern, "|[0-9]")
    };
    let maskTokens = this.mask.split("");
    for (let i = 0; i < maskTokens.length; i++) {
      let c = maskTokens[i];
      if (c == "?") {
        this.len--;
        this.partialPosition = i;
      } else if (this.defs[c]) {
        this.tests.push(new RegExp(this.defs[c]));
        if (this.firstNonMaskPos === null) {
          this.firstNonMaskPos = this.tests.length - 1;
        }
        if (i < this.partialPosition) {
          this.lastRequiredNonMaskPos = this.tests.length - 1;
        }
      } else {
        this.tests.push(null);
      }
    }
    this.buffer = [];
    for (let i = 0; i < maskTokens.length; i++) {
      let c = maskTokens[i];
      if (c != "?") {
        if (this.defs[c]) this.buffer.push(this.getPlaceholder(i));
        else this.buffer.push(c);
      }
    }
    this.defaultBuffer = this.buffer.join("");
  }
  writeValue(value) {
    this.value = value;
    if (this.inputViewChild && this.inputViewChild.nativeElement) {
      if (this.value == void 0 || this.value == null) this.inputViewChild.nativeElement.value = "";
      else this.inputViewChild.nativeElement.value = this.value;
      this.checkVal();
      this.focusText = this.inputViewChild.nativeElement.value;
      this.updateFilledState();
    }
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  caret(first, last) {
    var _a;
    let range, begin, end;
    if (!((_a = this.inputViewChild) == null ? void 0 : _a.nativeElement.offsetParent) || this.inputViewChild.nativeElement !== this.inputViewChild.nativeElement.ownerDocument.activeElement) {
      return;
    }
    if (typeof first == "number") {
      begin = first;
      end = typeof last === "number" ? last : begin;
      if (this.inputViewChild.nativeElement.setSelectionRange) {
        this.inputViewChild.nativeElement.setSelectionRange(begin, end);
      } else if (this.inputViewChild.nativeElement["createTextRange"]) {
        range = this.inputViewChild.nativeElement["createTextRange"]();
        range.collapse(true);
        range.moveEnd("character", end);
        range.moveStart("character", begin);
        range.select();
      }
    } else {
      if (this.inputViewChild.nativeElement.setSelectionRange) {
        begin = this.inputViewChild.nativeElement.selectionStart;
        end = this.inputViewChild.nativeElement.selectionEnd;
      } else if (this.document && this.document["selection"].createRange) {
        range = this.document.createRange();
        begin = 0 - range.duplicate().moveStart("character", -1e5);
        end = begin + range.text.length;
      }
      return {
        begin,
        end
      };
    }
  }
  isCompleted() {
    let completed;
    for (let i = this.firstNonMaskPos; i <= this.lastRequiredNonMaskPos; i++) {
      if (this.tests[i] && this.buffer[i] === this.getPlaceholder(i)) {
        return false;
      }
    }
    return true;
  }
  getPlaceholder(i) {
    if (i < this.slotChar.length) {
      return this.slotChar.charAt(i);
    }
    return this.slotChar.charAt(0);
  }
  seekNext(pos) {
    while (++pos < this.len && !this.tests[pos]) ;
    return pos;
  }
  seekPrev(pos) {
    while (--pos >= 0 && !this.tests[pos]) ;
    return pos;
  }
  shiftL(begin, end) {
    let i, j;
    if (begin < 0) {
      return;
    }
    for (i = begin, j = this.seekNext(end); i < this.len; i++) {
      if (this.tests[i]) {
        if (j < this.len && this.tests[i].test(this.buffer[j])) {
          this.buffer[i] = this.buffer[j];
          this.buffer[j] = this.getPlaceholder(j);
        } else {
          break;
        }
        j = this.seekNext(j);
      }
    }
    this.writeBuffer();
    this.caret(Math.max(this.firstNonMaskPos, begin));
  }
  shiftR(pos) {
    let i, c, j, t;
    for (i = pos, c = this.getPlaceholder(pos); i < this.len; i++) {
      if (this.tests[i]) {
        j = this.seekNext(i);
        t = this.buffer[i];
        this.buffer[i] = c;
        if (j < this.len && this.tests[j].test(t)) {
          c = t;
        } else {
          break;
        }
      }
    }
  }
  handleAndroidInput(e) {
    var _a;
    var curVal = (_a = this.inputViewChild) == null ? void 0 : _a.nativeElement.value;
    var pos = this.caret();
    if (this.oldVal && this.oldVal.length && this.oldVal.length > curVal.length) {
      this.checkVal(true);
      while (pos.begin > 0 && !this.tests[pos.begin]) pos.begin--;
      if (pos.begin === 0) {
        while (pos.begin < this.firstNonMaskPos && !this.tests[pos.begin]) pos.begin++;
      }
      setTimeout(() => {
        const begin = pos.begin;
        const end = this.seekNext(begin);
        this.caret(begin, begin);
        this.clearBuffer(begin, end - 1);
        if (this.keepBuffer) {
          this.shiftL(begin, end - 2);
        } else {
          this.shiftL(begin, end - 1);
        }
        this.updateModel(e);
        if (this.isCompleted()) {
          this.onComplete.emit();
        }
      }, 0);
    } else {
      this.checkVal(true);
      while (pos.begin < this.len && !this.tests[pos.begin - 1]) pos.begin++;
      setTimeout(() => {
        this.caret(pos.begin, pos.begin);
        this.updateModel(e);
        if (this.isCompleted()) {
          this.onComplete.emit();
        }
      }, 0);
    }
  }
  onInputBlur(e) {
    var _a, _b, _c;
    this.focused = false;
    this.onModelTouched();
    if (!this.keepBuffer) {
      this.checkVal();
    }
    this.updateFilledState();
    this.onBlur.emit(e);
    if (((_a = this.inputViewChild) == null ? void 0 : _a.nativeElement.value) != this.focusText || ((_b = this.inputViewChild) == null ? void 0 : _b.nativeElement.value) != this.value) {
      this.updateModel(e);
      let event = this.document.createEvent("HTMLEvents");
      event.initEvent("change", true, false);
      (_c = this.inputViewChild) == null ? void 0 : _c.nativeElement.dispatchEvent(event);
    }
  }
  onInputKeydown(e) {
    var _a;
    if (this.readonly) {
      return;
    }
    let k = e.which || e.keyCode, pos, begin, end;
    let iPhone;
    if (isPlatformBrowser(this.platformId)) {
      iPhone = /iphone/i.test(DomHandler.getUserAgent());
    }
    this.oldVal = (_a = this.inputViewChild) == null ? void 0 : _a.nativeElement.value;
    this.onKeydown.emit(e);
    if (k === 8 || k === 46 || iPhone && k === 127) {
      pos = this.caret();
      begin = pos.begin;
      end = pos.end;
      if (end - begin === 0) {
        begin = k !== 46 ? this.seekPrev(begin) : end = this.seekNext(begin - 1);
        end = k === 46 ? this.seekNext(end) : end;
      }
      this.clearBuffer(begin, end);
      if (this.keepBuffer) {
        this.shiftL(begin, end - 2);
      } else {
        this.shiftL(begin, end - 1);
      }
      this.updateModel(e);
      this.onInput.emit(e);
      e.preventDefault();
    } else if (k === 13) {
      this.onInputBlur(e);
      this.updateModel(e);
    } else if (k === 27) {
      this.inputViewChild.nativeElement.value = this.focusText;
      this.caret(0, this.checkVal());
      this.updateModel(e);
      e.preventDefault();
    }
  }
  onKeyPress(e) {
    if (this.readonly) {
      return;
    }
    var k = e.which || e.keyCode, pos = this.caret(), p, c, next, completed;
    if (e.ctrlKey || e.altKey || e.metaKey || k < 32 || k > 34 && k < 41) {
      return;
    } else if (k && k !== 13) {
      if (pos.end - pos.begin !== 0) {
        this.clearBuffer(pos.begin, pos.end);
        this.shiftL(pos.begin, pos.end - 1);
      }
      p = this.seekNext(pos.begin - 1);
      if (p < this.len) {
        c = String.fromCharCode(k);
        if (this.tests[p].test(c)) {
          this.shiftR(p);
          this.buffer[p] = c;
          this.writeBuffer();
          next = this.seekNext(p);
          if (DomHandler.isClient() && /android/i.test(DomHandler.getUserAgent())) {
            let proxy = () => {
              this.caret(next);
            };
            setTimeout(proxy, 0);
          } else {
            this.caret(next);
          }
          if (pos.begin <= this.lastRequiredNonMaskPos) {
            completed = this.isCompleted();
          }
          this.onInput.emit(e);
        }
      }
      e.preventDefault();
    }
    this.updateModel(e);
    this.updateFilledState();
    if (completed) {
      this.onComplete.emit();
    }
  }
  clearBuffer(start, end) {
    if (!this.keepBuffer) {
      let i;
      for (i = start; i < end && i < this.len; i++) {
        if (this.tests[i]) {
          this.buffer[i] = this.getPlaceholder(i);
        }
      }
    }
  }
  writeBuffer() {
    this.inputViewChild.nativeElement.value = this.buffer.join("");
  }
  checkVal(allow) {
    var _a, _b, _c;
    let test = (_a = this.inputViewChild) == null ? void 0 : _a.nativeElement.value, lastMatch = -1, i, c, pos;
    for (i = 0, pos = 0; i < this.len; i++) {
      if (this.tests[i]) {
        this.buffer[i] = this.getPlaceholder(i);
        while (pos++ < test.length) {
          c = test.charAt(pos - 1);
          if (this.tests[i].test(c)) {
            if (!this.keepBuffer) {
              this.buffer[i] = c;
            }
            lastMatch = i;
            break;
          }
        }
        if (pos > test.length) {
          this.clearBuffer(i + 1, this.len);
          break;
        }
      } else {
        if (this.buffer[i] === test.charAt(pos)) {
          pos++;
        }
        if (i < this.partialPosition) {
          lastMatch = i;
        }
      }
    }
    if (allow) {
      this.writeBuffer();
    } else if (lastMatch + 1 < this.partialPosition) {
      if (this.autoClear || this.buffer.join("") === this.defaultBuffer) {
        if ((_b = this.inputViewChild) == null ? void 0 : _b.nativeElement.value) this.inputViewChild.nativeElement.value = "";
        this.clearBuffer(0, this.len);
      } else {
        this.writeBuffer();
      }
    } else {
      this.writeBuffer();
      this.inputViewChild.nativeElement.value = (_c = this.inputViewChild) == null ? void 0 : _c.nativeElement.value.substring(0, lastMatch + 1);
    }
    return this.partialPosition ? i : this.firstNonMaskPos;
  }
  onInputFocus(event) {
    var _a, _b;
    if (this.readonly) {
      return;
    }
    this.focused = true;
    clearTimeout(this.caretTimeoutId);
    let pos;
    this.focusText = (_a = this.inputViewChild) == null ? void 0 : _a.nativeElement.value;
    pos = this.keepBuffer ? (_b = this.inputViewChild) == null ? void 0 : _b.nativeElement.value.length : this.checkVal();
    this.caretTimeoutId = setTimeout(() => {
      var _a2, _b2, _c;
      if (((_a2 = this.inputViewChild) == null ? void 0 : _a2.nativeElement) !== ((_b2 = this.inputViewChild) == null ? void 0 : _b2.nativeElement.ownerDocument.activeElement)) {
        return;
      }
      this.writeBuffer();
      if (pos == ((_c = this.mask) == null ? void 0 : _c.replace("?", "").length)) {
        this.caret(0, pos);
      } else {
        this.caret(pos);
      }
    }, 10);
    this.onFocus.emit(event);
  }
  onInputChange(event) {
    if (this.androidChrome) this.handleAndroidInput(event);
    else this.handleInputChange(event);
    this.onInput.emit(event);
  }
  handleInputChange(event) {
    if (this.readonly || this.disabled) {
      return;
    }
    setTimeout(() => {
      var pos = this.checkVal(true);
      this.caret(pos);
      this.updateModel(event);
      if (this.isCompleted()) {
        this.onComplete.emit();
      }
    }, 0);
  }
  getUnmaskedValue() {
    let unmaskedBuffer = [];
    for (let i = 0; i < this.buffer.length; i++) {
      let c = this.buffer[i];
      if (this.tests[i] && c != this.getPlaceholder(i)) {
        unmaskedBuffer.push(c);
      }
    }
    return unmaskedBuffer.join("");
  }
  updateModel(e) {
    const updatedValue = this.unmask ? this.getUnmaskedValue() : e.target.value;
    if (updatedValue !== null || updatedValue !== void 0) {
      this.value = updatedValue;
      this.onModelChange(this.value);
    }
  }
  updateFilledState() {
    var _a;
    this.filled = ((_a = this.inputViewChild) == null ? void 0 : _a.nativeElement) && this.inputViewChild.nativeElement.value != "";
  }
  focus() {
    var _a;
    (_a = this.inputViewChild) == null ? void 0 : _a.nativeElement.focus();
  }
  clear() {
    this.inputViewChild.nativeElement.value = "";
    this.value = null;
    this.onModelChange(this.value);
    this.onClear.emit();
  }
};
__publicField(_InputMask, "ɵfac", function InputMask_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputMask)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig));
});
__publicField(_InputMask, "ɵcmp", ɵɵdefineComponent({
  type: _InputMask,
  selectors: [["p-inputMask"]],
  contentQueries: function InputMask_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function InputMask_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  hostVars: 6,
  hostBindings: function InputMask_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused)("p-inputmask-clearable", ctx.showClear && !ctx.disabled);
    }
  },
  inputs: {
    type: "type",
    slotChar: "slotChar",
    autoClear: [2, "autoClear", "autoClear", booleanAttribute],
    showClear: [2, "showClear", "showClear", booleanAttribute],
    style: "style",
    inputId: "inputId",
    styleClass: "styleClass",
    placeholder: "placeholder",
    size: [2, "size", "size", numberAttribute],
    maxlength: [2, "maxlength", "maxlength", numberAttribute],
    tabindex: "tabindex",
    title: "title",
    variant: "variant",
    ariaLabel: "ariaLabel",
    ariaLabelledBy: "ariaLabelledBy",
    ariaRequired: [2, "ariaRequired", "ariaRequired", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    readonly: [2, "readonly", "readonly", booleanAttribute],
    unmask: [2, "unmask", "unmask", booleanAttribute],
    name: "name",
    required: [2, "required", "required", booleanAttribute],
    characterPattern: "characterPattern",
    autofocus: [2, "autofocus", "autofocus", booleanAttribute],
    autoFocus: [2, "autoFocus", "autoFocus", booleanAttribute],
    autocomplete: "autocomplete",
    keepBuffer: [2, "keepBuffer", "keepBuffer", booleanAttribute],
    mask: "mask"
  },
  outputs: {
    onComplete: "onComplete",
    onFocus: "onFocus",
    onBlur: "onBlur",
    onInput: "onInput",
    onKeydown: "onKeydown",
    onClear: "onClear"
  },
  features: [ɵɵProvidersFeature([INPUTMASK_VALUE_ACCESSOR]), ɵɵInputTransformsFeature],
  decls: 3,
  vars: 24,
  consts: [["input", ""], ["pInputText", "", "pAutoFocus", "", 3, "focus", "blur", "keydown", "keypress", "input", "paste", "ngClass", "ngStyle", "disabled", "readonly", "variant", "autofocus"], [4, "ngIf"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-inputmask-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "styleClass"], [1, "p-inputmask-clear-icon", 3, "click"], [4, "ngTemplateOutlet"]],
  template: function InputMask_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "input", 1, 0);
      ɵɵlistener("focus", function InputMask_Template_input_focus_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onInputFocus($event));
      })("blur", function InputMask_Template_input_blur_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onInputBlur($event));
      })("keydown", function InputMask_Template_input_keydown_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onInputKeydown($event));
      })("keypress", function InputMask_Template_input_keypress_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onKeyPress($event));
      })("input", function InputMask_Template_input_input_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onInputChange($event));
      })("paste", function InputMask_Template_input_paste_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleInputChange($event));
      });
      ɵɵelementEnd();
      ɵɵtemplate(2, InputMask_ng_container_2_Template, 3, 2, "ng-container", 2);
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", ctx.inputClass)("ngStyle", ctx.style)("disabled", ctx.disabled)("readonly", ctx.readonly)("variant", ctx.variant)("autofocus", ctx.autofocus);
      ɵɵattribute("id", ctx.inputId)("type", ctx.type)("name", ctx.name)("placeholder", ctx.placeholder)("title", ctx.title)("size", ctx.size)("autocomplete", ctx.autocomplete)("maxlength", ctx.maxlength)("tabindex", ctx.tabindex)("aria-label", ctx.ariaLabel)("aria-labelledBy", ctx.ariaLabelledBy)("aria-required", ctx.ariaRequired)("required", ctx.required)("data-pc-name", "inputmask")("data-pc-section", "root");
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.value != null && ctx.filled && ctx.showClear && !ctx.disabled);
    }
  },
  dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, InputText, AutoFocus, TimesIcon],
  styles: ["@layer primeng{.p-inputmask-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-inputmask-clearable{position:relative}}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var InputMask = _InputMask;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputMask, [{
    type: Component,
    args: [{
      selector: "p-inputMask",
      template: '\n        <input\n            #input\n            pInputText\n            [class]="styleClass"\n            [ngClass]="inputClass"\n            [attr.id]="inputId"\n            [attr.type]="type"\n            [attr.name]="name"\n            [ngStyle]="style"\n            [attr.placeholder]="placeholder"\n            [attr.title]="title"\n            [attr.size]="size"\n            [attr.autocomplete]="autocomplete"\n            [attr.maxlength]="maxlength"\n            [attr.tabindex]="tabindex"\n            [attr.aria-label]="ariaLabel"\n            [attr.aria-labelledBy]="ariaLabelledBy"\n            [attr.aria-required]="ariaRequired"\n            [disabled]="disabled"\n            [readonly]="readonly"\n            [attr.required]="required"\n            (focus)="onInputFocus($event)"\n            (blur)="onInputBlur($event)"\n            (keydown)="onInputKeydown($event)"\n            (keypress)="onKeyPress($event)"\n            pAutoFocus\n            [variant]="variant"\n            [autofocus]="autofocus"\n            (input)="onInputChange($event)"\n            (paste)="handleInputChange($event)"\n            [attr.data-pc-name]="\'inputmask\'"\n            [attr.data-pc-section]="\'root\'"\n        />\n        <ng-container *ngIf="value != null && filled && showClear && !disabled">\n            <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="\'p-inputmask-clear-icon\'" (click)="clear()" [attr.data-pc-section]="\'clearIcon\'" />\n            <span *ngIf="clearIconTemplate" class="p-inputmask-clear-icon" (click)="clear()" [attr.data-pc-section]="\'clearIcon\'">\n                <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>\n            </span>\n        </ng-container>\n    ',
      host: {
        class: "p-element",
        "[class.p-inputwrapper-filled]": "filled",
        "[class.p-inputwrapper-focus]": "focused",
        "[class.p-inputmask-clearable]": "showClear && !disabled"
      },
      providers: [INPUTMASK_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: ["@layer primeng{.p-inputmask-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-inputmask-clearable{position:relative}}\n"]
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
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    type: [{
      type: Input
    }],
    slotChar: [{
      type: Input
    }],
    autoClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    size: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    maxlength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    tabindex: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaRequired: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    unmask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    characterPattern: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autocomplete: [{
      type: Input
    }],
    keepBuffer: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    mask: [{
      type: Input
    }],
    onComplete: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onInput: [{
      type: Output
    }],
    onKeydown: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input", {
        static: true
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var _InputMaskModule = class _InputMaskModule {
};
__publicField(_InputMaskModule, "ɵfac", function InputMaskModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputMaskModule)();
});
__publicField(_InputMaskModule, "ɵmod", ɵɵdefineNgModule({
  type: _InputMaskModule,
  declarations: [InputMask],
  imports: [CommonModule, InputTextModule, AutoFocusModule, TimesIcon],
  exports: [InputMask, SharedModule]
}));
__publicField(_InputMaskModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, InputTextModule, AutoFocusModule, TimesIcon, SharedModule]
}));
var InputMaskModule = _InputMaskModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputMaskModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, InputTextModule, AutoFocusModule, TimesIcon],
      exports: [InputMask, SharedModule],
      declarations: [InputMask]
    }]
  }], null, null);
})();
export {
  INPUTMASK_VALUE_ACCESSOR,
  InputMask,
  InputMaskModule
};
//# sourceMappingURL=primeng_inputmask.js.map
