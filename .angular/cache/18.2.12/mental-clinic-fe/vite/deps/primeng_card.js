import {
  Footer,
  Header,
  PrimeTemplate,
  SharedModule
} from "./chunk-ZROJCIWL.js";
import {
  ObjectUtils
} from "./chunk-U3NLM53U.js";
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
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  NgModule,
  ViewEncapsulation$1,
  setClassMetadata,
  signal,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-card.mjs
var _c0 = ["*", [["p-header"]], [["p-footer"]]];
var _c1 = ["*", "p-header", "p-footer"];
function Card_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Card_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵprojection(1, 1);
    ɵɵtemplate(2, Card_div_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}
function Card_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Card_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtext(1);
    ɵɵtemplate(2, Card_div_3_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.header, " ");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.titleTemplate);
  }
}
function Card_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Card_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵtemplate(2, Card_div_4_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.subheader, " ");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.subtitleTemplate);
  }
}
function Card_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Card_div_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Card_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵprojection(1, 2);
    ɵɵtemplate(2, Card_div_8_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.footerTemplate);
  }
}
var _Card = class _Card {
  constructor(el) {
    __publicField(this, "el");
    /**
     * Header of the card.
     * @group Props
     */
    __publicField(this, "header");
    /**
     * Subheader of the card.
     * @group Props
     */
    __publicField(this, "subheader");
    /**
     * Class of the element.
     * @group Props
     */
    __publicField(this, "styleClass");
    __publicField(this, "headerFacet");
    __publicField(this, "footerFacet");
    __publicField(this, "templates");
    __publicField(this, "headerTemplate");
    __publicField(this, "titleTemplate");
    __publicField(this, "subtitleTemplate");
    __publicField(this, "contentTemplate");
    __publicField(this, "footerTemplate");
    __publicField(this, "_style", signal(null));
    this.el = el;
  }
  /**
   * Inline style of the element.
   * @group Props
   */
  set style(value) {
    if (!ObjectUtils.equals(this._style(), value)) {
      this._style.set(value);
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "title":
          this.titleTemplate = item.template;
          break;
        case "subtitle":
          this.subtitleTemplate = item.template;
          break;
        case "content":
          this.contentTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
};
__publicField(_Card, "ɵfac", function Card_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Card)(ɵɵdirectiveInject(ElementRef));
});
__publicField(_Card, "ɵcmp", ɵɵdefineComponent({
  type: _Card,
  selectors: [["p-card"]],
  contentQueries: function Card_ContentQueries(rf, ctx, dirIndex) {
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
  hostAttrs: [1, "p-element"],
  inputs: {
    header: "header",
    subheader: "subheader",
    style: "style",
    styleClass: "styleClass"
  },
  ngContentSelectors: _c1,
  decls: 9,
  vars: 10,
  consts: [[3, "ngClass", "ngStyle"], ["class", "p-card-header", 4, "ngIf"], [1, "p-card-body"], ["class", "p-card-title", 4, "ngIf"], ["class", "p-card-subtitle", 4, "ngIf"], [1, "p-card-content"], [4, "ngTemplateOutlet"], ["class", "p-card-footer", 4, "ngIf"], [1, "p-card-header"], [1, "p-card-title"], [1, "p-card-subtitle"], [1, "p-card-footer"]],
  template: function Card_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c0);
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, Card_div_1_Template, 3, 1, "div", 1);
      ɵɵelementStart(2, "div", 2);
      ɵɵtemplate(3, Card_div_3_Template, 3, 2, "div", 3)(4, Card_div_4_Template, 3, 2, "div", 4);
      ɵɵelementStart(5, "div", 5);
      ɵɵprojection(6);
      ɵɵtemplate(7, Card_ng_container_7_Template, 1, 0, "ng-container", 6);
      ɵɵelementEnd();
      ɵɵtemplate(8, Card_div_8_Template, 3, 1, "div", 7);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", "p-card p-component")("ngStyle", ctx._style());
      ɵɵattribute("data-pc-name", "card");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.headerFacet || ctx.headerTemplate);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.header || ctx.titleTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.subheader || ctx.subtitleTemplate);
      ɵɵadvance(3);
      ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.footerFacet || ctx.footerTemplate);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
  styles: ["@layer primeng{.p-card-header img{width:100%}}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var Card = _Card;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Card, [{
    type: Component,
    args: [{
      selector: "p-card",
      template: '\n        <div [ngClass]="\'p-card p-component\'" [ngStyle]="_style()" [class]="styleClass" [attr.data-pc-name]="\'card\'">\n            <div class="p-card-header" *ngIf="headerFacet || headerTemplate">\n                <ng-content select="p-header"></ng-content>\n                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>\n            </div>\n            <div class="p-card-body">\n                <div class="p-card-title" *ngIf="header || titleTemplate">\n                    {{ header }}\n                    <ng-container *ngTemplateOutlet="titleTemplate"></ng-container>\n                </div>\n                <div class="p-card-subtitle" *ngIf="subheader || subtitleTemplate">\n                    {{ subheader }}\n                    <ng-container *ngTemplateOutlet="subtitleTemplate"></ng-container>\n                </div>\n                <div class="p-card-content">\n                    <ng-content></ng-content>\n                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>\n                </div>\n                <div class="p-card-footer" *ngIf="footerFacet || footerTemplate">\n                    <ng-content select="p-footer"></ng-content>\n                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>\n                </div>\n            </div>\n        </div>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-card-header img{width:100%}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    header: [{
      type: Input
    }],
    subheader: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
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
    }]
  });
})();
var _CardModule = class _CardModule {
};
__publicField(_CardModule, "ɵfac", function CardModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardModule)();
});
__publicField(_CardModule, "ɵmod", ɵɵdefineNgModule({
  type: _CardModule,
  declarations: [Card],
  imports: [CommonModule],
  exports: [Card, SharedModule]
}));
__publicField(_CardModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, SharedModule]
}));
var CardModule = _CardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Card, SharedModule],
      declarations: [Card]
    }]
  }], null, null);
})();
export {
  Card,
  CardModule
};
//# sourceMappingURL=primeng_card.js.map
