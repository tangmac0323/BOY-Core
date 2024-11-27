import { useState } from 'react';

// css
import './CustomizedModal.css';

const CustomizedModal = ({ title, children, onSubmit, closeModal }) => {
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <button type={'button'} className="close-button" onClick={closeModal}>
            &times;
          </button>
          <h3>{title}</h3>
          {children}
          <div className="modal-buttons">
            <button onClick={onSubmit}>Submit</button>
            <button onClick={closeModal} className="cancel-button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const useCustomizedModal = () => {
  const [state, setState] = useState({ open: false });

  const toggleModal = ({ data } = {}) => {
    setState((prevState) => ({ ...prevState, ...data, pen: !prevState.open }));
  };

  const openModal = ({ data } = {}) => {
    setState((prevState) => {
      return { ...prevState, ...data, open: true };
    });
  };

  const closeModal = () => {
    setState((prevState) => {
      return { ...prevState, open: false };
    });
  };

  return {
    ...state,
    toggleModal,
    openModal,
    closeModal,
  };
};

export default CustomizedModal;
