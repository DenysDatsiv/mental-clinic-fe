import {
  NG_VALUE_ACCESSOR
} from "./chunk-ZOG4HQFG.js";
import {
  Header,
  PrimeTemplate,
  SharedModule
} from "./chunk-ZROJCIWL.js";
import "./chunk-U3NLM53U.js";
import {
  DomHandler
} from "./chunk-LB42WWNC.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformServer
} from "./chunk-KUZ63KOD.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  ViewEncapsulation$1,
  afterNextRender,
  forwardRef,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵtext
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField,
  __spreadValues
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-editor.mjs
var _c0 = [[["p-header"]]];
var _c1 = ["p-header"];
function Editor_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Editor_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵprojection(1);
    ɵɵtemplate(2, Editor_div_1_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}
function Editor_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "span", 5)(2, "select", 6)(3, "option", 7);
    ɵɵtext(4, "Heading");
    ɵɵelementEnd();
    ɵɵelementStart(5, "option", 8);
    ɵɵtext(6, "Subheading");
    ɵɵelementEnd();
    ɵɵelementStart(7, "option", 9);
    ɵɵtext(8, "Normal");
    ɵɵelementEnd()();
    ɵɵelementStart(9, "select", 10)(10, "option", 9);
    ɵɵtext(11, "Sans Serif");
    ɵɵelementEnd();
    ɵɵelementStart(12, "option", 11);
    ɵɵtext(13, "Serif");
    ɵɵelementEnd();
    ɵɵelementStart(14, "option", 12);
    ɵɵtext(15, "Monospace");
    ɵɵelementEnd()()();
    ɵɵelementStart(16, "span", 5);
    ɵɵelement(17, "button", 13)(18, "button", 14)(19, "button", 15);
    ɵɵelementEnd();
    ɵɵelementStart(20, "span", 5);
    ɵɵelement(21, "select", 16)(22, "select", 17);
    ɵɵelementEnd();
    ɵɵelementStart(23, "span", 5);
    ɵɵelement(24, "button", 18)(25, "button", 19);
    ɵɵelementStart(26, "select", 20);
    ɵɵelement(27, "option", 9);
    ɵɵelementStart(28, "option", 21);
    ɵɵtext(29, "center");
    ɵɵelementEnd();
    ɵɵelementStart(30, "option", 22);
    ɵɵtext(31, "right");
    ɵɵelementEnd();
    ɵɵelementStart(32, "option", 23);
    ɵɵtext(33, "justify");
    ɵɵelementEnd()()();
    ɵɵelementStart(34, "span", 5);
    ɵɵelement(35, "button", 24)(36, "button", 25)(37, "button", 26);
    ɵɵelementEnd();
    ɵɵelementStart(38, "span", 5);
    ɵɵelement(39, "button", 27);
    ɵɵelementEnd()();
  }
}
var EDITOR_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Editor),
  multi: true
};
var _Editor = class _Editor {
  constructor(el, platformId) {
    __publicField(this, "el");
    __publicField(this, "platformId");
    /**
     * Inline style of the container.
     * @group Props
     */
    __publicField(this, "style");
    /**
     * Style class of the container.
     * @group Props
     */
    __publicField(this, "styleClass");
    /**
     * Placeholder text to show when editor is empty.
     * @group Props
     */
    __publicField(this, "placeholder");
    /**
     * Whitelist of formats to display, see here for available options.
     * @group Props
     */
    __publicField(this, "formats");
    /**
     * Modules configuration of Editor, see here for available options.
     * @group Props
     */
    __publicField(this, "modules");
    /**
     * DOM Element or a CSS selector for a DOM Element, within which the editor’s p elements (i.e. tooltips, etc.) should be confined. Currently, it only considers left and right boundaries.
     * @group Props
     */
    __publicField(this, "bounds");
    /**
     * DOM Element or a CSS selector for a DOM Element, specifying which container has the scrollbars (i.e. overflow-y: auto), if is has been changed from the default ql-editor with custom CSS. Necessary to fix scroll jumping bugs when Quill is set to auto grow its height, and another ancestor container is responsible from the scrolling..
     * @group Props
     */
    __publicField(this, "scrollingContainer");
    /**
     * Shortcut for debug. Note debug is a static method and will affect other instances of Quill editors on the page. Only warning and error messages are enabled by default.
     * @group Props
     */
    __publicField(this, "debug");
    /**
     * Callback to invoke when the quill modules are loaded.
     * @param {EditorInitEvent} event - custom event.
     * @group Emits
     */
    __publicField(this, "onInit", new EventEmitter());
    /**
     * Callback to invoke when text of editor changes.
     * @param {EditorTextChangeEvent} event - custom event.
     * @group Emits
     */
    __publicField(this, "onTextChange", new EventEmitter());
    /**
     * Callback to invoke when selection of the text changes.
     * @param {EditorSelectionChangeEvent} event - custom event.
     * @group Emits
     */
    __publicField(this, "onSelectionChange", new EventEmitter());
    __publicField(this, "templates");
    __publicField(this, "toolbar");
    __publicField(this, "value");
    __publicField(this, "_readonly", false);
    __publicField(this, "onModelChange", () => {
    });
    __publicField(this, "onModelTouched", () => {
    });
    __publicField(this, "quill");
    __publicField(this, "dynamicQuill");
    __publicField(this, "headerTemplate");
    __publicField(this, "quillElements");
    this.el = el;
    this.platformId = platformId;
    afterNextRender(() => {
      this.initQuillElements();
      this.initQuillEditor();
    });
  }
  /**
   * Whether to instantiate the editor to read-only mode.
   * @group Props
   */
  get readonly() {
    return this._readonly;
  }
  set readonly(val) {
    this._readonly = val;
    if (this.quill) {
      if (this._readonly) this.quill.disable();
      else this.quill.enable();
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
      }
    });
  }
  writeValue(value) {
    this.value = value;
    if (this.quill) {
      if (value) {
        this.quill.setContents(this.quill.clipboard.convert(this.dynamicQuill.version.startsWith("2") ? {
          html: this.value
        } : this.value));
      } else {
        this.quill.setText("");
      }
    }
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  getQuill() {
    return this.quill;
  }
  initQuillEditor() {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    if (!this.dynamicQuill) {
      import("./quill-OTFTHGQN.js").then((quillModule) => {
        this.dynamicQuill = quillModule.default;
        this.createQuillEditor();
      }).catch((e) => console.error(e.message));
    } else {
      this.createQuillEditor();
    }
  }
  createQuillEditor() {
    this.initQuillElements();
    const {
      toolbarElement,
      editorElement
    } = this.quillElements;
    let defaultModule = {
      toolbar: toolbarElement
    };
    let modules = this.modules ? __spreadValues(__spreadValues({}, defaultModule), this.modules) : defaultModule;
    this.quill = new this.dynamicQuill(editorElement, {
      modules,
      placeholder: this.placeholder,
      readOnly: this.readonly,
      theme: "snow",
      formats: this.formats,
      bounds: this.bounds,
      debug: this.debug,
      scrollingContainer: this.scrollingContainer
    });
    const isQuill2 = this.dynamicQuill.version.startsWith("2");
    if (this.value) {
      this.quill.setContents(this.quill.clipboard.convert(isQuill2 ? {
        html: this.value
      } : this.value));
    }
    this.quill.on("text-change", (delta, oldContents, source) => {
      if (source === "user") {
        let html = isQuill2 ? this.quill.getSemanticHTML() : DomHandler.findSingle(editorElement, ".ql-editor").innerHTML;
        let text = this.quill.getText().trim();
        if (html === "<p><br></p>") {
          html = null;
        }
        this.onTextChange.emit({
          htmlValue: html,
          textValue: text,
          delta,
          source
        });
        this.onModelChange(html);
        this.onModelTouched();
      }
    });
    this.quill.on("selection-change", (range, oldRange, source) => {
      this.onSelectionChange.emit({
        range,
        oldRange,
        source
      });
    });
    this.onInit.emit({
      editor: this.quill
    });
  }
  initQuillElements() {
    if (!this.quillElements) {
      this.quillElements = {
        editorElement: DomHandler.findSingle(this.el.nativeElement, "div.p-editor-content"),
        toolbarElement: DomHandler.findSingle(this.el.nativeElement, "div.p-editor-toolbar")
      };
    }
  }
};
__publicField(_Editor, "ɵfac", function Editor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Editor)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PLATFORM_ID));
});
__publicField(_Editor, "ɵcmp", ɵɵdefineComponent({
  type: _Editor,
  selectors: [["p-editor"]],
  contentQueries: function Editor_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, Header, 5);
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toolbar = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    style: "style",
    styleClass: "styleClass",
    placeholder: "placeholder",
    formats: "formats",
    modules: "modules",
    bounds: "bounds",
    scrollingContainer: "scrollingContainer",
    debug: "debug",
    readonly: "readonly"
  },
  outputs: {
    onInit: "onInit",
    onTextChange: "onTextChange",
    onSelectionChange: "onSelectionChange"
  },
  features: [ɵɵProvidersFeature([EDITOR_VALUE_ACCESSOR])],
  ngContentSelectors: _c1,
  decls: 4,
  vars: 6,
  consts: [[3, "ngClass"], ["class", "p-editor-toolbar", 4, "ngIf"], [1, "p-editor-content", 3, "ngStyle"], [1, "p-editor-toolbar"], [4, "ngTemplateOutlet"], [1, "ql-formats"], [1, "ql-header"], ["value", "1"], ["value", "2"], ["selected", ""], [1, "ql-font"], ["value", "serif"], ["value", "monospace"], ["aria-label", "Bold", "type", "button", 1, "ql-bold"], ["aria-label", "Italic", "type", "button", 1, "ql-italic"], ["aria-label", "Underline", "type", "button", 1, "ql-underline"], [1, "ql-color"], [1, "ql-background"], ["value", "ordered", "aria-label", "Ordered List", "type", "button", 1, "ql-list"], ["value", "bullet", "aria-label", "Unordered List", "type", "button", 1, "ql-list"], [1, "ql-align"], ["value", "center"], ["value", "right"], ["value", "justify"], ["aria-label", "Insert Link", "type", "button", 1, "ql-link"], ["aria-label", "Insert Image", "type", "button", 1, "ql-image"], ["aria-label", "Insert Code Block", "type", "button", 1, "ql-code-block"], ["aria-label", "Remove Styles", "type", "button", 1, "ql-clean"]],
  template: function Editor_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c0);
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, Editor_div_1_Template, 3, 1, "div", 1)(2, Editor_div_2_Template, 40, 0, "div", 1);
      ɵɵelement(3, "div", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", "p-editor-container");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.toolbar || ctx.headerTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.modules && !ctx.toolbar && !ctx.headerTemplate);
      ɵɵadvance();
      ɵɵproperty("ngStyle", ctx.style);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
  styles: [".p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item{width:auto;height:auto}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var Editor = _Editor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Editor, [{
    type: Component,
    args: [{
      selector: "p-editor",
      template: '\n        <div [ngClass]="\'p-editor-container\'" [class]="styleClass">\n            <div class="p-editor-toolbar" *ngIf="toolbar || headerTemplate">\n                <ng-content select="p-header"></ng-content>\n                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>\n            </div>\n            <div class="p-editor-toolbar" *ngIf="!modules && !toolbar && !headerTemplate">\n                <span class="ql-formats">\n                    <select class="ql-header">\n                        <option value="1">Heading</option>\n                        <option value="2">Subheading</option>\n                        <option selected>Normal</option>\n                    </select>\n                    <select class="ql-font">\n                        <option selected>Sans Serif</option>\n                        <option value="serif">Serif</option>\n                        <option value="monospace">Monospace</option>\n                    </select>\n                </span>\n                <span class="ql-formats">\n                    <button class="ql-bold" aria-label="Bold" type="button"></button>\n                    <button class="ql-italic" aria-label="Italic" type="button"></button>\n                    <button class="ql-underline" aria-label="Underline" type="button"></button>\n                </span>\n                <span class="ql-formats">\n                    <select class="ql-color"></select>\n                    <select class="ql-background"></select>\n                </span>\n                <span class="ql-formats">\n                    <button class="ql-list" value="ordered" aria-label="Ordered List" type="button"></button>\n                    <button class="ql-list" value="bullet" aria-label="Unordered List" type="button"></button>\n                    <select class="ql-align">\n                        <option selected></option>\n                        <option value="center">center</option>\n                        <option value="right">right</option>\n                        <option value="justify">justify</option>\n                    </select>\n                </span>\n                <span class="ql-formats">\n                    <button class="ql-link" aria-label="Insert Link" type="button"></button>\n                    <button class="ql-image" aria-label="Insert Image" type="button"></button>\n                    <button class="ql-code-block" aria-label="Insert Code Block" type="button"></button>\n                </span>\n                <span class="ql-formats">\n                    <button class="ql-clean" aria-label="Remove Styles" type="button"></button>\n                </span>\n            </div>\n            <div class="p-editor-content" [ngStyle]="style"></div>\n        </div>\n    ',
      providers: [EDITOR_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: [".p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item{width:auto;height:auto}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    formats: [{
      type: Input
    }],
    modules: [{
      type: Input
    }],
    bounds: [{
      type: Input
    }],
    scrollingContainer: [{
      type: Input
    }],
    debug: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    onInit: [{
      type: Output
    }],
    onTextChange: [{
      type: Output
    }],
    onSelectionChange: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    toolbar: [{
      type: ContentChild,
      args: [Header]
    }]
  });
})();
var _EditorModule = class _EditorModule {
};
__publicField(_EditorModule, "ɵfac", function EditorModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EditorModule)();
});
__publicField(_EditorModule, "ɵmod", ɵɵdefineNgModule({
  type: _EditorModule,
  declarations: [Editor],
  imports: [CommonModule],
  exports: [Editor, SharedModule]
}));
__publicField(_EditorModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, SharedModule]
}));
var EditorModule = _EditorModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Editor, SharedModule],
      declarations: [Editor]
    }]
  }], null, null);
})();
export {
  EDITOR_VALUE_ACCESSOR,
  Editor,
  EditorModule
};
//# sourceMappingURL=primeng_editor.js.map
