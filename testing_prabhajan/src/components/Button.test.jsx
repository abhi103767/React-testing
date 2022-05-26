import Button from "./Button";
import { fireEvent, getByTestId, render, screen } from '@testing-library/react'
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
        let button = screen.getByText('change Theme')
        expect(button).toBeInTheDocument()

        fireEvent.click(button);
        expect(h3).toHaveTextContent('dark');
        // let themeButton = screen.getByText('change Theme');
        // fireEvent.click()

    })

    xit(' hide after one click ', () => {
        let f1 = jest.fn();
        render(<Button onclick={() => f1()}>Click Measdfsa</Button>)
        const button = screen.getByTestId('cbutton');


        fireEvent.click(button);
        fireEvent.click(button)
        expect(f1).toHaveBeenCalledTimes(1)



    })


    it.only('counter should work fine', () => {
        render(<App></App>)

        let h3 = screen.getByTestId('countertext');
        expect(h3).toBeInTheDocument()
        let add = screen.getByText('ADD');
        fireEvent.click(add);
        expect(h3).toHaveTextContent(5);
        let sub = screen.getByText('REDUCE')
        fireEvent.click(sub);
        expect(h3).toHaveTextContent(0)

    })



})