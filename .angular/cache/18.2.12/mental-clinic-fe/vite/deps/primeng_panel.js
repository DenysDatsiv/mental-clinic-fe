import {
  MinusIcon
} from "./chunk-SKFQLP4M.js";
import {
  PlusIcon
} from "./chunk-6RCVZF7W.js";
import {
  Ripple,
  RippleModule
} from "./chunk-MUJBADSC.js";
import "./chunk-BJLZ3T2F.js";
import {
  Footer,
  PrimeTemplate,
  SharedModule
} from "./chunk-ZROJCIWL.js";
import {
  UniqueComponentId
} from "./chunk-U3NLM53U.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-5S7AEMUZ.js";
import "./chunk-LB42WWNC.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-KUZ63KOD.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewEncapsulation$1,
  booleanAttribute,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-panel.mjs
var _c0 = ["*", [["p-header"]], [["p-footer"]]];
var _c1 = ["*", "p-header", "p-footer"];
var _c2 = (a0, a1) => ({
  "p-panel p-component": true,
  "p-panel-toggleable": a0,
  "p-panel-expanded": a1
});
var _c3 = (a0) => ({
  transitionParams: a0,
  height: "0",
  opacity: "0"
});
var _c4 = (a0) => ({
  value: "hidden",
  params: a0
});
var _c5 = (a0) => ({
  transitionParams: a0,
  height: "*",
  opacity: "1"
});
var _c6 = (a0) => ({
  value: "visible",
  params: a0
});
var _c7 = (a0, a1, a2) => ({
  "p-panel-icons-start": a0,
  "p-panel-icons-end": a1,
  "p-panel-icons-center": a2
});
var _c8 = (a0) => ({
  $implicit: a0
});
function Panel_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("id", ctx_r1.id + "_header");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.header);
  }
}
function Panel_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Panel_div_1_5_ng_template_0_Template(rf, ctx) {
}
function Panel_div_1_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Panel_div_1_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r1.expandIcon);
    ɵɵproperty("ngClass", ctx_r1.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "MinusIcon", 17);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("styleClass", ctx_r1.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Panel_div_1_button_6_ng_container_1_ng_container_1_span_1_Template, 1, 3, "span", 14)(2, Panel_div_1_button_6_ng_container_1_ng_container_1_MinusIcon_2_Template, 1, 1, "MinusIcon", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.expandIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.expandIcon);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r1.collapseIcon);
    ɵɵproperty("ngClass", ctx_r1.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_PlusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "PlusIcon", 17);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("styleClass", ctx_r1.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Panel_div_1_button_6_ng_container_1_ng_container_2_span_1_Template, 1, 3, "span", 14)(2, Panel_div_1_button_6_ng_container_1_ng_container_2_PlusIcon_2_Template, 1, 1, "PlusIcon", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.collapseIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.collapseIcon);
  }
}
function Panel_div_1_button_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Panel_div_1_button_6_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 12)(2, Panel_div_1_button_6_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.collapsed);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.collapsed);
  }
}
function Panel_div_1_button_6_2_ng_template_0_Template(rf, ctx) {
}
function Panel_div_1_button_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Panel_div_1_button_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Panel_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function Panel_div_1_button_6_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onIconClick($event));
    })("keydown", function Panel_div_1_button_6_Template_button_keydown_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onKeyDown($event));
    });
    ɵɵtemplate(1, Panel_div_1_button_6_ng_container_1_Template, 3, 2, "ng-container", 12)(2, Panel_div_1_button_6_2_Template, 1, 0, null, 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("id", ctx_r1.id + "_header")("aria-label", ctx_r1.buttonAriaLabel)("aria-controls", ctx_r1.id + "_content")("aria-expanded", !ctx_r1.collapsed);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.headerIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c8, ctx_r1.collapsed));
  }
}
function Panel_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("click", function Panel_div_1_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onHeaderClick($event));
    });
    ɵɵtemplate(1, Panel_div_1_span_1_Template, 2, 2, "span", 7);
    ɵɵprojection(2, 1);
    ɵɵtemplate(3, Panel_div_1_ng_container_3_Template, 1, 0, "ng-container", 4);
    ɵɵelementStart(4, "div", 8);
    ɵɵtemplate(5, Panel_div_1_5_Template, 1, 0, null, 4)(6, Panel_div_1_button_6_Template, 3, 9, "button", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("id", ctx_r1.id + "-titlebar");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.header);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction3(6, _c7, ctx_r1.iconPos === "start", ctx_r1.iconPos === "end", ctx_r1.iconPos === "center"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.iconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.toggleable);
  }
}
function Panel_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Panel_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Panel_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵprojection(1, 2);
    ɵɵtemplate(2, Panel_div_6_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
var _Panel = class _Panel {
  constructor(el, cd) {
    __publicField(this, "el");
    __publicField(this, "cd");
    /**
     * Defines if content of panel can be expanded and collapsed.
     * @group Props
     */
    __publicField(this, "toggleable");
    /**
     * Header text of the panel.
     * @group Props
     */
    __publicField(this, "header");
    /**
     * Defines the initial state of panel content, supports one or two-way binding as well.
     * @group Props
     */
    __publicField(this, "collapsed");
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
     * Position of the icons.
     * @group Props
     */
    __publicField(this, "iconPos", "end");
    /**
     * Expand icon of the toggle button.
     * @group Props
     * @deprecated since v15.4.2, use `headericons` template instead.
     */
    __publicField(this, "expandIcon");
    /**
     * Collapse icon of the toggle button.
     * @group Props
     * @deprecated since v15.4.2, use `headericons` template instead.
     */
    __publicField(this, "collapseIcon");
    /**
     * Specifies if header of panel cannot be displayed.
     * @group Props
     * @deprecated since v15.4.2, use `headericons` template instead.
     */
    __publicField(this, "showHeader", true);
    /**
     * Specifies the toggler element to toggle the panel content.
     * @group Props
     */
    __publicField(this, "toggler", "icon");
    /**
     * Transition options of the animation.
     * @group Props
     */
    __publicField(this, "transitionOptions", "400ms cubic-bezier(0.86, 0, 0.07, 1)");
    /**
     * Emitted when the collapsed changes.
     * @param {boolean} value - New Value.
     * @group Emits
     */
    __publicField(this, "collapsedChange", new EventEmitter());
    /**
     * Callback to invoke before panel toggle.
     * @param {PanelBeforeToggleEvent} event - Custom panel toggle event
     * @group Emits
     */
    __publicField(this, "onBeforeToggle", new EventEmitter());
    /**
     * Callback to invoke after panel toggle.
     * @param {PanelAfterToggleEvent} event - Custom panel toggle event
     * @group Emits
     */
    __publicField(this, "onAfterToggle", new EventEmitter());
    __publicField(this, "footerFacet");
    __publicField(this, "templates");
    __publicField(this, "iconTemplate");
    __publicField(this, "animating");
    __publicField(this, "headerTemplate");
    __publicField(this, "contentTemplate");
    __publicField(this, "footerTemplate");
    __publicField(this, "headerIconTemplate");
    __publicField(this, "id", UniqueComponentId());
    this.el = el;
    this.cd = cd;
  }
  get buttonAriaLabel() {
    return this.header;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
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
        case "icons":
          this.iconTemplate = item.template;
          break;
        case "headericons":
          this.headerIconTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  onHeaderClick(event) {
    if (this.toggler === "header") {
      this.toggle(event);
    }
  }
  onIconClick(event) {
    if (this.toggler === "icon") {
      this.toggle(event);
    }
  }
  toggle(event) {
    if (this.animating) {
      return false;
    }
    this.animating = true;
    this.onBeforeToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
    if (this.toggleable) {
      if (this.collapsed) this.expand();
      else this.collapse();
    }
    this.cd.markForCheck();
    event.preventDefault();
  }
  expand() {
    this.collapsed = false;
    this.collapsedChange.emit(this.collapsed);
  }
  collapse() {
    this.collapsed = true;
    this.collapsedChange.emit(this.collapsed);
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  onKeyDown(event) {
    if (event.code === "Enter" || event.code === "Space") {
      this.toggle(event);
      event.preventDefault();
    }
  }
  onToggleDone(event) {
    this.animating = false;
    this.onAfterToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
  }
};
__publicField(_Panel, "ɵfac", function Panel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Panel)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
});
__publicField(_Panel, "ɵcmp", ɵɵdefineComponent({
  type: _Panel,
  selectors: [["p-panel"]],
  contentQueries: function Panel_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, Footer, 5);
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    toggleable: [2, "toggleable", "toggleable", booleanAttribute],
    header: "header",
    collapsed: [2, "collapsed", "collapsed", booleanAttribute],
    style: "style",
    styleClass: "styleClass",
    iconPos: "iconPos",
    expandIcon: "expandIcon",
    collapseIcon: "collapseIcon",
    showHeader: [2, "showHeader", "showHeader", booleanAttribute],
    toggler: "toggler",
    transitionOptions: "transitionOptions"
  },
  outputs: {
    collapsedChange: "collapsedChange",
    onBeforeToggle: "onBeforeToggle",
    onAfterToggle: "onAfterToggle"
  },
  features: [ɵɵInputTransformsFeature],
  ngContentSelectors: _c1,
  decls: 7,
  vars: 25,
  consts: [[3, "ngClass", "ngStyle"], ["class", "p-panel-header", 3, "click", 4, "ngIf"], ["role", "region", 1, "p-toggleable-content", 3, "id"], [1, "p-panel-content"], [4, "ngTemplateOutlet"], ["class", "p-panel-footer", 4, "ngIf"], [1, "p-panel-header", 3, "click"], ["class", "p-panel-title", 4, "ngIf"], [1, "p-panel-icons", 3, "ngClass"], ["pRipple", "", "type", "button", "role", "button", "class", "p-panel-header-icon p-panel-toggler p-link", 3, "click", "keydown", 4, "ngIf"], [1, "p-panel-title"], ["pRipple", "", "type", "button", "role", "button", 1, "p-panel-header-icon", "p-panel-toggler", "p-link", 3, "click", "keydown"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "ngClass"], [3, "styleClass"], [1, "p-panel-footer"]],
  template: function Panel_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c0);
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, Panel_div_1_Template, 7, 10, "div", 1);
      ɵɵelementStart(2, "div", 2);
      ɵɵlistener("@panelContent.done", function Panel_Template_div_animation_panelContent_done_2_listener($event) {
        return ctx.onToggleDone($event);
      });
      ɵɵelementStart(3, "div", 3);
      ɵɵprojection(4);
      ɵɵtemplate(5, Panel_ng_container_5_Template, 1, 0, "ng-container", 4);
      ɵɵelementEnd();
      ɵɵtemplate(6, Panel_div_6_Template, 3, 1, "div", 5);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", ɵɵpureFunction2(14, _c2, ctx.toggleable, !ctx.collapsed && ctx.toggleable))("ngStyle", ctx.style);
      ɵɵattribute("id", ctx.id)("data-pc-name", "panel");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showHeader);
      ɵɵadvance();
      ɵɵproperty("id", ctx.id + "_content")("@panelContent", ctx.collapsed ? ɵɵpureFunction1(19, _c4, ɵɵpureFunction1(17, _c3, ctx.animating ? ctx.transitionOptions : "0ms")) : ɵɵpureFunction1(23, _c6, ɵɵpureFunction1(21, _c5, ctx.animating ? ctx.transitionOptions : "0ms")));
      ɵɵattribute("aria-labelledby", ctx.id + "_header")("aria-hidden", ctx.collapsed)("tabindex", ctx.collapsed ? "-1" : void 0);
      ɵɵadvance(3);
      ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.footerFacet || ctx.footerTemplate);
    }
  },
  dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple, PlusIcon, MinusIcon],
  styles: ["@layer primeng{.p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}}\n"],
  encapsulation: 2,
  data: {
    animation: [trigger("panelContent", [state("hidden", style({
      height: "0"
    })), state("void", style({
      height: "{{height}}"
    }), {
      params: {
        height: "0"
      }
    }), state("visible", style({
      height: "*"
    })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => hidden", animate("{{transitionParams}}")), transition("void => visible", animate("{{transitionParams}}"))])]
  },
  changeDetection: 0
}));
var Panel = _Panel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Panel, [{
    type: Component,
    args: [{
      selector: "p-panel",
      template: '\n        <div [attr.id]="id" [attr.data-pc-name]="\'panel\'" [ngClass]="{ \'p-panel p-component\': true, \'p-panel-toggleable\': toggleable, \'p-panel-expanded\': !collapsed && toggleable }" [ngStyle]="style" [class]="styleClass">\n            <div class="p-panel-header" *ngIf="showHeader" (click)="onHeaderClick($event)" [attr.id]="id + \'-titlebar\'">\n                <span class="p-panel-title" *ngIf="header" [attr.id]="id + \'_header\'">{{ header }}</span>\n                <ng-content select="p-header"></ng-content>\n                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>\n                <div class="p-panel-icons" [ngClass]="{ \'p-panel-icons-start\': iconPos === \'start\', \'p-panel-icons-end\': iconPos === \'end\', \'p-panel-icons-center\': iconPos === \'center\' }">\n                    <ng-template *ngTemplateOutlet="iconTemplate"></ng-template>\n                    <button\n                        *ngIf="toggleable"\n                        [attr.id]="id + \'_header\'"\n                        pRipple\n                        type="button"\n                        role="button"\n                        class="p-panel-header-icon p-panel-toggler p-link"\n                        [attr.aria-label]="buttonAriaLabel"\n                        [attr.aria-controls]="id + \'_content\'"\n                        [attr.aria-expanded]="!collapsed"\n                        (click)="onIconClick($event)"\n                        (keydown)="onKeyDown($event)"\n                    >\n                        <ng-container *ngIf="!headerIconTemplate">\n                            <ng-container *ngIf="!collapsed">\n                                <span *ngIf="expandIcon" [class]="expandIcon" [ngClass]="iconClass"></span>\n                                <MinusIcon *ngIf="!expandIcon" [styleClass]="iconClass" />\n                            </ng-container>\n\n                            <ng-container *ngIf="collapsed">\n                                <span *ngIf="collapseIcon" [class]="collapseIcon" [ngClass]="iconClass"></span>\n                                <PlusIcon *ngIf="!collapseIcon" [styleClass]="iconClass" />\n                            </ng-container>\n                        </ng-container>\n\n                        <ng-template *ngTemplateOutlet="headerIconTemplate; context: { $implicit: collapsed }"></ng-template>\n                    </button>\n                </div>\n            </div>\n            <div\n                class="p-toggleable-content"\n                [id]="id + \'_content\'"\n                role="region"\n                [attr.aria-labelledby]="id + \'_header\'"\n                [attr.aria-hidden]="collapsed"\n                [attr.tabindex]="collapsed ? \'-1\' : undefined"\n                [@panelContent]="\n                    collapsed\n                        ? { value: \'hidden\', params: { transitionParams: animating ? transitionOptions : \'0ms\', height: \'0\', opacity: \'0\' } }\n                        : { value: \'visible\', params: { transitionParams: animating ? transitionOptions : \'0ms\', height: \'*\', opacity: \'1\' } }\n                "\n                (@panelContent.done)="onToggleDone($event)"\n            >\n                <div class="p-panel-content">\n                    <ng-content></ng-content>\n                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>\n                </div>\n\n                <div class="p-panel-footer" *ngIf="footerFacet || footerTemplate">\n                    <ng-content select="p-footer"></ng-content>\n                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>\n                </div>\n            </div>\n        </div>\n    ',
      animations: [trigger("panelContent", [state("hidden", style({
        height: "0"
      })), state("void", style({
        height: "{{height}}"
      }), {
        params: {
          height: "0"
        }
      }), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => hidden", animate("{{transitionParams}}")), transition("void => visible", animate("{{transitionParams}}"))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    toggleable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    header: [{
      type: Input
    }],
    collapsed: [{
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
    iconPos: [{
      type: Input
    }],
    expandIcon: [{
      type: Input
    }],
    collapseIcon: [{
      type: Input
    }],
    showHeader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    toggler: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    collapsedChange: [{
      type: Output
    }],
    onBeforeToggle: [{
      type: Output
    }],
    onAfterToggle: [{
      type: Output
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var _PanelModule = class _PanelModule {
};
__publicField(_PanelModule, "ɵfac", function PanelModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PanelModule)();
});
__publicField(_PanelModule, "ɵmod", ɵɵdefineNgModule({
  type: _PanelModule,
  declarations: [Panel],
  imports: [CommonModule, SharedModule, RippleModule, PlusIcon, MinusIcon],
  exports: [Panel, SharedModule]
}));
__publicField(_PanelModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, SharedModule, RippleModule, PlusIcon, MinusIcon, SharedModule]
}));
var PanelModule = _PanelModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, RippleModule, PlusIcon, MinusIcon],
      exports: [Panel, SharedModule],
      declarations: [Panel]
    }]
  }], null, null);
})();
export {
  Panel,
  PanelModule
};
//# sourceMappingURL=primeng_panel.js.map
