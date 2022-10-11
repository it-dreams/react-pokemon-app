import React from 'react';
import { ProgressContainer, ProgressBody, ProgressText } from '../../styledComponents/Pokemon.styled';

const ProgressBar = ({ progress }) => {
    return (
        <ProgressContainer data-testid='rootDiv'>
            <ProgressBody style={{ width: `${progress}%` }}>
                <ProgressText>
                    {`${progress}%`}
                </ProgressText>
            </ProgressBody>
        </ProgressContainer>
    )
}

export default ProgressBar;
