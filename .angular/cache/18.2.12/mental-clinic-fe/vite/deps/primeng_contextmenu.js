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
  OverlayService,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule
} from "./chunk-ZROJCIWL.js";
import {
  ObjectUtils,
  UniqueComponentId,
  zindexutils
} from "./chunk-U3NLM53U.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-5S7AEMUZ.js";
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
  ViewContainerRef,
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

// node_modules/primeng/fesm2022/primeng-contextmenu.mjs
var _c0 = ["sublist"];
var _c1 = (a0, a1) => ({
  "p-submenu-list": a0,
  "p-contextmenu-root-list": a1
});
var _c2 = () => ({
  "p-menuitem-link": true
});
var _c3 = () => ({
  exact: false
});
var _c4 = (a0) => ({
  "p-menuitem-link": true,
  "p-disabled": a0
});
var _c5 = (a0) => ({
  $implicit: a0
});
function ContextMenuSub_ul_0_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 8);
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ctx_r2.getItemProp(processedItem_r4, "style"))("ngClass", ctx_r2.getSeparatorItemClass(processedItem_r4));
    ɵɵattribute("id", ctx_r2.getItemId(processedItem_r4))("data-pc-section", "separator");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r2.getItemProp(processedItem_r4, "icon"))("ngStyle", ctx_r2.getItemProp(processedItem_r4, "iconStyle"));
    ɵɵattribute("data-pc-section", "icon")("tabindex", -1);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getItemLabel(processedItem_r4), " ");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r2.getItemLabel(processedItem_r4), ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "label");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r2.getItemProp(processedItem_r4, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(processedItem_r4, "badge"));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_AngleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 25);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 26);
  }
  if (rf & 2) {
    ɵɵproperty("data-pc-section", "submenuicon");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_AngleRightIcon_1_Template, 1, 2, "AngleRightIcon", 23)(2, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template, 1, 1, null, 24);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.contextMenu.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.contextMenu.submenuIconTemplate);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 15);
    ɵɵtemplate(1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_1_Template, 1, 4, "span", 16)(2, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_2_Template, 2, 2, "span", 17)(3, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template, 1, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_5_Template, 2, 2, "span", 18)(6, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template, 3, 2, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r6 = ɵɵreference(4);
    const processedItem_r4 = ɵɵnextContext(3).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("target", ctx_r2.getItemProp(processedItem_r4, "target"))("ngClass", ɵɵpureFunction0(11, _c2));
    ɵɵattribute("href", ctx_r2.getItemProp(processedItem_r4, "url"), ɵɵsanitizeUrl)("data-automationid", ctx_r2.getItemProp(processedItem_r4, "automationId"))("data-pc-section", "action")("tabindex", -1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r4, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r4, "escape"))("ngIfElse", htmlLabel_r6);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r4, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemGroup(processedItem_r4));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r2.getItemProp(processedItem_r4, "icon"))("ngStyle", ctx_r2.getItemProp(processedItem_r4, "iconStyle"));
    ɵɵattribute("data-pc-section", "icon")("tabindex", -1);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getItemLabel(processedItem_r4), " ");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r2.getItemLabel(processedItem_r4), ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "label");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r2.getItemProp(processedItem_r4, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(processedItem_r4, "badge"));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_AngleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 25);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 26);
  }
  if (rf & 2) {
    ɵɵproperty("data-pc-section", "submenuicon");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_AngleRightIcon_1_Template, 1, 2, "AngleRightIcon", 23)(2, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template, 1, 1, null, 24);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.contextMenu.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.contextMenu.submenuIconTemplate);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 27);
    ɵɵtemplate(1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_1_Template, 1, 4, "span", 16)(2, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_2_Template, 2, 2, "span", 17)(3, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template, 1, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_5_Template, 2, 2, "span", 18)(6, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template, 3, 2, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r7 = ɵɵreference(4);
    const processedItem_r4 = ɵɵnextContext(3).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("routerLink", ctx_r2.getItemProp(processedItem_r4, "routerLink"))("queryParams", ctx_r2.getItemProp(processedItem_r4, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r2.getItemProp(processedItem_r4, "routerLinkActiveOptions") || ɵɵpureFunction0(20, _c3))("target", ctx_r2.getItemProp(processedItem_r4, "target"))("ngClass", ɵɵpureFunction1(21, _c4, ctx_r2.getItemProp(processedItem_r4, "disabled")))("fragment", ctx_r2.getItemProp(processedItem_r4, "fragment"))("queryParamsHandling", ctx_r2.getItemProp(processedItem_r4, "queryParamsHandling"))("preserveFragment", ctx_r2.getItemProp(processedItem_r4, "preserveFragment"))("skipLocationChange", ctx_r2.getItemProp(processedItem_r4, "skipLocationChange"))("replaceUrl", ctx_r2.getItemProp(processedItem_r4, "replaceUrl"))("state", ctx_r2.getItemProp(processedItem_r4, "state"));
    ɵɵattribute("data-automationid", ctx_r2.getItemProp(processedItem_r4, "automationId"))("tabindex", -1)("data-pc-section", "action");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r4, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r4, "escape"))("ngIfElse", htmlLabel_r7);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r4, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemGroup(processedItem_r4));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_Template, 7, 12, "a", 13)(2, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_Template, 7, 23, "a", 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.getItemProp(processedItem_r4, "routerLink"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r4, "routerLink"));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template(rf, ctx) {
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_1_Template, 1, 0, null, 28);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c5, processedItem_r4.item));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_p_contextMenuSub_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-contextMenuSub", 29);
    ɵɵlistener("itemClick", function ContextMenuSub_ul_0_ng_template_2_li_1_p_contextMenuSub_5_Template_p_contextMenuSub_itemClick_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.itemClick.emit($event));
    })("itemMouseEnter", function ContextMenuSub_ul_0_ng_template_2_li_1_p_contextMenuSub_5_Template_p_contextMenuSub_itemMouseEnter_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.onItemMouseEnter($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("items", processedItem_r4.items)("itemTemplate", ctx_r2.itemTemplate)("menuId", ctx_r2.menuId)("visible", ctx_r2.isItemActive(processedItem_r4) && ctx_r2.isItemGroup(processedItem_r4))("activeItemPath", ctx_r2.activeItemPath)("focusedItemId", ctx_r2.focusedItemId)("level", ctx_r2.level + 1);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 9, 1)(2, "div", 10);
    ɵɵlistener("click", function ContextMenuSub_ul_0_ng_template_2_li_1_Template_div_click_2_listener($event) {
      ɵɵrestoreView(_r5);
      const processedItem_r4 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onItemClick($event, processedItem_r4));
    })("mouseenter", function ContextMenuSub_ul_0_ng_template_2_li_1_Template_div_mouseenter_2_listener($event) {
      ɵɵrestoreView(_r5);
      const processedItem_r4 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onItemMouseEnter({
        $event,
        processedItem: processedItem_r4
      }));
    });
    ɵɵtemplate(3, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_Template, 3, 2, "ng-container", 11)(4, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_Template, 2, 4, "ng-container", 11);
    ɵɵelementEnd();
    ɵɵtemplate(5, ContextMenuSub_ul_0_ng_template_2_li_1_p_contextMenuSub_5_Template, 1, 7, "p-contextMenuSub", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    const processedItem_r4 = ctx_r8.$implicit;
    const index_r10 = ctx_r8.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.getItemProp(processedItem_r4, "styleClass"));
    ɵɵproperty("ngStyle", ctx_r2.getItemProp(processedItem_r4, "style"))("ngClass", ctx_r2.getItemClass(processedItem_r4))("tooltipOptions", ctx_r2.getItemProp(processedItem_r4, "tooltipOptions"));
    ɵɵattribute("id", ctx_r2.getItemId(processedItem_r4))("data-pc-section", "menuitem")("data-p-highlight", ctx_r2.isItemActive(processedItem_r4))("data-p-focused", ctx_r2.isItemFocused(processedItem_r4))("data-p-disabled", ctx_r2.isItemDisabled(processedItem_r4))("aria-label", ctx_r2.getItemLabel(processedItem_r4))("aria-disabled", ctx_r2.isItemDisabled(processedItem_r4) || void 0)("aria-haspopup", ctx_r2.isItemGroup(processedItem_r4) && !ctx_r2.getItemProp(processedItem_r4, "to") ? "menu" : void 0)("aria-expanded", ctx_r2.isItemGroup(processedItem_r4) ? ctx_r2.isItemActive(processedItem_r4) : void 0)("aria-level", ctx_r2.level + 1)("aria-setsize", ctx_r2.getAriaSetSize())("aria-posinset", ctx_r2.getAriaPosInset(index_r10));
    ɵɵadvance(2);
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r4) && ctx_r2.isItemGroup(processedItem_r4));
  }
}
function ContextMenuSub_ul_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ContextMenuSub_ul_0_ng_template_2_li_0_Template, 1, 4, "li", 6)(1, ContextMenuSub_ul_0_ng_template_2_li_1_Template, 6, 21, "li", 7);
  }
  if (rf & 2) {
    const processedItem_r4 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r4) && ctx_r2.getItemProp(processedItem_r4, "separator"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r4) && !ctx_r2.getItemProp(processedItem_r4, "separator"));
  }
}
function ContextMenuSub_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 4, 0);
    ɵɵlistener("@overlayAnimation.start", function ContextMenuSub_ul_0_Template_ul_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const sublist_r2 = ɵɵreference(1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onEnter($event, sublist_r2));
    })("keydown", function ContextMenuSub_ul_0_Template_ul_keydown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.menuKeydown.emit($event));
    })("focus", function ContextMenuSub_ul_0_Template_ul_focus_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.menuFocus.emit($event));
    })("blur", function ContextMenuSub_ul_0_Template_ul_blur_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.menuBlur.emit($event));
    });
    ɵɵtemplate(2, ContextMenuSub_ul_0_ng_template_2_Template, 2, 2, "ng-template", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(10, _c1, !ctx_r2.root, ctx_r2.root))("@overlayAnimation", ctx_r2.visible)("tabindex", ctx_r2.tabindex);
    ɵɵattribute("id", ctx_r2.menuId + "_list")("aria-label", ctx_r2.ariaLabel)("aria-labelledBy", ctx_r2.ariaLabelledBy)("aria-activedescendant", ctx_r2.focusedItemId)("aria-orientation", "vertical")("data-pc-section", "menu");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.items);
  }
}
var _c6 = ["rootmenu"];
var _c7 = ["container"];
var _c8 = () => ({
  "p-contextmenu p-component": true,
  "p-contextmenu-overlay": true
});
var _c9 = () => ({
  value: "visible"
});
function ContextMenu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3, 0);
    ɵɵlistener("@overlayAnimation.start", function ContextMenu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function ContextMenu_div_0_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationEnd($event));
    });
    ɵɵelementStart(2, "p-contextMenuSub", 4, 1);
    ɵɵlistener("itemClick", function ContextMenu_div_0_Template_p_contextMenuSub_itemClick_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event));
    })("menuFocus", function ContextMenu_div_0_Template_p_contextMenuSub_menuFocus_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMenuFocus($event));
    })("menuBlur", function ContextMenu_div_0_Template_p_contextMenuSub_menuBlur_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMenuBlur($event));
    })("menuKeydown", function ContextMenu_div_0_Template_p_contextMenuSub_menuKeydown_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKeyDown($event));
    })("itemMouseEnter", function ContextMenu_div_0_Template_p_contextMenuSub_itemMouseEnter_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemMouseEnter($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction0(20, _c8))("ngStyle", ctx_r1.style)("@overlayAnimation", ɵɵpureFunction0(21, _c9));
    ɵɵattribute("data-pc-section", "root")("data-pc-name", "contextmenu")("id", ctx_r1.id);
    ɵɵadvance(2);
    ɵɵproperty("root", true)("items", ctx_r1.processedItems)("itemTemplate", ctx_r1.itemTemplate)("menuId", ctx_r1.id)("tabindex", !ctx_r1.disabled ? ctx_r1.tabindex : -1)("ariaLabel", ctx_r1.ariaLabel)("ariaLabelledBy", ctx_r1.ariaLabelledBy)("baseZIndex", ctx_r1.baseZIndex)("autoZIndex", ctx_r1.autoZIndex)("visible", ctx_r1.submenuVisible())("focusedItemId", ctx_r1.focused ? ctx_r1.focusedItemId : void 0)("activeItemPath", ctx_r1.activeItemPath());
  }
}
var _ContextMenuSub = class _ContextMenuSub {
  constructor(document, el, renderer, cd, contextMenu, ref) {
    __publicField(this, "document");
    __publicField(this, "el");
    __publicField(this, "renderer");
    __publicField(this, "cd");
    __publicField(this, "contextMenu");
    __publicField(this, "ref");
    __publicField(this, "visible", false);
    __publicField(this, "items");
    __publicField(this, "itemTemplate");
    __publicField(this, "root", false);
    __publicField(this, "autoZIndex", true);
    __publicField(this, "baseZIndex", 0);
    __publicField(this, "popup");
    __publicField(this, "menuId");
    __publicField(this, "ariaLabel");
    __publicField(this, "ariaLabelledBy");
    __publicField(this, "level", 0);
    __publicField(this, "focusedItemId");
    __publicField(this, "activeItemPath");
    __publicField(this, "tabindex", 0);
    __publicField(this, "itemClick", new EventEmitter());
    __publicField(this, "itemMouseEnter", new EventEmitter());
    __publicField(this, "menuFocus", new EventEmitter());
    __publicField(this, "menuBlur", new EventEmitter());
    __publicField(this, "menuKeydown", new EventEmitter());
    __publicField(this, "sublistViewChild");
    this.document = document;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.contextMenu = contextMenu;
    this.ref = ref;
  }
  getItemProp(processedItem, name, params = null) {
    return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : void 0;
  }
  getItemId(processedItem) {
    var _a;
    return processedItem.item && ((_a = processedItem.item) == null ? void 0 : _a.id) ? processedItem.item.id : "".concat(this.menuId, "_").concat(processedItem.key);
  }
  getItemKey(processedItem) {
    return this.getItemId(processedItem);
  }
  getItemClass(processedItem) {
    return __spreadProps(__spreadValues({}, this.getItemProp(processedItem, "class")), {
      "p-menuitem": true,
      "p-highlight": this.isItemActive(processedItem),
      "p-menuitem-active": this.isItemActive(processedItem),
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
  getAriaSetSize() {
    return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, "separator")).length;
  }
  getAriaPosInset(index) {
    return index - this.items.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, "separator")).length + 1;
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemActive(processedItem) {
    if (this.activeItemPath) {
      return this.activeItemPath.some((path) => path.key === processedItem.key);
    }
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
  onEnter(event, sublist) {
    if (event.fromState === "void" && event.toState) {
      const sublist2 = event.element;
      this.position(sublist2);
    }
  }
  position(sublist) {
    const parentItem = sublist.parentElement.parentElement;
    const containerOffset = DomHandler.getOffset(sublist.parentElement.parentElement);
    const viewport = DomHandler.getViewport();
    const sublistWidth = sublist.offsetParent ? sublist.offsetWidth : DomHandler.getHiddenElementOuterWidth(sublist);
    const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);
    sublist.style.top = "0px";
    if (parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - DomHandler.calculateScrollbarWidth()) {
      sublist.style.left = -1 * sublistWidth + "px";
    } else {
      sublist.style.left = itemOuterWidth + "px";
    }
  }
};
__publicField(_ContextMenuSub, "ɵfac", function ContextMenuSub_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContextMenuSub)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(forwardRef(() => ContextMenu)), ɵɵdirectiveInject(ViewContainerRef));
});
__publicField(_ContextMenuSub, "ɵcmp", ɵɵdefineComponent({
  type: _ContextMenuSub,
  selectors: [["p-contextMenuSub"]],
  viewQuery: function ContextMenuSub_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sublistViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    visible: [2, "visible", "visible", booleanAttribute],
    items: "items",
    itemTemplate: "itemTemplate",
    root: [2, "root", "root", booleanAttribute],
    autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
    baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
    popup: [2, "popup", "popup", booleanAttribute],
    menuId: "menuId",
    ariaLabel: "ariaLabel",
    ariaLabelledBy: "ariaLabelledBy",
    level: [2, "level", "level", numberAttribute],
    focusedItemId: "focusedItemId",
    activeItemPath: "activeItemPath",
    tabindex: [2, "tabindex", "tabindex", numberAttribute]
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
  consts: [["sublist", ""], ["listItem", ""], ["htmlLabel", ""], ["role", "menu", 3, "ngClass", "tabindex", "keydown", "focus", "blur", 4, "ngIf"], ["role", "menu", 3, "keydown", "focus", "blur", "ngClass", "tabindex"], ["ngFor", "", 3, "ngForOf"], ["role", "separator", 3, "ngStyle", "ngClass", 4, "ngIf"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "class", "tooltipOptions", 4, "ngIf"], ["role", "separator", 3, "ngStyle", "ngClass"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "tooltipOptions"], [1, "p-menuitem-content", 3, "click", "mouseenter"], [4, "ngIf"], [3, "items", "itemTemplate", "menuId", "visible", "activeItemPath", "focusedItemId", "level", "itemClick", "itemMouseEnter", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass"], [3, "data-pc-section"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "itemClick", "itemMouseEnter", "items", "itemTemplate", "menuId", "visible", "activeItemPath", "focusedItemId", "level"]],
  template: function ContextMenuSub_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ContextMenuSub_ul_0_Template, 3, 13, "ul", 3);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.root ? true : ctx.visible);
    }
  },
  dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Ripple, Tooltip, AngleRightIcon, _ContextMenuSub],
  encapsulation: 2,
  data: {
    animation: [trigger("overlayAnimation", [transition(":enter", [style({
      opacity: 0
    })]), transition(":leave", [style({
      opacity: 0
    })])])]
  }
}));
var ContextMenuSub = _ContextMenuSub;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuSub, [{
    type: Component,
    args: [{
      selector: "p-contextMenuSub",
      template: '\n        <ul\n            *ngIf="root ? true : visible"\n            #sublist\n            role="menu"\n            [ngClass]="{ \'p-submenu-list\': !root, \'p-contextmenu-root-list\': root }"\n            [@overlayAnimation]="visible"\n            (@overlayAnimation.start)="onEnter($event, sublist)"\n            [attr.id]="menuId + \'_list\'"\n            [tabindex]="tabindex"\n            [attr.aria-label]="ariaLabel"\n            [attr.aria-labelledBy]="ariaLabelledBy"\n            [attr.aria-activedescendant]="focusedItemId"\n            [attr.aria-orientation]="\'vertical\'"\n            [attr.data-pc-section]="\'menu\'"\n            (keydown)="menuKeydown.emit($event)"\n            (focus)="menuFocus.emit($event)"\n            (blur)="menuBlur.emit($event)"\n        >\n            <ng-template ngFor let-processedItem [ngForOf]="items" let-index="index">\n                <li\n                    *ngIf="isItemVisible(processedItem) && getItemProp(processedItem, \'separator\')"\n                    [attr.id]="getItemId(processedItem)"\n                    [ngStyle]="getItemProp(processedItem, \'style\')"\n                    [ngClass]="getSeparatorItemClass(processedItem)"\n                    role="separator"\n                    [attr.data-pc-section]="\'separator\'"\n                ></li>\n                <li\n                    #listItem\n                    *ngIf="isItemVisible(processedItem) && !getItemProp(processedItem, \'separator\')"\n                    role="menuitem"\n                    [attr.id]="getItemId(processedItem)"\n                    [attr.data-pc-section]="\'menuitem\'"\n                    [attr.data-p-highlight]="isItemActive(processedItem)"\n                    [attr.data-p-focused]="isItemFocused(processedItem)"\n                    [attr.data-p-disabled]="isItemDisabled(processedItem)"\n                    [attr.aria-label]="getItemLabel(processedItem)"\n                    [attr.aria-disabled]="isItemDisabled(processedItem) || undefined"\n                    [attr.aria-haspopup]="isItemGroup(processedItem) && !getItemProp(processedItem, \'to\') ? \'menu\' : undefined"\n                    [attr.aria-expanded]="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"\n                    [attr.aria-level]="level + 1"\n                    [attr.aria-setsize]="getAriaSetSize()"\n                    [attr.aria-posinset]="getAriaPosInset(index)"\n                    [ngStyle]="getItemProp(processedItem, \'style\')"\n                    [ngClass]="getItemClass(processedItem)"\n                    [class]="getItemProp(processedItem, \'styleClass\')"\n                    pTooltip\n                    [tooltipOptions]="getItemProp(processedItem, \'tooltipOptions\')"\n                >\n                    <div [attr.data-pc-section]="\'content\'" class="p-menuitem-content" (click)="onItemClick($event, processedItem)" (mouseenter)="onItemMouseEnter({ $event, processedItem })">\n                        <ng-container *ngIf="!itemTemplate">\n                            <a\n                                *ngIf="!getItemProp(processedItem, \'routerLink\')"\n                                [attr.href]="getItemProp(processedItem, \'url\')"\n                                [attr.data-automationid]="getItemProp(processedItem, \'automationId\')"\n                                [attr.data-pc-section]="\'action\'"\n                                [target]="getItemProp(processedItem, \'target\')"\n                                [ngClass]="{ \'p-menuitem-link\': true }"\n                                [attr.tabindex]="-1"\n                                pRipple\n                            >\n                                <span\n                                    *ngIf="getItemProp(processedItem, \'icon\')"\n                                    class="p-menuitem-icon"\n                                    [ngClass]="getItemProp(processedItem, \'icon\')"\n                                    [ngStyle]="getItemProp(processedItem, \'iconStyle\')"\n                                    [attr.data-pc-section]="\'icon\'"\n                                    [attr.tabindex]="-1"\n                                >\n                                </span>\n                                <span *ngIf="getItemProp(processedItem, \'escape\'); else htmlLabel" class="p-menuitem-text" [attr.data-pc-section]="\'label\'">\n                                    {{ getItemLabel(processedItem) }}\n                                </span>\n                                <ng-template #htmlLabel>\n                                    <span class="p-menuitem-text" [innerHTML]="getItemLabel(processedItem)" [attr.data-pc-section]="\'label\'"></span>\n                                </ng-template>\n                                <span class="p-menuitem-badge" *ngIf="getItemProp(processedItem, \'badge\')" [ngClass]="getItemProp(processedItem, \'badgeStyleClass\')">{{ getItemProp(processedItem, \'badge\') }}</span>\n\n                                <ng-container *ngIf="isItemGroup(processedItem)">\n                                    <AngleRightIcon *ngIf="!contextMenu.submenuIconTemplate" [styleClass]="\'p-submenu-icon\'" [attr.data-pc-section]="\'submenuicon\'" />\n                                    <ng-template *ngTemplateOutlet="contextMenu.submenuIconTemplate" [attr.data-pc-section]="\'submenuicon\'"></ng-template>\n                                </ng-container>\n                            </a>\n                            <a\n                                *ngIf="getItemProp(processedItem, \'routerLink\')"\n                                [routerLink]="getItemProp(processedItem, \'routerLink\')"\n                                [attr.data-automationid]="getItemProp(processedItem, \'automationId\')"\n                                [attr.tabindex]="-1"\n                                [attr.data-pc-section]="\'action\'"\n                                [queryParams]="getItemProp(processedItem, \'queryParams\')"\n                                [routerLinkActive]="\'p-menuitem-link-active\'"\n                                [routerLinkActiveOptions]="getItemProp(processedItem, \'routerLinkActiveOptions\') || { exact: false }"\n                                [target]="getItemProp(processedItem, \'target\')"\n                                [ngClass]="{ \'p-menuitem-link\': true, \'p-disabled\': getItemProp(processedItem, \'disabled\') }"\n                                [fragment]="getItemProp(processedItem, \'fragment\')"\n                                [queryParamsHandling]="getItemProp(processedItem, \'queryParamsHandling\')"\n                                [preserveFragment]="getItemProp(processedItem, \'preserveFragment\')"\n                                [skipLocationChange]="getItemProp(processedItem, \'skipLocationChange\')"\n                                [replaceUrl]="getItemProp(processedItem, \'replaceUrl\')"\n                                [state]="getItemProp(processedItem, \'state\')"\n                                pRipple\n                            >\n                                <span\n                                    *ngIf="getItemProp(processedItem, \'icon\')"\n                                    class="p-menuitem-icon"\n                                    [ngClass]="getItemProp(processedItem, \'icon\')"\n                                    [ngStyle]="getItemProp(processedItem, \'iconStyle\')"\n                                    [attr.data-pc-section]="\'icon\'"\n                                    [attr.tabindex]="-1"\n                                >\n                                </span>\n                                <span *ngIf="getItemProp(processedItem, \'escape\'); else htmlLabel" class="p-menuitem-text" [attr.data-pc-section]="\'label\'">\n                                    {{ getItemLabel(processedItem) }}\n                                </span>\n                                <ng-template #htmlLabel>\n                                    <span class="p-menuitem-text" [innerHTML]="getItemLabel(processedItem)" [attr.data-pc-section]="\'label\'"></span>\n                                </ng-template>\n                                <span class="p-menuitem-badge" *ngIf="getItemProp(processedItem, \'badge\')" [ngClass]="getItemProp(processedItem, \'badgeStyleClass\')">{{ getItemProp(processedItem, \'badge\') }}</span>\n\n                                <ng-container *ngIf="isItemGroup(processedItem)">\n                                    <AngleRightIcon *ngIf="!contextMenu.submenuIconTemplate" [styleClass]="\'p-submenu-icon\'" [attr.data-pc-section]="\'submenuicon\'" />\n                                    <ng-template *ngTemplateOutlet="contextMenu.submenuIconTemplate" [attr.data-pc-section]="\'submenuicon\'"></ng-template>\n                                </ng-container>\n                            </a>\n                        </ng-container>\n                        <ng-container *ngIf="itemTemplate">\n                            <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: processedItem.item }"></ng-template>\n                        </ng-container>\n                    </div>\n\n                    <p-contextMenuSub\n                        *ngIf="isItemVisible(processedItem) && isItemGroup(processedItem)"\n                        [items]="processedItem.items"\n                        [itemTemplate]="itemTemplate"\n                        [menuId]="menuId"\n                        [visible]="isItemActive(processedItem) && isItemGroup(processedItem)"\n                        [activeItemPath]="activeItemPath"\n                        [focusedItemId]="focusedItemId"\n                        [level]="level + 1"\n                        (itemClick)="itemClick.emit($event)"\n                        (itemMouseEnter)="onItemMouseEnter($event)"\n                    ></p-contextMenuSub>\n                </li>\n            </ng-template>\n        </ul>\n    ',
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0
      })]), transition(":leave", [style({
        opacity: 0
      })])])],
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
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
    type: ContextMenu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => ContextMenu)]
    }]
  }, {
    type: ViewContainerRef
  }], {
    visible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    root: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    popup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    activeItemPath: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
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
    sublistViewChild: [{
      type: ViewChild,
      args: ["sublist"]
    }]
  });
})();
var _ContextMenu = class _ContextMenu {
  constructor(document, platformId, el, renderer, cd, config, overlayService) {
    __publicField(this, "document");
    __publicField(this, "platformId");
    __publicField(this, "el");
    __publicField(this, "renderer");
    __publicField(this, "cd");
    __publicField(this, "config");
    __publicField(this, "overlayService");
    /**
     * Event for which the menu must be displayed.
     * @group Props
     */
    __publicField(this, "triggerEvent", "contextmenu");
    /**
     * Local template variable name of the element to attach the context menu.
     * @group Props
     */
    __publicField(this, "target");
    /**
     * Attaches the menu to document instead of a particular item.
     * @group Props
     */
    __publicField(this, "global");
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
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element.
     * @group Props
     */
    __publicField(this, "appendTo");
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
     * Press delay in touch devices as miliseconds.
     * @group Props
     */
    __publicField(this, "pressDelay", 500);
    /**
     * Callback to invoke when overlay menu is shown.
     * @group Emits
     */
    __publicField(this, "onShow", new EventEmitter());
    /**
     * Callback to invoke when overlay menu is hidden.
     * @group Emits
     */
    __publicField(this, "onHide", new EventEmitter());
    __publicField(this, "templates");
    __publicField(this, "rootmenu");
    __publicField(this, "containerViewChild");
    __publicField(this, "submenuIconTemplate");
    __publicField(this, "itemTemplate");
    __publicField(this, "container");
    __publicField(this, "outsideClickListener");
    __publicField(this, "resizeListener");
    __publicField(this, "triggerEventListener");
    __publicField(this, "documentClickListener");
    __publicField(this, "documentTriggerListener");
    __publicField(this, "touchEndListener");
    __publicField(this, "pageX");
    __publicField(this, "pageY");
    __publicField(this, "visible", signal(false));
    __publicField(this, "relativeAlign");
    __publicField(this, "window");
    __publicField(this, "focused", false);
    __publicField(this, "activeItemPath", signal([]));
    __publicField(this, "focusedItemInfo", signal({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    }));
    __publicField(this, "submenuVisible", signal(false));
    __publicField(this, "searchValue", "");
    __publicField(this, "searchTimeout");
    __publicField(this, "_processedItems");
    __publicField(this, "_model");
    __publicField(this, "pressTimer");
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
    this.overlayService = overlayService;
    this.window = this.document.defaultView;
    effect(() => {
      const path = this.activeItemPath();
      if (ObjectUtils.isNotEmpty(path)) {
        this.bindGlobalListeners();
      } else if (!this.visible()) {
        this.unbindGlobalListeners();
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
    const processedItem = this.activeItemPath().find((p) => p.key === this.focusedItemInfo().parentKey);
    return processedItem ? processedItem.items : this.processedItems;
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
    return focusedItem.item && ((_a = focusedItem.item) == null ? void 0 : _a.id) ? focusedItem.item.id : focusedItem.index !== -1 ? "".concat(this.id).concat(ObjectUtils.isNotEmpty(focusedItem.parentKey) ? "_" + focusedItem.parentKey : "", "_").concat(focusedItem.index) : null;
  }
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
    this.bindTriggerEventListener();
  }
  isMobile() {
    return DomHandler.isIOS() || DomHandler.isAndroid();
  }
  bindTriggerEventListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.triggerEventListener) {
        if (!this.isMobile()) {
          if (this.global) {
            this.triggerEventListener = this.renderer.listen(this.document, this.triggerEvent, (event) => {
              this.show(event);
            });
          } else if (this.target) {
            this.triggerEventListener = this.renderer.listen(this.target, this.triggerEvent, (event) => {
              this.show(event);
            });
          }
        } else {
          if (this.global) {
            this.triggerEventListener = this.renderer.listen(this.document, "touchstart", this.onTouchStart.bind(this));
            this.touchEndListener = this.renderer.listen(this.document, "touchend", this.onTouchEnd.bind(this));
          } else if (this.target) {
            this.triggerEventListener = this.renderer.listen(this.target, "touchstart", this.onTouchStart.bind(this));
            this.touchEndListener = this.renderer.listen(this.target, "touchend", this.onTouchEnd.bind(this));
          }
        }
      }
    }
  }
  bindGlobalListeners() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentClickListener) {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
        this.documentClickListener = this.renderer.listen(documentTarget, "click", (event) => {
          if (this.containerViewChild.nativeElement.offsetParent && this.isOutsideClicked(event) && !event.ctrlKey && event.button !== 2 && this.triggerEvent !== "click") {
            this.hide();
          }
        });
        this.documentTriggerListener = this.renderer.listen(documentTarget, this.triggerEvent, (event) => {
          if (this.containerViewChild.nativeElement.offsetParent && this.isOutsideClicked(event)) {
            this.hide();
          }
        });
      }
      if (!this.resizeListener) {
        this.resizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
          this.hide();
        });
      }
    }
  }
  ngAfterContentInit() {
    var _a;
    (_a = this.templates) == null ? void 0 : _a.forEach((item) => {
      switch (item.getType()) {
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
  createProcessedItems(items, level = 0, parent = {}, parentKey = "") {
    const processedItems = [];
    items && items.forEach((item, index) => {
      const key = (parentKey !== "" ? parentKey + "_" : "") + index;
      const newItem = {
        item,
        index,
        level,
        key,
        parent,
        parentKey
      };
      newItem["items"] = this.createProcessedItems(item.items, level + 1, newItem, key);
      processedItems.push(newItem);
    });
    return processedItems;
  }
  getItemProp(item, name) {
    return item ? ObjectUtils.getItemValue(item[name]) : void 0;
  }
  getProccessedItemLabel(processedItem) {
    return processedItem ? this.getItemLabel(processedItem.item) : void 0;
  }
  getItemLabel(item) {
    return this.getItemProp(item, "label");
  }
  isProcessedItemGroup(processedItem) {
    return processedItem && ObjectUtils.isNotEmpty(processedItem.items);
  }
  isSelected(processedItem) {
    return this.activeItemPath().some((p) => p.key === processedItem.key);
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
  onItemClick(event) {
    const {
      processedItem
    } = event;
    const grouped = this.isProcessedItemGroup(processedItem);
    const selected = this.isSelected(processedItem);
    if (selected) {
      const {
        index,
        key,
        level,
        parentKey,
        item
      } = processedItem;
      this.activeItemPath.set(this.activeItemPath().filter((p) => key !== p.key && key.startsWith(p.key)));
      this.focusedItemInfo.set({
        index,
        level,
        parentKey,
        item
      });
      DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
    } else {
      grouped ? this.onItemChange(event) : this.hide();
    }
  }
  onItemMouseEnter(event) {
    this.onItemChange(event);
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
  onArrowDownKey(event) {
    const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
    this.changeFocusedItemIndex(event, itemIndex);
    event.preventDefault();
  }
  onArrowRightKey(event) {
    const processedItem = this.visibleItems[this.focusedItemInfo().index];
    const grouped = this.isProccessedItemGroup(processedItem);
    if (grouped) {
      this.onItemChange({
        originalEvent: event,
        processedItem
      });
      this.focusedItemInfo.set({
        index: -1,
        parentKey: processedItem.key,
        item: processedItem.item
      });
      this.searchValue = "";
      this.onArrowDownKey(event);
    }
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey) {
      if (this.focusedItemInfo().index !== -1) {
        const processedItem = this.visibleItems[this.focusedItemInfo().index];
        const grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.onItemChange({
          originalEvent: event,
          processedItem
        });
      }
      this.hide();
      event.preventDefault();
    } else {
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
      this.changeFocusedItemIndex(event, itemIndex);
      event.preventDefault();
    }
  }
  onArrowLeftKey(event) {
    const processedItem = this.visibleItems[this.focusedItemInfo().index];
    const parentItem = this.activeItemPath().find((p) => p.key === processedItem.parentKey);
    const root = ObjectUtils.isEmpty(processedItem.parent);
    if (!root) {
      this.focusedItemInfo.set({
        index: -1,
        parentKey: parentItem ? parentItem.parentKey : "",
        item: processedItem.item
      });
      this.searchValue = "";
      this.onArrowDownKey(event);
    }
    const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== this.focusedItemInfo().parentKey);
    this.activeItemPath.set(activeItemPath);
    event.preventDefault();
  }
  onHomeKey(event) {
    this.changeFocusedItemIndex(event, this.findFirstItemIndex());
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedItemIndex(event, this.findLastItemIndex());
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  onEscapeKey(event) {
    this.hide();
    const processedItem = this.findVisibleItem(this.findFirstFocusedItemIndex());
    const focusedItemInfo = this.focusedItemInfo();
    this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
      index: this.findFirstFocusedItemIndex(),
      item: processedItem.item
    }));
    event.preventDefault();
  }
  onTabKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const grouped = this.isProccessedItemGroup(processedItem);
      !grouped && this.onItemChange({
        originalEvent: event,
        processedItem
      });
    }
    this.hide();
  }
  onEnterKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const element = DomHandler.findSingle(this.rootmenu.el.nativeElement, 'li[id="'.concat("".concat(this.focusedItemId), '"]'));
      const anchorElement = element && DomHandler.findSingle(element, 'a[data-pc-section="action"]');
      anchorElement ? anchorElement.click() : element && element.click();
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const grouped = this.isProccessedItemGroup(processedItem);
      if (!grouped) {
        const focusedItemInfo = this.focusedItemInfo();
        this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
          index: this.findFirstFocusedItemIndex()
        }));
      }
    }
    event.preventDefault();
  }
  onItemChange(event) {
    const {
      processedItem,
      isFocus
    } = event;
    if (ObjectUtils.isEmpty(processedItem)) return;
    const {
      index,
      key,
      level,
      parentKey,
      items
    } = processedItem;
    const grouped = ObjectUtils.isNotEmpty(items);
    const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== parentKey && p.parentKey !== key);
    if (grouped) {
      activeItemPath.push(processedItem);
      this.submenuVisible.set(true);
    }
    this.focusedItemInfo.set({
      index,
      level,
      parentKey,
      item: processedItem.item
    });
    this.activeItemPath.set(activeItemPath);
    isFocus && DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
  }
  onMenuFocus(event) {
    this.focused = true;
    const focusedItemInfo = this.focusedItemInfo().index !== -1 ? this.focusedItemInfo() : {
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    };
    this.focusedItemInfo.set(focusedItemInfo);
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
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.container = event.element;
        this.position();
        this.moveOnTop();
        this.appendOverlay();
        this.bindGlobalListeners();
        DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
        break;
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.onOverlayHide();
        break;
    }
  }
  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.containerViewChild.nativeElement);
      else DomHandler.appendChild(this.containerViewChild.nativeElement, this.appendTo);
    }
  }
  moveOnTop() {
    if (this.autoZIndex && this.containerViewChild) {
      zindexutils.set("menu", this.containerViewChild.nativeElement, this.baseZIndex + this.config.zIndex.menu);
    }
  }
  onOverlayHide() {
    this.unbindGlobalListeners();
    if (!this.cd.destroyed) {
      this.target = null;
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.container = null;
  }
  onTouchStart(event) {
    this.pressTimer = setTimeout(() => {
      this.show(event);
    }, this.pressDelay);
  }
  onTouchEnd() {
    clearTimeout(this.pressTimer);
  }
  hide() {
    this.visible.set(false);
    this.onHide.emit();
    this.activeItemPath.set([]);
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    });
  }
  toggle(event) {
    this.visible() ? this.hide() : this.show(event);
  }
  show(event) {
    this.activeItemPath.set([]);
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    });
    this.pageX = event.pageX;
    this.pageY = event.pageY;
    this.onShow.emit();
    this.visible() ? this.position() : this.visible.set(true);
    event.stopPropagation();
    event.preventDefault();
  }
  position() {
    let left = this.pageX + 1;
    let top = this.pageY + 1;
    let width = this.containerViewChild.nativeElement.offsetParent ? this.containerViewChild.nativeElement.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.containerViewChild.nativeElement);
    let height = this.containerViewChild.nativeElement.offsetParent ? this.containerViewChild.nativeElement.offsetHeight : DomHandler.getHiddenElementOuterHeight(this.containerViewChild.nativeElement);
    let viewport = DomHandler.getViewport();
    if (left + width - this.document.scrollingElement.scrollLeft > viewport.width) {
      left -= width;
    }
    if (top + height - this.document.scrollingElement.scrollTop > viewport.height) {
      top -= height;
    }
    if (left < this.document.scrollingElement.scrollLeft) {
      left = this.document.scrollingElement.scrollLeft;
    }
    if (top < this.document.scrollingElement.scrollTop) {
      top = this.document.scrollingElement.scrollTop;
    }
    this.containerViewChild.nativeElement.style.left = left + "px";
    this.containerViewChild.nativeElement.style.top = top + "px";
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
      this.changeFocusedItemIndex(event, itemIndex);
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
  changeFocusedItemIndex(event, index) {
    const processedItem = this.findVisibleItem(index);
    const focusedItemInfo = this.focusedItemInfo();
    if (focusedItemInfo.index !== index) {
      this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
        index,
        item: processedItem.item
      }));
      this.scrollInView();
    }
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? "".concat(this.id, "_").concat(index) : this.focusedItemId;
    const element = DomHandler.findSingle(this.rootmenu.el.nativeElement, 'li[id="'.concat(id, '"]'));
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) {
        this.resizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
          this.hide();
        });
      }
    }
  }
  isOutsideClicked(event) {
    return !(this.containerViewChild.nativeElement.isSameNode(event.target) || this.containerViewChild.nativeElement.contains(event.target));
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  unbindGlobalListeners() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
    if (this.documentTriggerListener) {
      this.documentTriggerListener();
      this.documentTriggerListener = null;
    }
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
    if (this.touchEndListener) {
      this.touchEndListener();
      this.touchEndListener = null;
    }
  }
  unbindTriggerEventListener() {
    if (this.triggerEventListener) {
      this.triggerEventListener();
      this.triggerEventListener = null;
    }
  }
  removeAppendedElements() {
    if (this.appendTo && this.containerViewChild) {
      if (this.appendTo === "body") {
        this.renderer.removeChild(this.document.body, this.containerViewChild.nativeElement);
      } else {
        DomHandler.removeChild(this.containerViewChild.nativeElement, this.appendTo);
      }
    }
  }
  ngOnDestroy() {
    this.unbindGlobalListeners();
    this.unbindTriggerEventListener();
    this.removeAppendedElements();
  }
};
__publicField(_ContextMenu, "ɵfac", function ContextMenu_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContextMenu)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(OverlayService));
});
__publicField(_ContextMenu, "ɵcmp", ɵɵdefineComponent({
  type: _ContextMenu,
  selectors: [["p-contextMenu"]],
  contentQueries: function ContextMenu_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function ContextMenu_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c6, 5);
      ɵɵviewQuery(_c7, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rootmenu = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    model: "model",
    triggerEvent: "triggerEvent",
    target: "target",
    global: [2, "global", "global", booleanAttribute],
    style: "style",
    styleClass: "styleClass",
    appendTo: "appendTo",
    autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
    baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
    id: "id",
    ariaLabel: "ariaLabel",
    ariaLabelledBy: "ariaLabelledBy",
    pressDelay: [2, "pressDelay", "pressDelay", numberAttribute]
  },
  outputs: {
    onShow: "onShow",
    onHide: "onHide"
  },
  features: [ɵɵInputTransformsFeature],
  decls: 1,
  vars: 1,
  consts: [["container", ""], ["rootmenu", ""], [3, "ngClass", "class", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"], [3, "itemClick", "menuFocus", "menuBlur", "menuKeydown", "itemMouseEnter", "root", "items", "itemTemplate", "menuId", "tabindex", "ariaLabel", "ariaLabelledBy", "baseZIndex", "autoZIndex", "visible", "focusedItemId", "activeItemPath"]],
  template: function ContextMenu_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ContextMenu_div_0_Template, 4, 22, "div", 2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.visible());
    }
  },
  dependencies: [NgClass, NgIf, NgStyle, ContextMenuSub],
  styles: ["@layer primeng{.p-contextmenu{position:absolute}.p-contextmenu ul{margin:0;padding:0;list-style:none}.p-contextmenu .p-submenu-list{position:absolute;min-width:100%;z-index:1}.p-contextmenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-contextmenu .p-menuitem-text{line-height:1}.p-contextmenu .p-menuitem{position:relative}.p-contextmenu .p-menuitem-link .p-submenu-icon:not(svg){margin-left:auto}.p-contextmenu .p-menuitem-link .p-icon-wrapper{margin-left:auto}}\n"],
  encapsulation: 2,
  data: {
    animation: [trigger("overlayAnimation", [transition(":enter", [style({
      opacity: 0
    }), animate("250ms")]), transition(":leave", [animate(".1s linear", style({
      opacity: 0
    }))])])]
  },
  changeDetection: 0
}));
var ContextMenu = _ContextMenu;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenu, [{
    type: Component,
    args: [{
      selector: "p-contextMenu",
      template: '\n        <div\n            #container\n            [attr.data-pc-section]="\'root\'"\n            [attr.data-pc-name]="\'contextmenu\'"\n            [attr.id]="id"\n            [ngClass]="{ \'p-contextmenu p-component\': true, \'p-contextmenu-overlay\': true }"\n            [class]="styleClass"\n            [ngStyle]="style"\n            [@overlayAnimation]="{ value: \'visible\' }"\n            (@overlayAnimation.start)="onOverlayAnimationStart($event)"\n            (@overlayAnimation.done)="onOverlayAnimationEnd($event)"\n            *ngIf="visible()"\n        >\n            <p-contextMenuSub\n                #rootmenu\n                [root]="true"\n                [items]="processedItems"\n                [itemTemplate]="itemTemplate"\n                [menuId]="id"\n                [tabindex]="!disabled ? tabindex : -1"\n                [ariaLabel]="ariaLabel"\n                [ariaLabelledBy]="ariaLabelledBy"\n                [baseZIndex]="baseZIndex"\n                [autoZIndex]="autoZIndex"\n                [visible]="submenuVisible()"\n                [focusedItemId]="focused ? focusedItemId : undefined"\n                [activeItemPath]="activeItemPath()"\n                (itemClick)="onItemClick($event)"\n                (menuFocus)="onMenuFocus($event)"\n                (menuBlur)="onMenuBlur($event)"\n                (menuKeydown)="onKeyDown($event)"\n                (itemMouseEnter)="onItemMouseEnter($event)"\n            ></p-contextMenuSub>\n        </div>\n    ',
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0
      }), animate("250ms")]), transition(":leave", [animate(".1s linear", style({
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-contextmenu{position:absolute}.p-contextmenu ul{margin:0;padding:0;list-style:none}.p-contextmenu .p-submenu-list{position:absolute;min-width:100%;z-index:1}.p-contextmenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-contextmenu .p-menuitem-text{line-height:1}.p-contextmenu .p-menuitem{position:relative}.p-contextmenu .p-menuitem-link .p-submenu-icon:not(svg){margin-left:auto}.p-contextmenu .p-menuitem-link .p-icon-wrapper{margin-left:auto}}\n"]
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
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }, {
    type: OverlayService
  }], {
    model: [{
      type: Input
    }],
    triggerEvent: [{
      type: Input
    }],
    target: [{
      type: Input
    }],
    global: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    appendTo: [{
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
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    pressDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    rootmenu: [{
      type: ViewChild,
      args: ["rootmenu"]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }]
  });
})();
var _ContextMenuModule = class _ContextMenuModule {
};
__publicField(_ContextMenuModule, "ɵfac", function ContextMenuModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContextMenuModule)();
});
__publicField(_ContextMenuModule, "ɵmod", ɵɵdefineNgModule({
  type: _ContextMenuModule,
  declarations: [ContextMenu, ContextMenuSub],
  imports: [CommonModule, RouterModule, RippleModule, TooltipModule, AngleRightIcon, SharedModule],
  exports: [ContextMenu, RouterModule, TooltipModule, SharedModule]
}));
__publicField(_ContextMenuModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, RouterModule, RippleModule, TooltipModule, AngleRightIcon, SharedModule, RouterModule, TooltipModule, SharedModule]
}));
var ContextMenuModule = _ContextMenuModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, RippleModule, TooltipModule, AngleRightIcon, SharedModule],
      exports: [ContextMenu, RouterModule, TooltipModule, SharedModule],
      declarations: [ContextMenu, ContextMenuSub]
    }]
  }], null, null);
})();
export {
  ContextMenu,
  ContextMenuModule,
  ContextMenuSub
};
//# sourceMappingURL=primeng_contextmenu.js.map
