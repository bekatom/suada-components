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
export var Profile = forwardRef(function (_a, ref) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsxs("svg", __assign({ ref: ref, id: 'Profile_Picture', "data-name": 'Profile Picture', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', width: '156.001', height: '159', viewBox: '0 0 156.001 159', className: className, onClick: onClick }, props, { children: [_jsxs("defs", { children: [_jsx("style", { children: "\n              .cls-1, .cls-5, .cls-7 {\n                fill: none;\n              }\n              .cls-1, .cls-5 {\n                stroke: #06c68f;\n              }\n              .cls-1 {\n                stroke-width: 12px;\n              }\n              .cls-2 {\n                opacity: 0.7;\n              }\n              .cls-3 {\n                fill: #06c68f;\n              }\n              .cls-4 {\n                clip-path: url(#clip-path);\n              }\n              .cls-5 {\n                stroke-width: 5px;\n              }\n              .cls-6 {\n                stroke: none;\n              }\n            " }), _jsx("clipPath", { id: 'clip-path', children: _jsx("ellipse", { id: 'Ellipse_55', "data-name": 'Ellipse 55', className: 'cls-1', cx: '78', cy: '77.5', rx: '78', ry: '77.5', transform: 'translate(0.068 0.317)' }) })] }), _jsxs("g", { id: 'Profile_Picture-2', "data-name": 'Profile Picture', className: 'cls-2', transform: 'translate(0.389 -0.645)', children: [_jsxs("g", { id: 'Group_411', "data-name": 'Group 411', transform: 'translate(-0.458 0.328)', children: [_jsx("ellipse", { id: 'Ellipse_53', "data-name": 'Ellipse 53', className: 'cls-3', cx: '22', cy: '23', rx: '22', ry: '23', transform: 'translate(56.068 38.317)' }), _jsx("g", { id: 'Mask_Group_9', "data-name": 'Mask Group 9', className: 'cls-4', children: _jsx("ellipse", { id: 'Ellipse_54', "data-name": 'Ellipse 54', className: 'cls-3', cx: '47.5', cy: '72', rx: '47.5', ry: '72', transform: 'translate(31.068 89.317)' }) })] }), _jsxs("g", { id: 'Ellipse_56', "data-name": 'Ellipse 56', className: 'cls-5', transform: 'translate(-0.389 4.645)', children: [_jsx("ellipse", { className: 'cls-6', cx: '78', cy: '77.5', rx: '78', ry: '77.5' }), _jsx("ellipse", { className: 'cls-7', cx: '78', cy: '77.5', rx: '75.5', ry: '75' })] })] })] })));
});
Profile.displayName = 'Profile';
//# sourceMappingURL=Profile.js.map