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
export var ActivityIcon = forwardRef(function (_a, ref) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsx("svg", __assign({ ref: ref, width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: _jsx("path", { d: 'M10 1.25C5.1675 1.25 1.25 5.1675 1.25 10C1.25 14.8325 5.1675 18.75 10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.1675 14.8325 1.25 10 1.25ZM10 17.5C6.2725 17.5 3.125 14.3525 3.125 10.625C3.125 6.8975 6.2725 3.75 10 3.75C13.7275 3.75 16.875 6.8975 16.875 10.625C16.875 14.3525 13.7275 17.5 10 17.5ZM10 5.625C9.585 5.625 9.25 5.96 9.25 6.375V10.625C9.25 11.04 9.585 11.375 10 11.375C10.415 11.375 10.75 11.04 10.75 10.625V6.375C10.75 5.96 10.415 5.625 10 5.625ZM10 12.5C9.585 12.5 9.25 12.835 9.25 13.25C9.25 13.665 9.585 14 10 14C10.415 14 10.75 13.665 10.75 13.25C10.75 12.835 10.415 12.5 10 12.5Z', fill: '#68707A' }) })));
});
ActivityIcon.displayName = 'ActivityIcon';
//# sourceMappingURL=Activity.js.map