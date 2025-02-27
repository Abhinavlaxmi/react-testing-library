import { fireEvent, render, screen } from "@testing-library/react";
import InputCmp from "../components/InputCmp";

test('Testing input box', () => { 
    render(<InputCmp />)
    let checkInput = screen.getByRole("textbox");
    let checkInputPlaceholder = screen.getByPlaceholderText(/please enter your name/i)
    expect(checkInput).toBeInTheDocument();
    expect(checkInputPlaceholder).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name", "username");
    expect(checkInput).toHaveAttribute("id", "userId");
 });

 test('Changing onchange event in input', () => { 
    render(<InputCmp />);
    let input = screen.getByRole("textbox");
    fireEvent.change(input, {target:{value:'a'}});
    expect(input.value).toBe("a");
  });