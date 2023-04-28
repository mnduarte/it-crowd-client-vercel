import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Search } from "./";

describe("Search", () => {
  it("should call onSearch with the entered value when Enter is pressed", () => {
    const onSearch = jest.fn();
    const { getByPlaceholderText } = render(<Search onSearch={onSearch} />);
    const input = getByPlaceholderText("Search for a game...");
    const searchValue = "God of War";
    fireEvent.change(input, { target: { value: searchValue } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(onSearch).toHaveBeenCalledWith(searchValue);
  });
});
