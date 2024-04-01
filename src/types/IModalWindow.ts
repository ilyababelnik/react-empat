import { Dispatch, SetStateAction } from 'react';

export interface IModalWindow {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}
