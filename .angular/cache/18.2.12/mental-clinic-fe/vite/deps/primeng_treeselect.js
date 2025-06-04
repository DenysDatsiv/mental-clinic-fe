import {
  Tree,
  TreeModule
} from "./chunk-YJ2A57R6.js";
import {
  SearchIcon
} from "./chunk-ZVYGKXDY.js";
import "./chunk-SKFQLP4M.js";
import "./chunk-6RCVZF7W.js";
import "./chunk-A2QFKI6F.js";
import "./chunk-VW3MRXK5.js";
import {
  Overlay,
  OverlayModule
} from "./chunk-RGZM7SWW.js";
import "./chunk-VYCWYYRS.js";
import {
  TimesIcon
} from "./chunk-AP6UZX4B.js";
import {
  RippleModule
} from "./chunk-MUJBADSC.js";
import {
  AutoFocus,
  AutoFocusModule
} from "./chunk-LND2F6FW.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-ZOG4HQFG.js";
import "./chunk-CDDPLBF3.js";
import {
  ChevronDownIcon
} from "./chunk-HCVMWVY4.js";
import "./chunk-BJLZ3T2F.js";
import {
  OverlayService,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule
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
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  forwardRef,
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
  ɵɵrestoreView,
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
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-treeselect.mjs
var _c0 = ["container"];
var _c1 = ["focusInput"];
var _c2 = ["filter"];
var _c3 = ["tree"];
var _c4 = ["panel"];
var _c5 = ["overlay"];
var _c6 = ["firstHiddenFocusableEl"];
var _c7 = ["lastHiddenFocusableEl"];
var _c8 = (a0, a1) => ({
  $implicit: a0,
  placeholder: a1
});
var _c9 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c10 = (a0) => ({
  "max-height": a0
});
var _c11 = (a0) => ({
  $implicit: a0
});
var _c12 = (a0, a1) => ({
  $implicit: a0,
  partialSelected: a1
});
function TreeSelect_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeSelect_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TreeSelect_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 22);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.valueTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c8, ctx_r1.value, ctx_r1.placeholder));
  }
}
function TreeSelect_ng_template_8_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.label || "empty", " ");
  }
}
function TreeSelect_ng_template_8_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24)(1, "span", 25);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const node_r3 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(node_r3.label);
  }
}
function TreeSelect_ng_template_8_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.placeholder || "empty");
  }
}
function TreeSelect_ng_template_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_8_ng_template_1_div_0_Template, 3, 1, "div", 23)(1, TreeSelect_ng_template_8_ng_template_1_ng_container_1_Template, 2, 1, "ng-container", 16);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngForOf", ctx_r1.value);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.emptyValue);
  }
}
function TreeSelect_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_8_ng_container_0_Template, 2, 1, "ng-container", 15)(1, TreeSelect_ng_template_8_ng_template_1_Template, 2, 2, "ng-template", null, 4, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const chipsValueTemplate_r4 = ɵɵreference(2);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.display === "comma")("ngIfElse", chipsValueTemplate_r4);
  }
}
function TreeSelect_ng_container_10_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "TimesIcon", 28);
    ɵɵlistener("click", function TreeSelect_ng_container_10_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.clear($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-treeselect-clear-icon");
  }
}
function TreeSelect_ng_container_10_span_2_1_ng_template_0_Template(rf, ctx) {
}
function TreeSelect_ng_container_10_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_container_10_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TreeSelect_ng_container_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 29);
    ɵɵlistener("click", function TreeSelect_ng_container_10_span_2_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.clear($event));
    });
    ɵɵtemplate(1, TreeSelect_ng_container_10_span_2_1_Template, 1, 0, null, 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.clearIconTemplate);
  }
}
function TreeSelect_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TreeSelect_ng_container_10_TimesIcon_1_Template, 1, 1, "TimesIcon", 26)(2, TreeSelect_ng_container_10_span_2_Template, 2, 1, "span", 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.clearIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.clearIconTemplate);
  }
}
function TreeSelect_ChevronDownIcon_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon", 31);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-treeselect-trigger-icon");
  }
}
function TreeSelect_span_13_1_ng_template_0_Template(rf, ctx) {
}
function TreeSelect_span_13_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_span_13_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TreeSelect_span_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 32);
    ɵɵtemplate(1, TreeSelect_span_13_1_Template, 1, 0, null, 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.triggerIconTemplate);
  }
}
function TreeSelect_ng_template_16_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeSelect_ng_template_16_div_5_SearchIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SearchIcon", 31);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-treeselect-filter-icon");
  }
}
function TreeSelect_ng_template_16_div_5_span_5_1_ng_template_0_Template(rf, ctx) {
}
function TreeSelect_ng_template_16_div_5_span_5_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_16_div_5_span_5_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TreeSelect_ng_template_16_div_5_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 43);
    ɵɵtemplate(1, TreeSelect_ng_template_16_div_5_span_5_1_Template, 1, 0, null, 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.filterIconTemplate);
  }
}
function TreeSelect_ng_template_16_div_5_TimesIcon_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesIcon");
  }
}
function TreeSelect_ng_template_16_div_5_span_8_1_ng_template_0_Template(rf, ctx) {
}
function TreeSelect_ng_template_16_div_5_span_8_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_16_div_5_span_8_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TreeSelect_ng_template_16_div_5_span_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, TreeSelect_ng_template_16_div_5_span_8_1_Template, 1, 0, null, 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.closeIconTemplate);
  }
}
function TreeSelect_ng_template_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 38);
    ɵɵlistener("keydown.arrowdown", function TreeSelect_ng_template_16_div_5_Template_div_keydown_arrowdown_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onArrowDown($event));
    });
    ɵɵelementStart(1, "div", 39)(2, "input", 40, 9);
    ɵɵlistener("keydown.enter", function TreeSelect_ng_template_16_div_5_Template_input_keydown_enter_2_listener($event) {
      ɵɵrestoreView(_r8);
      return ɵɵresetView($event.preventDefault());
    })("input", function TreeSelect_ng_template_16_div_5_Template_input_input_2_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onFilterInput($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(4, TreeSelect_ng_template_16_div_5_SearchIcon_4_Template, 1, 1, "SearchIcon", 18)(5, TreeSelect_ng_template_16_div_5_span_5_Template, 2, 1, "span", 41);
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 42);
    ɵɵlistener("click", function TreeSelect_ng_template_16_div_5_Template_button_click_6_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.hide());
    });
    ɵɵtemplate(7, TreeSelect_ng_template_16_div_5_TimesIcon_7_Template, 1, 0, "TimesIcon", 16)(8, TreeSelect_ng_template_16_div_5_span_8_Template, 2, 1, "span", 16);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("value", ctx_r1.filterValue);
    ɵɵattribute("placeholder", ctx_r1.filterPlaceholder);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.filterIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.filterIconTemplate);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.closeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.closeIconTemplate);
  }
}
function TreeSelect_ng_template_16_ng_container_9_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeSelect_ng_template_16_ng_container_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_16_ng_container_9_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 30);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.emptyTemplate);
  }
}
function TreeSelect_ng_template_16_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TreeSelect_ng_template_16_ng_container_9_ng_template_1_Template, 1, 1, "ng-template", 44);
    ɵɵelementContainerEnd();
  }
}
function TreeSelect_ng_template_16_10_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeSelect_ng_template_16_10_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_16_10_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 22);
  }
  if (rf & 2) {
    const expanded_r9 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTogglerIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c11, expanded_r9));
  }
}
function TreeSelect_ng_template_16_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_16_10_ng_template_0_Template, 1, 4, "ng-template", 45);
  }
}
function TreeSelect_ng_template_16_11_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeSelect_ng_template_16_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_16_11_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 22);
  }
  if (rf & 2) {
    const selected_r10 = ctx.$implicit;
    const partialSelected_r11 = ctx.partialSelected;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemCheckboxIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c12, selected_r10, partialSelected_r11));
  }
}
function TreeSelect_ng_template_16_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_16_11_ng_template_0_Template, 1, 5, "ng-template", 46);
  }
}
function TreeSelect_ng_template_16_12_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeSelect_ng_template_16_12_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_16_12_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 30);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemLoadingIconTemplate);
  }
}
function TreeSelect_ng_template_16_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeSelect_ng_template_16_12_ng_template_0_Template, 1, 1, "ng-template", 47);
  }
}
function TreeSelect_ng_template_16_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeSelect_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 33, 5)(2, "span", 34, 6);
    ɵɵlistener("focus", function TreeSelect_ng_template_16_Template_span_focus_2_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onFirstHiddenFocus($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(4, TreeSelect_ng_template_16_ng_container_4_Template, 1, 0, "ng-container", 22)(5, TreeSelect_ng_template_16_div_5_Template, 9, 6, "div", 35);
    ɵɵelementStart(6, "div", 36)(7, "p-tree", 37, 7);
    ɵɵlistener("selectionChange", function TreeSelect_ng_template_16_Template_p_tree_selectionChange_7_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSelectionChange($event));
    })("onNodeExpand", function TreeSelect_ng_template_16_Template_p_tree_onNodeExpand_7_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nodeExpand($event));
    })("onNodeCollapse", function TreeSelect_ng_template_16_Template_p_tree_onNodeCollapse_7_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nodeCollapse($event));
    })("onNodeSelect", function TreeSelect_ng_template_16_Template_p_tree_onNodeSelect_7_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSelect($event));
    })("onNodeUnselect", function TreeSelect_ng_template_16_Template_p_tree_onNodeUnselect_7_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onUnselect($event));
    });
    ɵɵtemplate(9, TreeSelect_ng_template_16_ng_container_9_Template, 2, 0, "ng-container", 16)(10, TreeSelect_ng_template_16_10_Template, 1, 0, null, 16)(11, TreeSelect_ng_template_16_11_Template, 1, 0, null, 16)(12, TreeSelect_ng_template_16_12_Template, 1, 0, null, 16);
    ɵɵelementEnd()();
    ɵɵtemplate(13, TreeSelect_ng_template_16_ng_container_13_Template, 1, 0, "ng-container", 22);
    ɵɵelementStart(14, "span", 34, 8);
    ɵɵlistener("focus", function TreeSelect_ng_template_16_Template_span_focus_14_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onLastHiddenFocus($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.panelStyleClass);
    ɵɵproperty("ngStyle", ctx_r1.panelStyle)("ngClass", ctx_r1.panelClass);
    ɵɵattribute("id", ctx_r1.listId);
    ɵɵadvance(2);
    ɵɵattribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(38, _c9, ctx_r1.value, ctx_r1.options));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.filter);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(41, _c10, ctx_r1.scrollHeight));
    ɵɵadvance();
    ɵɵproperty("value", ctx_r1.options)("propagateSelectionDown", ctx_r1.propagateSelectionDown)("propagateSelectionUp", ctx_r1.propagateSelectionUp)("selectionMode", ctx_r1.selectionMode)("selection", ctx_r1.value)("metaKeySelection", ctx_r1.metaKeySelection)("emptyMessage", ctx_r1.emptyMessage)("filterBy", ctx_r1.filterBy)("filterMode", ctx_r1.filterMode)("filterPlaceholder", ctx_r1.filterPlaceholder)("filterLocale", ctx_r1.filterLocale)("filteredNodes", ctx_r1.filteredNodes)("virtualScroll", ctx_r1.virtualScroll)("virtualScrollItemSize", ctx_r1.virtualScrollItemSize)("virtualScrollOptions", ctx_r1.virtualScrollOptions)("_templateMap", ctx_r1.templateMap)("loading", ctx_r1.loading);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.emptyTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.itemTogglerIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.itemCheckboxIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.itemLoadingIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(43, _c9, ctx_r1.value, ctx_r1.options));
    ɵɵadvance();
    ɵɵattribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
var TREESELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TreeSelect),
  multi: true
};
var _TreeSelect = class _TreeSelect {
  constructor(config, cd, el, overlayService) {
    __publicField(this, "config");
    __publicField(this, "cd");
    __publicField(this, "el");
    __publicField(this, "overlayService");
    /**
     * Identifier of the underlying input element.
     * @group Props
     */
    __publicField(this, "inputId");
    /**
     * Height of the viewport, a scrollbar is defined if height of list exceeds this value.
     * @group Props
     */
    __publicField(this, "scrollHeight", "400px");
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    __publicField(this, "disabled");
    /**
     * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
     * @group Props
     */
    __publicField(this, "metaKeySelection", false);
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    __publicField(this, "variant", "outlined");
    /**
     * Defines how the selected items are displayed.
     * @group Props
     */
    __publicField(this, "display", "comma");
    /**
     * Defines the selection mode.
     * @group Props
     */
    __publicField(this, "selectionMode", "single");
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    __publicField(this, "tabindex", "0");
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    __publicField(this, "ariaLabel");
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    __publicField(this, "ariaLabelledBy");
    /**
     * Label to display when there are no selections.
     * @group Props
     */
    __publicField(this, "placeholder");
    /**
     * Style class of the overlay panel.
     * @group Props
     */
    __publicField(this, "panelClass");
    /**
     * Inline style of the panel element.
     * @group Props
     */
    __publicField(this, "panelStyle");
    /**
     * Style class of the panel element.
     * @group Props
     */
    __publicField(this, "panelStyleClass");
    /**
     * Inline style of the container element.
     * @group Props
     */
    __publicField(this, "containerStyle");
    /**
     * Style class of the container element.
     * @group Props
     */
    __publicField(this, "containerStyleClass");
    /**
     * Inline style of the label element.
     * @group Props
     */
    __publicField(this, "labelStyle");
    /**
     * Style class of the label element.
     * @group Props
     */
    __publicField(this, "labelStyleClass");
    /**
     * Specifies the options for the overlay.
     * @group Props
     */
    __publicField(this, "overlayOptions");
    /**
     * Text to display when there are no options available. Defaults to value from PrimeNG locale configuration.
     * @group Props
     */
    __publicField(this, "emptyMessage", "");
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are "body" for document body and "self" for the element itself.
     * @group Props
     */
    __publicField(this, "appendTo");
    /**
     * When specified, displays an input field to filter the items.
     * @group Props
     */
    __publicField(this, "filter", false);
    /**
     * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
     * @group Props
     */
    __publicField(this, "filterBy", "label");
    /**
     * Mode for filtering valid values are "lenient" and "strict". Default is lenient.
     * @group Props
     */
    __publicField(this, "filterMode", "lenient");
    /**
     * Placeholder text to show when filter input is empty.
     * @group Props
     */
    __publicField(this, "filterPlaceholder");
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    __publicField(this, "filterLocale");
    /**
     * Determines whether the filter input should be automatically focused when the component is rendered.
     * @group Props
     */
    __publicField(this, "filterInputAutoFocus", true);
    /**
     * Whether checkbox selections propagate to descendant nodes.
     * @group Props
     */
    __publicField(this, "propagateSelectionDown", true);
    /**
     * Whether checkbox selections propagate to ancestor nodes.
     * @group Props
     */
    __publicField(this, "propagateSelectionUp", true);
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    __publicField(this, "showClear", false);
    /**
     * Clears the filter value when hiding the dropdown.
     * @group Props
     */
    __publicField(this, "resetFilterOnHide", true);
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
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    __publicField(this, "autofocus");
    /**
     * Displays a loader to indicate data load is in progress.
     * @group Props
     */
    __publicField(this, "loading");
    /**
     * Callback to invoke when a node is expanded.
     * @param {TreeSelectNodeExpandEvent} event - Custom node expand event.
     * @group Emits
     */
    __publicField(this, "onNodeExpand", new EventEmitter());
    /**
     * Callback to invoke when a node is collapsed.
     * @param {TreeSelectNodeCollapseEvent} event - Custom node collapse event.
     * @group Emits
     */
    __publicField(this, "onNodeCollapse", new EventEmitter());
    /**
     * Callback to invoke when the overlay is shown.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    __publicField(this, "onShow", new EventEmitter());
    /**
     * Callback to invoke when the overlay is hidden.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    __publicField(this, "onHide", new EventEmitter());
    /**
     * Callback to invoke when input field is cleared.
     * @group Emits
     */
    __publicField(this, "onClear", new EventEmitter());
    /**
     * Callback to invoke when data is filtered.
     * @group Emits
     */
    __publicField(this, "onFilter", new EventEmitter());
    /**
     * Callback to invoke when treeselect gets focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    __publicField(this, "onFocus", new EventEmitter());
    /**
     * Callback to invoke when treeselect loses focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    __publicField(this, "onBlur", new EventEmitter());
    /**
     * Callback to invoke when a node is unselected.
     * @param {TreeNodeUnSelectEvent} event - node unselect event.
     * @group Emits
     */
    __publicField(this, "onNodeUnselect", new EventEmitter());
    /**
     * Callback to invoke when a node is selected.
     * @param {TreeNodeSelectEvent} event - node select event.
     * @group Emits
     */
    __publicField(this, "onNodeSelect", new EventEmitter());
    __publicField(this, "_showTransitionOptions");
    __publicField(this, "_hideTransitionOptions");
    __publicField(this, "templates");
    __publicField(this, "containerEl");
    __publicField(this, "focusInput");
    __publicField(this, "filterViewChild");
    __publicField(this, "treeViewChild");
    __publicField(this, "panelEl");
    __publicField(this, "overlayViewChild");
    __publicField(this, "firstHiddenFocusableElementOnOverlay");
    __publicField(this, "lastHiddenFocusableElementOnOverlay");
    __publicField(this, "filteredNodes");
    __publicField(this, "filterValue", null);
    __publicField(this, "serializedValue");
    __publicField(this, "valueTemplate");
    __publicField(this, "headerTemplate");
    __publicField(this, "emptyTemplate");
    __publicField(this, "footerTemplate");
    __publicField(this, "clearIconTemplate");
    __publicField(this, "triggerIconTemplate");
    __publicField(this, "filterIconTemplate");
    __publicField(this, "closeIconTemplate");
    __publicField(this, "itemTogglerIconTemplate");
    __publicField(this, "itemCheckboxIconTemplate");
    __publicField(this, "itemLoadingIconTemplate");
    __publicField(this, "focused");
    __publicField(this, "overlayVisible");
    __publicField(this, "selfChange");
    __publicField(this, "value");
    __publicField(this, "expandedNodes", []);
    __publicField(this, "_options");
    __publicField(this, "templateMap");
    __publicField(this, "onModelChange", () => {
    });
    __publicField(this, "onModelTouched", () => {
    });
    __publicField(this, "listId", "");
    this.config = config;
    this.cd = cd;
    this.el = el;
    this.overlayService = overlayService;
  }
  /**
   * An array of treenodes.
   * @defaultValue undefined
   * @group Props
   */
  get options() {
    return this._options;
  }
  set options(options) {
    this._options = options;
    this.updateTreeState();
  }
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v14.2.0 use overlayOptions property instead.
   */
  get showTransitionOptions() {
    return this._showTransitionOptions;
  }
  set showTransitionOptions(val) {
    this._showTransitionOptions = val;
    console.warn("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v14.2.0 use overlayOptions property instead.
   */
  get hideTransitionOptions() {
    return this._hideTransitionOptions;
  }
  set hideTransitionOptions(val) {
    this._hideTransitionOptions = val;
    console.warn("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  ngOnInit() {
    this.listId = UniqueComponentId() + "_list";
    this.updateTreeState();
  }
  ngAfterContentInit() {
    if (this.templates.length) {
      this.templateMap = {};
    }
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "value":
          this.valueTemplate = item.template;
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
        case "clearicon":
          this.clearIconTemplate = item.template;
          break;
        case "triggericon":
          this.triggerIconTemplate = item.template;
          break;
        case "filtericon":
          this.filterIconTemplate = item.template;
          break;
        case "closeicon":
          this.closeIconTemplate = item.template;
          break;
        case "itemtogglericon":
          this.itemTogglerIconTemplate = item.template;
          break;
        case "itemcheckboxicon":
          this.itemCheckboxIconTemplate = item.template;
          break;
        case "itemloadingicon":
          this.itemLoadingIconTemplate = item.template;
          break;
        default:
          if (item.name) this.templateMap[item.name] = item.template;
          else this.valueTemplate = item.template;
          break;
      }
    });
  }
  onOverlayAnimationStart(event) {
    var _a, _b;
    switch (event.toState) {
      case "visible":
        if (this.filter) {
          ObjectUtils.isNotEmpty(this.filterValue) && ((_a = this.treeViewChild) == null ? void 0 : _a._filter(this.filterValue));
          this.filterInputAutoFocus && ((_b = this.filterViewChild) == null ? void 0 : _b.nativeElement.focus());
        } else {
          let focusableElements = DomHandler.getFocusableElements(this.panelEl.nativeElement);
          if (focusableElements && focusableElements.length > 0) {
            focusableElements[0].focus();
          }
        }
        break;
    }
  }
  onOverlayBeforeHide(event) {
    let focusableElements = DomHandler.getFocusableElements(this.containerEl.nativeElement);
    if (focusableElements && focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  }
  onSelectionChange(event) {
    this.value = event;
    this.onModelChange(this.value);
    this.cd.markForCheck();
  }
  onClick(event) {
    var _a, _b, _c, _d;
    if (this.disabled) {
      return;
    }
    if (!((_c = (_b = (_a = this.overlayViewChild) == null ? void 0 : _a.el) == null ? void 0 : _b.nativeElement) == null ? void 0 : _c.contains(event.target)) && !DomHandler.hasClass(event.target, "p-treeselect-close") && !DomHandler.hasClass(event.target, "p-checkbox-box") && !DomHandler.hasClass(event.target, "p-checkbox-icon")) {
      if (this.overlayVisible) {
        this.hide();
      } else {
        this.show();
      }
      (_d = this.focusInput) == null ? void 0 : _d.nativeElement.focus();
    }
  }
  onKeyDown(event) {
    var _a;
    switch (event.code) {
      case "ArrowDown":
        if (!this.overlayVisible) {
          this.show();
          event.preventDefault();
        }
        this.onArrowDown(event);
        event.preventDefault();
        break;
      case "Space":
      case "Enter":
        if (!this.overlayVisible) {
          this.show();
          event.preventDefault();
        }
        break;
      case "Escape":
        if (this.overlayVisible) {
          this.hide();
          (_a = this.focusInput) == null ? void 0 : _a.nativeElement.focus();
          event.preventDefault();
        }
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      default:
        break;
    }
  }
  onFilterInput(event) {
    var _a, _b;
    this.filterValue = event.target.value;
    (_a = this.treeViewChild) == null ? void 0 : _a._filter(this.filterValue);
    this.onFilter.emit({
      filter: this.filterValue,
      filteredValue: (_b = this.treeViewChild) == null ? void 0 : _b.filteredNodes
    });
    setTimeout(() => {
      this.overlayViewChild.alignOverlay();
    });
  }
  onArrowDown(event) {
    var _a;
    if (this.overlayVisible && ((_a = this.panelEl) == null ? void 0 : _a.nativeElement)) {
      let focusableElements = DomHandler.getFocusableElements(this.panelEl.nativeElement, ".p-treenode");
      if (focusableElements && focusableElements.length > 0) {
        focusableElements[0].focus();
      }
      event.preventDefault();
    }
  }
  onFirstHiddenFocus(event) {
    var _a, _b, _c, _d;
    const focusableEl = event.relatedTarget === ((_a = this.focusInput) == null ? void 0 : _a.nativeElement) ? DomHandler.getFirstFocusableElement((_c = (_b = this.overlayViewChild) == null ? void 0 : _b.overlayViewChild) == null ? void 0 : _c.nativeElement, ':not([data-p-hidden-focusable="true"])') : (_d = this.focusInput) == null ? void 0 : _d.nativeElement;
    DomHandler.focus(focusableEl);
  }
  onLastHiddenFocus(event) {
    var _a, _b, _c, _d;
    const focusableEl = event.relatedTarget === ((_a = this.focusInput) == null ? void 0 : _a.nativeElement) ? DomHandler.getLastFocusableElement((_c = (_b = this.overlayViewChild) == null ? void 0 : _b.overlayViewChild) == null ? void 0 : _c.nativeElement, ':not([data-p-hidden-focusable="true"])') : (_d = this.focusInput) == null ? void 0 : _d.nativeElement;
    DomHandler.focus(focusableEl);
  }
  show() {
    this.overlayVisible = true;
  }
  hide(event) {
    this.overlayVisible = false;
    this.resetFilter();
    this.onHide.emit(event);
    this.cd.markForCheck();
  }
  clear(event) {
    this.value = null;
    this.resetExpandedNodes();
    this.resetPartialSelected();
    this.onModelChange(this.value);
    this.onClear.emit();
    event.stopPropagation();
  }
  checkValue() {
    return this.value !== null && ObjectUtils.isNotEmpty(this.value);
  }
  onTabKey(event, pressedInInputText = false) {
    if (!pressedInInputText) {
      if (this.overlayVisible && this.hasFocusableElements()) {
        DomHandler.focus(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
        event.preventDefault();
      } else {
        this.overlayVisible && this.hide(this.filter);
      }
    }
  }
  hasFocusableElements() {
    return DomHandler.getFocusableElements(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
  }
  resetFilter() {
    var _a, _b;
    if (this.filter && !this.resetFilterOnHide) {
      this.filteredNodes = (_a = this.treeViewChild) == null ? void 0 : _a.filteredNodes;
      (_b = this.treeViewChild) == null ? void 0 : _b.resetFilter();
    } else {
      this.filterValue = null;
    }
  }
  updateTreeState() {
    if (this.value) {
      let selectedNodes = this.selectionMode === "single" ? [this.value] : [...this.value];
      this.resetExpandedNodes();
      this.resetPartialSelected();
      if (selectedNodes && this.options) {
        this.updateTreeBranchState(null, null, selectedNodes);
      }
    }
  }
  updateTreeBranchState(node, path, selectedNodes) {
    if (node) {
      if (this.isSelected(node)) {
        this.expandPath(path);
        selectedNodes.splice(selectedNodes.indexOf(node), 1);
      }
      if (selectedNodes.length > 0 && node.children) {
        for (let childNode of node.children) {
          this.updateTreeBranchState(childNode, [...path, node], selectedNodes);
        }
      }
    } else {
      for (let childNode of this.options) {
        this.updateTreeBranchState(childNode, [], selectedNodes);
      }
    }
  }
  expandPath(expandedNodes) {
    for (let node of expandedNodes) {
      node.expanded = true;
    }
    this.expandedNodes = [...expandedNodes];
  }
  nodeExpand(event) {
    this.onNodeExpand.emit(event);
    this.expandedNodes.push(event.node);
  }
  nodeCollapse(event) {
    this.onNodeCollapse.emit(event);
    this.expandedNodes.splice(this.expandedNodes.indexOf(event.node), 1);
  }
  resetExpandedNodes() {
    for (let node of this.expandedNodes) {
      node.expanded = false;
    }
    this.expandedNodes = [];
  }
  resetPartialSelected(nodes = this.options) {
    var _a;
    if (!nodes) {
      return;
    }
    for (let node of nodes) {
      node.partialSelected = false;
      if (node.children && ((_a = node.children) == null ? void 0 : _a.length) > 0) {
        this.resetPartialSelected(node.children);
      }
    }
  }
  findSelectedNodes(node, keys, selectedNodes) {
    if (node) {
      if (this.isSelected(node)) {
        selectedNodes.push(node);
        delete keys[node.key];
      }
      if (Object.keys(keys).length && node.children) {
        for (let childNode of node.children) {
          this.findSelectedNodes(childNode, keys, selectedNodes);
        }
      }
    } else {
      for (let childNode of this.options) {
        this.findSelectedNodes(childNode, keys, selectedNodes);
      }
    }
  }
  isSelected(node) {
    return this.findIndexInSelection(node) != -1;
  }
  findIndexInSelection(node) {
    if (this.value) {
      const value = this.selectionMode === "single" ? [this.value] : this.value;
      return value.findIndex((selectedNode) => selectedNode === node || selectedNode.key === node.key && selectedNode.key !== void 0);
    }
    return -1;
  }
  onSelect(event) {
    var _a;
    this.onNodeSelect.emit(event);
    if (this.selectionMode === "single") {
      this.hide();
      (_a = this.focusInput) == null ? void 0 : _a.nativeElement.focus();
    }
  }
  onUnselect(event) {
    this.onNodeUnselect.emit(event);
  }
  onInputFocus(event) {
    if (this.disabled) {
      return;
    }
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    this.onModelTouched();
  }
  writeValue(value) {
    this.value = value;
    this.updateTreeState();
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    setTimeout(() => {
      this.disabled = val;
      this.cd.markForCheck();
    });
  }
  containerClass() {
    return {
      "p-treeselect p-component p-inputwrapper": true,
      "p-treeselect-chip": this.display === "chip",
      "p-disabled": this.disabled,
      "p-focus": this.focused,
      "p-variant-filled": this.variant === "filled" || this.config.inputStyle() === "filled"
    };
  }
  labelClass() {
    return {
      "p-treeselect-label": true,
      "p-placeholder": this.label === this.placeholder,
      "p-treeselect-label-empty": !this.placeholder && this.emptyValue
    };
  }
  get emptyValue() {
    return !this.value || Object.keys(this.value).length === 0;
  }
  get emptyOptions() {
    return !this.options || this.options.length === 0;
  }
  get label() {
    let value = this.value || [];
    return value.length ? value.map((node) => node.label).join(", ") : this.selectionMode === "single" && this.value ? value.label : this.placeholder;
  }
};
__publicField(_TreeSelect, "ɵfac", function TreeSelect_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TreeSelect)(ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(OverlayService));
});
__publicField(_TreeSelect, "ɵcmp", ɵɵdefineComponent({
  type: _TreeSelect,
  selectors: [["p-treeSelect"]],
  contentQueries: function TreeSelect_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function TreeSelect_Query(rf, ctx) {
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
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerEl = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.focusInput = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.treeViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panelEl = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlayViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
    }
  },
  hostAttrs: [1, "p-element", "p-inputwrapper"],
  hostVars: 6,
  hostBindings: function TreeSelect_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("p-inputwrapper-filled", !ctx.emptyValue)("p-inputwrapper-focus", ctx.focused)("p-treeselect-clearable", ctx.showClear && !ctx.disabled);
    }
  },
  inputs: {
    inputId: "inputId",
    scrollHeight: "scrollHeight",
    disabled: [2, "disabled", "disabled", booleanAttribute],
    metaKeySelection: [2, "metaKeySelection", "metaKeySelection", booleanAttribute],
    variant: "variant",
    display: "display",
    selectionMode: "selectionMode",
    tabindex: "tabindex",
    ariaLabel: "ariaLabel",
    ariaLabelledBy: "ariaLabelledBy",
    placeholder: "placeholder",
    panelClass: "panelClass",
    panelStyle: "panelStyle",
    panelStyleClass: "panelStyleClass",
    containerStyle: "containerStyle",
    containerStyleClass: "containerStyleClass",
    labelStyle: "labelStyle",
    labelStyleClass: "labelStyleClass",
    overlayOptions: "overlayOptions",
    emptyMessage: "emptyMessage",
    appendTo: "appendTo",
    filter: [2, "filter", "filter", booleanAttribute],
    filterBy: "filterBy",
    filterMode: "filterMode",
    filterPlaceholder: "filterPlaceholder",
    filterLocale: "filterLocale",
    filterInputAutoFocus: [2, "filterInputAutoFocus", "filterInputAutoFocus", booleanAttribute],
    propagateSelectionDown: [2, "propagateSelectionDown", "propagateSelectionDown", booleanAttribute],
    propagateSelectionUp: [2, "propagateSelectionUp", "propagateSelectionUp", booleanAttribute],
    showClear: [2, "showClear", "showClear", booleanAttribute],
    resetFilterOnHide: [2, "resetFilterOnHide", "resetFilterOnHide", booleanAttribute],
    virtualScroll: "virtualScroll",
    virtualScrollItemSize: "virtualScrollItemSize",
    virtualScrollOptions: "virtualScrollOptions",
    autofocus: [2, "autofocus", "autofocus", booleanAttribute],
    options: "options",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    loading: [2, "loading", "loading", booleanAttribute]
  },
  outputs: {
    onNodeExpand: "onNodeExpand",
    onNodeCollapse: "onNodeCollapse",
    onShow: "onShow",
    onHide: "onHide",
    onClear: "onClear",
    onFilter: "onFilter",
    onFocus: "onFocus",
    onBlur: "onBlur",
    onNodeUnselect: "onNodeUnselect",
    onNodeSelect: "onNodeSelect"
  },
  features: [ɵɵProvidersFeature([TREESELECT_VALUE_ACCESSOR]), ɵɵInputTransformsFeature],
  decls: 17,
  vars: 30,
  consts: [["container", ""], ["focusInput", ""], ["defaultValueTemplate", ""], ["overlay", ""], ["chipsValueTemplate", ""], ["panel", ""], ["firstHiddenFocusableEl", ""], ["tree", ""], ["lastHiddenFocusableEl", ""], ["filter", ""], [3, "click", "ngClass", "ngStyle"], [1, "p-hidden-accessible"], ["type", "text", "role", "combobox", "readonly", "", "pAutoFocus", "", 3, "focus", "blur", "keydown", "disabled", "autofocus"], [1, "p-treeselect-label-container"], [3, "ngClass", "ngStyle"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["role", "button", "aria-haspopup", "tree", 1, "p-treeselect-trigger"], [3, "styleClass", 4, "ngIf"], ["class", "p-treeselect-trigger-icon", 4, "ngIf"], [3, "visibleChange", "onAnimationStart", "onBeforeHide", "onShow", "onHide", "visible", "options", "target", "appendTo", "showTransitionOptions", "hideTransitionOptions"], ["pTemplate", "content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-treeselect-token", 4, "ngFor", "ngForOf"], [1, "p-treeselect-token"], [1, "p-treeselect-token-label"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-treeselect-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "styleClass"], [1, "p-treeselect-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], [3, "styleClass"], [1, "p-treeselect-trigger-icon"], [1, "p-treeselect-panel", "p-component", 3, "ngStyle", "ngClass"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus"], ["class", "p-treeselect-header", 3, "keydown.arrowdown", 4, "ngIf"], [1, "p-treeselect-items-wrapper", 3, "ngStyle"], [3, "selectionChange", "onNodeExpand", "onNodeCollapse", "onNodeSelect", "onNodeUnselect", "value", "propagateSelectionDown", "propagateSelectionUp", "selectionMode", "selection", "metaKeySelection", "emptyMessage", "filterBy", "filterMode", "filterPlaceholder", "filterLocale", "filteredNodes", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "_templateMap", "loading"], [1, "p-treeselect-header", 3, "keydown.arrowdown"], [1, "p-treeselect-filter-container"], ["type", "search", "autocomplete", "off", 1, "p-treeselect-filter", "p-inputtext", "p-component", 3, "keydown.enter", "input", "value"], ["class", "p-treeselect-filter-icon", 4, "ngIf"], [1, "p-treeselect-close", "p-link", 3, "click"], [1, "p-treeselect-filter-icon"], ["pTemplate", "empty"], ["pTemplate", "togglericon"], ["pTemplate", "checkboxicon"], ["pTemplate", "loadingicon"]],
  template: function TreeSelect_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 10, 0);
      ɵɵlistener("click", function TreeSelect_Template_div_click_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onClick($event));
      });
      ɵɵelementStart(2, "div", 11)(3, "input", 12, 1);
      ɵɵlistener("focus", function TreeSelect_Template_input_focus_3_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onInputFocus($event));
      })("blur", function TreeSelect_Template_input_blur_3_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onInputBlur($event));
      })("keydown", function TreeSelect_Template_input_keydown_3_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onKeyDown($event));
      });
      ɵɵelementEnd()();
      ɵɵelementStart(5, "div", 13)(6, "div", 14);
      ɵɵtemplate(7, TreeSelect_ng_container_7_Template, 2, 5, "ng-container", 15)(8, TreeSelect_ng_template_8_Template, 3, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
      ɵɵtemplate(10, TreeSelect_ng_container_10_Template, 3, 2, "ng-container", 16);
      ɵɵelementEnd();
      ɵɵelementStart(11, "div", 17);
      ɵɵtemplate(12, TreeSelect_ChevronDownIcon_12_Template, 1, 1, "ChevronDownIcon", 18)(13, TreeSelect_span_13_Template, 2, 1, "span", 19);
      ɵɵelementEnd();
      ɵɵelementStart(14, "p-overlay", 20, 3);
      ɵɵtwoWayListener("visibleChange", function TreeSelect_Template_p_overlay_visibleChange_14_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
        return ɵɵresetView($event);
      });
      ɵɵlistener("onAnimationStart", function TreeSelect_Template_p_overlay_onAnimationStart_14_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onOverlayAnimationStart($event));
      })("onBeforeHide", function TreeSelect_Template_p_overlay_onBeforeHide_14_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onOverlayBeforeHide($event));
      })("onShow", function TreeSelect_Template_p_overlay_onShow_14_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onShow.emit($event));
      })("onHide", function TreeSelect_Template_p_overlay_onHide_14_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.hide($event));
      });
      ɵɵtemplate(16, TreeSelect_ng_template_16_Template, 16, 46, "ng-template", 21);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      let tmp_13_0;
      let tmp_22_0;
      const defaultValueTemplate_r12 = ɵɵreference(9);
      ɵɵclassMap(ctx.containerStyleClass);
      ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.containerStyle);
      ɵɵadvance(3);
      ɵɵproperty("disabled", ctx.disabled)("autofocus", ctx.autofocus);
      ɵɵattribute("id", ctx.inputId)("tabindex", !ctx.disabled ? ctx.tabindex : -1)("aria-controls", ctx.overlayVisible ? ctx.listId : null)("aria-haspopup", "tree")("aria-expanded", (tmp_13_0 = ctx.overlayVisible) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : false)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel || (ctx.label === "p-emptylabel" ? void 0 : ctx.label));
      ɵɵadvance(3);
      ɵɵclassMap(ctx.labelStyleClass);
      ɵɵproperty("ngClass", ctx.labelClass())("ngStyle", ctx.labelStyle);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.valueTemplate)("ngIfElse", defaultValueTemplate_r12);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.checkValue() && !ctx.disabled && ctx.showClear);
      ɵɵadvance();
      ɵɵattribute("aria-expanded", (tmp_22_0 = ctx.overlayVisible) !== null && tmp_22_0 !== void 0 ? tmp_22_0 : false)("aria-label", "treeselect trigger");
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.triggerIconTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.triggerIconTemplate);
      ɵɵadvance();
      ɵɵtwoWayProperty("visible", ctx.overlayVisible);
      ɵɵproperty("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
    }
  },
  dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Overlay, PrimeTemplate, Tree, AutoFocus, SearchIcon, TimesIcon, ChevronDownIcon],
  styles: ["@layer primeng{.p-treeselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-treeselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-treeselect-label-container{overflow:hidden;flex:1 1 auto;cursor:pointer;display:flex}.p-treeselect-label{display:block;white-space:nowrap;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.p-treeselect-label-empty{overflow:hidden;visibility:hidden}.p-treeselect-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-treeselect-items-wrapper{overflow:auto}.p-treeselect-header{display:flex;align-items:center;justify-content:space-between}.p-treeselect-filter-container{position:relative;flex:1 1 auto}.p-treeselect-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-treeselect-filter-container .p-inputtext{width:100%}.p-treeselect-close{display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;position:relative;margin-left:auto}.p-treeselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-treeselect{display:flex}.p-treeselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-treeselect-clearable{position:relative}}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var TreeSelect = _TreeSelect;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeSelect, [{
    type: Component,
    args: [{
      selector: "p-treeSelect",
      template: '\n        <div #container [ngClass]="containerClass()" [class]="containerStyleClass" [ngStyle]="containerStyle" (click)="onClick($event)">\n            <div class="p-hidden-accessible">\n                <input\n                    #focusInput\n                    type="text"\n                    role="combobox"\n                    [attr.id]="inputId"\n                    readonly\n                    [disabled]="disabled"\n                    (focus)="onInputFocus($event)"\n                    (blur)="onInputBlur($event)"\n                    (keydown)="onKeyDown($event)"\n                    [attr.tabindex]="!disabled ? tabindex : -1"\n                    [attr.aria-controls]="overlayVisible ? listId : null"\n                    [attr.aria-haspopup]="\'tree\'"\n                    [attr.aria-expanded]="overlayVisible ?? false"\n                    [attr.aria-labelledby]="ariaLabelledBy"\n                    [attr.aria-label]="ariaLabel || (label === \'p-emptylabel\' ? undefined : label)"\n                    pAutoFocus\n                    [autofocus]="autofocus"\n                />\n            </div>\n            <div class="p-treeselect-label-container">\n                <div [ngClass]="labelClass()" [class]="labelStyleClass" [ngStyle]="labelStyle">\n                    <ng-container *ngIf="valueTemplate; else defaultValueTemplate">\n                        <ng-container *ngTemplateOutlet="valueTemplate; context: { $implicit: value, placeholder: placeholder }"></ng-container>\n                    </ng-container>\n                    <ng-template #defaultValueTemplate>\n                        <ng-container *ngIf="display === \'comma\'; else chipsValueTemplate">\n                            {{ label || \'empty\' }}\n                        </ng-container>\n                        <ng-template #chipsValueTemplate>\n                            <div *ngFor="let node of value" class="p-treeselect-token">\n                                <span class="p-treeselect-token-label">{{ node.label }}</span>\n                            </div>\n                            <ng-container *ngIf="emptyValue">{{ placeholder || \'empty\' }}</ng-container>\n                        </ng-template>\n                    </ng-template>\n                </div>\n                <ng-container *ngIf="checkValue() && !disabled && showClear">\n                    <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="\'p-treeselect-clear-icon\'" (click)="clear($event)" />\n                    <span *ngIf="clearIconTemplate" class="p-treeselect-clear-icon" (click)="clear($event)">\n                        <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>\n                    </span>\n                </ng-container>\n            </div>\n            <div class="p-treeselect-trigger" role="button" aria-haspopup="tree" [attr.aria-expanded]="overlayVisible ?? false" [attr.aria-label]="\'treeselect trigger\'">\n                <ChevronDownIcon *ngIf="!triggerIconTemplate" [styleClass]="\'p-treeselect-trigger-icon\'" />\n                <span *ngIf="triggerIconTemplate" class="p-treeselect-trigger-icon">\n                    <ng-template *ngTemplateOutlet="triggerIconTemplate"></ng-template>\n                </span>\n            </div>\n            <p-overlay\n                #overlay\n                [(visible)]="overlayVisible"\n                [options]="overlayOptions"\n                [target]="\'@parent\'"\n                [appendTo]="appendTo"\n                [showTransitionOptions]="showTransitionOptions"\n                [hideTransitionOptions]="hideTransitionOptions"\n                (onAnimationStart)="onOverlayAnimationStart($event)"\n                (onBeforeHide)="onOverlayBeforeHide($event)"\n                (onShow)="onShow.emit($event)"\n                (onHide)="hide($event)"\n            >\n                <ng-template pTemplate="content">\n                    <div #panel [attr.id]="listId" class="p-treeselect-panel p-component" [ngStyle]="panelStyle" [class]="panelStyleClass" [ngClass]="panelClass">\n                        <span\n                            #firstHiddenFocusableEl\n                            role="presentation"\n                            class="p-hidden-accessible p-hidden-focusable"\n                            [attr.tabindex]="0"\n                            (focus)="onFirstHiddenFocus($event)"\n                            [attr.data-p-hidden-accessible]="true"\n                            [attr.data-p-hidden-focusable]="true"\n                        >\n                        </span>\n                        <ng-container *ngTemplateOutlet="headerTemplate; context: { $implicit: value, options: options }"></ng-container>\n                        <div class="p-treeselect-header" *ngIf="filter" (keydown.arrowdown)="onArrowDown($event)">\n                            <div class="p-treeselect-filter-container">\n                                <input\n                                    #filter\n                                    type="search"\n                                    autocomplete="off"\n                                    class="p-treeselect-filter p-inputtext p-component"\n                                    [attr.placeholder]="filterPlaceholder"\n                                    (keydown.enter)="$event.preventDefault()"\n                                    (input)="onFilterInput($event)"\n                                    [value]="filterValue"\n                                />\n                                <SearchIcon *ngIf="!filterIconTemplate" [styleClass]="\'p-treeselect-filter-icon\'" />\n                                <span *ngIf="filterIconTemplate" class="p-treeselect-filter-icon">\n                                    <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>\n                                </span>\n                            </div>\n                            <button class="p-treeselect-close p-link" (click)="hide()">\n                                <TimesIcon *ngIf="!closeIconTemplate" />\n                                <span *ngIf="closeIconTemplate">\n                                    <ng-template *ngTemplateOutlet="closeIconTemplate"></ng-template>\n                                </span>\n                            </button>\n                        </div>\n                        <div class="p-treeselect-items-wrapper" [ngStyle]="{ \'max-height\': scrollHeight }">\n                            <p-tree\n                                #tree\n                                [value]="options"\n                                [propagateSelectionDown]="propagateSelectionDown"\n                                [propagateSelectionUp]="propagateSelectionUp"\n                                [selectionMode]="selectionMode"\n                                (selectionChange)="onSelectionChange($event)"\n                                [selection]="value"\n                                [metaKeySelection]="metaKeySelection"\n                                (onNodeExpand)="nodeExpand($event)"\n                                (onNodeCollapse)="nodeCollapse($event)"\n                                (onNodeSelect)="onSelect($event)"\n                                [emptyMessage]="emptyMessage"\n                                (onNodeUnselect)="onUnselect($event)"\n                                [filterBy]="filterBy"\n                                [filterMode]="filterMode"\n                                [filterPlaceholder]="filterPlaceholder"\n                                [filterLocale]="filterLocale"\n                                [filteredNodes]="filteredNodes"\n                                [virtualScroll]="virtualScroll"\n                                [virtualScrollItemSize]="virtualScrollItemSize"\n                                [virtualScrollOptions]="virtualScrollOptions"\n                                [_templateMap]="templateMap"\n                                [loading]="loading"\n                            >\n                                <ng-container *ngIf="emptyTemplate">\n                                    <ng-template pTemplate="empty">\n                                        <ng-container *ngTemplateOutlet="emptyTemplate"></ng-container>\n                                    </ng-template>\n                                </ng-container>\n                                <ng-template pTemplate="togglericon" let-expanded *ngIf="itemTogglerIconTemplate">\n                                    <ng-container *ngTemplateOutlet="itemTogglerIconTemplate; context: { $implicit: expanded }"></ng-container>\n                                </ng-template>\n                                <ng-template pTemplate="checkboxicon" let-selected let-partialSelected="partialSelected" *ngIf="itemCheckboxIconTemplate">\n                                    <ng-container *ngTemplateOutlet="itemCheckboxIconTemplate; context: { $implicit: selected, partialSelected: partialSelected }"></ng-container>\n                                </ng-template>\n                                <ng-template pTemplate="loadingicon" *ngIf="itemLoadingIconTemplate">\n                                    <ng-container *ngTemplateOutlet="itemLoadingIconTemplate"></ng-container>\n                                </ng-template>\n                            </p-tree>\n                        </div>\n                        <ng-container *ngTemplateOutlet="footerTemplate; context: { $implicit: value, options: options }"></ng-container>\n                        <span\n                            #lastHiddenFocusableEl\n                            role="presentation"\n                            class="p-hidden-accessible p-hidden-focusable"\n                            [attr.tabindex]="0"\n                            (focus)="onLastHiddenFocus($event)"\n                            [attr.data-p-hidden-accessible]="true"\n                            [attr.data-p-hidden-focusable]="true"\n                        ></span>\n                    </div>\n                </ng-template>\n            </p-overlay>\n        </div>\n    ',
      host: {
        class: "p-element p-inputwrapper",
        "[class.p-inputwrapper-filled]": "!emptyValue",
        "[class.p-inputwrapper-focus]": "focused",
        "[class.p-treeselect-clearable]": "showClear && !disabled"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TREESELECT_VALUE_ACCESSOR],
      encapsulation: ViewEncapsulation$1.None,
      styles: ["@layer primeng{.p-treeselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-treeselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-treeselect-label-container{overflow:hidden;flex:1 1 auto;cursor:pointer;display:flex}.p-treeselect-label{display:block;white-space:nowrap;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.p-treeselect-label-empty{overflow:hidden;visibility:hidden}.p-treeselect-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-treeselect-items-wrapper{overflow:auto}.p-treeselect-header{display:flex;align-items:center;justify-content:space-between}.p-treeselect-filter-container{position:relative;flex:1 1 auto}.p-treeselect-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-treeselect-filter-container .p-inputtext{width:100%}.p-treeselect-close{display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;position:relative;margin-left:auto}.p-treeselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-treeselect{display:flex}.p-treeselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-treeselect-clearable{position:relative}}\n"]
    }]
  }], () => [{
    type: PrimeNGConfig
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: OverlayService
  }], {
    inputId: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    metaKeySelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    display: [{
      type: Input
    }],
    selectionMode: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    panelClass: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    containerStyle: [{
      type: Input
    }],
    containerStyleClass: [{
      type: Input
    }],
    labelStyle: [{
      type: Input
    }],
    labelStyleClass: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    filter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterBy: [{
      type: Input
    }],
    filterMode: [{
      type: Input
    }],
    filterPlaceholder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    filterInputAutoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    propagateSelectionDown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    propagateSelectionUp: [{
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
    resetFilterOnHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: Input
    }],
    virtualScrollItemSize: [{
      type: Input
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    options: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onNodeExpand: [{
      type: Output
    }],
    onNodeCollapse: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onNodeUnselect: [{
      type: Output
    }],
    onNodeSelect: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    containerEl: [{
      type: ViewChild,
      args: ["container"]
    }],
    focusInput: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    treeViewChild: [{
      type: ViewChild,
      args: ["tree"]
    }],
    panelEl: [{
      type: ViewChild,
      args: ["panel"]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    firstHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["firstHiddenFocusableEl"]
    }],
    lastHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["lastHiddenFocusableEl"]
    }]
  });
})();
var _TreeSelectModule = class _TreeSelectModule {
};
__publicField(_TreeSelectModule, "ɵfac", function TreeSelectModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TreeSelectModule)();
});
__publicField(_TreeSelectModule, "ɵmod", ɵɵdefineNgModule({
  type: _TreeSelectModule,
  declarations: [TreeSelect],
  imports: [CommonModule, OverlayModule, RippleModule, SharedModule, TreeModule, AutoFocusModule, SearchIcon, TimesIcon, ChevronDownIcon],
  exports: [TreeSelect, OverlayModule, SharedModule, TreeModule]
}));
__publicField(_TreeSelectModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, OverlayModule, RippleModule, SharedModule, TreeModule, AutoFocusModule, SearchIcon, TimesIcon, ChevronDownIcon, OverlayModule, SharedModule, TreeModule]
}));
var TreeSelectModule = _TreeSelectModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeSelectModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverlayModule, RippleModule, SharedModule, TreeModule, AutoFocusModule, SearchIcon, TimesIcon, ChevronDownIcon],
      exports: [TreeSelect, OverlayModule, SharedModule, TreeModule],
      declarations: [TreeSelect]
    }]
  }], null, null);
})();
export {
  TREESELECT_VALUE_ACCESSOR,
  TreeSelect,
  TreeSelectModule
};
//# sourceMappingURL=primeng_treeselect.js.map
