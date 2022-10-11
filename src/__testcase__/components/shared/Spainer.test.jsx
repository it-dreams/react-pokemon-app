import { getByTestId, render, screen } from '@testing-library/react';
import Spinner from '../../../components/shared/Spinner';

describe("Test the spinner component", () => {
    test("render spinner component", () => {
        const { getByTestId } = render(<Spinner />);
        const spinner = getByTestId("spinnerRootElement");
        expect(spinner).toBeDefined();
    }); 
}); 