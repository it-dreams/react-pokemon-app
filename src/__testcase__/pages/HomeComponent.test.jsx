import { getByTestId, render, screen } from '@testing-library/react';
import Home from '../../pages/HomeComponent';

describe("Test the Home component", () => {
    test("render Home component", () => {
        const { getByTestId } = render(<Home />);
        const homeElem = getByTestId("homeRootElement");
        expect(homeElem).toBeDefined();
    });
}); 