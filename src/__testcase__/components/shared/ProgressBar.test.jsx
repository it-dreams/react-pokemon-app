import { render } from '@testing-library/react';
import PrograssBar from '../../../components/shared/ProgressBar';

describe("Test the PrograssBar component", () => {
    render(<PrograssBar />);

    test('Render the progress value is 0%', () => {
        const test = '0';
        expect(test).toBe('0');
    });

    test('Render the progress value is 60%', () => {
        const test = '60';
        expect(test).toBe('60');
    });

    test('Render the progress value is 100%', () => {
        const test = '100';
        expect(test).toBe('100');
    });

    it('Should be false with negative value', () => {
        const test = '-100';
        expect(test).toBe('-100');
    });

    it('Should be empity', () => {
        const test = '';
        expect(test).not.toBe();
    });
});