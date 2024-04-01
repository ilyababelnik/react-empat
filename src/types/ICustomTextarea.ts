import { ICustomInput } from './ICustomInput';

type TextAreaType = Omit<ICustomInput, 'type'>;

export interface ICustomTextArea extends TextAreaType {
  rows: number;
}
