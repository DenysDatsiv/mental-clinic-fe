import {
  Tooltip,
  TooltipModule
} from "./chunk-IC7NSP6U.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-JBMGT7BE.js";
import "./chunk-ZROJCIWL.js";
import "./chunk-U3NLM53U.js";
import "./chunk-MWP4G2UW.js";
import "./chunk-RWZD3TDV.js";
import {
  DomHandler
} from "./chunk-LB42WWNC.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle
} from "./chunk-KUZ63KOD.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-steps.mjs
var _c0 = ["list"];
var _c1 = (a0) => ({
  "p-steps p-component": true,
  "p-readonly": a0
});
var _c2 = (a0, a1) => ({
  "p-highlight p-steps-current": a0,
  "p-disabled": a1
});
var _c3 = () => ({
  exact: false
});
function Steps_li_3_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r3.label, "");
  }
}
function Steps_li_3_a_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 13);
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("innerHTML", item_r3.label, ɵɵsanitizeHtml);
  }
}
function Steps_li_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 9);
    ɵɵlistener("click", function Steps_li_3_a_2_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onItemClick($event, item_r3, i_r4));
    })("keydown", function Steps_li_3_a_2_Template_a_keydown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onItemKeydown($event, item_r3, i_r4));
    });
    ɵɵelementStart(1, "span", 10);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, Steps_li_3_a_2_span_3_Template, 2, 1, "span", 11)(4, Steps_li_3_a_2_ng_template_4_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r6 = ɵɵreference(5);
    const ctx_r1 = ɵɵnextContext();
    const item_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("routerLink", item_r3.routerLink)("queryParams", item_r3.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r3.routerLinkActiveOptions || ɵɵpureFunction0(17, _c3))("target", item_r3.target)("fragment", item_r3.fragment)("queryParamsHandling", item_r3.queryParamsHandling)("preserveFragment", item_r3.preserveFragment)("skipLocationChange", item_r3.skipLocationChange)("replaceUrl", item_r3.replaceUrl)("state", item_r3.state);
    ɵɵattribute("tabindex", ctx_r4.getItemTabIndex(item_r3, i_r4))("aria-disabled", item_r3.disabled || ctx_r4.readonly && i_r4 !== ctx_r4.activeIndex)("aria-current", i_r4 === ctx_r4.activeIndex ? "step" : null);
    ɵɵadvance(2);
    ɵɵtextInterpolate(i_r4 + 1);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r3.escape !== false)("ngIfElse", htmlLabel_r6);
  }
}
function Steps_li_3_ng_template_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(item_r3.label);
  }
}
function Steps_li_3_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 13);
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("innerHTML", item_r3.label, ɵɵsanitizeHtml);
  }
}
function Steps_li_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 14);
    ɵɵlistener("click", function Steps_li_3_ng_template_3_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onItemClick($event, item_r3, i_r4));
    })("keydown", function Steps_li_3_ng_template_3_Template_a_keydown_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onItemKeydown($event, item_r3, i_r4));
    });
    ɵɵelementStart(1, "span", 10);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, Steps_li_3_ng_template_3_span_3_Template, 2, 1, "span", 11)(4, Steps_li_3_ng_template_3_ng_template_4_Template, 1, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r8 = ɵɵreference(5);
    const ctx_r1 = ɵɵnextContext();
    const item_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("target", item_r3.target);
    ɵɵattribute("href", item_r3.url, ɵɵsanitizeUrl)("tabindex", ctx_r4.getItemTabIndex(item_r3, i_r4))("aria-disabled", item_r3.disabled || ctx_r4.readonly && i_r4 !== ctx_r4.activeIndex)("aria-current", i_r4 === ctx_r4.activeIndex ? "step" : null);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", i_r4 + 1, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r3.escape !== false)("ngIfElse", htmlRouteLabel_r8);
  }
}
function Steps_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 7, 1);
    ɵɵtemplate(2, Steps_li_3_a_2_Template, 6, 18, "a", 8)(3, Steps_li_3_ng_template_3_Template, 6, 8, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const elseBlock_r9 = ɵɵreference(4);
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(item_r3.styleClass);
    ɵɵproperty("ngStyle", item_r3.style)("tooltipOptions", item_r3.tooltipOptions)("ngClass", ɵɵpureFunction2(10, _c2, ctx_r4.isActive(item_r3, i_r4), item_r3.disabled || ctx_r4.readonly && !ctx_r4.isActive(item_r3, i_r4)));
    ɵɵattribute("aria-current", ctx_r4.isActive(item_r3, i_r4) ? "step" : void 0)("id", item_r3.id)("data-pc-section", "menuitem");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r4.isClickableRouterLink(item_r3))("ngIfElse", elseBlock_r9);
  }
}
var _Steps = class _Steps {
  constructor(router, route, cd) {
    __publicField(this, "router");
    __publicField(this, "route");
    __publicField(this, "cd");
    /**
     * Index of the active item.
     * @group Props
     */
    __publicField(this, "activeIndex", 0);
    /**
     * An array of menu items.
     * @group Props
     */
    __publicField(this, "model");
    /**
     * Whether the items are clickable or not.
     * @group Props
     */
    __publicField(this, "readonly", true);
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
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * @group Props
     */
    __publicField(this, "exact", true);
    /**
     * Callback to invoke when the new step is selected.
     * @param {number} number - current index.
     * @group Emits
     */
    __publicField(this, "activeIndexChange", new EventEmitter());
    __publicField(this, "listViewChild");
    __publicField(this, "subscription");
    this.router = router;
    this.route = route;
    this.cd = cd;
  }
  ngOnInit() {
    this.subscription = this.router.events.subscribe(() => this.cd.markForCheck());
  }
  onItemClick(event, item, i) {
    if (this.readonly || item.disabled) {
      event.preventDefault();
      return;
    }
    this.activeIndexChange.emit(i);
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item,
        index: i
      });
    }
  }
  onItemKeydown(event, item, i) {
    switch (event.code) {
      case "ArrowRight": {
        this.navigateToNextItem(event.target);
        event.preventDefault();
        break;
      }
      case "ArrowLeft": {
        this.navigateToPrevItem(event.target);
        event.preventDefault();
        break;
      }
      case "Home": {
        this.navigateToFirstItem(event.target);
        event.preventDefault();
        break;
      }
      case "End": {
        this.navigateToLastItem(event.target);
        event.preventDefault();
        break;
      }
      case "Tab":
        if (i !== this.activeIndex) {
          const siblings = DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="menuitem"]');
          siblings[i].children[0].tabIndex = "-1";
          siblings[this.activeIndex].children[0].tabIndex = "0";
        }
        break;
      case "Enter":
      case "Space": {
        this.onItemClick(event, item, i);
        event.preventDefault();
        break;
      }
      default:
        break;
    }
  }
  navigateToNextItem(target) {
    const nextItem = this.findNextItem(target);
    nextItem && this.setFocusToMenuitem(target, nextItem);
  }
  navigateToPrevItem(target) {
    const prevItem = this.findPrevItem(target);
    prevItem && this.setFocusToMenuitem(target, prevItem);
  }
  navigateToFirstItem(target) {
    const firstItem = this.findFirstItem();
    firstItem && this.setFocusToMenuitem(target, firstItem);
  }
  navigateToLastItem(target) {
    const lastItem = this.findLastItem();
    lastItem && this.setFocusToMenuitem(target, lastItem);
  }
  findNextItem(item) {
    const nextItem = item.parentElement.nextElementSibling;
    return nextItem ? nextItem.children[0] : null;
  }
  findPrevItem(item) {
    const prevItem = item.parentElement.previousElementSibling;
    return prevItem ? prevItem.children[0] : null;
  }
  findFirstItem() {
    const firstSibling = DomHandler.findSingle(this.listViewChild.nativeElement, '[data-pc-section="menuitem"]');
    return firstSibling ? firstSibling.children[0] : null;
  }
  findLastItem() {
    const siblings = DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="menuitem"]');
    return siblings ? siblings[siblings.length - 1].children[0] : null;
  }
  setFocusToMenuitem(target, focusableItem) {
    target.tabIndex = "-1";
    focusableItem.tabIndex = "0";
    focusableItem.focus();
  }
  isClickableRouterLink(item) {
    return item.routerLink && !this.readonly && !item.disabled;
  }
  isActive(item, index) {
    if (item.routerLink) {
      let routerLink = Array.isArray(item.routerLink) ? item.routerLink : [item.routerLink];
      return this.router.isActive(this.router.createUrlTree(routerLink, {
        relativeTo: this.route
      }).toString(), false);
    }
    return index === this.activeIndex;
  }
  getItemTabIndex(item, index) {
    var _a;
    if (item.disabled) {
      return "-1";
    }
    if (!item.disabled && this.activeIndex === index) {
      return item.tabindex || "0";
    }
    return (_a = item.tabindex) != null ? _a : "-1";
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
__publicField(_Steps, "ɵfac", function Steps_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Steps)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(ChangeDetectorRef));
});
__publicField(_Steps, "ɵcmp", ɵɵdefineComponent({
  type: _Steps,
  selectors: [["p-steps"]],
  viewQuery: function Steps_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    activeIndex: [2, "activeIndex", "activeIndex", numberAttribute],
    model: "model",
    readonly: [2, "readonly", "readonly", booleanAttribute],
    style: "style",
    styleClass: "styleClass",
    exact: [2, "exact", "exact", booleanAttribute]
  },
  outputs: {
    activeIndexChange: "activeIndexChange"
  },
  features: [ɵɵInputTransformsFeature],
  decls: 4,
  vars: 9,
  consts: [["list", ""], ["menuitem", ""], ["elseBlock", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], [3, "ngClass", "ngStyle"], ["class", "p-steps-item", "pTooltip", "", 3, "ngStyle", "class", "tooltipOptions", "ngClass", 4, "ngFor", "ngForOf"], ["pTooltip", "", 1, "p-steps-item", 3, "ngStyle", "tooltipOptions", "ngClass"], ["role", "link", "class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", "keydown", 4, "ngIf", "ngIfElse"], ["role", "link", 1, "p-menuitem-link", 3, "click", "keydown", "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [1, "p-steps-number"], ["class", "p-steps-title", 4, "ngIf", "ngIfElse"], [1, "p-steps-title"], [1, "p-steps-title", 3, "innerHTML"], ["role", "link", 1, "p-menuitem-link", 3, "click", "keydown", "target"]],
  template: function Steps_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "nav", 5)(1, "ul", null, 0);
      ɵɵtemplate(3, Steps_li_3_Template, 5, 13, "li", 6);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c1, ctx.readonly))("ngStyle", ctx.style);
      ɵɵattribute("data-pc-name", "steps");
      ɵɵadvance();
      ɵɵattribute("data-pc-section", "menu");
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.model);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgStyle, RouterLink, RouterLinkActive, Tooltip],
  styles: ["@layer primeng{.p-steps{position:relative}.p-steps ul{padding:0;margin:0;list-style-type:none;display:flex}.p-steps-item{position:relative;display:flex;justify-content:center;flex:1 1 auto}.p-steps-item .p-menuitem-link{display:inline-flex;flex-direction:column;align-items:center;overflow:hidden;text-decoration:none}.p-steps.p-steps-readonly .p-steps-item{cursor:auto}.p-steps-item.p-steps-current .p-menuitem-link{cursor:default}.p-steps-title{white-space:nowrap}.p-steps-number{display:flex;align-items:center;justify-content:center}.p-steps-title{display:block}}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var Steps = _Steps;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Steps, [{
    type: Component,
    args: [{
      selector: "p-steps",
      template: '\n        <nav [ngClass]="{ \'p-steps p-component\': true, \'p-readonly\': readonly }" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="\'steps\'">\n            <ul #list [attr.data-pc-section]="\'menu\'">\n                <li\n                    *ngFor="let item of model; let i = index"\n                    class="p-steps-item"\n                    #menuitem\n                    [ngStyle]="item.style"\n                    [class]="item.styleClass"\n                    [attr.aria-current]="isActive(item, i) ? \'step\' : undefined"\n                    [attr.id]="item.id"\n                    pTooltip\n                    [tooltipOptions]="item.tooltipOptions"\n                    [ngClass]="{ \'p-highlight p-steps-current\': isActive(item, i), \'p-disabled\': item.disabled || (readonly && !isActive(item, i)) }"\n                    [attr.data-pc-section]="\'menuitem\'"\n                >\n                    <a\n                        role="link"\n                        *ngIf="isClickableRouterLink(item); else elseBlock"\n                        [routerLink]="item.routerLink"\n                        [queryParams]="item.queryParams"\n                        [routerLinkActive]="\'p-menuitem-link-active\'"\n                        [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"\n                        class="p-menuitem-link"\n                        (click)="onItemClick($event, item, i)"\n                        (keydown)="onItemKeydown($event, item, i)"\n                        [target]="item.target"\n                        [attr.tabindex]="getItemTabIndex(item, i)"\n                        [attr.aria-disabled]="item.disabled || (readonly && i !== activeIndex)"\n                        [fragment]="item.fragment"\n                        [queryParamsHandling]="item.queryParamsHandling"\n                        [preserveFragment]="item.preserveFragment"\n                        [skipLocationChange]="item.skipLocationChange"\n                        [replaceUrl]="item.replaceUrl"\n                        [state]="item.state"\n                        [attr.aria-current]="i === activeIndex ? \'step\' : null"\n                    >\n                        <span class="p-steps-number">{{ i + 1 }}</span>\n                        <span class="p-steps-title" *ngIf="item.escape !== false; else htmlLabel"> {{ item.label }}</span>\n                        <ng-template #htmlLabel><span class="p-steps-title" [innerHTML]="item.label"></span></ng-template>\n                    </a>\n                    <ng-template #elseBlock>\n                        <a\n                            role="link"\n                            [attr.href]="item.url"\n                            class="p-menuitem-link"\n                            (click)="onItemClick($event, item, i)"\n                            (keydown)="onItemKeydown($event, item, i)"\n                            [target]="item.target"\n                            [attr.tabindex]="getItemTabIndex(item, i)"\n                            [attr.aria-disabled]="item.disabled || (readonly && i !== activeIndex)"\n                            [attr.aria-current]="i === activeIndex ? \'step\' : null"\n                        >\n                            <span class="p-steps-number">{{ i + 1 }} </span>\n                            <span class="p-steps-title" *ngIf="item.escape !== false; else htmlRouteLabel">{{ item.label }}</span>\n                            <ng-template #htmlRouteLabel><span class="p-steps-title" [innerHTML]="item.label"></span></ng-template>\n                        </a>\n                    </ng-template>\n                </li>\n            </ul>\n        </nav>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-steps{position:relative}.p-steps ul{padding:0;margin:0;list-style-type:none;display:flex}.p-steps-item{position:relative;display:flex;justify-content:center;flex:1 1 auto}.p-steps-item .p-menuitem-link{display:inline-flex;flex-direction:column;align-items:center;overflow:hidden;text-decoration:none}.p-steps.p-steps-readonly .p-steps-item{cursor:auto}.p-steps-item.p-steps-current .p-menuitem-link{cursor:default}.p-steps-title{white-space:nowrap}.p-steps-number{display:flex;align-items:center;justify-content:center}.p-steps-title{display:block}}\n"]
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: ChangeDetectorRef
  }], {
    activeIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    model: [{
      type: Input
    }],
    readonly: [{
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
    exact: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    activeIndexChange: [{
      type: Output
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list", {
        static: false
      }]
    }]
  });
})();
var _StepsModule = class _StepsModule {
};
__publicField(_StepsModule, "ɵfac", function StepsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StepsModule)();
});
__publicField(_StepsModule, "ɵmod", ɵɵdefineNgModule({
  type: _StepsModule,
  declarations: [Steps],
  imports: [CommonModule, RouterModule, TooltipModule],
  exports: [Steps, RouterModule, TooltipModule]
}));
__publicField(_StepsModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, RouterModule, TooltipModule, RouterModule, TooltipModule]
}));
var StepsModule = _StepsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, TooltipModule],
      exports: [Steps, RouterModule, TooltipModule],
      declarations: [Steps]
    }]
  }], null, null);
})();
export {
  Steps,
  StepsModule
};
//# sourceMappingURL=primeng_steps.js.map
