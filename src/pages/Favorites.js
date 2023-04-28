import { CardGame } from "../components/CardGame";
import { SearchFavoritestGames } from "../containers/SearchFavoritestGames";
import { ContainerList } from "./styles";

export const Favorites = () => (
  <SearchFavoritestGames>
    {({ data, onClickCard }) => (
      <ContainerList>
        {Boolean(data) &&
          data.map((game) => (
            <CardGame
              key={game._id}
              id={game._id}
              name={game.name}
              img={game.backgroundImage}
              rating={game.rating}
              ratingTop={game.ratingTop}
              released={game.released}
              onClick={onClickCard}
            />
          ))}
      </ContainerList>
    )}
  </SearchFavoritestGames>
);
