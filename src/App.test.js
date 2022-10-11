import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './pages/HomeComponent';

test('Renders Home component app', () => {
    render(<App />);
    const { asFragment } = render(<Home />);
    expect(asFragment().toMatchSnapshot)
});