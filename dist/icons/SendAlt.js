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
export var SendAlt = forwardRef(function (_a, ref) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsx("svg", __assign({ ref: ref, width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: _jsx("path", { d: 'M20.7825 3.21745C20.6813 3.1167 20.5534 3.04695 20.4139 3.01639C20.2744 2.98584 20.1291 2.99574 19.995 3.04495L3.495 9.04495C3.3527 9.09892 3.23019 9.19491 3.14374 9.32016C3.05729 9.44542 3.01099 9.59401 3.01099 9.7462C3.01099 9.89839 3.05729 10.047 3.14374 10.1722C3.23019 10.2975 3.3527 10.3935 3.495 10.4474L10.695 13.3274L13.575 20.5275C13.6291 20.6635 13.7219 20.7807 13.8418 20.8647C13.9618 20.9487 14.1037 20.9957 14.25 20.9999C14.4016 20.9968 14.5486 20.9479 14.6718 20.8595C14.795 20.7711 14.8885 20.6475 14.94 20.5049L20.94 4.00495C20.9911 3.87226 21.0034 3.72777 20.9755 3.58834C20.9477 3.44891 20.8807 3.32028 20.7825 3.21745ZM14.25 18.15L12.1575 12.9L15.75 9.30745L14.6925 8.24995L11.07 11.8724L5.85 9.74995L18.9975 5.00245L14.25 18.15Z', fill: '#020210' }) })));
});
SendAlt.displayName = 'SendAlt';
//# sourceMappingURL=SendAlt.js.map