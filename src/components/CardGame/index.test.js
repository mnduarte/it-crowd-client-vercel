import { render, screen } from "@testing-library/react";
import { CardGame } from "./";

describe("CardGame", () => {
  const mockOnClick = jest.fn();

  const props = {
    id: 1923,
    name: "God of War: Ragnarök",
    released: "2022-11-09T00:00:00.000Z",
    img: "https://media.rawg.io/media/games/1c3/1c305096502c475c00276c827f0fd697.jpg",
    rating: 4.6,
    ratingTop: 5,
    createdAt: "2023-04-27T15:18:49.945Z",
    updatedAt: "2023-04-27T15:18:49.945Z",
    onClick: mockOnClick,
  };

  it("renders game image with alt text", () => {
    render(<CardGame {...props} />);
    const image = screen.getByAltText(props.name);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", props.img);
  });
});
