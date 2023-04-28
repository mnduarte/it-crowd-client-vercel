import { formatDate } from "../../utils/formatter";
import {
  CardWrapper,
  CardImage,
  CardContent,
  CardTitle,
  CardRating,
  CardReleased,
} from "./styles";
import PropTypes from "prop-types";

export const CardGame = ({
  id,
  name,
  img,
  rating,
  ratingTop,
  released,
  onClick,
}) => {
  return (
    <CardWrapper onClick={() => onClick(id)}>
      <CardImage src={img} alt={name} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardRating>
          {rating} / {ratingTop}
        </CardRating>
        <CardReleased>Released: {formatDate(released)}</CardReleased>
      </CardContent>
    </CardWrapper>
  );
};

CardGame.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingTop: PropTypes.number.isRequired,
  released: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
