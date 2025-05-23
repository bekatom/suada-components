var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
export var SearchRounded = forwardRef(function (_a, ref) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsx("svg", __assign({ ref: ref, width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: _jsx("path", { d: 'M18.125 17.2418L13.4049 12.5218C14.5391 11.1601 15.1047 9.41361 14.984 7.64559C14.8633 5.87756 14.0656 4.22412 12.7569 3.02924C11.4482 1.83436 9.72919 1.19003 7.95751 1.23029C6.18582 1.27055 4.49786 1.9923 3.24477 3.2454C1.99167 4.49849 1.26992 6.18646 1.22966 7.95814C1.1894 9.72983 1.83373 11.4488 3.02861 12.7576C4.22349 14.0663 5.87692 14.864 7.64495 14.9847C9.41298 15.1054 11.1595 14.5398 12.5211 13.4056L17.2412 18.1256L18.125 17.2418ZM2.5 8.12564C2.5 7.01312 2.8299 5.92558 3.44799 5.00055C4.06607 4.07553 4.94457 3.35456 5.97241 2.92881C7.00024 2.50307 8.13124 2.39168 9.22239 2.60872C10.3135 2.82576 11.3158 3.36149 12.1025 4.14816C12.8891 4.93483 13.4249 5.93711 13.6419 7.02825C13.859 8.1194 13.7476 9.2504 13.3218 10.2782C12.8961 11.3061 12.1751 12.1846 11.2501 12.8027C10.3251 13.4207 9.23752 13.7506 8.125 13.7506C6.63367 13.749 5.20389 13.1558 4.14935 12.1013C3.09482 11.0468 2.50166 9.61697 2.5 8.12564Z', fill: '#68707A' }) })));
});
SearchRounded.displayName = 'SearchRounded';
//# sourceMappingURL=SearchRounded.js.map