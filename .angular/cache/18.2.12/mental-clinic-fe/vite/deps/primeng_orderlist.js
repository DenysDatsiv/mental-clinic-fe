import {
  AngleDoubleDownIcon,
  AngleDoubleUpIcon,
  CdkDrag,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-IEZ2XQR2.js";
import {
  AngleUpIcon
} from "./chunk-74FYITZT.js";
import {
  AngleDownIcon
} from "./chunk-GE47GKJX.js";
import {
  SearchIcon
} from "./chunk-ZVYGKXDY.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-ZLJ4QAH5.js";
import "./chunk-VYCWYYRS.js";
import {
  Ripple,
  RippleModule
} from "./chunk-MUJBADSC.js";
import "./chunk-LND2F6FW.js";
import "./chunk-BJLZ3T2F.js";
import {
  FilterService,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule
} from "./chunk-ZROJCIWL.js";
import {
  ObjectUtils,
  UniqueComponentId
} from "./chunk-U3NLM53U.js";
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
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
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-orderlist.mjs
var _c0 = ["listelement"];
var _c1 = ["filter"];
var _c2 = (a0, a1, a2) => ({
  "p-orderlist p-component": true,
  "p-orderlist-striped": a0,
  "p-orderlist-controls-left": a1,
  "p-orderlist-controls-right": a2
});
var _c3 = (a0) => ({
  options: a0
});
var _c4 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var _c5 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function OrderList_AngleUpIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleUpIcon");
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "moveupicon");
  }
}
function OrderList_4_ng_template_0_Template(rf, ctx) {
}
function OrderList_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_4_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_AngleDoubleUpIcon_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDoubleUpIcon");
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "movetopicon");
  }
}
function OrderList_7_ng_template_0_Template(rf, ctx) {
}
function OrderList_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_7_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_AngleDownIcon_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDownIcon");
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "movedownicon");
  }
}
function OrderList_10_ng_template_0_Template(rf, ctx) {
}
function OrderList_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_10_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_AngleDoubleDownIcon_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDoubleDownIcon");
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "movebottomicon");
  }
}
function OrderList_13_ng_template_0_Template(rf, ctx) {
}
function OrderList_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_13_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.header);
  }
}
function OrderList_div_15_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrderList_div_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, OrderList_div_15_div_1_Template, 2, 1, "div", 14)(2, OrderList_div_15_ng_container_2_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "header");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate);
  }
}
function OrderList_div_16_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrderList_div_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderList_div_16_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 18);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.filterTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, ctx_r1.filterOptions));
  }
}
function OrderList_div_16_ng_template_2_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SearchIcon", 23);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-orderlist-filter-icon");
    ɵɵattribute("data-pc-section", "filterIcon");
  }
}
function OrderList_div_16_ng_template_2_span_4_1_ng_template_0_Template(rf, ctx) {
}
function OrderList_div_16_ng_template_2_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_div_16_ng_template_2_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_div_16_ng_template_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 24);
    ɵɵtemplate(1, OrderList_div_16_ng_template_2_span_4_1_Template, 1, 0, null, 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵattribute("data-pc-section", "filterIcon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.filterIconTemplate);
  }
}
function OrderList_div_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 19)(1, "input", 20, 2);
    ɵɵlistener("keyup", function OrderList_div_16_ng_template_2_Template_input_keyup_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onFilterKeyup($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(3, OrderList_div_16_ng_template_2_SearchIcon_3_Template, 1, 2, "SearchIcon", 21)(4, OrderList_div_16_ng_template_2_span_4_Template, 2, 2, "span", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "filter");
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.disabled);
    ɵɵattribute("placeholder", ctx_r1.filterPlaceholder)("aria-label", ctx_r1.ariaFilterLabel);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.filterIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.filterIconTemplate);
  }
}
function OrderList_div_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtemplate(1, OrderList_div_16_ng_container_1_Template, 2, 4, "ng-container", 17)(2, OrderList_div_16_ng_template_2_Template, 5, 6, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const builtInFilterElement_r4 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "filterContainer");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.filterTemplate)("ngIfElse", builtInFilterElement_r4);
  }
}
function OrderList_ng_template_19_li_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrderList_ng_template_19_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 26);
    ɵɵlistener("click", function OrderList_ng_template_19_li_0_Template_li_click_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r5 = ɵɵnextContext();
      const item_r7 = ctx_r5.$implicit;
      const i_r8 = ctx_r5.index;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event, item_r7, i_r8, ctx_r1.id + "_" + i_r8));
    })("touchend", function OrderList_ng_template_19_li_0_Template_li_touchend_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onItemTouchEnd());
    })("mousedown", function OrderList_ng_template_19_li_0_Template_li_mousedown_0_listener() {
      ɵɵrestoreView(_r5);
      const i_r8 = ɵɵnextContext().index;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOptionMouseDown(i_r8));
    });
    ɵɵtemplate(1, OrderList_ng_template_19_li_0_ng_container_1_Template, 1, 0, "ng-container", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    const item_r7 = ctx_r5.$implicit;
    const i_r8 = ctx_r5.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.id + "_" + i_r8)("ngClass", ɵɵpureFunction3(10, _c4, ctx_r1.isSelected(item_r7), ctx_r1.disabled, ctx_r1.id + "_" + i_r8 === ctx_r1.focusedOptionId()))("cdkDragData", item_r7)("cdkDragDisabled", !ctx_r1.dragdrop);
    ɵɵattribute("aria-selected", ctx_r1.isSelected(item_r7))("data-pc-section", "item")("data-p-highlight", ctx_r1.isSelected(item_r7))("data-p-focused", ctx_r1.id + "_" + i_r8 === ctx_r1.focusedOptionId());
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(14, _c5, item_r7, i_r8));
  }
}
function OrderList_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_ng_template_19_li_0_Template, 2, 17, "li", 25);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.isItemVisible(item_r7));
  }
}
function OrderList_ng_container_20_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrderList_ng_container_20_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 28);
    ɵɵtemplate(1, OrderList_ng_container_20_li_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "emptyMessage");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.emptyMessageTemplate);
  }
}
function OrderList_ng_container_20_li_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrderList_ng_container_20_li_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 28);
    ɵɵtemplate(1, OrderList_ng_container_20_li_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "emptyMessage");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.emptyFilterMessageTemplate);
  }
}
function OrderList_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderList_ng_container_20_li_1_Template, 2, 2, "li", 27)(2, OrderList_ng_container_20_li_2_Template, 2, 2, "li", 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.filterValue || !ctx_r1.emptyFilterMessageTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.filterValue);
  }
}
var _OrderList = class _OrderList {
  constructor(document, platformId, renderer, el, cd, filterService, config) {
    __publicField(this, "document");
    __publicField(this, "platformId");
    __publicField(this, "renderer");
    __publicField(this, "el");
    __publicField(this, "cd");
    __publicField(this, "filterService");
    __publicField(this, "config");
    /**
     * Text for the caption.
     * @group Props
     */
    __publicField(this, "header");
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
     * Index of the element in tabbing order.
     * @group Props
     */
    __publicField(this, "tabindex");
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    __publicField(this, "ariaLabel");
    /**
     * Specifies one or more IDs in the DOM that labels the input field.
     * @group Props
     */
    __publicField(this, "ariaLabelledBy");
    /**
     * Inline style of the list element.
     * @group Props
     */
    __publicField(this, "listStyle");
    /**
     * A boolean value that indicates whether the component should be responsive.
     * @group Props
     */
    __publicField(this, "responsive");
    /**
     * When specified displays an input field to filter the items on keyup and decides which fields to search against.
     * @group Props
     */
    __publicField(this, "filterBy");
    /**
     * Placeholder of the filter input.
     * @group Props
     */
    __publicField(this, "filterPlaceholder");
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    __publicField(this, "filterLocale");
    /**
     * When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
     * @group Props
     */
    __publicField(this, "metaKeySelection", false);
    /**
     * Whether to enable dragdrop based reordering.
     * @group Props
     */
    __publicField(this, "dragdrop", false);
    /**
     * Defines the location of the buttons with respect to the list.
     * @group Props
     */
    __publicField(this, "controlsPosition", "left");
    /**
     * Defines a string that labels the filter input.
     * @group Props
     */
    __publicField(this, "ariaFilterLabel");
    /**
     * Defines how the items are filtered.
     * @group Props
     */
    __publicField(this, "filterMatchMode", "contains");
    /**
     * Indicates the width of the screen at which the component should change its behavior.
     * @group Props
     */
    __publicField(this, "breakpoint", "960px");
    /**
     * Whether to displays rows with alternating colors.
     * @group Props
     */
    __publicField(this, "stripedRows");
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    __publicField(this, "disabled", false);
    /**
     * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
     * @group Props
     */
    __publicField(this, "trackBy", (index, item) => item);
    /**
     * Callback to invoke on selection change.
     * @param {*} any - selection instance.
     * @group Emits
     */
    __publicField(this, "selectionChange", new EventEmitter());
    /**
     * Callback to invoke when list is reordered.
     * @param {*} any - list instance.
     * @group Emits
     */
    __publicField(this, "onReorder", new EventEmitter());
    /**
     * Callback to invoke when selection changes.
     * @param {OrderListSelectionChangeEvent} event - Custom change event.
     * @group Emits
     */
    __publicField(this, "onSelectionChange", new EventEmitter());
    /**
     * Callback to invoke when filtering occurs.
     * @param {OrderListFilterEvent} event - Custom filter event.
     * @group Emits
     */
    __publicField(this, "onFilterEvent", new EventEmitter());
    /**
     * Callback to invoke when the list is focused
     * @param {Event} event - Browser event.
     * @group Emits
     */
    __publicField(this, "onFocus", new EventEmitter());
    /**
     * Callback to invoke when the list is blurred
     * @param {Event} event - Browser event.
     * @group Emits
     */
    __publicField(this, "onBlur", new EventEmitter());
    __publicField(this, "listViewChild");
    __publicField(this, "filterViewChild");
    __publicField(this, "templates");
    __publicField(this, "itemTemplate");
    __publicField(this, "headerTemplate");
    __publicField(this, "emptyMessageTemplate");
    __publicField(this, "emptyFilterMessageTemplate");
    __publicField(this, "filterTemplate");
    __publicField(this, "moveUpIconTemplate");
    __publicField(this, "moveTopIconTemplate");
    __publicField(this, "moveDownIconTemplate");
    __publicField(this, "moveBottomIconTemplate");
    __publicField(this, "filterIconTemplate");
    __publicField(this, "filterOptions");
    __publicField(this, "d_selection", []);
    __publicField(this, "movedUp");
    __publicField(this, "movedDown");
    __publicField(this, "itemTouched");
    __publicField(this, "styleElement");
    __publicField(this, "id", UniqueComponentId());
    __publicField(this, "focused", false);
    __publicField(this, "focusedOptionIndex", -1);
    __publicField(this, "focusedOption");
    __publicField(this, "filterValue");
    __publicField(this, "visibleOptions");
    __publicField(this, "_value");
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.el = el;
    this.cd = cd;
    this.filterService = filterService;
    this.config = config;
  }
  /**
   * A list of values that are currently selected.
   * @group Props
   */
  set selection(val) {
    this.d_selection = val;
  }
  get selection() {
    return this.d_selection;
  }
  /**
   * Array of values to be displayed in the component.
   * It represents the data source for the list of items.
   * @group Props
   */
  set value(val) {
    this._value = val;
    if (this.filterValue) {
      this.filter();
    }
  }
  get value() {
    return this._value;
  }
  get moveUpAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.moveUp : void 0;
  }
  get moveTopAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.moveTop : void 0;
  }
  get moveDownAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.moveDown : void 0;
  }
  get moveBottomAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.moveBottom : void 0;
  }
  ngOnInit() {
    if (this.responsive) {
      this.createStyle();
    }
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterKeyup(value),
        reset: () => this.resetFilter()
      };
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "empty":
          this.emptyMessageTemplate = item.template;
          break;
        case "emptyfilter":
          this.emptyFilterMessageTemplate = item.template;
          break;
        case "filter":
          this.filterTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "moveupicon":
          this.moveUpIconTemplate = item.template;
          break;
        case "movetopicon":
          this.moveTopIconTemplate = item.template;
          break;
        case "movedownicon":
          this.moveDownIconTemplate = item.template;
          break;
        case "movebottomicon":
          this.moveBottomIconTemplate = item.template;
          break;
        case "filtericon":
          this.filterIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewChecked() {
    var _a, _b;
    if (this.movedUp || this.movedDown) {
      let listItems = DomHandler.find((_a = this.listViewChild) == null ? void 0 : _a.nativeElement, "li.p-highlight");
      let listItem;
      if (listItems.length > 0) {
        if (this.movedUp) listItem = listItems[0];
        else listItem = listItems[listItems.length - 1];
        DomHandler.scrollInView((_b = this.listViewChild) == null ? void 0 : _b.nativeElement, listItem);
      }
      this.movedUp = false;
      this.movedDown = false;
    }
  }
  onItemClick(event, item, index, selectedId) {
    this.itemTouched = false;
    let focusedIndex = index ? index : ObjectUtils.findIndexInList(this.focusedOption, this.value);
    let selectedIndex = ObjectUtils.findIndexInList(item, this.d_selection);
    let selected = selectedIndex !== -1;
    let metaSelection = this.itemTouched ? false : this.metaKeySelection;
    if (selectedId) {
      this.focusedOptionIndex = selectedId;
    }
    if (metaSelection) {
      let metaKey = event.metaKey || event.ctrlKey;
      if (selected && metaKey) {
        this.d_selection = this.d_selection.filter((val, focusedIndex2) => focusedIndex2 !== selectedIndex);
      } else {
        this.d_selection = metaKey ? this.d_selection ? [...this.d_selection] : [] : [];
        ObjectUtils.insertIntoOrderedArray(item, focusedIndex, this.d_selection, this.value);
      }
    } else {
      if (selected) {
        this.d_selection = this.d_selection.filter((val, focusedIndex2) => focusedIndex2 !== selectedIndex);
      } else {
        this.d_selection = this.d_selection ? [...this.d_selection] : [];
        ObjectUtils.insertIntoOrderedArray(item, focusedIndex, this.d_selection, this.value);
      }
    }
    this.selectionChange.emit(this.d_selection);
    this.onSelectionChange.emit({
      originalEvent: event,
      value: this.d_selection
    });
  }
  onFilterKeyup(event) {
    this.filterValue = event.target.value.trim().toLocaleLowerCase(this.filterLocale);
    this.filter();
    this.onFilterEvent.emit({
      originalEvent: event,
      value: this.visibleOptions
    });
  }
  filter() {
    let searchFields = this.filterBy.split(",");
    this.visibleOptions = this.filterService.filter(this.value, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
  }
  /**
   * Callback to invoke on filter reset.
   * @group Method
   */
  resetFilter() {
    this.filterValue = null;
    this.filterViewChild && (this.filterViewChild.nativeElement.value = "");
  }
  isItemVisible(item) {
    if (this.filterValue && this.filterValue.trim().length) {
      for (let i = 0; i < this.visibleOptions.length; i++) {
        if (item == this.visibleOptions[i]) {
          return true;
        }
      }
    } else {
      return true;
    }
  }
  onItemTouchEnd() {
    this.itemTouched = true;
  }
  isSelected(item) {
    return ObjectUtils.findIndexInList(item, this.d_selection) !== -1;
  }
  isEmpty() {
    return this.filterValue ? !this.visibleOptions || this.visibleOptions.length === 0 : !this.value || this.value.length === 0;
  }
  moveUp() {
    if (this.selection) {
      for (let i = 0; i < this.selection.length; i++) {
        let selectedItem = this.selection[i];
        let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, this.value);
        if (selectedItemIndex != 0 && this.value instanceof Array) {
          let movedItem = this.value[selectedItemIndex];
          let temp = this.value[selectedItemIndex - 1];
          this.value[selectedItemIndex - 1] = movedItem;
          this.value[selectedItemIndex] = temp;
        } else {
          break;
        }
      }
      if (this.dragdrop && this.filterValue) this.filter();
      this.movedUp = true;
      this.onReorder.emit(this.selection);
    }
  }
  moveTop() {
    if (this.selection) {
      for (let i = this.selection.length - 1; i >= 0; i--) {
        let selectedItem = this.selection[i];
        let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, this.value);
        if (selectedItemIndex != 0 && this.value instanceof Array) {
          let movedItem = this.value.splice(selectedItemIndex, 1)[0];
          this.value.unshift(movedItem);
        } else {
          break;
        }
      }
      if (this.dragdrop && this.filterValue) this.filter();
      this.onReorder.emit(this.selection);
      this.listViewChild.nativeElement.scrollTop = 0;
    }
  }
  moveDown() {
    if (this.selection) {
      for (let i = this.selection.length - 1; i >= 0; i--) {
        let selectedItem = this.selection[i];
        let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, this.value);
        if (this.value instanceof Array && selectedItemIndex != this.value.length - 1) {
          let movedItem = this.value[selectedItemIndex];
          let temp = this.value[selectedItemIndex + 1];
          this.value[selectedItemIndex + 1] = movedItem;
          this.value[selectedItemIndex] = temp;
        } else {
          break;
        }
      }
      if (this.dragdrop && this.filterValue) this.filter();
      this.movedDown = true;
      this.onReorder.emit(this.selection);
    }
  }
  moveBottom() {
    var _a;
    if (this.selection) {
      for (let i = 0; i < this.selection.length; i++) {
        let selectedItem = this.selection[i];
        let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, this.value);
        if (this.value instanceof Array && selectedItemIndex != this.value.length - 1) {
          let movedItem = this.value.splice(selectedItemIndex, 1)[0];
          this.value.push(movedItem);
        } else {
          break;
        }
      }
      if (this.dragdrop && this.filterValue) this.filter();
      this.onReorder.emit(this.selection);
      this.listViewChild.nativeElement.scrollTop = (_a = this.listViewChild) == null ? void 0 : _a.nativeElement.scrollHeight;
    }
  }
  onDrop(event) {
    let previousIndex = event.previousIndex;
    let currentIndex = event.currentIndex;
    if (previousIndex !== currentIndex) {
      if (this.visibleOptions) {
        if (this.filterValue) {
          previousIndex = ObjectUtils.findIndexInList(event.item.data, this.value);
          currentIndex = ObjectUtils.findIndexInList(this.visibleOptions[currentIndex], this.value);
        }
        moveItemInArray(this.visibleOptions, event.previousIndex, event.currentIndex);
      }
      moveItemInArray(this.value, previousIndex, currentIndex);
      this.changeFocusedOptionIndex(currentIndex);
      this.onReorder.emit([event.item.data]);
    }
  }
  onListFocus(event) {
    const focusableEl = DomHandler.findSingle(this.listViewChild.nativeElement, '[data-p-highlight="true"]') || DomHandler.findSingle(this.listViewChild.nativeElement, '[data-pc-section="item"]');
    if (focusableEl) {
      const findIndex = ObjectUtils.findIndexInList(focusableEl, this.listViewChild.nativeElement.children);
      this.focused = true;
      const index = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : focusableEl ? findIndex : -1;
      this.changeFocusedOptionIndex(index);
    }
    this.onFocus.emit(event);
  }
  onListBlur(event) {
    this.focused = false;
    this.focusedOption = null;
    this.focusedOptionIndex = -1;
    this.onBlur.emit(event);
  }
  onItemKeydown(event) {
    const targetTagName = event.target.tagName.toLowerCase();
    if (targetTagName == "input") {
      return;
    }
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "KeyA":
        if (event.ctrlKey) {
          this.d_selection = [...this.value];
          this.selectionChange.emit(this.d_selection);
        }
      default:
        break;
    }
  }
  onOptionMouseDown(index) {
    this.focused = true;
    this.focusedOptionIndex = index;
  }
  onArrowDownKey(event) {
    const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex);
    this.changeFocusedOptionIndex(optionIndex);
    if (event.shiftKey) {
      this.onEnterKey(event);
    }
    event.preventDefault();
  }
  onArrowUpKey(event) {
    const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex);
    this.changeFocusedOptionIndex(optionIndex);
    if (event.shiftKey) {
      this.onEnterKey(event);
    }
    event.preventDefault();
  }
  onHomeKey(event) {
    if (event.ctrlKey && event.shiftKey) {
      let visibleOptions = this.getVisibleOptions();
      let focusedIndex = ObjectUtils.findIndexInList(this.focusedOption, visibleOptions);
      this.d_selection = [...this.value].slice(0, focusedIndex + 1);
      this.selectionChange.emit(this.d_selection);
    } else {
      this.changeFocusedOptionIndex(0);
    }
    event.preventDefault();
  }
  onEndKey(event) {
    if (event.ctrlKey && event.shiftKey) {
      let visibleOptions = this.getVisibleOptions();
      let focusedIndex = ObjectUtils.findIndexInList(this.focusedOption, visibleOptions);
      this.d_selection = [...this.value].slice(focusedIndex, visibleOptions.length - 1);
      this.selectionChange.emit(this.d_selection);
    } else {
      this.changeFocusedOptionIndex(DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="item"]').length - 1);
    }
    event.preventDefault();
  }
  onEnterKey(event) {
    this.onItemClick(event, this.focusedOption);
    event.preventDefault();
  }
  onSpaceKey(event) {
    event.preventDefault();
    if (event.shiftKey && this.selection && this.selection.length > 0) {
      let visibleOptions = this.getVisibleOptions();
      let lastSelectedIndex = this.getLatestSelectedVisibleOptionIndex(visibleOptions);
      if (lastSelectedIndex !== -1) {
        let focusedIndex = ObjectUtils.findIndexInList(this.focusedOption, visibleOptions);
        this.d_selection = [...visibleOptions.slice(Math.min(lastSelectedIndex, focusedIndex), Math.max(lastSelectedIndex, focusedIndex) + 1)];
        this.selectionChange.emit(this.d_selection);
        this.onSelectionChange.emit({
          originalEvent: event,
          value: this.d_selection
        });
        return;
      }
    }
    this.onEnterKey(event);
  }
  findNextOptionIndex(index) {
    const items = DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="item"]');
    const matchedOptionIndex = [...items].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
  }
  findPrevOptionIndex(index) {
    const items = DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="item"]');
    const matchedOptionIndex = [...items].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
  }
  getLatestSelectedVisibleOptionIndex(visibleOptions) {
    const latestSelectedItem = [...this.d_selection].reverse().find((item) => visibleOptions.includes(item));
    return latestSelectedItem !== void 0 ? visibleOptions.indexOf(latestSelectedItem) : -1;
  }
  getVisibleOptions() {
    return this.visibleOptions && this.visibleOptions.length > 0 ? this.visibleOptions : this.value && this.value.length > 0 ? this.value : null;
  }
  getFocusedOption(index) {
    if (index === -1) return null;
    return this.visibleOptions && this.visibleOptions.length ? this.visibleOptions[index] : this.value && this.value.length ? this.value[index] : null;
  }
  changeFocusedOptionIndex(index) {
    const items = DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="item"]');
    let order = index >= items.length ? items.length - 1 : index < 0 ? 0 : index;
    this.focusedOptionIndex = items[order] ? items[order].getAttribute("id") : -1;
    this.focusedOption = this.getFocusedOption(order);
    this.scrollInView(this.focusedOptionIndex);
  }
  scrollInView(id) {
    const element = DomHandler.findSingle(this.listViewChild.nativeElement, '[data-pc-section="item"][id="'.concat(id, '"]'));
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }
  findNextItem(item) {
    let nextItem = item.nextElementSibling;
    if (nextItem) return !DomHandler.hasClass(nextItem, "p-orderlist-item") || DomHandler.isHidden(nextItem) ? this.findNextItem(nextItem) : nextItem;
    else return null;
  }
  findPrevItem(item) {
    let prevItem = item.previousElementSibling;
    if (prevItem) return !DomHandler.hasClass(prevItem, "p-orderlist-item") || DomHandler.isHidden(prevItem) ? this.findPrevItem(prevItem) : prevItem;
    else return null;
  }
  moveDisabled() {
    if (this.disabled || !this.selection.length) {
      return true;
    }
  }
  focusedOptionId() {
    return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
  }
  createStyle() {
    var _a, _b;
    if (isPlatformBrowser(this.platformId)) {
      if (!this.styleElement) {
        this.renderer.setAttribute(this.el.nativeElement.children[0], this.id, "");
        this.styleElement = this.renderer.createElement("style");
        this.renderer.setAttribute(this.styleElement, "type", "text/css");
        DomHandler.setAttribute(this.styleElement, "nonce", (_b = (_a = this.config) == null ? void 0 : _a.csp()) == null ? void 0 : _b.nonce);
        this.renderer.appendChild(this.document.head, this.styleElement);
        let innerHTML = "\n                    @media screen and (max-width: ".concat(this.breakpoint, ") {\n                        .p-orderlist[").concat(this.id, "] {\n                            flex-direction: column;\n                        }\n\n                        .p-orderlist[").concat(this.id, "] .p-orderlist-controls {\n                            padding: var(--content-padding);\n                            flex-direction: row;\n                        }\n\n                        .p-orderlist[").concat(this.id, "] .p-orderlist-controls .p-button {\n                            margin-right: var(--inline-spacing);\n                            margin-bottom: 0;\n                        }\n\n                        .p-orderlist[").concat(this.id, "] .p-orderlist-controls .p-button:last-child {\n                            margin-right: 0;\n                        }\n                    }\n                ");
        this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
      }
    }
  }
  destroyStyle() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.styleElement) {
        this.renderer.removeChild(this.document, this.styleElement);
        this.styleElement = null;
        "";
      }
    }
  }
  ngOnDestroy() {
    this.destroyStyle();
  }
};
__publicField(_OrderList, "ɵfac", function OrderList_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OrderList)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FilterService), ɵɵdirectiveInject(PrimeNGConfig));
});
__publicField(_OrderList, "ɵcmp", ɵɵdefineComponent({
  type: _OrderList,
  selectors: [["p-orderList"]],
  contentQueries: function OrderList_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function OrderList_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    header: "header",
    style: "style",
    styleClass: "styleClass",
    tabindex: [2, "tabindex", "tabindex", numberAttribute],
    ariaLabel: "ariaLabel",
    ariaLabelledBy: "ariaLabelledBy",
    listStyle: "listStyle",
    responsive: [2, "responsive", "responsive", booleanAttribute],
    filterBy: "filterBy",
    filterPlaceholder: "filterPlaceholder",
    filterLocale: "filterLocale",
    metaKeySelection: [2, "metaKeySelection", "metaKeySelection", booleanAttribute],
    dragdrop: [2, "dragdrop", "dragdrop", booleanAttribute],
    controlsPosition: "controlsPosition",
    ariaFilterLabel: "ariaFilterLabel",
    filterMatchMode: "filterMatchMode",
    breakpoint: "breakpoint",
    stripedRows: [2, "stripedRows", "stripedRows", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    trackBy: "trackBy",
    selection: "selection",
    value: "value"
  },
  outputs: {
    selectionChange: "selectionChange",
    onReorder: "onReorder",
    onSelectionChange: "onSelectionChange",
    onFilterEvent: "onFilterEvent",
    onFocus: "onFocus",
    onBlur: "onBlur"
  },
  features: [ɵɵInputTransformsFeature],
  decls: 21,
  vars: 43,
  consts: [["listelement", ""], ["builtInFilterElement", ""], ["filter", ""], [3, "ngClass", "ngStyle"], [1, "p-orderlist-controls"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-icon-only", 3, "click", "disabled"], [4, "ngIf"], [4, "ngTemplateOutlet"], [1, "p-orderlist-list-container"], ["class", "p-orderlist-header", 4, "ngIf"], ["class", "p-orderlist-filter-container", 4, "ngIf"], ["cdkDropList", "", "role", "listbox", "aria-multiselectable", "true", 1, "p-orderlist-list", 3, "cdkDropListDropped", "focus", "blur", "keydown", "id", "ngStyle", "tabindex"], ["ngFor", "", 3, "ngForTrackBy", "ngForOf"], [1, "p-orderlist-header"], ["class", "p-orderlist-title", 4, "ngIf"], [1, "p-orderlist-title"], [1, "p-orderlist-filter-container"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-orderlist-filter"], ["type", "text", "role", "textbox", 1, "p-orderlist-filter-input", "p-inputtext", "p-component", 3, "keyup", "disabled"], [3, "styleClass", 4, "ngIf"], ["class", "p-orderlist-filter-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-orderlist-filter-icon"], ["pRipple", "", "cdkDrag", "", "role", "option", "class", "p-orderlist-item", 3, "id", "ngClass", "cdkDragData", "cdkDragDisabled", "click", "touchend", "mousedown", 4, "ngIf"], ["pRipple", "", "cdkDrag", "", "role", "option", 1, "p-orderlist-item", 3, "click", "touchend", "mousedown", "id", "ngClass", "cdkDragData", "cdkDragDisabled"], ["class", "p-orderlist-empty-message", 4, "ngIf"], [1, "p-orderlist-empty-message"]],
  template: function OrderList_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "button", 5);
      ɵɵlistener("click", function OrderList_Template_button_click_2_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.moveUp());
      });
      ɵɵtemplate(3, OrderList_AngleUpIcon_3_Template, 1, 1, "AngleUpIcon", 6)(4, OrderList_4_Template, 1, 0, null, 7);
      ɵɵelementEnd();
      ɵɵelementStart(5, "button", 5);
      ɵɵlistener("click", function OrderList_Template_button_click_5_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.moveTop());
      });
      ɵɵtemplate(6, OrderList_AngleDoubleUpIcon_6_Template, 1, 1, "AngleDoubleUpIcon", 6)(7, OrderList_7_Template, 1, 0, null, 7);
      ɵɵelementEnd();
      ɵɵelementStart(8, "button", 5);
      ɵɵlistener("click", function OrderList_Template_button_click_8_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.moveDown());
      });
      ɵɵtemplate(9, OrderList_AngleDownIcon_9_Template, 1, 1, "AngleDownIcon", 6)(10, OrderList_10_Template, 1, 0, null, 7);
      ɵɵelementEnd();
      ɵɵelementStart(11, "button", 5);
      ɵɵlistener("click", function OrderList_Template_button_click_11_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.moveBottom());
      });
      ɵɵtemplate(12, OrderList_AngleDoubleDownIcon_12_Template, 1, 1, "AngleDoubleDownIcon", 6)(13, OrderList_13_Template, 1, 0, null, 7);
      ɵɵelementEnd()();
      ɵɵelementStart(14, "div", 8);
      ɵɵtemplate(15, OrderList_div_15_Template, 3, 3, "div", 9)(16, OrderList_div_16_Template, 4, 3, "div", 10);
      ɵɵelementStart(17, "ul", 11, 0);
      ɵɵlistener("cdkDropListDropped", function OrderList_Template_ul_cdkDropListDropped_17_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onDrop($event));
      })("focus", function OrderList_Template_ul_focus_17_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onListFocus($event));
      })("blur", function OrderList_Template_ul_blur_17_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onListBlur($event));
      })("keydown", function OrderList_Template_ul_keydown_17_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onItemKeydown($event));
      });
      ɵɵtemplate(19, OrderList_ng_template_19_Template, 1, 1, "ng-template", 12)(20, OrderList_ng_container_20_Template, 3, 2, "ng-container", 6);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", ɵɵpureFunction3(39, _c2, ctx.stripedRows, ctx.controlsPosition === "left", ctx.controlsPosition === "right"))("ngStyle", ctx.style);
      ɵɵattribute("data-pc-section", "root");
      ɵɵadvance();
      ɵɵattribute("data-pc-section", "controls");
      ɵɵadvance();
      ɵɵproperty("disabled", ctx.moveDisabled());
      ɵɵattribute("aria-label", ctx.moveUpAriaLabel)("data-pc-section", "moveUpButton");
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.moveUpIconTemplate);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.moveUpIconTemplate);
      ɵɵadvance();
      ɵɵproperty("disabled", ctx.moveDisabled());
      ɵɵattribute("aria-label", ctx.moveTopAriaLabel)("data-pc-section", "moveTopButton");
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.moveTopIconTemplate);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.moveTopIconTemplate);
      ɵɵadvance();
      ɵɵproperty("disabled", ctx.moveDisabled());
      ɵɵattribute("aria-label", ctx.moveDownAriaLabel)("data-pc-section", "moveDownButton");
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.moveDownIconTemplate);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.moveDownIconTemplate);
      ɵɵadvance();
      ɵɵproperty("disabled", ctx.moveDisabled());
      ɵɵattribute("aria-label", ctx.moveBottomAriaLabel)("data-pc-section", "moveBottomButton");
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.moveBottomIconTemplate);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.moveBottomIconTemplate);
      ɵɵadvance();
      ɵɵattribute("data-pc-section", "container");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.header || ctx.headerTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.filterBy);
      ɵɵadvance();
      ɵɵproperty("id", ctx.id + "_list")("ngStyle", ctx.listStyle)("tabindex", ctx.tabindex);
      ɵɵattribute("data-pc-section", "list")("aria-activedescendant", ctx.focused ? ctx.focusedOptionId() : void 0)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy);
      ɵɵadvance(2);
      ɵɵproperty("ngForTrackBy", ctx.trackBy)("ngForOf", ctx.value);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isEmpty() && (ctx.emptyMessageTemplate || ctx.emptyFilterMessageTemplate));
    }
  },
  dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, ButtonDirective, Ripple, CdkDropList, CdkDrag, AngleDoubleDownIcon, AngleDoubleUpIcon, AngleUpIcon, AngleDownIcon, SearchIcon],
  styles: ["@layer primeng{.p-orderlist{display:flex}.p-orderlist-controls{display:flex;flex-direction:column;justify-content:center}.p-orderlist-list-container{flex:1 1 auto}.p-orderlist-list{list-style-type:none;margin:0;padding:0;overflow:auto;min-height:12rem}.p-orderlist-item{display:block;cursor:pointer;overflow:hidden;position:relative}.p-orderlist-item:not(.cdk-drag-disabled){cursor:move}.p-orderlist-item.cdk-drag-placeholder{opacity:0}.p-orderlist-item.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.p-orderlist.p-state-disabled .p-orderlist-item,.p-orderlist.p-state-disabled .p-button{cursor:default}.p-orderlist.p-state-disabled .p-orderlist-list{overflow:hidden}.p-orderlist-filter{position:relative}.p-orderlist-filter-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-orderlist-filter-input{width:100%}.p-orderlist-controls-right .p-orderlist-controls{order:2}.p-orderlist-controls-right .p-orderlist-list-container{order:1}.p-orderlist-list.cdk-drop-list-dragging .p-orderlist-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var OrderList = _OrderList;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderList, [{
    type: Component,
    args: [{
      selector: "p-orderList",
      template: '\n        <div\n            [ngClass]="{ \'p-orderlist p-component\': true, \'p-orderlist-striped\': stripedRows, \'p-orderlist-controls-left\': controlsPosition === \'left\', \'p-orderlist-controls-right\': controlsPosition === \'right\' }"\n            [ngStyle]="style"\n            [class]="styleClass"\n            [attr.data-pc-section]="\'root\'"\n        >\n            <div class="p-orderlist-controls" [attr.data-pc-section]="\'controls\'">\n                <button type="button" [disabled]="moveDisabled()" pButton pRipple class="p-button-icon-only" (click)="moveUp()" [attr.aria-label]="moveUpAriaLabel" [attr.data-pc-section]="\'moveUpButton\'">\n                    <AngleUpIcon *ngIf="!moveUpIconTemplate" [attr.data-pc-section]="\'moveupicon\'" />\n                    <ng-template *ngTemplateOutlet="moveUpIconTemplate"></ng-template>\n                </button>\n                <button type="button" [disabled]="moveDisabled()" pButton pRipple class="p-button-icon-only" (click)="moveTop()" [attr.aria-label]="moveTopAriaLabel" [attr.data-pc-section]="\'moveTopButton\'">\n                    <AngleDoubleUpIcon *ngIf="!moveTopIconTemplate" [attr.data-pc-section]="\'movetopicon\'" />\n                    <ng-template *ngTemplateOutlet="moveTopIconTemplate"></ng-template>\n                </button>\n                <button type="button" [disabled]="moveDisabled()" pButton pRipple class="p-button-icon-only" (click)="moveDown()" [attr.aria-label]="moveDownAriaLabel" [attr.data-pc-section]="\'moveDownButton\'">\n                    <AngleDownIcon *ngIf="!moveDownIconTemplate" [attr.data-pc-section]="\'movedownicon\'" />\n                    <ng-template *ngTemplateOutlet="moveDownIconTemplate"></ng-template>\n                </button>\n                <button type="button" [disabled]="moveDisabled()" pButton pRipple class="p-button-icon-only" (click)="moveBottom()" [attr.aria-label]="moveBottomAriaLabel" [attr.data-pc-section]="\'moveBottomButton\'">\n                    <AngleDoubleDownIcon *ngIf="!moveBottomIconTemplate" [attr.data-pc-section]="\'movebottomicon\'" />\n                    <ng-template *ngTemplateOutlet="moveBottomIconTemplate"></ng-template>\n                </button>\n            </div>\n            <div class="p-orderlist-list-container" [attr.data-pc-section]="\'container\'">\n                <div class="p-orderlist-header" *ngIf="header || headerTemplate" [attr.data-pc-section]="\'header\'">\n                    <div class="p-orderlist-title" *ngIf="!headerTemplate">{{ header }}</div>\n                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>\n                </div>\n                <div class="p-orderlist-filter-container" *ngIf="filterBy" [attr.data-pc-section]="\'filterContainer\'">\n                    <ng-container *ngIf="filterTemplate; else builtInFilterElement">\n                        <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>\n                    </ng-container>\n                    <ng-template #builtInFilterElement>\n                        <div class="p-orderlist-filter" [attr.data-pc-section]="\'filter\'">\n                            <input\n                                #filter\n                                type="text"\n                                role="textbox"\n                                (keyup)="onFilterKeyup($event)"\n                                [disabled]="disabled"\n                                class="p-orderlist-filter-input p-inputtext p-component"\n                                [attr.placeholder]="filterPlaceholder"\n                                [attr.aria-label]="ariaFilterLabel"\n                            />\n                            <SearchIcon *ngIf="!filterIconTemplate" [styleClass]="\'p-orderlist-filter-icon\'" [attr.data-pc-section]="\'filterIcon\'" />\n                            <span class="p-orderlist-filter-icon" *ngIf="filterIconTemplate" [attr.data-pc-section]="\'filterIcon\'">\n                                <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>\n                            </span>\n                        </div>\n                    </ng-template>\n                </div>\n                <ul\n                    #listelement\n                    [id]="id + \'_list\'"\n                    cdkDropList\n                    (cdkDropListDropped)="onDrop($event)"\n                    class="p-orderlist-list"\n                    [ngStyle]="listStyle"\n                    [attr.data-pc-section]="\'list\'"\n                    role="listbox"\n                    [tabindex]="tabindex"\n                    aria-multiselectable="true"\n                    [attr.aria-activedescendant]="focused ? focusedOptionId() : undefined"\n                    [attr.aria-label]="ariaLabel"\n                    [attr.aria-labelledby]="ariaLabelledBy"\n                    (focus)="onListFocus($event)"\n                    (blur)="onListBlur($event)"\n                    (keydown)="onItemKeydown($event)"\n                >\n                    <ng-template ngFor [ngForTrackBy]="trackBy" let-item [ngForOf]="value" let-i="index" let-l="last">\n                        <li\n                            [id]="id + \'_\' + i"\n                            pRipple\n                            cdkDrag\n                            role="option"\n                            class="p-orderlist-item"\n                            [ngClass]="{ \'p-highlight\': isSelected(item), \'p-disabled\': disabled, \'p-focus\': id + \'_\' + i === focusedOptionId() }"\n                            [cdkDragData]="item"\n                            [cdkDragDisabled]="!dragdrop"\n                            (click)="onItemClick($event, item, i, id + \'_\' + i)"\n                            (touchend)="onItemTouchEnd()"\n                            (mousedown)="onOptionMouseDown(i)"\n                            *ngIf="isItemVisible(item)"\n                            [attr.aria-selected]="isSelected(item)"\n                            [attr.data-pc-section]="\'item\'"\n                            [attr.data-p-highlight]="isSelected(item)"\n                            [attr.data-p-focused]="id + \'_\' + i === focusedOptionId()"\n                        >\n                            <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item, index: i }"></ng-container>\n                        </li>\n                    </ng-template>\n                    <ng-container *ngIf="isEmpty() && (emptyMessageTemplate || emptyFilterMessageTemplate)">\n                        <li *ngIf="!filterValue || !emptyFilterMessageTemplate" class="p-orderlist-empty-message" [attr.data-pc-section]="\'emptyMessage\'">\n                            <ng-container *ngTemplateOutlet="emptyMessageTemplate"></ng-container>\n                        </li>\n                        <li *ngIf="filterValue" class="p-orderlist-empty-message" [attr.data-pc-section]="\'emptyMessage\'">\n                            <ng-container *ngTemplateOutlet="emptyFilterMessageTemplate"></ng-container>\n                        </li>\n                    </ng-container>\n                </ul>\n            </div>\n        </div>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-orderlist{display:flex}.p-orderlist-controls{display:flex;flex-direction:column;justify-content:center}.p-orderlist-list-container{flex:1 1 auto}.p-orderlist-list{list-style-type:none;margin:0;padding:0;overflow:auto;min-height:12rem}.p-orderlist-item{display:block;cursor:pointer;overflow:hidden;position:relative}.p-orderlist-item:not(.cdk-drag-disabled){cursor:move}.p-orderlist-item.cdk-drag-placeholder{opacity:0}.p-orderlist-item.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.p-orderlist.p-state-disabled .p-orderlist-item,.p-orderlist.p-state-disabled .p-button{cursor:default}.p-orderlist.p-state-disabled .p-orderlist-list{overflow:hidden}.p-orderlist-filter{position:relative}.p-orderlist-filter-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-orderlist-filter-input{width:100%}.p-orderlist-controls-right .p-orderlist-controls{order:2}.p-orderlist-controls-right .p-orderlist-list-container{order:1}.p-orderlist-list.cdk-drop-list-dragging .p-orderlist-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}}\n"]
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
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: FilterService
  }, {
    type: PrimeNGConfig
  }], {
    header: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    listStyle: [{
      type: Input
    }],
    responsive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterBy: [{
      type: Input
    }],
    filterPlaceholder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    metaKeySelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dragdrop: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    controlsPosition: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    breakpoint: [{
      type: Input
    }],
    stripedRows: [{
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
    trackBy: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    onReorder: [{
      type: Output
    }],
    onSelectionChange: [{
      type: Output
    }],
    onFilterEvent: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["listelement"]
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var _OrderListModule = class _OrderListModule {
};
__publicField(_OrderListModule, "ɵfac", function OrderListModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OrderListModule)();
});
__publicField(_OrderListModule, "ɵmod", ɵɵdefineNgModule({
  type: _OrderListModule,
  declarations: [OrderList],
  imports: [CommonModule, ButtonModule, SharedModule, RippleModule, DragDropModule, AngleDoubleDownIcon, AngleDoubleUpIcon, AngleUpIcon, AngleDownIcon, SearchIcon],
  exports: [OrderList, SharedModule, DragDropModule]
}));
__publicField(_OrderListModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, ButtonModule, SharedModule, RippleModule, DragDropModule, AngleDoubleDownIcon, AngleDoubleUpIcon, AngleUpIcon, AngleDownIcon, SearchIcon, SharedModule, DragDropModule]
}));
var OrderListModule = _OrderListModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ButtonModule, SharedModule, RippleModule, DragDropModule, AngleDoubleDownIcon, AngleDoubleUpIcon, AngleUpIcon, AngleDownIcon, SearchIcon],
      exports: [OrderList, SharedModule, DragDropModule],
      declarations: [OrderList]
    }]
  }], null, null);
})();
export {
  OrderList,
  OrderListModule
};
//# sourceMappingURL=primeng_orderlist.js.map
