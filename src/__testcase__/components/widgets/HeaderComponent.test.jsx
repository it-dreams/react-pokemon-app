import { getByTestId, render, screen } from '@testing-library/react';
import Header from '../../../components/widgets/HeaderComponent';

describe("Test the Header component", () => {
    test("render Header component", () => {
        const { getByTestId } = render(<Header />);
        const headerElem = getByTestId("headerRootElement");
        expect(headerElem).toBeDefined();
    });
});