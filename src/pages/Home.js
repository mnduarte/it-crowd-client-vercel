import { CardGame } from "../components/CardGame";
import { Search } from "../components/Search";
import { SearchListGames } from "../containers/SearchListGames";
import { ContainerBar, ContainerList } from "./styles";

export const Home = () => (
  <SearchListGames>
    {({ data, handleSearch, onClickCard }) => (
      <>
        <ContainerBar>
          <Search onSearch={handleSearch} />
        </ContainerBar>

        <ContainerList>
          {data.map((game) => (
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
      </>
    )}
  </SearchListGames>
);
