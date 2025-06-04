import {
  ObjectUtils
} from "./chunk-U3NLM53U.js";
import {
  Component,
  Directive,
  Injectable,
  Input,
  NgModule,
  TemplateRef,
  setClassMetadata,
  signal,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-R75KKECJ.js";
import {
  Subject
} from "./chunk-FHTVLBLO.js";
import {
  __publicField,
  __spreadValues
} from "./chunk-IJZFAMY6.js";

// node_modules/primeng/fesm2022/primeng-api.mjs
var _c0 = ["*"];
var ConfirmEventType;
(function(ConfirmEventType2) {
  ConfirmEventType2[ConfirmEventType2["ACCEPT"] = 0] = "ACCEPT";
  ConfirmEventType2[ConfirmEventType2["REJECT"] = 1] = "REJECT";
  ConfirmEventType2[ConfirmEventType2["CANCEL"] = 2] = "CANCEL";
})(ConfirmEventType || (ConfirmEventType = {}));
var _ConfirmationService = class _ConfirmationService {
  constructor() {
    __publicField(this, "requireConfirmationSource", new Subject());
    __publicField(this, "acceptConfirmationSource", new Subject());
    __publicField(this, "requireConfirmation$", this.requireConfirmationSource.asObservable());
    __publicField(this, "accept", this.acceptConfirmationSource.asObservable());
  }
  /**
   * Callback to invoke on confirm.
   * @param {Confirmation} confirmation - Represents a confirmation dialog configuration.
   * @group Method
   */
  confirm(confirmation) {
    this.requireConfirmationSource.next(confirmation);
    return this;
  }
  /**
   * Closes the dialog.
   * @group Method
   */
  close() {
    this.requireConfirmationSource.next(null);
    return this;
  }
  /**
   * Accepts the dialog.
   * @group Method
   */
  onAccept() {
    this.acceptConfirmationSource.next(null);
  }
};
__publicField(_ConfirmationService, "ɵfac", function ConfirmationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmationService)();
});
__publicField(_ConfirmationService, "ɵprov", ɵɵdefineInjectable({
  token: _ConfirmationService,
  factory: _ConfirmationService.ɵfac
}));
var ConfirmationService = _ConfirmationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationService, [{
    type: Injectable
  }], null, null);
})();
var _ContextMenuService = class _ContextMenuService {
  constructor() {
    __publicField(this, "activeItemKeyChange", new Subject());
    __publicField(this, "activeItemKeyChange$", this.activeItemKeyChange.asObservable());
    __publicField(this, "activeItemKey");
  }
  changeKey(key) {
    this.activeItemKey = key;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  reset() {
    this.activeItemKey = null;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
};
__publicField(_ContextMenuService, "ɵfac", function ContextMenuService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContextMenuService)();
});
__publicField(_ContextMenuService, "ɵprov", ɵɵdefineInjectable({
  token: _ContextMenuService,
  factory: _ContextMenuService.ɵfac
}));
var ContextMenuService = _ContextMenuService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuService, [{
    type: Injectable
  }], null, null);
})();
var FilterMatchMode = class {
};
__publicField(FilterMatchMode, "STARTS_WITH", "startsWith");
__publicField(FilterMatchMode, "CONTAINS", "contains");
__publicField(FilterMatchMode, "NOT_CONTAINS", "notContains");
__publicField(FilterMatchMode, "ENDS_WITH", "endsWith");
__publicField(FilterMatchMode, "EQUALS", "equals");
__publicField(FilterMatchMode, "NOT_EQUALS", "notEquals");
__publicField(FilterMatchMode, "IN", "in");
__publicField(FilterMatchMode, "LESS_THAN", "lt");
__publicField(FilterMatchMode, "LESS_THAN_OR_EQUAL_TO", "lte");
__publicField(FilterMatchMode, "GREATER_THAN", "gt");
__publicField(FilterMatchMode, "GREATER_THAN_OR_EQUAL_TO", "gte");
__publicField(FilterMatchMode, "BETWEEN", "between");
__publicField(FilterMatchMode, "IS", "is");
__publicField(FilterMatchMode, "IS_NOT", "isNot");
__publicField(FilterMatchMode, "BEFORE", "before");
__publicField(FilterMatchMode, "AFTER", "after");
__publicField(FilterMatchMode, "DATE_IS", "dateIs");
__publicField(FilterMatchMode, "DATE_IS_NOT", "dateIsNot");
__publicField(FilterMatchMode, "DATE_BEFORE", "dateBefore");
__publicField(FilterMatchMode, "DATE_AFTER", "dateAfter");
var FilterOperator = class {
};
__publicField(FilterOperator, "AND", "and");
__publicField(FilterOperator, "OR", "or");
var _FilterService = class _FilterService {
  constructor() {
    __publicField(this, "filters", {
      startsWith: (value, filter, filterLocale) => {
        if (filter === void 0 || filter === null || filter.trim() === "") {
          return true;
        }
        if (value === void 0 || value === null) {
          return false;
        }
        let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.slice(0, filterValue.length) === filterValue;
      },
      contains: (value, filter, filterLocale) => {
        if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
          return true;
        }
        if (value === void 0 || value === null) {
          return false;
        }
        let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.indexOf(filterValue) !== -1;
      },
      notContains: (value, filter, filterLocale) => {
        if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
          return true;
        }
        if (value === void 0 || value === null) {
          return false;
        }
        let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.indexOf(filterValue) === -1;
      },
      endsWith: (value, filter, filterLocale) => {
        if (filter === void 0 || filter === null || filter.trim() === "") {
          return true;
        }
        if (value === void 0 || value === null) {
          return false;
        }
        let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
      },
      equals: (value, filter, filterLocale) => {
        if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
          return true;
        }
        if (value === void 0 || value === null) {
          return false;
        }
        if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();
        else if (value == filter) return true;
        else return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      },
      notEquals: (value, filter, filterLocale) => {
        if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
          return false;
        }
        if (value === void 0 || value === null) {
          return true;
        }
        if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();
        else if (value == filter) return false;
        else return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      },
      in: (value, filter) => {
        if (filter === void 0 || filter === null || filter.length === 0) {
          return true;
        }
        for (let i = 0; i < filter.length; i++) {
          if (ObjectUtils.equals(value, filter[i])) {
            return true;
          }
        }
        return false;
      },
      between: (value, filter) => {
        if (filter == null || filter[0] == null || filter[1] == null) {
          return true;
        }
        if (value === void 0 || value === null) {
          return false;
        }
        if (value.getTime) return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
        else return filter[0] <= value && value <= filter[1];
      },
      lt: (value, filter, filterLocale) => {
        if (filter === void 0 || filter === null) {
          return true;
        }
        if (value === void 0 || value === null) {
          return false;
        }
        if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();
        else return value < filter;
      },
      lte: (value, filter, filterLocale) => {
        if (filter === void 0 || filter === null) {
          return true;
        }
        if (value === void 0 || value === null) {
          return false;
        }
        if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();
        else return value <= filter;
      },
      gt: (value, filter, filterLocale) => {
        if (filter === void 0 || filter === null) {
          return true;
        }
        if (value === void 0 || value === null) {
          return false;
        }
        if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();
        else return value > filter;
      },
      gte: (value, filter, filterLocale) => {
        if (filter === void 0 || filter === null) {
          return true;
        }
        if (value === void 0 || value === null) {
          return false;
        }
        if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();
        else return value >= filter;
      },
      is: (value, filter, filterLocale) => {
        return this.filters.equals(value, filter, filterLocale);
      },
      isNot: (value, filter, filterLocale) => {
        return this.filters.notEquals(value, filter, filterLocale);
      },
      before: (value, filter, filterLocale) => {
        return this.filters.lt(value, filter, filterLocale);
      },
      after: (value, filter, filterLocale) => {
        return this.filters.gt(value, filter, filterLocale);
      },
      dateIs: (value, filter) => {
        if (filter === void 0 || filter === null) {
          return true;
        }
        if (value === void 0 || value === null) {
          return false;
        }
        return value.toDateString() === filter.toDateString();
      },
      dateIsNot: (value, filter) => {
        if (filter === void 0 || filter === null) {
          return true;
        }
        if (value === void 0 || value === null) {
          return false;
        }
        return value.toDateString() !== filter.toDateString();
      },
      dateBefore: (value, filter) => {
        if (filter === void 0 || filter === null) {
          return true;
        }
        if (value === void 0 || value === null) {
          return false;
        }
        return value.getTime() < filter.getTime();
      },
      dateAfter: (value, filter) => {
        if (filter === void 0 || filter === null) {
          return true;
        }
        if (value === void 0 || value === null) {
          return false;
        }
        const valueCopy = new Date(value);
        valueCopy.setHours(0, 0, 0, 0);
        return valueCopy.getTime() > filter.getTime();
      }
    });
  }
  filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    let filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          let fieldValue = ObjectUtils.resolveFieldData(item, field);
          if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  }
  register(rule, fn) {
    this.filters[rule] = fn;
  }
};
__publicField(_FilterService, "ɵfac", function FilterService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FilterService)();
});
__publicField(_FilterService, "ɵprov", ɵɵdefineInjectable({
  token: _FilterService,
  factory: _FilterService.ɵfac,
  providedIn: "root"
}));
var FilterService = _FilterService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _MessageService = class _MessageService {
  constructor() {
    __publicField(this, "messageSource", new Subject());
    __publicField(this, "clearSource", new Subject());
    __publicField(this, "messageObserver", this.messageSource.asObservable());
    __publicField(this, "clearObserver", this.clearSource.asObservable());
  }
  /**
   * Inserts single message.
   * @param {Message} message - Message to be added.
   * @group Method
   */
  add(message) {
    if (message) {
      this.messageSource.next(message);
    }
  }
  /**
   * Inserts new messages.
   * @param {Message[]} messages - Messages to be added.
   * @group Method
   */
  addAll(messages) {
    if (messages && messages.length) {
      this.messageSource.next(messages);
    }
  }
  /**
   * Clears the message with the given key.
   * @param {string} key - Key of the message to be cleared.
   * @group Method
   */
  clear(key) {
    this.clearSource.next(key || null);
  }
};
__publicField(_MessageService, "ɵfac", function MessageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MessageService)();
});
__publicField(_MessageService, "ɵprov", ɵɵdefineInjectable({
  token: _MessageService,
  factory: _MessageService.ɵfac
}));
var MessageService = _MessageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable
  }], null, null);
})();
var _OverlayService = class _OverlayService {
  constructor() {
    __publicField(this, "clickSource", new Subject());
    __publicField(this, "clickObservable", this.clickSource.asObservable());
  }
  add(event) {
    if (event) {
      this.clickSource.next(event);
    }
  }
};
__publicField(_OverlayService, "ɵfac", function OverlayService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OverlayService)();
});
__publicField(_OverlayService, "ɵprov", ɵɵdefineInjectable({
  token: _OverlayService,
  factory: _OverlayService.ɵfac,
  providedIn: "root"
}));
var OverlayService = _OverlayService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PrimeIcons = class {
};
__publicField(PrimeIcons, "ADDRESS_BOOK", "pi pi-address-book");
__publicField(PrimeIcons, "ALIGN_CENTER", "pi pi-align-center");
__publicField(PrimeIcons, "ALIGN_JUSTIFY", "pi pi-align-justify");
__publicField(PrimeIcons, "ALIGN_LEFT", "pi pi-align-left");
__publicField(PrimeIcons, "ALIGN_RIGHT", "pi pi-align-right");
__publicField(PrimeIcons, "AMAZON", "pi pi-amazon");
__publicField(PrimeIcons, "ANDROID", "pi pi-android");
__publicField(PrimeIcons, "ANGLE_DOUBLE_DOWN", "pi pi-angle-double-down");
__publicField(PrimeIcons, "ANGLE_DOUBLE_LEFT", "pi pi-angle-double-left");
__publicField(PrimeIcons, "ANGLE_DOUBLE_RIGHT", "pi pi-angle-double-right");
__publicField(PrimeIcons, "ANGLE_DOUBLE_UP", "pi pi-angle-double-up");
__publicField(PrimeIcons, "ANGLE_DOWN", "pi pi-angle-down");
__publicField(PrimeIcons, "ANGLE_LEFT", "pi pi-angle-left");
__publicField(PrimeIcons, "ANGLE_RIGHT", "pi pi-angle-right");
__publicField(PrimeIcons, "ANGLE_UP", "pi pi-angle-up");
__publicField(PrimeIcons, "APPLE", "pi pi-apple");
__publicField(PrimeIcons, "ARROWS_ALT", "pi pi-arrows-alt");
__publicField(PrimeIcons, "ARROW_CIRCLE_DOWN", "pi pi-arrow-circle-down");
__publicField(PrimeIcons, "ARROW_CIRCLE_LEFT", "pi pi-arrow-circle-left");
__publicField(PrimeIcons, "ARROW_CIRCLE_RIGHT", "pi pi-arrow-circle-right");
__publicField(PrimeIcons, "ARROW_CIRCLE_UP", "pi pi-arrow-circle-up");
__publicField(PrimeIcons, "ARROW_DOWN", "pi pi-arrow-down");
__publicField(PrimeIcons, "ARROW_DOWN_LEFT", "pi pi-arrow-down-left");
__publicField(PrimeIcons, "ARROW_DOWN_LEFT_AND_ARROW_UP_RIGHT_TO_CENTER", "pi pi-arrow-down-left-and-arrow-up-right-to-center");
__publicField(PrimeIcons, "ARROW_DOWN_RIGHT", "pi pi-arrow-down-right");
__publicField(PrimeIcons, "ARROW_LEFT", "pi pi-arrow-left");
__publicField(PrimeIcons, "ARROW_RIGHT_ARROW_LEFT", "pi pi-arrow-right-arrow-left");
__publicField(PrimeIcons, "ARROW_RIGHT", "pi pi-arrow-right");
__publicField(PrimeIcons, "ARROW_UP", "pi pi-arrow-up");
__publicField(PrimeIcons, "ARROW_UP_LEFT", "pi pi-arrow-up-left");
__publicField(PrimeIcons, "ARROW_UP_RIGHT", "pi pi-arrow-up-right");
__publicField(PrimeIcons, "ARROW_UP_RIGHT_AND_ARROW_DOWN_LEFT_FROM_CENTER", "pi pi-arrow-up-right-and-arrow-down-left-from-center");
__publicField(PrimeIcons, "ARROWS_H", "pi pi-arrows-h");
__publicField(PrimeIcons, "ARROWS_V", "pi pi-arrows-v");
__publicField(PrimeIcons, "ASTERISK", "pi pi-asterisk");
__publicField(PrimeIcons, "AT", "pi pi-at");
__publicField(PrimeIcons, "BACKWARD", "pi pi-backward");
__publicField(PrimeIcons, "BAN", "pi pi-ban");
__publicField(PrimeIcons, "BARCODE", "pi pi-barcode");
__publicField(PrimeIcons, "BARS", "pi pi-bars");
__publicField(PrimeIcons, "BELL", "pi pi-bell");
__publicField(PrimeIcons, "BELL_SLASH", "pi pi-bell-slash");
__publicField(PrimeIcons, "BITCOIN", "pi pi-bitcoin");
__publicField(PrimeIcons, "BOLT", "pi pi-bolt");
__publicField(PrimeIcons, "BOOK", "pi pi-book");
__publicField(PrimeIcons, "BOOKMARK", "pi pi-bookmark");
__publicField(PrimeIcons, "BOOKMARK_FILL", "pi pi-bookmark-fill");
__publicField(PrimeIcons, "BOX", "pi pi-box");
__publicField(PrimeIcons, "BRIEFCASE", "pi pi-briefcase");
__publicField(PrimeIcons, "BUILDING", "pi pi-building");
__publicField(PrimeIcons, "BUILDING_COLUMNS", "pi pi-building-columns");
__publicField(PrimeIcons, "BULLSEYE", "pi pi-bullseye");
__publicField(PrimeIcons, "CALCULATOR", "pi pi-calculator");
__publicField(PrimeIcons, "CALENDAR", "pi pi-calendar");
__publicField(PrimeIcons, "CALENDAR_CLOCK", "pi pi-calendar-clock");
__publicField(PrimeIcons, "CALENDAR_MINUS", "pi pi-calendar-minus");
__publicField(PrimeIcons, "CALENDAR_PLUS", "pi pi-calendar-plus");
__publicField(PrimeIcons, "CALENDAR_TIMES", "pi pi-calendar-times");
__publicField(PrimeIcons, "CAMERA", "pi pi-camera");
__publicField(PrimeIcons, "CAR", "pi pi-car");
__publicField(PrimeIcons, "CARET_DOWN", "pi pi-caret-down");
__publicField(PrimeIcons, "CARET_LEFT", "pi pi-caret-left");
__publicField(PrimeIcons, "CARET_RIGHT", "pi pi-caret-right");
__publicField(PrimeIcons, "CARET_UP", "pi pi-caret-up");
__publicField(PrimeIcons, "CART_ARROW_DOWN", "pi pi-cart-arrow-down");
__publicField(PrimeIcons, "CART_MINUS", "pi pi-cart-minus");
__publicField(PrimeIcons, "CART_PLUS", "pi pi-cart-plus");
__publicField(PrimeIcons, "CHART_BAR", "pi pi-chart-bar");
__publicField(PrimeIcons, "CHART_LINE", "pi pi-chart-line");
__publicField(PrimeIcons, "CHART_PIE", "pi pi-chart-pie");
__publicField(PrimeIcons, "CHART_SCATTER", "pi pi-chart-scatter");
__publicField(PrimeIcons, "CHECK", "pi pi-check");
__publicField(PrimeIcons, "CHECK_CIRCLE", "pi pi-check-circle");
__publicField(PrimeIcons, "CHECK_SQUARE", "pi pi-check-square");
__publicField(PrimeIcons, "CHEVRON_CIRCLE_DOWN", "pi pi-chevron-circle-down");
__publicField(PrimeIcons, "CHEVRON_CIRCLE_LEFT", "pi pi-chevron-circle-left");
__publicField(PrimeIcons, "CHEVRON_CIRCLE_RIGHT", "pi pi-chevron-circle-right");
__publicField(PrimeIcons, "CHEVRON_CIRCLE_UP", "pi pi-chevron-circle-up");
__publicField(PrimeIcons, "CHEVRON_DOWN", "pi pi-chevron-down");
__publicField(PrimeIcons, "CHEVRON_LEFT", "pi pi-chevron-left");
__publicField(PrimeIcons, "CHEVRON_RIGHT", "pi pi-chevron-right");
__publicField(PrimeIcons, "CHEVRON_UP", "pi pi-chevron-up");
__publicField(PrimeIcons, "CIRCLE", "pi pi-circle");
__publicField(PrimeIcons, "CIRCLE_FILL", "pi pi-circle-fill");
__publicField(PrimeIcons, "CLIPBOARD", "pi pi-clipboard");
__publicField(PrimeIcons, "CLOCK", "pi pi-clock");
__publicField(PrimeIcons, "CLONE", "pi pi-clone");
__publicField(PrimeIcons, "CLOUD", "pi pi-cloud");
__publicField(PrimeIcons, "CLOUD_DOWNLOAD", "pi pi-cloud-download");
__publicField(PrimeIcons, "CLOUD_UPLOAD", "pi pi-cloud-upload");
__publicField(PrimeIcons, "CODE", "pi pi-code");
__publicField(PrimeIcons, "COG", "pi pi-cog");
__publicField(PrimeIcons, "COMMENT", "pi pi-comment");
__publicField(PrimeIcons, "COMMENTS", "pi pi-comments");
__publicField(PrimeIcons, "COMPASS", "pi pi-compass");
__publicField(PrimeIcons, "COPY", "pi pi-copy");
__publicField(PrimeIcons, "CREDIT_CARD", "pi pi-credit-card");
__publicField(PrimeIcons, "CROWN", "pi pi-crown");
__publicField(PrimeIcons, "DATABASE", "pi pi-database");
__publicField(PrimeIcons, "DESKTOP", "pi pi-desktop");
__publicField(PrimeIcons, "DELETE_LEFT", "pi pi-delete-left");
__publicField(PrimeIcons, "DIRECTIONS", "pi pi-directions");
__publicField(PrimeIcons, "DIRECTIONS_ALT", "pi pi-directions-alt");
__publicField(PrimeIcons, "DISCORD", "pi pi-discord");
__publicField(PrimeIcons, "DOLLAR", "pi pi-dollar");
__publicField(PrimeIcons, "DOWNLOAD", "pi pi-download");
__publicField(PrimeIcons, "EJECT", "pi pi-eject");
__publicField(PrimeIcons, "ELLIPSIS_H", "pi pi-ellipsis-h");
__publicField(PrimeIcons, "ELLIPSIS_V", "pi pi-ellipsis-v");
__publicField(PrimeIcons, "ENVELOPE", "pi pi-envelope");
__publicField(PrimeIcons, "EQUALS", "pi pi-equals");
__publicField(PrimeIcons, "ERASER", "pi pi-eraser");
__publicField(PrimeIcons, "ETHEREUM", "pi pi-ethereum");
__publicField(PrimeIcons, "EURO", "pi pi-euro");
__publicField(PrimeIcons, "EXCLAMATION_CIRCLE", "pi pi-exclamation-circle");
__publicField(PrimeIcons, "EXCLAMATION_TRIANGLE", "pi pi-exclamation-triangle");
__publicField(PrimeIcons, "EXPAND", "pi pi-expand");
__publicField(PrimeIcons, "EXTERNAL_LINK", "pi pi-external-link");
__publicField(PrimeIcons, "EYE", "pi pi-eye");
__publicField(PrimeIcons, "EYE_SLASH", "pi pi-eye-slash");
__publicField(PrimeIcons, "FACE_SMILE", "pi pi-face-smile");
__publicField(PrimeIcons, "FACEBOOK", "pi pi-facebook");
__publicField(PrimeIcons, "FAST_BACKWARD", "pi pi-fast-backward");
__publicField(PrimeIcons, "FAST_FORWARD", "pi pi-fast-forward");
__publicField(PrimeIcons, "FILE", "pi pi-file");
__publicField(PrimeIcons, "FILE_ARROW_UP", "pi pi-file-arrow-up");
__publicField(PrimeIcons, "FILE_CHECK", "pi pi-file-check");
__publicField(PrimeIcons, "FILE_EDIT", "pi pi-file-edit");
__publicField(PrimeIcons, "FILE_IMPORT", "pi pi-file-import");
__publicField(PrimeIcons, "FILE_PDF", "pi pi-file-pdf");
__publicField(PrimeIcons, "FILE_PLUS", "pi pi-file-plus");
__publicField(PrimeIcons, "FILE_EXCEL", "pi pi-file-excel");
__publicField(PrimeIcons, "FILE_EXPORT", "pi pi-file-export");
__publicField(PrimeIcons, "FILE_WORD", "pi pi-file-word");
__publicField(PrimeIcons, "FILTER", "pi pi-filter");
__publicField(PrimeIcons, "FILTER_FILL", "pi pi-filter-fill");
__publicField(PrimeIcons, "FILTER_SLASH", "pi pi-filter-slash");
__publicField(PrimeIcons, "FLAG", "pi pi-flag");
__publicField(PrimeIcons, "FLAG_FILL", "pi pi-flag-fill");
__publicField(PrimeIcons, "FOLDER", "pi pi-folder");
__publicField(PrimeIcons, "FOLDER_OPEN", "pi pi-folder-open");
__publicField(PrimeIcons, "FOLDER_PLUS", "pi pi-folder-plus");
__publicField(PrimeIcons, "FORWARD", "pi pi-forward");
__publicField(PrimeIcons, "GAUGE", "pi pi-gauge");
__publicField(PrimeIcons, "GIFT", "pi pi-gift");
__publicField(PrimeIcons, "GITHUB", "pi pi-github");
__publicField(PrimeIcons, "GLOBE", "pi pi-globe");
__publicField(PrimeIcons, "GOOGLE", "pi pi-google");
__publicField(PrimeIcons, "GRADUATION_CAP", "pi pi-graduation-cap");
__publicField(PrimeIcons, "HAMMER", "pi pi-hammer");
__publicField(PrimeIcons, "HASHTAG", "pi pi-hashtag");
__publicField(PrimeIcons, "HEADPHONES", "pi pi-headphones");
__publicField(PrimeIcons, "HEART", "pi pi-heart");
__publicField(PrimeIcons, "HEART_FILL", "pi pi-heart-fill");
__publicField(PrimeIcons, "HISTORY", "pi pi-history");
__publicField(PrimeIcons, "HOME", "pi pi-home");
__publicField(PrimeIcons, "HOURGLASS", "pi pi-hourglass");
__publicField(PrimeIcons, "ID_CARD", "pi pi-id-card");
__publicField(PrimeIcons, "IMAGE", "pi pi-image");
__publicField(PrimeIcons, "IMAGES", "pi pi-images");
__publicField(PrimeIcons, "INBOX", "pi pi-inbox");
__publicField(PrimeIcons, "INDIAN_RUPEE", "pi pi-indian-rupee");
__publicField(PrimeIcons, "INFO", "pi pi-info");
__publicField(PrimeIcons, "INFO_CIRCLE", "pi pi-info-circle");
__publicField(PrimeIcons, "INSTAGRAM", "pi pi-instagram");
__publicField(PrimeIcons, "KEY", "pi pi-key");
__publicField(PrimeIcons, "LANGUAGE", "pi pi-language");
__publicField(PrimeIcons, "LIGHTBULB", "pi pi-lightbulb");
__publicField(PrimeIcons, "LINK", "pi pi-link");
__publicField(PrimeIcons, "LINKEDIN", "pi pi-linkedin");
__publicField(PrimeIcons, "LIST", "pi pi-list");
__publicField(PrimeIcons, "LIST_CHECK", "pi pi-list-check");
__publicField(PrimeIcons, "LOCK", "pi pi-lock");
__publicField(PrimeIcons, "LOCK_OPEN", "pi pi-lock-open");
__publicField(PrimeIcons, "MAP", "pi pi-map");
__publicField(PrimeIcons, "MAP_MARKER", "pi pi-map-marker");
__publicField(PrimeIcons, "MARS", "pi pi-mars");
__publicField(PrimeIcons, "MEGAPHONE", "pi pi-megaphone");
__publicField(PrimeIcons, "MICROCHIP", "pi pi-microchip");
__publicField(PrimeIcons, "MICROCHIP_AI", "pi pi-microchip-ai");
__publicField(PrimeIcons, "MICROPHONE", "pi pi-microphone");
__publicField(PrimeIcons, "MICROSOFT", "pi pi-microsoft");
__publicField(PrimeIcons, "MINUS", "pi pi-minus");
__publicField(PrimeIcons, "MINUS_CIRCLE", "pi pi-minus-circle");
__publicField(PrimeIcons, "MOBILE", "pi pi-mobile");
__publicField(PrimeIcons, "MONEY_BILL", "pi pi-money-bill");
__publicField(PrimeIcons, "MOON", "pi pi-moon");
__publicField(PrimeIcons, "OBJECTS_COLUMN", "pi pi-objects-column");
__publicField(PrimeIcons, "PALETTE", "pi pi-palette");
__publicField(PrimeIcons, "PAPERCLIP", "pi pi-paperclip");
__publicField(PrimeIcons, "PAUSE", "pi pi-pause");
__publicField(PrimeIcons, "PAUSE_CIRCLE", "pi pi-pause-circle");
__publicField(PrimeIcons, "PAYPAL", "pi pi-paypal");
__publicField(PrimeIcons, "PEN_TO_SQUARE", "pi pi-pen-to-square");
__publicField(PrimeIcons, "PENCIL", "pi pi-pencil");
__publicField(PrimeIcons, "PERCENTAGE", "pi pi-percentage");
__publicField(PrimeIcons, "PHONE", "pi pi-phone");
__publicField(PrimeIcons, "PINTEREST", "pi pi-pinterest");
__publicField(PrimeIcons, "PLAY", "pi pi-play");
__publicField(PrimeIcons, "PLAY_CIRCLE", "pi pi-play-circle");
__publicField(PrimeIcons, "PLUS", "pi pi-plus");
__publicField(PrimeIcons, "PLUS_CIRCLE", "pi pi-plus-circle");
__publicField(PrimeIcons, "POUND", "pi pi-pound");
__publicField(PrimeIcons, "POWER_OFF", "pi pi-power-off");
__publicField(PrimeIcons, "PRIME", "pi pi-prime");
__publicField(PrimeIcons, "PRINT", "pi pi-print");
__publicField(PrimeIcons, "QRCODE", "pi pi-qrcode");
__publicField(PrimeIcons, "QUESTION", "pi pi-question");
__publicField(PrimeIcons, "QUESTION_CIRCLE", "pi pi-question-circle");
__publicField(PrimeIcons, "RECEIPT", "pi pi-receipt");
__publicField(PrimeIcons, "REDDIT", "pi pi-reddit");
__publicField(PrimeIcons, "REFRESH", "pi pi-refresh");
__publicField(PrimeIcons, "REPLAY", "pi pi-replay");
__publicField(PrimeIcons, "REPLY", "pi pi-reply");
__publicField(PrimeIcons, "SAVE", "pi pi-save");
__publicField(PrimeIcons, "SEARCH", "pi pi-search");
__publicField(PrimeIcons, "SEARCH_MINUS", "pi pi-search-minus");
__publicField(PrimeIcons, "SEARCH_PLUS", "pi pi-search-plus");
__publicField(PrimeIcons, "SEND", "pi pi-send");
__publicField(PrimeIcons, "SERVER", "pi pi-server");
__publicField(PrimeIcons, "SHARE_ALT", "pi pi-share-alt");
__publicField(PrimeIcons, "SHIELD", "pi pi-shield");
__publicField(PrimeIcons, "SHOP", "pi pi-shop");
__publicField(PrimeIcons, "SHOPPING_BAG", "pi pi-shopping-bag");
__publicField(PrimeIcons, "SHOPPING_CART", "pi pi-shopping-cart");
__publicField(PrimeIcons, "SIGN_IN", "pi pi-sign-in");
__publicField(PrimeIcons, "SIGN_OUT", "pi pi-sign-out");
__publicField(PrimeIcons, "SITEMAP", "pi pi-sitemap");
__publicField(PrimeIcons, "SLACK", "pi pi-slack");
__publicField(PrimeIcons, "SLIDERS_H", "pi pi-sliders-h");
__publicField(PrimeIcons, "SLIDERS_V", "pi pi-sliders-v");
__publicField(PrimeIcons, "SORT", "pi pi-sort");
__publicField(PrimeIcons, "SORT_ALPHA_DOWN", "pi pi-sort-alpha-down");
__publicField(PrimeIcons, "SORT_ALPHA_DOWN_ALT", "pi pi-sort-alpha-down-alt");
__publicField(PrimeIcons, "SORT_ALPHA_UP", "pi pi-sort-alpha-up");
__publicField(PrimeIcons, "SORT_ALPHA_UP_ALT", "pi pi-sort-alpha-up-alt");
__publicField(PrimeIcons, "SORT_ALT", "pi pi-sort-alt");
__publicField(PrimeIcons, "SORT_ALT_SLASH", "pi pi-sort-alt-slash");
__publicField(PrimeIcons, "SORT_AMOUNT_DOWN", "pi pi-sort-amount-down");
__publicField(PrimeIcons, "SORT_AMOUNT_DOWN_ALT", "pi pi-sort-amount-down-alt");
__publicField(PrimeIcons, "SORT_AMOUNT_UP", "pi pi-sort-amount-up");
__publicField(PrimeIcons, "SORT_AMOUNT_UP_ALT", "pi pi-sort-amount-up-alt");
__publicField(PrimeIcons, "SORT_DOWN", "pi pi-sort-down");
__publicField(PrimeIcons, "SORT_DOWN_FILL", "pi pi-sort-down-fill");
__publicField(PrimeIcons, "SORT_NUMERIC_DOWN", "pi pi-sort-numeric-down");
__publicField(PrimeIcons, "SORT_NUMERIC_DOWN_ALT", "pi pi-sort-numeric-down-alt");
__publicField(PrimeIcons, "SORT_NUMERIC_UP", "pi pi-sort-numeric-up");
__publicField(PrimeIcons, "SORT_NUMERIC_UP_ALT", "pi pi-sort-numeric-up-alt");
__publicField(PrimeIcons, "SORT_UP", "pi pi-sort-up");
__publicField(PrimeIcons, "SORT_UP_FILL", "pi pi-sort-up-fill");
__publicField(PrimeIcons, "SPARKLES", "pi pi-sparkles");
__publicField(PrimeIcons, "SPINNER", "pi pi-spinner");
__publicField(PrimeIcons, "SPINNER_DOTTED", "pi pi-spinner-dotted");
__publicField(PrimeIcons, "STAR", "pi pi-star");
__publicField(PrimeIcons, "STAR_FILL", "pi pi-star-fill");
__publicField(PrimeIcons, "STAR_HALF", "pi pi-star-half");
__publicField(PrimeIcons, "STAR_HALF_FILL", "pi pi-star-half-fill");
__publicField(PrimeIcons, "STEP_BACKWARD", "pi pi-step-backward");
__publicField(PrimeIcons, "STEP_BACKWARD_ALT", "pi pi-step-backward-alt");
__publicField(PrimeIcons, "STEP_FORWARD", "pi pi-step-forward");
__publicField(PrimeIcons, "STEP_FORWARD_ALT", "pi pi-step-forward-alt");
__publicField(PrimeIcons, "STOP", "pi pi-stop");
__publicField(PrimeIcons, "STOP_CIRCLE", "pi pi-stop-circle");
__publicField(PrimeIcons, "STOPWATCH", "pi pi-stopwatch");
__publicField(PrimeIcons, "SUN", "pi pi-sun");
__publicField(PrimeIcons, "SYNC", "pi pi-sync");
__publicField(PrimeIcons, "TABLE", "pi pi-table");
__publicField(PrimeIcons, "TABLET", "pi pi-tablet");
__publicField(PrimeIcons, "TAG", "pi pi-tag");
__publicField(PrimeIcons, "TAGS", "pi pi-tags");
__publicField(PrimeIcons, "TELEGRAM", "pi pi-telegram");
__publicField(PrimeIcons, "TH_LARGE", "pi pi-th-large");
__publicField(PrimeIcons, "THUMBS_DOWN", "pi pi-thumbs-down");
__publicField(PrimeIcons, "THUMBS_DOWN_FILL", "pi pi-thumbs-down-fill");
__publicField(PrimeIcons, "THUMBS_UP", "pi pi-thumbs-up");
__publicField(PrimeIcons, "THUMBS_UP_FILL", "pi pi-thumbs-up-fill");
__publicField(PrimeIcons, "THUMBTACK", "pi pi-thumbtack");
__publicField(PrimeIcons, "TICKET", "pi pi-ticket");
__publicField(PrimeIcons, "TIKTOK", "pi pi-tiktok");
__publicField(PrimeIcons, "TIMES", "pi pi-times");
__publicField(PrimeIcons, "TIMES_CIRCLE", "pi pi-times-circle");
__publicField(PrimeIcons, "TRASH", "pi pi-trash");
__publicField(PrimeIcons, "TROPHY", "pi pi-trophy");
__publicField(PrimeIcons, "TRUCK", "pi pi-truck");
__publicField(PrimeIcons, "TURKISH_LIRA", "pi pi-turkish-lira");
__publicField(PrimeIcons, "TWITCH", "pi pi-twitch");
__publicField(PrimeIcons, "TWITTER", "pi pi-twitter");
__publicField(PrimeIcons, "UNDO", "pi pi-undo");
__publicField(PrimeIcons, "UNLOCK", "pi pi-unlock");
__publicField(PrimeIcons, "UPLOAD", "pi pi-upload");
__publicField(PrimeIcons, "USER", "pi pi-user");
__publicField(PrimeIcons, "USER_EDIT", "pi pi-user-edit");
__publicField(PrimeIcons, "USER_MINUS", "pi pi-user-minus");
__publicField(PrimeIcons, "USER_PLUS", "pi pi-user-plus");
__publicField(PrimeIcons, "USERS", "pi pi-users");
__publicField(PrimeIcons, "VENUS", "pi pi-venus");
__publicField(PrimeIcons, "VERIFIED", "pi pi-verified");
__publicField(PrimeIcons, "VIDEO", "pi pi-video");
__publicField(PrimeIcons, "VIMEO", "pi pi-vimeo");
__publicField(PrimeIcons, "VOLUME_DOWN", "pi pi-volume-down");
__publicField(PrimeIcons, "VOLUME_OFF", "pi pi-volume-off");
__publicField(PrimeIcons, "VOLUME_UP", "pi pi-volume-up");
__publicField(PrimeIcons, "WALLET", "pi pi-wallet");
__publicField(PrimeIcons, "WAREHOUSE", "pi pi-warehouse");
__publicField(PrimeIcons, "WAVE_PULSE", "pi pi-wave-pulse");
__publicField(PrimeIcons, "WHATSAPP", "pi pi-whatsapp");
__publicField(PrimeIcons, "WIFI", "pi pi-wifi");
__publicField(PrimeIcons, "WINDOW_MAXIMIZE", "pi pi-window-maximize");
__publicField(PrimeIcons, "WINDOW_MINIMIZE", "pi pi-window-minimize");
__publicField(PrimeIcons, "WRENCH", "pi pi-wrench");
__publicField(PrimeIcons, "YOUTUBE", "pi pi-youtube");
var _PrimeNGConfig = class _PrimeNGConfig {
  constructor() {
    __publicField(this, "ripple", false);
    __publicField(this, "inputStyle", signal("outlined"));
    __publicField(this, "overlayOptions", {});
    __publicField(this, "csp", signal({
      nonce: void 0
    }));
    __publicField(this, "filterMatchModeOptions", {
      text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
      numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
      date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
    });
    __publicField(this, "translation", {
      startsWith: "Starts with",
      contains: "Contains",
      notContains: "Not contains",
      endsWith: "Ends with",
      equals: "Equals",
      notEquals: "Not equals",
      noFilter: "No Filter",
      lt: "Less than",
      lte: "Less than or equal to",
      gt: "Greater than",
      gte: "Greater than or equal to",
      is: "Is",
      isNot: "Is not",
      before: "Before",
      after: "After",
      dateIs: "Date is",
      dateIsNot: "Date is not",
      dateBefore: "Date is before",
      dateAfter: "Date is after",
      clear: "Clear",
      apply: "Apply",
      matchAll: "Match All",
      matchAny: "Match Any",
      addRule: "Add Rule",
      removeRule: "Remove Rule",
      accept: "Yes",
      reject: "No",
      choose: "Choose",
      upload: "Upload",
      cancel: "Cancel",
      pending: "Pending",
      fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      chooseYear: "Choose Year",
      chooseMonth: "Choose Month",
      chooseDate: "Choose Date",
      prevDecade: "Previous Decade",
      nextDecade: "Next Decade",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      prevHour: "Previous Hour",
      nextHour: "Next Hour",
      prevMinute: "Previous Minute",
      nextMinute: "Next Minute",
      prevSecond: "Previous Second",
      nextSecond: "Next Second",
      am: "am",
      pm: "pm",
      dateFormat: "mm/dd/yy",
      firstDayOfWeek: 0,
      today: "Today",
      weekHeader: "Wk",
      weak: "Weak",
      medium: "Medium",
      strong: "Strong",
      passwordPrompt: "Enter a password",
      emptyMessage: "No results found",
      searchMessage: "{0} results are available",
      selectionMessage: "{0} items selected",
      emptySelectionMessage: "No selected item",
      emptySearchMessage: "No results found",
      emptyFilterMessage: "No results found",
      aria: {
        trueLabel: "True",
        falseLabel: "False",
        nullLabel: "Not Selected",
        star: "1 star",
        stars: "{star} stars",
        selectAll: "All items selected",
        unselectAll: "All items unselected",
        close: "Close",
        previous: "Previous",
        next: "Next",
        navigation: "Navigation",
        scrollTop: "Scroll Top",
        moveTop: "Move Top",
        moveUp: "Move Up",
        moveDown: "Move Down",
        moveBottom: "Move Bottom",
        moveToTarget: "Move to Target",
        moveToSource: "Move to Source",
        moveAllToTarget: "Move All to Target",
        moveAllToSource: "Move All to Source",
        pageLabel: "{page}",
        firstPageLabel: "First Page",
        lastPageLabel: "Last Page",
        nextPageLabel: "Next Page",
        prevPageLabel: "Previous Page",
        rowsPerPageLabel: "Rows per page",
        previousPageLabel: "Previous Page",
        jumpToPageDropdownLabel: "Jump to Page Dropdown",
        jumpToPageInputLabel: "Jump to Page Input",
        selectRow: "Row Selected",
        unselectRow: "Row Unselected",
        expandRow: "Row Expanded",
        collapseRow: "Row Collapsed",
        showFilterMenu: "Show Filter Menu",
        hideFilterMenu: "Hide Filter Menu",
        filterOperator: "Filter Operator",
        filterConstraint: "Filter Constraint",
        editRow: "Row Edit",
        saveEdit: "Save Edit",
        cancelEdit: "Cancel Edit",
        listView: "List View",
        gridView: "Grid View",
        slide: "Slide",
        slideNumber: "{slideNumber}",
        zoomImage: "Zoom Image",
        zoomIn: "Zoom In",
        zoomOut: "Zoom Out",
        rotateRight: "Rotate Right",
        rotateLeft: "Rotate Left",
        listLabel: "Option List",
        selectColor: "Select a color",
        removeLabel: "Remove",
        browseFiles: "Browse Files",
        maximizeLabel: "Maximize"
      }
    });
    __publicField(this, "zIndex", {
      modal: 1100,
      overlay: 1e3,
      menu: 1e3,
      tooltip: 1100
    });
    __publicField(this, "translationSource", new Subject());
    __publicField(this, "translationObserver", this.translationSource.asObservable());
  }
  getTranslation(key) {
    return this.translation[key];
  }
  setTranslation(value) {
    this.translation = __spreadValues(__spreadValues({}, this.translation), value);
    this.translationSource.next(this.translation);
  }
};
__publicField(_PrimeNGConfig, "ɵfac", function PrimeNGConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PrimeNGConfig)();
});
__publicField(_PrimeNGConfig, "ɵprov", ɵɵdefineInjectable({
  token: _PrimeNGConfig,
  factory: _PrimeNGConfig.ɵfac,
  providedIn: "root"
}));
var PrimeNGConfig = _PrimeNGConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNGConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _Header = class _Header {
};
__publicField(_Header, "ɵfac", function Header_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Header)();
});
__publicField(_Header, "ɵcmp", ɵɵdefineComponent({
  type: _Header,
  selectors: [["p-header"]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function Header_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
}));
var Header = _Header;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{
      selector: "p-header",
      standalone: true,
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var _Footer = class _Footer {
};
__publicField(_Footer, "ɵfac", function Footer_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Footer)();
});
__publicField(_Footer, "ɵcmp", ɵɵdefineComponent({
  type: _Footer,
  selectors: [["p-footer"]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function Footer_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
}));
var Footer = _Footer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{
      selector: "p-footer",
      standalone: true,
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var _PrimeTemplate = class _PrimeTemplate {
  constructor(template) {
    __publicField(this, "template");
    __publicField(this, "type");
    __publicField(this, "name");
    this.template = template;
  }
  getType() {
    return this.name;
  }
};
__publicField(_PrimeTemplate, "ɵfac", function PrimeTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PrimeTemplate)(ɵɵdirectiveInject(TemplateRef));
});
__publicField(_PrimeTemplate, "ɵdir", ɵɵdefineDirective({
  type: _PrimeTemplate,
  selectors: [["", "pTemplate", ""]],
  inputs: {
    type: "type",
    name: [0, "pTemplate", "name"]
  },
  standalone: true
}));
var PrimeTemplate = _PrimeTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeTemplate, [{
    type: Directive,
    args: [{
      selector: "[pTemplate]",
      standalone: true,
      host: {}
    }]
  }], () => [{
    type: TemplateRef
  }], {
    type: [{
      type: Input
    }],
    name: [{
      type: Input,
      args: ["pTemplate"]
    }]
  });
})();
var _SharedModule = class _SharedModule {
};
__publicField(_SharedModule, "ɵfac", function SharedModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SharedModule)();
});
__publicField(_SharedModule, "ɵmod", ɵɵdefineNgModule({
  type: _SharedModule,
  imports: [Header, Footer, PrimeTemplate],
  exports: [Header, Footer, PrimeTemplate]
}));
__publicField(_SharedModule, "ɵinj", ɵɵdefineInjector({}));
var SharedModule = _SharedModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      imports: [Header, Footer, PrimeTemplate],
      exports: [Header, Footer, PrimeTemplate]
    }]
  }], null, null);
})();
var TranslationKeys = class {
};
__publicField(TranslationKeys, "STARTS_WITH", "startsWith");
__publicField(TranslationKeys, "CONTAINS", "contains");
__publicField(TranslationKeys, "NOT_CONTAINS", "notContains");
__publicField(TranslationKeys, "ENDS_WITH", "endsWith");
__publicField(TranslationKeys, "EQUALS", "equals");
__publicField(TranslationKeys, "NOT_EQUALS", "notEquals");
__publicField(TranslationKeys, "NO_FILTER", "noFilter");
__publicField(TranslationKeys, "LT", "lt");
__publicField(TranslationKeys, "LTE", "lte");
__publicField(TranslationKeys, "GT", "gt");
__publicField(TranslationKeys, "GTE", "gte");
__publicField(TranslationKeys, "IS", "is");
__publicField(TranslationKeys, "IS_NOT", "isNot");
__publicField(TranslationKeys, "BEFORE", "before");
__publicField(TranslationKeys, "AFTER", "after");
__publicField(TranslationKeys, "CLEAR", "clear");
__publicField(TranslationKeys, "APPLY", "apply");
__publicField(TranslationKeys, "MATCH_ALL", "matchAll");
__publicField(TranslationKeys, "MATCH_ANY", "matchAny");
__publicField(TranslationKeys, "ADD_RULE", "addRule");
__publicField(TranslationKeys, "REMOVE_RULE", "removeRule");
__publicField(TranslationKeys, "ACCEPT", "accept");
__publicField(TranslationKeys, "REJECT", "reject");
__publicField(TranslationKeys, "CHOOSE", "choose");
__publicField(TranslationKeys, "UPLOAD", "upload");
__publicField(TranslationKeys, "CANCEL", "cancel");
__publicField(TranslationKeys, "PENDING", "pending");
__publicField(TranslationKeys, "FILE_SIZE_TYPES", "fileSizeTypes");
__publicField(TranslationKeys, "DAY_NAMES", "dayNames");
__publicField(TranslationKeys, "DAY_NAMES_SHORT", "dayNamesShort");
__publicField(TranslationKeys, "DAY_NAMES_MIN", "dayNamesMin");
__publicField(TranslationKeys, "MONTH_NAMES", "monthNames");
__publicField(TranslationKeys, "MONTH_NAMES_SHORT", "monthNamesShort");
__publicField(TranslationKeys, "FIRST_DAY_OF_WEEK", "firstDayOfWeek");
__publicField(TranslationKeys, "TODAY", "today");
__publicField(TranslationKeys, "WEEK_HEADER", "weekHeader");
__publicField(TranslationKeys, "WEAK", "weak");
__publicField(TranslationKeys, "MEDIUM", "medium");
__publicField(TranslationKeys, "STRONG", "strong");
__publicField(TranslationKeys, "PASSWORD_PROMPT", "passwordPrompt");
__publicField(TranslationKeys, "EMPTY_MESSAGE", "emptyMessage");
__publicField(TranslationKeys, "EMPTY_FILTER_MESSAGE", "emptyFilterMessage");
__publicField(TranslationKeys, "SHOW_FILTER_MENU", "showFilterMenu");
__publicField(TranslationKeys, "HIDE_FILTER_MENU", "hideFilterMenu");
__publicField(TranslationKeys, "SELECTION_MESSAGE", "selectionMessage");
__publicField(TranslationKeys, "ARIA", "aria");
__publicField(TranslationKeys, "SELECT_COLOR", "selectColor");
__publicField(TranslationKeys, "BROWSE_FILES", "browseFiles");
var _TreeDragDropService = class _TreeDragDropService {
  constructor() {
    __publicField(this, "dragStartSource", new Subject());
    __publicField(this, "dragStopSource", new Subject());
    __publicField(this, "dragStart$", this.dragStartSource.asObservable());
    __publicField(this, "dragStop$", this.dragStopSource.asObservable());
  }
  startDrag(event) {
    this.dragStartSource.next(event);
  }
  stopDrag(event) {
    this.dragStopSource.next(event);
  }
};
__publicField(_TreeDragDropService, "ɵfac", function TreeDragDropService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TreeDragDropService)();
});
__publicField(_TreeDragDropService, "ɵprov", ɵɵdefineInjectable({
  token: _TreeDragDropService,
  factory: _TreeDragDropService.ɵfac
}));
var TreeDragDropService = _TreeDragDropService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeDragDropService, [{
    type: Injectable
  }], null, null);
})();

export {
  ConfirmEventType,
  ConfirmationService,
  ContextMenuService,
  FilterMatchMode,
  FilterOperator,
  FilterService,
  MessageService,
  OverlayService,
  PrimeIcons,
  PrimeNGConfig,
  Header,
  Footer,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  TreeDragDropService
};
//# sourceMappingURL=chunk-ZROJCIWL.js.map
