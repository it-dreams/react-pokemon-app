// // Card.test.js
import { getByTestId, render, screen } from '@testing-library/react';
import Filter from '../../../components/shared/Filter';

describe("Test the Filter component", () => {
    test("render filter component", () => {
        const { getByTestId } = render(<Filter />);
        const filter = getByTestId("typeFilterElement");
        const gender = getByTestId("genderFilterElement");
        const stats = getByTestId("statsFilterElement");
        expect(filter).toBeDefined();
        expect(gender).toBeDefined();
        expect(stats).toBeDefined();
    });
});