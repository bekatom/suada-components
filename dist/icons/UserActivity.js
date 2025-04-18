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
export var UserActivity = forwardRef(function (_a, ref) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    return (_jsx("svg", __assign({ ref: ref, width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, onClick: onClick }, props, { children: _jsx("g", { id: 'User--activity', children: _jsxs("g", { id: 'Vector', children: [_jsx("path", { d: 'M15.625 14.375H15.6116C15.4781 14.3719 15.3491 14.3263 15.2434 14.2447C15.1377 14.1631 15.0608 14.0499 15.0241 13.9215L13.0444 6.99375L11.8353 10.2192C11.7906 10.3384 11.7107 10.4411 11.6061 10.5136C11.5015 10.5861 11.3773 10.625 11.25 10.625H8.75V9.375H10.8166L12.5397 4.78056C12.5859 4.65745 12.6698 4.55204 12.7794 4.47935C12.889 4.40665 13.0187 4.37036 13.1501 4.37563C13.2816 4.3809 13.408 4.42748 13.5114 4.50873C13.6148 4.58997 13.69 4.70176 13.7262 4.82819L15.6707 11.6358L16.9074 7.92725C16.9488 7.80281 17.0283 7.69457 17.1347 7.61788C17.241 7.54119 17.3689 7.49994 17.5 7.5H20V8.75H17.9504L16.2176 13.9478C16.1763 14.0722 16.0968 14.1805 15.9904 14.2572C15.884 14.3339 15.7561 14.3751 15.625 14.375Z', fill: '#020210' }), _jsx("path", { d: 'M9.375 18.75H8.125V14.375C8.12445 13.8779 7.92673 13.4013 7.57522 13.0498C7.22371 12.6983 6.74711 12.5005 6.25 12.5H3.75C3.25289 12.5005 2.77629 12.6983 2.42478 13.0498C2.07327 13.4013 1.87555 13.8779 1.875 14.375V18.75H0.625V14.375C0.625976 13.5465 0.955529 12.7522 1.54137 12.1664C2.12721 11.5805 2.9215 11.251 3.75 11.25H6.25C7.0785 11.251 7.87279 11.5805 8.45863 12.1664C9.04447 12.7522 9.37402 13.5465 9.375 14.375V18.75Z', fill: '#020210' }), _jsx("path", { d: 'M5 5C5.37084 5 5.73335 5.10997 6.04169 5.31599C6.35004 5.52202 6.59036 5.81486 6.73227 6.15747C6.87419 6.50008 6.91132 6.87708 6.83897 7.24079C6.76663 7.60451 6.58805 7.9386 6.32583 8.20083C6.0636 8.46305 5.72951 8.64163 5.36579 8.71397C5.00208 8.78632 4.62508 8.74919 4.28247 8.60727C3.93986 8.46536 3.64702 8.22504 3.44099 7.91669C3.23497 7.60835 3.125 7.24584 3.125 6.875C3.125 6.37772 3.32254 5.90081 3.67417 5.54917C4.02581 5.19754 4.50272 5 5 5ZM5 3.75C4.38193 3.75 3.77775 3.93328 3.26384 4.27666C2.74994 4.62004 2.3494 5.1081 2.11288 5.67911C1.87635 6.25013 1.81447 6.87847 1.93505 7.48466C2.05562 8.09085 2.35325 8.64767 2.79029 9.08471C3.22733 9.52175 3.78415 9.81938 4.39034 9.93995C4.99653 10.0605 5.62487 9.99865 6.19589 9.76212C6.7669 9.5256 7.25496 9.12506 7.59834 8.61116C7.94172 8.09725 8.125 7.49307 8.125 6.875C8.125 6.0462 7.79576 5.25134 7.20971 4.66529C6.62366 4.07924 5.8288 3.75 5 3.75Z', fill: '#020210' })] }) }) })));
});
UserActivity.displayName = 'UserActivity';
//# sourceMappingURL=UserActivity.js.map