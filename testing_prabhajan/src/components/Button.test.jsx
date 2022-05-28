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

    it.only(' hide after one click ', () => {
        let add = jest.fn();
        render(<Button onClick={add}>Click Measdfsa</Button>)
        const button = screen.getByText('Click Measdfsa')
        fireEvent.click(button);
        fireEvent.click(button)
        expect(add).toBeCalledTimes(2);



    })


    it.only('button pressed', () => {
        const fn = jest.fn();
        render(<App></App>)
        const btn = screen.getByText('ADD');
        expect(btn).toBeInTheDocument()
        fireEvent.click(btn);


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