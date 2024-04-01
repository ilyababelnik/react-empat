import { FieldError } from 'react-hook-form';

export interface ICustomInput {
  type: string;
  id: string;
  label: string;
  placeholder: string;
  error?: FieldError;
}
