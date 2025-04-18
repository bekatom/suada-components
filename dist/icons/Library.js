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
export var Library = forwardRef(function (_a, ref) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsxs("svg", __assign({ ref: ref, width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: [_jsx("path", { d: 'M22.5 6H12V7.5H22.5V6Z', fill: '#020210' }), _jsx("path", { d: 'M22.5 16.5H12V18H22.5V16.5Z', fill: '#020210' }), _jsx("path", { d: 'M7.5 10.5H3C2.60232 10.4995 2.22105 10.3414 1.93984 10.0602C1.65864 9.77895 1.50046 9.39768 1.5 9V4.5C1.50046 4.10232 1.65864 3.72105 1.93984 3.43984C2.22105 3.15864 2.60232 3.00046 3 3H7.5C7.89768 3.00046 8.27895 3.15864 8.56016 3.43984C8.84136 3.72105 8.99954 4.10232 9 4.5V9C8.99954 9.39768 8.84136 9.77895 8.56016 10.0602C8.27895 10.3414 7.89768 10.4995 7.5 10.5ZM3 4.5V9H7.5009L7.5 4.5H3Z', fill: '#020210' }), _jsx("path", { d: 'M7.5 21H3C2.60232 20.9995 2.22105 20.8414 1.93984 20.5602C1.65864 20.2789 1.50046 19.8977 1.5 19.5V15C1.50046 14.6023 1.65864 14.221 1.93984 13.9398C2.22105 13.6586 2.60232 13.5005 3 13.5H7.5C7.89768 13.5005 8.27895 13.6586 8.56016 13.9398C8.84136 14.221 8.99954 14.6023 9 15V19.5C8.99954 19.8977 8.84136 20.2789 8.56016 20.5602C8.27895 20.8414 7.89768 20.9995 7.5 21ZM3 15V19.5H7.5009L7.5 15H3Z', fill: '#020210' })] })));
});
Library.displayName = 'Library';
//# sourceMappingURL=Library.js.map