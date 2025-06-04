import {
  WindowMaximizeIcon,
  WindowMinimizeIcon
} from "./chunk-QY4H5HEG.js";
import {
  FocusTrap,
  FocusTrapModule
} from "./chunk-UZD2LWRL.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-ZLJ4QAH5.js";
import "./chunk-VYCWYYRS.js";
import {
  TimesIcon
} from "./chunk-AP6UZX4B.js";
import {
  Ripple,
  RippleModule
} from "./chunk-MUJBADSC.js";
import "./chunk-LND2F6FW.js";
import "./chunk-BJLZ3T2F.js";
import {
  Footer,
  Header,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  TranslationKeys
} from "./chunk-ZROJCIWL.js";
import {
  UniqueComponentId,
  zindexutils
} from "./chunk-U3NLM53U.js";
import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-5S7AEMUZ.js";
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
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
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
  ɵɵpureFunction4,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField,
  __spreadValues
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-dialog.mjs
var _c0 = ["titlebar"];
var _c1 = ["content"];
var _c2 = ["footer"];
var _c3 = ["*", [["p-header"]], [["p-footer"]]];
var _c4 = ["*", "p-header", "p-footer"];
var _c5 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => ({
  "p-dialog-mask": true,
  "p-component-overlay p-component-overlay-enter": a0,
  "p-dialog-mask-scrollblocker": a1,
  "p-dialog-left": a2,
  "p-dialog-right": a3,
  "p-dialog-top": a4,
  "p-dialog-top-left": a5,
  "p-dialog-top-right": a6,
  "p-dialog-bottom": a7,
  "p-dialog-bottom-left": a8,
  "p-dialog-bottom-right": a9
});
var _c6 = (a0, a1, a2, a3) => ({
  "p-dialog p-component": true,
  "p-dialog-rtl": a0,
  "p-dialog-draggable": a1,
  "p-dialog-resizable": a2,
  "p-dialog-maximized": a3
});
var _c7 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
var _c8 = (a0) => ({
  value: "visible",
  params: a0
});
var _c9 = () => ({
  "p-dialog-header-icon p-dialog-header-maximize p-link": true
});
var _c10 = () => ({
  "p-dialog-header-icon p-dialog-header-close p-link": true
});
var _c11 = () => ({
  "min-width": 0
});
function Dialog_div_0_div_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dialog_div_0_div_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headlessTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15);
    ɵɵlistener("mousedown", function Dialog_div_0_div_1_ng_template_3_div_0_Template_div_mousedown_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.initResize($event));
    });
    ɵɵelementEnd();
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("id", ctx_r1.ariaLabelledBy);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.header);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵprojection(1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("id", ctx_r1.ariaLabelledBy);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 25);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵproperty("ngClass", ctx_r1.maximized ? ctx_r1.minimizeIcon : ctx_r1.maximizeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMaximizeIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "WindowMaximizeIcon", 27);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-dialog-header-maximize-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMinimizeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "WindowMinimizeIcon", 27);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-dialog-header-maximize-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMaximizeIcon_1_Template, 1, 1, "WindowMaximizeIcon", 26)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMinimizeIcon_2_Template, 1, 1, "WindowMinimizeIcon", 26);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.maximized && !ctx_r1.maximizeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.maximized && !ctx_r1.minimizeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_Template, 1, 0, null, 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.maximizeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_Template, 1, 0, null, 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.minimizeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 22);
    ɵɵlistener("click", function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r1.maximize());
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template_button_keydown_enter_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r1.maximize());
    });
    ɵɵtemplate(1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_span_1_Template, 1, 1, "span", 23)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_Template, 3, 2, "ng-container", 24)(3, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_Template, 2, 1, "ng-container", 24)(4, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_Template, 2, 1, "ng-container", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("ngClass", ɵɵpureFunction0(7, _c9));
    ɵɵattribute("tabindex", ctx_r1.maximizable ? "0" : "-1")("aria-label", ctx_r1.maximizeLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.maximizeIcon && !ctx_r1.maximizeIconTemplate && !ctx_r1.minimizeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.maximizeIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.maximized);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.maximized);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 30);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(7);
    ɵɵproperty("ngClass", ctx_r1.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_TimesIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesIcon", 27);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-dialog-header-close-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_span_1_Template, 1, 1, "span", 29)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_TimesIcon_2_Template, 1, 1, "TimesIcon", 26);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.closeIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_Template, 1, 0, null, 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.closeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 28);
    ɵɵlistener("click", function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r1.close($event));
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template_button_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r1.close($event));
    });
    ɵɵtemplate(1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_Template, 3, 2, "ng-container", 24)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_Template, 2, 1, "span", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("ngClass", ɵɵpureFunction0(6, _c10))("ngStyle", ɵɵpureFunction0(7, _c11));
    ɵɵattribute("aria-label", ctx_r1.closeAriaLabel)("tabindex", ctx_r1.closeTabindex);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.closeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.closeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16, 3);
    ɵɵlistener("mousedown", function Dialog_div_0_div_1_ng_template_3_div_1_Template_div_mousedown_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.initDrag($event));
    });
    ɵɵtemplate(2, Dialog_div_0_div_1_ng_template_3_div_1_span_2_Template, 2, 2, "span", 17)(3, Dialog_div_0_div_1_ng_template_3_div_1_span_3_Template, 2, 1, "span", 17)(4, Dialog_div_0_div_1_ng_template_3_div_1_ng_container_4_Template, 1, 0, "ng-container", 10);
    ɵɵelementStart(5, "div", 18);
    ɵɵtemplate(6, Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template, 5, 8, "button", 19)(7, Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template, 3, 8, "button", 20);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.headerFacet && !ctx_r1.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.headerFacet);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.maximizable);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.closable);
  }
}
function Dialog_div_0_div_1_ng_template_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 31, 4);
    ɵɵprojection(2, 2);
    ɵɵtemplate(3, Dialog_div_0_div_1_ng_template_3_div_6_ng_container_3_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dialog_div_0_div_1_ng_template_3_div_0_Template, 1, 0, "div", 11)(1, Dialog_div_0_div_1_ng_template_3_div_1_Template, 8, 5, "div", 12);
    ɵɵelementStart(2, "div", 13, 2);
    ɵɵprojection(4);
    ɵɵtemplate(5, Dialog_div_0_div_1_ng_template_3_ng_container_5_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
    ɵɵtemplate(6, Dialog_div_0_div_1_ng_template_3_div_6_Template, 4, 1, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r1.resizable);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showHeader);
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.contentStyleClass);
    ɵɵproperty("ngClass", "p-dialog-content")("ngStyle", ctx_r1.contentStyle);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.footerFacet || ctx_r1.footerTemplate);
  }
}
function Dialog_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8, 0);
    ɵɵlistener("@animation.start", function Dialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onAnimationStart($event));
    })("@animation.done", function Dialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onAnimationEnd($event));
    });
    ɵɵtemplate(2, Dialog_div_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 9)(3, Dialog_div_0_div_1_ng_template_3_Template, 7, 8, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const notHeadless_r7 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction4(10, _c6, ctx_r1.rtl, ctx_r1.draggable, ctx_r1.resizable, ctx_r1.maximized))("ngStyle", ctx_r1.style)("pFocusTrapDisabled", ctx_r1.focusTrap === false)("@animation", ɵɵpureFunction1(18, _c8, ɵɵpureFunction2(15, _c7, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    ɵɵattribute("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-modal", true);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.headlessTemplate)("ngIfElse", notHeadless_r7);
  }
}
function Dialog_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, Dialog_div_0_div_1_Template, 5, 20, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.maskStyleClass);
    ɵɵproperty("ngStyle", ctx_r1.maskStyle)("ngClass", ɵɵpureFunctionV(5, _c5, [ctx_r1.modal, ctx_r1.modal || ctx_r1.blockScroll, ctx_r1.position === "left", ctx_r1.position === "right", ctx_r1.position === "top", ctx_r1.position === "topleft" || ctx_r1.position === "top-left", ctx_r1.position === "topright" || ctx_r1.position === "top-right", ctx_r1.position === "bottom", ctx_r1.position === "bottomleft" || ctx_r1.position === "bottom-left", ctx_r1.position === "bottomright" || ctx_r1.position === "bottom-right"]));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.visible);
  }
}
var showAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{transition}}")]);
var hideAnimation = animation([animate("{{transition}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var _Dialog = class _Dialog {
  constructor(document2, platformId, el, renderer, zone, cd, config) {
    __publicField(this, "document");
    __publicField(this, "platformId");
    __publicField(this, "el");
    __publicField(this, "renderer");
    __publicField(this, "zone");
    __publicField(this, "cd");
    __publicField(this, "config");
    /**
     * Title text of the dialog.
     * @group Props
     */
    __publicField(this, "header");
    /**
     * Enables dragging to change the position using header.
     * @group Props
     */
    __publicField(this, "draggable", true);
    /**
     * Enables resizing of the content.
     * @group Props
     */
    __publicField(this, "resizable", true);
    /**
     * Style of the content section.
     * @group Props
     */
    __publicField(this, "contentStyle");
    /**
     * Style class of the content.
     * @group Props
     */
    __publicField(this, "contentStyleClass");
    /**
     * Defines if background should be blocked when dialog is displayed.
     * @group Props
     */
    __publicField(this, "modal", false);
    /**
     * Specifies if pressing escape key should hide the dialog.
     * @group Props
     */
    __publicField(this, "closeOnEscape", true);
    /**
     * Specifies if clicking the modal background should hide the dialog.
     * @group Props
     */
    __publicField(this, "dismissableMask", false);
    /**
     * When enabled dialog is displayed in RTL direction.
     * @group Props
     */
    __publicField(this, "rtl", false);
    /**
     * Adds a close icon to the header to hide the dialog.
     * @group Props
     */
    __publicField(this, "closable", true);
    /**
     * Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    __publicField(this, "appendTo");
    /**
     * Object literal to define widths per screen size.
     * @group Props
     */
    __publicField(this, "breakpoints");
    /**
     * Style class of the component.
     * @group Props
     */
    __publicField(this, "styleClass");
    /**
     * Style class of the mask.
     * @group Props
     */
    __publicField(this, "maskStyleClass");
    /**
     * Style of the mask.
     * @group Props
     */
    __publicField(this, "maskStyle");
    /**
     * Whether to show the header or not.
     * @group Props
     */
    __publicField(this, "showHeader", true);
    /**
     * Whether background scroll should be blocked when dialog is visible.
     * @group Props
     */
    __publicField(this, "blockScroll", false);
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
     * Minimum value for the left coordinate of dialog in dragging.
     * @group Props
     */
    __publicField(this, "minX", 0);
    /**
     * Minimum value for the top coordinate of dialog in dragging.
     * @group Props
     */
    __publicField(this, "minY", 0);
    /**
     * When enabled, first focusable element receives focus on show.
     * @group Props
     */
    __publicField(this, "focusOnShow", true);
    /**
     * Whether the dialog can be displayed full screen.
     * @group Props
     */
    __publicField(this, "maximizable", false);
    /**
     * Keeps dialog in the viewport.
     * @group Props
     */
    __publicField(this, "keepInViewport", true);
    /**
     * When enabled, can only focus on elements inside the dialog.
     * @group Props
     */
    __publicField(this, "focusTrap", true);
    /**
     * Transition options of the animation.
     * @group Props
     */
    __publicField(this, "transitionOptions", "150ms cubic-bezier(0, 0, 0.2, 1)");
    /**
     * Name of the close icon.
     * @group Props
     */
    __publicField(this, "closeIcon");
    /**
     * Defines a string that labels the close button for accessibility.
     * @group Props
     */
    __publicField(this, "closeAriaLabel");
    /**
     * Index of the close button in tabbing order.
     * @group Props
     */
    __publicField(this, "closeTabindex", "0");
    /**
     * Name of the minimize icon.
     * @group Props
     */
    __publicField(this, "minimizeIcon");
    /**
     * Name of the maximize icon.
     * @group Props
     */
    __publicField(this, "maximizeIcon");
    /**
     * Callback to invoke when dialog is shown.
     * @group Emits
     */
    __publicField(this, "onShow", new EventEmitter());
    /**
     * Callback to invoke when dialog is hidden.
     * @group Emits
     */
    __publicField(this, "onHide", new EventEmitter());
    /**
     * This EventEmitter is used to notify changes in the visibility state of a component.
     * @param {boolean} value - New value.
     * @group Emits
     */
    __publicField(this, "visibleChange", new EventEmitter());
    /**
     * Callback to invoke when dialog resizing is initiated.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    __publicField(this, "onResizeInit", new EventEmitter());
    /**
     * Callback to invoke when dialog resizing is completed.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    __publicField(this, "onResizeEnd", new EventEmitter());
    /**
     * Callback to invoke when dialog dragging is completed.
     * @param {DragEvent} event - Drag event.
     * @group Emits
     */
    __publicField(this, "onDragEnd", new EventEmitter());
    /**
     * Callback to invoke when dialog maximized or unmaximized.
     * @group Emits
     */
    __publicField(this, "onMaximize", new EventEmitter());
    __publicField(this, "headerFacet");
    __publicField(this, "footerFacet");
    __publicField(this, "templates");
    __publicField(this, "headerViewChild");
    __publicField(this, "contentViewChild");
    __publicField(this, "footerViewChild");
    __publicField(this, "headerTemplate");
    __publicField(this, "contentTemplate");
    __publicField(this, "footerTemplate");
    __publicField(this, "maximizeIconTemplate");
    __publicField(this, "closeIconTemplate");
    __publicField(this, "minimizeIconTemplate");
    __publicField(this, "headlessTemplate");
    __publicField(this, "_visible", false);
    __publicField(this, "maskVisible");
    __publicField(this, "container");
    __publicField(this, "wrapper");
    __publicField(this, "dragging");
    __publicField(this, "ariaLabelledBy", this.getAriaLabelledBy());
    __publicField(this, "documentDragListener");
    __publicField(this, "documentDragEndListener");
    __publicField(this, "resizing");
    __publicField(this, "documentResizeListener");
    __publicField(this, "documentResizeEndListener");
    __publicField(this, "documentEscapeListener");
    __publicField(this, "maskClickListener");
    __publicField(this, "lastPageX");
    __publicField(this, "lastPageY");
    __publicField(this, "preventVisibleChangePropagation");
    __publicField(this, "maximized");
    __publicField(this, "preMaximizeContentHeight");
    __publicField(this, "preMaximizeContainerWidth");
    __publicField(this, "preMaximizeContainerHeight");
    __publicField(this, "preMaximizePageX");
    __publicField(this, "preMaximizePageY");
    __publicField(this, "id", UniqueComponentId());
    __publicField(this, "_style", {});
    __publicField(this, "_position", "center");
    __publicField(this, "originalStyle");
    __publicField(this, "transformOptions", "scale(0.7)");
    __publicField(this, "styleElement");
    __publicField(this, "window");
    this.document = document2;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.zone = zone;
    this.cd = cd;
    this.config = config;
    this.window = this.document.defaultView;
  }
  /**
   * Defines the left offset of dialog.
   * @group Props
   * @deprecated positionLeft property is deprecated.
   */
  get positionLeft() {
    return 0;
  }
  set positionLeft(_positionLeft) {
    console.log("positionLeft property is deprecated.");
  }
  /**
   * Defines the top offset of dialog.
   * @group Props
   * @deprecated positionTop property is deprecated.
   */
  get positionTop() {
    return 0;
  }
  set positionTop(_positionTop) {
    console.log("positionTop property is deprecated.");
  }
  /**
   * Defines if the component is responsive.
   * @group Props
   * @deprecated Responsive property is deprecated.
   */
  get responsive() {
    return false;
  }
  set responsive(_responsive) {
    console.log("Responsive property is deprecated.");
  }
  /**
   * Defines the breakpoint of the component responsive.
   * @group Props
   * @deprecated Breakpoint property is not utilized and deprecated. Use breakpoints or CSS media queries instead.
   */
  get breakpoint() {
    return 649;
  }
  set breakpoint(_breakpoint) {
    console.log("Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.");
  }
  /**
   * Specifies the visibility of the dialog.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
    }
  }
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    if (value) {
      this._style = __spreadValues({}, value);
      this.originalStyle = value;
    }
  }
  /**
   * Position of the dialog.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    switch (value) {
      case "topleft":
      case "bottomleft":
      case "left":
        this.transformOptions = "translate3d(-100%, 0px, 0px)";
        break;
      case "topright":
      case "bottomright":
      case "right":
        this.transformOptions = "translate3d(100%, 0px, 0px)";
        break;
      case "bottom":
        this.transformOptions = "translate3d(0px, 100%, 0px)";
        break;
      case "top":
        this.transformOptions = "translate3d(0px, -100%, 0px)";
        break;
      default:
        this.transformOptions = "scale(0.7)";
        break;
    }
  }
  get maximizeLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["maximizeLabel"];
  }
  ngAfterContentInit() {
    var _a;
    (_a = this.templates) == null ? void 0 : _a.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "content":
          this.contentTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "closeicon":
          this.closeIconTemplate = item.template;
          break;
        case "maximizeicon":
          this.maximizeIconTemplate = item.template;
          break;
        case "minimizeicon":
          this.minimizeIconTemplate = item.template;
          break;
        case "headless":
          this.headlessTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  ngOnInit() {
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  getAriaLabelledBy() {
    return this.header !== null ? UniqueComponentId() + "_header" : null;
  }
  parseDurationToMilliseconds(durationString) {
    const transitionTimeRegex = /([\d\.]+)(ms|s)\b/g;
    let totalMilliseconds = 0;
    let match;
    while ((match = transitionTimeRegex.exec(durationString)) !== null) {
      const value = parseFloat(match[1]);
      const unit = match[2];
      if (unit === "ms") {
        totalMilliseconds += value;
      } else if (unit === "s") {
        totalMilliseconds += value * 1e3;
      }
    }
    if (totalMilliseconds === 0) {
      return void 0;
    }
    return totalMilliseconds;
  }
  focus(focusParentElement = ((_a) => (_a = this.contentViewChild) == null ? void 0 : _a.nativeElement)()) {
    const timeoutDuration = this.parseDurationToMilliseconds(this.transitionOptions);
    let focusable = DomHandler.getFocusableElement(focusParentElement, "[autofocus]");
    if (focusable) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => focusable.focus(), timeoutDuration || 5);
      });
      return;
    }
    const focusableElement = DomHandler.getFocusableElement(focusParentElement);
    if (focusableElement) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => focusableElement.focus(), timeoutDuration || 5);
      });
    } else if (this.footerViewChild && focusParentElement !== this.footerViewChild.nativeElement) {
      this.focus(this.footerViewChild.nativeElement);
    }
  }
  close(event) {
    this.visibleChange.emit(false);
    event.preventDefault();
  }
  enableModality() {
    if (this.closable && this.dismissableMask) {
      this.maskClickListener = this.renderer.listen(this.wrapper, "mousedown", (event) => {
        if (this.wrapper && this.wrapper.isSameNode(event.target)) {
          this.close(event);
        }
      });
    }
    if (this.modal) {
      DomHandler.blockBodyScroll();
    }
  }
  disableModality() {
    if (this.wrapper) {
      if (this.dismissableMask) {
        this.unbindMaskClickListener();
      }
      const scrollBlockers = document.querySelectorAll(".p-dialog-mask-scrollblocker");
      if (this.modal && scrollBlockers && scrollBlockers.length == 1) {
        DomHandler.unblockBodyScroll();
      }
      if (!this.cd.destroyed) {
        this.cd.detectChanges();
      }
    }
  }
  maximize() {
    this.maximized = !this.maximized;
    if (!this.modal && !this.blockScroll) {
      if (this.maximized) {
        DomHandler.blockBodyScroll();
      } else {
        DomHandler.unblockBodyScroll();
      }
    }
    this.onMaximize.emit({
      maximized: this.maximized
    });
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("modal", this.container, this.baseZIndex + this.config.zIndex.modal);
      this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
    }
  }
  createStyle() {
    var _a, _b;
    if (isPlatformBrowser(this.platformId)) {
      if (!this.styleElement) {
        this.styleElement = this.renderer.createElement("style");
        this.styleElement.type = "text/css";
        DomHandler.setAttribute(this.styleElement, "nonce", (_b = (_a = this.config) == null ? void 0 : _a.csp()) == null ? void 0 : _b.nonce);
        this.renderer.appendChild(this.document.head, this.styleElement);
        let innerHTML = "";
        for (let breakpoint in this.breakpoints) {
          innerHTML += "\n                        @media screen and (max-width: ".concat(breakpoint, ") {\n                            .p-dialog[").concat(this.id, "]:not(.p-dialog-maximized) {\n                                width: ").concat(this.breakpoints[breakpoint], " !important;\n                            }\n                        }\n                    ");
        }
        this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
      }
    }
  }
  initDrag(event) {
    if (DomHandler.hasClass(event.target, "p-dialog-header-icon") || DomHandler.hasClass(event.target, "p-dialog-header-close-icon") || DomHandler.hasClass(event.target.parentElement, "p-dialog-header-icon")) {
      return;
    }
    if (this.draggable) {
      this.dragging = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      this.container.style.margin = "0";
      DomHandler.addClass(this.document.body, "p-unselectable-text");
    }
  }
  onDrag(event) {
    if (this.dragging) {
      const containerWidth = DomHandler.getOuterWidth(this.container);
      const containerHeight = DomHandler.getOuterHeight(this.container);
      const deltaX = event.pageX - this.lastPageX;
      const deltaY = event.pageY - this.lastPageY;
      const offset = this.container.getBoundingClientRect();
      const containerComputedStyle = getComputedStyle(this.container);
      const leftMargin = parseFloat(containerComputedStyle.marginLeft);
      const topMargin = parseFloat(containerComputedStyle.marginTop);
      const leftPos = offset.left + deltaX - leftMargin;
      const topPos = offset.top + deltaY - topMargin;
      const viewport = DomHandler.getViewport();
      this.container.style.position = "fixed";
      if (this.keepInViewport) {
        if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
          this._style.left = "".concat(leftPos, "px");
          this.lastPageX = event.pageX;
          this.container.style.left = "".concat(leftPos, "px");
        }
        if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
          this._style.top = "".concat(topPos, "px");
          this.lastPageY = event.pageY;
          this.container.style.top = "".concat(topPos, "px");
        }
      } else {
        this.lastPageX = event.pageX;
        this.container.style.left = "".concat(leftPos, "px");
        this.lastPageY = event.pageY;
        this.container.style.top = "".concat(topPos, "px");
      }
    }
  }
  endDrag(event) {
    if (this.dragging) {
      this.dragging = false;
      DomHandler.removeClass(this.document.body, "p-unselectable-text");
      this.cd.detectChanges();
      this.onDragEnd.emit(event);
    }
  }
  resetPosition() {
    this.container.style.position = "";
    this.container.style.left = "";
    this.container.style.top = "";
    this.container.style.margin = "";
  }
  //backward compatibility
  center() {
    this.resetPosition();
  }
  initResize(event) {
    if (this.resizable) {
      this.resizing = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      DomHandler.addClass(this.document.body, "p-unselectable-text");
      this.onResizeInit.emit(event);
    }
  }
  onResize(event) {
    var _a;
    if (this.resizing) {
      let deltaX = event.pageX - this.lastPageX;
      let deltaY = event.pageY - this.lastPageY;
      let containerWidth = DomHandler.getOuterWidth(this.container);
      let containerHeight = DomHandler.getOuterHeight(this.container);
      let contentHeight = DomHandler.getOuterHeight((_a = this.contentViewChild) == null ? void 0 : _a.nativeElement);
      let newWidth = containerWidth + deltaX;
      let newHeight = containerHeight + deltaY;
      let minWidth = this.container.style.minWidth;
      let minHeight = this.container.style.minHeight;
      let offset = this.container.getBoundingClientRect();
      let viewport = DomHandler.getViewport();
      let hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);
      if (hasBeenDragged) {
        newWidth += deltaX;
        newHeight += deltaY;
      }
      if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
        this._style.width = newWidth + "px";
        this.container.style.width = this._style.width;
      }
      if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
        this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + "px";
        if (this._style.height) {
          this._style.height = newHeight + "px";
          this.container.style.height = this._style.height;
        }
      }
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
    }
  }
  resizeEnd(event) {
    if (this.resizing) {
      this.resizing = false;
      DomHandler.removeClass(this.document.body, "p-unselectable-text");
      this.onResizeEnd.emit(event);
    }
  }
  bindGlobalListeners() {
    if (this.draggable) {
      this.bindDocumentDragListener();
      this.bindDocumentDragEndListener();
    }
    if (this.resizable) {
      this.bindDocumentResizeListeners();
    }
    if (this.closeOnEscape && this.closable) {
      this.bindDocumentEscapeListener();
    }
  }
  unbindGlobalListeners() {
    this.unbindDocumentDragListener();
    this.unbindDocumentDragEndListener();
    this.unbindDocumentResizeListeners();
    this.unbindDocumentEscapeListener();
  }
  bindDocumentDragListener() {
    if (!this.documentDragListener) {
      this.zone.runOutsideAngular(() => {
        this.documentDragListener = this.renderer.listen(this.window, "mousemove", this.onDrag.bind(this));
      });
    }
  }
  unbindDocumentDragListener() {
    if (this.documentDragListener) {
      this.documentDragListener();
      this.documentDragListener = null;
    }
  }
  bindDocumentDragEndListener() {
    if (!this.documentDragEndListener) {
      this.zone.runOutsideAngular(() => {
        this.documentDragEndListener = this.renderer.listen(this.window, "mouseup", this.endDrag.bind(this));
      });
    }
  }
  unbindDocumentDragEndListener() {
    if (this.documentDragEndListener) {
      this.documentDragEndListener();
      this.documentDragEndListener = null;
    }
  }
  bindDocumentResizeListeners() {
    if (!this.documentResizeListener && !this.documentResizeEndListener) {
      this.zone.runOutsideAngular(() => {
        this.documentResizeListener = this.renderer.listen(this.window, "mousemove", this.onResize.bind(this));
        this.documentResizeEndListener = this.renderer.listen(this.window, "mouseup", this.resizeEnd.bind(this));
      });
    }
  }
  unbindDocumentResizeListeners() {
    if (this.documentResizeListener && this.documentResizeEndListener) {
      this.documentResizeListener();
      this.documentResizeEndListener();
      this.documentResizeListener = null;
      this.documentResizeEndListener = null;
    }
  }
  bindDocumentEscapeListener() {
    const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
    this.documentEscapeListener = this.renderer.listen(documentTarget, "keydown", (event) => {
      if (event.key == "Escape") {
        this.close(event);
      }
    });
  }
  unbindDocumentEscapeListener() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.wrapper);
      else DomHandler.appendChild(this.wrapper, this.appendTo);
    }
  }
  restoreAppend() {
    if (this.container && this.appendTo) {
      this.renderer.appendChild(this.el.nativeElement, this.wrapper);
    }
  }
  onAnimationStart(event) {
    var _a, _b;
    switch (event.toState) {
      case "visible":
        this.container = event.element;
        this.wrapper = (_a = this.container) == null ? void 0 : _a.parentElement;
        this.moveOnTop();
        this.appendContainer();
        this.bindGlobalListeners();
        (_b = this.container) == null ? void 0 : _b.setAttribute(this.id, "");
        if (this.modal) {
          this.enableModality();
        }
        if (!this.modal && this.blockScroll) {
          DomHandler.addClass(this.document.body, "p-overflow-hidden");
        }
        if (this.focusOnShow) {
          this.focus();
        }
        break;
      case "void":
        if (this.wrapper && this.modal) {
          DomHandler.addClass(this.wrapper, "p-component-overlay-leave");
        }
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.onContainerDestroy();
        this.onHide.emit({});
        this.cd.markForCheck();
        break;
      case "visible":
        this.onShow.emit({});
        break;
    }
  }
  onContainerDestroy() {
    this.unbindGlobalListeners();
    this.dragging = false;
    this.maskVisible = false;
    if (this.maximized) {
      DomHandler.removeClass(this.document.body, "p-overflow-hidden");
      this.document.body.style.removeProperty("--scrollbar-width");
      this.maximized = false;
    }
    if (this.modal) {
      this.disableModality();
    }
    if (this.blockScroll) {
      DomHandler.removeClass(this.document.body, "p-overflow-hidden");
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.container = null;
    this.wrapper = null;
    this._style = this.originalStyle ? __spreadValues({}, this.originalStyle) : {};
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    if (this.container) {
      this.restoreAppend();
      this.onContainerDestroy();
    }
    this.destroyStyle();
  }
};
__publicField(_Dialog, "ɵfac", function Dialog_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Dialog)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig));
});
__publicField(_Dialog, "ɵcmp", ɵɵdefineComponent({
  type: _Dialog,
  selectors: [["p-dialog"]],
  contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, Header, 5);
      ɵɵcontentQuery(dirIndex, Footer, 5);
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerFacet = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Dialog_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c1, 5);
      ɵɵviewQuery(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    header: "header",
    draggable: [2, "draggable", "draggable", booleanAttribute],
    resizable: [2, "resizable", "resizable", booleanAttribute],
    positionLeft: "positionLeft",
    positionTop: "positionTop",
    contentStyle: "contentStyle",
    contentStyleClass: "contentStyleClass",
    modal: [2, "modal", "modal", booleanAttribute],
    closeOnEscape: [2, "closeOnEscape", "closeOnEscape", booleanAttribute],
    dismissableMask: [2, "dismissableMask", "dismissableMask", booleanAttribute],
    rtl: [2, "rtl", "rtl", booleanAttribute],
    closable: [2, "closable", "closable", booleanAttribute],
    responsive: "responsive",
    appendTo: "appendTo",
    breakpoints: "breakpoints",
    styleClass: "styleClass",
    maskStyleClass: "maskStyleClass",
    maskStyle: "maskStyle",
    showHeader: [2, "showHeader", "showHeader", booleanAttribute],
    breakpoint: "breakpoint",
    blockScroll: [2, "blockScroll", "blockScroll", booleanAttribute],
    autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
    baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
    minX: [2, "minX", "minX", numberAttribute],
    minY: [2, "minY", "minY", numberAttribute],
    focusOnShow: [2, "focusOnShow", "focusOnShow", booleanAttribute],
    maximizable: [2, "maximizable", "maximizable", booleanAttribute],
    keepInViewport: [2, "keepInViewport", "keepInViewport", booleanAttribute],
    focusTrap: [2, "focusTrap", "focusTrap", booleanAttribute],
    transitionOptions: "transitionOptions",
    closeIcon: "closeIcon",
    closeAriaLabel: "closeAriaLabel",
    closeTabindex: "closeTabindex",
    minimizeIcon: "minimizeIcon",
    maximizeIcon: "maximizeIcon",
    visible: "visible",
    style: "style",
    position: "position"
  },
  outputs: {
    onShow: "onShow",
    onHide: "onHide",
    visibleChange: "visibleChange",
    onResizeInit: "onResizeInit",
    onResizeEnd: "onResizeEnd",
    onDragEnd: "onDragEnd",
    onMaximize: "onMaximize"
  },
  features: [ɵɵInputTransformsFeature],
  ngContentSelectors: _c4,
  decls: 1,
  vars: 1,
  consts: [["container", ""], ["notHeadless", ""], ["content", ""], ["titlebar", ""], ["footer", ""], [3, "class", "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "ngClass"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "class", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], ["class", "p-resizable-handle", 3, "mousedown", 4, "ngIf"], ["class", "p-dialog-header", 3, "mousedown", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["class", "p-dialog-footer", 4, "ngIf"], [1, "p-resizable-handle", 3, "mousedown"], [1, "p-dialog-header", 3, "mousedown"], ["class", "p-dialog-title", 3, "id", 4, "ngIf"], [1, "p-dialog-header-icons"], ["role", "button", "type", "button", "pRipple", "", "pButton", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], ["type", "button", "pRipple", "", "pButton", "", 3, "ngClass", "ngStyle", "click", "keydown.enter", 4, "ngIf"], [1, "p-dialog-title", 3, "id"], ["role", "button", "type", "button", "pRipple", "", "pButton", "", 3, "click", "keydown.enter", "ngClass"], ["class", "p-dialog-header-maximize-icon", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "p-dialog-header-maximize-icon", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], ["type", "button", "pRipple", "", "pButton", "", 3, "click", "keydown.enter", "ngClass", "ngStyle"], ["class", "p-dialog-header-close-icon", 3, "ngClass", 4, "ngIf"], [1, "p-dialog-header-close-icon", 3, "ngClass"], [1, "p-dialog-footer"]],
  template: function Dialog_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c3);
      ɵɵtemplate(0, Dialog_div_0_Template, 2, 16, "div", 5);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.maskVisible);
    }
  },
  dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, FocusTrap, ButtonDirective, Ripple, TimesIcon, WindowMaximizeIcon, WindowMinimizeIcon],
  styles: ["@layer primeng{.p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-webkit-transition:none;transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}}\n"],
  encapsulation: 2,
  data: {
    animation: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])]
  },
  changeDetection: 0
}));
var Dialog = _Dialog;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Component,
    args: [{
      selector: "p-dialog",
      template: '\n        <div\n            *ngIf="maskVisible"\n            [class]="maskStyleClass"\n            [ngStyle]="maskStyle"\n            [ngClass]="{\n                \'p-dialog-mask\': true,\n                \'p-component-overlay p-component-overlay-enter\': this.modal,\n                \'p-dialog-mask-scrollblocker\': this.modal || this.blockScroll,\n                \'p-dialog-left\': position === \'left\',\n                \'p-dialog-right\': position === \'right\',\n                \'p-dialog-top\': position === \'top\',\n                \'p-dialog-top-left\': position === \'topleft\' || position === \'top-left\',\n                \'p-dialog-top-right\': position === \'topright\' || position === \'top-right\',\n                \'p-dialog-bottom\': position === \'bottom\',\n                \'p-dialog-bottom-left\': position === \'bottomleft\' || position === \'bottom-left\',\n                \'p-dialog-bottom-right\': position === \'bottomright\' || position === \'bottom-right\'\n            }"\n        >\n            <div\n                #container\n                [ngClass]="{ \'p-dialog p-component\': true, \'p-dialog-rtl\': rtl, \'p-dialog-draggable\': draggable, \'p-dialog-resizable\': resizable, \'p-dialog-maximized\': maximized }"\n                [ngStyle]="style"\n                [class]="styleClass"\n                *ngIf="visible"\n                pFocusTrap\n                [pFocusTrapDisabled]="focusTrap === false"\n                [@animation]="{ value: \'visible\', params: { transform: transformOptions, transition: transitionOptions } }"\n                (@animation.start)="onAnimationStart($event)"\n                (@animation.done)="onAnimationEnd($event)"\n                role="dialog"\n                [attr.aria-labelledby]="ariaLabelledBy"\n                [attr.aria-modal]="true"\n            >\n                <ng-container *ngIf="headlessTemplate; else notHeadless">\n                    <ng-container *ngTemplateOutlet="headlessTemplate"></ng-container>\n                </ng-container>\n\n                <ng-template #notHeadless>\n                    <div *ngIf="resizable" class="p-resizable-handle" (mousedown)="initResize($event)"></div>\n                    <div #titlebar class="p-dialog-header" (mousedown)="initDrag($event)" *ngIf="showHeader">\n                        <span [id]="ariaLabelledBy" class="p-dialog-title" *ngIf="!headerFacet && !headerTemplate">{{ header }}</span>\n                        <span [id]="ariaLabelledBy" class="p-dialog-title" *ngIf="headerFacet">\n                            <ng-content select="p-header"></ng-content>\n                        </span>\n                        <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>\n                        <div class="p-dialog-header-icons">\n                            <button\n                                *ngIf="maximizable"\n                                role="button"\n                                type="button"\n                                [ngClass]="{ \'p-dialog-header-icon p-dialog-header-maximize p-link\': true }"\n                                (click)="maximize()"\n                                (keydown.enter)="maximize()"\n                                [attr.tabindex]="maximizable ? \'0\' : \'-1\'"\n                                [attr.aria-label]="maximizeLabel"\n                                pRipple\n                                pButton\n                            >\n                                <span *ngIf="maximizeIcon && !maximizeIconTemplate && !minimizeIconTemplate" class="p-dialog-header-maximize-icon" [ngClass]="maximized ? minimizeIcon : maximizeIcon"></span>\n                                <ng-container *ngIf="!maximizeIcon">\n                                    <WindowMaximizeIcon *ngIf="!maximized && !maximizeIconTemplate" [styleClass]="\'p-dialog-header-maximize-icon\'" />\n                                    <WindowMinimizeIcon *ngIf="maximized && !minimizeIconTemplate" [styleClass]="\'p-dialog-header-maximize-icon\'" />\n                                </ng-container>\n                                <ng-container *ngIf="!maximized">\n                                    <ng-template *ngTemplateOutlet="maximizeIconTemplate"></ng-template>\n                                </ng-container>\n                                <ng-container *ngIf="maximized">\n                                    <ng-template *ngTemplateOutlet="minimizeIconTemplate"></ng-template>\n                                </ng-container>\n                            </button>\n                            <button\n                                *ngIf="closable"\n                                type="button"\n                                [ngClass]="{ \'p-dialog-header-icon p-dialog-header-close p-link\': true }"\n                                [attr.aria-label]="closeAriaLabel"\n                                (click)="close($event)"\n                                (keydown.enter)="close($event)"\n                                pRipple\n                                pButton\n                                [attr.tabindex]="closeTabindex"\n                                [ngStyle]="{ \'min-width\': 0 }"\n                            >\n                                <ng-container *ngIf="!closeIconTemplate">\n                                    <span *ngIf="closeIcon" class="p-dialog-header-close-icon" [ngClass]="closeIcon"></span>\n                                    <TimesIcon *ngIf="!closeIcon" [styleClass]="\'p-dialog-header-close-icon\'" />\n                                </ng-container>\n                                <span *ngIf="closeIconTemplate">\n                                    <ng-template *ngTemplateOutlet="closeIconTemplate"></ng-template>\n                                </span>\n                            </button>\n                        </div>\n                    </div>\n                    <div #content [ngClass]="\'p-dialog-content\'" [ngStyle]="contentStyle" [class]="contentStyleClass">\n                        <ng-content></ng-content>\n                        <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>\n                    </div>\n                    <div #footer class="p-dialog-footer" *ngIf="footerFacet || footerTemplate">\n                        <ng-content select="p-footer"></ng-content>\n                        <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n    ',
      animations: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-webkit-transition:none;transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}}\n"]
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
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    header: [{
      type: Input
    }],
    draggable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resizable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    positionLeft: [{
      type: Input
    }],
    positionTop: [{
      type: Input
    }],
    contentStyle: [{
      type: Input
    }],
    contentStyleClass: [{
      type: Input
    }],
    modal: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closeOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dismissableMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rtl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    responsive: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    maskStyleClass: [{
      type: Input
    }],
    maskStyle: [{
      type: Input
    }],
    showHeader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    breakpoint: [{
      type: Input
    }],
    blockScroll: [{
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
    minX: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    minY: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focusOnShow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    maximizable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    keepInViewport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    focusTrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    closeAriaLabel: [{
      type: Input
    }],
    closeTabindex: [{
      type: Input
    }],
    minimizeIcon: [{
      type: Input
    }],
    maximizeIcon: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    visibleChange: [{
      type: Output
    }],
    onResizeInit: [{
      type: Output
    }],
    onResizeEnd: [{
      type: Output
    }],
    onDragEnd: [{
      type: Output
    }],
    onMaximize: [{
      type: Output
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    headerViewChild: [{
      type: ViewChild,
      args: ["titlebar"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    footerViewChild: [{
      type: ViewChild,
      args: ["footer"]
    }]
  });
})();
var _DialogModule = class _DialogModule {
};
__publicField(_DialogModule, "ɵfac", function DialogModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DialogModule)();
});
__publicField(_DialogModule, "ɵmod", ɵɵdefineNgModule({
  type: _DialogModule,
  declarations: [Dialog],
  imports: [CommonModule, FocusTrapModule, ButtonModule, RippleModule, TimesIcon, WindowMaximizeIcon, WindowMinimizeIcon],
  exports: [Dialog, SharedModule]
}));
__publicField(_DialogModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, FocusTrapModule, ButtonModule, RippleModule, TimesIcon, WindowMaximizeIcon, WindowMinimizeIcon, SharedModule]
}));
var DialogModule = _DialogModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FocusTrapModule, ButtonModule, RippleModule, TimesIcon, WindowMaximizeIcon, WindowMinimizeIcon],
      exports: [Dialog, SharedModule],
      declarations: [Dialog]
    }]
  }], null, null);
})();
export {
  Dialog,
  DialogModule
};
//# sourceMappingURL=primeng_dialog.js.map
