import { getByTestId, render, screen } from '@testing-library/react';
import ModalOverlay from '../../../components/shared/ModalOverlay';

describe("Test the modelOverlay  component", () => {
    test("render modelOverlay component", () => {
        const { getByTestId } = render(<ModalOverlay />);
        const overlayElem = getByTestId("modalRootElement");
        expect(overlayElem).toBeDefined();
    });
});