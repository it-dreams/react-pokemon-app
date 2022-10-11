import React from 'react';
import { ModalOverlayContainer, ModalOverlayContent } from '../../styledComponents/Pokemon.styled';

const ModalOverlay = (props) => {
    return (
        <ModalOverlayContainer style={props.modalOverlayMain} onClick={() => props.closeModalOverlayContainer(false)} data-testid="modalRootElement">
            <ModalOverlayContent onClick={e => e.stopPropagation()} style={props.overlayContentStyle}>
                {props.children}
            </ModalOverlayContent>
        </ModalOverlayContainer>
    )
}

export default ModalOverlay;