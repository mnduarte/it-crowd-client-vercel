import { render, screen } from "@testing-library/react";

import { DetailGame } from "./";
import { formatDate } from "../../utils/formatter";

const game = {
  id: 1923,
  name: "God of War: Ragnarök",
  released: "2022-11-09T00:00:00.000Z",
  backgroundImage:
    "https://media.rawg.io/media/games/1c3/1c305096502c475c00276c827f0fd697.jpg",
  rating: 4.6,
  ratingTop: 5,
  createdAt: "2023-04-27T15:18:49.945Z",
  updatedAt: "2023-04-27T15:18:49.945Z",
};

describe("DetailGame", () => {
  it("renders game details correctly", () => {
    render(
      <DetailGame
        id={game.id}
        name={game.name}
        img={game.backgroundImage}
        rating={game.rating}
        ratingTop={game.ratingTop}
        released={game.released}
        isFavorite={false}
        handleFavorite={() => {}}
      />
    );

    expect(screen.getByAltText(game.name)).toBeInTheDocument();
    expect(screen.getByText(game.name)).toBeInTheDocument();
    expect(
      screen.getByText(`Released: ${formatDate(game.released)}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Rating: ${game.rating}/${game.ratingTop}`)
    ).toBeInTheDocument();
    expect(screen.getByText("Add Favorite")).toBeInTheDocument();
  });
});
