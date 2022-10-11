import React from 'react';
import loading from '../../assets/images/pokemon2.gif';
import { SpinnerContainer, SpinnerContant } from '../../styledComponents/Pokemon.styled';

function Spinner() {
    return (
        <SpinnerContainer data-testid="spinnerRootElement">
            <SpinnerContant>
                <img src={loading} alt="loading" style={{ width: '300px' }} />
                <div>
                    <span>Please wait...</span>
                    <span>we are fetching you data</span>
                </div>
            </SpinnerContant>
        </SpinnerContainer>
    )
}

export default Spinner;