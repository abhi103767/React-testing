import Button from "./Button";
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App'


describe('Button Tests', () => {
    it('should have present in the document', () => {
        render(<Button>Click Me</Button>);
        let button = screen.getByText('Click Me');
        expect(button).toBeInTheDocument();
    })

    it('should render based on testid', () => {
        render(<App></App>);
        let button = screen.getByTestId('cbutton');
        expect(button).toBeInTheDocument();
    })

    it.only('should render state is working', () => {
        render(<App></App>)
        let h3 = screen.getByText('Theme light');
        expect(h3).toHaveTextContent('light');

        // let themeButton = screen.getByText('change Theme');
        // fireEvent.click()

    })

})