import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-ZOG4HQFG.js";
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
  ElementRef,
  Injectable,
  Input,
  NgModule,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-R75KKECJ.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-5OPE3T2R.js";
import {
  Subject
} from "./chunk-FHTVLBLO.js";
import {
  __publicField
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-terminal.mjs
function Terminal_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.welcomeMessage);
  }
}
function Terminal_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "span", 8);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 9);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 10);
    ɵɵtext(6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const command_r4 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.prompt);
    ɵɵadvance(2);
    ɵɵtextInterpolate(command_r4.text);
    ɵɵadvance();
    ɵɵattribute("aria-live", "polite");
    ɵɵadvance();
    ɵɵtextInterpolate(command_r4.response);
  }
}
var _TerminalService = class _TerminalService {
  constructor() {
    __publicField(this, "commandSource", new Subject());
    __publicField(this, "responseSource", new Subject());
    __publicField(this, "commandHandler", this.commandSource.asObservable());
    __publicField(this, "responseHandler", this.responseSource.asObservable());
  }
  sendCommand(command) {
    if (command) {
      this.commandSource.next(command);
    }
  }
  sendResponse(response) {
    if (response) {
      this.responseSource.next(response);
    }
  }
};
__publicField(_TerminalService, "ɵfac", function TerminalService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TerminalService)();
});
__publicField(_TerminalService, "ɵprov", ɵɵdefineInjectable({
  token: _TerminalService,
  factory: _TerminalService.ɵfac
}));
var TerminalService = _TerminalService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TerminalService, [{
    type: Injectable
  }], null, null);
})();
var _Terminal = class _Terminal {
  constructor(el, terminalService, cd) {
    __publicField(this, "el");
    __publicField(this, "terminalService");
    __publicField(this, "cd");
    /**
     * Initial text to display on terminal.
     * @group Props
     */
    __publicField(this, "welcomeMessage");
    /**
     * Prompt text for each command.
     * @group Props
     */
    __publicField(this, "prompt");
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
    __publicField(this, "commands", []);
    __publicField(this, "command");
    __publicField(this, "container");
    __publicField(this, "commandProcessed");
    __publicField(this, "subscription");
    this.el = el;
    this.terminalService = terminalService;
    this.cd = cd;
    this.subscription = terminalService.responseHandler.subscribe((response) => {
      this.commands[this.commands.length - 1].response = response;
      this.commandProcessed = true;
    });
  }
  ngAfterViewInit() {
    this.container = DomHandler.find(this.el.nativeElement, ".p-terminal")[0];
  }
  ngAfterViewChecked() {
    if (this.commandProcessed) {
      this.container.scrollTop = this.container.scrollHeight;
      this.commandProcessed = false;
    }
  }
  set response(value) {
    if (value) {
      this.commands[this.commands.length - 1].response = value;
      this.commandProcessed = true;
    }
  }
  handleCommand(event) {
    if (event.keyCode == 13) {
      this.commands.push({
        text: this.command
      });
      this.terminalService.sendCommand(this.command);
      this.command = "";
    }
  }
  focus(element) {
    element.focus();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
__publicField(_Terminal, "ɵfac", function Terminal_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Terminal)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TerminalService), ɵɵdirectiveInject(ChangeDetectorRef));
});
__publicField(_Terminal, "ɵcmp", ɵɵdefineComponent({
  type: _Terminal,
  selectors: [["p-terminal"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    welcomeMessage: "welcomeMessage",
    prompt: "prompt",
    style: "style",
    styleClass: "styleClass",
    response: "response"
  },
  decls: 9,
  vars: 8,
  consts: [["in", ""], [3, "click", "ngClass", "ngStyle"], [4, "ngIf"], [1, "p-terminal-content"], [4, "ngFor", "ngForOf"], [1, "p-terminal-prompt-container"], [1, "p-terminal-content-prompt"], ["type", "text", "autocomplete", "off", "autofocus", "", 1, "p-terminal-input", 3, "ngModelChange", "keydown", "ngModel"], [1, "p-terminal-prompt"], [1, "p-terminal-command"], [1, "p-terminal-response"]],
  template: function Terminal_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 1);
      ɵɵlistener("click", function Terminal_Template_div_click_0_listener() {
        ɵɵrestoreView(_r1);
        const in_r2 = ɵɵreference(8);
        return ɵɵresetView(ctx.focus(in_r2));
      });
      ɵɵtemplate(1, Terminal_div_1_Template, 2, 1, "div", 2);
      ɵɵelementStart(2, "div", 3);
      ɵɵtemplate(3, Terminal_div_3_Template, 7, 4, "div", 4);
      ɵɵelementEnd();
      ɵɵelementStart(4, "div", 5)(5, "span", 6);
      ɵɵtext(6);
      ɵɵelementEnd();
      ɵɵelementStart(7, "input", 7, 0);
      ɵɵtwoWayListener("ngModelChange", function Terminal_Template_input_ngModelChange_7_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.command, $event) || (ctx.command = $event);
        return ɵɵresetView($event);
      });
      ɵɵlistener("keydown", function Terminal_Template_input_keydown_7_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleCommand($event));
      });
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", "p-terminal p-component")("ngStyle", ctx.style);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.welcomeMessage);
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.commands);
      ɵɵadvance(3);
      ɵɵtextInterpolate(ctx.prompt);
      ɵɵadvance();
      ɵɵtwoWayProperty("ngModel", ctx.command);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgStyle, DefaultValueAccessor, NgControlStatus, NgModel],
  styles: ["@layer primeng{.p-terminal{height:18rem;overflow:auto}.p-terminal-prompt-container{display:flex;align-items:center}.p-terminal-input{flex:1 1 auto;border:0 none;background-color:transparent;color:inherit;padding:0;outline:0 none}.p-terminal-input::-ms-clear{display:none}}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var Terminal = _Terminal;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Terminal, [{
    type: Component,
    args: [{
      selector: "p-terminal",
      template: '\n        <div [ngClass]="\'p-terminal p-component\'" [ngStyle]="style" [class]="styleClass" (click)="focus(in)">\n            <div *ngIf="welcomeMessage">{{ welcomeMessage }}</div>\n            <div class="p-terminal-content">\n                <div *ngFor="let command of commands">\n                    <span class="p-terminal-prompt">{{ prompt }}</span>\n                    <span class="p-terminal-command">{{ command.text }}</span>\n                    <div class="p-terminal-response" [attr.aria-live]="\'polite\'">{{ command.response }}</div>\n                </div>\n            </div>\n            <div class="p-terminal-prompt-container">\n                <span class="p-terminal-content-prompt">{{ prompt }}</span>\n                <input #in type="text" [(ngModel)]="command" class="p-terminal-input" autocomplete="off" (keydown)="handleCommand($event)" autofocus />\n            </div>\n        </div>\n    ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-terminal{height:18rem;overflow:auto}.p-terminal-prompt-container{display:flex;align-items:center}.p-terminal-input{flex:1 1 auto;border:0 none;background-color:transparent;color:inherit;padding:0;outline:0 none}.p-terminal-input::-ms-clear{display:none}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: TerminalService
  }, {
    type: ChangeDetectorRef
  }], {
    welcomeMessage: [{
      type: Input
    }],
    prompt: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    response: [{
      type: Input
    }]
  });
})();
var _TerminalModule = class _TerminalModule {
};
__publicField(_TerminalModule, "ɵfac", function TerminalModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TerminalModule)();
});
__publicField(_TerminalModule, "ɵmod", ɵɵdefineNgModule({
  type: _TerminalModule,
  declarations: [Terminal],
  imports: [CommonModule, FormsModule],
  exports: [Terminal]
}));
__publicField(_TerminalModule, "ɵinj", ɵɵdefineInjector({
  imports: [CommonModule, FormsModule]
}));
var TerminalModule = _TerminalModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TerminalModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule],
      exports: [Terminal],
      declarations: [Terminal]
    }]
  }], null, null);
})();
export {
  Terminal,
  TerminalModule,
  TerminalService
};
//# sourceMappingURL=primeng_terminal.js.map
