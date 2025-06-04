import {
  Scroller,
  ScrollerModule
} from "./chunk-VW3MRXK5.js";
import {
  InputTextModule
} from "./chunk-SJTFEDMT.js";
import {
  TimesCircleIcon
} from "./chunk-OLOIW27Q.js";
import {
  Overlay,
  OverlayModule
} from "./chunk-RGZM7SWW.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-ZLJ4QAH5.js";
import {
  SpinnerIcon
} from "./chunk-VYCWYYRS.js";
import {
  TimesIcon
} from "./chunk-AP6UZX4B.js";
import {
  Ripple,
  RippleModule
} from "./chunk-MUJBADSC.js";
import {
  AutoFocus,
  AutoFocusModule
} from "./chunk-LND2F6FW.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-ZOG4HQFG.js";
import {
  ChevronDownIcon
} from "./chunk-HCVMWVY4.js";
import "./chunk-BJLZ3T2F.js";
import {
  OverlayService,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  TranslationKeys
} from "./chunk-ZROJCIWL.js";
import {
  ObjectUtils,
  UniqueComponentId
} from "./chunk-U3NLM53U.js";
import "./chunk-5S7AEMUZ.js";
import {
  DomHandler
} from "./chunk-LB42WWNC.js";
import {
  CommonModule,
  DOCUMENT,
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
  Inject,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  numberAttribute,
  setClassMetadata,
  signal,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField,
  __spreadValues
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-autocomplete.mjs
var _c0 = ["container"];
var _c1 = ["focusInput"];
var _c2 = ["multiIn"];
var _c3 = ["multiContainer"];
var _c4 = ["ddBtn"];
var _c5 = ["items"];
var _c6 = ["scroller"];
var _c7 = ["overlay"];
var _c8 = (a0) => ({
  "p-autocomplete-token": true,
  "p-focus": a0
});
var _c9 = (a0) => ({
  $implicit: a0
});
var _c10 = (a0) => ({
  height: a0
});
var _c11 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c12 = (a0) => ({
  options: a0
});
var _c13 = () => ({});
var _c14 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-focus": a1,
  "p-disabled": a2
});
var _c15 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function AutoComplete_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 20, 3);
    ɵɵlistener("input", function AutoComplete_input_2_Template_input_input_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInput($event));
    })("keydown", function AutoComplete_input_2_Template_input_keydown_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onKeyDown($event));
    })("change", function AutoComplete_input_2_Template_input_change_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputChange($event));
    })("focus", function AutoComplete_input_2_Template_input_focus_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputFocus($event));
    })("blur", function AutoComplete_input_2_Template_input_blur_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputBlur($event));
    })("paste", function AutoComplete_input_2_Template_input_paste_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputPaste($event));
    })("keyup", function AutoComplete_input_2_Template_input_keyup_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputKeyUp($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_24_0;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.inputStyleClass);
    ɵɵproperty("autofocus", ctx_r2.autofocus)("ngClass", ctx_r2.inputClass)("ngStyle", ctx_r2.inputStyle)("type", ctx_r2.type)("autocomplete", ctx_r2.autocomplete)("required", ctx_r2.required)("name", ctx_r2.name)("tabindex", !ctx_r2.disabled ? ctx_r2.tabindex : -1)("readonly", ctx_r2.readonly)("disabled", ctx_r2.disabled);
    ɵɵattribute("value", ctx_r2.inputValue())("id", ctx_r2.inputId)("placeholder", ctx_r2.placeholder)("size", ctx_r2.size)("maxlength", ctx_r2.maxlength)("aria-label", ctx_r2.ariaLabel)("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-required", ctx_r2.required)("aria-expanded", (tmp_24_0 = ctx_r2.overlayVisible) !== null && tmp_24_0 !== void 0 ? tmp_24_0 : false)("aria-controls", ctx_r2.overlayVisible ? ctx_r2.id + "_list" : null)("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0);
  }
}
function AutoComplete_ng_container_3_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "TimesIcon", 23);
    ɵɵlistener("click", function AutoComplete_ng_container_3_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.clear());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-autocomplete-clear-icon");
    ɵɵattribute("aria-hidden", true);
  }
}
function AutoComplete_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {
}
function AutoComplete_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AutoComplete_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 24);
    ɵɵlistener("click", function AutoComplete_ng_container_3_span_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.clear());
    });
    ɵɵtemplate(1, AutoComplete_ng_container_3_span_2_1_Template, 1, 0, null, 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.clearIconTemplate);
  }
}
function AutoComplete_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AutoComplete_ng_container_3_TimesIcon_1_Template, 1, 2, "TimesIcon", 21)(2, AutoComplete_ng_container_3_span_2_Template, 2, 2, "span", 22);
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
function AutoComplete_ul_4_li_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AutoComplete_ul_4_li_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 35);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r8 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getMultipleLabel(option_r8));
  }
}
function AutoComplete_ul_4_li_2_TimesCircleIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesCircleIcon", 36);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-autocomplete-token-icon");
    ɵɵattribute("aria-hidden", true);
  }
}
function AutoComplete_ul_4_li_2_span_6_1_ng_template_0_Template(rf, ctx) {
}
function AutoComplete_ul_4_li_2_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AutoComplete_ul_4_li_2_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ul_4_li_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 37);
    ɵɵtemplate(1, AutoComplete_ul_4_li_2_span_6_1_Template, 1, 0, null, 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.removeIconTemplate);
  }
}
function AutoComplete_ul_4_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 29, 5);
    ɵɵtemplate(2, AutoComplete_ul_4_li_2_ng_container_2_Template, 1, 0, "ng-container", 30)(3, AutoComplete_ul_4_li_2_span_3_Template, 2, 1, "span", 31);
    ɵɵelementStart(4, "span", 32);
    ɵɵlistener("click", function AutoComplete_ul_4_li_2_Template_span_click_4_listener($event) {
      const i_r9 = ɵɵrestoreView(_r7).index;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(!ctx_r2.readonly ? ctx_r2.removeOption($event, i_r9) : "");
    });
    ɵɵtemplate(5, AutoComplete_ul_4_li_2_TimesCircleIcon_5_Template, 1, 2, "TimesCircleIcon", 33)(6, AutoComplete_ul_4_li_2_span_6_Template, 2, 2, "span", 34);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c8, ctx_r2.focusedMultipleOptionIndex() === i_r9));
    ɵɵattribute("id", ctx_r2.id + "_multiple_option_" + i_r9)("aria-label", ctx_r2.getOptionLabel(option_r8))("aria-setsize", ctx_r2.modelValue().length)("aria-posinset", i_r9 + 1)("aria-selected", true);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.selectedItemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(13, _c9, option_r8));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.selectedItemTemplate);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.removeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.removeIconTemplate);
  }
}
function AutoComplete_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 25, 4);
    ɵɵlistener("focus", function AutoComplete_ul_4_Template_ul_focus_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onMultipleContainerFocus($event));
    })("blur", function AutoComplete_ul_4_Template_ul_blur_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onMultipleContainerBlur($event));
    })("keydown", function AutoComplete_ul_4_Template_ul_keydown_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onMultipleContainerKeyDown($event));
    });
    ɵɵtemplate(2, AutoComplete_ul_4_li_2_Template, 7, 15, "li", 26);
    ɵɵelementStart(3, "li", 27)(4, "input", 28, 3);
    ɵɵlistener("input", function AutoComplete_ul_4_Template_input_input_4_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInput($event));
    })("keydown", function AutoComplete_ul_4_Template_input_keydown_4_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onKeyDown($event));
    })("change", function AutoComplete_ul_4_Template_input_change_4_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputChange($event));
    })("focus", function AutoComplete_ul_4_Template_input_focus_4_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputFocus($event));
    })("blur", function AutoComplete_ul_4_Template_input_blur_4_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputBlur($event));
    })("paste", function AutoComplete_ul_4_Template_input_paste_4_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputPaste($event));
    })("keyup", function AutoComplete_ul_4_Template_input_keyup_4_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputKeyUp($event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    let tmp_29_0;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.multiContainerClass)("tabindex", -1);
    ɵɵattribute("aria-orientation", "horizontal")("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedMultipleOptionId : void 0);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.modelValue());
    ɵɵadvance(2);
    ɵɵclassMap(ctx_r2.inputStyleClass);
    ɵɵproperty("autofocus", ctx_r2.autofocus)("ngClass", ctx_r2.inputClass)("ngStyle", ctx_r2.inputStyle)("autocomplete", ctx_r2.autocomplete)("required", ctx_r2.required)("tabindex", !ctx_r2.disabled ? ctx_r2.tabindex : -1)("readonly", ctx_r2.readonly)("disabled", ctx_r2.disabled);
    ɵɵattribute("type", ctx_r2.type)("id", ctx_r2.inputId)("name", ctx_r2.name)("placeholder", !ctx_r2.filled ? ctx_r2.placeholder : null)("size", ctx_r2.size)("maxlength", ctx_r2.maxlength)("aria-label", ctx_r2.ariaLabel)("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-required", ctx_r2.required)("aria-expanded", (tmp_29_0 = ctx_r2.overlayVisible) !== null && tmp_29_0 !== void 0 ? tmp_29_0 : false)("aria-controls", ctx_r2.overlayVisible ? ctx_r2.id + "_list" : null)("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0);
  }
}
function AutoComplete_ng_container_5_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SpinnerIcon", 40);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-autocomplete-loader")("spin", true);
    ɵɵattribute("aria-hidden", true);
  }
}
function AutoComplete_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {
}
function AutoComplete_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AutoComplete_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 41);
    ɵɵtemplate(1, AutoComplete_ng_container_5_span_2_1_Template, 1, 0, null, 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.loadingIconTemplate);
  }
}
function AutoComplete_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AutoComplete_ng_container_5_SpinnerIcon_1_Template, 1, 3, "SpinnerIcon", 38)(2, AutoComplete_ng_container_5_span_2_Template, 2, 2, "span", 39);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.loadingIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.loadingIconTemplate);
  }
}
function AutoComplete_button_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 44);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r2.dropdownIcon);
    ɵɵattribute("aria-hidden", true);
  }
}
function AutoComplete_button_6_ng_container_3_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon");
  }
}
function AutoComplete_button_6_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
function AutoComplete_button_6_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AutoComplete_button_6_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_button_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AutoComplete_button_6_ng_container_3_ChevronDownIcon_1_Template, 1, 0, "ChevronDownIcon", 12)(2, AutoComplete_button_6_ng_container_3_2_Template, 1, 0, null, 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.dropdownIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.dropdownIconTemplate);
  }
}
function AutoComplete_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 42, 6);
    ɵɵlistener("click", function AutoComplete_button_6_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleDropdownClick($event));
    });
    ɵɵtemplate(2, AutoComplete_button_6_span_2_Template, 1, 2, "span", 43)(3, AutoComplete_button_6_ng_container_3_Template, 3, 2, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r2.disabled);
    ɵɵattribute("aria-label", ctx_r2.dropdownAriaLabel)("tabindex", ctx_r2.tabindex);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.dropdownIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.dropdownIcon);
  }
}
function AutoComplete_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AutoComplete_p_scroller_11_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AutoComplete_p_scroller_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AutoComplete_p_scroller_11_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 30);
  }
  if (rf & 2) {
    const items_r12 = ctx.$implicit;
    const scrollerOptions_r13 = ctx.options;
    ɵɵnextContext(2);
    const buildInItems_r14 = ɵɵreference(14);
    ɵɵproperty("ngTemplateOutlet", buildInItems_r14)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c11, items_r12, scrollerOptions_r13));
  }
}
function AutoComplete_p_scroller_11_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AutoComplete_p_scroller_11_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AutoComplete_p_scroller_11_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 30);
  }
  if (rf & 2) {
    const scrollerOptions_r15 = ctx.options;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.loaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c12, scrollerOptions_r15));
  }
}
function AutoComplete_p_scroller_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AutoComplete_p_scroller_11_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 47);
    ɵɵelementContainerEnd();
  }
}
function AutoComplete_p_scroller_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-scroller", 45, 7);
    ɵɵlistener("onLazyLoad", function AutoComplete_p_scroller_11_Template_p_scroller_onLazyLoad_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onLazyLoad.emit($event));
    });
    ɵɵtemplate(2, AutoComplete_p_scroller_11_ng_template_2_Template, 1, 5, "ng-template", 46)(3, AutoComplete_p_scroller_11_ng_container_3_Template, 2, 0, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleMap(ɵɵpureFunction1(8, _c10, ctx_r2.scrollHeight));
    ɵɵproperty("items", ctx_r2.visibleOptions())("itemSize", ctx_r2.virtualScrollItemSize || ctx_r2._itemSize)("autoSize", true)("lazy", ctx_r2.lazy)("options", ctx_r2.virtualScrollOptions);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.loaderTemplate);
  }
}
function AutoComplete_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AutoComplete_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AutoComplete_ng_container_12_ng_container_1_Template, 1, 0, "ng-container", 30);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const buildInItems_r14 = ɵɵreference(14);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", buildInItems_r14)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c11, ctx_r2.visibleOptions(), ɵɵpureFunction0(2, _c13)));
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r16 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getOptionGroupLabel(option_r16.optionGroup));
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 51);
    ɵɵtemplate(2, AutoComplete_ng_template_13_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 12)(3, AutoComplete_ng_template_13_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 30);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r16 = ɵɵnextContext();
    const option_r16 = ctx_r16.$implicit;
    const i_r18 = ctx_r16.index;
    const scrollerOptions_r19 = ɵɵnextContext().options;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c10, scrollerOptions_r19.itemSize + "px"));
    ɵɵattribute("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r18, scrollerOptions_r19));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.groupTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.groupTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c9, option_r16.optionGroup));
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r16 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getOptionLabel(option_r16));
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 52);
    ɵɵlistener("mousedown", function AutoComplete_ng_template_13_ng_template_2_ng_container_1_Template_li_mousedown_1_listener($event) {
      ɵɵrestoreView(_r20);
      const option_r16 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onOptionSelect($event, option_r16));
    })("mouseenter", function AutoComplete_ng_template_13_ng_template_2_ng_container_1_Template_li_mouseenter_1_listener($event) {
      ɵɵrestoreView(_r20);
      const i_r18 = ɵɵnextContext().index;
      const scrollerOptions_r19 = ɵɵnextContext().options;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onOptionMouseEnter($event, ctx_r2.getOptionIndex(i_r18, scrollerOptions_r19)));
    });
    ɵɵtemplate(2, AutoComplete_ng_template_13_ng_template_2_ng_container_1_span_2_Template, 2, 1, "span", 12)(3, AutoComplete_ng_template_13_ng_template_2_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 30);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r16 = ɵɵnextContext();
    const option_r16 = ctx_r16.$implicit;
    const i_r18 = ctx_r16.index;
    const scrollerOptions_r19 = ɵɵnextContext().options;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(12, _c10, scrollerOptions_r19.itemSize + "px"))("ngClass", ɵɵpureFunction3(14, _c14, ctx_r2.isSelected(option_r16), ctx_r2.focusedOptionIndex() === ctx_r2.getOptionIndex(i_r18, scrollerOptions_r19), ctx_r2.isOptionDisabled(option_r16)));
    ɵɵattribute("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r18, scrollerOptions_r19))("aria-label", ctx_r2.getOptionLabel(option_r16))("aria-selected", ctx_r2.isSelected(option_r16))("aria-disabled", ctx_r2.isOptionDisabled(option_r16))("data-p-focused", ctx_r2.focusedOptionIndex() === ctx_r2.getOptionIndex(i_r18, scrollerOptions_r19))("aria-setsize", ctx_r2.ariaSetSize)("aria-posinset", ctx_r2.getAriaPosInset(ctx_r2.getOptionIndex(i_r18, scrollerOptions_r19)));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(18, _c15, option_r16, scrollerOptions_r19.getOptions ? scrollerOptions_r19.getOptions(i_r18) : i_r18));
  }
}
function AutoComplete_ng_template_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AutoComplete_ng_template_13_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 12)(1, AutoComplete_ng_template_13_ng_template_2_ng_container_1_Template, 4, 21, "ng-container", 12);
  }
  if (rf & 2) {
    const option_r16 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r2.isOptionGroup(option_r16));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isOptionGroup(option_r16));
  }
}
function AutoComplete_ng_template_13_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.searchResultMessageText, " ");
  }
}
function AutoComplete_ng_template_13_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, null, 9);
  }
}
function AutoComplete_ng_template_13_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 53);
    ɵɵtemplate(1, AutoComplete_ng_template_13_li_3_ng_container_1_Template, 2, 1, "ng-container", 54)(2, AutoComplete_ng_template_13_li_3_ng_container_2_Template, 2, 0, "ng-container", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r19 = ɵɵnextContext().options;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c10, scrollerOptions_r19.itemSize + "px"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.emptyTemplate)("ngIfElse", ctx_r2.empty);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.emptyTemplate);
  }
}
function AutoComplete_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 48, 8);
    ɵɵtemplate(2, AutoComplete_ng_template_13_ng_template_2_Template, 2, 2, "ng-template", 49)(3, AutoComplete_ng_template_13_li_3_Template, 3, 6, "li", 50);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const items_r21 = ctx.$implicit;
    const scrollerOptions_r19 = ctx.options;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleMap(scrollerOptions_r19.contentStyle);
    ɵɵproperty("ngClass", scrollerOptions_r19.contentStyleClass);
    ɵɵattribute("id", ctx_r2.id + "_list")("aria-label", ctx_r2.listLabel);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", items_r21);
    ɵɵadvance();
    ɵɵproperty("ngIf", !items_r21 || items_r21 && items_r21.length === 0 && ctx_r2.showEmptyMessage);
  }
}
function AutoComplete_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AutoComplete),
  multi: true
};
var _AutoComplete = class _AutoComplete {
  constructor(document, el, renderer, cd, config, overlayService, zone) {
    __publicField(this, "document");
    __publicField(this, "el");
    __publicField(this, "renderer");
    __publicField(this, "cd");
    __publicField(this, "config");
    __publicField(this, "overlayService");
    __publicField(this, "zone");
    /**
     * Minimum number of characters to initiate a search.
     * @group Props
     */
    __publicField(this, "minLength", 1);
    /**
     * Delay between keystrokes to wait before sending a query.
     * @group Props
     */
    __publicField(this, "delay", 300);
    /**
     * Inline style of the component.
     * @group Props
     */
    __publicField(this, "style");
    /**
     * Inline style of the overlay panel element.
     * @group Props
     */
    __publicField(this, "panelStyle");
    /**
     * Style class of the component.
     * @group Props
     */
    __publicField(this, "styleClass");
    /**
     * Style class of the overlay panel element.
     * @group Props
     */
    __publicField(this, "panelStyleClass");
    /**
     * Inline style of the input field.
     * @group Props
     */
    __publicField(this, "inputStyle");
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    __publicField(this, "inputId");
    /**
     * Inline style of the input field.
     * @group Props
     */
    __publicField(this, "inputStyleClass");
    /**
     * Hint text for the input field.
     * @group Props
     */
    __publicField(this, "placeholder");
    /**
     * When present, it specifies that the input cannot be typed.
     * @group Props
     */
    __publicField(this, "readonly");
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    __publicField(this, "disabled");
    /**
     * Maximum height of the suggestions panel.
     * @group Props
     */
    __publicField(this, "scrollHeight", "200px");
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    __publicField(this, "lazy", false);
    /**
     * Whether the data should be loaded on demand during scroll.
     * @group Props
     */
    __publicField(this, "virtualScroll");
    /**
     * Height of an item in the list for VirtualScrolling.
     * @group Props
     */
    __publicField(this, "virtualScrollItemSize");
    /**
     * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    __publicField(this, "virtualScrollOptions");
    /**
     * Maximum number of character allows in the input field.
     * @group Props
     */
    __publicField(this, "maxlength");
    /**
     * Name of the input element.
     * @group Props
     */
    __publicField(this, "name");
    /**
     * When present, it specifies that an input field must be filled out before submitting the form.
     * @group Props
     */
    __publicField(this, "required");
    /**
     * Size of the input field.
     * @group Props
     */
    __publicField(this, "size");
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    __publicField(this, "appendTo");
    /**
     * When enabled, highlights the first item in the list by default.
     * @group Props
     */
    __publicField(this, "autoHighlight");
    /**
     * When present, autocomplete clears the manual input if it does not match of the suggestions to force only accepting values from the suggestions.
     * @group Props
     */
    __publicField(this, "forceSelection");
    /**
     * Type of the input, defaults to "text".
     * @group Props
     */
    __publicField(this, "type", "text");
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
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    __publicField(this, "ariaLabel");
    /**
     * Defines a string that labels the dropdown button for accessibility.
     * @group Props
     */
    __publicField(this, "dropdownAriaLabel");
    /**
     * Specifies one or more IDs in the DOM that labels the input field.
     * @group Props
     */
    __publicField(this, "ariaLabelledBy");
    /**
     * Icon class of the dropdown icon.
     * @group Props
     */
    __publicField(this, "dropdownIcon");
    /**
     * Ensures uniqueness of selected items on multiple mode.
     * @group Props
     */
    __publicField(this, "unique", true);
    /**
     * Whether to display options as grouped when nested options are provided.
     * @group Props
     */
    __publicField(this, "group");
    /**
     * Whether to run a query when input receives focus.
     * @group Props
     */
    __publicField(this, "completeOnFocus", false);
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    __publicField(this, "showClear", false);
    /**
     * Field of a suggested object to resolve and display.
     * @group Props
     * @deprecated use optionLabel property instead
     */
    __publicField(this, "field");
    /**
     * Displays a button next to the input field when enabled.
     * @group Props
     */
    __publicField(this, "dropdown");
    /**
     * Whether to show the empty message or not.
     * @group Props
     */
    __publicField(this, "showEmptyMessage", true);
    /**
     * Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value.
     * @group Props
     */
    __publicField(this, "dropdownMode", "blank");
    /**
     * Specifies if multiple values can be selected.
     * @group Props
     */
    __publicField(this, "multiple");
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    __publicField(this, "tabindex");
    /**
     * A property to uniquely identify a value in options.
     * @group Props
     */
    __publicField(this, "dataKey");
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    __publicField(this, "emptyMessage");
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
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    __publicField(this, "autofocus");
    /**
     * Used to define a string that autocomplete attribute the current element.
     * @group Props
     */
    __publicField(this, "autocomplete", "off");
    /**
     * Name of the options field of an option group.
     * @group Props
     */
    __publicField(this, "optionGroupChildren", "items");
    /**
     * Name of the label field of an option group.
     * @group Props
     */
    __publicField(this, "optionGroupLabel", "label");
    /**
     * Options for the overlay element.
     * @group Props
     */
    __publicField(this, "overlayOptions");
    /**
     * Property name or getter function to use as the label of an option.
     * @group Props
     */
    __publicField(this, "optionLabel");
    /**
     * Property name or getter function to use as the value of an option.
     * @group Props
     */
    __publicField(this, "optionValue");
    /**
     * Unique identifier of the component.
     * @group Props
     */
    __publicField(this, "id");
    /**
     * Text to display when the search is active. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} results are available'
     */
    __publicField(this, "searchMessage");
    /**
     * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue 'No selected item'
     */
    __publicField(this, "emptySelectionMessage");
    /**
     * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} items selected'
     */
    __publicField(this, "selectionMessage");
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @group Props
     */
    __publicField(this, "autoOptionFocus", false);
    /**
     * When enabled, the focused option is selected.
     * @group Props
     */
    __publicField(this, "selectOnFocus");
    /**
     * Locale to use in searching. The default locale is the host environment's current locale.
     * @group Props
     */
    __publicField(this, "searchLocale");
    /**
     * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
     * @group Props
     */
    __publicField(this, "optionDisabled");
    /**
     * When enabled, the hovered option will be focused.
     * @group Props
     */
    __publicField(this, "focusOnHover");
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    __publicField(this, "variant", "outlined");
    /**
     * Callback to invoke to search for suggestions.
     * @param {AutoCompleteCompleteEvent} event - Custom complete event.
     * @group Emits
     */
    __publicField(this, "completeMethod", new EventEmitter());
    /**
     * Callback to invoke when a suggestion is selected.
     * @param {AutoCompleteSelectEvent} event - custom select event.
     * @group Emits
     */
    __publicField(this, "onSelect", new EventEmitter());
    /**
     * Callback to invoke when a selected value is removed.
     * @param {AutoCompleteUnselectEvent} event - custom unselect event.
     * @group Emits
     */
    __publicField(this, "onUnselect", new EventEmitter());
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
     * Callback to invoke to when dropdown button is clicked.
     * @param {AutoCompleteDropdownClickEvent} event - custom dropdown click event.
     * @group Emits
     */
    __publicField(this, "onDropdownClick", new EventEmitter());
    /**
     * Callback to invoke when clear button is clicked.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    __publicField(this, "onClear", new EventEmitter());
    /**
     * Callback to invoke on input key up.
     * @param {KeyboardEvent} event - Keyboard event.
     * @group Emits
     */
    __publicField(this, "onKeyUp", new EventEmitter());
    /**
     * Callback to invoke on overlay is shown.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    __publicField(this, "onShow", new EventEmitter());
    /**
     * Callback to invoke on overlay is hidden.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    __publicField(this, "onHide", new EventEmitter());
    /**
     * Callback to invoke on lazy load data.
     * @param {AutoCompleteLazyLoadEvent} event - Lazy load event.
     * @group Emits
     */
    __publicField(this, "onLazyLoad", new EventEmitter());
    __publicField(this, "containerEL");
    __publicField(this, "inputEL");
    __publicField(this, "multiInputEl");
    __publicField(this, "multiContainerEL");
    __publicField(this, "dropdownButton");
    __publicField(this, "itemsViewChild");
    __publicField(this, "scroller");
    __publicField(this, "overlayViewChild");
    __publicField(this, "templates");
    __publicField(this, "_itemSize");
    __publicField(this, "itemsWrapper");
    __publicField(this, "itemTemplate");
    __publicField(this, "emptyTemplate");
    __publicField(this, "headerTemplate");
    __publicField(this, "footerTemplate");
    __publicField(this, "selectedItemTemplate");
    __publicField(this, "groupTemplate");
    __publicField(this, "loaderTemplate");
    __publicField(this, "removeIconTemplate");
    __publicField(this, "loadingIconTemplate");
    __publicField(this, "clearIconTemplate");
    __publicField(this, "dropdownIconTemplate");
    __publicField(this, "value");
    __publicField(this, "_suggestions", signal(null));
    __publicField(this, "onModelChange", () => {
    });
    __publicField(this, "onModelTouched", () => {
    });
    __publicField(this, "timeout");
    __publicField(this, "overlayVisible");
    __publicField(this, "suggestionsUpdated");
    __publicField(this, "highlightOption");
    __publicField(this, "highlightOptionChanged");
    __publicField(this, "focused", false);
    __publicField(this, "_filled");
    __publicField(this, "loading");
    __publicField(this, "scrollHandler");
    __publicField(this, "listId");
    __publicField(this, "searchTimeout");
    __publicField(this, "dirty", false);
    __publicField(this, "modelValue", signal(null));
    __publicField(this, "focusedMultipleOptionIndex", signal(-1));
    __publicField(this, "focusedOptionIndex", signal(-1));
    __publicField(this, "visibleOptions", computed(() => {
      return this.group ? this.flatOptions(this._suggestions()) : this._suggestions() || [];
    }));
    __publicField(this, "inputValue", computed(() => {
      const modelValue = this.modelValue();
      const selectedOption = this.getSelectedOption(modelValue);
      if (modelValue) {
        if (typeof modelValue === "object" || this.optionValue) {
          const label = this.getOptionLabel(selectedOption);
          return label != null ? label : modelValue;
        } else {
          return modelValue;
        }
      } else {
        return "";
      }
    }));
    this.document = document;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
    this.overlayService = overlayService;
    this.zone = zone;
    effect(() => {
      this.filled = ObjectUtils.isNotEmpty(this.modelValue());
    });
  }
  /**
   * An array of suggestions to display.
   * @group Props
   */
  get suggestions() {
    return this._suggestions();
  }
  set suggestions(value) {
    this._suggestions.set(value);
    this.handleSuggestionsChange();
  }
  /**
   * Element dimensions of option for virtual scrolling.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
    console.warn("The itemSize property is deprecated, use virtualScrollItemSize property instead.");
  }
  get filled() {
    return this._filled;
  }
  set filled(value) {
    this._filled = value;
  }
  get focusedMultipleOptionId() {
    return this.focusedMultipleOptionIndex() !== -1 ? "".concat(this.id, "_multiple_option_").concat(this.focusedMultipleOptionIndex()) : null;
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? "".concat(this.id, "_").concat(this.focusedOptionIndex()) : null;
  }
  get containerClass() {
    return {
      "p-autocomplete p-component p-inputwrapper": true,
      "p-disabled": this.disabled,
      "p-focus": this.focused,
      "p-autocomplete-dd": this.dropdown,
      "p-autocomplete-multiple": this.multiple,
      "p-inputwrapper-focus": this.focused,
      "p-overlay-open": this.overlayVisible
    };
  }
  get multiContainerClass() {
    return {
      "p-autocomplete-multiple-container p-component p-inputtext": true,
      "p-variant-filled": this.variant === "filled" || this.config.inputStyle() === "filled"
    };
  }
  get panelClass() {
    return {
      "p-autocomplete-panel p-component": true,
      "p-input-filled": this.config.inputStyle() === "filled",
      "p-ripple-disabled": this.config.ripple === false
    };
  }
  get panelStyles() {
    return __spreadValues({
      "max-height": this.virtualScroll ? "auto" : this.scrollHeight
    }, this.panelStyle);
  }
  get inputClass() {
    return {
      "p-autocomplete-input p-inputtext p-component": !this.multiple,
      "p-autocomplete-dd-input": this.dropdown,
      "p-variant-filled": this.variant === "filled" || this.config.inputStyle() === "filled"
    };
  }
  get searchResultMessageText() {
    return ObjectUtils.isNotEmpty(this.visibleOptions()) && this.overlayVisible ? this.searchMessageText.replaceAll("{0}", this.visibleOptions().length) : this.emptySearchMessageText;
  }
  get searchMessageText() {
    return this.searchMessage || this.config.translation.searchMessage || "";
  }
  get emptySearchMessageText() {
    return this.emptyMessage || this.config.translation.emptySearchMessage || "";
  }
  get selectionMessageText() {
    return this.selectionMessage || this.config.translation.selectionMessage || "";
  }
  get emptySelectionMessageText() {
    return this.emptySelectionMessage || this.config.translation.emptySelectionMessage || "";
  }
  get selectedMessageText() {
    return this.hasSelectedOption() ? this.selectionMessageText.replaceAll("{0}", this.multiple ? this.modelValue().length : "1") : this.emptySelectionMessageText;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  get listLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["listLabel"];
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  get optionValueSelected() {
    return typeof this.modelValue() === "string" && this.optionValue;
  }
  get isVisibleClearIcon() {
    return this.modelValue() != null && this.hasSelectedOption() && this.showClear && !this.disabled && !this.loading;
  }
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
    this.cd.detectChanges();
  }
  ngAfterViewChecked() {
    if (this.suggestionsUpdated && this.overlayViewChild) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.overlayViewChild) {
            this.overlayViewChild.alignOverlay();
          }
        }, 1);
        this.suggestionsUpdated = false;
      });
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "group":
          this.groupTemplate = item.template;
          break;
        case "selectedItem":
          this.selectedItemTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "empty":
          this.emptyTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "loader":
          this.loaderTemplate = item.template;
          break;
        case "removetokenicon":
          this.removeIconTemplate = item.template;
          break;
        case "loadingicon":
          this.loadingIconTemplate = item.template;
          break;
        case "clearicon":
          this.clearIconTemplate = item.template;
          break;
        case "dropdownicon":
          this.dropdownIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  handleSuggestionsChange() {
    if (this.loading) {
      this._suggestions().length > 0 || this.showEmptyMessage ? this.show() : !!this.emptyTemplate ? this.show() : this.hide();
      const focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.focusedOptionIndex.set(focusedOptionIndex);
      this.suggestionsUpdated = true;
      this.loading = false;
      this.cd.markForCheck();
    }
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
      return result;
    }, []);
  }
  isOptionGroup(option) {
    return this.optionGroupLabel && option.optionGroup && option.group;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findLastOptionIndex() {
    return ObjectUtils.findLastIndex(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  isValidOption(option) {
    return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionDisabled(option) {
    return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
  }
  isSelected(option) {
    var _a;
    if (this.multiple) {
      return this.unique ? (_a = this.modelValue()) == null ? void 0 : _a.find((model) => ObjectUtils.equals(model, this.getOptionValue(option), this.equalityKey())) : false;
    }
    return ObjectUtils.equals(this.modelValue(), this.getOptionValue(option), this.equalityKey());
  }
  isOptionMatched(option, value) {
    return this.isValidOption(option) && this.getOptionLabel(option).toLocaleLowerCase(this.searchLocale) === value.toLocaleLowerCase(this.searchLocale);
  }
  isInputClicked(event2) {
    return event2.target === this.inputEL.nativeElement;
  }
  isDropdownClicked(event2) {
    var _a;
    return ((_a = this.dropdownButton) == null ? void 0 : _a.nativeElement) ? event2.target === this.dropdownButton.nativeElement || this.dropdownButton.nativeElement.contains(event2.target) : false;
  }
  equalityKey() {
    return this.dataKey;
  }
  onContainerClick(event2) {
    var _a;
    if (this.disabled || this.loading || this.isInputClicked(event2) || this.isDropdownClicked(event2)) {
      return;
    }
    if (!this.overlayViewChild || !((_a = this.overlayViewChild.overlayViewChild) == null ? void 0 : _a.nativeElement.contains(event2.target))) {
      DomHandler.focus(this.inputEL.nativeElement);
    }
  }
  handleDropdownClick(event2) {
    let query = void 0;
    if (this.overlayVisible) {
      this.hide(true);
    } else {
      DomHandler.focus(this.inputEL.nativeElement);
      query = this.inputEL.nativeElement.value;
      if (this.dropdownMode === "blank") this.search(event2, "", "dropdown");
      else if (this.dropdownMode === "current") this.search(event2, query, "dropdown");
    }
    this.onDropdownClick.emit({
      originalEvent: event2,
      query
    });
  }
  onInput(event2) {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    let query = event2.target.value;
    if (this.maxlength !== null) {
      query = query.split("").slice(0, this.maxlength).join("");
    }
    if (!this.multiple && !this.forceSelection) {
      this.updateModel(query);
    }
    if (query.length === 0 && !this.multiple && !this.completeOnFocus) {
      this.onClear.emit();
      this.hide();
    } else {
      if (query.length >= this.minLength) {
        this.focusedOptionIndex.set(-1);
        this.searchTimeout = setTimeout(() => {
          this.search(event2, query, "input");
        }, this.delay);
      } else {
        this.hide();
      }
    }
  }
  onInputChange(event2) {
    if (this.forceSelection) {
      let valid = false;
      if (this.visibleOptions()) {
        const matchedValue = this.visibleOptions().find((option) => this.isOptionMatched(option, this.inputEL.nativeElement.value || ""));
        if (matchedValue !== void 0) {
          valid = true;
          !this.isSelected(matchedValue) && this.onOptionSelect(event2, matchedValue);
        }
      }
      if (!valid) {
        this.inputEL.nativeElement.value = "";
        !this.multiple && this.updateModel(null);
      }
    }
  }
  onInputFocus(event2) {
    if (this.disabled) {
      return;
    }
    if (!this.dirty && this.completeOnFocus) {
      this.search(event2, event2.target.value, "focus");
      this.show();
    }
    this.dirty = true;
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit(event2);
  }
  onMultipleContainerFocus(event2) {
    if (this.disabled) {
      return;
    }
    this.focused = true;
  }
  onMultipleContainerBlur(event2) {
    this.focusedMultipleOptionIndex.set(-1);
    this.focused = false;
  }
  onMultipleContainerKeyDown(event2) {
    if (this.disabled) {
      event2.preventDefault();
      return;
    }
    switch (event2.code) {
      case "ArrowLeft":
        this.onArrowLeftKeyOnMultiple(event2);
        break;
      case "ArrowRight":
        this.onArrowRightKeyOnMultiple(event2);
        break;
      case "Backspace":
        this.onBackspaceKeyOnMultiple(event2);
        break;
      default:
        break;
    }
  }
  onInputBlur(event2) {
    this.dirty = false;
    this.focused = false;
    this.focusedOptionIndex.set(-1);
    if (!this.forceSelection) {
      this.onModelTouched();
    }
    this.onBlur.emit(event2);
  }
  onInputPaste(event2) {
    this.onKeyDown(event2);
  }
  onInputKeyUp(event2) {
    this.onKeyUp.emit(event2);
  }
  onKeyDown(event2) {
    if (this.disabled) {
      event2.preventDefault();
      return;
    }
    switch (event2.code) {
      case "ArrowDown":
        this.onArrowDownKey(event2);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event2);
        break;
      case "ArrowLeft":
        this.onArrowLeftKey(event2);
        break;
      case "ArrowRight":
        this.onArrowRightKey(event2);
        break;
      case "Home":
        this.onHomeKey(event2);
        break;
      case "End":
        this.onEndKey(event2);
        break;
      case "PageDown":
        this.onPageDownKey(event2);
        break;
      case "PageUp":
        this.onPageUpKey(event2);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event2);
        break;
      case "Escape":
        this.onEscapeKey(event2);
        break;
      case "Tab":
        this.onTabKey(event2);
        break;
      case "Backspace":
        this.onBackspaceKey(event2);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        break;
    }
  }
  onArrowDownKey(event2) {
    if (!this.overlayVisible) {
      return;
    }
    const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
    this.changeFocusedOptionIndex(event2, optionIndex);
    event2.preventDefault();
    event2.stopPropagation();
  }
  onArrowUpKey(event2) {
    if (!this.overlayVisible) {
      return;
    }
    if (event2.altKey) {
      if (this.focusedOptionIndex() !== -1) {
        this.onOptionSelect(event2, this.visibleOptions()[this.focusedOptionIndex()]);
      }
      this.overlayVisible && this.hide();
      event2.preventDefault();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
      this.changeFocusedOptionIndex(event2, optionIndex);
      event2.preventDefault();
      event2.stopPropagation();
    }
  }
  onArrowLeftKey(event2) {
    const target = event2.currentTarget;
    this.focusedOptionIndex.set(-1);
    if (this.multiple) {
      if (ObjectUtils.isEmpty(target.value) && this.hasSelectedOption()) {
        DomHandler.focus(this.multiContainerEL.nativeElement);
        this.focusedMultipleOptionIndex.set(this.modelValue().length);
      } else {
        event2.stopPropagation();
      }
    }
  }
  onArrowRightKey(event2) {
    this.focusedOptionIndex.set(-1);
    this.multiple && event2.stopPropagation();
  }
  onHomeKey(event2) {
    const {
      currentTarget
    } = event2;
    const len = currentTarget.value.length;
    currentTarget.setSelectionRange(0, event2.shiftKey ? len : 0);
    this.focusedOptionIndex.set(-1);
    event2.preventDefault();
  }
  onEndKey(event2) {
    const {
      currentTarget
    } = event2;
    const len = currentTarget.value.length;
    currentTarget.setSelectionRange(event2.shiftKey ? 0 : len, len);
    this.focusedOptionIndex.set(-1);
    event2.preventDefault();
  }
  onPageDownKey(event2) {
    this.scrollInView(this.visibleOptions().length - 1);
    event2.preventDefault();
  }
  onPageUpKey(event2) {
    this.scrollInView(0);
    event2.preventDefault();
  }
  onEnterKey(event2) {
    if (!this.overlayVisible) {
      this.onArrowDownKey(event2);
    } else {
      if (this.focusedOptionIndex() !== -1) {
        this.onOptionSelect(event2, this.visibleOptions()[this.focusedOptionIndex()]);
        event2.preventDefault();
      }
      this.hide();
    }
  }
  onEscapeKey(event2) {
    this.overlayVisible && this.hide(true);
    event2.preventDefault();
  }
  onTabKey(event2) {
    if (this.focusedOptionIndex() !== -1) {
      this.onOptionSelect(event2, this.visibleOptions()[this.focusedOptionIndex()]);
    }
    this.overlayVisible && this.hide();
  }
  onBackspaceKey(event2) {
    if (this.multiple) {
      if (ObjectUtils.isNotEmpty(this.modelValue()) && !this.inputEL.nativeElement.value) {
        const removedValue = this.modelValue()[this.modelValue().length - 1];
        const newValue = this.modelValue().slice(0, -1);
        this.updateModel(newValue);
        this.onUnselect.emit({
          originalEvent: event2,
          value: removedValue
        });
      }
      event2.stopPropagation();
    }
  }
  onArrowLeftKeyOnMultiple(event2) {
    const optionIndex = this.focusedMultipleOptionIndex() < 1 ? 0 : this.focusedMultipleOptionIndex() - 1;
    this.focusedMultipleOptionIndex.set(optionIndex);
  }
  onArrowRightKeyOnMultiple(event2) {
    let optionIndex = this.focusedMultipleOptionIndex();
    optionIndex++;
    this.focusedMultipleOptionIndex.set(optionIndex);
    if (optionIndex > this.modelValue().length - 1) {
      this.focusedMultipleOptionIndex.set(-1);
      DomHandler.focus(this.inputEL.nativeElement);
    }
  }
  onBackspaceKeyOnMultiple(event2) {
    if (this.focusedMultipleOptionIndex() !== -1) {
      this.removeOption(event2, this.focusedMultipleOptionIndex());
    }
  }
  onOptionSelect(event2, option, isHide = true) {
    const value = this.getOptionValue(option);
    if (this.multiple) {
      this.inputEL.nativeElement.value = "";
      if (!this.isSelected(option)) {
        this.updateModel([...this.modelValue() || [], value]);
      }
    } else {
      this.updateModel(value);
    }
    this.onModelTouched();
    this.onSelect.emit({
      originalEvent: event2,
      value: option
    });
    isHide && this.hide(true);
  }
  onOptionMouseEnter(event2, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event2, index);
    }
  }
  search(event2, query, source) {
    if (query === void 0 || query === null) {
      return;
    }
    if (source === "input" && query.trim().length < this.minLength) {
      return;
    }
    this.loading = true;
    this.completeMethod.emit({
      originalEvent: event2,
      query
    });
  }
  removeOption(event2, index) {
    event2.stopPropagation();
    const removedOption = this.modelValue()[index];
    const value = this.modelValue().filter((_, i) => i !== index).map((option) => this.getOptionValue(option));
    this.updateModel(value);
    this.onUnselect.emit({
      originalEvent: event2,
      value: removedOption
    });
    DomHandler.focus(this.inputEL.nativeElement);
  }
  updateModel(value) {
    this.value = value;
    this.modelValue.set(value);
    this.onModelChange(value);
    this.updateInputValue();
    this.cd.markForCheck();
  }
  updateInputValue() {
    if (this.inputEL && this.inputEL.nativeElement) {
      if (!this.multiple) {
        this.inputEL.nativeElement.value = this.inputValue();
      } else {
        this.inputEL.nativeElement.value = "";
      }
    }
  }
  autoUpdateModel() {
    if ((this.selectOnFocus || this.autoHighlight) && this.autoOptionFocus && !this.hasSelectedOption()) {
      const focusedOptionIndex = this.findFirstFocusedOptionIndex();
      this.focusedOptionIndex.set(focusedOptionIndex);
      this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
    }
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? "".concat(this.id, "_").concat(index) : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = DomHandler.findSingle(this.itemsViewChild.nativeElement, 'li[id="'.concat(id, '"]'));
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          var _a;
          this.virtualScroll && ((_a = this.scroller) == null ? void 0 : _a.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex()));
        }, 0);
      }
    }
  }
  changeFocusedOptionIndex(event2, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
      if (this.selectOnFocus) {
        this.onOptionSelect(event2, this.visibleOptions()[index], false);
      }
    }
  }
  show(isFocus = false) {
    this.dirty = true;
    this.overlayVisible = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    isFocus && DomHandler.focus(this.inputEL.nativeElement);
    if (isFocus) {
      DomHandler.focus(this.inputEL.nativeElement);
    }
    this.onShow.emit();
    this.cd.markForCheck();
  }
  hide(isFocus = false) {
    const _hide = () => {
      this.dirty = isFocus;
      this.overlayVisible = false;
      this.focusedOptionIndex.set(-1);
      isFocus && DomHandler.focus(this.inputEL.nativeElement);
      this.onHide.emit();
      this.cd.markForCheck();
    };
    if (this.virtualScroll) {
      this.scroller.onScrollChange(event);
    }
    setTimeout(() => {
      _hide();
    }, 0);
  }
  clear() {
    this.updateModel(null);
    this.inputEL.nativeElement.value = "";
    this.onClear.emit();
  }
  writeValue(value) {
    this.value = value;
    this.modelValue.set(value);
    this.updateInputValue();
    this.cd.markForCheck();
  }
  hasSelectedOption() {
    return ObjectUtils.isNotEmpty(this.modelValue());
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
  }
  getOptionLabel(option) {
    return this.field || this.optionLabel ? ObjectUtils.resolveFieldData(option, this.field || this.optionLabel) : option && option.label != void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label != void 0 ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  getSelectedOption(modelValue) {
    if (!this.optionValue) {
      return modelValue;
    }
    return (this.suggestions || []).find((item) => ObjectUtils.resolveFieldData(item, this.optionValue) === modelValue);
  }
  getMultipleLabel(option) {
    let selected = this.getSelectedOption(option);
    return this.getOptionLabel(selected);
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
  onOverlayAnimationStart(event2) {
    var _a, _b, _c, _d;
    if (event2.toState === "visible") {
      this.itemsWrapper = DomHandler.findSingle((_a = this.overlayViewChild.overlayViewChild) == null ? void 0 : _a.nativeElement, this.virtualScroll ? ".p-scroller" : ".p-autocomplete-panel");
      if (this.virtualScroll) {
        (_c = this.scroller) == null ? void 0 : _c.setContentEl((_b = this.itemsViewChild) == null ? void 0 : _b.nativeElement);
        this.scroller.viewInit();
      }
      if (this.visibleOptions() && this.visibleOptions().length) {
        if (this.virtualScroll) {
          const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
          if (selectedIndex !== -1) {
            (_d = this.scroller) == null ? void 0 : _d.scrollToIndex(selectedIndex);
          }
        } else {
          let selectedListItem = DomHandler.findSingle(this.itemsWrapper, ".p-autocomplete-item.p-highlight");
          if (selectedListItem) {
            selectedListItem.scrollIntoView({
              block: "nearest",
              inline: "center"
            });
          }
        }
      }
    }
  }
  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
  }
};
__publicField(_AutoComplete, "ɵfac", function AutoComplete_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutoComplete)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(OverlayService), ɵɵdirectiveInject(NgZone));
});
__publicField(_AutoComplete, "ɵcmp", ɵɵdefineComponent({
  type: _AutoComplete,
  selectors: [["p-autoComplete"]],
  contentQueries: function AutoComplete_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function AutoComplete_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c1, 5);
      ɵɵviewQuery(_c2, 5);
      ɵɵviewQuery(_c3, 5);
      ɵɵviewQuery(_c4, 5);
      ɵɵviewQuery(_c5, 5);
      ɵɵviewQuery(_c6, 5);
      ɵɵviewQuery(_c7, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerEL = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputEL = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.multiInputEl = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.multiContainerEL = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownButton = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemsViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scroller = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlayViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element", "p-inputwrapper"],
  hostVars: 6,
  hostBindings: function AutoComplete_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused && !ctx.disabled || ctx.autofocus || ctx.overlayVisible)("p-autocomplete-clearable", ctx.showClear && !ctx.disabled);
    }
  },
  inputs: {
    minLength: [2, "minLength", "minLength", numberAttribute],
    delay: [2, "delay", "delay", numberAttribute],
    style: "style",
    panelStyle: "panelStyle",
    styleClass: "styleClass",
    panelStyleClass: "panelStyleClass",
    inputStyle: "inputStyle",
    inputId: "inputId",
    inputStyleClass: "inputStyleClass",
    placeholder: "placeholder",
    readonly: [2, "readonly", "readonly", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    scrollHeight: "scrollHeight",
    lazy: [2, "lazy", "lazy", booleanAttribute],
    virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
    virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
    virtualScrollOptions: "virtualScrollOptions",
    maxlength: [2, "maxlength", "maxlength", (value) => numberAttribute(value, null)],
    name: "name",
    required: [2, "required", "required", booleanAttribute],
    size: [2, "size", "size", numberAttribute],
    appendTo: "appendTo",
    autoHighlight: [2, "autoHighlight", "autoHighlight", booleanAttribute],
    forceSelection: [2, "forceSelection", "forceSelection", booleanAttribute],
    type: "type",
    autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
    baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
    ariaLabel: "ariaLabel",
    dropdownAriaLabel: "dropdownAriaLabel",
    ariaLabelledBy: "ariaLabelledBy",
    dropdownIcon: "dropdownIcon",
    unique: [2, "unique", "unique", booleanAttribute],
    group: [2, "group", "group", booleanAttribute],
    completeOnFocus: [2, "completeOnFocus", "completeOnFocus", booleanAttribute],
    showClear: [2, "showClear", "showClear", booleanAttribute],
    field: "field",
    dropdown: [2, "dropdown", "dropdown", booleanAttribute],
    showEmptyMessage: [2, "showEmptyMessage", "showEmptyMessage", booleanAttribute],
    dropdownMode: "dropdownMode",
    multiple: [2, "multiple", "multiple", booleanAttribute],
    tabindex: [2, "tabindex", "tabindex", numberAttribute],
    dataKey: "dataKey",
    emptyMessage: "emptyMessage",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    autofocus: [2, "autofocus", "autofocus", booleanAttribute],
    autocomplete: "autocomplete",
    optionGroupChildren: "optionGroupChildren",
    optionGroupLabel: "optionGroupLabel",
    overlayOptions: "overlayOptions",
    suggestions: "suggestions",
    itemSize: "itemSize",
    optionLabel: "optionLabel",
    optionValue: "optionValue",
    id: "id",
    searchMessage: "searchMessage",
    emptySelectionMessage: "emptySelectionMessage",
    selectionMessage: "selectionMessage",
    autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", booleanAttribute],
    selectOnFocus: [2, "selectOnFocus", "selectOnFocus", booleanAttribute],
    searchLocale: [2, "searchLocale", "searchLocale", booleanAttribute],
    optionDisabled: "optionDisabled",
    focusOnHover: [2, "focusOnHover", "focusOnHover", booleanAttribute],
    variant: "variant"
  },
  outputs: {
    completeMethod: "completeMethod",
    onSelect: "onSelect",
    onUnselect: "onUnselect",
    onFocus: "onFocus",
    onBlur: "onBlur",
    onDropdownClick: "onDropdownClick",
    onClear: "onClear",
    onKeyUp: "onKeyUp",
    onShow: "onShow",
    onHide: "onHide",
    onLazyLoad: "onLazyLoad"
  },
  features: [ɵɵProvidersFeature([AUTOCOMPLETE_VALUE_ACCESSOR]), ɵɵInputTransformsFeature],
  decls: 18,
  vars: 24,
  consts: [["container", ""], ["overlay", ""], ["buildInItems", ""], ["focusInput", ""], ["multiContainer", ""], ["token", ""], ["ddBtn", ""], ["scroller", ""], ["items", ""], ["empty", ""], [3, "click", "ngClass", "ngStyle"], ["pAutoFocus", "", "aria-autocomplete", "list", "role", "combobox", 3, "autofocus", "ngClass", "ngStyle", "class", "type", "autocomplete", "required", "name", "tabindex", "readonly", "disabled", "input", "keydown", "change", "focus", "blur", "paste", "keyup", 4, "ngIf"], [4, "ngIf"], ["role", "listbox", 3, "ngClass", "tabindex", "focus", "blur", "keydown", 4, "ngIf"], ["type", "button", "pButton", "", "class", "p-autocomplete-dropdown p-button-icon-only", "pRipple", "", 3, "disabled", "click", 4, "ngIf"], [3, "visibleChange", "onAnimationStart", "onHide", "visible", "options", "target", "appendTo", "showTransitionOptions", "hideTransitionOptions"], [3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet"], [3, "items", "style", "itemSize", "autoSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "p-hidden-accessible"], ["pAutoFocus", "", "aria-autocomplete", "list", "role", "combobox", 3, "input", "keydown", "change", "focus", "blur", "paste", "keyup", "autofocus", "ngClass", "ngStyle", "type", "autocomplete", "required", "name", "tabindex", "readonly", "disabled"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-autocomplete-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "styleClass"], [1, "p-autocomplete-clear-icon", 3, "click"], ["role", "listbox", 3, "focus", "blur", "keydown", "ngClass", "tabindex"], ["role", "option", 3, "ngClass", 4, "ngFor", "ngForOf"], ["role", "option", 1, "p-autocomplete-input-token"], ["pAutoFocus", "", "role", "combobox", "aria-autocomplete", "list", 3, "input", "keydown", "change", "focus", "blur", "paste", "keyup", "autofocus", "ngClass", "ngStyle", "autocomplete", "required", "tabindex", "readonly", "disabled"], ["role", "option", 3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-autocomplete-token-label", 4, "ngIf"], [1, "p-autocomplete-token-icon", 3, "click"], [3, "styleClass", 4, "ngIf"], ["class", "p-autocomplete-token-icon", 4, "ngIf"], [1, "p-autocomplete-token-label"], [3, "styleClass"], [1, "p-autocomplete-token-icon"], [3, "styleClass", "spin", 4, "ngIf"], ["class", "p-autocomplete-loader pi-spin ", 4, "ngIf"], [3, "styleClass", "spin"], [1, "p-autocomplete-loader", "pi-spin"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-autocomplete-dropdown", "p-button-icon-only", 3, "click", "disabled"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "lazy", "options"], ["pTemplate", "content"], ["pTemplate", "loader"], ["role", "listbox", 1, "p-autocomplete-items", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-autocomplete-empty-message", "role", "option", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-autocomplete-item-group", 3, "ngStyle"], ["pRipple", "", "role", "option", 1, "p-autocomplete-item", 3, "mousedown", "mouseenter", "ngStyle", "ngClass"], ["role", "option", 1, "p-autocomplete-empty-message", 3, "ngStyle"], [4, "ngIf", "ngIfElse"]],
  template: function AutoComplete_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 10, 0);
      ɵɵlistener("click", function AutoComplete_Template_div_click_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onContainerClick($event));
      });
      ɵɵtemplate(2, AutoComplete_input_2_Template, 2, 23, "input", 11)(3, AutoComplete_ng_container_3_Template, 3, 2, "ng-container", 12)(4, AutoComplete_ul_4_Template, 6, 27, "ul", 13)(5, AutoComplete_ng_container_5_Template, 3, 2, "ng-container", 12)(6, AutoComplete_button_6_Template, 4, 5, "button", 14);
      ɵɵelementStart(7, "p-overlay", 15, 1);
      ɵɵtwoWayListener("visibleChange", function AutoComplete_Template_p_overlay_visibleChange_7_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
        return ɵɵresetView($event);
      });
      ɵɵlistener("onAnimationStart", function AutoComplete_Template_p_overlay_onAnimationStart_7_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onOverlayAnimationStart($event));
      })("onHide", function AutoComplete_Template_p_overlay_onHide_7_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.hide());
      });
      ɵɵelementStart(9, "div", 16);
      ɵɵtemplate(10, AutoComplete_ng_container_10_Template, 1, 0, "ng-container", 17)(11, AutoComplete_p_scroller_11_Template, 4, 10, "p-scroller", 18)(12, AutoComplete_ng_container_12_Template, 2, 6, "ng-container", 12)(13, AutoComplete_ng_template_13_Template, 4, 7, "ng-template", null, 2, ɵɵtemplateRefExtractor)(15, AutoComplete_ng_container_15_Template, 1, 0, "ng-container", 17);
      ɵɵelementEnd();
      ɵɵelementStart(16, "span", 19);
      ɵɵtext(17);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", ctx.containerClass)("ngStyle", ctx.style);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !ctx.multiple);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isVisibleClearIcon);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.multiple);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.loading);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.dropdown);
      ɵɵadvance();
      ɵɵtwoWayProperty("visible", ctx.overlayVisible);
      ɵɵproperty("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
      ɵɵadvance(2);
      ɵɵclassMap(ctx.panelStyleClass);
      ɵɵproperty("ngClass", ctx.panelClass)("ngStyle", ctx.panelStyles);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.headerTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.virtualScroll);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.virtualScroll);
      ɵɵadvance(3);
      ɵɵproperty("ngTemplateOutlet", ctx.footerTemplate);
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.selectedMessageText, " ");
    }
  },
  dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Overlay, PrimeTemplate, ButtonDirective, Ripple, Scroller, AutoFocus, TimesCircleIcon, SpinnerIcon, TimesIcon, ChevronDownIcon],
  styles: ["@layer primeng{.p-autocomplete{display:inline-flex;position:relative}.p-autocomplete-loader{position:absolute;top:50%;margin-top:-.5rem}.p-autocomplete-dd .p-autocomplete-input{flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-top-right-radius:0;border-bottom-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-top-left-radius:0;border-bottom-left-radius:0}.p-autocomplete-panel{overflow:auto}.p-autocomplete-items{margin:0;padding:0;list-style-type:none}.p-autocomplete-item{cursor:pointer;white-space:nowrap;position:relative;overflow:hidden}.p-autocomplete-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-autocomplete-token{width:fit-content;cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-autocomplete-token-icon{display:flex;cursor:pointer}.p-autocomplete-input-token{flex:1 1 auto;display:inline-flex}.p-autocomplete-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-autocomplete{display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}.p-autocomplete-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-autocomplete-clearable{position:relative}}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var AutoComplete = _AutoComplete;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoComplete, [{
    type: Component,
    args: [{
      selector: "p-autoComplete",
      template: '\n        <div #container [ngClass]="containerClass" [ngStyle]="style" [class]="styleClass" (click)="onContainerClick($event)">\n            <input\n                *ngIf="!multiple"\n                #focusInput\n                pAutoFocus\n                [autofocus]="autofocus"\n                [ngClass]="inputClass"\n                [ngStyle]="inputStyle"\n                [class]="inputStyleClass"\n                [type]="type"\n                [attr.value]="inputValue()"\n                [attr.id]="inputId"\n                [autocomplete]="autocomplete"\n                [required]="required"\n                [name]="name"\n                aria-autocomplete="list"\n                role="combobox"\n                [attr.placeholder]="placeholder"\n                [attr.size]="size"\n                [attr.maxlength]="maxlength"\n                [tabindex]="!disabled ? tabindex : -1"\n                [readonly]="readonly"\n                [disabled]="disabled"\n                [attr.aria-label]="ariaLabel"\n                [attr.aria-labelledby]="ariaLabelledBy"\n                [attr.aria-required]="required"\n                [attr.aria-expanded]="overlayVisible ?? false"\n                [attr.aria-controls]="overlayVisible ? id + \'_list\' : null"\n                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"\n                (input)="onInput($event)"\n                (keydown)="onKeyDown($event)"\n                (change)="onInputChange($event)"\n                (focus)="onInputFocus($event)"\n                (blur)="onInputBlur($event)"\n                (paste)="onInputPaste($event)"\n                (keyup)="onInputKeyUp($event)"\n            />\n            <ng-container *ngIf="isVisibleClearIcon">\n                <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="\'p-autocomplete-clear-icon\'" (click)="clear()" [attr.aria-hidden]="true" />\n                <span *ngIf="clearIconTemplate" class="p-autocomplete-clear-icon" (click)="clear()" [attr.aria-hidden]="true">\n                    <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>\n                </span>\n            </ng-container>\n\n            <ul\n                *ngIf="multiple"\n                #multiContainer\n                [ngClass]="multiContainerClass"\n                [tabindex]="-1"\n                role="listbox"\n                [attr.aria-orientation]="\'horizontal\'"\n                [attr.aria-activedescendant]="focused ? focusedMultipleOptionId : undefined"\n                (focus)="onMultipleContainerFocus($event)"\n                (blur)="onMultipleContainerBlur($event)"\n                (keydown)="onMultipleContainerKeyDown($event)"\n            >\n                <li\n                    #token\n                    *ngFor="let option of modelValue(); let i = index"\n                    [ngClass]="{ \'p-autocomplete-token\': true, \'p-focus\': focusedMultipleOptionIndex() === i }"\n                    [attr.id]="id + \'_multiple_option_\' + i"\n                    role="option"\n                    [attr.aria-label]="getOptionLabel(option)"\n                    [attr.aria-setsize]="modelValue().length"\n                    [attr.aria-posinset]="i + 1"\n                    [attr.aria-selected]="true"\n                >\n                    <ng-container *ngTemplateOutlet="selectedItemTemplate; context: { $implicit: option }"></ng-container>\n                    <span *ngIf="!selectedItemTemplate" class="p-autocomplete-token-label">{{ getMultipleLabel(option) }}</span>\n                    <span class="p-autocomplete-token-icon" (click)="!readonly ? removeOption($event, i) : \'\'">\n                        <TimesCircleIcon [styleClass]="\'p-autocomplete-token-icon\'" *ngIf="!removeIconTemplate" [attr.aria-hidden]="true" />\n                        <span *ngIf="removeIconTemplate" class="p-autocomplete-token-icon" [attr.aria-hidden]="true">\n                            <ng-template *ngTemplateOutlet="removeIconTemplate"></ng-template>\n                        </span>\n                    </span>\n                </li>\n                <li class="p-autocomplete-input-token" role="option">\n                    <input\n                        #focusInput\n                        pAutoFocus\n                        [autofocus]="autofocus"\n                        [ngClass]="inputClass"\n                        [ngStyle]="inputStyle"\n                        [class]="inputStyleClass"\n                        [attr.type]="type"\n                        [attr.id]="inputId"\n                        [autocomplete]="autocomplete"\n                        [required]="required"\n                        [attr.name]="name"\n                        role="combobox"\n                        [attr.placeholder]="!filled ? placeholder : null"\n                        [attr.size]="size"\n                        aria-autocomplete="list"\n                        [attr.maxlength]="maxlength"\n                        [tabindex]="!disabled ? tabindex : -1"\n                        [readonly]="readonly"\n                        [disabled]="disabled"\n                        [attr.aria-label]="ariaLabel"\n                        [attr.aria-labelledby]="ariaLabelledBy"\n                        [attr.aria-required]="required"\n                        [attr.aria-expanded]="overlayVisible ?? false"\n                        [attr.aria-controls]="overlayVisible ? id + \'_list\' : null"\n                        [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"\n                        (input)="onInput($event)"\n                        (keydown)="onKeyDown($event)"\n                        (change)="onInputChange($event)"\n                        (focus)="onInputFocus($event)"\n                        (blur)="onInputBlur($event)"\n                        (paste)="onInputPaste($event)"\n                        (keyup)="onInputKeyUp($event)"\n                    />\n                </li>\n            </ul>\n            <ng-container *ngIf="loading">\n                <SpinnerIcon *ngIf="!loadingIconTemplate" [styleClass]="\'p-autocomplete-loader\'" [spin]="true" [attr.aria-hidden]="true" />\n                <span *ngIf="loadingIconTemplate" class="p-autocomplete-loader pi-spin " [attr.aria-hidden]="true">\n                    <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>\n                </span>\n            </ng-container>\n            <button #ddBtn type="button" pButton [attr.aria-label]="dropdownAriaLabel" class="p-autocomplete-dropdown p-button-icon-only" [disabled]="disabled" pRipple (click)="handleDropdownClick($event)" *ngIf="dropdown" [attr.tabindex]="tabindex">\n                <span *ngIf="dropdownIcon" [ngClass]="dropdownIcon" [attr.aria-hidden]="true"></span>\n                <ng-container *ngIf="!dropdownIcon">\n                    <ChevronDownIcon *ngIf="!dropdownIconTemplate" />\n                    <ng-template *ngTemplateOutlet="dropdownIconTemplate"></ng-template>\n                </ng-container>\n            </button>\n            <p-overlay\n                #overlay\n                [(visible)]="overlayVisible"\n                [options]="overlayOptions"\n                [target]="\'@parent\'"\n                [appendTo]="appendTo"\n                [showTransitionOptions]="showTransitionOptions"\n                [hideTransitionOptions]="hideTransitionOptions"\n                (onAnimationStart)="onOverlayAnimationStart($event)"\n                (onHide)="hide()"\n            >\n                <div [ngClass]="panelClass" [ngStyle]="panelStyles" [class]="panelStyleClass">\n                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>\n                    <p-scroller\n                        *ngIf="virtualScroll"\n                        #scroller\n                        [items]="visibleOptions()"\n                        [style]="{ height: scrollHeight }"\n                        [itemSize]="virtualScrollItemSize || _itemSize"\n                        [autoSize]="true"\n                        [lazy]="lazy"\n                        (onLazyLoad)="onLazyLoad.emit($event)"\n                        [options]="virtualScrollOptions"\n                    >\n                        <ng-template pTemplate="content" let-items let-scrollerOptions="options">\n                            <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>\n                        </ng-template>\n                        <ng-container *ngIf="loaderTemplate">\n                            <ng-template pTemplate="loader" let-scrollerOptions="options">\n                                <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>\n                            </ng-template>\n                        </ng-container>\n                    </p-scroller>\n                    <ng-container *ngIf="!virtualScroll">\n                        <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>\n                    </ng-container>\n\n                    <ng-template #buildInItems let-items let-scrollerOptions="options">\n                        <ul #items class="p-autocomplete-items" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox" [attr.id]="id + \'_list\'" [attr.aria-label]="listLabel">\n                            <ng-template ngFor let-option [ngForOf]="items" let-i="index">\n                                <ng-container *ngIf="isOptionGroup(option)">\n                                    <li [attr.id]="id + \'_\' + getOptionIndex(i, scrollerOptions)" class="p-autocomplete-item-group" [ngStyle]="{ height: scrollerOptions.itemSize + \'px\' }" role="option">\n                                        <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>\n                                        <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>\n                                    </li>\n                                </ng-container>\n                                <ng-container *ngIf="!isOptionGroup(option)">\n                                    <li\n                                        class="p-autocomplete-item"\n                                        pRipple\n                                        [ngStyle]="{ height: scrollerOptions.itemSize + \'px\' }"\n                                        [ngClass]="{ \'p-highlight\': isSelected(option), \'p-focus\': focusedOptionIndex() === getOptionIndex(i, scrollerOptions), \'p-disabled\': isOptionDisabled(option) }"\n                                        [attr.id]="id + \'_\' + getOptionIndex(i, scrollerOptions)"\n                                        role="option"\n                                        [attr.aria-label]="getOptionLabel(option)"\n                                        [attr.aria-selected]="isSelected(option)"\n                                        [attr.aria-disabled]="isOptionDisabled(option)"\n                                        [attr.data-p-focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"\n                                        [attr.aria-setsize]="ariaSetSize"\n                                        [attr.aria-posinset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"\n                                        (mousedown)="onOptionSelect($event, option)"\n                                        (mouseenter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"\n                                    >\n                                        <span *ngIf="!itemTemplate">{{ getOptionLabel(option) }}</span>\n                                        <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: option, index: scrollerOptions.getOptions ? scrollerOptions.getOptions(i) : i }"></ng-container>\n                                    </li>\n                                </ng-container>\n                            </ng-template>\n                            <li *ngIf="!items || (items && items.length === 0 && showEmptyMessage)" class="p-autocomplete-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + \'px\' }" role="option">\n                                <ng-container *ngIf="!emptyTemplate; else empty">\n                                    {{ searchResultMessageText }}\n                                </ng-container>\n                                <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>\n                            </li>\n                        </ul>\n                    </ng-template>\n                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>\n                </div>\n                <span role="status" aria-live="polite" class="p-hidden-accessible">\n                    {{ selectedMessageText }}\n                </span>\n            </p-overlay>\n        </div>\n    ',
      host: {
        class: "p-element p-inputwrapper",
        "[class.p-inputwrapper-filled]": "filled",
        "[class.p-inputwrapper-focus]": "((focused && !disabled) || autofocus) || overlayVisible",
        "[class.p-autocomplete-clearable]": "showClear && !disabled"
      },
      providers: [AUTOCOMPLETE_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: ["@layer primeng{.p-autocomplete{display:inline-flex;position:relative}.p-autocomplete-loader{position:absolute;top:50%;margin-top:-.5rem}.p-autocomplete-dd .p-autocomplete-input{flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-top-right-radius:0;border-bottom-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-top-left-radius:0;border-bottom-left-radius:0}.p-autocomplete-panel{overflow:auto}.p-autocomplete-items{margin:0;padding:0;list-style-type:none}.p-autocomplete-item{cursor:pointer;white-space:nowrap;position:relative;overflow:hidden}.p-autocomplete-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-autocomplete-token{width:fit-content;cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-autocomplete-token-icon{display:flex;cursor:pointer}.p-autocomplete-input-token{flex:1 1 auto;display:inline-flex}.p-autocomplete-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-autocomplete{display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}.p-autocomplete-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-autocomplete-clearable{position:relative}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }, {
    type: OverlayService
  }, {
    type: NgZone
  }], {
    minLength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    delay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    inputStyleClass: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    readonly: [{
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
    scrollHeight: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    maxlength: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
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
    size: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    appendTo: [{
      type: Input
    }],
    autoHighlight: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    forceSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    type: [{
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
    ariaLabel: [{
      type: Input
    }],
    dropdownAriaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    dropdownIcon: [{
      type: Input
    }],
    unique: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    group: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    completeOnFocus: [{
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
    field: [{
      type: Input
    }],
    dropdown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showEmptyMessage: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownMode: [{
      type: Input
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    dataKey: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autocomplete: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    optionGroupLabel: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    suggestions: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    searchMessage: [{
      type: Input
    }],
    emptySelectionMessage: [{
      type: Input
    }],
    selectionMessage: [{
      type: Input
    }],
    autoOptionFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    searchLocale: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optionDisabled: [{
      type: Input
    }],
    focusOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    completeMethod: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onUnselect: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onDropdownClick: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onKeyUp: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    containerEL: [{
      type: ViewChild,
      args: ["container"]
    }],
    inputEL: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    multiInputEl: [{
      type: ViewChild,
      args: ["multiIn"]
    }],
    multiContainerEL: [{
      type: ViewChild,
      args: ["multiContainer"]
    }],
    dropdownButton: [{
      type: ViewChild,
      args: ["ddBtn"]
    }],
    itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var _AutoCompleteModule = class _AutoCompleteModule {
};
__publicField(_AutoCompleteModule, "ɵfac", function AutoCompleteModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutoCompleteModule)();
});
__publicField(_AutoCompleteModule, "ɵmod", ɵɵdefineNgModule({
  type: _AutoCompleteModule,
  declarations: [AutoComplete],
  imports: [CommonModule, OverlayModule, InputTextModule, ButtonModule, SharedModule, RippleModule, ScrollerModule, AutoFocusModule, TimesCircleIcon, SpinnerIcon, TimesIcon, ChevronDownIcon],
  exports: [AutoComplete, OverlayModule, SharedModule, ScrollerModule, AutoFocusModule]
}));
__publicField(_AutoCompleteModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, OverlayModule, InputTextModule, ButtonModule, SharedModule, RippleModule, ScrollerModule, AutoFocusModule, TimesCircleIcon, SpinnerIcon, TimesIcon, ChevronDownIcon, OverlayModule, SharedModule, ScrollerModule, AutoFocusModule]
}));
var AutoCompleteModule = _AutoCompleteModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoCompleteModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverlayModule, InputTextModule, ButtonModule, SharedModule, RippleModule, ScrollerModule, AutoFocusModule, TimesCircleIcon, SpinnerIcon, TimesIcon, ChevronDownIcon],
      exports: [AutoComplete, OverlayModule, SharedModule, ScrollerModule, AutoFocusModule],
      declarations: [AutoComplete]
    }]
  }], null, null);
})();
export {
  AUTOCOMPLETE_VALUE_ACCESSOR,
  AutoComplete,
  AutoCompleteModule
};
//# sourceMappingURL=primeng_autocomplete.js.map
