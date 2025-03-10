import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GridActionMenu } from './GridActionMenu';
import { GlobalStyle } from '../../global.styles';
import { Container } from './GridActionMenu.styles';
import { actionConfig } from '../CourseCard/CourseCardActionsConfig';
import { CustomThemeProvider } from '../../theme/ThemeProvider';
var mockRow = {
    id: 1,
    isBought: false,
    video: true,
};
var mockFunctions = {
    actionHandler: function (action, item) { return console.log(action, item); },
};
var meta = {
    title: 'Components/GridActionMenu',
    component: GridActionMenu,
    tags: ['autodocs'],
    decorators: [
        function (Story) { return (_jsxs(CustomThemeProvider, { children: [_jsx(GlobalStyle, {}), _jsx(Container, { children: _jsx(Story, {}) })] })); },
    ],
    parameters: {
        layout: 'centered',
    },
    args: {
        actionConfig: actionConfig(mockFunctions.actionHandler, { deleteCourse: true }, function (key) { return key; }),
        row: mockRow,
    },
};
export default meta;
export var Default = {
    args: {
        actionConfig: actionConfig(mockFunctions.actionHandler, { deleteCourse: true }, function (key) { return key; }),
        row: mockRow,
    },
};
//# sourceMappingURL=GridActionMenu.stories.js.map