import {
  HomeIcon
} from "./chunk-MW4R55KO.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-IC7NSP6U.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-JBMGT7BE.js";
import {
  ChevronRightIcon
} from "./chunk-CDDPLBF3.js";
import "./chunk-BJLZ3T2F.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-ZROJCIWL.js";
import "./chunk-U3NLM53U.js";
import "./chunk-MWP4G2UW.js";
import "./chunk-RWZD3TDV.js";
import "./chunk-LB42WWNC.js";
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
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-breadcrumb.mjs
var _c0 = (a0) => ({
  "p-breadcrumb-home": true,
  "p-disabled": a0
});
var _c1 = () => ({
  exact: false
});
var _c2 = (a0) => ({
  "p-disabled": a0
});
var _c3 = (a0) => ({
  $implicit: a0
});
function Breadcrumb_li_2_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r1.home.icon)("ngStyle", ctx_r1.home.iprivateyle);
  }
}
function Breadcrumb_li_2_a_1_HomeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "HomeIcon", 17);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-menuitem-icon");
  }
}
function Breadcrumb_li_2_a_1_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.home.label);
  }
}
function Breadcrumb_li_2_a_1_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("innerHTML", ctx_r1.home.label, ɵɵsanitizeHtml);
  }
}
function Breadcrumb_li_2_a_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_li_2_a_1_ng_container_3_span_1_Template, 2, 1, "span", 18)(2, Breadcrumb_li_2_a_1_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const htmlHomeLabel_r3 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.home.escape !== false)("ngIfElse", htmlHomeLabel_r3);
  }
}
function Breadcrumb_li_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 12);
    ɵɵlistener("click", function Breadcrumb_li_2_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, ctx_r1.home));
    });
    ɵɵtemplate(1, Breadcrumb_li_2_a_1_span_1_Template, 1, 2, "span", 13)(2, Breadcrumb_li_2_a_1_HomeIcon_2_Template, 1, 1, "HomeIcon", 14)(3, Breadcrumb_li_2_a_1_ng_container_3_Template, 4, 2, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("href", ctx_r1.home.url ? ctx_r1.home.url : null, ɵɵsanitizeUrl)("target", ctx_r1.home.target);
    ɵɵattribute("aria-label", ctx_r1.homeAriaLabel)("title", ctx_r1.home.title)("tabindex", ctx_r1.home.disabled ? "-1" : ctx_r1.home.tabindex || "0")("ariaCurrentWhenActive", ctx_r1.isCurrentUrl(ctx_r1.home));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.home.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.home.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.home.label);
  }
}
function Breadcrumb_li_2_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r1.home.icon)("ngStyle", ctx_r1.home.iconStyle);
  }
}
function Breadcrumb_li_2_a_2_HomeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "HomeIcon", 17);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-menuitem-icon");
  }
}
function Breadcrumb_li_2_a_2_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.home.label);
  }
}
function Breadcrumb_li_2_a_2_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("innerHTML", ctx_r1.home.label, ɵɵsanitizeHtml);
  }
}
function Breadcrumb_li_2_a_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_li_2_a_2_ng_container_3_span_1_Template, 2, 1, "span", 18)(2, Breadcrumb_li_2_a_2_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const htmlHomeRouteLabel_r5 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.home.escape !== false)("ngIfElse", htmlHomeRouteLabel_r5);
  }
}
function Breadcrumb_li_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 21);
    ɵɵlistener("click", function Breadcrumb_li_2_a_2_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClick($event, ctx_r1.home));
    });
    ɵɵtemplate(1, Breadcrumb_li_2_a_2_span_1_Template, 1, 2, "span", 13)(2, Breadcrumb_li_2_a_2_HomeIcon_2_Template, 1, 1, "HomeIcon", 14)(3, Breadcrumb_li_2_a_2_ng_container_3_Template, 4, 2, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("routerLink", ctx_r1.home.routerLink)("queryParams", ctx_r1.home.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r1.home.routerLinkActiveOptions || ɵɵpureFunction0(18, _c1))("target", ctx_r1.home.target)("fragment", ctx_r1.home.fragment)("queryParamsHandling", ctx_r1.home.queryParamsHandling)("preserveFragment", ctx_r1.home.preserveFragment)("skipLocationChange", ctx_r1.home.skipLocationChange)("replaceUrl", ctx_r1.home.replaceUrl)("state", ctx_r1.home.state);
    ɵɵattribute("aria-label", ctx_r1.homeAriaLabel)("title", ctx_r1.home.title)("tabindex", ctx_r1.home.disabled ? "-1" : ctx_r1.home.tabindex || "0")("ariaCurrentWhenActive", ctx_r1.isCurrentUrl(ctx_r1.home));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.home.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.home.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.home.label);
  }
}
function Breadcrumb_li_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 9);
    ɵɵtemplate(1, Breadcrumb_li_2_a_1_Template, 4, 9, "a", 10)(2, Breadcrumb_li_2_a_2_Template, 4, 19, "a", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.home.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction1(10, _c0, ctx_r1.home.disabled))("ngStyle", ctx_r1.home.style)("tooltipOptions", ctx_r1.home.tooltipOptions);
    ɵɵattribute("id", ctx_r1.home.id)("data-pc-section", "home")("aria-disabled", ctx_r1.home.disabled);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.home.routerLink);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.home.routerLink);
  }
}
function Breadcrumb_li_3_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon");
  }
}
function Breadcrumb_li_3_2_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_li_3_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_li_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 22);
    ɵɵtemplate(1, Breadcrumb_li_3_ChevronRightIcon_1_Template, 1, 0, "ChevronRightIcon", 15)(2, Breadcrumb_li_3_2_Template, 1, 0, null, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "separator");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.separatorTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.separatorTemplate);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", item_r7.icon)("ngStyle", item_r7.iconStyle);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(4).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(item_r7.label);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(4).$implicit;
    ɵɵproperty("innerHTML", item_r7.label, ɵɵsanitizeHtml);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_span_1_Template, 2, 1, "span", 18)(2, Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const htmlLabel_r8 = ɵɵreference(3);
    const item_r7 = ɵɵnextContext(3).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r7.escape !== false)("ngIfElse", htmlLabel_r8);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_1_ng_container_1_span_1_Template, 1, 2, "span", 13)(2, Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_Template, 4, 2, "ng-container", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r7.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r7.label);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_2_1_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_ng_template_4_a_1_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_ng_template_4_a_1_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_1_ng_container_2_1_Template, 1, 0, null, 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, item_r7));
  }
}
function Breadcrumb_ng_template_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 26);
    ɵɵlistener("click", function Breadcrumb_ng_template_4_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const item_r7 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClick($event, item_r7));
    });
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_1_ng_container_1_Template, 3, 2, "ng-container", 15)(2, Breadcrumb_ng_template_4_a_1_ng_container_2_Template, 2, 4, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("target", item_r7.target);
    ɵɵattribute("href", item_r7.url ? item_r7.url : null, ɵɵsanitizeUrl)("title", item_r7.title)("tabindex", item_r7.disabled ? "-1" : item_r7.tabindex || "0")("ariaCurrentWhenActive", ctx_r1.isCurrentUrl(item_r7));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.itemTemplate);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", item_r7.icon)("ngStyle", item_r7.iconStyle);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(4).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(item_r7.label);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(4).$implicit;
    ɵɵproperty("innerHTML", item_r7.label, ɵɵsanitizeHtml);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_span_1_Template, 2, 1, "span", 18)(2, Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r10 = ɵɵreference(3);
    const item_r7 = ɵɵnextContext(3).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r7.escape !== false)("ngIfElse", htmlRouteLabel_r10);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_2_ng_container_1_span_1_Template, 1, 2, "span", 13)(2, Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_Template, 4, 2, "ng-container", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r7.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r7.label);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_2_1_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_ng_template_4_a_2_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_ng_template_4_a_2_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_2_ng_container_2_1_Template, 1, 0, null, 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, item_r7));
  }
}
function Breadcrumb_ng_template_4_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 21);
    ɵɵlistener("click", function Breadcrumb_ng_template_4_a_2_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r9);
      const item_r7 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClick($event, item_r7));
    });
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_2_ng_container_1_Template, 3, 2, "ng-container", 15)(2, Breadcrumb_ng_template_4_a_2_ng_container_2_Template, 2, 4, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("routerLink", item_r7.routerLink)("queryParams", item_r7.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r7.routerLinkActiveOptions || ɵɵpureFunction0(16, _c1))("target", item_r7.target)("fragment", item_r7.fragment)("queryParamsHandling", item_r7.queryParamsHandling)("preserveFragment", item_r7.preserveFragment)("skipLocationChange", item_r7.skipLocationChange)("replaceUrl", item_r7.replaceUrl)("state", item_r7.state);
    ɵɵattribute("title", item_r7.title)("tabindex", item_r7.disabled ? "-1" : item_r7.tabindex || "0")("ariaCurrentWhenActive", ctx_r1.isCurrentUrl(item_r7));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.itemTemplate);
  }
}
function Breadcrumb_ng_template_4_li_3_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon");
  }
}
function Breadcrumb_ng_template_4_li_3_2_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_ng_template_4_li_3_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Breadcrumb_ng_template_4_li_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_ng_template_4_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 22);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_li_3_ChevronRightIcon_1_Template, 1, 0, "ChevronRightIcon", 15)(2, Breadcrumb_ng_template_4_li_3_2_Template, 1, 0, null, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "separator");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.separatorTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.separatorTemplate);
  }
}
function Breadcrumb_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 24);
    ɵɵtemplate(1, Breadcrumb_ng_template_4_a_1_Template, 3, 7, "a", 25)(2, Breadcrumb_ng_template_4_a_2_Template, 3, 17, "a", 11);
    ɵɵelementEnd();
    ɵɵtemplate(3, Breadcrumb_ng_template_4_li_3_Template, 3, 3, "li", 7);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const end_r11 = ctx.last;
    ɵɵclassMap(item_r7.styleClass);
    ɵɵproperty("ngStyle", item_r7.style)("ngClass", ɵɵpureFunction1(11, _c2, item_r7.disabled))("tooltipOptions", item_r7.tooltipOptions);
    ɵɵattribute("id", item_r7.id)("aria-disabled", item_r7.disabled)("data-pc-section", "menuitem");
    ɵɵadvance();
    ɵɵproperty("ngIf", !item_r7.routerLink);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r7.routerLink);
    ɵɵadvance();
    ɵɵproperty("ngIf", !end_r11);
  }
}
var _Breadcrumb = class _Breadcrumb {
  constructor(router) {
    __publicField(this, "router");
    /**
     * An array of menuitems.
     * @group Props
     */
    __publicField(this, "model");
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
     * MenuItem configuration for the home icon.
     * @group Props
     */
    __publicField(this, "home");
    /**
     * Defines a string that labels the home icon for accessibility.
     * @group Props
     */
    __publicField(this, "homeAriaLabel");
    /**
     * Fired when an item is selected.
     * @param {BreadcrumbItemClickEvent} event - custom click event.
     * @group Emits
     */
    __publicField(this, "onItemClick", new EventEmitter());
    __publicField(this, "templates");
    __publicField(this, "separatorTemplate");
    __publicField(this, "itemTemplate");
    this.router = router;
  }
  onClick(event, item) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
    this.onItemClick.emit({
      originalEvent: event,
      item
    });
  }
  onHomeClick(event) {
    if (this.home) {
      this.onClick(event, this.home);
    }
  }
  ngAfterContentInit() {
    var _a;
    (_a = this.templates) == null ? void 0 : _a.forEach((item) => {
      switch (item.getType()) {
        case "separator":
          this.separatorTemplate = item.template;
          break;
        case "item":
          this.itemTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  isCurrentUrl(item) {
    const {
      routerLink
    } = item;
    const lastPath = this.router ? this.router.url : "";
    return routerLink === lastPath ? "page" : void 0;
  }
};
__publicField(_Breadcrumb, "ɵfac", function Breadcrumb_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Breadcrumb)(ɵɵdirectiveInject(Router));
});
__publicField(_Breadcrumb, "ɵcmp", ɵɵdefineComponent({
  type: _Breadcrumb,
  selectors: [["p-breadcrumb"]],
  contentQueries: function Breadcrumb_ContentQueries(rf, ctx, dirIndex) {
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
    model: "model",
    style: "style",
    styleClass: "styleClass",
    home: "home",
    homeAriaLabel: "homeAriaLabel"
  },
  outputs: {
    onItemClick: "onItemClick"
  },
  decls: 5,
  vars: 10,
  consts: [["htmlHomeLabel", ""], ["htmlHomeRouteLabel", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], [3, "ngStyle", "ngClass"], [1, "p-breadcrumb-list"], ["pTooltip", "", 3, "class", "ngClass", "ngStyle", "tooltipOptions", 4, "ngIf"], ["class", "p-menuitem-separator", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["pTooltip", "", 3, "ngClass", "ngStyle", "tooltipOptions"], ["class", "p-menuitem-link", 3, "href", "target", "click", 4, "ngIf"], ["class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], [1, "p-menuitem-link", 3, "click", "href", "target"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [3, "styleClass"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-link", 3, "click", "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [1, "p-menuitem-separator"], [4, "ngTemplateOutlet"], ["pTooltip", "", 3, "ngStyle", "ngClass", "tooltipOptions"], ["class", "p-menuitem-link", 3, "target", "click", 4, "ngIf"], [1, "p-menuitem-link", 3, "click", "target"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function Breadcrumb_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "nav", 4)(1, "ol", 5);
      ɵɵtemplate(2, Breadcrumb_li_2_Template, 3, 12, "li", 6)(3, Breadcrumb_li_3_Template, 3, 3, "li", 7)(4, Breadcrumb_ng_template_4_Template, 4, 13, "ng-template", 8);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngStyle", ctx.style)("ngClass", "p-breadcrumb p-component");
      ɵɵattribute("data-pc-name", "breadcrumb")("data-pc-section", "root");
      ɵɵadvance();
      ɵɵattribute("data-pc-section", "menu");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.home);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.model && ctx.home);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.model);
    }
  },
  dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Tooltip, ChevronRightIcon, HomeIcon],
  styles: ["@layer primeng{.p-breadcrumb{overflow-x:auto}.p-breadcrumb .p-breadcrumb-list{margin:0;padding:0;list-style-type:none;display:flex;align-items:center;flex-wrap:nowrap}.p-breadcrumb .p-menuitem-text{line-height:1}.p-breadcrumb .p-menuitem-link{text-decoration:none;display:flex;align-items:center}.p-breadcrumb .p-menuitem-separator{display:flex;align-items:center}.p-breadcrumb::-webkit-scrollbar{display:none}}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var Breadcrumb = _Breadcrumb;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Breadcrumb, [{
    type: Component,
    args: [{
      selector: "p-breadcrumb",
      template: '\n        <nav [class]="styleClass" [ngStyle]="style" [ngClass]="\'p-breadcrumb p-component\'" [attr.data-pc-name]="\'breadcrumb\'" [attr.data-pc-section]="\'root\'">\n            <ol [attr.data-pc-section]="\'menu\'" class="p-breadcrumb-list">\n                <li\n                    [class]="home.styleClass"\n                    [attr.id]="home.id"\n                    [ngClass]="{ \'p-breadcrumb-home\': true, \'p-disabled\': home.disabled }"\n                    [ngStyle]="home.style"\n                    *ngIf="home"\n                    pTooltip\n                    [tooltipOptions]="home.tooltipOptions"\n                    [attr.data-pc-section]="\'home\'"\n                    [attr.aria-disabled]="home.disabled"\n                >\n                    <a\n                        [href]="home.url ? home.url : null"\n                        *ngIf="!home.routerLink"\n                        [attr.aria-label]="homeAriaLabel"\n                        class="p-menuitem-link"\n                        (click)="onClick($event, home)"\n                        [target]="home.target"\n                        [attr.title]="home.title"\n                        [attr.tabindex]="home.disabled ? \'-1\' : home.tabindex || \'0\'"\n                        [attr.ariaCurrentWhenActive]="isCurrentUrl(home)"\n                    >\n                        <span *ngIf="home.icon" class="p-menuitem-icon" [ngClass]="home.icon" [ngStyle]="home.iprivateyle"></span>\n                        <HomeIcon *ngIf="!home.icon" [styleClass]="\'p-menuitem-icon\'" />\n                        <ng-container *ngIf="home.label">\n                            <span *ngIf="home.escape !== false; else htmlHomeLabel" class="p-menuitem-text">{{ home.label }}</span>\n                            <ng-template #htmlHomeLabel><span class="p-menuitem-text" [innerHTML]="home.label"></span></ng-template>\n                        </ng-container>\n                    </a>\n                    <a\n                        *ngIf="home.routerLink"\n                        [routerLink]="home.routerLink"\n                        [attr.aria-label]="homeAriaLabel"\n                        [queryParams]="home.queryParams"\n                        [routerLinkActive]="\'p-menuitem-link-active\'"\n                        [routerLinkActiveOptions]="home.routerLinkActiveOptions || { exact: false }"\n                        class="p-menuitem-link"\n                        (click)="onClick($event, home)"\n                        [target]="home.target"\n                        [attr.title]="home.title"\n                        [attr.tabindex]="home.disabled ? \'-1\' : home.tabindex || \'0\'"\n                        [attr.ariaCurrentWhenActive]="isCurrentUrl(home)"\n                        [fragment]="home.fragment"\n                        [queryParamsHandling]="home.queryParamsHandling"\n                        [preserveFragment]="home.preserveFragment"\n                        [skipLocationChange]="home.skipLocationChange"\n                        [replaceUrl]="home.replaceUrl"\n                        [state]="home.state"\n                    >\n                        <span *ngIf="home.icon" class="p-menuitem-icon" [ngClass]="home.icon" [ngStyle]="home.iconStyle"></span>\n                        <HomeIcon *ngIf="!home.icon" [styleClass]="\'p-menuitem-icon\'" />\n                        <ng-container *ngIf="home.label">\n                            <span *ngIf="home.escape !== false; else htmlHomeRouteLabel" class="p-menuitem-text">{{ home.label }}</span>\n                            <ng-template #htmlHomeRouteLabel><span class="p-menuitem-text" [innerHTML]="home.label"></span></ng-template>\n                        </ng-container>\n                    </a>\n                </li>\n                <li *ngIf="model && home" class="p-menuitem-separator" [attr.data-pc-section]="\'separator\'">\n                    <ChevronRightIcon *ngIf="!separatorTemplate" />\n                    <ng-template *ngTemplateOutlet="separatorTemplate"></ng-template>\n                </li>\n                <ng-template ngFor let-item let-end="last" [ngForOf]="model">\n                    <li\n                        [class]="item.styleClass"\n                        [attr.id]="item.id"\n                        [attr.aria-disabled]="item.disabled"\n                        [ngStyle]="item.style"\n                        [ngClass]="{ \'p-disabled\': item.disabled }"\n                        pTooltip\n                        [tooltipOptions]="item.tooltipOptions"\n                        [attr.data-pc-section]="\'menuitem\'"\n                    >\n                        <a\n                            *ngIf="!item.routerLink"\n                            [attr.href]="item.url ? item.url : null"\n                            class="p-menuitem-link"\n                            (click)="onClick($event, item)"\n                            [target]="item.target"\n                            [attr.title]="item.title"\n                            [attr.tabindex]="item.disabled ? \'-1\' : item.tabindex || \'0\'"\n                            [attr.ariaCurrentWhenActive]="isCurrentUrl(item)"\n                        >\n                            <ng-container *ngIf="!itemTemplate">\n                                <span *ngIf="item.icon" class="p-menuitem-icon" [ngClass]="item.icon" [ngStyle]="item.iconStyle"></span>\n                                <ng-container *ngIf="item.label">\n                                    <span *ngIf="item.escape !== false; else htmlLabel" class="p-menuitem-text">{{ item.label }}</span>\n                                    <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>\n                                </ng-container>\n                            </ng-container>\n                            <ng-container *ngIf="itemTemplate">\n                                <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-template>\n                            </ng-container>\n                        </a>\n                        <a\n                            *ngIf="item.routerLink"\n                            [routerLink]="item.routerLink"\n                            [queryParams]="item.queryParams"\n                            [routerLinkActive]="\'p-menuitem-link-active\'"\n                            [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"\n                            class="p-menuitem-link"\n                            (click)="onClick($event, item)"\n                            [target]="item.target"\n                            [attr.title]="item.title"\n                            [attr.tabindex]="item.disabled ? \'-1\' : item.tabindex || \'0\'"\n                            [fragment]="item.fragment"\n                            [queryParamsHandling]="item.queryParamsHandling"\n                            [preserveFragment]="item.preserveFragment"\n                            [skipLocationChange]="item.skipLocationChange"\n                            [replaceUrl]="item.replaceUrl"\n                            [state]="item.state"\n                            [attr.ariaCurrentWhenActive]="isCurrentUrl(item)"\n                        >\n                            <ng-container *ngIf="!itemTemplate">\n                                <span *ngIf="item.icon" class="p-menuitem-icon" [ngClass]="item.icon" [ngStyle]="item.iconStyle"></span>\n                                <ng-container *ngIf="item.label">\n                                    <span *ngIf="item.escape !== false; else htmlRouteLabel" class="p-menuitem-text">{{ item.label }}</span>\n                                    <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>\n                                </ng-container>\n                            </ng-container>\n                            <ng-container *ngIf="itemTemplate">\n                                <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-template>\n                            </ng-container>\n                        </a>\n                    </li>\n                    <li *ngIf="!end" class="p-menuitem-separator" [attr.data-pc-section]="\'separator\'">\n                        <ChevronRightIcon *ngIf="!separatorTemplate" />\n                        <ng-template *ngTemplateOutlet="separatorTemplate"></ng-template>\n                    </li>\n                </ng-template>\n            </ol>\n        </nav>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-breadcrumb{overflow-x:auto}.p-breadcrumb .p-breadcrumb-list{margin:0;padding:0;list-style-type:none;display:flex;align-items:center;flex-wrap:nowrap}.p-breadcrumb .p-menuitem-text{line-height:1}.p-breadcrumb .p-menuitem-link{text-decoration:none;display:flex;align-items:center}.p-breadcrumb .p-menuitem-separator{display:flex;align-items:center}.p-breadcrumb::-webkit-scrollbar{display:none}}\n"]
    }]
  }], () => [{
    type: Router
  }], {
    model: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    home: [{
      type: Input
    }],
    homeAriaLabel: [{
      type: Input
    }],
    onItemClick: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var _BreadcrumbModule = class _BreadcrumbModule {
};
__publicField(_BreadcrumbModule, "ɵfac", function BreadcrumbModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BreadcrumbModule)();
});
__publicField(_BreadcrumbModule, "ɵmod", ɵɵdefineNgModule({
  type: _BreadcrumbModule,
  declarations: [Breadcrumb],
  imports: [CommonModule, RouterModule, TooltipModule, ChevronRightIcon, HomeIcon, SharedModule],
  exports: [Breadcrumb, RouterModule, TooltipModule, SharedModule]
}));
__publicField(_BreadcrumbModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, RouterModule, TooltipModule, ChevronRightIcon, HomeIcon, SharedModule, RouterModule, TooltipModule, SharedModule]
}));
var BreadcrumbModule = _BreadcrumbModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, TooltipModule, ChevronRightIcon, HomeIcon, SharedModule],
      exports: [Breadcrumb, RouterModule, TooltipModule, SharedModule],
      declarations: [Breadcrumb]
    }]
  }], null, null);
})();
export {
  Breadcrumb,
  BreadcrumbModule
};
//# sourceMappingURL=primeng_breadcrumb.js.map
