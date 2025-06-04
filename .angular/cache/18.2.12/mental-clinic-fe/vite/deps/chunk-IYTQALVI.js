import {
  AngleDoubleLeftIcon,
  AngleDoubleRightIcon,
  AngleLeftIcon
} from "./chunk-S6JNWQPB.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-PC6JCGGY.js";
import {
  Dropdown,
  DropdownModule
} from "./chunk-CK6PE4VJ.js";
import {
  AngleRightIcon
} from "./chunk-BGJ2FQDY.js";
import {
  Ripple,
  RippleModule
} from "./chunk-MUJBADSC.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-ZOG4HQFG.js";
import {
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule
} from "./chunk-ZROJCIWL.js";
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
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewEncapsulation$1,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-R75KKECJ.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-paginator.mjs
var _c0 = (a0) => ({
  "p-disabled": a0
});
var _c1 = (a0) => ({
  $implicit: a0
});
var _c2 = (a0) => ({
  "p-highlight": a0
});
function Paginator_div_0_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, Paginator_div_0_div_1_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "start");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.templateLeft)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c1, ctx_r1.paginatorState));
  }
}
function Paginator_div_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.currentPageReport);
  }
}
function Paginator_div_0_button_3_AngleDoubleLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDoubleLeftIcon", 19);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_button_3_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_div_0_button_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_button_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_button_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtemplate(1, Paginator_div_0_button_3_span_2_1_Template, 1, 0, null, 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.firstPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 18);
    ɵɵlistener("click", function Paginator_div_0_button_3_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.changePageToFirst($event));
    });
    ɵɵtemplate(1, Paginator_div_0_button_3_AngleDoubleLeftIcon_1_Template, 1, 1, "AngleDoubleLeftIcon", 6)(2, Paginator_div_0_button_3_span_2_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r1.isFirstPage() || ctx_r1.empty())("ngClass", ɵɵpureFunction1(5, _c0, ctx_r1.isFirstPage() || ctx_r1.empty()));
    ɵɵattribute("aria-label", ctx_r1.getAriaLabel("firstPageLabel"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.firstPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.firstPageLinkIconTemplate);
  }
}
function Paginator_div_0_AngleLeftIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleLeftIcon", 19);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_span_6_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_div_0_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtemplate(1, Paginator_div_0_span_6_1_Template, 1, 0, null, 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.previousPageLinkIconTemplate);
  }
}
function Paginator_div_0_span_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 24);
    ɵɵlistener("click", function Paginator_div_0_span_7_button_1_Template_button_click_0_listener($event) {
      const pageLink_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onPageLinkClick($event, pageLink_r5 - 1));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const pageLink_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c2, pageLink_r5 - 1 == ctx_r1.getPage()));
    ɵɵattribute("aria-label", ctx_r1.getPageAriaLabel(pageLink_r5))("aria-current", pageLink_r5 - 1 == ctx_r1.getPage() ? "page" : void 0);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getLocalization(pageLink_r5), " ");
  }
}
function Paginator_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtemplate(1, Paginator_div_0_span_7_button_1_Template, 2, 6, "button", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.pageLinks);
  }
}
function Paginator_div_0_p_dropdown_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵtextInterpolate(ctx_r1.currentPageReport);
  }
}
function Paginator_div_0_p_dropdown_8_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_div_0_p_dropdown_8_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_p_dropdown_8_ng_container_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 16);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.jumpToPageItemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, item_r7));
  }
}
function Paginator_div_0_p_dropdown_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Paginator_div_0_p_dropdown_8_ng_container_2_ng_template_1_Template, 1, 4, "ng-template", 28);
    ɵɵelementContainerEnd();
  }
}
function Paginator_div_0_p_dropdown_8_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_div_0_p_dropdown_8_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_p_dropdown_8_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_p_dropdown_8_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_p_dropdown_8_3_ng_template_0_Template, 1, 1, "ng-template", 29);
  }
}
function Paginator_div_0_p_dropdown_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-dropdown", 25);
    ɵɵlistener("onChange", function Paginator_div_0_p_dropdown_8_Template_p_dropdown_onChange_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onPageDropdownChange($event));
    });
    ɵɵtemplate(1, Paginator_div_0_p_dropdown_8_ng_template_1_Template, 1, 1, "ng-template", 26)(2, Paginator_div_0_p_dropdown_8_ng_container_2_Template, 2, 0, "ng-container", 27)(3, Paginator_div_0_p_dropdown_8_3_Template, 1, 0, null, 27);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("options", ctx_r1.pageItems)("ngModel", ctx_r1.getPage())("disabled", ctx_r1.empty())("appendTo", ctx_r1.dropdownAppendTo)("scrollHeight", ctx_r1.dropdownScrollHeight);
    ɵɵattribute("aria-label", ctx_r1.getAriaLabel("jumpToPageDropdownLabel"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.jumpToPageItemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_AngleRightIcon_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 19);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_span_11_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_div_0_span_11_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_span_11_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtemplate(1, Paginator_div_0_span_11_1_Template, 1, 0, null, 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.nextPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_12_AngleDoubleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDoubleRightIcon", 19);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_button_12_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_div_0_button_12_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_button_12_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_button_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtemplate(1, Paginator_div_0_button_12_span_2_1_Template, 1, 0, null, 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.lastPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 30);
    ɵɵlistener("click", function Paginator_div_0_button_12_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.changePageToLast($event));
    });
    ɵɵtemplate(1, Paginator_div_0_button_12_AngleDoubleRightIcon_1_Template, 1, 1, "AngleDoubleRightIcon", 6)(2, Paginator_div_0_button_12_span_2_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r1.isLastPage() || ctx_r1.empty())("ngClass", ɵɵpureFunction1(5, _c0, ctx_r1.isLastPage() || ctx_r1.empty()));
    ɵɵattribute("aria-label", ctx_r1.getAriaLabel("lastPageLabel"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.lastPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.lastPageLinkIconTemplate);
  }
}
function Paginator_div_0_p_inputNumber_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-inputNumber", 31);
    ɵɵlistener("ngModelChange", function Paginator_div_0_p_inputNumber_13_Template_p_inputNumber_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.changePage($event - 1));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngModel", ctx_r1.currentPage())("disabled", ctx_r1.empty());
  }
}
function Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 16);
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.dropdownItemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, item_r11));
  }
}
function Paginator_div_0_p_dropdown_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_Template, 1, 4, "ng-template", 28);
    ɵɵelementContainerEnd();
  }
}
function Paginator_div_0_p_dropdown_14_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_div_0_p_dropdown_14_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_p_dropdown_14_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_p_dropdown_14_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_p_dropdown_14_2_ng_template_0_Template, 1, 1, "ng-template", 29);
  }
}
function Paginator_div_0_p_dropdown_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-dropdown", 32);
    ɵɵtwoWayListener("ngModelChange", function Paginator_div_0_p_dropdown_14_Template_p_dropdown_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.rows, $event) || (ctx_r1.rows = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("onChange", function Paginator_div_0_p_dropdown_14_Template_p_dropdown_onChange_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onRppChange($event));
    });
    ɵɵtemplate(1, Paginator_div_0_p_dropdown_14_ng_container_1_Template, 2, 0, "ng-container", 27)(2, Paginator_div_0_p_dropdown_14_2_Template, 1, 0, null, 27);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("options", ctx_r1.rowsPerPageItems);
    ɵɵtwoWayProperty("ngModel", ctx_r1.rows);
    ɵɵproperty("disabled", ctx_r1.empty())("appendTo", ctx_r1.dropdownAppendTo)("scrollHeight", ctx_r1.dropdownScrollHeight)("ariaLabel", ctx_r1.getAriaLabel("rowsPerPageLabel"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.dropdownItemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_div_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 33);
    ɵɵtemplate(1, Paginator_div_0_div_15_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "end");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.templateRight)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c1, ctx_r1.paginatorState));
  }
}
function Paginator_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, Paginator_div_0_div_1_Template, 2, 5, "div", 2)(2, Paginator_div_0_span_2_Template, 2, 1, "span", 3)(3, Paginator_div_0_button_3_Template, 3, 7, "button", 4);
    ɵɵelementStart(4, "button", 5);
    ɵɵlistener("click", function Paginator_div_0_Template_button_click_4_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changePageToPrev($event));
    });
    ɵɵtemplate(5, Paginator_div_0_AngleLeftIcon_5_Template, 1, 1, "AngleLeftIcon", 6)(6, Paginator_div_0_span_6_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
    ɵɵtemplate(7, Paginator_div_0_span_7_Template, 2, 1, "span", 8)(8, Paginator_div_0_p_dropdown_8_Template, 4, 8, "p-dropdown", 9);
    ɵɵelementStart(9, "button", 10);
    ɵɵlistener("click", function Paginator_div_0_Template_button_click_9_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changePageToNext($event));
    });
    ɵɵtemplate(10, Paginator_div_0_AngleRightIcon_10_Template, 1, 1, "AngleRightIcon", 6)(11, Paginator_div_0_span_11_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
    ɵɵtemplate(12, Paginator_div_0_button_12_Template, 3, 7, "button", 11)(13, Paginator_div_0_p_inputNumber_13_Template, 1, 2, "p-inputNumber", 12)(14, Paginator_div_0_p_dropdown_14_Template, 3, 8, "p-dropdown", 13)(15, Paginator_div_0_div_15_Template, 2, 5, "div", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("ngStyle", ctx_r1.style)("ngClass", "p-paginator p-component");
    ɵɵattribute("data-pc-section", "paginator")("data-pc-section", "root");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.templateLeft);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showCurrentPageReport);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showFirstLastIcon);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.isFirstPage() || ctx_r1.empty())("ngClass", ɵɵpureFunction1(25, _c0, ctx_r1.isFirstPage() || ctx_r1.empty()));
    ɵɵattribute("aria-label", ctx_r1.getAriaLabel("prevPageLabel"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.previousPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.previousPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showPageLinks);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showJumpToPageDropdown);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.isLastPage() || ctx_r1.empty())("ngClass", ɵɵpureFunction1(27, _c0, ctx_r1.isLastPage() || ctx_r1.empty()));
    ɵɵattribute("aria-label", ctx_r1.getAriaLabel("nextPageLabel"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.nextPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.nextPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showFirstLastIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showJumpToPageInput);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.rowsPerPageOptions);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.templateRight);
  }
}
var _Paginator = class _Paginator {
  constructor(cd, config) {
    __publicField(this, "cd");
    __publicField(this, "config");
    /**
     * Number of page links to display.
     * @group Props
     */
    __publicField(this, "pageLinkSize", 5);
    /**
     * Inline style of the component.
     * @group Props
     */
    __publicField(this, "style");
    /**
     * Style class of the component.
     * @group Props
     */
    __publicField(this, "styleClass");
    /**
     * Whether to show it even there is only one page.
     * @group Props
     */
    __publicField(this, "alwaysShow", true);
    /**
     * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    __publicField(this, "dropdownAppendTo");
    /**
     * Template instance to inject into the left side of the paginator.
     * @param {PaginatorState} context - Paginator state.
     * @group Props
     */
    __publicField(this, "templateLeft");
    /**
     * Template instance to inject into the right side of the paginator.
     * @param {PaginatorState} context - Paginator state.
     * @group Props
     */
    __publicField(this, "templateRight");
    /**
     * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    __publicField(this, "appendTo");
    /**
     * Dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
     * @group Props
     */
    __publicField(this, "dropdownScrollHeight", "200px");
    /**
     * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
     * @group Props
     */
    __publicField(this, "currentPageReportTemplate", "{currentPage} of {totalPages}");
    /**
     * Whether to display current page report.
     * @group Props
     */
    __publicField(this, "showCurrentPageReport");
    /**
     * When enabled, icons are displayed on paginator to go first and last page.
     * @group Props
     */
    __publicField(this, "showFirstLastIcon", true);
    /**
     * Number of total records.
     * @group Props
     */
    __publicField(this, "totalRecords", 0);
    /**
     * Data count to display per page.
     * @group Props
     */
    __publicField(this, "rows", 0);
    /**
     * Array of integer/object values to display inside rows per page dropdown. A object that have 'showAll' key can be added to it to show all data. Exp; [10,20,30,{showAll:'All'}]
     * @group Props
     */
    __publicField(this, "rowsPerPageOptions");
    /**
     * Whether to display a dropdown to navigate to any page.
     * @group Props
     */
    __publicField(this, "showJumpToPageDropdown");
    /**
     * Whether to display a input to navigate to any page.
     * @group Props
     */
    __publicField(this, "showJumpToPageInput");
    /**
     * Template instance to inject into the jump to page dropdown item inside in the paginator.
     * @param {Object} context - item instance.
     * @group Props
     */
    __publicField(this, "jumpToPageItemTemplate");
    /**
     * Whether to show page links.
     * @group Props
     */
    __publicField(this, "showPageLinks", true);
    /**
     * Locale to be used in formatting.
     * @group Props
     */
    __publicField(this, "locale");
    /**
     * Template instance to inject into the rows per page dropdown item inside in the paginator.
     * @param {Object} context - item instance.
     * @group Props
     */
    __publicField(this, "dropdownItemTemplate");
    /**
     * Callback to invoke when page changes, the event object contains information about the new state.
     * @param {PaginatorState} event - Paginator state.
     * @group Emits
     */
    __publicField(this, "onPageChange", new EventEmitter());
    __publicField(this, "templates");
    __publicField(this, "dropdownIconTemplate");
    __publicField(this, "firstPageLinkIconTemplate");
    __publicField(this, "previousPageLinkIconTemplate");
    __publicField(this, "lastPageLinkIconTemplate");
    __publicField(this, "nextPageLinkIconTemplate");
    __publicField(this, "pageLinks");
    __publicField(this, "pageItems");
    __publicField(this, "rowsPerPageItems");
    __publicField(this, "paginatorState");
    __publicField(this, "_first", 0);
    __publicField(this, "_page", 0);
    this.cd = cd;
    this.config = config;
  }
  /**
   * Zero-relative number of the first row to be displayed.
   * @group Props
   */
  get first() {
    return this._first;
  }
  set first(val) {
    this._first = val;
  }
  ngOnInit() {
    this.updatePaginatorState();
  }
  getAriaLabel(labelType) {
    return this.config.translation.aria ? this.config.translation.aria[labelType] : void 0;
  }
  getPageAriaLabel(value) {
    return this.config.translation.aria ? this.config.translation.aria.pageLabel.replace(/{page}/g, "".concat(value)) : void 0;
  }
  getLocalization(digit) {
    const numerals = [...new Intl.NumberFormat(this.locale, {
      useGrouping: false
    }).format(9876543210)].reverse();
    const index = new Map(numerals.map((d, i) => [i, d]));
    if (digit > 9) {
      const numbers = String(digit).split("");
      return numbers.map((number) => index.get(Number(number))).join("");
    } else {
      return index.get(digit);
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "dropdownicon":
          this.dropdownIconTemplate = item.template;
          break;
        case "firstpagelinkicon":
          this.firstPageLinkIconTemplate = item.template;
          break;
        case "previouspagelinkicon":
          this.previousPageLinkIconTemplate = item.template;
          break;
        case "lastpagelinkicon":
          this.lastPageLinkIconTemplate = item.template;
          break;
        case "nextpagelinkicon":
          this.nextPageLinkIconTemplate = item.template;
          break;
      }
    });
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.totalRecords) {
      this.updatePageLinks();
      this.updatePaginatorState();
      this.updateFirst();
      this.updateRowsPerPageOptions();
    }
    if (simpleChange.first) {
      this._first = simpleChange.first.currentValue;
      this.updatePageLinks();
      this.updatePaginatorState();
    }
    if (simpleChange.rows) {
      this.updatePageLinks();
      this.updatePaginatorState();
    }
    if (simpleChange.rowsPerPageOptions) {
      this.updateRowsPerPageOptions();
    }
    if (simpleChange.pageLinkSize) {
      this.updatePageLinks();
    }
  }
  updateRowsPerPageOptions() {
    if (this.rowsPerPageOptions) {
      this.rowsPerPageItems = [];
      for (let opt of this.rowsPerPageOptions) {
        if (typeof opt == "object" && opt["showAll"]) {
          this.rowsPerPageItems.unshift({
            label: opt["showAll"],
            value: this.totalRecords
          });
        } else {
          this.rowsPerPageItems.push({
            label: String(this.getLocalization(opt)),
            value: opt
          });
        }
      }
    }
  }
  isFirstPage() {
    return this.getPage() === 0;
  }
  isLastPage() {
    return this.getPage() === this.getPageCount() - 1;
  }
  getPageCount() {
    return Math.ceil(this.totalRecords / this.rows);
  }
  calculatePageLinkBoundaries() {
    let numberOfPages = this.getPageCount(), visiblePages = Math.min(this.pageLinkSize, numberOfPages);
    let start = Math.max(0, Math.ceil(this.getPage() - visiblePages / 2)), end = Math.min(numberOfPages - 1, start + visiblePages - 1);
    var delta = this.pageLinkSize - (end - start + 1);
    start = Math.max(0, start - delta);
    return [start, end];
  }
  updatePageLinks() {
    this.pageLinks = [];
    let boundaries = this.calculatePageLinkBoundaries(), start = boundaries[0], end = boundaries[1];
    for (let i = start; i <= end; i++) {
      this.pageLinks.push(i + 1);
    }
    if (this.showJumpToPageDropdown) {
      this.pageItems = [];
      for (let i = 0; i < this.getPageCount(); i++) {
        this.pageItems.push({
          label: String(i + 1),
          value: i
        });
      }
    }
  }
  changePage(p) {
    var pc = this.getPageCount();
    if (p >= 0 && p < pc) {
      this._first = this.rows * p;
      var state = {
        page: p,
        first: this.first,
        rows: this.rows,
        pageCount: pc
      };
      this.updatePageLinks();
      this.onPageChange.emit(state);
      this.updatePaginatorState();
    }
  }
  updateFirst() {
    const page = this.getPage();
    if (page > 0 && this.totalRecords && this.first >= this.totalRecords) {
      Promise.resolve(null).then(() => this.changePage(page - 1));
    }
  }
  getPage() {
    return Math.floor(this.first / this.rows);
  }
  changePageToFirst(event) {
    if (!this.isFirstPage()) {
      this.changePage(0);
    }
    event.preventDefault();
  }
  changePageToPrev(event) {
    this.changePage(this.getPage() - 1);
    event.preventDefault();
  }
  changePageToNext(event) {
    this.changePage(this.getPage() + 1);
    event.preventDefault();
  }
  changePageToLast(event) {
    if (!this.isLastPage()) {
      this.changePage(this.getPageCount() - 1);
    }
    event.preventDefault();
  }
  onPageLinkClick(event, page) {
    this.changePage(page);
    event.preventDefault();
  }
  onRppChange(event) {
    this.changePage(this.getPage());
  }
  onPageDropdownChange(event) {
    this.changePage(event.value);
  }
  updatePaginatorState() {
    this.paginatorState = {
      page: this.getPage(),
      pageCount: this.getPageCount(),
      rows: this.rows,
      first: this.first,
      totalRecords: this.totalRecords
    };
  }
  empty() {
    return this.getPageCount() === 0;
  }
  currentPage() {
    return this.getPageCount() > 0 ? this.getPage() + 1 : 0;
  }
  get currentPageReport() {
    return this.currentPageReportTemplate.replace("{currentPage}", String(this.currentPage())).replace("{totalPages}", String(this.getPageCount())).replace("{first}", String(this.totalRecords > 0 ? this._first + 1 : 0)).replace("{last}", String(Math.min(this._first + this.rows, this.totalRecords))).replace("{rows}", String(this.rows)).replace("{totalRecords}", String(this.totalRecords));
  }
};
__publicField(_Paginator, "ɵfac", function Paginator_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Paginator)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig));
});
__publicField(_Paginator, "ɵcmp", ɵɵdefineComponent({
  type: _Paginator,
  selectors: [["p-paginator"]],
  contentQueries: function Paginator_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    pageLinkSize: [2, "pageLinkSize", "pageLinkSize", numberAttribute],
    style: "style",
    styleClass: "styleClass",
    alwaysShow: [2, "alwaysShow", "alwaysShow", booleanAttribute],
    dropdownAppendTo: "dropdownAppendTo",
    templateLeft: "templateLeft",
    templateRight: "templateRight",
    appendTo: "appendTo",
    dropdownScrollHeight: "dropdownScrollHeight",
    currentPageReportTemplate: "currentPageReportTemplate",
    showCurrentPageReport: [2, "showCurrentPageReport", "showCurrentPageReport", booleanAttribute],
    showFirstLastIcon: [2, "showFirstLastIcon", "showFirstLastIcon", booleanAttribute],
    totalRecords: [2, "totalRecords", "totalRecords", numberAttribute],
    rows: [2, "rows", "rows", numberAttribute],
    rowsPerPageOptions: "rowsPerPageOptions",
    showJumpToPageDropdown: [2, "showJumpToPageDropdown", "showJumpToPageDropdown", booleanAttribute],
    showJumpToPageInput: [2, "showJumpToPageInput", "showJumpToPageInput", booleanAttribute],
    jumpToPageItemTemplate: "jumpToPageItemTemplate",
    showPageLinks: [2, "showPageLinks", "showPageLinks", booleanAttribute],
    locale: "locale",
    dropdownItemTemplate: "dropdownItemTemplate",
    first: "first"
  },
  outputs: {
    onPageChange: "onPageChange"
  },
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "class", "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "ngClass"], ["class", "p-paginator-left-content", 4, "ngIf"], ["class", "p-paginator-current", 4, "ngIf"], ["type", "button", "pRipple", "", "class", "p-paginator-first p-paginator-element p-link", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-prev", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-paginator-icon", 4, "ngIf"], ["class", "p-paginator-pages", 4, "ngIf"], ["styleClass", "p-paginator-page-options", 3, "options", "ngModel", "disabled", "appendTo", "scrollHeight", "onChange", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-next", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], ["type", "button", "pRipple", "", "class", "p-paginator-last p-paginator-element p-link", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["class", "p-paginator-page-input", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], ["styleClass", "p-paginator-rpp-options", 3, "options", "ngModel", "disabled", "appendTo", "scrollHeight", "ariaLabel", "ngModelChange", "onChange", 4, "ngIf"], ["class", "p-paginator-right-content", 4, "ngIf"], [1, "p-paginator-left-content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-paginator-current"], ["type", "button", "pRipple", "", 1, "p-paginator-first", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], [3, "styleClass"], [1, "p-paginator-icon"], [4, "ngTemplateOutlet"], [1, "p-paginator-pages"], ["type", "button", "class", "p-paginator-page p-paginator-element p-link", "pRipple", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 1, "p-paginator-page", "p-paginator-element", "p-link", 3, "click", "ngClass"], ["styleClass", "p-paginator-page-options", 3, "onChange", "options", "ngModel", "disabled", "appendTo", "scrollHeight"], ["pTemplate", "selectedItem"], [4, "ngIf"], ["pTemplate", "item"], ["pTemplate", "dropdownicon"], ["type", "button", "pRipple", "", 1, "p-paginator-last", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], [1, "p-paginator-page-input", 3, "ngModelChange", "ngModel", "disabled"], ["styleClass", "p-paginator-rpp-options", 3, "ngModelChange", "onChange", "options", "ngModel", "disabled", "appendTo", "scrollHeight", "ariaLabel"], [1, "p-paginator-right-content"]],
  template: function Paginator_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, Paginator_div_0_Template, 16, 29, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.alwaysShow ? true : ctx.pageLinks && ctx.pageLinks.length > 1);
    }
  },
  dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Dropdown, PrimeTemplate, InputNumber, NgControlStatus, NgModel, Ripple, AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon],
  styles: ["@layer primeng{.p-paginator{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.p-paginator-left-content{margin-right:auto}.p-paginator-right-content{margin-left:auto}.p-paginator-page,.p-paginator-next,.p-paginator-last,.p-paginator-first,.p-paginator-prev,.p-paginator-current{cursor:pointer;display:inline-flex;align-items:center;justify-content:center;line-height:1;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-paginator-element:focus{z-index:1;position:relative}}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var Paginator = _Paginator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Paginator, [{
    type: Component,
    args: [{
      selector: "p-paginator",
      template: '\n        <div [class]="styleClass" [ngStyle]="style" [ngClass]="\'p-paginator p-component\'" *ngIf="alwaysShow ? true : pageLinks && pageLinks.length > 1" [attr.data-pc-section]="\'paginator\'" [attr.data-pc-section]="\'root\'">\n            <div class="p-paginator-left-content" *ngIf="templateLeft" [attr.data-pc-section]="\'start\'">\n                <ng-container *ngTemplateOutlet="templateLeft; context: { $implicit: paginatorState }"></ng-container>\n            </div>\n            <span class="p-paginator-current" *ngIf="showCurrentPageReport">{{ currentPageReport }}</span>\n            <button\n                *ngIf="showFirstLastIcon"\n                type="button"\n                [disabled]="isFirstPage() || empty()"\n                (click)="changePageToFirst($event)"\n                pRipple\n                class="p-paginator-first p-paginator-element p-link"\n                [ngClass]="{ \'p-disabled\': isFirstPage() || empty() }"\n                [attr.aria-label]="getAriaLabel(\'firstPageLabel\')"\n            >\n                <AngleDoubleLeftIcon *ngIf="!firstPageLinkIconTemplate" [styleClass]="\'p-paginator-icon\'" />\n                <span class="p-paginator-icon" *ngIf="firstPageLinkIconTemplate">\n                    <ng-template *ngTemplateOutlet="firstPageLinkIconTemplate"></ng-template>\n                </span>\n            </button>\n            <button\n                type="button"\n                [disabled]="isFirstPage() || empty()"\n                (click)="changePageToPrev($event)"\n                pRipple\n                class="p-paginator-prev p-paginator-element p-link"\n                [ngClass]="{ \'p-disabled\': isFirstPage() || empty() }"\n                [attr.aria-label]="getAriaLabel(\'prevPageLabel\')"\n            >\n                <AngleLeftIcon *ngIf="!previousPageLinkIconTemplate" [styleClass]="\'p-paginator-icon\'" />\n                <span class="p-paginator-icon" *ngIf="previousPageLinkIconTemplate">\n                    <ng-template *ngTemplateOutlet="previousPageLinkIconTemplate"></ng-template>\n                </span>\n            </button>\n            <span class="p-paginator-pages" *ngIf="showPageLinks">\n                <button\n                    type="button"\n                    *ngFor="let pageLink of pageLinks"\n                    class="p-paginator-page p-paginator-element p-link"\n                    [ngClass]="{ \'p-highlight\': pageLink - 1 == getPage() }"\n                    [attr.aria-label]="getPageAriaLabel(pageLink)"\n                    [attr.aria-current]="pageLink - 1 == getPage() ? \'page\' : undefined"\n                    (click)="onPageLinkClick($event, pageLink - 1)"\n                    pRipple\n                >\n                    {{ getLocalization(pageLink) }}\n                </button>\n            </span>\n            <p-dropdown\n                [options]="pageItems"\n                [ngModel]="getPage()"\n                *ngIf="showJumpToPageDropdown"\n                [disabled]="empty()"\n                [attr.aria-label]="getAriaLabel(\'jumpToPageDropdownLabel\')"\n                styleClass="p-paginator-page-options"\n                (onChange)="onPageDropdownChange($event)"\n                [appendTo]="dropdownAppendTo"\n                [scrollHeight]="dropdownScrollHeight"\n            >\n                <ng-template pTemplate="selectedItem">{{ currentPageReport }}</ng-template>\n                <ng-container *ngIf="jumpToPageItemTemplate">\n                    <ng-template let-item pTemplate="item">\n                        <ng-container *ngTemplateOutlet="jumpToPageItemTemplate; context: { $implicit: item }"> </ng-container>\n                    </ng-template>\n                </ng-container>\n                <ng-template pTemplate="dropdownicon" *ngIf="dropdownIconTemplate">\n                    <ng-container *ngTemplateOutlet="dropdownIconTemplate"></ng-container>\n                </ng-template>\n            </p-dropdown>\n            <button\n                type="button"\n                [disabled]="isLastPage() || empty()"\n                (click)="changePageToNext($event)"\n                pRipple\n                class="p-paginator-next p-paginator-element p-link"\n                [ngClass]="{ \'p-disabled\': isLastPage() || empty() }"\n                [attr.aria-label]="getAriaLabel(\'nextPageLabel\')"\n            >\n                <AngleRightIcon *ngIf="!nextPageLinkIconTemplate" [styleClass]="\'p-paginator-icon\'" />\n                <span class="p-paginator-icon" *ngIf="nextPageLinkIconTemplate">\n                    <ng-template *ngTemplateOutlet="nextPageLinkIconTemplate"></ng-template>\n                </span>\n            </button>\n            <button\n                *ngIf="showFirstLastIcon"\n                type="button"\n                [disabled]="isLastPage() || empty()"\n                (click)="changePageToLast($event)"\n                pRipple\n                class="p-paginator-last p-paginator-element p-link"\n                [ngClass]="{ \'p-disabled\': isLastPage() || empty() }"\n                [attr.aria-label]="getAriaLabel(\'lastPageLabel\')"\n            >\n                <AngleDoubleRightIcon *ngIf="!lastPageLinkIconTemplate" [styleClass]="\'p-paginator-icon\'" />\n                <span class="p-paginator-icon" *ngIf="lastPageLinkIconTemplate">\n                    <ng-template *ngTemplateOutlet="lastPageLinkIconTemplate"></ng-template>\n                </span>\n            </button>\n            <p-inputNumber *ngIf="showJumpToPageInput" [ngModel]="currentPage()" class="p-paginator-page-input" [disabled]="empty()" (ngModelChange)="changePage($event - 1)"></p-inputNumber>\n            <p-dropdown\n                [options]="rowsPerPageItems"\n                [(ngModel)]="rows"\n                *ngIf="rowsPerPageOptions"\n                styleClass="p-paginator-rpp-options"\n                [disabled]="empty()"\n                (onChange)="onRppChange($event)"\n                [appendTo]="dropdownAppendTo"\n                [scrollHeight]="dropdownScrollHeight"\n                [ariaLabel]="getAriaLabel(\'rowsPerPageLabel\')"\n            >\n                <ng-container *ngIf="dropdownItemTemplate">\n                    <ng-template let-item pTemplate="item">\n                        <ng-container *ngTemplateOutlet="dropdownItemTemplate; context: { $implicit: item }"> </ng-container>\n                    </ng-template>\n                </ng-container>\n                <ng-template pTemplate="dropdownicon" *ngIf="dropdownIconTemplate">\n                    <ng-container *ngTemplateOutlet="dropdownIconTemplate"></ng-container>\n                </ng-template>\n            </p-dropdown>\n            <div class="p-paginator-right-content" *ngIf="templateRight" [attr.data-pc-section]="\'end\'">\n                <ng-container *ngTemplateOutlet="templateRight; context: { $implicit: paginatorState }"></ng-container>\n            </div>\n        </div>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-paginator{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.p-paginator-left-content{margin-right:auto}.p-paginator-right-content{margin-left:auto}.p-paginator-page,.p-paginator-next,.p-paginator-last,.p-paginator-first,.p-paginator-prev,.p-paginator-current{cursor:pointer;display:inline-flex;align-items:center;justify-content:center;line-height:1;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-paginator-element:focus{z-index:1;position:relative}}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    pageLinkSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    alwaysShow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownAppendTo: [{
      type: Input
    }],
    templateLeft: [{
      type: Input
    }],
    templateRight: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    dropdownScrollHeight: [{
      type: Input
    }],
    currentPageReportTemplate: [{
      type: Input
    }],
    showCurrentPageReport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    totalRecords: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rows: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rowsPerPageOptions: [{
      type: Input
    }],
    showJumpToPageDropdown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showJumpToPageInput: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    jumpToPageItemTemplate: [{
      type: Input
    }],
    showPageLinks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    locale: [{
      type: Input
    }],
    dropdownItemTemplate: [{
      type: Input
    }],
    first: [{
      type: Input
    }],
    onPageChange: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var _PaginatorModule = class _PaginatorModule {
};
__publicField(_PaginatorModule, "ɵfac", function PaginatorModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaginatorModule)();
});
__publicField(_PaginatorModule, "ɵmod", ɵɵdefineNgModule({
  type: _PaginatorModule,
  declarations: [Paginator],
  imports: [CommonModule, DropdownModule, InputNumberModule, FormsModule, SharedModule, RippleModule, AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon],
  exports: [Paginator, DropdownModule, InputNumberModule, FormsModule, SharedModule]
}));
__publicField(_PaginatorModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, DropdownModule, InputNumberModule, FormsModule, SharedModule, RippleModule, AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon, DropdownModule, InputNumberModule, FormsModule, SharedModule]
}));
var PaginatorModule = _PaginatorModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, DropdownModule, InputNumberModule, FormsModule, SharedModule, RippleModule, AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon],
      exports: [Paginator, DropdownModule, InputNumberModule, FormsModule, SharedModule],
      declarations: [Paginator]
    }]
  }], null, null);
})();

export {
  Paginator,
  PaginatorModule
};
//# sourceMappingURL=chunk-IYTQALVI.js.map
