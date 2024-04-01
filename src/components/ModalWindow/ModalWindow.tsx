import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import { IModalWindow } from 'types/IModalWindow';
import style from './ModalWindow.module.scss';
import CloseButton from '../../ui/CloseButton/CloseButton';

const ModalWindow: React.FC<IModalWindow> = ({ isOpenModal, setIsOpenModal }) => {
  const modal = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpenModal) {
      modal.current?.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      modal.current?.close();
      document.body.style.overflow = 'auto';
    }
  }, [isOpenModal]);

  const modalRoot = document.getElementById('modal');
  if (!modalRoot) return null;

  return createPortal(
    <dialog className={style.modal} ref={modal}>
      <div className={style.modal__wrapper}>
        <div className={style.modal__content}>
          <h2 className={style.modal__title}>Інформація</h2>
          <p className={style.modal__text}>Дякуємо за звернення!</p>
        </div>
        <CloseButton setIsOpenModal={setIsOpenModal} />
      </div>
    </dialog>,
    modalRoot,
  );
};

export default ModalWindow;
