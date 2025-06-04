import {
  AngleDownIcon
} from "./chunk-GE47GKJX.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-IC7NSP6U.js";
import {
  AngleRightIcon
} from "./chunk-BGJ2FQDY.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-JBMGT7BE.js";
import {
  Ripple,
  RippleModule
} from "./chunk-MUJBADSC.js";
import "./chunk-BJLZ3T2F.js";
import {
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule
} from "./chunk-ZROJCIWL.js";
import {
  ObjectUtils,
  UniqueComponentId
} from "./chunk-U3NLM53U.js";
import "./chunk-MWP4G2UW.js";
import "./chunk-RWZD3TDV.js";
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
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  effect,
  forwardRef,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵInputTransformsFeature,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField,
  __spreadProps,
  __spreadValues
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-megamenu.mjs
var _c0 = ["menubar"];
var _c1 = (a0, a1) => ({
  "p-megamenu-root-list": a0,
  "p-submenu-list p-megamenu-submenu": a1
});
var _c2 = (a0) => ({
  "p-menuitem-link": true,
  "p-disabled": a0
});
var _c3 = () => ({
  exact: false
});
var _c4 = (a0) => ({
  $implicit: a0
});
function MegaMenuSub_ul_0_li_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r1.getSubmenuHeaderClass(ctx_r1.submenu))("ngStyle", ctx_r1.getItemProp(ctx_r1.submenu, "style"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getItemLabel(ctx_r1.submenu));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 11);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ctx_r1.getItemProp(processedItem_r3, "style"))("ngClass", ctx_r1.getSeparatorItemClass(processedItem_r3));
    ɵɵattribute("id", ctx_r1.getItemId(processedItem_r3))("data-pc-section", "separator");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 22);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r1.getItemProp(processedItem_r3, "icon"))("ngStyle", ctx_r1.getItemProp(processedItem_r3, "iconStyle"));
    ɵɵattribute("data-pc-section", "icon")("tabindex", -1);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 23);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getItemLabel(processedItem_r3), " ");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 24);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r1.getItemLabel(processedItem_r3), ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "label");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r1.getItemProp(processedItem_r3, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getItemProp(processedItem_r3, "badge"));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDownIcon", 28);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 28);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_AngleDownIcon_1_Template, 1, 2, "AngleDownIcon", 27)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_AngleRightIcon_2_Template, 1, 2, "AngleRightIcon", 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(7);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.orientation === "horizontal");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.orientation === "vertical");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 29);
  }
  if (rf & 2) {
    ɵɵproperty("data-pc-section", "submenuicon");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 14)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_2_Template, 1, 1, null, 26);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.megaMenu.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.megaMenu.submenuIconTemplate);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 18);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_span_1_Template, 1, 4, "span", 19)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_span_2_Template, 2, 2, "span", 20)(3, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_template_3_Template, 1, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_span_5_Template, 2, 2, "span", 21)(6, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_Template, 3, 2, "ng-container", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r5 = ɵɵreference(4);
    const processedItem_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("target", ctx_r1.getItemProp(processedItem_r3, "target"))("ngClass", ɵɵpureFunction1(11, _c2, ctx_r1.getItemProp(processedItem_r3, "disabled")));
    ɵɵattribute("href", ctx_r1.getItemProp(processedItem_r3, "url"), ɵɵsanitizeUrl)("data-automationid", ctx_r1.getItemProp(processedItem_r3, "automationId"))("data-pc-section", "action")("tabindex", -1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r3, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r3, "escape"))("ngIfElse", htmlLabel_r5);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r3, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isItemGroup(processedItem_r3));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 22);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r1.getItemProp(processedItem_r3, "icon"))("ngStyle", ctx_r1.getItemProp(processedItem_r3, "iconStyle"));
    ɵɵattribute("data-pc-section", "icon")("tabindex", -1);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 23);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getItemLabel(processedItem_r3));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 24);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r1.getItemLabel(processedItem_r3), ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "label");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r1.getItemProp(processedItem_r3, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getItemProp(processedItem_r3, "badge"));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDownIcon", 28);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 28);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleDownIcon_1_Template, 1, 2, "AngleDownIcon", 27)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleRightIcon_2_Template, 1, 2, "AngleRightIcon", 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(7);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.orientation === "horizontal");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.orientation === "vertical");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 29);
  }
  if (rf & 2) {
    ɵɵproperty("data-pc-section", "submenuicon");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 14)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_2_Template, 1, 1, null, 26);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.megaMenu.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.megaMenu.submenuIconTemplate);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 30);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_span_1_Template, 1, 4, "span", 19)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_span_2_Template, 2, 1, "span", 20)(3, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_template_3_Template, 1, 2, "ng-template", null, 3, ɵɵtemplateRefExtractor)(5, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_span_5_Template, 2, 2, "span", 21)(6, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_Template, 3, 2, "ng-container", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r6 = ɵɵreference(4);
    const processedItem_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("routerLink", ctx_r1.getItemProp(processedItem_r3, "routerLink"))("queryParams", ctx_r1.getItemProp(processedItem_r3, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r1.getItemProp(processedItem_r3, "routerLinkActiveOptions") || ɵɵpureFunction0(20, _c3))("target", ctx_r1.getItemProp(processedItem_r3, "target"))("ngClass", ɵɵpureFunction1(21, _c2, ctx_r1.getItemProp(processedItem_r3, "disabled")))("fragment", ctx_r1.getItemProp(processedItem_r3, "fragment"))("queryParamsHandling", ctx_r1.getItemProp(processedItem_r3, "queryParamsHandling"))("preserveFragment", ctx_r1.getItemProp(processedItem_r3, "preserveFragment"))("skipLocationChange", ctx_r1.getItemProp(processedItem_r3, "skipLocationChange"))("replaceUrl", ctx_r1.getItemProp(processedItem_r3, "replaceUrl"))("state", ctx_r1.getItemProp(processedItem_r3, "state"));
    ɵɵattribute("data-automationid", ctx_r1.getItemProp(processedItem_r3, "automationId"))("tabindex", -1)("data-pc-section", "action");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r3, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r3, "escape"))("ngIfElse", htmlRouteLabel_r6);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r3, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isItemGroup(processedItem_r3));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_Template, 7, 13, "a", 16)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_Template, 7, 23, "a", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.getItemProp(processedItem_r3, "routerLink"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r3, "routerLink"));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_1_ng_template_0_Template(rf, ctx) {
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_1_Template, 1, 0, null, 31);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c4, processedItem_r3.item));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_p_megaMenuSub_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-megaMenuSub", 37);
    ɵɵlistener("itemClick", function MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_p_megaMenuSub_1_Template_p_megaMenuSub_itemClick_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r1.itemClick.emit($event));
    })("itemMouseEnter", function MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_p_megaMenuSub_1_Template_p_megaMenuSub_itemMouseEnter_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r1.onItemMouseEnter($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const submenu_r8 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵproperty("id", ctx_r1.getSubListId(submenu_r8))("submenu", submenu_r8)("items", submenu_r8.items)("itemTemplate", ctx_r1.itemTemplate)("menuId", ctx_r1.menuId)("focusedItemId", ctx_r1.focusedItemId)("level", ctx_r1.level + 1)("root", false);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 35);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_p_megaMenuSub_1_Template, 1, 8, "p-megaMenuSub", 36);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const col_r9 = ctx.$implicit;
    const processedItem_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r1.getColumnClass(processedItem_r3));
    ɵɵadvance();
    ɵɵproperty("ngForOf", col_r9);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 32)(1, "div", 33);
    ɵɵtemplate(2, MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_Template, 2, 2, "div", 34);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(2).$implicit;
    ɵɵattribute("data-pc-section", "panel");
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "grid");
    ɵɵadvance();
    ɵɵproperty("ngForOf", processedItem_r3.items);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 12, 1)(2, "div", 13);
    ɵɵlistener("click", function MegaMenuSub_ul_0_ng_template_3_li_1_Template_div_click_2_listener($event) {
      ɵɵrestoreView(_r4);
      const processedItem_r3 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onItemClick($event, processedItem_r3));
    })("mouseenter", function MegaMenuSub_ul_0_ng_template_3_li_1_Template_div_mouseenter_2_listener($event) {
      ɵɵrestoreView(_r4);
      const processedItem_r3 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onItemMouseEnter({
        $event,
        processedItem: processedItem_r3
      }));
    });
    ɵɵtemplate(3, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_Template, 3, 2, "ng-container", 14)(4, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_Template, 2, 4, "ng-container", 14);
    ɵɵelementEnd();
    ɵɵtemplate(5, MegaMenuSub_ul_0_ng_template_3_li_1_div_5_Template, 3, 3, "div", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    const processedItem_r3 = ctx_r9.$implicit;
    const index_r11 = ctx_r9.index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.getItemProp(processedItem_r3, "styleClass"));
    ɵɵproperty("ngStyle", ctx_r1.getItemProp(processedItem_r3, "style"))("ngClass", ctx_r1.getItemClass(processedItem_r3))("tooltipOptions", ctx_r1.getItemProp(processedItem_r3, "tooltipOptions"));
    ɵɵattribute("id", ctx_r1.getItemId(processedItem_r3))("data-pc-section", "menuitem")("data-p-highlight", ctx_r1.isItemActive(processedItem_r3))("data-p-focused", ctx_r1.isItemFocused(processedItem_r3))("data-p-disabled", ctx_r1.isItemDisabled(processedItem_r3))("aria-label", ctx_r1.getItemLabel(processedItem_r3))("aria-disabled", ctx_r1.isItemDisabled(processedItem_r3) || void 0)("aria-haspopup", ctx_r1.isItemGroup(processedItem_r3) && !ctx_r1.getItemProp(processedItem_r3, "to") ? "menu" : void 0)("aria-expanded", ctx_r1.isItemGroup(processedItem_r3) ? ctx_r1.isItemActive(processedItem_r3) : void 0)("aria-level", ctx_r1.level + 1)("aria-setsize", ctx_r1.getAriaSetSize())("aria-posinset", ctx_r1.getAriaPosInset(index_r11));
    ɵɵadvance(2);
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isItemVisible(processedItem_r3) && ctx_r1.isItemGroup(processedItem_r3));
  }
}
function MegaMenuSub_ul_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ul_0_ng_template_3_li_0_Template, 1, 4, "li", 9)(1, MegaMenuSub_ul_0_ng_template_3_li_1_Template, 6, 21, "li", 10);
  }
  if (rf & 2) {
    const processedItem_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r1.isItemVisible(processedItem_r3) && ctx_r1.getItemProp(processedItem_r3, "separator"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isItemVisible(processedItem_r3) && !ctx_r1.getItemProp(processedItem_r3, "separator"));
  }
}
function MegaMenuSub_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 5, 0);
    ɵɵlistener("keydown", function MegaMenuSub_ul_0_Template_ul_keydown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.menuKeydown.emit($event));
    })("focus", function MegaMenuSub_ul_0_Template_ul_focus_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.menuFocus.emit($event));
    })("blur", function MegaMenuSub_ul_0_Template_ul_blur_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.menuBlur.emit($event));
    });
    ɵɵtemplate(2, MegaMenuSub_ul_0_li_2_Template, 2, 3, "li", 6)(3, MegaMenuSub_ul_0_ng_template_3_Template, 2, 2, "ng-template", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(9, _c1, ctx_r1.root, !ctx_r1.root))("tabindex", ctx_r1.tabindex);
    ɵɵattribute("role", ctx_r1.root ? "menubar" : "menu")("id", ctx_r1.id)("aria-orientation", ctx_r1.orientation)("aria-activedescendant", ctx_r1.focusedItemId)("data-pc-section", ctx_r1.root ? "root" : "submenu");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.submenu);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.items);
  }
}
var _c5 = ["menubutton"];
var _c6 = ["rootmenu"];
var _c7 = ["*"];
var _c8 = (a0, a1) => ({
  "p-megamenu p-component": true,
  "p-megamenu-horizontal": a0,
  "p-megamenu-vertical": a1
});
function MegaMenu_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MegaMenu_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, MegaMenu_div_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.startTemplate);
  }
}
function MegaMenu_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MegaMenu_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, MegaMenu_div_4_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.endTemplate);
  }
}
function MegaMenu_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
}
var _MegaMenuSub = class _MegaMenuSub {
  constructor(el, megaMenu) {
    __publicField(this, "el");
    __publicField(this, "megaMenu");
    __publicField(this, "id");
    __publicField(this, "items");
    __publicField(this, "itemTemplate");
    __publicField(this, "menuId");
    __publicField(this, "ariaLabel");
    __publicField(this, "ariaLabelledBy");
    __publicField(this, "level", 0);
    __publicField(this, "focusedItemId");
    __publicField(this, "disabled", false);
    __publicField(this, "orientation");
    __publicField(this, "activeItem");
    __publicField(this, "submenu");
    __publicField(this, "tabindex", 0);
    __publicField(this, "root", false);
    __publicField(this, "itemClick", new EventEmitter());
    __publicField(this, "itemMouseEnter", new EventEmitter());
    __publicField(this, "menuFocus", new EventEmitter());
    __publicField(this, "menuBlur", new EventEmitter());
    __publicField(this, "menuKeydown", new EventEmitter());
    __publicField(this, "menubarViewChild");
    this.el = el;
    this.megaMenu = megaMenu;
  }
  onItemClick(event, processedItem) {
    this.getItemProp(processedItem, "command", {
      originalEvent: event,
      item: processedItem.item
    });
    this.itemClick.emit({
      originalEvent: event,
      processedItem,
      isFocus: true
    });
  }
  getItemProp(processedItem, name, params = null) {
    return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : void 0;
  }
  getItemId(processedItem) {
    var _a;
    return processedItem.item && ((_a = processedItem.item) == null ? void 0 : _a.id) ? processedItem.item.id : "".concat(this.menuId, "_").concat(processedItem.key);
  }
  getSubListId(processedItem) {
    return "".concat(this.getItemId(processedItem), "_list");
  }
  getItemClass(processedItem) {
    return __spreadProps(__spreadValues({}, this.getItemProp(processedItem, "class")), {
      "p-menuitem": true,
      "p-menuitem-active p-highlight": this.isItemActive(processedItem),
      "p-focus": this.isItemFocused(processedItem),
      "p-disabled": this.isItemDisabled(processedItem)
    });
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, "label");
  }
  getSeparatorItemClass(processedItem) {
    return __spreadProps(__spreadValues({}, this.getItemProp(processedItem, "class")), {
      "p-menuitem-separator": true
    });
  }
  getColumnClass(processedItem) {
    let length = this.isItemGroup(processedItem) ? processedItem.items.length : 0;
    let columnClass;
    switch (length) {
      case 2:
        columnClass = "p-megamenu-col-6";
        break;
      case 3:
        columnClass = "p-megamenu-col-4";
        break;
      case 4:
        columnClass = "p-megamenu-col-3";
        break;
      case 6:
        columnClass = "p-megamenu-col-2";
        break;
      default:
        columnClass = "p-megamenu-col-12";
        break;
    }
    return columnClass;
  }
  getSubmenuHeaderClass(processedItem) {
    return __spreadValues({
      "p-megamenu-submenu-header p-submenu-header": true,
      "p-disabled": this.isItemDisabled(processedItem)
    }, this.getItemProp(processedItem, "class"));
  }
  isSubmenuVisible(submenu) {
    if (this.submenu && !this.root) {
      return this.isItemVisible(submenu);
    } else {
      return true;
    }
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemActive(processedItem) {
    return ObjectUtils.isNotEmpty(this.activeItem) ? this.activeItem.key === processedItem.key : false;
  }
  isItemDisabled(processedItem) {
    return this.getItemProp(processedItem, "disabled");
  }
  isItemFocused(processedItem) {
    return this.focusedItemId === this.getItemId(processedItem);
  }
  isItemGroup(processedItem) {
    return ObjectUtils.isNotEmpty(processedItem.items);
  }
  getAriaSetSize() {
    return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, "separator")).length;
  }
  getAriaPosInset(index) {
    return index - this.items.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, "separator")).length + 1;
  }
  onItemMouseEnter(param) {
    const {
      event,
      processedItem
    } = param;
    this.itemMouseEnter.emit({
      originalEvent: event,
      processedItem
    });
  }
};
__publicField(_MegaMenuSub, "ɵfac", function MegaMenuSub_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MegaMenuSub)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(forwardRef(() => MegaMenu)));
});
__publicField(_MegaMenuSub, "ɵcmp", ɵɵdefineComponent({
  type: _MegaMenuSub,
  selectors: [["p-megaMenuSub"]],
  viewQuery: function MegaMenuSub_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menubarViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    id: "id",
    items: "items",
    itemTemplate: "itemTemplate",
    menuId: "menuId",
    ariaLabel: "ariaLabel",
    ariaLabelledBy: "ariaLabelledBy",
    level: [2, "level", "level", numberAttribute],
    focusedItemId: "focusedItemId",
    disabled: [2, "disabled", "disabled", booleanAttribute],
    orientation: "orientation",
    activeItem: "activeItem",
    submenu: "submenu",
    tabindex: [2, "tabindex", "tabindex", numberAttribute],
    root: [2, "root", "root", booleanAttribute]
  },
  outputs: {
    itemClick: "itemClick",
    itemMouseEnter: "itemMouseEnter",
    menuFocus: "menuFocus",
    menuBlur: "menuBlur",
    menuKeydown: "menuKeydown"
  },
  features: [ɵɵInputTransformsFeature],
  decls: 1,
  vars: 1,
  consts: [["menubar", ""], ["listItem", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], [3, "ngClass", "tabindex", "keydown", "focus", "blur", 4, "ngIf"], [3, "keydown", "focus", "blur", "ngClass", "tabindex"], ["role", "presentation", 3, "ngClass", "ngStyle", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["role", "presentation", 3, "ngClass", "ngStyle"], ["role", "separator", 3, "ngStyle", "ngClass", 4, "ngIf"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "class", "tooltipOptions", 4, "ngIf"], ["role", "separator", 3, "ngStyle", "ngClass"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "tooltipOptions"], [1, "p-menuitem-content", 3, "click", "mouseenter"], [4, "ngIf"], ["class", "p-megamenu-panel", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [4, "ngTemplateOutlet"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [3, "data-pc-section"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-megamenu-panel"], [1, "p-megamenu-grid"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "id", "submenu", "items", "itemTemplate", "menuId", "focusedItemId", "level", "root", "itemClick", "itemMouseEnter", 4, "ngFor", "ngForOf"], [3, "itemClick", "itemMouseEnter", "id", "submenu", "items", "itemTemplate", "menuId", "focusedItemId", "level", "root"]],
  template: function MegaMenuSub_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, MegaMenuSub_ul_0_Template, 4, 12, "ul", 4);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.isSubmenuVisible(ctx.submenu));
    }
  },
  dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Ripple, Tooltip, AngleDownIcon, AngleRightIcon, _MegaMenuSub],
  encapsulation: 2
}));
var MegaMenuSub = _MegaMenuSub;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MegaMenuSub, [{
    type: Component,
    args: [{
      selector: "p-megaMenuSub",
      template: '\n        <ul\n            *ngIf="isSubmenuVisible(submenu)"\n            #menubar\n            [ngClass]="{ \'p-megamenu-root-list\': root, \'p-submenu-list p-megamenu-submenu\': !root }"\n            [attr.role]="root ? \'menubar\' : \'menu\'"\n            [attr.id]="id"\n            [attr.aria-orientation]="orientation"\n            [tabindex]="tabindex"\n            [attr.aria-activedescendant]="focusedItemId"\n            [attr.data-pc-section]="root ? \'root\' : \'submenu\'"\n            (keydown)="menuKeydown.emit($event)"\n            (focus)="menuFocus.emit($event)"\n            (blur)="menuBlur.emit($event)"\n        >\n            <li *ngIf="submenu" [ngClass]="getSubmenuHeaderClass(submenu)" [ngStyle]="getItemProp(submenu, \'style\')" role="presentation">{{ getItemLabel(submenu) }}</li>\n            <ng-template ngFor let-processedItem [ngForOf]="items" let-index="index">\n                <li\n                    *ngIf="isItemVisible(processedItem) && getItemProp(processedItem, \'separator\')"\n                    [attr.id]="getItemId(processedItem)"\n                    [ngStyle]="getItemProp(processedItem, \'style\')"\n                    [ngClass]="getSeparatorItemClass(processedItem)"\n                    role="separator"\n                    [attr.data-pc-section]="\'separator\'"\n                ></li>\n                <li\n                    #listItem\n                    *ngIf="isItemVisible(processedItem) && !getItemProp(processedItem, \'separator\')"\n                    role="menuitem"\n                    [attr.id]="getItemId(processedItem)"\n                    [attr.data-pc-section]="\'menuitem\'"\n                    [attr.data-p-highlight]="isItemActive(processedItem)"\n                    [attr.data-p-focused]="isItemFocused(processedItem)"\n                    [attr.data-p-disabled]="isItemDisabled(processedItem)"\n                    [attr.aria-label]="getItemLabel(processedItem)"\n                    [attr.aria-disabled]="isItemDisabled(processedItem) || undefined"\n                    [attr.aria-haspopup]="isItemGroup(processedItem) && !getItemProp(processedItem, \'to\') ? \'menu\' : undefined"\n                    [attr.aria-expanded]="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"\n                    [attr.aria-level]="level + 1"\n                    [attr.aria-setsize]="getAriaSetSize()"\n                    [attr.aria-posinset]="getAriaPosInset(index)"\n                    [ngStyle]="getItemProp(processedItem, \'style\')"\n                    [ngClass]="getItemClass(processedItem)"\n                    [class]="getItemProp(processedItem, \'styleClass\')"\n                    pTooltip\n                    [tooltipOptions]="getItemProp(processedItem, \'tooltipOptions\')"\n                >\n                    <div class="p-menuitem-content" [attr.data-pc-section]="\'content\'" (click)="onItemClick($event, processedItem)" (mouseenter)="onItemMouseEnter({ $event, processedItem })">\n                        <ng-container *ngIf="!itemTemplate">\n                            <a\n                                *ngIf="!getItemProp(processedItem, \'routerLink\')"\n                                [attr.href]="getItemProp(processedItem, \'url\')"\n                                [attr.data-automationid]="getItemProp(processedItem, \'automationId\')"\n                                [attr.data-pc-section]="\'action\'"\n                                [target]="getItemProp(processedItem, \'target\')"\n                                [ngClass]="{ \'p-menuitem-link\': true, \'p-disabled\': getItemProp(processedItem, \'disabled\') }"\n                                [attr.tabindex]="-1"\n                                pRipple\n                            >\n                                <span\n                                    *ngIf="getItemProp(processedItem, \'icon\')"\n                                    class="p-menuitem-icon"\n                                    [ngClass]="getItemProp(processedItem, \'icon\')"\n                                    [ngStyle]="getItemProp(processedItem, \'iconStyle\')"\n                                    [attr.data-pc-section]="\'icon\'"\n                                    [attr.tabindex]="-1"\n                                >\n                                </span>\n                                <span *ngIf="getItemProp(processedItem, \'escape\'); else htmlLabel" class="p-menuitem-text" [attr.data-pc-section]="\'label\'">\n                                    {{ getItemLabel(processedItem) }}\n                                </span>\n                                <ng-template #htmlLabel>\n                                    <span class="p-menuitem-text" [innerHTML]="getItemLabel(processedItem)" [attr.data-pc-section]="\'label\'"></span>\n                                </ng-template>\n                                <span class="p-menuitem-badge" *ngIf="getItemProp(processedItem, \'badge\')" [ngClass]="getItemProp(processedItem, \'badgeStyleClass\')">{{ getItemProp(processedItem, \'badge\') }}</span>\n\n                                <ng-container *ngIf="isItemGroup(processedItem)">\n                                    <ng-container *ngIf="!megaMenu.submenuIconTemplate">\n                                        <AngleDownIcon [styleClass]="\'p-submenu-icon\'" [attr.data-pc-section]="\'submenuicon\'" *ngIf="orientation === \'horizontal\'" />\n                                        <AngleRightIcon [styleClass]="\'p-submenu-icon\'" [attr.data-pc-section]="\'submenuicon\'" *ngIf="orientation === \'vertical\'" />\n                                    </ng-container>\n                                    <ng-template *ngTemplateOutlet="megaMenu.submenuIconTemplate" [attr.data-pc-section]="\'submenuicon\'"></ng-template>\n                                </ng-container>\n                            </a>\n                            <a\n                                *ngIf="getItemProp(processedItem, \'routerLink\')"\n                                [routerLink]="getItemProp(processedItem, \'routerLink\')"\n                                [attr.data-automationid]="getItemProp(processedItem, \'automationId\')"\n                                [attr.tabindex]="-1"\n                                [attr.data-pc-section]="\'action\'"\n                                [queryParams]="getItemProp(processedItem, \'queryParams\')"\n                                [routerLinkActive]="\'p-menuitem-link-active\'"\n                                [routerLinkActiveOptions]="getItemProp(processedItem, \'routerLinkActiveOptions\') || { exact: false }"\n                                [target]="getItemProp(processedItem, \'target\')"\n                                [ngClass]="{ \'p-menuitem-link\': true, \'p-disabled\': getItemProp(processedItem, \'disabled\') }"\n                                [fragment]="getItemProp(processedItem, \'fragment\')"\n                                [queryParamsHandling]="getItemProp(processedItem, \'queryParamsHandling\')"\n                                [preserveFragment]="getItemProp(processedItem, \'preserveFragment\')"\n                                [skipLocationChange]="getItemProp(processedItem, \'skipLocationChange\')"\n                                [replaceUrl]="getItemProp(processedItem, \'replaceUrl\')"\n                                [state]="getItemProp(processedItem, \'state\')"\n                                pRipple\n                            >\n                                <span\n                                    class="p-menuitem-icon"\n                                    *ngIf="getItemProp(processedItem, \'icon\')"\n                                    [ngClass]="getItemProp(processedItem, \'icon\')"\n                                    [ngStyle]="getItemProp(processedItem, \'iconStyle\')"\n                                    [attr.data-pc-section]="\'icon\'"\n                                    [attr.tabindex]="-1"\n                                ></span>\n                                <span class="p-menuitem-text" *ngIf="getItemProp(processedItem, \'escape\'); else htmlRouteLabel">{{ getItemLabel(processedItem) }}</span>\n                                <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="getItemLabel(processedItem)" [attr.data-pc-section]="\'label\'"></span></ng-template>\n                                <span class="p-menuitem-badge" *ngIf="getItemProp(processedItem, \'badge\')" [ngClass]="getItemProp(processedItem, \'badgeStyleClass\')">{{ getItemProp(processedItem, \'badge\') }}</span>\n                                <ng-container *ngIf="isItemGroup(processedItem)">\n                                    <ng-container *ngIf="!megaMenu.submenuIconTemplate">\n                                        <AngleDownIcon [styleClass]="\'p-submenu-icon\'" [attr.data-pc-section]="\'submenuicon\'" *ngIf="orientation === \'horizontal\'" />\n                                        <AngleRightIcon [styleClass]="\'p-submenu-icon\'" [attr.data-pc-section]="\'submenuicon\'" *ngIf="orientation === \'vertical\'" />\n                                    </ng-container>\n                                    <ng-template *ngTemplateOutlet="megaMenu.submenuIconTemplate" [attr.data-pc-section]="\'submenuicon\'"></ng-template>\n                                </ng-container>\n                            </a>\n                        </ng-container>\n                        <ng-container *ngIf="itemTemplate">\n                            <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: processedItem.item }"></ng-template>\n                        </ng-container>\n                    </div>\n                    <div *ngIf="isItemVisible(processedItem) && isItemGroup(processedItem)" class="p-megamenu-panel" [attr.data-pc-section]="\'panel\'">\n                        <div class="p-megamenu-grid" [attr.data-pc-section]="\'grid\'">\n                            <div *ngFor="let col of processedItem.items" [ngClass]="getColumnClass(processedItem)">\n                                <p-megaMenuSub\n                                    *ngFor="let submenu of col"\n                                    [id]="getSubListId(submenu)"\n                                    [submenu]="submenu"\n                                    [items]="submenu.items"\n                                    [itemTemplate]="itemTemplate"\n                                    [menuId]="menuId"\n                                    [focusedItemId]="focusedItemId"\n                                    [level]="level + 1"\n                                    [root]="false"\n                                    (itemClick)="itemClick.emit($event)"\n                                    (itemMouseEnter)="onItemMouseEnter($event)"\n                                >\n                                </p-megaMenuSub>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ng-template>\n        </ul>\n    ',
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: MegaMenu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => MegaMenu)]
    }]
  }], {
    id: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    menuId: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    level: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focusedItemId: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    orientation: [{
      type: Input
    }],
    activeItem: [{
      type: Input
    }],
    submenu: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    root: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    itemClick: [{
      type: Output
    }],
    itemMouseEnter: [{
      type: Output
    }],
    menuFocus: [{
      type: Output
    }],
    menuBlur: [{
      type: Output
    }],
    menuKeydown: [{
      type: Output
    }],
    menubarViewChild: [{
      type: ViewChild,
      args: ["menubar", {
        static: true
      }]
    }]
  });
})();
var _MegaMenu = class _MegaMenu {
  constructor(document, platformId, el, renderer, config, cd) {
    __publicField(this, "document");
    __publicField(this, "platformId");
    __publicField(this, "el");
    __publicField(this, "renderer");
    __publicField(this, "config");
    __publicField(this, "cd");
    /**
     * Inline style of the element.
     * @group Props
     */
    __publicField(this, "style");
    /**
     * Class of the element.
     * @group Props
     */
    __publicField(this, "styleClass");
    /**
     * Defines the orientation.
     * @group Props
     */
    __publicField(this, "orientation", "horizontal");
    /**
     * Current id state as a string.
     * @group Props
     */
    __publicField(this, "id");
    /**
     * Defines a string value that labels an interactive element.
     * @group Props
     */
    __publicField(this, "ariaLabel");
    /**
     * Identifier of the underlying input element.
     * @group Props
     */
    __publicField(this, "ariaLabelledBy");
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    __publicField(this, "disabled", false);
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    __publicField(this, "tabindex", 0);
    __publicField(this, "templates");
    __publicField(this, "menubutton");
    __publicField(this, "rootmenu");
    __publicField(this, "startTemplate");
    __publicField(this, "endTemplate");
    __publicField(this, "menuIconTemplate");
    __publicField(this, "submenuIconTemplate");
    __publicField(this, "itemTemplate");
    __publicField(this, "outsideClickListener");
    __publicField(this, "resizeListener");
    __publicField(this, "dirty", false);
    __publicField(this, "focused", false);
    __publicField(this, "activeItem", signal(null));
    __publicField(this, "focusedItemInfo", signal({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    }));
    __publicField(this, "searchValue", "");
    __publicField(this, "searchTimeout");
    __publicField(this, "_processedItems");
    __publicField(this, "_model");
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.config = config;
    this.cd = cd;
    effect(() => {
      const activeItem = this.activeItem();
      if (ObjectUtils.isNotEmpty(activeItem)) {
        this.bindOutsideClickListener();
        this.bindResizeListener();
      } else {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
      }
    });
  }
  /**
   * An array of menuitems.
   * @group Props
   */
  set model(value) {
    this._model = value;
    this._processedItems = this.createProcessedItems(this._model || []);
  }
  get model() {
    return this._model;
  }
  get visibleItems() {
    const processedItem = ObjectUtils.isNotEmpty(this.activeItem()) ? this.activeItem() : null;
    return processedItem ? processedItem.items.reduce((items, col) => {
      col.forEach((submenu) => {
        submenu.items.forEach((a) => {
          items.push(a);
        });
      });
      return items;
    }, []) : this.processedItems;
  }
  get processedItems() {
    if (!this._processedItems || !this._processedItems.length) {
      this._processedItems = this.createProcessedItems(this.model || []);
    }
    return this._processedItems;
  }
  get focusedItemId() {
    var _a;
    const focusedItem = this.focusedItemInfo();
    return (focusedItem == null ? void 0 : focusedItem.item) && ((_a = focusedItem.item) == null ? void 0 : _a.id) ? focusedItem.item.id : ObjectUtils.isNotEmpty(focusedItem.key) ? "".concat(this.id, "_").concat(focusedItem.key) : null;
  }
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
  }
  ngAfterContentInit() {
    var _a;
    (_a = this.templates) == null ? void 0 : _a.forEach((item) => {
      switch (item.getType()) {
        case "start":
          this.startTemplate = item.template;
          break;
        case "end":
          this.endTemplate = item.template;
          break;
        case "menuicon":
          this.menuIconTemplate = item.template;
          break;
        case "submenuicon":
          this.submenuIconTemplate = item.template;
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
  createProcessedItems(items, level = 0, parent = {}, parentKey = "", columnIndex) {
    const processedItems = [];
    items && items.forEach((item, index) => {
      const key = (parentKey !== "" ? parentKey + "_" : "") + (columnIndex !== void 0 ? columnIndex + "_" : "") + index;
      const newItem = {
        item,
        index,
        level,
        key,
        parent,
        parentKey,
        columnIndex: columnIndex !== void 0 ? columnIndex : parent.columnIndex !== void 0 ? parent.columnIndex : index
      };
      newItem["items"] = level === 0 && item.items && item.items.length > 0 ? item.items.map((_items, _index) => this.createProcessedItems(_items, level + 1, newItem, key, _index)) : this.createProcessedItems(item.items, level + 1, newItem, key);
      processedItems.push(newItem);
    });
    return processedItems;
  }
  getItemProp(item, name) {
    return item ? ObjectUtils.getItemValue(item[name]) : void 0;
  }
  onItemClick(event) {
    var _a, _b, _c, _d;
    const {
      originalEvent,
      processedItem
    } = event;
    const grouped = this.isProcessedItemGroup(processedItem);
    const root = ObjectUtils.isEmpty(processedItem.parent);
    const selected = this.isSelected(processedItem);
    if (selected) {
      const {
        index,
        key,
        parentKey,
        item
      } = processedItem;
      this.activeItem.set(null);
      this.focusedItemInfo.set({
        index,
        key,
        parentKey,
        item
      });
      this.dirty = !root;
      DomHandler.focus((_b = (_a = this.rootmenu) == null ? void 0 : _a.menubarViewChild) == null ? void 0 : _b.nativeElement);
    } else {
      if (grouped) {
        this.onItemChange(event);
      } else {
        const rootProcessedItem = root ? processedItem : this.activeItem();
        this.hide(originalEvent);
        this.changeFocusedItemInfo(originalEvent, rootProcessedItem ? rootProcessedItem.index : -1);
        DomHandler.focus((_d = (_c = this.rootmenu) == null ? void 0 : _c.menubarViewChild) == null ? void 0 : _d.nativeElement);
      }
    }
  }
  onItemMouseEnter(event) {
    if (!DomHandler.isTouchDevice()) {
      this.onItemChange(event);
    }
  }
  scrollInView(index = -1) {
    var _a;
    const id = index !== -1 ? "".concat(this.id, "_").concat(index) : this.focusedItemId;
    const element = DomHandler.findSingle((_a = this.rootmenu) == null ? void 0 : _a.el.nativeElement, 'li[id="'.concat(id, '"]'));
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }
  onItemChange(event) {
    var _a, _b;
    const {
      processedItem,
      isFocus
    } = event;
    if (ObjectUtils.isEmpty(processedItem)) return;
    const {
      index,
      key,
      parentKey,
      items,
      item
    } = processedItem;
    const grouped = ObjectUtils.isNotEmpty(items);
    if (grouped) {
      this.activeItem.set(processedItem);
    }
    this.focusedItemInfo.set({
      index,
      key,
      parentKey,
      item
    });
    grouped && (this.dirty = true);
    isFocus && DomHandler.focus((_b = (_a = this.rootmenu) == null ? void 0 : _a.menubarViewChild) == null ? void 0 : _b.nativeElement);
  }
  hide(event, isFocus) {
    var _a, _b;
    this.activeItem.set(null);
    this.focusedItemInfo.set({
      index: -1,
      key: "",
      parentKey: "",
      item: null
    });
    isFocus && DomHandler.focus((_b = (_a = this.rootmenu) == null ? void 0 : _a.menubarViewChild) == null ? void 0 : _b.nativeElement);
    this.dirty = false;
  }
  onMenuFocus(event) {
    this.focused = true;
    if (this.focusedItemInfo().index === -1) {
      const index = this.findFirstFocusedItemIndex();
      const processedItem = this.findVisibleItem(index);
      this.focusedItemInfo.set({
        index,
        key: processedItem.key,
        parentKey: processedItem.parentKey,
        item: processedItem.item
      });
    }
  }
  onMenuBlur(event) {
    this.focused = false;
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    });
    this.searchValue = "";
    this.dirty = false;
  }
  onKeyDown(event) {
    const metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "ArrowLeft":
        this.onArrowLeftKey(event);
        break;
      case "ArrowRight":
        this.onArrowRightKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "PageDown":
      case "PageUp":
      case "Backspace":
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
          this.searchItems(event, event.key);
        }
        break;
    }
  }
  findFirstFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
  }
  findFirstItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidItem(processedItem));
  }
  findSelectedItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidSelectedItem(processedItem));
  }
  isProcessedItemGroup(processedItem) {
    return processedItem && ObjectUtils.isNotEmpty(processedItem.items);
  }
  isSelected(processedItem) {
    return ObjectUtils.isNotEmpty(this.activeItem()) ? this.activeItem().key === processedItem.key : false;
  }
  isValidSelectedItem(processedItem) {
    return this.isValidItem(processedItem) && this.isSelected(processedItem);
  }
  isValidItem(processedItem) {
    return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item);
  }
  isItemDisabled(item) {
    return this.getItemProp(item, "disabled");
  }
  isItemSeparator(item) {
    return this.getItemProp(item, "separator");
  }
  isItemMatched(processedItem) {
    return this.isValidItem(processedItem) && this.getProccessedItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
  }
  isProccessedItemGroup(processedItem) {
    return processedItem && ObjectUtils.isNotEmpty(processedItem.items);
  }
  searchItems(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let itemIndex = -1;
    let matched = false;
    if (this.focusedItemInfo().index !== -1) {
      itemIndex = this.visibleItems.slice(this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem));
      itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem)) : itemIndex + this.focusedItemInfo().index;
    } else {
      itemIndex = this.visibleItems.findIndex((processedItem) => this.isItemMatched(processedItem));
    }
    if (itemIndex !== -1) {
      matched = true;
    }
    if (itemIndex === -1 && this.focusedItemInfo().index === -1) {
      itemIndex = this.findFirstFocusedItemIndex();
    }
    if (itemIndex !== -1) {
      this.changeFocusedItemInfo(event, itemIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  getProccessedItemLabel(processedItem) {
    return processedItem ? this.getItemLabel(processedItem.item) : void 0;
  }
  getItemLabel(item) {
    return this.getItemProp(item, "label");
  }
  changeFocusedItemInfo(event, index) {
    const processedItem = this.findVisibleItem(index);
    if (ObjectUtils.isNotEmpty(processedItem)) {
      const {
        key,
        parentKey,
        item
      } = processedItem;
      this.focusedItemInfo.set({
        index,
        key: key ? key : "",
        parentKey,
        item
      });
    }
    this.scrollInView();
  }
  onArrowDownKey(event) {
    if (this.orientation === "horizontal") {
      if (ObjectUtils.isNotEmpty(this.activeItem()) && this.activeItem().key === this.focusedItemInfo().key) {
        const {
          key,
          item
        } = this.activeItem();
        this.focusedItemInfo.set({
          index: -1,
          key: "",
          parentKey: key,
          item
        });
      } else {
        const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
        const grouped = this.isProccessedItemGroup(processedItem);
        if (grouped) {
          const {
            parentKey,
            key,
            item
          } = processedItem;
          this.onItemChange({
            originalEvent: event,
            processedItem
          });
          this.focusedItemInfo.set({
            index: -1,
            key,
            parentKey,
            item
          });
          this.searchValue = "";
        }
      }
    }
    const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
    this.changeFocusedItemInfo(event, itemIndex);
    event.preventDefault();
  }
  onArrowRightKey(event) {
    const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
    const grouped = this.isProccessedItemGroup(processedItem);
    if (grouped) {
      if (this.orientation === "vertical") {
        if (ObjectUtils.isNotEmpty(this.activeItem()) && this.activeItem().key === processedItem.key) {
          this.focusedItemInfo.set({
            index: -1,
            key: "",
            parentKey: this.activeItem().key,
            item: processedItem.item
          });
        } else {
          const processedItem2 = this.findVisibleItem(this.focusedItemInfo().index);
          const grouped2 = this.isProccessedItemGroup(processedItem2);
          if (grouped2) {
            this.onItemChange({
              originalEvent: event,
              processedItem: processedItem2
            });
            this.focusedItemInfo.set({
              index: -1,
              key: processedItem2.key,
              parentKey: processedItem2.parentKey,
              item: processedItem2.item
            });
            this.searchValue = "";
          }
        }
      }
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemInfo(event, itemIndex);
    } else {
      const columnIndex = processedItem.columnIndex + 1;
      const itemIndex = this.visibleItems.findIndex((item) => item.columnIndex === columnIndex);
      itemIndex !== -1 && this.changeFocusedItemInfo(event, itemIndex);
    }
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey && this.orientation === "horizontal") {
      if (this.focusedItemInfo().index !== -1) {
        const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
        const grouped = this.isProccessedItemGroup(processedItem);
        if (!grouped && ObjectUtils.isNotEmpty(this.activeItem)) {
          if (this.focusedItemInfo().index === 0) {
            this.focusedItemInfo.set({
              index: this.activeItem().index,
              key: this.activeItem().key,
              parentKey: this.activeItem().parentKey,
              item: processedItem.item
            });
            this.activeItem.set(null);
          } else {
            this.changeFocusedItemInfo(event, this.findFirstItemIndex());
          }
        }
      }
      event.preventDefault();
    } else {
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
      this.changeFocusedItemInfo(event, itemIndex);
      event.preventDefault();
    }
  }
  onArrowLeftKey(event) {
    const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
    const grouped = this.isProccessedItemGroup(processedItem);
    if (grouped) {
      if (this.orientation === "horizontal") {
        const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemInfo(event, itemIndex);
      }
    } else {
      if (this.orientation === "vertical" && ObjectUtils.isNotEmpty(this.activeItem())) {
        if (processedItem.columnIndex === 0) {
          this.focusedItemInfo.set({
            index: this.activeItem().index,
            key: this.activeItem().key,
            parentKey: this.activeItem().parentKey,
            item: processedItem.item
          });
          this.activeItem.set(null);
        }
      }
      const columnIndex = processedItem.columnIndex - 1;
      const itemIndex = this.visibleItems.findIndex((item) => item.columnIndex === columnIndex);
      itemIndex !== -1 && this.changeFocusedItemInfo(event, itemIndex);
    }
    event.preventDefault();
  }
  onHomeKey(event) {
    this.changeFocusedItemInfo(event, this.findFirstItemIndex());
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedItemInfo(event, this.findLastItemIndex());
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  onEscapeKey(event) {
    if (ObjectUtils.isNotEmpty(this.activeItem())) {
      this.focusedItemInfo.set({
        index: this.activeItem().index,
        key: this.activeItem().key,
        item: this.activeItem().item
      });
      this.activeItem.set(null);
    }
    event.preventDefault();
  }
  onTabKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
      const grouped = this.isProccessedItemGroup(processedItem);
      !grouped && this.onItemChange({
        originalEvent: event,
        processedItem
      });
    }
    this.hide();
  }
  onEnterKey(event) {
    var _a, _b;
    if (this.focusedItemInfo().index !== -1) {
      const element = DomHandler.findSingle((_b = (_a = this.rootmenu) == null ? void 0 : _a.el) == null ? void 0 : _b.nativeElement, 'li[id="'.concat("".concat(this.focusedItemId), '"]'));
      const anchorElement = element && DomHandler.findSingle(element, 'a[data-pc-section="action"]');
      anchorElement ? anchorElement.click() : element && element.click();
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const grouped = this.isProccessedItemGroup(processedItem);
      !grouped && this.changeFocusedItemInfo(event, this.findFirstFocusedItemIndex());
    }
    event.preventDefault();
  }
  findVisibleItem(index) {
    return ObjectUtils.isNotEmpty(this.visibleItems) ? this.visibleItems[index] : null;
  }
  findLastFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
  }
  findLastItemIndex() {
    return ObjectUtils.findLastIndex(this.visibleItems, (processedItem) => this.isValidItem(processedItem));
  }
  findPrevItemIndex(index) {
    const matchedItemIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleItems.slice(0, index), (processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex : index;
  }
  findNextItemIndex(index) {
    const matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex((processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) {
        this.resizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
          this.hide(event, true);
        });
      }
    }
  }
  bindOutsideClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.outsideClickListener) {
        this.outsideClickListener = this.renderer.listen(this.document, "click", (event) => {
          var _a, _b;
          const isOutsideContainer = ((_a = this.rootmenu) == null ? void 0 : _a.el.nativeElement) !== event.target && !((_b = this.rootmenu) == null ? void 0 : _b.el.nativeElement.contains(event.target));
          if (isOutsideContainer) {
            this.hide();
          }
        });
      }
    }
  }
  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      this.outsideClickListener();
      this.outsideClickListener = null;
    }
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  ngOnDestroy() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
  }
};
__publicField(_MegaMenu, "ɵfac", function MegaMenu_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MegaMenu)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(ChangeDetectorRef));
});
__publicField(_MegaMenu, "ɵcmp", ɵɵdefineComponent({
  type: _MegaMenu,
  selectors: [["p-megaMenu"]],
  contentQueries: function MegaMenu_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function MegaMenu_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c5, 5);
      ɵɵviewQuery(_c6, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menubutton = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rootmenu = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    model: "model",
    style: "style",
    styleClass: "styleClass",
    orientation: "orientation",
    id: "id",
    ariaLabel: "ariaLabel",
    ariaLabelledBy: "ariaLabelledBy",
    disabled: [2, "disabled", "disabled", booleanAttribute],
    tabindex: [2, "tabindex", "tabindex", numberAttribute]
  },
  features: [ɵɵInputTransformsFeature],
  ngContentSelectors: _c7,
  decls: 7,
  vars: 26,
  consts: [["rootmenu", ""], ["legacy", ""], [3, "ngClass", "ngStyle"], ["class", "p-megamenu-start", 4, "ngIf"], [3, "itemClick", "menuFocus", "menuBlur", "menuKeydown", "itemMouseEnter", "itemTemplate", "items", "menuId", "root", "orientation", "ariaLabel", "disabled", "tabindex", "activeItem", "level", "ariaLabelledBy", "focusedItemId"], ["class", "p-megamenu-end", 4, "ngIf", "ngIfElse"], [1, "p-megamenu-start"], [4, "ngTemplateOutlet"], [1, "p-megamenu-end"]],
  template: function MegaMenu_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 2);
      ɵɵtemplate(1, MegaMenu_div_1_Template, 2, 1, "div", 3);
      ɵɵelementStart(2, "p-megaMenuSub", 4, 0);
      ɵɵlistener("itemClick", function MegaMenu_Template_p_megaMenuSub_itemClick_2_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onItemClick($event));
      })("menuFocus", function MegaMenu_Template_p_megaMenuSub_menuFocus_2_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onMenuFocus($event));
      })("menuBlur", function MegaMenu_Template_p_megaMenuSub_menuBlur_2_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onMenuBlur($event));
      })("menuKeydown", function MegaMenu_Template_p_megaMenuSub_menuKeydown_2_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onKeyDown($event));
      })("itemMouseEnter", function MegaMenu_Template_p_megaMenuSub_itemMouseEnter_2_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onItemMouseEnter($event));
      });
      ɵɵelementEnd();
      ɵɵtemplate(4, MegaMenu_div_4_Template, 2, 1, "div", 5)(5, MegaMenu_ng_template_5_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      const legacy_r3 = ɵɵreference(6);
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", ɵɵpureFunction2(23, _c8, ctx.orientation == "horizontal", ctx.orientation == "vertical"))("ngStyle", ctx.style);
      ɵɵattribute("data-pc-section", "root")("data-pc-name", "megamenu")("id", ctx.id);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.startTemplate);
      ɵɵadvance();
      ɵɵproperty("itemTemplate", ctx.itemTemplate)("items", ctx.processedItems)("menuId", ctx.id)("root", true)("orientation", ctx.orientation)("ariaLabel", ctx.ariaLabel)("disabled", ctx.disabled)("tabindex", !ctx.disabled ? ctx.tabindex : -1)("activeItem", ctx.activeItem())("level", 0)("ariaLabelledBy", ctx.ariaLabelledBy)("focusedItemId", ctx.focused ? ctx.focusedItemId : void 0);
      ɵɵattribute("id", ctx.id + "_list");
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.endTemplate)("ngIfElse", legacy_r3);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle, MegaMenuSub],
  styles: ["@layer primeng{.p-megamenu-root-list{margin:0;padding:0;list-style:none}.p-megamenu-root-list>.p-menuitem{position:relative}.p-megamenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-megamenu .p-menuitem-text{line-height:1}.p-megamenu-panel{display:none;position:absolute;width:auto;z-index:1}.p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{display:block}.p-megamenu-submenu{margin:0;padding:0;list-style:none}.p-megamenu-horizontal{align-items:center}.p-megamenu-horizontal .p-megamenu-root-list{display:flex;align-items:center;flex-wrap:wrap}.p-megamenu-horizontal .p-megamenu-end{margin-left:auto;align-self:center}.p-megamenu-vertical .p-megamenu-root-list{flex-direction:column}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{left:100%;top:0}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-content>.p-menuitem-link>.p-submenu-icon:not(svg){margin-left:auto}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-content>.p-menuitem-link>.p-icon-wrapper{margin-left:auto}.p-megamenu-grid{display:flex}.p-megamenu-col-2,.p-megamenu-col-3,.p-megamenu-col-4,.p-megamenu-col-6,.p-megamenu-col-12{flex:0 0 auto;padding:.5rem}.p-megamenu-col-2{width:16.6667%}.p-megamenu-col-3{width:25%}.p-megamenu-col-4{width:33.3333%}.p-megamenu-col-6{width:50%}.p-megamenu-col-12{width:100%}}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var MegaMenu = _MegaMenu;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MegaMenu, [{
    type: Component,
    args: [{
      selector: "p-megaMenu",
      template: '\n        <div\n            [ngClass]="{ \'p-megamenu p-component\': true, \'p-megamenu-horizontal\': orientation == \'horizontal\', \'p-megamenu-vertical\': orientation == \'vertical\' }"\n            [class]="styleClass"\n            [ngStyle]="style"\n            [attr.data-pc-section]="\'root\'"\n            [attr.data-pc-name]="\'megamenu\'"\n            [attr.id]="id"\n        >\n            <div class="p-megamenu-start" *ngIf="startTemplate">\n                <ng-container *ngTemplateOutlet="startTemplate"></ng-container>\n            </div>\n            <p-megaMenuSub\n                #rootmenu\n                [itemTemplate]="itemTemplate"\n                [items]="processedItems"\n                [attr.id]="id + \'_list\'"\n                [menuId]="id"\n                [root]="true"\n                [orientation]="orientation"\n                [ariaLabel]="ariaLabel"\n                [disabled]="disabled"\n                [tabindex]="!disabled ? tabindex : -1"\n                [activeItem]="activeItem()"\n                [level]="0"\n                [ariaLabelledBy]="ariaLabelledBy"\n                [focusedItemId]="focused ? focusedItemId : undefined"\n                (itemClick)="onItemClick($event)"\n                (menuFocus)="onMenuFocus($event)"\n                (menuBlur)="onMenuBlur($event)"\n                (menuKeydown)="onKeyDown($event)"\n                (itemMouseEnter)="onItemMouseEnter($event)"\n            ></p-megaMenuSub>\n            <div class="p-megamenu-end" *ngIf="endTemplate; else legacy">\n                <ng-container *ngTemplateOutlet="endTemplate"></ng-container>\n            </div>\n            <ng-template #legacy>\n                <div class="p-megamenu-end">\n                    <ng-content></ng-content>\n                </div>\n            </ng-template>\n        </div>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-megamenu-root-list{margin:0;padding:0;list-style:none}.p-megamenu-root-list>.p-menuitem{position:relative}.p-megamenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-megamenu .p-menuitem-text{line-height:1}.p-megamenu-panel{display:none;position:absolute;width:auto;z-index:1}.p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{display:block}.p-megamenu-submenu{margin:0;padding:0;list-style:none}.p-megamenu-horizontal{align-items:center}.p-megamenu-horizontal .p-megamenu-root-list{display:flex;align-items:center;flex-wrap:wrap}.p-megamenu-horizontal .p-megamenu-end{margin-left:auto;align-self:center}.p-megamenu-vertical .p-megamenu-root-list{flex-direction:column}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{left:100%;top:0}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-content>.p-menuitem-link>.p-submenu-icon:not(svg){margin-left:auto}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-content>.p-menuitem-link>.p-icon-wrapper{margin-left:auto}.p-megamenu-grid{display:flex}.p-megamenu-col-2,.p-megamenu-col-3,.p-megamenu-col-4,.p-megamenu-col-6,.p-megamenu-col-12{flex:0 0 auto;padding:.5rem}.p-megamenu-col-2{width:16.6667%}.p-megamenu-col-3{width:25%}.p-megamenu-col-4{width:33.3333%}.p-megamenu-col-6{width:50%}.p-megamenu-col-12{width:100%}}\n"]
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
    type: Renderer2
  }, {
    type: PrimeNGConfig
  }, {
    type: ChangeDetectorRef
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
    orientation: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    disabled: [{
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
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    menubutton: [{
      type: ViewChild,
      args: ["menubutton"]
    }],
    rootmenu: [{
      type: ViewChild,
      args: ["rootmenu"]
    }]
  });
})();
var _MegaMenuModule = class _MegaMenuModule {
};
__publicField(_MegaMenuModule, "ɵfac", function MegaMenuModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MegaMenuModule)();
});
__publicField(_MegaMenuModule, "ɵmod", ɵɵdefineNgModule({
  type: _MegaMenuModule,
  declarations: [MegaMenu, MegaMenuSub],
  imports: [CommonModule, RouterModule, RippleModule, TooltipModule, SharedModule, AngleDownIcon, AngleRightIcon],
  exports: [MegaMenu, RouterModule, TooltipModule, SharedModule]
}));
__publicField(_MegaMenuModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, RouterModule, RippleModule, TooltipModule, SharedModule, AngleDownIcon, AngleRightIcon, RouterModule, TooltipModule, SharedModule]
}));
var MegaMenuModule = _MegaMenuModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MegaMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, RippleModule, TooltipModule, SharedModule, AngleDownIcon, AngleRightIcon],
      exports: [MegaMenu, RouterModule, TooltipModule, SharedModule],
      declarations: [MegaMenu, MegaMenuSub]
    }]
  }], null, null);
})();
export {
  MegaMenu,
  MegaMenuModule,
  MegaMenuSub
};
//# sourceMappingURL=primeng_megamenu.js.map
