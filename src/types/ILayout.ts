import { ReactNode } from 'react';
import { IFooter } from './IFooter';

export interface ILayout extends IFooter {
  children: ReactNode;
}
