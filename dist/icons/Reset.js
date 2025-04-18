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
export var Reset = forwardRef(function (_a, ref) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsx("svg", __assign({ ref: ref, width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: _jsx("path", { d: 'M13.5 21C15.28 21 17.0201 20.4722 18.5001 19.4832C19.9802 18.4943 21.1337 17.0887 21.8149 15.4442C22.4961 13.7996 22.6743 11.99 22.3271 10.2442C21.9798 8.49836 21.1226 6.89472 19.864 5.63604C18.6053 4.37737 17.0016 3.5202 15.2558 3.17294C13.51 2.82567 11.7004 3.0039 10.0559 3.68509C8.41131 4.36628 7.00571 5.51983 6.01677 6.99987C5.02784 8.47991 4.5 10.22 4.5 12V16.65L1.8 13.95L0.75 15L5.25 19.5L9.75 15L8.7 13.95L6 16.65V12C6 10.5166 6.43987 9.0666 7.26398 7.83323C8.08809 6.59986 9.25943 5.63856 10.6299 5.07091C12.0003 4.50325 13.5083 4.35473 14.9632 4.64411C16.418 4.9335 17.7544 5.64781 18.8033 6.6967C19.8522 7.7456 20.5665 9.08197 20.8559 10.5368C21.1453 11.9917 20.9968 13.4997 20.4291 14.8701C19.8614 16.2406 18.9001 17.4119 17.6668 18.236C16.4334 19.0601 14.9834 19.5 13.5 19.5V21Z', fill: '#020210' }) })));
});
Reset.displayName = 'Reset';
//# sourceMappingURL=Reset.js.map