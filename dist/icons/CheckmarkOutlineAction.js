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
export var CheckmarkOutlineAction = forwardRef(function (_a, ref) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsxs("svg", __assign({ ref: ref, width: '40', height: '40', viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: [_jsx("path", { d: 'M18.75 23.3837L15.625 20.2581L16.5081 19.375L18.75 21.6163L23.4906 16.875L24.375 17.7594L18.75 23.3837Z', fill: '#68707A' }), _jsx("path", { d: 'M20 11.25C18.2694 11.25 16.5777 11.7632 15.1388 12.7246C13.6998 13.6861 12.5783 15.0527 11.9161 16.6515C11.2538 18.2504 11.0805 20.0097 11.4181 21.707C11.7558 23.4044 12.5891 24.9635 13.8128 26.1872C15.0365 27.4109 16.5956 28.2442 18.293 28.5819C19.9903 28.9195 21.7496 28.7462 23.3485 28.0839C24.9473 27.4217 26.3139 26.3002 27.2754 24.8612C28.2368 23.4223 28.75 21.7306 28.75 20C28.75 17.6794 27.8281 15.4538 26.1872 13.8128C24.5462 12.1719 22.3206 11.25 20 11.25ZM20 27.5C18.5166 27.5 17.0666 27.0601 15.8332 26.236C14.5999 25.4119 13.6386 24.2406 13.0709 22.8701C12.5033 21.4997 12.3547 19.9917 12.6441 18.5368C12.9335 17.082 13.6478 15.7456 14.6967 14.6967C15.7456 13.6478 17.082 12.9335 18.5368 12.6441C19.9917 12.3547 21.4997 12.5032 22.8701 13.0709C24.2406 13.6386 25.4119 14.5999 26.236 15.8332C27.0601 17.0666 27.5 18.5166 27.5 20C27.5 21.9891 26.7098 23.8968 25.3033 25.3033C23.8968 26.7098 21.9891 27.5 20 27.5Z', fill: '#68707A' })] })));
});
CheckmarkOutlineAction.displayName = 'CheckmarkOutlineAction';
//# sourceMappingURL=CheckmarkOutlineAction.js.map