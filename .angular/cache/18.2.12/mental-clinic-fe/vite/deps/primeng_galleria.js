import {
  WindowMaximizeIcon,
  WindowMinimizeIcon
} from "./chunk-QY4H5HEG.js";
import {
  FocusTrap,
  FocusTrapModule
} from "./chunk-UZD2LWRL.js";
import {
  ChevronLeftIcon
} from "./chunk-63U6WJYF.js";
import {
  TimesIcon
} from "./chunk-AP6UZX4B.js";
import {
  Ripple,
  RippleModule
} from "./chunk-MUJBADSC.js";
import {
  ChevronRightIcon
} from "./chunk-CDDPLBF3.js";
import "./chunk-BJLZ3T2F.js";
import {
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule
} from "./chunk-ZROJCIWL.js";
import {
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
  HostListener,
  Inject,
  Input,
  KeyValueDiffers,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-galleria.mjs
var _c0 = ["mask"];
var _c1 = ["container"];
var _c2 = (a0) => ({
  "p-galleria-mask p-component-overlay p-component-overlay-enter": true,
  "p-galleria-visible": a0
});
var _c3 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c4 = (a0) => ({
  value: "visible",
  params: a0
});
function Galleria_div_0_div_2_p_galleriaContent_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-galleriaContent", 7);
    ɵɵlistener("@animation.start", function Galleria_div_0_div_2_p_galleriaContent_2_Template_p_galleriaContent_animation_animation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onAnimationStart($event));
    })("@animation.done", function Galleria_div_0_div_2_p_galleriaContent_2_Template_p_galleriaContent_animation_animation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onAnimationEnd($event));
    })("maskHide", function Galleria_div_0_div_2_p_galleriaContent_2_Template_p_galleriaContent_maskHide_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onMaskHide());
    })("activeItemChange", function Galleria_div_0_div_2_p_galleriaContent_2_Template_p_galleriaContent_activeItemChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onActiveItemChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("@animation", ɵɵpureFunction1(9, _c4, ɵɵpureFunction2(6, _c3, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("value", ctx_r1.value)("activeIndex", ctx_r1.activeIndex)("numVisible", ctx_r1.numVisibleLimit || ctx_r1.numVisible)("ngStyle", ctx_r1.containerStyle)("fullScreen", ctx_r1.fullScreen);
  }
}
function Galleria_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5, 2);
    ɵɵtemplate(2, Galleria_div_0_div_2_p_galleriaContent_2_Template, 1, 11, "p-galleriaContent", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.maskClass);
    ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c2, ctx_r1.visible));
    ɵɵattribute("role", ctx_r1.fullScreen ? "dialog" : "region")("aria-modal", ctx_r1.fullScreen ? "true" : void 0);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.visible);
  }
}
function Galleria_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 1);
    ɵɵtemplate(2, Galleria_div_0_div_2_Template, 3, 8, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.maskVisible);
  }
}
function Galleria_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-galleriaContent", 8);
    ɵɵlistener("activeItemChange", function Galleria_ng_template_1_Template_p_galleriaContent_activeItemChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onActiveItemChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r1.value)("activeIndex", ctx_r1.activeIndex)("numVisible", ctx_r1.numVisibleLimit || ctx_r1.numVisible);
  }
}
var _c5 = ["closeButton"];
var _c6 = (a0, a1, a2) => ({
  "p-galleria p-component": true,
  "p-galleria-fullscreen": a0,
  "p-galleria-indicator-onitem": a1,
  "p-galleria-item-nav-onhover": a2
});
var _c7 = () => ({});
function GalleriaContent_div_0_button_1_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesIcon", 11);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-galleria-close-icon");
  }
}
function GalleriaContent_div_0_button_1_2_ng_template_0_Template(rf, ctx) {
}
function GalleriaContent_div_0_button_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GalleriaContent_div_0_button_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaContent_div_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function GalleriaContent_div_0_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.maskHide.emit());
    });
    ɵɵtemplate(1, GalleriaContent_div_0_button_1_TimesIcon_1_Template, 1, 1, "TimesIcon", 9)(2, GalleriaContent_div_0_button_1_2_Template, 1, 0, null, 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵattribute("aria-label", ctx_r2.closeAriaLabel())("data-pc-section", "closebutton");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.galleria.closeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.galleria.closeIconTemplate);
  }
}
function GalleriaContent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelement(1, "p-galleriaItemSlot", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("templates", ctx_r2.galleria.templates);
  }
}
function GalleriaContent_div_0_p_galleriaThumbnails_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-galleriaThumbnails", 14);
    ɵɵlistener("onActiveIndexChange", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_onActiveIndexChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onActiveIndexChange($event));
    })("stopSlideShow", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_stopSlideShow_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.stopSlideShow());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("containerId", ctx_r2.id)("value", ctx_r2.value)("activeIndex", ctx_r2.activeIndex)("templates", ctx_r2.galleria.templates)("numVisible", ctx_r2.numVisible)("responsiveOptions", ctx_r2.galleria.responsiveOptions)("circular", ctx_r2.galleria.circular)("isVertical", ctx_r2.isVertical())("contentHeight", ctx_r2.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators", ctx_r2.galleria.showThumbnailNavigators)("slideShowActive", ctx_r2.slideShowActive);
  }
}
function GalleriaContent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵelement(1, "p-galleriaItemSlot", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("templates", ctx_r2.galleria.templates);
  }
}
function GalleriaContent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, GalleriaContent_div_0_button_1_Template, 3, 4, "button", 2)(2, GalleriaContent_div_0_div_2_Template, 2, 1, "div", 3);
    ɵɵelementStart(3, "div", 4)(4, "p-galleriaItem", 5);
    ɵɵlistener("onActiveIndexChange", function GalleriaContent_div_0_Template_p_galleriaItem_onActiveIndexChange_4_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onActiveIndexChange($event));
    })("startSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_startSlideShow_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.startSlideShow());
    })("stopSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_stopSlideShow_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.stopSlideShow());
    });
    ɵɵelementEnd();
    ɵɵtemplate(5, GalleriaContent_div_0_p_galleriaThumbnails_5_Template, 1, 11, "p-galleriaThumbnails", 6);
    ɵɵelementEnd();
    ɵɵtemplate(6, GalleriaContent_div_0_div_6_Template, 2, 1, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.galleriaClass());
    ɵɵproperty("ngClass", ɵɵpureFunction3(24, _c6, ctx_r2.galleria.fullScreen, ctx_r2.galleria.showIndicatorsOnItem, ctx_r2.galleria.showItemNavigatorsOnHover && !ctx_r2.galleria.fullScreen))("ngStyle", !ctx_r2.galleria.fullScreen ? ctx_r2.galleria.containerStyle : ɵɵpureFunction0(28, _c7))("pFocusTrapDisabled", !ctx_r2.fullScreen);
    ɵɵattribute("id", ctx_r2.id)("role", "region");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.galleria.fullScreen);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.galleria.templates && ctx_r2.galleria.headerFacet);
    ɵɵadvance();
    ɵɵattribute("aria-live", ctx_r2.galleria.autoPlay ? "polite" : "off");
    ɵɵadvance();
    ɵɵproperty("id", ctx_r2.id)("value", ctx_r2.value)("activeIndex", ctx_r2.activeIndex)("circular", ctx_r2.galleria.circular)("templates", ctx_r2.galleria.templates)("showIndicators", ctx_r2.galleria.showIndicators)("changeItemOnIndicatorHover", ctx_r2.galleria.changeItemOnIndicatorHover)("indicatorFacet", ctx_r2.galleria.indicatorFacet)("captionFacet", ctx_r2.galleria.captionFacet)("showItemNavigators", ctx_r2.galleria.showItemNavigators)("autoPlay", ctx_r2.galleria.autoPlay)("slideShowActive", ctx_r2.slideShowActive);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.galleria.showThumbnails);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.galleria.templates && ctx_r2.galleria.footerFacet);
  }
}
function GalleriaItemSlot_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function GalleriaItemSlot_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GalleriaItemSlot_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ctx_r0.context);
  }
}
var _c8 = (a0, a1) => ({
  "p-galleria-item-prev p-galleria-item-nav p-link": true,
  "p-galleria-item-nav-focused": a0,
  "p-disabled": a1
});
var _c9 = (a0, a1) => ({
  "p-galleria-item-next p-galleria-item-nav p-link": true,
  "p-galleria-item-nav-focused": a0,
  "p-disabled": a1
});
var _c10 = (a0) => ({
  "p-galleria-indicator": true,
  "p-highlight": a0
});
function GalleriaItem_button_2_ChevronLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronLeftIcon", 10);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-galleria-item-prev-icon");
  }
}
function GalleriaItem_button_2_2_ng_template_0_Template(rf, ctx) {
}
function GalleriaItem_button_2_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GalleriaItem_button_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaItem_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function GalleriaItem_button_2_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.navBackward($event));
    })("focus", function GalleriaItem_button_2_Template_button_focus_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onButtonFocus("left"));
    })("blur", function GalleriaItem_button_2_Template_button_blur_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onButtonBlur("left"));
    });
    ɵɵtemplate(1, GalleriaItem_button_2_ChevronLeftIcon_1_Template, 1, 1, "ChevronLeftIcon", 8)(2, GalleriaItem_button_2_2_Template, 1, 0, null, 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(5, _c8, ctx_r1.leftButtonFocused, ctx_r1.isNavBackwardDisabled()))("disabled", ctx_r1.isNavBackwardDisabled());
    ɵɵattribute("aria-label", ctx_r1.ariaPreviousNavigationLabel());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.galleria.itemPreviousIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.galleria.itemPreviousIconTemplate);
  }
}
function GalleriaItem_button_5_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon", 10);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-galleria-item-next-icon");
  }
}
function GalleriaItem_button_5_2_ng_template_0_Template(rf, ctx) {
}
function GalleriaItem_button_5_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GalleriaItem_button_5_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaItem_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function GalleriaItem_button_5_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.navForward($event));
    })("focus", function GalleriaItem_button_5_Template_button_focus_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onButtonFocus("right"));
    })("blur", function GalleriaItem_button_5_Template_button_blur_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onButtonBlur("right"));
    });
    ɵɵtemplate(1, GalleriaItem_button_5_ChevronRightIcon_1_Template, 1, 1, "ChevronRightIcon", 8)(2, GalleriaItem_button_5_2_Template, 1, 0, null, 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(5, _c9, ctx_r1.rightButtonFocused, ctx_r1.isNavForwardDisabled()))("disabled", ctx_r1.isNavForwardDisabled());
    ɵɵattribute("aria-label", ctx_r1.ariaNextNavigationLabel());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.galleria.itemNextIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.galleria.itemNextIconTemplate);
  }
}
function GalleriaItem_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵelement(1, "p-galleriaItemSlot", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("item", ctx_r1.activeItem)("templates", ctx_r1.templates);
  }
}
function GalleriaItem_ul_7_li_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "button", 18);
  }
}
function GalleriaItem_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15);
    ɵɵlistener("click", function GalleriaItem_ul_7_li_1_Template_li_click_0_listener() {
      const index_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onIndicatorClick(index_r5));
    })("mouseenter", function GalleriaItem_ul_7_li_1_Template_li_mouseenter_0_listener() {
      const index_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onIndicatorMouseEnter(index_r5));
    })("keydown", function GalleriaItem_ul_7_li_1_Template_li_keydown_0_listener($event) {
      const index_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onIndicatorKeyDown($event, index_r5));
    });
    ɵɵtemplate(1, GalleriaItem_ul_7_li_1_button_1_Template, 1, 0, "button", 16);
    ɵɵelement(2, "p-galleriaItemSlot", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const index_r5 = ctx.index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c10, ctx_r1.isIndicatorItemActive(index_r5)));
    ɵɵattribute("aria-label", ctx_r1.ariaPageLabel(index_r5 + 1))("aria-selected", ctx_r1.activeIndex === index_r5)("aria-controls", ctx_r1.id + "_item_" + index_r5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.indicatorFacet);
    ɵɵadvance();
    ɵɵproperty("index", index_r5)("templates", ctx_r1.templates);
  }
}
function GalleriaItem_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 13);
    ɵɵtemplate(1, GalleriaItem_ul_7_li_1_Template, 3, 9, "li", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.value);
  }
}
var _c11 = ["itemsContainer"];
var _c12 = (a0) => ({
  height: a0
});
var _c13 = (a0) => ({
  "p-galleria-thumbnail-prev p-link": true,
  "p-disabled": a0
});
var _c14 = (a0, a1, a2, a3) => ({
  "p-galleria-thumbnail-item": true,
  "p-galleria-thumbnail-item-current": a0,
  "p-galleria-thumbnail-item-active": a1,
  "p-galleria-thumbnail-item-start": a2,
  "p-galleria-thumbnail-item-end": a3
});
var _c15 = (a0) => ({
  "p-galleria-thumbnail-next p-link": true,
  "p-disabled": a0
});
function GalleriaThumbnails_button_2_ng_container_1_ChevronLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronLeftIcon", 11);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-galleria-thumbnail-prev-icon");
  }
}
function GalleriaThumbnails_button_2_ng_container_1_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronUpIcon", 11);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-galleria-thumbnail-prev-icon");
  }
}
function GalleriaThumbnails_button_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GalleriaThumbnails_button_2_ng_container_1_ChevronLeftIcon_1_Template, 1, 1, "ChevronLeftIcon", 10)(2, GalleriaThumbnails_button_2_ng_container_1_ChevronUpIcon_2_Template, 1, 1, "ChevronUpIcon", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isVertical);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isVertical);
  }
}
function GalleriaThumbnails_button_2_2_ng_template_0_Template(rf, ctx) {
}
function GalleriaThumbnails_button_2_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GalleriaThumbnails_button_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaThumbnails_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function GalleriaThumbnails_button_2_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.navBackward($event));
    });
    ɵɵtemplate(1, GalleriaThumbnails_button_2_ng_container_1_Template, 3, 2, "ng-container", 8)(2, GalleriaThumbnails_button_2_2_Template, 1, 0, null, 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c13, ctx_r2.isNavBackwardDisabled()))("disabled", ctx_r2.isNavBackwardDisabled());
    ɵɵattribute("aria-label", ctx_r2.ariaPrevButtonLabel());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.galleria.previousThumbnailIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.galleria.previousThumbnailIconTemplate);
  }
}
function GalleriaThumbnails_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12);
    ɵɵlistener("keydown", function GalleriaThumbnails_div_6_Template_div_keydown_0_listener($event) {
      const index_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onThumbnailKeydown($event, index_r5));
    });
    ɵɵelementStart(1, "div", 13);
    ɵɵlistener("click", function GalleriaThumbnails_div_6_Template_div_click_1_listener() {
      const index_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemClick(index_r5));
    })("touchend", function GalleriaThumbnails_div_6_Template_div_touchend_1_listener() {
      const index_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemClick(index_r5));
    })("keydown.enter", function GalleriaThumbnails_div_6_Template_div_keydown_enter_1_listener() {
      const index_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemClick(index_r5));
    });
    ɵɵelement(2, "p-galleriaItemSlot", 14);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction4(10, _c14, ctx_r2.activeIndex === index_r5, ctx_r2.isItemActive(index_r5), ctx_r2.firstItemAciveIndex() === index_r5, ctx_r2.lastItemActiveIndex() === index_r5));
    ɵɵattribute("aria-selected", ctx_r2.activeIndex === index_r5)("aria-controls", ctx_r2.containerId + "_item_" + index_r5)("data-pc-section", "thumbnailitem")("data-p-active", ctx_r2.activeIndex === index_r5);
    ɵɵadvance();
    ɵɵattribute("tabindex", ctx_r2.activeIndex === index_r5 ? 0 : -1)("aria-current", ctx_r2.activeIndex === index_r5 ? "page" : void 0)("aria-label", ctx_r2.ariaPageLabel(index_r5 + 1));
    ɵɵadvance();
    ɵɵproperty("item", item_r6)("templates", ctx_r2.templates);
  }
}
function GalleriaThumbnails_button_7_ng_container_1_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon", 16);
  }
  if (rf & 2) {
    ɵɵproperty("ngClass", "p-galleria-thumbnail-next-icon");
  }
}
function GalleriaThumbnails_button_7_ng_container_1_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon", 16);
  }
  if (rf & 2) {
    ɵɵproperty("ngClass", "p-galleria-thumbnail-next-icon");
  }
}
function GalleriaThumbnails_button_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GalleriaThumbnails_button_7_ng_container_1_ChevronRightIcon_1_Template, 1, 1, "ChevronRightIcon", 15)(2, GalleriaThumbnails_button_7_ng_container_1_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isVertical);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isVertical);
  }
}
function GalleriaThumbnails_button_7_2_ng_template_0_Template(rf, ctx) {
}
function GalleriaThumbnails_button_7_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GalleriaThumbnails_button_7_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaThumbnails_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function GalleriaThumbnails_button_7_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.navForward($event));
    });
    ɵɵtemplate(1, GalleriaThumbnails_button_7_ng_container_1_Template, 3, 2, "ng-container", 8)(2, GalleriaThumbnails_button_7_2_Template, 1, 0, null, 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c15, ctx_r2.isNavForwardDisabled()))("disabled", ctx_r2.isNavForwardDisabled());
    ɵɵattribute("aria-label", ctx_r2.ariaNextButtonLabel());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.galleria.nextThumbnailIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.galleria.nextThumbnailIconTemplate);
  }
}
var _Galleria = class _Galleria {
  constructor(document2, platformId, element, cd, config) {
    __publicField(this, "document");
    __publicField(this, "platformId");
    __publicField(this, "element");
    __publicField(this, "cd");
    __publicField(this, "config");
    /**
     * Whether to display the component on fullscreen.
     * @group Props
     */
    __publicField(this, "fullScreen", false);
    /**
     * Unique identifier of the element.
     * @group Props
     */
    __publicField(this, "id");
    /**
     * An array of objects to display.
     * @group Props
     */
    __publicField(this, "value");
    /**
     * Number of items per page.
     * @group Props
     */
    __publicField(this, "numVisible", 3);
    /**
     * An array of options for responsive design.
     * @see {GalleriaResponsiveOptions}
     * @group Props
     */
    __publicField(this, "responsiveOptions");
    /**
     * Whether to display navigation buttons in item section.
     * @group Props
     */
    __publicField(this, "showItemNavigators", false);
    /**
     * Whether to display navigation buttons in thumbnail container.
     * @group Props
     */
    __publicField(this, "showThumbnailNavigators", true);
    /**
     * Whether to display navigation buttons on item hover.
     * @group Props
     */
    __publicField(this, "showItemNavigatorsOnHover", false);
    /**
     * When enabled, item is changed on indicator hover.
     * @group Props
     */
    __publicField(this, "changeItemOnIndicatorHover", false);
    /**
     * Defines if scrolling would be infinite.
     * @group Props
     */
    __publicField(this, "circular", false);
    /**
     * Items are displayed with a slideshow in autoPlay mode.
     * @group Props
     */
    __publicField(this, "autoPlay", false);
    /**
     * When enabled, autorun should stop by click.
     * @group Props
     */
    __publicField(this, "shouldStopAutoplayByClick", true);
    /**
     * Time in milliseconds to scroll items.
     * @group Props
     */
    __publicField(this, "transitionInterval", 4e3);
    /**
     * Whether to display thumbnail container.
     * @group Props
     */
    __publicField(this, "showThumbnails", true);
    /**
     * Position of thumbnails.
     * @group Props
     */
    __publicField(this, "thumbnailsPosition", "bottom");
    /**
     * Height of the viewport in vertical thumbnail.
     * @group Props
     */
    __publicField(this, "verticalThumbnailViewPortHeight", "300px");
    /**
     * Whether to display indicator container.
     * @group Props
     */
    __publicField(this, "showIndicators", false);
    /**
     * When enabled, indicator container is displayed on item container.
     * @group Props
     */
    __publicField(this, "showIndicatorsOnItem", false);
    /**
     * Position of indicators.
     * @group Props
     */
    __publicField(this, "indicatorsPosition", "bottom");
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    __publicField(this, "baseZIndex", 0);
    /**
     * Style class of the mask on fullscreen mode.
     * @group Props
     */
    __publicField(this, "maskClass");
    /**
     * Style class of the component on fullscreen mode. Otherwise, the 'class' property can be used.
     * @group Props
     */
    __publicField(this, "containerClass");
    /**
     * Inline style of the component on fullscreen mode. Otherwise, the 'style' property can be used.
     * @group Props
     */
    __publicField(this, "containerStyle");
    /**
     * Transition options of the show animation.
     * @group Props
     */
    __publicField(this, "showTransitionOptions", "150ms cubic-bezier(0, 0, 0.2, 1)");
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    __publicField(this, "hideTransitionOptions", "150ms cubic-bezier(0, 0, 0.2, 1)");
    /**
     * Callback to invoke on active index change.
     * @param {number} number - Active index.
     * @group Emits
     */
    __publicField(this, "activeIndexChange", new EventEmitter());
    /**
     * Callback to invoke on visiblity change.
     * @param {boolean} boolean - Visible value.
     * @group Emits
     */
    __publicField(this, "visibleChange", new EventEmitter());
    __publicField(this, "mask");
    __publicField(this, "container");
    __publicField(this, "templates");
    __publicField(this, "_visible", false);
    __publicField(this, "_activeIndex", 0);
    __publicField(this, "headerFacet");
    __publicField(this, "footerFacet");
    __publicField(this, "indicatorFacet");
    __publicField(this, "captionFacet");
    __publicField(this, "closeIconTemplate");
    __publicField(this, "previousThumbnailIconTemplate");
    __publicField(this, "nextThumbnailIconTemplate");
    __publicField(this, "itemPreviousIconTemplate");
    __publicField(this, "itemNextIconTemplate");
    __publicField(this, "maskVisible", false);
    __publicField(this, "numVisibleLimit", 0);
    this.document = document2;
    this.platformId = platformId;
    this.element = element;
    this.cd = cd;
    this.config = config;
  }
  /**
   * Index of the first item.
   * @group Props
   */
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(activeIndex) {
    this._activeIndex = activeIndex;
  }
  /**
   * Specifies the visibility of the mask on fullscreen mode.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(visible) {
    this._visible = visible;
    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
    }
  }
  ngAfterContentInit() {
    var _a;
    (_a = this.templates) == null ? void 0 : _a.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerFacet = item.template;
          break;
        case "footer":
          this.footerFacet = item.template;
          break;
        case "indicator":
          this.indicatorFacet = item.template;
          break;
        case "closeicon":
          this.closeIconTemplate = item.template;
          break;
        case "itemnexticon":
          this.itemNextIconTemplate = item.template;
          break;
        case "itempreviousicon":
          this.itemPreviousIconTemplate = item.template;
          break;
        case "previousthumbnailicon":
          this.previousThumbnailIconTemplate = item.template;
          break;
        case "nextthumbnailicon":
          this.nextThumbnailIconTemplate = item.template;
          break;
        case "caption":
          this.captionFacet = item.template;
          break;
      }
    });
  }
  ngOnChanges(simpleChanges) {
    var _a;
    if (simpleChanges.value && ((_a = simpleChanges.value.currentValue) == null ? void 0 : _a.length) < this.numVisible) {
      this.numVisibleLimit = simpleChanges.value.currentValue.length;
    } else {
      this.numVisibleLimit = 0;
    }
  }
  onMaskHide() {
    this.visible = false;
    this.visibleChange.emit(false);
  }
  onActiveItemChange(index) {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
      this.activeIndexChange.emit(index);
    }
  }
  onAnimationStart(event) {
    var _a;
    switch (event.toState) {
      case "visible":
        this.enableModality();
        setTimeout(() => {
          DomHandler.focus(DomHandler.findSingle(this.container.nativeElement, '[data-pc-section="closebutton"]'));
        }, 25);
        break;
      case "void":
        DomHandler.addClass((_a = this.mask) == null ? void 0 : _a.nativeElement, "p-component-overlay-leave");
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.disableModality();
        break;
    }
  }
  enableModality() {
    DomHandler.blockBodyScroll();
    this.cd.markForCheck();
    if (this.mask) {
      zindexutils.set("modal", this.mask.nativeElement, this.baseZIndex || this.config.zIndex.modal);
    }
  }
  disableModality() {
    DomHandler.unblockBodyScroll();
    this.maskVisible = false;
    this.cd.markForCheck();
    if (this.mask) {
      zindexutils.clear(this.mask.nativeElement);
    }
  }
  ngOnDestroy() {
    if (this.fullScreen) {
      DomHandler.removeClass(this.document.body, "p-overflow-hidden");
    }
    if (this.mask) {
      this.disableModality();
    }
  }
};
__publicField(_Galleria, "ɵfac", function Galleria_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Galleria)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig));
});
__publicField(_Galleria, "ɵcmp", ɵɵdefineComponent({
  type: _Galleria,
  selectors: [["p-galleria"]],
  contentQueries: function Galleria_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Galleria_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mask = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    activeIndex: "activeIndex",
    fullScreen: [2, "fullScreen", "fullScreen", booleanAttribute],
    id: "id",
    value: "value",
    numVisible: [2, "numVisible", "numVisible", numberAttribute],
    responsiveOptions: "responsiveOptions",
    showItemNavigators: [2, "showItemNavigators", "showItemNavigators", booleanAttribute],
    showThumbnailNavigators: [2, "showThumbnailNavigators", "showThumbnailNavigators", booleanAttribute],
    showItemNavigatorsOnHover: [2, "showItemNavigatorsOnHover", "showItemNavigatorsOnHover", booleanAttribute],
    changeItemOnIndicatorHover: [2, "changeItemOnIndicatorHover", "changeItemOnIndicatorHover", booleanAttribute],
    circular: [2, "circular", "circular", booleanAttribute],
    autoPlay: [2, "autoPlay", "autoPlay", booleanAttribute],
    shouldStopAutoplayByClick: [2, "shouldStopAutoplayByClick", "shouldStopAutoplayByClick", booleanAttribute],
    transitionInterval: [2, "transitionInterval", "transitionInterval", numberAttribute],
    showThumbnails: [2, "showThumbnails", "showThumbnails", booleanAttribute],
    thumbnailsPosition: "thumbnailsPosition",
    verticalThumbnailViewPortHeight: "verticalThumbnailViewPortHeight",
    showIndicators: [2, "showIndicators", "showIndicators", booleanAttribute],
    showIndicatorsOnItem: [2, "showIndicatorsOnItem", "showIndicatorsOnItem", booleanAttribute],
    indicatorsPosition: "indicatorsPosition",
    baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
    maskClass: "maskClass",
    containerClass: "containerClass",
    containerStyle: "containerStyle",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    visible: "visible"
  },
  outputs: {
    activeIndexChange: "activeIndexChange",
    visibleChange: "visibleChange"
  },
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
  decls: 3,
  vars: 2,
  consts: [["windowed", ""], ["container", ""], ["mask", ""], [4, "ngIf", "ngIfElse"], [3, "ngClass", "class", 4, "ngIf"], [3, "ngClass"], [3, "value", "activeIndex", "numVisible", "ngStyle", "fullScreen", "maskHide", "activeItemChange", 4, "ngIf"], [3, "maskHide", "activeItemChange", "value", "activeIndex", "numVisible", "ngStyle", "fullScreen"], [3, "activeItemChange", "value", "activeIndex", "numVisible"]],
  template: function Galleria_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, Galleria_div_0_Template, 3, 1, "div", 3)(1, Galleria_ng_template_1_Template, 1, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const windowed_r4 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.fullScreen)("ngIfElse", windowed_r4);
    }
  },
  dependencies: () => [NgClass, NgIf, NgStyle, GalleriaContent],
  styles: ["@layer primeng{.p-galleria-content{display:flex;flex-direction:column}.p-galleria-item-wrapper{display:flex;flex-direction:column;position:relative}.p-galleria-item-container{position:relative;display:flex;height:100%}.p-galleria-item-nav{position:absolute;top:50%;margin-top:-.5rem;display:inline-flex;justify-content:center;align-items:center;overflow:hidden}.p-galleria-item-prev{left:0;border-top-left-radius:0;border-bottom-left-radius:0}.p-galleria-item-next{right:0;border-top-right-radius:0;border-bottom-right-radius:0}.p-galleria-item{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav,.p-galleria-item-nav-onhover .p-galleria-item-nav-focused{pointer-events:all;opacity:1}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{position:absolute;bottom:0;left:0;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;overflow:auto;flex-shrink:0}.p-galleria-thumbnail-prev,.p-galleria-thumbnail-next{align-self:center;flex:0 0 auto;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-galleria-thumbnail-prev span,.p-galleria-thumbnail-next span{display:flex;justify-content:center;align-items:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden;width:100%}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{overflow:auto;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:.5}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{display:flex;align-items:center;justify-content:center}.p-galleria-indicator>button{display:inline-flex;align-items:center}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{flex-direction:row;align-items:center}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{position:absolute;display:flex;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{top:0;left:0;width:100%;align-items:flex-start}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{right:0;top:0;height:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{bottom:0;left:0;width:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{left:0;top:0;height:100%;align-items:flex-start}.p-galleria-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:transparent;transition-property:background-color}.p-galleria-close{position:absolute;top:0;right:0;display:flex;justify-content:center;align-items:center;overflow:hidden}.p-galleria-mask .p-galleria-item-nav{position:fixed;top:50%;margin-top:-.5rem}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}}\n"],
  encapsulation: 2,
  data: {
    animation: [trigger("animation", [transition("void => visible", [style({
      transform: "scale(0.7)",
      opacity: 0
    }), animate("{{showTransitionParams}}")]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
      transform: "scale(0.7)",
      opacity: 0
    }))])])]
  },
  changeDetection: 0
}));
var Galleria = _Galleria;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Galleria, [{
    type: Component,
    args: [{
      selector: "p-galleria",
      template: '\n        <div *ngIf="fullScreen; else windowed" #container>\n            <div\n                *ngIf="maskVisible"\n                #mask\n                [ngClass]="{ \'p-galleria-mask p-component-overlay p-component-overlay-enter\': true, \'p-galleria-visible\': this.visible }"\n                [class]="maskClass"\n                [attr.role]="fullScreen ? \'dialog\' : \'region\'"\n                [attr.aria-modal]="fullScreen ? \'true\' : undefined"\n            >\n                <p-galleriaContent\n                    *ngIf="visible"\n                    [@animation]="{ value: \'visible\', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"\n                    (@animation.start)="onAnimationStart($event)"\n                    (@animation.done)="onAnimationEnd($event)"\n                    [value]="value"\n                    [activeIndex]="activeIndex"\n                    [numVisible]="numVisibleLimit || numVisible"\n                    (maskHide)="onMaskHide()"\n                    (activeItemChange)="onActiveItemChange($event)"\n                    [ngStyle]="containerStyle"\n                    [fullScreen]="fullScreen"\n                ></p-galleriaContent>\n            </div>\n        </div>\n\n        <ng-template #windowed>\n            <p-galleriaContent [value]="value" [activeIndex]="activeIndex" [numVisible]="numVisibleLimit || numVisible" (activeItemChange)="onActiveItemChange($event)"></p-galleriaContent>\n        </ng-template>\n    ',
      animations: [trigger("animation", [transition("void => visible", [style({
        transform: "scale(0.7)",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
        transform: "scale(0.7)",
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-galleria-content{display:flex;flex-direction:column}.p-galleria-item-wrapper{display:flex;flex-direction:column;position:relative}.p-galleria-item-container{position:relative;display:flex;height:100%}.p-galleria-item-nav{position:absolute;top:50%;margin-top:-.5rem;display:inline-flex;justify-content:center;align-items:center;overflow:hidden}.p-galleria-item-prev{left:0;border-top-left-radius:0;border-bottom-left-radius:0}.p-galleria-item-next{right:0;border-top-right-radius:0;border-bottom-right-radius:0}.p-galleria-item{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav,.p-galleria-item-nav-onhover .p-galleria-item-nav-focused{pointer-events:all;opacity:1}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{position:absolute;bottom:0;left:0;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;overflow:auto;flex-shrink:0}.p-galleria-thumbnail-prev,.p-galleria-thumbnail-next{align-self:center;flex:0 0 auto;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-galleria-thumbnail-prev span,.p-galleria-thumbnail-next span{display:flex;justify-content:center;align-items:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden;width:100%}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{overflow:auto;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:.5}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{display:flex;align-items:center;justify-content:center}.p-galleria-indicator>button{display:inline-flex;align-items:center}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{flex-direction:row;align-items:center}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{position:absolute;display:flex;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{top:0;left:0;width:100%;align-items:flex-start}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{right:0;top:0;height:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{bottom:0;left:0;width:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{left:0;top:0;height:100%;align-items:flex-start}.p-galleria-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:transparent;transition-property:background-color}.p-galleria-close{position:absolute;top:0;right:0;display:flex;justify-content:center;align-items:center;overflow:hidden}.p-galleria-mask .p-galleria-item-nav{position:fixed;top:50%;margin-top:-.5rem}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}}\n"]
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
    activeIndex: [{
      type: Input
    }],
    fullScreen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    id: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    numVisible: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    responsiveOptions: [{
      type: Input
    }],
    showItemNavigators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showThumbnailNavigators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showItemNavigatorsOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    changeItemOnIndicatorHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    circular: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoPlay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    shouldStopAutoplayByClick: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    transitionInterval: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showThumbnails: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    thumbnailsPosition: [{
      type: Input
    }],
    verticalThumbnailViewPortHeight: [{
      type: Input
    }],
    showIndicators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showIndicatorsOnItem: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    indicatorsPosition: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    maskClass: [{
      type: Input
    }],
    containerClass: [{
      type: Input
    }],
    containerStyle: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    activeIndexChange: [{
      type: Output
    }],
    visibleChange: [{
      type: Output
    }],
    mask: [{
      type: ViewChild,
      args: ["mask"]
    }],
    container: [{
      type: ViewChild,
      args: ["container"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var _GalleriaContent = class _GalleriaContent {
  constructor(galleria, cd, differs, config, elementRef) {
    __publicField(this, "galleria");
    __publicField(this, "cd");
    __publicField(this, "differs");
    __publicField(this, "config");
    __publicField(this, "elementRef");
    __publicField(this, "value", []);
    __publicField(this, "numVisible");
    __publicField(this, "fullScreen");
    __publicField(this, "maskHide", new EventEmitter());
    __publicField(this, "activeItemChange", new EventEmitter());
    __publicField(this, "closeButton");
    __publicField(this, "id");
    __publicField(this, "_activeIndex", 0);
    __publicField(this, "slideShowActive", true);
    __publicField(this, "interval");
    __publicField(this, "styleClass");
    __publicField(this, "differ");
    this.galleria = galleria;
    this.cd = cd;
    this.differs = differs;
    this.config = config;
    this.elementRef = elementRef;
    this.id = this.galleria.id || UniqueComponentId();
    this.differ = this.differs.find(this.galleria).create();
  }
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(activeIndex) {
    this._activeIndex = activeIndex;
  }
  // For custom fullscreen
  handleFullscreenChange(event) {
    var _a;
    if ((document == null ? void 0 : document.fullscreenElement) === ((_a = this.elementRef.nativeElement) == null ? void 0 : _a.children[0])) {
      this.fullScreen = true;
    } else {
      this.fullScreen = false;
    }
  }
  ngDoCheck() {
    if (isPlatformBrowser(this.galleria.platformId)) {
      const changes = this.differ.diff(this.galleria);
      if (changes && changes.forEachItem.length > 0) {
        this.cd.markForCheck();
      }
    }
  }
  galleriaClass() {
    const thumbnailsPosClass = this.galleria.showThumbnails && this.getPositionClass("p-galleria-thumbnails", this.galleria.thumbnailsPosition);
    const indicatorPosClass = this.galleria.showIndicators && this.getPositionClass("p-galleria-indicators", this.galleria.indicatorsPosition);
    return (this.galleria.containerClass ? this.galleria.containerClass + " " : "") + (thumbnailsPosClass ? thumbnailsPosClass + " " : "") + (indicatorPosClass ? indicatorPosClass + " " : "");
  }
  startSlideShow() {
    if (isPlatformBrowser(this.galleria.platformId)) {
      this.interval = setInterval(() => {
        let activeIndex = this.galleria.circular && this.value.length - 1 === this.activeIndex ? 0 : this.activeIndex + 1;
        this.onActiveIndexChange(activeIndex);
        this.activeIndex = activeIndex;
      }, this.galleria.transitionInterval);
      this.slideShowActive = true;
    }
  }
  stopSlideShow() {
    if (this.galleria.autoPlay && !this.galleria.shouldStopAutoplayByClick) {
      return;
    }
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.slideShowActive = false;
  }
  getPositionClass(preClassName, position) {
    const positions = ["top", "left", "bottom", "right"];
    const pos = positions.find((item) => item === position);
    return pos ? "".concat(preClassName, "-").concat(pos) : "";
  }
  isVertical() {
    return this.galleria.thumbnailsPosition === "left" || this.galleria.thumbnailsPosition === "right";
  }
  onActiveIndexChange(index) {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
      this.activeItemChange.emit(this.activeIndex);
    }
  }
  closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
};
__publicField(_GalleriaContent, "ɵfac", function GalleriaContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleriaContent)(ɵɵdirectiveInject(Galleria), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(ElementRef));
});
__publicField(_GalleriaContent, "ɵcmp", ɵɵdefineComponent({
  type: _GalleriaContent,
  selectors: [["p-galleriaContent"]],
  viewQuery: function GalleriaContent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c5, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.closeButton = _t.first);
    }
  },
  hostBindings: function GalleriaContent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("fullscreenchange", function GalleriaContent_fullscreenchange_HostBindingHandler($event) {
        return ctx.handleFullscreenChange($event);
      }, false, ɵɵresolveDocument);
    }
  },
  inputs: {
    activeIndex: "activeIndex",
    value: "value",
    numVisible: [2, "numVisible", "numVisible", numberAttribute],
    fullScreen: [2, "fullScreen", "fullScreen", booleanAttribute]
  },
  outputs: {
    maskHide: "maskHide",
    activeItemChange: "activeItemChange"
  },
  features: [ɵɵInputTransformsFeature],
  decls: 1,
  vars: 1,
  consts: [["pFocusTrap", "", 3, "ngClass", "ngStyle", "class", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"], ["type", "button", "class", "p-galleria-close p-link", "pRipple", "", 3, "click", 4, "ngIf"], ["class", "p-galleria-header", 4, "ngIf"], [1, "p-galleria-content"], [3, "onActiveIndexChange", "startSlideShow", "stopSlideShow", "id", "value", "activeIndex", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "indicatorFacet", "captionFacet", "showItemNavigators", "autoPlay", "slideShowActive"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow", 4, "ngIf"], ["class", "p-galleria-footer", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-galleria-close", "p-link", 3, "click"], [3, "styleClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass"], [1, "p-galleria-header"], ["type", "header", 3, "templates"], [3, "onActiveIndexChange", "stopSlideShow", "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive"], [1, "p-galleria-footer"], ["type", "footer", 3, "templates"]],
  template: function GalleriaContent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, GalleriaContent_div_0_Template, 7, 29, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.value && ctx.value.length > 0);
    }
  },
  dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple, TimesIcon, FocusTrap, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails],
  encapsulation: 2,
  changeDetection: 0
}));
var GalleriaContent = _GalleriaContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleriaContent, [{
    type: Component,
    args: [{
      selector: "p-galleriaContent",
      template: '\n        <div\n            [attr.id]="id"\n            [attr.role]="\'region\'"\n            *ngIf="value && value.length > 0"\n            [ngClass]="{\n                \'p-galleria p-component\': true,\n                \'p-galleria-fullscreen\': this.galleria.fullScreen,\n                \'p-galleria-indicator-onitem\': this.galleria.showIndicatorsOnItem,\n                \'p-galleria-item-nav-onhover\': this.galleria.showItemNavigatorsOnHover && !this.galleria.fullScreen\n            }"\n            [ngStyle]="!galleria.fullScreen ? galleria.containerStyle : {}"\n            [class]="galleriaClass()"\n            pFocusTrap\n            [pFocusTrapDisabled]="!fullScreen"\n        >\n            <button *ngIf="galleria.fullScreen" type="button" class="p-galleria-close p-link" (click)="maskHide.emit()" pRipple [attr.aria-label]="closeAriaLabel()" [attr.data-pc-section]="\'closebutton\'">\n                <TimesIcon *ngIf="!galleria.closeIconTemplate" [styleClass]="\'p-galleria-close-icon\'" />\n                <ng-template *ngTemplateOutlet="galleria.closeIconTemplate"></ng-template>\n            </button>\n            <div *ngIf="galleria.templates && galleria.headerFacet" class="p-galleria-header">\n                <p-galleriaItemSlot type="header" [templates]="galleria.templates"></p-galleriaItemSlot>\n            </div>\n            <div class="p-galleria-content" [attr.aria-live]="galleria.autoPlay ? \'polite\' : \'off\'">\n                <p-galleriaItem\n                    [id]="id"\n                    [value]="value"\n                    [activeIndex]="activeIndex"\n                    [circular]="galleria.circular"\n                    [templates]="galleria.templates"\n                    (onActiveIndexChange)="onActiveIndexChange($event)"\n                    [showIndicators]="galleria.showIndicators"\n                    [changeItemOnIndicatorHover]="galleria.changeItemOnIndicatorHover"\n                    [indicatorFacet]="galleria.indicatorFacet"\n                    [captionFacet]="galleria.captionFacet"\n                    [showItemNavigators]="galleria.showItemNavigators"\n                    [autoPlay]="galleria.autoPlay"\n                    [slideShowActive]="slideShowActive"\n                    (startSlideShow)="startSlideShow()"\n                    (stopSlideShow)="stopSlideShow()"\n                ></p-galleriaItem>\n\n                <p-galleriaThumbnails\n                    *ngIf="galleria.showThumbnails"\n                    [containerId]="id"\n                    [value]="value"\n                    (onActiveIndexChange)="onActiveIndexChange($event)"\n                    [activeIndex]="activeIndex"\n                    [templates]="galleria.templates"\n                    [numVisible]="numVisible"\n                    [responsiveOptions]="galleria.responsiveOptions"\n                    [circular]="galleria.circular"\n                    [isVertical]="isVertical()"\n                    [contentHeight]="galleria.verticalThumbnailViewPortHeight"\n                    [showThumbnailNavigators]="galleria.showThumbnailNavigators"\n                    [slideShowActive]="slideShowActive"\n                    (stopSlideShow)="stopSlideShow()"\n                ></p-galleriaThumbnails>\n            </div>\n            <div *ngIf="galleria.templates && galleria.footerFacet" class="p-galleria-footer">\n                <p-galleriaItemSlot type="footer" [templates]="galleria.templates"></p-galleriaItemSlot>\n            </div>\n        </div>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [{
    type: Galleria
  }, {
    type: ChangeDetectorRef
  }, {
    type: KeyValueDiffers
  }, {
    type: PrimeNGConfig
  }, {
    type: ElementRef
  }], {
    activeIndex: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    numVisible: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    fullScreen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    maskHide: [{
      type: Output
    }],
    activeItemChange: [{
      type: Output
    }],
    closeButton: [{
      type: ViewChild,
      args: ["closeButton"]
    }],
    handleFullscreenChange: [{
      type: HostListener,
      args: ["document:fullscreenchange", ["$event"]]
    }]
  });
})();
var _GalleriaItemSlot = class _GalleriaItemSlot {
  constructor() {
    __publicField(this, "templates");
    __publicField(this, "index");
    __publicField(this, "type");
    __publicField(this, "contentTemplate");
    __publicField(this, "context");
    __publicField(this, "_item");
  }
  get item() {
    return this._item;
  }
  set item(item) {
    this._item = item;
    if (this.templates) {
      this.templates.forEach((item2) => {
        if (item2.getType() === this.type) {
          switch (this.type) {
            case "item":
            case "caption":
            case "thumbnail":
              this.context = {
                $implicit: this.item
              };
              this.contentTemplate = item2.template;
              break;
          }
        }
      });
    }
  }
  ngAfterContentInit() {
    var _a;
    (_a = this.templates) == null ? void 0 : _a.forEach((item) => {
      if (item.getType() === this.type) {
        switch (this.type) {
          case "item":
          case "caption":
          case "thumbnail":
            this.context = {
              $implicit: this.item
            };
            this.contentTemplate = item.template;
            break;
          case "indicator":
            this.context = {
              $implicit: this.index
            };
            this.contentTemplate = item.template;
            break;
          default:
            this.context = {};
            this.contentTemplate = item.template;
            break;
        }
      }
    });
  }
};
__publicField(_GalleriaItemSlot, "ɵfac", function GalleriaItemSlot_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleriaItemSlot)();
});
__publicField(_GalleriaItemSlot, "ɵcmp", ɵɵdefineComponent({
  type: _GalleriaItemSlot,
  selectors: [["p-galleriaItemSlot"]],
  inputs: {
    templates: "templates",
    index: [2, "index", "index", numberAttribute],
    item: "item",
    type: "type"
  },
  features: [ɵɵInputTransformsFeature],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function GalleriaItemSlot_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, GalleriaItemSlot_ng_container_0_Template, 2, 2, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.contentTemplate);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
}));
var GalleriaItemSlot = _GalleriaItemSlot;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleriaItemSlot, [{
    type: Component,
    args: [{
      selector: "p-galleriaItemSlot",
      template: '\n        <ng-container *ngIf="contentTemplate">\n            <ng-container *ngTemplateOutlet="contentTemplate; context: context"></ng-container>\n        </ng-container>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    templates: [{
      type: Input
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    item: [{
      type: Input
    }],
    type: [{
      type: Input
    }]
  });
})();
var _GalleriaItem = class _GalleriaItem {
  constructor(galleria) {
    __publicField(this, "galleria");
    __publicField(this, "id");
    __publicField(this, "circular", false);
    __publicField(this, "value");
    __publicField(this, "showItemNavigators", false);
    __publicField(this, "showIndicators", true);
    __publicField(this, "slideShowActive", true);
    __publicField(this, "changeItemOnIndicatorHover", true);
    __publicField(this, "autoPlay", false);
    __publicField(this, "templates");
    __publicField(this, "indicatorFacet");
    __publicField(this, "captionFacet");
    __publicField(this, "startSlideShow", new EventEmitter());
    __publicField(this, "stopSlideShow", new EventEmitter());
    __publicField(this, "onActiveIndexChange", new EventEmitter());
    __publicField(this, "_activeIndex", 0);
    __publicField(this, "leftButtonFocused", false);
    __publicField(this, "rightButtonFocused", false);
    this.galleria = galleria;
  }
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(activeIndex) {
    this._activeIndex = activeIndex;
  }
  get activeItem() {
    return this.value && this.value[this._activeIndex];
  }
  ngOnChanges({
    autoPlay
  }) {
    if (autoPlay == null ? void 0 : autoPlay.currentValue) {
      this.startSlideShow.emit();
    }
    if (autoPlay && autoPlay.currentValue === false) {
      this.stopTheSlideShow();
    }
  }
  next() {
    let nextItemIndex = this.activeIndex + 1;
    let activeIndex = this.circular && this.value.length - 1 === this.activeIndex ? 0 : nextItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
  }
  prev() {
    let prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
    let activeIndex = this.circular && this.activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
  }
  onButtonFocus(pos) {
    if (pos === "left") {
      this.leftButtonFocused = true;
    } else this.rightButtonFocused = true;
  }
  onButtonBlur(pos) {
    if (pos === "left") {
      this.leftButtonFocused = false;
    } else this.rightButtonFocused = false;
  }
  stopTheSlideShow() {
    if (this.slideShowActive && this.stopSlideShow) {
      this.stopSlideShow.emit();
    }
  }
  navForward(e) {
    this.stopTheSlideShow();
    this.next();
    if (e && e.cancelable) {
      e.preventDefault();
    }
  }
  navBackward(e) {
    this.stopTheSlideShow();
    this.prev();
    if (e && e.cancelable) {
      e.preventDefault();
    }
  }
  onIndicatorClick(index) {
    this.stopTheSlideShow();
    this.onActiveIndexChange.emit(index);
  }
  onIndicatorMouseEnter(index) {
    if (this.changeItemOnIndicatorHover) {
      this.stopTheSlideShow();
      this.onActiveIndexChange.emit(index);
    }
  }
  onIndicatorKeyDown(event, index) {
    switch (event.code) {
      case "Enter":
      case "Space":
        this.stopTheSlideShow();
        this.onActiveIndexChange.emit(index);
        event.preventDefault();
        break;
      case "ArrowDown":
      case "ArrowUp":
        event.preventDefault();
        break;
      default:
        break;
    }
  }
  isNavForwardDisabled() {
    return !this.circular && this.activeIndex === this.value.length - 1;
  }
  isNavBackwardDisabled() {
    return !this.circular && this.activeIndex === 0;
  }
  isIndicatorItemActive(index) {
    return this.activeIndex === index;
  }
  ariaSlideLabel() {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.slide : void 0;
  }
  ariaSlideNumber(value) {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.slideNumber.replace(/{slideNumber}/g, value) : void 0;
  }
  ariaPageLabel(value) {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.pageLabel.replace(/{page}/g, value) : void 0;
  }
  ariaNextNavigationLabel() {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.next : void 0;
  }
  ariaPreviousNavigationLabel() {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.previous : void 0;
  }
};
__publicField(_GalleriaItem, "ɵfac", function GalleriaItem_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleriaItem)(ɵɵdirectiveInject(Galleria));
});
__publicField(_GalleriaItem, "ɵcmp", ɵɵdefineComponent({
  type: _GalleriaItem,
  selectors: [["p-galleriaItem"]],
  inputs: {
    id: "id",
    circular: [2, "circular", "circular", booleanAttribute],
    value: "value",
    showItemNavigators: [2, "showItemNavigators", "showItemNavigators", booleanAttribute],
    showIndicators: [2, "showIndicators", "showIndicators", booleanAttribute],
    slideShowActive: [2, "slideShowActive", "slideShowActive", booleanAttribute],
    changeItemOnIndicatorHover: [2, "changeItemOnIndicatorHover", "changeItemOnIndicatorHover", booleanAttribute],
    autoPlay: [2, "autoPlay", "autoPlay", booleanAttribute],
    templates: "templates",
    indicatorFacet: "indicatorFacet",
    captionFacet: "captionFacet",
    activeIndex: "activeIndex"
  },
  outputs: {
    startSlideShow: "startSlideShow",
    stopSlideShow: "stopSlideShow",
    onActiveIndexChange: "onActiveIndexChange"
  },
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
  decls: 8,
  vars: 11,
  consts: [[1, "p-galleria-item-wrapper"], [1, "p-galleria-item-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", "focus", "blur", 4, "ngIf"], ["role", "group", 3, "id"], ["type", "item", 1, "p-galleria-item", 3, "item", "templates"], ["class", "p-galleria-caption", 4, "ngIf"], ["class", "p-galleria-indicators p-reset", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "click", "focus", "blur", "ngClass", "disabled"], [3, "styleClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass"], [1, "p-galleria-caption"], ["type", "caption", 3, "item", "templates"], [1, "p-galleria-indicators", "p-reset"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown", 4, "ngFor", "ngForOf"], ["tabindex", "0", 3, "click", "mouseenter", "keydown", "ngClass"], ["type", "button", "tabIndex", "-1", "class", "p-link", 4, "ngIf"], ["type", "indicator", 3, "index", "templates"], ["type", "button", "tabIndex", "-1", 1, "p-link"]],
  template: function GalleriaItem_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div", 1);
      ɵɵtemplate(2, GalleriaItem_button_2_Template, 3, 8, "button", 2);
      ɵɵelementStart(3, "div", 3);
      ɵɵelement(4, "p-galleriaItemSlot", 4);
      ɵɵelementEnd();
      ɵɵtemplate(5, GalleriaItem_button_5_Template, 3, 8, "button", 2)(6, GalleriaItem_div_6_Template, 2, 2, "div", 5);
      ɵɵelementEnd();
      ɵɵtemplate(7, GalleriaItem_ul_7_Template, 2, 1, "ul", 6);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showItemNavigators);
      ɵɵadvance();
      ɵɵstyleProp("width", "100%");
      ɵɵproperty("id", ctx.id + "_item_" + ctx.activeIndex);
      ɵɵattribute("aria-label", ctx.ariaSlideNumber(ctx.activeIndex + 1))("aria-roledescription", ctx.ariaSlideLabel());
      ɵɵadvance();
      ɵɵproperty("item", ctx.activeItem)("templates", ctx.templates);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showItemNavigators);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.captionFacet);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showIndicators);
    }
  },
  dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, Ripple, ChevronRightIcon, ChevronLeftIcon, GalleriaItemSlot],
  encapsulation: 2,
  changeDetection: 0
}));
var GalleriaItem = _GalleriaItem;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleriaItem, [{
    type: Component,
    args: [{
      selector: "p-galleriaItem",
      template: '\n        <div class="p-galleria-item-wrapper">\n            <div class="p-galleria-item-container">\n                <button\n                    *ngIf="showItemNavigators"\n                    type="button"\n                    [ngClass]="{ \'p-galleria-item-prev p-galleria-item-nav p-link\': true, \'p-galleria-item-nav-focused\': leftButtonFocused, \'p-disabled\': this.isNavBackwardDisabled() }"\n                    (click)="navBackward($event)"\n                    [disabled]="isNavBackwardDisabled()"\n                    pRipple\n                    (focus)="onButtonFocus(\'left\')"\n                    (blur)="onButtonBlur(\'left\')"\n                    [attr.aria-label]="ariaPreviousNavigationLabel()"\n                >\n                    <ChevronLeftIcon *ngIf="!galleria.itemPreviousIconTemplate" [styleClass]="\'p-galleria-item-prev-icon\'" />\n                    <ng-template *ngTemplateOutlet="galleria.itemPreviousIconTemplate"></ng-template>\n                </button>\n                <div [id]="id + \'_item_\' + activeIndex" role="group" [attr.aria-label]="ariaSlideNumber(activeIndex + 1)" [attr.aria-roledescription]="ariaSlideLabel()" [style.width]="\'100%\'">\n                    <p-galleriaItemSlot type="item" [item]="activeItem" [templates]="templates" class="p-galleria-item"></p-galleriaItemSlot>\n                </div>\n                <button\n                    *ngIf="showItemNavigators"\n                    type="button"\n                    [ngClass]="{ \'p-galleria-item-next p-galleria-item-nav p-link\': true, \'p-galleria-item-nav-focused\': rightButtonFocused, \'p-disabled\': this.isNavForwardDisabled() }"\n                    (click)="navForward($event)"\n                    [disabled]="isNavForwardDisabled()"\n                    pRipple\n                    (focus)="onButtonFocus(\'right\')"\n                    (blur)="onButtonBlur(\'right\')"\n                    [attr.aria-label]="ariaNextNavigationLabel()"\n                >\n                    <ChevronRightIcon *ngIf="!galleria.itemNextIconTemplate" [styleClass]="\'p-galleria-item-next-icon\'" />\n                    <ng-template *ngTemplateOutlet="galleria.itemNextIconTemplate"></ng-template>\n                </button>\n                <div class="p-galleria-caption" *ngIf="captionFacet">\n                    <p-galleriaItemSlot type="caption" [item]="activeItem" [templates]="templates"></p-galleriaItemSlot>\n                </div>\n            </div>\n            <ul *ngIf="showIndicators" class="p-galleria-indicators p-reset">\n                <li\n                    *ngFor="let item of value; let index = index"\n                    tabindex="0"\n                    (click)="onIndicatorClick(index)"\n                    (mouseenter)="onIndicatorMouseEnter(index)"\n                    (keydown)="onIndicatorKeyDown($event, index)"\n                    [ngClass]="{ \'p-galleria-indicator\': true, \'p-highlight\': isIndicatorItemActive(index) }"\n                    [attr.aria-label]="ariaPageLabel(index + 1)"\n                    [attr.aria-selected]="activeIndex === index"\n                    [attr.aria-controls]="id + \'_item_\' + index"\n                >\n                    <button type="button" tabIndex="-1" class="p-link" *ngIf="!indicatorFacet"></button>\n                    <p-galleriaItemSlot type="indicator" [index]="index" [templates]="templates"></p-galleriaItemSlot>\n                </li>\n            </ul>\n        </div>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [{
    type: Galleria
  }], {
    id: [{
      type: Input
    }],
    circular: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    showItemNavigators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showIndicators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    slideShowActive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    changeItemOnIndicatorHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoPlay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    templates: [{
      type: Input
    }],
    indicatorFacet: [{
      type: Input
    }],
    captionFacet: [{
      type: Input
    }],
    startSlideShow: [{
      type: Output
    }],
    stopSlideShow: [{
      type: Output
    }],
    onActiveIndexChange: [{
      type: Output
    }],
    activeIndex: [{
      type: Input
    }]
  });
})();
var _GalleriaThumbnails = class _GalleriaThumbnails {
  constructor(galleria, document2, platformId, renderer, cd) {
    __publicField(this, "galleria");
    __publicField(this, "document");
    __publicField(this, "platformId");
    __publicField(this, "renderer");
    __publicField(this, "cd");
    __publicField(this, "containerId");
    __publicField(this, "value");
    __publicField(this, "isVertical", false);
    __publicField(this, "slideShowActive", false);
    __publicField(this, "circular", false);
    __publicField(this, "responsiveOptions");
    __publicField(this, "contentHeight", "300px");
    __publicField(this, "showThumbnailNavigators", true);
    __publicField(this, "templates");
    __publicField(this, "onActiveIndexChange", new EventEmitter());
    __publicField(this, "stopSlideShow", new EventEmitter());
    __publicField(this, "itemsContainer");
    __publicField(this, "index");
    __publicField(this, "startPos", null);
    __publicField(this, "thumbnailsStyle", null);
    __publicField(this, "sortedResponsiveOptions", null);
    __publicField(this, "totalShiftedItems", 0);
    __publicField(this, "page", 0);
    __publicField(this, "documentResizeListener");
    __publicField(this, "_numVisible", 0);
    __publicField(this, "d_numVisible", 0);
    __publicField(this, "_oldNumVisible", 0);
    __publicField(this, "_activeIndex", 0);
    __publicField(this, "_oldactiveIndex", 0);
    this.galleria = galleria;
    this.document = document2;
    this.platformId = platformId;
    this.renderer = renderer;
    this.cd = cd;
  }
  get numVisible() {
    return this._numVisible;
  }
  set numVisible(numVisible) {
    this._numVisible = numVisible;
    this._oldNumVisible = this.d_numVisible;
    this.d_numVisible = numVisible;
  }
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(activeIndex) {
    this._oldactiveIndex = this._activeIndex;
    this._activeIndex = activeIndex;
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createStyle();
      if (this.responsiveOptions) {
        this.bindDocumentListeners();
      }
    }
  }
  ngAfterContentChecked() {
    let totalShiftedItems = this.totalShiftedItems;
    if ((this._oldNumVisible !== this.d_numVisible || this._oldactiveIndex !== this._activeIndex) && this.itemsContainer) {
      if (this._activeIndex <= this.getMedianItemIndex()) {
        totalShiftedItems = 0;
      } else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this._activeIndex) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      } else if (this.value.length - this.d_numVisible < this._activeIndex && this.d_numVisible % 2 === 0) {
        totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex() + 1;
      } else {
        totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex();
      }
      if (totalShiftedItems !== this.totalShiftedItems) {
        this.totalShiftedItems = totalShiftedItems;
      }
      if (this.itemsContainer && this.itemsContainer.nativeElement) {
        this.itemsContainer.nativeElement.style.transform = this.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
      }
      if (this._oldactiveIndex !== this._activeIndex) {
        DomHandler.removeClass(this.itemsContainer.nativeElement, "p-items-hidden");
        this.itemsContainer.nativeElement.style.transition = "transform 500ms ease 0s";
      }
      this._oldactiveIndex = this._activeIndex;
      this._oldNumVisible = this.d_numVisible;
    }
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.calculatePosition();
    }
  }
  createStyle() {
    var _a, _b;
    if (!this.thumbnailsStyle) {
      this.thumbnailsStyle = this.document.createElement("style");
      this.document.body.appendChild(this.thumbnailsStyle);
    }
    let innerHTML = "\n            #".concat(this.containerId, " .p-galleria-thumbnail-item {\n                flex: 1 0 ").concat(100 / this.d_numVisible, "%\n            }\n        ");
    if (this.responsiveOptions) {
      this.sortedResponsiveOptions = [...this.responsiveOptions];
      this.sortedResponsiveOptions.sort((data1, data2) => {
        const value1 = data1.breakpoint;
        const value2 = data2.breakpoint;
        let result = null;
        if (value1 == null && value2 != null) result = -1;
        else if (value1 != null && value2 == null) result = 1;
        else if (value1 == null && value2 == null) result = 0;
        else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2, void 0, {
          numeric: true
        });
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return -1 * result;
      });
      for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
        let res = this.sortedResponsiveOptions[i];
        innerHTML += "\n                    @media screen and (max-width: ".concat(res.breakpoint, ") {\n                        #").concat(this.containerId, " .p-galleria-thumbnail-item {\n                            flex: 1 0 ").concat(100 / res.numVisible, "%\n                        }\n                    }\n                ");
      }
    }
    this.thumbnailsStyle.innerHTML = innerHTML;
    DomHandler.setAttribute(this.thumbnailsStyle, "nonce", (_b = (_a = this.galleria.config) == null ? void 0 : _a.csp()) == null ? void 0 : _b.nonce);
  }
  calculatePosition() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.itemsContainer && this.sortedResponsiveOptions) {
        let windowWidth = window.innerWidth;
        let matchedResponsiveData = {
          numVisible: this._numVisible
        };
        for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
          let res = this.sortedResponsiveOptions[i];
          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveData = res;
          }
        }
        if (this.d_numVisible !== matchedResponsiveData.numVisible) {
          this.d_numVisible = matchedResponsiveData.numVisible;
          this.cd.markForCheck();
        }
      }
    }
  }
  getTabIndex(index) {
    return this.isItemActive(index) ? 0 : null;
  }
  navForward(e) {
    this.stopTheSlideShow();
    let nextItemIndex = this._activeIndex + 1;
    if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 || this.circular)) {
      this.step(-1);
    }
    let activeIndex = this.circular && this.value.length - 1 === this._activeIndex ? 0 : nextItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  navBackward(e) {
    this.stopTheSlideShow();
    let prevItemIndex = this._activeIndex !== 0 ? this._activeIndex - 1 : 0;
    let diff = prevItemIndex + this.totalShiftedItems;
    if (this.d_numVisible - diff - 1 > this.getMedianItemIndex() && (-1 * this.totalShiftedItems !== 0 || this.circular)) {
      this.step(1);
    }
    let activeIndex = this.circular && this._activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  onItemClick(index) {
    this.stopTheSlideShow();
    let selectedItemIndex = index;
    if (selectedItemIndex !== this._activeIndex) {
      const diff = selectedItemIndex + this.totalShiftedItems;
      let dir = 0;
      if (selectedItemIndex < this._activeIndex) {
        dir = this.d_numVisible - diff - 1 - this.getMedianItemIndex();
        if (dir > 0 && -1 * this.totalShiftedItems !== 0) {
          this.step(dir);
        }
      } else {
        dir = this.getMedianItemIndex() - diff;
        if (dir < 0 && -1 * this.totalShiftedItems < this.getTotalPageNumber() - 1) {
          this.step(dir);
        }
      }
      this.activeIndex = selectedItemIndex;
      this.onActiveIndexChange.emit(this.activeIndex);
    }
  }
  onThumbnailKeydown(event, index) {
    if (event.code === "Enter" || event.code === "Space") {
      this.onItemClick(index);
      event.preventDefault();
    }
    switch (event.code) {
      case "ArrowRight":
        this.onRightKey();
        break;
      case "ArrowLeft":
        this.onLeftKey();
        break;
      case "Home":
        this.onHomeKey();
        event.preventDefault();
        break;
      case "End":
        this.onEndKey();
        event.preventDefault();
        break;
      case "ArrowUp":
      case "ArrowDown":
        event.preventDefault();
        break;
      case "Tab":
        this.onTabKey();
        break;
      default:
        break;
    }
  }
  onRightKey() {
    const indicators = DomHandler.find(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"]');
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, activeIndex + 1 === indicators.length ? indicators.length - 1 : activeIndex + 1);
  }
  onLeftKey() {
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, activeIndex - 1 <= 0 ? 0 : activeIndex - 1);
  }
  onHomeKey() {
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, 0);
  }
  onEndKey() {
    const indicators = DomHandler.find(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"]');
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, indicators.length - 1);
  }
  onTabKey() {
    const indicators = [...DomHandler.find(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"]')];
    const highlightedIndex = indicators.findIndex((ind) => DomHandler.getAttribute(ind, "data-p-active") === true);
    const activeIndicator = DomHandler.findSingle(this.itemsContainer.nativeElement, '[tabindex="0"]');
    const activeIndex = indicators.findIndex((ind) => ind === activeIndicator.parentElement);
    indicators[activeIndex].children[0].tabIndex = "-1";
    indicators[highlightedIndex].children[0].tabIndex = "0";
  }
  findFocusedIndicatorIndex() {
    const indicators = [...DomHandler.find(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"]')];
    const activeIndicator = DomHandler.findSingle(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"] > [tabindex="0"]');
    return indicators.findIndex((ind) => ind === activeIndicator.parentElement);
  }
  changedFocusedIndicator(prevInd, nextInd) {
    const indicators = DomHandler.find(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"]');
    indicators[prevInd].children[0].tabIndex = "-1";
    indicators[nextInd].children[0].tabIndex = "0";
    indicators[nextInd].children[0].focus();
  }
  step(dir) {
    let totalShiftedItems = this.totalShiftedItems + dir;
    if (dir < 0 && -1 * totalShiftedItems + this.d_numVisible > this.value.length - 1) {
      totalShiftedItems = this.d_numVisible - this.value.length;
    } else if (dir > 0 && totalShiftedItems > 0) {
      totalShiftedItems = 0;
    }
    if (this.circular) {
      if (dir < 0 && this.value.length - 1 === this._activeIndex) {
        totalShiftedItems = 0;
      } else if (dir > 0 && this._activeIndex === 0) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      }
    }
    if (this.itemsContainer) {
      DomHandler.removeClass(this.itemsContainer.nativeElement, "p-items-hidden");
      this.itemsContainer.nativeElement.style.transform = this.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
      this.itemsContainer.nativeElement.style.transition = "transform 500ms ease 0s";
    }
    this.totalShiftedItems = totalShiftedItems;
  }
  stopTheSlideShow() {
    if (this.slideShowActive && this.stopSlideShow) {
      this.stopSlideShow.emit();
    }
  }
  changePageOnTouch(e, diff) {
    if (diff < 0) {
      this.navForward(e);
    } else {
      this.navBackward(e);
    }
  }
  getTotalPageNumber() {
    return this.value.length > this.d_numVisible ? this.value.length - this.d_numVisible + 1 : 0;
  }
  getMedianItemIndex() {
    let index = Math.floor(this.d_numVisible / 2);
    return this.d_numVisible % 2 ? index : index - 1;
  }
  onTransitionEnd() {
    if (this.itemsContainer && this.itemsContainer.nativeElement) {
      DomHandler.addClass(this.itemsContainer.nativeElement, "p-items-hidden");
      this.itemsContainer.nativeElement.style.transition = "";
    }
  }
  onTouchEnd(e) {
    let touchobj = e.changedTouches[0];
    if (this.isVertical) {
      this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
    } else {
      this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
    }
  }
  onTouchMove(e) {
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  onTouchStart(e) {
    let touchobj = e.changedTouches[0];
    this.startPos = {
      x: touchobj.pageX,
      y: touchobj.pageY
    };
  }
  isNavBackwardDisabled() {
    return !this.circular && this._activeIndex === 0 || this.value.length <= this.d_numVisible;
  }
  isNavForwardDisabled() {
    return !this.circular && this._activeIndex === this.value.length - 1 || this.value.length <= this.d_numVisible;
  }
  firstItemAciveIndex() {
    return this.totalShiftedItems * -1;
  }
  lastItemActiveIndex() {
    return this.firstItemAciveIndex() + this.d_numVisible - 1;
  }
  isItemActive(index) {
    return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
  }
  bindDocumentListeners() {
    if (isPlatformBrowser(this.platformId)) {
      const window2 = this.document.defaultView || "window";
      this.documentResizeListener = this.renderer.listen(window2, "resize", () => {
        this.calculatePosition();
      });
    }
  }
  unbindDocumentListeners() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  ngOnDestroy() {
    var _a;
    if (this.responsiveOptions) {
      this.unbindDocumentListeners();
    }
    if (this.thumbnailsStyle) {
      (_a = this.thumbnailsStyle.parentNode) == null ? void 0 : _a.removeChild(this.thumbnailsStyle);
    }
  }
  ariaPrevButtonLabel() {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.prevPageLabel : void 0;
  }
  ariaNextButtonLabel() {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.nextPageLabel : void 0;
  }
  ariaPageLabel(value) {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.pageLabel.replace(/{page}/g, value) : void 0;
  }
};
__publicField(_GalleriaThumbnails, "ɵfac", function GalleriaThumbnails_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleriaThumbnails)(ɵɵdirectiveInject(Galleria), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef));
});
__publicField(_GalleriaThumbnails, "ɵcmp", ɵɵdefineComponent({
  type: _GalleriaThumbnails,
  selectors: [["p-galleriaThumbnails"]],
  viewQuery: function GalleriaThumbnails_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c11, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemsContainer = _t.first);
    }
  },
  inputs: {
    containerId: "containerId",
    value: "value",
    isVertical: [2, "isVertical", "isVertical", booleanAttribute],
    slideShowActive: [2, "slideShowActive", "slideShowActive", booleanAttribute],
    circular: [2, "circular", "circular", booleanAttribute],
    responsiveOptions: "responsiveOptions",
    contentHeight: "contentHeight",
    showThumbnailNavigators: "showThumbnailNavigators",
    templates: "templates",
    numVisible: "numVisible",
    activeIndex: "activeIndex"
  },
  outputs: {
    onActiveIndexChange: "onActiveIndexChange",
    stopSlideShow: "stopSlideShow"
  },
  features: [ɵɵInputTransformsFeature],
  decls: 8,
  vars: 6,
  consts: [["itemsContainer", ""], [1, "p-galleria-thumbnail-wrapper"], [1, "p-galleria-thumbnail-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "p-galleria-thumbnail-items-container", 3, "ngStyle"], ["role", "tablist", 1, "p-galleria-thumbnail-items", 3, "transitionend", "touchstart", "touchmove"], [3, "ngClass", "keydown", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 3, "click", "ngClass", "disabled"], [4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [3, "keydown", "ngClass"], [1, "p-galleria-thumbnail-item-content", 3, "click", "touchend", "keydown.enter"], ["type", "thumbnail", 3, "item", "templates"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"]],
  template: function GalleriaThumbnails_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 1)(1, "div", 2);
      ɵɵtemplate(2, GalleriaThumbnails_button_2_Template, 3, 7, "button", 3);
      ɵɵelementStart(3, "div", 4)(4, "div", 5, 0);
      ɵɵlistener("transitionend", function GalleriaThumbnails_Template_div_transitionend_4_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onTransitionEnd());
      })("touchstart", function GalleriaThumbnails_Template_div_touchstart_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onTouchStart($event));
      })("touchmove", function GalleriaThumbnails_Template_div_touchmove_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onTouchMove($event));
      });
      ɵɵtemplate(6, GalleriaThumbnails_div_6_Template, 3, 15, "div", 6);
      ɵɵelementEnd()();
      ɵɵtemplate(7, GalleriaThumbnails_button_7_Template, 3, 7, "button", 3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showThumbnailNavigators);
      ɵɵadvance();
      ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c12, ctx.isVertical ? ctx.contentHeight : ""));
      ɵɵadvance(3);
      ɵɵproperty("ngForOf", ctx.value);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showThumbnailNavigators);
    }
  },
  dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Ripple, ChevronRightIcon, ChevronLeftIcon, GalleriaItemSlot],
  encapsulation: 2,
  changeDetection: 0
}));
var GalleriaThumbnails = _GalleriaThumbnails;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleriaThumbnails, [{
    type: Component,
    args: [{
      selector: "p-galleriaThumbnails",
      template: '\n        <div class="p-galleria-thumbnail-wrapper">\n            <div class="p-galleria-thumbnail-container">\n                <button\n                    *ngIf="showThumbnailNavigators"\n                    type="button"\n                    [ngClass]="{ \'p-galleria-thumbnail-prev p-link\': true, \'p-disabled\': this.isNavBackwardDisabled() }"\n                    (click)="navBackward($event)"\n                    [disabled]="isNavBackwardDisabled()"\n                    pRipple\n                    [attr.aria-label]="ariaPrevButtonLabel()"\n                >\n                    <ng-container *ngIf="!galleria.previousThumbnailIconTemplate">\n                        <ChevronLeftIcon *ngIf="!isVertical" [styleClass]="\'p-galleria-thumbnail-prev-icon\'" />\n                        <ChevronUpIcon *ngIf="isVertical" [styleClass]="\'p-galleria-thumbnail-prev-icon\'" />\n                    </ng-container>\n                    <ng-template *ngTemplateOutlet="galleria.previousThumbnailIconTemplate"></ng-template>\n                </button>\n                <div class="p-galleria-thumbnail-items-container" [ngStyle]="{ height: isVertical ? contentHeight : \'\' }">\n                    <div #itemsContainer class="p-galleria-thumbnail-items" (transitionend)="onTransitionEnd()" (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)" role="tablist">\n                        <div\n                            *ngFor="let item of value; let index = index"\n                            [ngClass]="{\n                                \'p-galleria-thumbnail-item\': true,\n                                \'p-galleria-thumbnail-item-current\': activeIndex === index,\n                                \'p-galleria-thumbnail-item-active\': isItemActive(index),\n                                \'p-galleria-thumbnail-item-start\': firstItemAciveIndex() === index,\n                                \'p-galleria-thumbnail-item-end\': lastItemActiveIndex() === index\n                            }"\n                            [attr.aria-selected]="activeIndex === index"\n                            [attr.aria-controls]="containerId + \'_item_\' + index"\n                            [attr.data-pc-section]="\'thumbnailitem\'"\n                            [attr.data-p-active]="activeIndex === index"\n                            (keydown)="onThumbnailKeydown($event, index)"\n                        >\n                            <div\n                                class="p-galleria-thumbnail-item-content"\n                                [attr.tabindex]="activeIndex === index ? 0 : -1"\n                                [attr.aria-current]="activeIndex === index ? \'page\' : undefined"\n                                [attr.aria-label]="ariaPageLabel(index + 1)"\n                                (click)="onItemClick(index)"\n                                (touchend)="onItemClick(index)"\n                                (keydown.enter)="onItemClick(index)"\n                            >\n                                <p-galleriaItemSlot type="thumbnail" [item]="item" [templates]="templates"></p-galleriaItemSlot>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <button\n                    *ngIf="showThumbnailNavigators"\n                    type="button"\n                    [ngClass]="{ \'p-galleria-thumbnail-next p-link\': true, \'p-disabled\': this.isNavForwardDisabled() }"\n                    (click)="navForward($event)"\n                    [disabled]="isNavForwardDisabled()"\n                    pRipple\n                    [attr.aria-label]="ariaNextButtonLabel()"\n                >\n                    <ng-container *ngIf="!galleria.nextThumbnailIconTemplate">\n                        <ChevronRightIcon *ngIf="!isVertical" [ngClass]="\'p-galleria-thumbnail-next-icon\'" />\n                        <ChevronDownIcon *ngIf="isVertical" [ngClass]="\'p-galleria-thumbnail-next-icon\'" />\n                    </ng-container>\n                    <ng-template *ngTemplateOutlet="galleria.nextThumbnailIconTemplate"></ng-template>\n                </button>\n            </div>\n        </div>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [{
    type: Galleria
  }, {
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
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }], {
    containerId: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    isVertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    slideShowActive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    circular: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    responsiveOptions: [{
      type: Input
    }],
    contentHeight: [{
      type: Input
    }],
    showThumbnailNavigators: [{
      type: Input
    }],
    templates: [{
      type: Input
    }],
    onActiveIndexChange: [{
      type: Output
    }],
    stopSlideShow: [{
      type: Output
    }],
    itemsContainer: [{
      type: ViewChild,
      args: ["itemsContainer"]
    }],
    numVisible: [{
      type: Input
    }],
    activeIndex: [{
      type: Input
    }]
  });
})();
var _GalleriaModule = class _GalleriaModule {
};
__publicField(_GalleriaModule, "ɵfac", function GalleriaModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleriaModule)();
});
__publicField(_GalleriaModule, "ɵmod", ɵɵdefineNgModule({
  type: _GalleriaModule,
  declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails],
  imports: [CommonModule, SharedModule, RippleModule, TimesIcon, ChevronRightIcon, ChevronLeftIcon, WindowMaximizeIcon, WindowMinimizeIcon, FocusTrapModule],
  exports: [CommonModule, Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, SharedModule]
}));
__publicField(_GalleriaModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, SharedModule, RippleModule, TimesIcon, ChevronRightIcon, ChevronLeftIcon, WindowMaximizeIcon, WindowMinimizeIcon, FocusTrapModule, CommonModule, SharedModule]
}));
var GalleriaModule = _GalleriaModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleriaModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, RippleModule, TimesIcon, ChevronRightIcon, ChevronLeftIcon, WindowMaximizeIcon, WindowMinimizeIcon, FocusTrapModule],
      exports: [CommonModule, Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, SharedModule],
      declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails]
    }]
  }], null, null);
})();
export {
  Galleria,
  GalleriaContent,
  GalleriaItem,
  GalleriaItemSlot,
  GalleriaModule,
  GalleriaThumbnails
};
//# sourceMappingURL=primeng_galleria.js.map
