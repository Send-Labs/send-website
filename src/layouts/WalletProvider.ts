import { createContext } from 'react';

 const ModalContext = createContext({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});
export default ModalContext;