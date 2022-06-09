import { NzSelectModeType } from 'ng-zorro-antd/select';
import * as typeSystem from 'src/app/store/type-system';
export interface IFormInput {
  label: string;
  id: string;
  type?: 'text' | 'number' | 'password' | 'email' | 'checkbox' | 'search';
  listOfSelect?: Array<any>;
  typeNz?:
    | 'nzInput'
    | 'nzTextarea'
    | 'nzTimePicker'
    | 'nzCheckbox'
    | 'nzSelectnumber'
    | 'nzSelect'
    | 'nzSelectEntiti';
  nzFormItem?: 'accountingProduct' | 'photos' | 'photo' | 'default';
  typeEntiti?: typeSystem.typeEntitis;
  typeSelect?: NzSelectModeType;
  nzHasFeedback?: boolean;
  notShowLabel?: boolean;
  isrequired: boolean;
  isautofocus: boolean;
  isdisabled?: boolean;
  placeholder: string;
  placeholderRequired?: string;
  placeholderPattern?: string;
  placeholderMinlength?: string;
  placeholderMaxlength?: string;
  placeholderTwice?: string;
}
