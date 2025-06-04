import {
  TieredMenu,
  TieredMenuModule
} from "./chunk-MXDQ5G3N.js";
import {
  Tooltip
} from "./chunk-IC7NSP6U.js";
import "./chunk-BGJ2FQDY.js";
import "./chunk-JBMGT7BE.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-ZLJ4QAH5.js";
import "./chunk-VYCWYYRS.js";
import "./chunk-MUJBADSC.js";
import {
  AutoFocus,
  AutoFocusModule
} from "./chunk-LND2F6FW.js";
import {
  ChevronDownIcon
} from "./chunk-HCVMWVY4.js";
import "./chunk-BJLZ3T2F.js";
import {
  PrimeTemplate
} from "./chunk-ZROJCIWL.js";
import {
  UniqueComponentId
} from "./chunk-U3NLM53U.js";
import "./chunk-5S7AEMUZ.js";
import "./chunk-MWP4G2UW.js";
import "./chunk-RWZD3TDV.js";
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
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
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
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField,
  __spreadValues
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-splitbutton.mjs
var _c0 = ["container"];
var _c1 = ["defaultbtn"];
var _c2 = ["menu"];
function SplitButton_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SplitButton_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 10);
    ɵɵlistener("click", function SplitButton_ng_container_2_Template_button_click_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDefaultButtonClick($event));
    });
    ɵɵtemplate(2, SplitButton_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("severity", ctx_r2.severity)("text", ctx_r2.text)("outlined", ctx_r2.outlined)("size", ctx_r2.size)("icon", ctx_r2.icon)("iconPos", ctx_r2.iconPos)("disabled", ctx_r2.disabled)("ariaLabel", (ctx_r2.buttonProps == null ? null : ctx_r2.buttonProps["ariaLabel"]) || ctx_r2.label)("autofocus", ctx_r2.autofocus)("pTooltip", ctx_r2.tooltip)("tooltipOptions", ctx_r2.tooltipOptions);
    ɵɵattribute("tabindex", ctx_r2.tabindex);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.contentTemplate);
  }
}
function SplitButton_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11, 3);
    ɵɵlistener("click", function SplitButton_ng_template_3_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDefaultButtonClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("severity", ctx_r2.severity)("text", ctx_r2.text)("outlined", ctx_r2.outlined)("size", ctx_r2.size)("icon", ctx_r2.icon)("iconPos", ctx_r2.iconPos)("label", ctx_r2.label)("disabled", ctx_r2.buttonDisabled)("ariaLabel", ctx_r2.buttonProps == null ? null : ctx_r2.buttonProps["ariaLabel"])("autofocus", ctx_r2.autofocus)("pTooltip", ctx_r2.tooltip)("tooltipOptions", ctx_r2.tooltipOptions);
    ɵɵattribute("tabindex", ctx_r2.tabindex);
  }
}
function SplitButton_ChevronDownIcon_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon");
  }
}
function SplitButton_7_ng_template_0_Template(rf, ctx) {
}
function SplitButton_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SplitButton_7_ng_template_0_Template, 0, 0, "ng-template");
  }
}
var _SplitButton = class _SplitButton {
  constructor() {
    /**
     * MenuModel instance to define the overlay items.
     * @group Props
     */
    __publicField(this, "model");
    /**
     * Defines the style of the button.
     * @group Props
     */
    __publicField(this, "severity");
    /**
     * Add a shadow to indicate elevation.
     * @group Props
     */
    __publicField(this, "raised", false);
    /**
     * Add a circular border radius to the button.
     * @group Props
     */
    __publicField(this, "rounded", false);
    /**
     * Add a textual class to the button without a background initially.
     * @group Props
     */
    __publicField(this, "text", false);
    /**
     * Add a border class without a background initially.
     * @group Props
     */
    __publicField(this, "outlined", false);
    /**
     * Defines the size of the button.
     * @group Props
     */
    __publicField(this, "size", null);
    /**
     * Add a plain textual class to the button without a background initially.
     * @group Props
     */
    __publicField(this, "plain", false);
    /**
     * Name of the icon.
     * @group Props
     */
    __publicField(this, "icon");
    /**
     * Position of the icon.
     * @group Props
     */
    __publicField(this, "iconPos", "left");
    /**
     * Text of the button.
     * @group Props
     */
    __publicField(this, "label");
    /**
     * Tooltip for the main button.
     * @group Props
     */
    __publicField(this, "tooltip");
    /**
     * Tooltip options for the main button.
     * @group Props
     */
    __publicField(this, "tooltipOptions");
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
     * Inline style of the overlay menu.
     * @group Props
     */
    __publicField(this, "menuStyle");
    /**
     * Style class of the overlay menu.
     * @group Props
     */
    __publicField(this, "menuStyleClass");
    /**
     *  Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    __publicField(this, "appendTo");
    /**
     * Indicates the direction of the element.
     * @group Props
     */
    __publicField(this, "dir");
    /**
     * Defines a string that labels the expand button for accessibility.
     * @group Props
     */
    __publicField(this, "expandAriaLabel");
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
     * Button Props
     */
    __publicField(this, "buttonProps");
    /**
     * Menu Button Props
     */
    __publicField(this, "menuButtonProps");
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    __publicField(this, "autofocus");
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    __publicField(this, "tabindex");
    /**
     * Callback to invoke when default command button is clicked.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    __publicField(this, "onClick", new EventEmitter());
    /**
     * Callback to invoke when overlay menu is hidden.
     * @group Emits
     */
    __publicField(this, "onMenuHide", new EventEmitter());
    /**
     * Callback to invoke when overlay menu is shown.
     * @group Emits
     */
    __publicField(this, "onMenuShow", new EventEmitter());
    /**
     * Callback to invoke when dropdown button is clicked.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    __publicField(this, "onDropdownClick", new EventEmitter());
    __publicField(this, "containerViewChild");
    __publicField(this, "buttonViewChild");
    __publicField(this, "menu");
    __publicField(this, "templates");
    __publicField(this, "contentTemplate");
    __publicField(this, "dropdownIconTemplate");
    __publicField(this, "ariaId");
    __publicField(this, "isExpanded", signal(false));
    __publicField(this, "_disabled");
    __publicField(this, "_buttonDisabled");
    __publicField(this, "_menuButtonDisabled");
  }
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  set disabled(v) {
    this._disabled = v;
    this._buttonDisabled = v;
    this.menuButtonDisabled = v;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * When present, it specifies that the menu button element should be disabled.
   * @group Props
   */
  set menuButtonDisabled(v) {
    if (this.disabled) {
      this._menuButtonDisabled = this.disabled;
    } else this._menuButtonDisabled = v;
  }
  get menuButtonDisabled() {
    return this._menuButtonDisabled;
  }
  /**
   * When present, it specifies that the button element should be disabled.
   * @group Props
   */
  set buttonDisabled(v) {
    if (this.disabled) {
      this.buttonDisabled = this.disabled;
    } else this._buttonDisabled = v;
  }
  get buttonDisabled() {
    return this._buttonDisabled;
  }
  ngOnInit() {
    this.ariaId = UniqueComponentId();
  }
  ngAfterContentInit() {
    var _a;
    (_a = this.templates) == null ? void 0 : _a.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        case "dropdownicon":
          this.dropdownIconTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  get containerClass() {
    const cls = {
      "p-splitbutton p-component": true,
      "p-button-raised": this.raised,
      "p-button-rounded": this.rounded,
      "p-button-outlined": this.outlined,
      "p-button-text": this.text,
      "p-button-plain": this.plain,
      ["p-button-".concat(this.size === "small" ? "sm" : "lg")]: this.size
    };
    return __spreadValues({}, cls);
  }
  onDefaultButtonClick(event) {
    this.onClick.emit(event);
    this.menu.hide();
  }
  onDropdownButtonClick(event) {
    var _a, _b;
    this.onDropdownClick.emit(event);
    (_b = this.menu) == null ? void 0 : _b.toggle({
      currentTarget: (_a = this.containerViewChild) == null ? void 0 : _a.nativeElement,
      relativeAlign: this.appendTo == null
    });
  }
  onDropdownButtonKeydown(event) {
    if (event.code === "ArrowDown" || event.code === "ArrowUp") {
      this.onDropdownButtonClick();
      event.preventDefault();
    }
  }
  onHide() {
    this.isExpanded.set(false);
    this.onMenuHide.emit();
  }
  onShow() {
    this.isExpanded.set(true);
    this.onMenuShow.emit();
  }
};
__publicField(_SplitButton, "ɵfac", function SplitButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SplitButton)();
});
__publicField(_SplitButton, "ɵcmp", ɵɵdefineComponent({
  type: _SplitButton,
  selectors: [["p-splitButton"]],
  contentQueries: function SplitButton_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function SplitButton_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c1, 5);
      ɵɵviewQuery(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttonViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menu = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    model: "model",
    severity: "severity",
    raised: [2, "raised", "raised", booleanAttribute],
    rounded: [2, "rounded", "rounded", booleanAttribute],
    text: [2, "text", "text", booleanAttribute],
    outlined: [2, "outlined", "outlined", booleanAttribute],
    size: "size",
    plain: [2, "plain", "plain", booleanAttribute],
    icon: "icon",
    iconPos: "iconPos",
    label: "label",
    tooltip: "tooltip",
    tooltipOptions: "tooltipOptions",
    style: "style",
    styleClass: "styleClass",
    menuStyle: "menuStyle",
    menuStyleClass: "menuStyleClass",
    appendTo: "appendTo",
    dir: "dir",
    expandAriaLabel: "expandAriaLabel",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    buttonProps: "buttonProps",
    menuButtonProps: "menuButtonProps",
    autofocus: [2, "autofocus", "autofocus", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    tabindex: [2, "tabindex", "tabindex", numberAttribute],
    menuButtonDisabled: "menuButtonDisabled",
    buttonDisabled: "buttonDisabled"
  },
  outputs: {
    onClick: "onClick",
    onMenuHide: "onMenuHide",
    onMenuShow: "onMenuShow",
    onDropdownClick: "onDropdownClick"
  },
  features: [ɵɵInputTransformsFeature],
  decls: 10,
  vars: 26,
  consts: [["container", ""], ["defaultButton", ""], ["menu", ""], ["defaultbtn", ""], [3, "ngClass", "ngStyle"], [4, "ngIf", "ngIfElse"], ["type", "button", "pButton", "", 1, "p-splitbutton-menubutton", "p-button-icon-only", 3, "click", "keydown", "size", "severity", "text", "outlined", "disabled", "ariaLabel"], [4, "ngIf"], [4, "ngTemplateOutlet"], [3, "onHide", "onShow", "id", "popup", "model", "styleClass", "appendTo", "showTransitionOptions", "hideTransitionOptions"], ["type", "button", "pButton", "", "pAutoFocus", "", 1, "p-splitbutton-defaultbutton", 3, "click", "severity", "text", "outlined", "size", "icon", "iconPos", "disabled", "ariaLabel", "autofocus", "pTooltip", "tooltipOptions"], ["type", "button", "pButton", "", "pAutoFocus", "", 1, "p-splitbutton-defaultbutton", 3, "click", "severity", "text", "outlined", "size", "icon", "iconPos", "label", "disabled", "ariaLabel", "autofocus", "pTooltip", "tooltipOptions"]],
  template: function SplitButton_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 4, 0);
      ɵɵtemplate(2, SplitButton_ng_container_2_Template, 3, 13, "ng-container", 5)(3, SplitButton_ng_template_3_Template, 2, 13, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      ɵɵelementStart(5, "button", 6);
      ɵɵlistener("click", function SplitButton_Template_button_click_5_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onDropdownButtonClick($event));
      })("keydown", function SplitButton_Template_button_keydown_5_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onDropdownButtonKeydown($event));
      });
      ɵɵtemplate(6, SplitButton_ChevronDownIcon_6_Template, 1, 0, "ChevronDownIcon", 7)(7, SplitButton_7_Template, 1, 0, null, 8);
      ɵɵelementEnd();
      ɵɵelementStart(8, "p-tieredMenu", 9, 2);
      ɵɵlistener("onHide", function SplitButton_Template_p_tieredMenu_onHide_8_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onHide());
      })("onShow", function SplitButton_Template_p_tieredMenu_onShow_8_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onShow());
      });
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      const defaultButton_r5 = ɵɵreference(4);
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", ctx.containerClass)("ngStyle", ctx.style);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.contentTemplate)("ngIfElse", defaultButton_r5);
      ɵɵadvance(3);
      ɵɵproperty("size", ctx.size)("severity", ctx.severity)("text", ctx.text)("outlined", ctx.outlined)("disabled", ctx.menuButtonDisabled)("ariaLabel", (ctx.menuButtonProps == null ? null : ctx.menuButtonProps["ariaLabel"]) || ctx.expandAriaLabel);
      ɵɵattribute("aria-haspopup", (ctx.menuButtonProps == null ? null : ctx.menuButtonProps["ariaHasPopup"]) || true)("aria-expanded", (ctx.menuButtonProps == null ? null : ctx.menuButtonProps["ariaExpanded"]) || ctx.isExpanded())("aria-controls", (ctx.menuButtonProps == null ? null : ctx.menuButtonProps["ariaControls"]) || ctx.ariaId);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.dropdownIconTemplate);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.dropdownIconTemplate);
      ɵɵadvance();
      ɵɵstyleMap(ctx.menuStyle);
      ɵɵproperty("id", ctx.ariaId)("popup", true)("model", ctx.model)("styleClass", ctx.menuStyleClass)("appendTo", ctx.appendTo)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
    }
  },
  dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, ButtonDirective, TieredMenu, Tooltip, AutoFocus, ChevronDownIcon],
  styles: ["@layer primeng{.p-splitbutton{display:inline-flex;position:relative}.p-splitbutton .p-splitbutton-defaultbutton,.p-splitbutton.p-button-rounded>.p-splitbutton-defaultbutton.p-button,.p-splitbutton.p-button-outlined>.p-splitbutton-defaultbutton.p-button{flex:1 1 auto;border-top-right-radius:0;border-bottom-right-radius:0;border-right:0 none}.p-splitbutton-menubutton,.p-splitbutton.p-button-rounded>.p-splitbutton-menubutton.p-button,.p-splitbutton.p-button-outlined>.p-splitbutton-menubutton.p-button{display:flex;align-items:center;justify-content:center;border-top-left-radius:0;border-bottom-left-radius:0}.p-splitbutton .p-menu{min-width:100%}.p-fluid .p-splitbutton{display:flex}}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var SplitButton = _SplitButton;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButton, [{
    type: Component,
    args: [{
      selector: "p-splitButton",
      template: '\n        <div #container [ngClass]="containerClass" [class]="styleClass" [ngStyle]="style">\n            <ng-container *ngIf="contentTemplate; else defaultButton">\n                <button\n                    class="p-splitbutton-defaultbutton"\n                    type="button"\n                    pButton\n                    [severity]="severity"\n                    [text]="text"\n                    [outlined]="outlined"\n                    [size]="size"\n                    [icon]="icon"\n                    [iconPos]="iconPos"\n                    (click)="onDefaultButtonClick($event)"\n                    [disabled]="disabled"\n                    [attr.tabindex]="tabindex"\n                    [ariaLabel]="buttonProps?.[\'ariaLabel\'] || label"\n                    pAutoFocus\n                    [autofocus]="autofocus"\n                    [pTooltip]="tooltip"\n                    [tooltipOptions]="tooltipOptions"\n                >\n                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>\n                </button>\n            </ng-container>\n            <ng-template #defaultButton>\n                <button\n                    #defaultbtn\n                    class="p-splitbutton-defaultbutton"\n                    type="button"\n                    pButton\n                    [severity]="severity"\n                    [text]="text"\n                    [outlined]="outlined"\n                    [size]="size"\n                    [icon]="icon"\n                    [iconPos]="iconPos"\n                    [label]="label"\n                    (click)="onDefaultButtonClick($event)"\n                    [disabled]="buttonDisabled"\n                    [attr.tabindex]="tabindex"\n                    [ariaLabel]="buttonProps?.[\'ariaLabel\']"\n                    pAutoFocus\n                    [autofocus]="autofocus"\n                    [pTooltip]="tooltip"\n                    [tooltipOptions]="tooltipOptions"\n                ></button>\n            </ng-template>\n            <button\n                type="button"\n                pButton\n                [size]="size"\n                [severity]="severity"\n                [text]="text"\n                [outlined]="outlined"\n                class="p-splitbutton-menubutton p-button-icon-only"\n                (click)="onDropdownButtonClick($event)"\n                (keydown)="onDropdownButtonKeydown($event)"\n                [disabled]="menuButtonDisabled"\n                [ariaLabel]="menuButtonProps?.[\'ariaLabel\'] || expandAriaLabel"\n                [attr.aria-haspopup]="menuButtonProps?.[\'ariaHasPopup\'] || true"\n                [attr.aria-expanded]="menuButtonProps?.[\'ariaExpanded\'] || isExpanded()"\n                [attr.aria-controls]="menuButtonProps?.[\'ariaControls\'] || ariaId"\n            >\n                <ChevronDownIcon *ngIf="!dropdownIconTemplate" />\n                <ng-template *ngTemplateOutlet="dropdownIconTemplate"></ng-template>\n            </button>\n            <p-tieredMenu\n                [id]="ariaId"\n                #menu\n                [popup]="true"\n                [model]="model"\n                [style]="menuStyle"\n                [styleClass]="menuStyleClass"\n                [appendTo]="appendTo"\n                [showTransitionOptions]="showTransitionOptions"\n                [hideTransitionOptions]="hideTransitionOptions"\n                (onHide)="onHide()"\n                (onShow)="onShow()"\n            ></p-tieredMenu>\n        </div>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-splitbutton{display:inline-flex;position:relative}.p-splitbutton .p-splitbutton-defaultbutton,.p-splitbutton.p-button-rounded>.p-splitbutton-defaultbutton.p-button,.p-splitbutton.p-button-outlined>.p-splitbutton-defaultbutton.p-button{flex:1 1 auto;border-top-right-radius:0;border-bottom-right-radius:0;border-right:0 none}.p-splitbutton-menubutton,.p-splitbutton.p-button-rounded>.p-splitbutton-menubutton.p-button,.p-splitbutton.p-button-outlined>.p-splitbutton-menubutton.p-button{display:flex;align-items:center;justify-content:center;border-top-left-radius:0;border-bottom-left-radius:0}.p-splitbutton .p-menu{min-width:100%}.p-fluid .p-splitbutton{display:flex}}\n"]
    }]
  }], null, {
    model: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    raised: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    text: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    outlined: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    plain: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    icon: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    tooltipOptions: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    menuStyle: [{
      type: Input
    }],
    menuStyleClass: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    dir: [{
      type: Input
    }],
    expandAriaLabel: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    buttonProps: [{
      type: Input
    }],
    menuButtonProps: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    menuButtonDisabled: [{
      type: Input,
      args: ["menuButtonDisabled"]
    }],
    buttonDisabled: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }],
    onMenuHide: [{
      type: Output
    }],
    onMenuShow: [{
      type: Output
    }],
    onDropdownClick: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    buttonViewChild: [{
      type: ViewChild,
      args: ["defaultbtn"]
    }],
    menu: [{
      type: ViewChild,
      args: ["menu"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var _SplitButtonModule = class _SplitButtonModule {
};
__publicField(_SplitButtonModule, "ɵfac", function SplitButtonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SplitButtonModule)();
});
__publicField(_SplitButtonModule, "ɵmod", ɵɵdefineNgModule({
  type: _SplitButtonModule,
  declarations: [SplitButton],
  imports: [CommonModule, ButtonModule, TieredMenuModule, AutoFocusModule, ChevronDownIcon],
  exports: [SplitButton, ButtonModule, TieredMenuModule]
}));
__publicField(_SplitButtonModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, ButtonModule, TieredMenuModule, AutoFocusModule, ChevronDownIcon, ButtonModule, TieredMenuModule]
}));
var SplitButtonModule = _SplitButtonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ButtonModule, TieredMenuModule, AutoFocusModule, ChevronDownIcon],
      exports: [SplitButton, ButtonModule, TieredMenuModule],
      declarations: [SplitButton]
    }]
  }], null, null);
})();
export {
  SplitButton,
  SplitButtonModule
};
//# sourceMappingURL=primeng_splitbutton.js.map
