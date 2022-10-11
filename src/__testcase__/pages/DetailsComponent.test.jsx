import { getByTestId, render, screen } from '@testing-library/react';
import Details from '../../pages/DetailsComponent';

describe("Test the Details component", () => {
    test("render Details component", () => {
        const { getByTestId } = render(<Details />);
        const detailsElem = getByTestId("detailsRootElement"); 
        expect(detailsElem).toBeDefined();
    });

    // test("render child component", () => {
    //     const { getByTestId } = render(<Details />);
    //     const filter = getByTestId("typeFilterElement");
    //     const gender = getByTestId("genderFilterElement");
    //     const stats = getByTestId("statsFilterElement");
    //     expect(filter).toBeDefined();
    //     expect(gender).toBeDefined();
    //     expect(stats).toBeDefined();
    // });
}); 