import { getByAltText, render, screen } from "@testing-library/react";
import {Image} from '../Components/Image'
test("Fake assertion", () => {
  expect(1).toBe(1);
});

describe('testing for image', () => {
  beforeEach(() => {
      render(<Image alt={'duck'}
      borderRadius={100}
      width={4}
      height={2}
      fit={'cover'}
      src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQARfTOMEBVV1_3fc3Ga_9E_UZ1pBnSGRHCG-qkB-3czg&s'} />)
  })

  it('should have image widht',() => {
        
    const image = screen.getByAltText('duck');
    expect(image.src).toBe('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQARfTOMEBVV1_3fc3Ga_9E_UZ1pBnSGRHCG-qkB-3czg&s')
  })

  it.only('should have width ', () => {
    const image = screen.getByAltText('duck');
    expect(getComputedStyle(image).width).toBe('100px')
  })

  

})
