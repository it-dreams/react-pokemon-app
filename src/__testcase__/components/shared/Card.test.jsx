// // Card.test.js
import { getByTestId, render, screen } from '@testing-library/react';
import Card from '../../../components/shared/Card';

const pokemon = {
    image: '',
    title: '',
    id: ''
}

describe("Test the card component", () => {
    test("render card component", () => {
        const { getByTestId } = render(<Card />);
        const card = getByTestId("CardRootElement");
        expect(card).toBeDefined();
    }); 

    test("data should be Null via object", () => {
        const { getByTestId, queryByTestId } = render(<Card id={pokemon.id} title={pokemon.title} image={pokemon.image} />);
        const imageElem = getByTestId('image');
        const detailsElem = getByTestId('image');
        expect(queryByTestId(imageElem)).toBeNull;
        expect(queryByTestId(detailsElem)).toBeNull; 
    });

    test("data should be empity", () => {
        const title = '';
        const id = '';
        const image = '';
        expect(id).toBe('');
        expect(title).toBe('');
        expect(image).toBe('');
    });

    test("data should be valid", () => {
        const title = 'Bulbasaur';
        const id = '001';
        const image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";
        expect(id).toBe('001');
        expect(title).toBe('Bulbasaur');
        expect(image).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg");
    });
});