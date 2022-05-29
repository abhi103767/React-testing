import { fireEvent, render,screen } from "@testing-library/react"
import Button from './Button'


describe('test Cases for button', () => {
    const fun1 = jest.fn();
    it('should have in the document', () =>{
        render(<Button onClick={fun1}>Hiii</Button>)
        let btn = screen.getByText('Hiii');
        fireEvent.click(btn);
        expect(fun1).toBeCalledTimes(1)

        
    })
})