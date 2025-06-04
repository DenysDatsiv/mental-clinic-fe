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
import {
  ConnectedOverlayScrollHandler,
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
  input,
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
import {
  __publicField,
  __spreadProps,
  __spreadValues
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-tieredmenu.mjs
var _c0 = ["sublist"];
var _c1 = (a0, a1) => ({
  "p-submenu-list": a0,
  "p-tieredmenu-root-list": a1
});
var _c2 = (a0) => ({
  "p-menuitem-link": true,
  "p-disabled": a0
});
var _c3 = () => ({
  exact: false
});
var _c4 = (a0, a1) => ({
  $implicit: a0,
  hasSubmenu: a1
});
function TieredMenuSub_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 7);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r2.getItemProp(processedItem_r2, "style"))("ngClass", ctx_r2.getSeparatorItemClass(processedItem_r2));
    ɵɵattribute("id", ctx_r2.getItemId(processedItem_r2))("data-pc-section", "separator");
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.getItemProp(processedItem_r2, "icon"))("ngStyle", ctx_r2.getItemProp(processedItem_r2, "iconStyle"));
    ɵɵattribute("data-pc-section", "icon")("tabindex", -1);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getItemLabel(processedItem_r2), " ");
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r2.getItemLabel(processedItem_r2), ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "label");
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.getItemProp(processedItem_r2, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(processedItem_r2, "badge"));
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_AngleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 24);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 25);
  }
  if (rf & 2) {
    ɵɵproperty("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_AngleRightIcon_1_Template, 1, 3, "AngleRightIcon", 22)(2, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template, 1, 2, null, 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.tieredMenu.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.tieredMenu.submenuIconTemplate);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 14);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_1_Template, 1, 4, "span", 15)(2, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_2_Template, 2, 2, "span", 16)(3, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template, 1, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_5_Template, 2, 2, "span", 17)(6, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template, 3, 2, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r5 = ɵɵreference(4);
    const processedItem_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("target", ctx_r2.getItemProp(processedItem_r2, "target"))("ngClass", ɵɵpureFunction1(11, _c2, ctx_r2.getItemProp(processedItem_r2, "disabled")));
    ɵɵattribute("href", ctx_r2.getItemProp(processedItem_r2, "url"), ɵɵsanitizeUrl)("data-automationid", ctx_r2.getItemProp(processedItem_r2, "automationId"))("data-pc-section", "action")("tabindex", -1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "escape"))("ngIfElse", htmlLabel_r5);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemGroup(processedItem_r2));
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.getItemProp(processedItem_r2, "icon"))("ngStyle", ctx_r2.getItemProp(processedItem_r2, "iconStyle"));
    ɵɵattribute("data-pc-section", "icon")("aria-hidden", true)("tabindex", -1);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getItemLabel(processedItem_r2), " ");
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r2.getItemLabel(processedItem_r2), ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "label");
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.getItemProp(processedItem_r2, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(processedItem_r2, "badge"));
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_AngleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 24);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 25);
  }
  if (rf & 2) {
    ɵɵproperty("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_AngleRightIcon_1_Template, 1, 3, "AngleRightIcon", 22)(2, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template, 1, 2, null, 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.tieredMenu.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.tieredMenu.submenuIconTemplate);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 26);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_1_Template, 1, 5, "span", 15)(2, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_2_Template, 2, 2, "span", 16)(3, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template, 1, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_5_Template, 2, 2, "span", 17)(6, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template, 3, 2, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r6 = ɵɵreference(4);
    const processedItem_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("routerLink", ctx_r2.getItemProp(processedItem_r2, "routerLink"))("queryParams", ctx_r2.getItemProp(processedItem_r2, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r2.getItemProp(processedItem_r2, "routerLinkActiveOptions") || ɵɵpureFunction0(20, _c3))("target", ctx_r2.getItemProp(processedItem_r2, "target"))("ngClass", ɵɵpureFunction1(21, _c2, ctx_r2.getItemProp(processedItem_r2, "disabled")))("fragment", ctx_r2.getItemProp(processedItem_r2, "fragment"))("queryParamsHandling", ctx_r2.getItemProp(processedItem_r2, "queryParamsHandling"))("preserveFragment", ctx_r2.getItemProp(processedItem_r2, "preserveFragment"))("skipLocationChange", ctx_r2.getItemProp(processedItem_r2, "skipLocationChange"))("replaceUrl", ctx_r2.getItemProp(processedItem_r2, "replaceUrl"))("state", ctx_r2.getItemProp(processedItem_r2, "state"));
    ɵɵattribute("data-automationid", ctx_r2.getItemProp(processedItem_r2, "automationId"))("tabindex", -1)("data-pc-section", "action");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "escape"))("ngIfElse", htmlLabel_r6);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemGroup(processedItem_r2));
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_Template, 7, 13, "a", 12)(2, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_Template, 7, 23, "a", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.getItemProp(processedItem_r2, "routerLink"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "routerLink"));
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template(rf, ctx) {
}
function TieredMenuSub_ng_template_2_li_1_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TieredMenuSub_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_4_1_Template, 1, 0, null, 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c4, processedItem_r2.item, ctx_r2.getItemProp(processedItem_r2, "items")));
  }
}
function TieredMenuSub_ng_template_2_li_1_p_tieredMenuSub_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-tieredMenuSub", 28);
    ɵɵlistener("itemClick", function TieredMenuSub_ng_template_2_li_1_p_tieredMenuSub_5_Template_p_tieredMenuSub_itemClick_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.itemClick.emit($event));
    })("itemMouseEnter", function TieredMenuSub_ng_template_2_li_1_p_tieredMenuSub_5_Template_p_tieredMenuSub_itemMouseEnter_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onItemMouseEnter($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("items", processedItem_r2.items)("itemTemplate", ctx_r2.itemTemplate)("autoDisplay", ctx_r2.autoDisplay)("menuId", ctx_r2.menuId)("activeItemPath", ctx_r2.activeItemPath())("focusedItemId", ctx_r2.focusedItemId)("ariaLabelledBy", ctx_r2.getItemId(processedItem_r2))("level", ctx_r2.level + 1);
  }
}
function TieredMenuSub_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 8, 1)(2, "div", 9);
    ɵɵlistener("click", function TieredMenuSub_ng_template_2_li_1_Template_div_click_2_listener($event) {
      ɵɵrestoreView(_r4);
      const processedItem_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemClick($event, processedItem_r2));
    })("mouseenter", function TieredMenuSub_ng_template_2_li_1_Template_div_mouseenter_2_listener($event) {
      ɵɵrestoreView(_r4);
      const processedItem_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemMouseEnter({
        $event,
        processedItem: processedItem_r2
      }));
    });
    ɵɵtemplate(3, TieredMenuSub_ng_template_2_li_1_ng_container_3_Template, 3, 2, "ng-container", 10)(4, TieredMenuSub_ng_template_2_li_1_ng_container_4_Template, 2, 5, "ng-container", 10);
    ɵɵelementEnd();
    ɵɵtemplate(5, TieredMenuSub_ng_template_2_li_1_p_tieredMenuSub_5_Template, 1, 8, "p-tieredMenuSub", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    const processedItem_r2 = ctx_r7.$implicit;
    const index_r9 = ctx_r7.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.getItemProp(processedItem_r2, "styleClass"));
    ɵɵproperty("ngStyle", ctx_r2.getItemProp(processedItem_r2, "style"))("ngClass", ctx_r2.getItemClass(processedItem_r2))("pTooltip", ctx_r2.getItemProp(processedItem_r2, "tooltip"))("tooltipOptions", ctx_r2.getItemProp(processedItem_r2, "tooltipOptions"));
    ɵɵattribute("id", ctx_r2.getItemId(processedItem_r2))("data-pc-section", "menuitem")("data-p-highlight", ctx_r2.isItemActive(processedItem_r2))("data-p-focused", ctx_r2.isItemFocused(processedItem_r2))("data-p-disabled", ctx_r2.isItemDisabled(processedItem_r2))("aria-label", ctx_r2.getItemLabel(processedItem_r2))("aria-disabled", ctx_r2.isItemDisabled(processedItem_r2) || void 0)("aria-haspopup", ctx_r2.isItemGroup(processedItem_r2) && !ctx_r2.getItemProp(processedItem_r2, "to") ? "menu" : void 0)("aria-expanded", ctx_r2.isItemGroup(processedItem_r2) ? ctx_r2.isItemActive(processedItem_r2) : void 0)("aria-setsize", ctx_r2.getAriaSetSize())("aria-posinset", ctx_r2.getAriaPosInset(index_r9));
    ɵɵadvance(2);
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r2) && ctx_r2.isItemGroup(processedItem_r2));
  }
}
function TieredMenuSub_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TieredMenuSub_ng_template_2_li_0_Template, 1, 4, "li", 5)(1, TieredMenuSub_ng_template_2_li_1_Template, 6, 21, "li", 6);
  }
  if (rf & 2) {
    const processedItem_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r2) && ctx_r2.getItemProp(processedItem_r2, "separator"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r2) && !ctx_r2.getItemProp(processedItem_r2, "separator"));
  }
}
var _c5 = ["rootmenu"];
var _c6 = ["container"];
var _c7 = (a0) => ({
  "p-tieredmenu p-component": true,
  "p-tieredmenu-overlay": a0
});
var _c8 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c9 = (a0) => ({
  value: "visible",
  params: a0
});
function TieredMenu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3, 0);
    ɵɵlistener("click", function TieredMenu_div_0_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayClick($event));
    })("@overlayAnimation.start", function TieredMenu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function TieredMenu_div_0_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationEnd($event));
    });
    ɵɵelementStart(2, "p-tieredMenuSub", 4, 1);
    ɵɵlistener("itemClick", function TieredMenu_div_0_Template_p_tieredMenuSub_itemClick_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event));
    })("menuFocus", function TieredMenu_div_0_Template_p_tieredMenuSub_menuFocus_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMenuFocus($event));
    })("menuBlur", function TieredMenu_div_0_Template_p_tieredMenuSub_menuBlur_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMenuBlur($event));
    })("menuKeydown", function TieredMenu_div_0_Template_p_tieredMenuSub_menuKeydown_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKeyDown($event));
    })("itemMouseEnter", function TieredMenu_div_0_Template_p_tieredMenuSub_itemMouseEnter_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemMouseEnter($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("id", ctx_r1.id)("ngClass", ɵɵpureFunction1(22, _c7, ctx_r1.popup))("ngStyle", ctx_r1.style)("@overlayAnimation", ɵɵpureFunction1(27, _c9, ɵɵpureFunction2(24, _c8, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.popup !== true);
    ɵɵattribute("data-pc-section", "root")("data-pc-name", "tieredmenu");
    ɵɵadvance(2);
    ɵɵproperty("root", true)("items", ctx_r1.processedItems)("itemTemplate", ctx_r1.itemTemplate)("menuId", ctx_r1.id)("tabindex", !ctx_r1.disabled ? ctx_r1.tabindex : -1)("ariaLabel", ctx_r1.ariaLabel)("ariaLabelledBy", ctx_r1.ariaLabelledBy)("baseZIndex", ctx_r1.baseZIndex)("autoZIndex", ctx_r1.autoZIndex)("autoDisplay", ctx_r1.autoDisplay)("popup", ctx_r1.popup)("focusedItemId", ctx_r1.focused ? ctx_r1.focusedItemId : void 0)("activeItemPath", ctx_r1.activeItemPath());
  }
}
var _TieredMenuSub = class _TieredMenuSub {
  constructor(el, renderer, tieredMenu) {
    __publicField(this, "el");
    __publicField(this, "renderer");
    __publicField(this, "tieredMenu");
    __publicField(this, "items");
    __publicField(this, "itemTemplate");
    __publicField(this, "root", false);
    __publicField(this, "autoDisplay");
    __publicField(this, "autoZIndex", true);
    __publicField(this, "baseZIndex", 0);
    __publicField(this, "popup");
    __publicField(this, "menuId");
    __publicField(this, "ariaLabel");
    __publicField(this, "ariaLabelledBy");
    __publicField(this, "level", 0);
    __publicField(this, "focusedItemId");
    __publicField(this, "activeItemPath", input([]));
    __publicField(this, "tabindex", 0);
    __publicField(this, "itemClick", new EventEmitter());
    __publicField(this, "itemMouseEnter", new EventEmitter());
    __publicField(this, "menuFocus", new EventEmitter());
    __publicField(this, "menuBlur", new EventEmitter());
    __publicField(this, "menuKeydown", new EventEmitter());
    __publicField(this, "sublistViewChild");
    this.el = el;
    this.renderer = renderer;
    this.tieredMenu = tieredMenu;
    effect(() => {
      const path = this.activeItemPath();
      if (ObjectUtils.isNotEmpty(path)) {
        this.positionSubmenu();
      }
    });
  }
  positionSubmenu() {
    if (isPlatformBrowser(this.tieredMenu.platformId)) {
      const sublist = this.sublistViewChild && this.sublistViewChild.nativeElement;
      if (sublist) {
        const parentItem = sublist.parentElement.parentElement;
        const containerOffset = DomHandler.getOffset(parentItem);
        const viewport = DomHandler.getViewport();
        const sublistWidth = sublist.offsetParent ? sublist.offsetWidth : DomHandler.getOuterWidth(sublist);
        const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);
        const sublistFlippedClass = "p-submenu-list-flipped";
        if (parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - DomHandler.calculateScrollbarWidth()) {
          DomHandler.addClass(sublist, sublistFlippedClass);
        } else if (DomHandler.hasClass(sublist, sublistFlippedClass)) {
          DomHandler.removeClass(sublist, sublistFlippedClass);
        }
      }
    }
  }
  getItemProp(processedItem, name, params = null) {
    return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : void 0;
  }
  getItemId(processedItem) {
    var _a, _b;
    return (_b = (_a = processedItem.item) == null ? void 0 : _a.id) != null ? _b : "".concat(this.menuId, "_").concat(processedItem.key);
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
    return index - this.items.slice(0, index).filter((processedItem) => {
      const isItemVisible = this.isItemVisible(processedItem);
      const isVisibleSeparator = isItemVisible && this.getItemProp(processedItem, "separator");
      return !isItemVisible || isVisibleSeparator;
    }).length + 1;
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemActive(processedItem) {
    if (this.activeItemPath()) {
      return this.activeItemPath().some((path) => path.key === processedItem.key);
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
    if (this.autoDisplay) {
      const {
        event,
        processedItem
      } = param;
      this.itemMouseEnter.emit({
        originalEvent: event,
        processedItem
      });
    }
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
};
__publicField(_TieredMenuSub, "ɵfac", function TieredMenuSub_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TieredMenuSub)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(forwardRef(() => TieredMenu)));
});
__publicField(_TieredMenuSub, "ɵcmp", ɵɵdefineComponent({
  type: _TieredMenuSub,
  selectors: [["p-tieredMenuSub"]],
  viewQuery: function TieredMenuSub_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sublistViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    items: "items",
    itemTemplate: "itemTemplate",
    root: [2, "root", "root", booleanAttribute],
    autoDisplay: [2, "autoDisplay", "autoDisplay", booleanAttribute],
    autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
    baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
    popup: [2, "popup", "popup", booleanAttribute],
    menuId: "menuId",
    ariaLabel: "ariaLabel",
    ariaLabelledBy: "ariaLabelledBy",
    level: [2, "level", "level", numberAttribute],
    focusedItemId: "focusedItemId",
    activeItemPath: [1, "activeItemPath"],
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
  decls: 3,
  vars: 12,
  consts: [["sublist", ""], ["listItem", ""], ["htmlLabel", ""], ["role", "menu", 3, "keydown", "focus", "blur", "ngClass", "id", "tabindex"], ["ngFor", "", 3, "ngForOf"], ["role", "separator", 3, "ngStyle", "ngClass", 4, "ngIf"], ["role", "menuitem", 3, "ngStyle", "ngClass", "class", "pTooltip", "tooltipOptions", 4, "ngIf"], ["role", "separator", 3, "ngStyle", "ngClass"], ["role", "menuitem", 3, "ngStyle", "ngClass", "pTooltip", "tooltipOptions"], [1, "p-menuitem-content", 3, "click", "mouseenter"], [4, "ngIf"], [3, "items", "itemTemplate", "autoDisplay", "menuId", "activeItemPath", "focusedItemId", "ariaLabelledBy", "level", "itemClick", "itemMouseEnter", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass"], [3, "data-pc-section", "aria-hidden"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "itemClick", "itemMouseEnter", "items", "itemTemplate", "autoDisplay", "menuId", "activeItemPath", "focusedItemId", "ariaLabelledBy", "level"]],
  template: function TieredMenuSub_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "ul", 3, 0);
      ɵɵlistener("keydown", function TieredMenuSub_Template_ul_keydown_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.menuKeydown.emit($event));
      })("focus", function TieredMenuSub_Template_ul_focus_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.menuFocus.emit($event));
      })("blur", function TieredMenuSub_Template_ul_blur_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.menuBlur.emit($event));
      });
      ɵɵtemplate(2, TieredMenuSub_ng_template_2_Template, 2, 2, "ng-template", 4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ɵɵpureFunction2(9, _c1, !ctx.root, ctx.root))("id", ctx.menuId + "_list")("tabindex", ctx.tabindex);
      ɵɵattribute("aria-label", ctx.ariaLabel)("aria-labelledBy", ctx.ariaLabelledBy)("aria-activedescendant", ctx.focusedItemId)("aria-orientation", "vertical")("data-pc-section", "menu");
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.items);
    }
  },
  dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Ripple, Tooltip, AngleRightIcon, _TieredMenuSub],
  encapsulation: 2
}));
var TieredMenuSub = _TieredMenuSub;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TieredMenuSub, [{
    type: Component,
    args: [{
      selector: "p-tieredMenuSub",
      template: '\n        <ul\n            #sublist\n            role="menu"\n            [ngClass]="{ \'p-submenu-list\': !root, \'p-tieredmenu-root-list\': root }"\n            [id]="menuId + \'_list\'"\n            [tabindex]="tabindex"\n            [attr.aria-label]="ariaLabel"\n            [attr.aria-labelledBy]="ariaLabelledBy"\n            [attr.aria-activedescendant]="focusedItemId"\n            [attr.aria-orientation]="\'vertical\'"\n            [attr.data-pc-section]="\'menu\'"\n            (keydown)="menuKeydown.emit($event)"\n            (focus)="menuFocus.emit($event)"\n            (blur)="menuBlur.emit($event)"\n        >\n            <ng-template ngFor let-processedItem [ngForOf]="items" let-index="index">\n                <li\n                    *ngIf="isItemVisible(processedItem) && getItemProp(processedItem, \'separator\')"\n                    [attr.id]="getItemId(processedItem)"\n                    [ngStyle]="getItemProp(processedItem, \'style\')"\n                    [ngClass]="getSeparatorItemClass(processedItem)"\n                    role="separator"\n                    [attr.data-pc-section]="\'separator\'"\n                ></li>\n                <li\n                    #listItem\n                    *ngIf="isItemVisible(processedItem) && !getItemProp(processedItem, \'separator\')"\n                    role="menuitem"\n                    [attr.id]="getItemId(processedItem)"\n                    [attr.data-pc-section]="\'menuitem\'"\n                    [attr.data-p-highlight]="isItemActive(processedItem)"\n                    [attr.data-p-focused]="isItemFocused(processedItem)"\n                    [attr.data-p-disabled]="isItemDisabled(processedItem)"\n                    [attr.aria-label]="getItemLabel(processedItem)"\n                    [attr.aria-disabled]="isItemDisabled(processedItem) || undefined"\n                    [attr.aria-haspopup]="isItemGroup(processedItem) && !getItemProp(processedItem, \'to\') ? \'menu\' : undefined"\n                    [attr.aria-expanded]="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"\n                    [attr.aria-setsize]="getAriaSetSize()"\n                    [attr.aria-posinset]="getAriaPosInset(index)"\n                    [ngStyle]="getItemProp(processedItem, \'style\')"\n                    [ngClass]="getItemClass(processedItem)"\n                    [class]="getItemProp(processedItem, \'styleClass\')"\n                    [pTooltip]="getItemProp(processedItem, \'tooltip\')"\n                    [tooltipOptions]="getItemProp(processedItem, \'tooltipOptions\')"\n                >\n                    <div [attr.data-pc-section]="\'content\'" class="p-menuitem-content" (click)="onItemClick($event, processedItem)" (mouseenter)="onItemMouseEnter({ $event, processedItem })">\n                        <ng-container *ngIf="!itemTemplate">\n                            <a\n                                *ngIf="!getItemProp(processedItem, \'routerLink\')"\n                                [attr.href]="getItemProp(processedItem, \'url\')"\n                                [attr.data-automationid]="getItemProp(processedItem, \'automationId\')"\n                                [attr.data-pc-section]="\'action\'"\n                                [target]="getItemProp(processedItem, \'target\')"\n                                [ngClass]="{ \'p-menuitem-link\': true, \'p-disabled\': getItemProp(processedItem, \'disabled\') }"\n                                [attr.tabindex]="-1"\n                                pRipple\n                            >\n                                <span\n                                    *ngIf="getItemProp(processedItem, \'icon\')"\n                                    class="p-menuitem-icon"\n                                    [ngClass]="getItemProp(processedItem, \'icon\')"\n                                    [ngStyle]="getItemProp(processedItem, \'iconStyle\')"\n                                    [attr.data-pc-section]="\'icon\'"\n                                    [attr.tabindex]="-1"\n                                >\n                                </span>\n                                <span *ngIf="getItemProp(processedItem, \'escape\'); else htmlLabel" class="p-menuitem-text" [attr.data-pc-section]="\'label\'">\n                                    {{ getItemLabel(processedItem) }}\n                                </span>\n                                <ng-template #htmlLabel>\n                                    <span class="p-menuitem-text" [innerHTML]="getItemLabel(processedItem)" [attr.data-pc-section]="\'label\'"></span>\n                                </ng-template>\n                                <span class="p-menuitem-badge" *ngIf="getItemProp(processedItem, \'badge\')" [ngClass]="getItemProp(processedItem, \'badgeStyleClass\')">{{ getItemProp(processedItem, \'badge\') }}</span>\n\n                                <ng-container *ngIf="isItemGroup(processedItem)">\n                                    <AngleRightIcon *ngIf="!tieredMenu.submenuIconTemplate" [styleClass]="\'p-submenu-icon\'" [attr.data-pc-section]="\'submenuicon\'" [attr.aria-hidden]="true" />\n                                    <ng-template *ngTemplateOutlet="tieredMenu.submenuIconTemplate" [attr.data-pc-section]="\'submenuicon\'" [attr.aria-hidden]="true"></ng-template>\n                                </ng-container>\n                            </a>\n                            <a\n                                *ngIf="getItemProp(processedItem, \'routerLink\')"\n                                [routerLink]="getItemProp(processedItem, \'routerLink\')"\n                                [attr.data-automationid]="getItemProp(processedItem, \'automationId\')"\n                                [attr.tabindex]="-1"\n                                [attr.data-pc-section]="\'action\'"\n                                [queryParams]="getItemProp(processedItem, \'queryParams\')"\n                                [routerLinkActive]="\'p-menuitem-link-active\'"\n                                [routerLinkActiveOptions]="getItemProp(processedItem, \'routerLinkActiveOptions\') || { exact: false }"\n                                [target]="getItemProp(processedItem, \'target\')"\n                                [ngClass]="{ \'p-menuitem-link\': true, \'p-disabled\': getItemProp(processedItem, \'disabled\') }"\n                                [fragment]="getItemProp(processedItem, \'fragment\')"\n                                [queryParamsHandling]="getItemProp(processedItem, \'queryParamsHandling\')"\n                                [preserveFragment]="getItemProp(processedItem, \'preserveFragment\')"\n                                [skipLocationChange]="getItemProp(processedItem, \'skipLocationChange\')"\n                                [replaceUrl]="getItemProp(processedItem, \'replaceUrl\')"\n                                [state]="getItemProp(processedItem, \'state\')"\n                                pRipple\n                            >\n                                <span\n                                    *ngIf="getItemProp(processedItem, \'icon\')"\n                                    class="p-menuitem-icon"\n                                    [ngClass]="getItemProp(processedItem, \'icon\')"\n                                    [ngStyle]="getItemProp(processedItem, \'iconStyle\')"\n                                    [attr.data-pc-section]="\'icon\'"\n                                    [attr.aria-hidden]="true"\n                                    [attr.tabindex]="-1"\n                                >\n                                </span>\n                                <span *ngIf="getItemProp(processedItem, \'escape\'); else htmlLabel" class="p-menuitem-text" [attr.data-pc-section]="\'label\'">\n                                    {{ getItemLabel(processedItem) }}\n                                </span>\n                                <ng-template #htmlLabel>\n                                    <span class="p-menuitem-text" [innerHTML]="getItemLabel(processedItem)" [attr.data-pc-section]="\'label\'"></span>\n                                </ng-template>\n                                <span class="p-menuitem-badge" *ngIf="getItemProp(processedItem, \'badge\')" [ngClass]="getItemProp(processedItem, \'badgeStyleClass\')">{{ getItemProp(processedItem, \'badge\') }}</span>\n\n                                <ng-container *ngIf="isItemGroup(processedItem)">\n                                    <AngleRightIcon *ngIf="!tieredMenu.submenuIconTemplate" [styleClass]="\'p-submenu-icon\'" [attr.data-pc-section]="\'submenuicon\'" [attr.aria-hidden]="true" />\n                                    <ng-template *ngTemplateOutlet="tieredMenu.submenuIconTemplate" [attr.data-pc-section]="\'submenuicon\'" [attr.aria-hidden]="true"></ng-template>\n                                </ng-container>\n                            </a>\n                        </ng-container>\n                        <ng-container *ngIf="itemTemplate">\n                            <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: processedItem.item, hasSubmenu: getItemProp(processedItem, \'items\') }"></ng-template>\n                        </ng-container>\n                    </div>\n\n                    <p-tieredMenuSub\n                        *ngIf="isItemVisible(processedItem) && isItemGroup(processedItem)"\n                        [items]="processedItem.items"\n                        [itemTemplate]="itemTemplate"\n                        [autoDisplay]="autoDisplay"\n                        [menuId]="menuId"\n                        [activeItemPath]="activeItemPath()"\n                        [focusedItemId]="focusedItemId"\n                        [ariaLabelledBy]="getItemId(processedItem)"\n                        [level]="level + 1"\n                        (itemClick)="itemClick.emit($event)"\n                        (itemMouseEnter)="onItemMouseEnter($event)"\n                    ></p-tieredMenuSub>\n                </li>\n            </ng-template>\n        </ul>\n    ',
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: TieredMenu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => TieredMenu)]
    }]
  }], {
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
    autoDisplay: [{
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
      args: ["sublist", {
        static: true
      }]
    }]
  });
})();
var _TieredMenu = class _TieredMenu {
  constructor(document2, platformId, el, renderer, cd, config, overlayService) {
    __publicField(this, "document");
    __publicField(this, "platformId");
    __publicField(this, "el");
    __publicField(this, "renderer");
    __publicField(this, "cd");
    __publicField(this, "config");
    __publicField(this, "overlayService");
    /**
     * Defines if menu would displayed as a popup.
     * @group Props
     */
    __publicField(this, "popup");
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
     * Whether to show a root submenu on mouse over.
     * @defaultValue true
     * @group Props
     */
    __publicField(this, "autoDisplay", true);
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
    __publicField(this, "scrollHandler");
    __publicField(this, "target");
    __publicField(this, "relatedTarget");
    __publicField(this, "visible");
    __publicField(this, "relativeAlign");
    __publicField(this, "dirty", false);
    __publicField(this, "focused", false);
    __publicField(this, "activeItemPath", signal([]));
    __publicField(this, "number", signal(0));
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
    this.document = document2;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
    this.overlayService = overlayService;
    effect(() => {
      const path = this.activeItemPath();
      if (ObjectUtils.isNotEmpty(path)) {
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
    const focusedItemInfo = this.focusedItemInfo();
    return ((_a = focusedItemInfo.item) == null ? void 0 : _a.id) ? focusedItemInfo.item.id : focusedItemInfo.index !== -1 ? "".concat(this.id).concat(ObjectUtils.isNotEmpty(focusedItemInfo.parentKey) ? "_" + focusedItemInfo.parentKey : "", "_").concat(focusedItemInfo.index) : null;
  }
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
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
    return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item) && this.isItemVisible(processedItem.item);
  }
  isItemDisabled(item) {
    return this.getItemProp(item, "disabled");
  }
  isItemVisible(item) {
    return this.getItemProp(item, "visible") !== false;
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
  onOverlayClick(event) {
    if (this.popup) {
      this.overlayService.add({
        originalEvent: event,
        target: this.el.nativeElement
      });
    }
  }
  onItemClick(event) {
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
      this.dirty = true;
      DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
    } else {
      if (grouped) {
        this.onItemChange(event);
      } else {
        const rootProcessedItem = root ? processedItem : this.activeItemPath().find((p) => p.parentKey === "");
        this.hide(originalEvent);
        this.changeFocusedItemIndex(originalEvent, rootProcessedItem ? rootProcessedItem.index : -1);
        DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
      }
    }
  }
  onItemMouseEnter(event) {
    if (!DomHandler.isTouchDevice()) {
      if (this.autoDisplay) {
        this.dirty = true;
      }
      if (this.dirty) {
        this.onItemChange(event);
      }
    } else {
      this.onItemChange({
        event,
        processedItem: event.processedItem,
        focus: this.autoDisplay
      });
    }
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
    const item = processedItem == null ? void 0 : processedItem.item;
    if (grouped) {
      this.onItemChange({
        originalEvent: event,
        processedItem
      });
      this.focusedItemInfo.set({
        index: -1,
        parentKey: processedItem.key,
        item
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
      this.popup && this.hide(event, true);
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
    this.hide(event, true);
    this.focusedItemInfo().index = this.findFirstFocusedItemIndex();
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
      if (!this.popup) {
        const processedItem = this.visibleItems[this.focusedItemInfo().index];
        const grouped = this.isProccessedItemGroup(processedItem);
        !grouped && (this.focusedItemInfo().index = this.findFirstFocusedItemIndex());
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
      items,
      item
    } = processedItem;
    const grouped = ObjectUtils.isNotEmpty(items);
    const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== parentKey && p.parentKey !== key);
    grouped && activeItemPath.push(processedItem);
    this.focusedItemInfo.set({
      index,
      level,
      parentKey,
      item
    });
    this.activeItemPath.set(activeItemPath);
    grouped && (this.dirty = true);
    isFocus && DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
  }
  onMenuFocus(event) {
    this.focused = true;
    if (this.focusedItemInfo().index === -1 && !this.popup) {
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
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        if (this.popup) {
          this.container = event.element;
          this.moveOnTop();
          this.onShow.emit({});
          this.appendOverlay();
          this.alignOverlay();
          this.bindOutsideClickListener();
          this.bindResizeListener();
          this.bindScrollListener();
          DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
          this.scrollInView();
        }
        break;
      case "void":
        this.onOverlayHide();
        this.onHide.emit({});
        break;
    }
  }
  alignOverlay() {
    if (this.relativeAlign) DomHandler.relativePosition(this.container, this.target);
    else DomHandler.absolutePosition(this.container, this.target);
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        zindexutils.clear(event.element);
        break;
    }
  }
  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.container);
      else DomHandler.appendChild(this.container, this.appendTo);
    }
  }
  restoreOverlayAppend() {
    if (this.container && this.appendTo) {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("menu", this.container, this.baseZIndex + this.config.zIndex.menu);
    }
  }
  /**
   * Hides the popup menu.
   * @group Method
   */
  hide(event, isFocus) {
    if (this.popup) {
      this.onHide.emit({});
      this.visible = false;
    }
    this.activeItemPath.set([]);
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: ""
    });
    isFocus && DomHandler.focus(this.relatedTarget || this.target || this.rootmenu.sublistViewChild.nativeElement);
    this.dirty = false;
  }
  /**
   * Toggles the visibility of the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  toggle(event) {
    this.visible ? this.hide(event, true) : this.show(event);
  }
  /**
   * Displays the popup menu.
   * @param {Event} even - Browser event.
   * @group Method
   */
  show(event, isFocus) {
    if (this.popup) {
      this.visible = true;
      this.target = this.target || event.currentTarget;
      this.relatedTarget = event.relatedTarget || null;
      this.relativeAlign = (event == null ? void 0 : event.relativeAlign) || null;
    }
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: ""
    });
    isFocus && DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
    this.cd.markForCheck();
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
    if (this.focusedItemInfo().index !== index) {
      const focusedItemInfo = this.focusedItemInfo();
      this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
        item: this.visibleItems[index].item,
        index
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
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, (event) => {
        if (this.visible) {
          this.hide(event, true);
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
      this.scrollHandler = null;
    }
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) {
        this.resizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
          if (!DomHandler.isTouchDevice()) {
            this.hide(event, true);
          }
        });
      }
    }
  }
  bindOutsideClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.outsideClickListener) {
        this.outsideClickListener = this.renderer.listen(this.document, "click", (event) => {
          const isOutsideContainer = this.containerViewChild && !this.containerViewChild.nativeElement.contains(event.target);
          const isOutsideTarget = this.popup ? !(this.target && (this.target === event.target || this.target.contains(event.target))) : true;
          if (isOutsideContainer && isOutsideTarget) {
            this.hide();
          }
        });
      }
    }
  }
  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      document.removeEventListener("click", this.outsideClickListener);
      this.outsideClickListener = null;
    }
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  onOverlayHide() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    this.unbindScrollListener();
    if (!this.cd.destroyed) {
      this.target = null;
    }
  }
  ngOnDestroy() {
    if (this.popup) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      if (this.container && this.autoZIndex) {
        zindexutils.clear(this.container);
      }
      this.restoreOverlayAppend();
      this.onOverlayHide();
    }
  }
};
__publicField(_TieredMenu, "ɵfac", function TieredMenu_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TieredMenu)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(OverlayService));
});
__publicField(_TieredMenu, "ɵcmp", ɵɵdefineComponent({
  type: _TieredMenu,
  selectors: [["p-tieredMenu"]],
  contentQueries: function TieredMenu_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function TieredMenu_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c5, 5);
      ɵɵviewQuery(_c6, 5);
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
    popup: [2, "popup", "popup", booleanAttribute],
    style: "style",
    styleClass: "styleClass",
    appendTo: "appendTo",
    autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
    baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
    autoDisplay: [2, "autoDisplay", "autoDisplay", booleanAttribute],
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    id: "id",
    ariaLabel: "ariaLabel",
    ariaLabelledBy: "ariaLabelledBy",
    disabled: [2, "disabled", "disabled", booleanAttribute],
    tabindex: [2, "tabindex", "tabindex", numberAttribute]
  },
  outputs: {
    onShow: "onShow",
    onHide: "onHide"
  },
  features: [ɵɵInputTransformsFeature],
  decls: 1,
  vars: 1,
  consts: [["container", ""], ["rootmenu", ""], [3, "id", "ngClass", "class", "ngStyle", "click", 4, "ngIf"], [3, "click", "id", "ngClass", "ngStyle"], [3, "itemClick", "menuFocus", "menuBlur", "menuKeydown", "itemMouseEnter", "root", "items", "itemTemplate", "menuId", "tabindex", "ariaLabel", "ariaLabelledBy", "baseZIndex", "autoZIndex", "autoDisplay", "popup", "focusedItemId", "activeItemPath"]],
  template: function TieredMenu_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TieredMenu_div_0_Template, 4, 29, "div", 2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.popup || ctx.visible);
    }
  },
  dependencies: [NgClass, NgIf, NgStyle, TieredMenuSub],
  styles: ["@layer primeng{.p-tieredmenu-overlay{position:absolute;top:0;left:0}.p-tieredmenu ul{margin:0;padding:0;list-style:none}.p-tieredmenu .p-submenu-list{position:absolute;min-width:100%;z-index:1;display:none}.p-tieredmenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-tieredmenu .p-menuitem-text{line-height:1}.p-tieredmenu .p-menuitem{position:relative}.p-tieredmenu .p-menuitem-link .p-submenu-icon:not(svg){margin-left:auto}.p-tieredmenu .p-menuitem-link .p-icon-wrapper{margin-left:auto}.p-tieredmenu .p-menuitem-active>p-tieredmenusub>.p-submenu-list{display:block;left:100%;top:0}.p-tieredmenu .p-menuitem-active>p-tieredmenusub>.p-submenu-list.p-submenu-list-flipped{left:-100%}}\n"],
  encapsulation: 2,
  data: {
    animation: [trigger("overlayAnimation", [transition(":enter", [style({
      opacity: 0,
      transform: "scaleY(0.8)"
    }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
      opacity: 0
    }))])])]
  },
  changeDetection: 0
}));
var TieredMenu = _TieredMenu;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TieredMenu, [{
    type: Component,
    args: [{
      selector: "p-tieredMenu",
      template: '\n        <div\n            #container\n            [attr.data-pc-section]="\'root\'"\n            [attr.data-pc-name]="\'tieredmenu\'"\n            [id]="id"\n            [ngClass]="{ \'p-tieredmenu p-component\': true, \'p-tieredmenu-overlay\': popup }"\n            [class]="styleClass"\n            [ngStyle]="style"\n            (click)="onOverlayClick($event)"\n            [@overlayAnimation]="{ value: \'visible\', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"\n            [@.disabled]="popup !== true"\n            (@overlayAnimation.start)="onOverlayAnimationStart($event)"\n            (@overlayAnimation.done)="onOverlayAnimationEnd($event)"\n            *ngIf="!popup || visible"\n        >\n            <p-tieredMenuSub\n                #rootmenu\n                [root]="true"\n                [items]="processedItems"\n                [itemTemplate]="itemTemplate"\n                [menuId]="id"\n                [tabindex]="!disabled ? tabindex : -1"\n                [ariaLabel]="ariaLabel"\n                [ariaLabelledBy]="ariaLabelledBy"\n                [baseZIndex]="baseZIndex"\n                [autoZIndex]="autoZIndex"\n                [autoDisplay]="autoDisplay"\n                [popup]="popup"\n                [focusedItemId]="focused ? focusedItemId : undefined"\n                [activeItemPath]="activeItemPath()"\n                (itemClick)="onItemClick($event)"\n                (menuFocus)="onMenuFocus($event)"\n                (menuBlur)="onMenuBlur($event)"\n                (menuKeydown)="onKeyDown($event)"\n                (itemMouseEnter)="onItemMouseEnter($event)"\n            ></p-tieredMenuSub>\n        </div>\n    ',
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-tieredmenu-overlay{position:absolute;top:0;left:0}.p-tieredmenu ul{margin:0;padding:0;list-style:none}.p-tieredmenu .p-submenu-list{position:absolute;min-width:100%;z-index:1;display:none}.p-tieredmenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-tieredmenu .p-menuitem-text{line-height:1}.p-tieredmenu .p-menuitem{position:relative}.p-tieredmenu .p-menuitem-link .p-submenu-icon:not(svg){margin-left:auto}.p-tieredmenu .p-menuitem-link .p-icon-wrapper{margin-left:auto}.p-tieredmenu .p-menuitem-active>p-tieredmenusub>.p-submenu-list{display:block;left:100%;top:0}.p-tieredmenu .p-menuitem-active>p-tieredmenusub>.p-submenu-list.p-submenu-list-flipped{left:-100%}}\n"]
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
    popup: [{
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
    autoDisplay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
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
var _TieredMenuModule = class _TieredMenuModule {
};
__publicField(_TieredMenuModule, "ɵfac", function TieredMenuModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TieredMenuModule)();
});
__publicField(_TieredMenuModule, "ɵmod", ɵɵdefineNgModule({
  type: _TieredMenuModule,
  declarations: [TieredMenu, TieredMenuSub],
  imports: [CommonModule, RouterModule, RippleModule, TooltipModule, AngleRightIcon, SharedModule],
  exports: [TieredMenu, RouterModule, TooltipModule, SharedModule]
}));
__publicField(_TieredMenuModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, RouterModule, RippleModule, TooltipModule, AngleRightIcon, SharedModule, RouterModule, TooltipModule, SharedModule]
}));
var TieredMenuModule = _TieredMenuModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TieredMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, RippleModule, TooltipModule, AngleRightIcon, SharedModule],
      exports: [TieredMenu, RouterModule, TooltipModule, SharedModule],
      declarations: [TieredMenu, TieredMenuSub]
    }]
  }], null, null);
})();

export {
  TieredMenuSub,
  TieredMenu,
  TieredMenuModule
};
//# sourceMappingURL=chunk-MXDQ5G3N.js.map
