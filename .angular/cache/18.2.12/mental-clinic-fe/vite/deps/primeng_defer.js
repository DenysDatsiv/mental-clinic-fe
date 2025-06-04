import {
  CommonModule,
  DOCUMENT,
  isPlatformBrowser
} from "./chunk-KUZ63KOD.js";
import {
  ChangeDetectorRef,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  setClassMetadata,
  ɵɵcontentQuery,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵloadQuery,
  ɵɵqueryRefresh
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-FHTVLBLO.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-defer.mjs
var _DeferredLoader = class _DeferredLoader {
  constructor(document, platformId, el, renderer, viewContainer, cd) {
    __publicField(this, "document");
    __publicField(this, "platformId");
    __publicField(this, "el");
    __publicField(this, "renderer");
    __publicField(this, "viewContainer");
    __publicField(this, "cd");
    /**
     * Callback to invoke when deferred content is loaded.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    __publicField(this, "onLoad", new EventEmitter());
    __publicField(this, "template");
    __publicField(this, "documentScrollListener");
    __publicField(this, "view");
    __publicField(this, "window");
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.viewContainer = viewContainer;
    this.cd = cd;
    this.window = this.document.defaultView;
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.shouldLoad()) {
        this.load();
      }
      if (!this.isLoaded()) {
        this.documentScrollListener = this.renderer.listen(this.window, "scroll", () => {
          if (this.shouldLoad()) {
            this.load();
            this.documentScrollListener && this.documentScrollListener();
            this.documentScrollListener = null;
          }
        });
      }
    }
  }
  shouldLoad() {
    if (this.isLoaded()) {
      return false;
    } else {
      let rect = this.el.nativeElement.getBoundingClientRect();
      let docElement = this.document.documentElement;
      let winHeight = docElement.clientHeight;
      return winHeight >= rect.top;
    }
  }
  load() {
    this.view = this.viewContainer.createEmbeddedView(this.template);
    this.onLoad.emit();
    this.cd.detectChanges();
  }
  isLoaded() {
    return this.view != null && isPlatformBrowser(this.platformId);
  }
  ngOnDestroy() {
    this.view = null;
    if (this.documentScrollListener) {
      this.documentScrollListener();
    }
  }
};
__publicField(_DeferredLoader, "ɵfac", function DeferredLoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeferredLoader)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ChangeDetectorRef));
});
__publicField(_DeferredLoader, "ɵdir", ɵɵdefineDirective({
  type: _DeferredLoader,
  selectors: [["", "pDefer", ""]],
  contentQueries: function DeferredLoader_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TemplateRef, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  outputs: {
    onLoad: "onLoad"
  }
}));
var DeferredLoader = _DeferredLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeferredLoader, [{
    type: Directive,
    args: [{
      selector: "[pDefer]",
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
    type: ViewContainerRef
  }, {
    type: ChangeDetectorRef
  }], {
    onLoad: [{
      type: Output
    }],
    template: [{
      type: ContentChild,
      args: [TemplateRef]
    }]
  });
})();
var _DeferModule = class _DeferModule {
};
__publicField(_DeferModule, "ɵfac", function DeferModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeferModule)();
});
__publicField(_DeferModule, "ɵmod", ɵɵdefineNgModule({
  type: _DeferModule,
  declarations: [DeferredLoader],
  imports: [CommonModule],
  exports: [DeferredLoader]
}));
__publicField(_DeferModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule]
}));
var DeferModule = _DeferModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeferModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [DeferredLoader],
      declarations: [DeferredLoader]
    }]
  }], null, null);
})();
export {
  DeferModule,
  DeferredLoader
};
//# sourceMappingURL=primeng_defer.js.map
