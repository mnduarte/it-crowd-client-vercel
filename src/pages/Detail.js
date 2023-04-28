import { DetailGame } from "../components/DetailGame";
import { SearchDetailGame } from "../containers/SearchDetailGame";
import { ContainerList } from "./styles";

export const Detail = () => (
  <SearchDetailGame>
    {({ data, handleFavorite }) => (
      <>
        <ContainerList>
          {data && (
            <DetailGame
              id={data._id}
              name={data.name}
              img={data.backgroundImage}
              rating={data.rating}
              ratingTop={data.ratingTop}
              released={data.released}
              isFavorite={data.isFavorite}
              handleFavorite={handleFavorite}
            />
          )}
        </ContainerList>
      </>
    )}
  </SearchDetailGame>
);
