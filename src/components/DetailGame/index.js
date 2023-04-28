import PropTypes from "prop-types";
import {
  Wrapper,
  Image,
  Info,
  Title,
  Released,
  Rating,
  Button,
} from "./styles";
import { formatDate } from "../../utils/formatter";

const mappingFavoriteAction = {
  AddFavorite: ({ onClick }) => (
    <Button isFavorite onClick={onClick}>
      Remove Favorite
    </Button>
  ),
  RemoveFavorite: ({ onClick }) => (
    <Button onClick={onClick}>Add Favorite</Button>
  ),
};

export const DetailGame = ({
  id,
  name,
  img,
  rating,
  ratingTop,
  released,
  isFavorite,
  handleFavorite,
}) => {
  const { AddFavorite, RemoveFavorite } = mappingFavoriteAction;
  return (
    <Wrapper>
      <Image src={img} alt={name} />
      <Info>
        <Title>{name}</Title>
        <Released>Released: {formatDate(released)}</Released>
        <Rating>
          Rating: {rating}/{ratingTop}
        </Rating>
        {isFavorite ? (
          <AddFavorite onClick={() => handleFavorite(id, isFavorite)} />
        ) : (
          <RemoveFavorite onClick={() => handleFavorite(id, isFavorite)} />
        )}
      </Info>
    </Wrapper>
  );
};

DetailGame.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingTop: PropTypes.number.isRequired,
  released: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  handleFavorite: PropTypes.func.isRequired,
};
