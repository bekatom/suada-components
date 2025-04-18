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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
export var EducationDefault = forwardRef(function (_a, ref) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsxs("svg", __assign({ ref: ref, width: '16', height: '16', viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: [_jsx("path", { d: 'M13 15H12V13.5C11.9992 12.8372 11.7356 12.2018 11.2669 11.7331C10.7982 11.2644 10.1628 11.0008 9.5 11H6.5C5.8372 11.0008 5.20177 11.2644 4.7331 11.7331C4.26442 12.2018 4.00078 12.8372 4 13.5V15H3V13.5C3.00109 12.5721 3.37018 11.6825 4.02632 11.0263C4.68247 10.3702 5.57208 10.0011 6.5 10H9.5C10.4279 10.0011 11.3175 10.3702 11.9737 11.0263C12.6298 11.6825 12.9989 12.5721 13 13.5V15Z', fill: '#020210' }), _jsx("path", { d: 'M2.5 3C2.36739 3 2.24021 3.05268 2.14645 3.14645C2.05268 3.24021 2 3.36739 2 3.5V8H3V3.5C3 3.36739 2.94732 3.24021 2.85355 3.14645C2.75979 3.05268 2.63261 3 2.5 3Z', fill: '#020210' }), _jsx("path", { d: 'M2 1V2H4.5V5.5C4.5 6.42826 4.86875 7.3185 5.52513 7.97487C6.1815 8.63125 7.07174 9 8 9C8.92826 9 9.8185 8.63125 10.4749 7.97487C11.1313 7.3185 11.5 6.42826 11.5 5.5V2H14V1H2ZM5.5 2H10.5V3.5H5.5V2ZM8 8C7.33696 8 6.70107 7.73661 6.23223 7.26777C5.76339 6.79893 5.5 6.16304 5.5 5.5V4.5H10.5V5.5C10.5 6.16304 10.2366 6.79893 9.76777 7.26777C9.29893 7.73661 8.66304 8 8 8Z', fill: '#020210' })] })));
});
EducationDefault.displayName = 'EducationDefault';
//# sourceMappingURL=EducationDefault.js.map