import React from 'react';
import { CardContainer, Img, PokemonDetails, PokemonName, PokemonId } from '../../styledComponents/Pokemon.styled';
// import '../../assets/css/color.css';

import CapitalizeFirstLetter from '../../helpers/CapitalizeFirstLetter';
import ShowNumberIntoThreeDigits from '../../helpers/ShowNumberIntoThreeDigits';

const Card = ({ id, name, image, type, openModal, cardBackgroundColor }) => {
    return (
        <CardContainer onClick={openModal} style={cardBackgroundColor} data-testid="CardRootElement">
            <Img src={image} alt={name} data-testid="image" />
            <PokemonDetails data-testid="details">
                <PokemonName>{CapitalizeFirstLetter(name)}</PokemonName>
                <PokemonId>{ShowNumberIntoThreeDigits(id, 3)}</PokemonId>
            </PokemonDetails>
        </CardContainer>
    )
}

export default Card;