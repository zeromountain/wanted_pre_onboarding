import React, { useState } from 'react';
import styled from 'styled-components';

import Portal from './Portal';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className='flex flex-col border-2 w-1/2 mx-auto rounded-lg p-2 h-40 mb-10'>
      <h2 className='font-bold'>Modal</h2>
      <button
        onClick={handleOpen}
        className='w-max rounded-full px-5 py-2 bg-indigo-700 text-white mx-auto my-auto'>
        Open Modal
      </button>
      {isOpen && (
        <Portal>
          <Overlay>
            <Dim onClick={handleClose}></Dim>
            <Container>
              <ModalBody>
                <button onClick={handleClose}>x</button>
                <div className='my-10'>
                  <span className='font-bold text-indigo-900'>
                    HELLO CODESTATES!
                  </span>
                </div>
              </ModalBody>
            </Container>
          </Overlay>
        </Portal>
      )}
    </div>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  z-index: 7;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  max-width: 456px;
  position: relative;
  width: 100%;
`;

const ModalBody = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  max-height: calc(100vh - 16px);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
