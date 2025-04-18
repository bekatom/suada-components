import { ReactNode } from 'react';
export interface ITabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
    padding?: number;
    color?: string;
}
