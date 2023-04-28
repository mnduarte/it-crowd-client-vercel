import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getGame, addFavorite, removeFavorite } from "../redux/Game/action";
import { useParams } from "react-router-dom";

export const SearchDetailGame = ({ children }) => {
  const { code } = useParams();
  const dispatch = useDispatch();
  const { game } = useSelector(({ gameReducer }) => ({
    ...gameReducer,
  }));

  const handleFavorite = (id, isFavorite) => {
    if (isFavorite) {
      return dispatch(removeFavorite(id));
    }
    return dispatch(addFavorite(id));
  };

  useEffect(() => {
    dispatch(getGame(code));
  }, [dispatch, code]);

  return children({ data: game, handleFavorite });
};

SearchDetailGame.propTypes = {
  children: PropTypes.node.isRequired,
};
