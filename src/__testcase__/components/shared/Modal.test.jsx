import { getByTestId, render, screen } from '@testing-library/react';
import Modal from '../../../components/shared/Modal';

describe("Test the model component", () => {
    test("render model component", () => {
        const { getByTestId } = render(<Modal />);
        const modalElem = getByTestId("modalRootElem"); 
        expect(modalElem).toBeDefined(); 
    });
});