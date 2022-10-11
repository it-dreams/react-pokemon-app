import React from 'react';
import { ModalContainer, ModalContent } from '../../styledComponents/Pokemon.styled';

const Modal = props => {
    if (!props.show) {
        return null;
    }

    return (
        <ModalContainer onClick={props.onClose} data-testid="modalRootElem">
            <ModalContent onClick={e => e.stopPropagation()}>
                {props.children}
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal;