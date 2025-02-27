import { render, screen } from "@testing-library/react";
import TextCmp from "../components/TextCmp";

test("Testing text of component", ()=>{
    render(<TextCmp />)
    // const textItem = screen.getByText("First React Test App.")      //case sensitive
    const textItem = screen.getByText(/first react testing app./i)
    const title = screen.getByTitle(/krishna's fav image./i)

    expect(textItem).toBeInTheDocument();
    expect(title).toBeInTheDocument();
})