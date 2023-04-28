import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getGames } from "../redux/Game/action";

import { useNavigate } from "react-router-dom";

export const SearchListGames = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { games } = useSelector(({ gameReducer }) => ({
    ...gameReducer,
  }));

  const handleSearch = (name) => dispatch(getGames(name));
  const onClickCard = (code) => navigate(`/detail/${code}`);

  return children({ data: games, handleSearch, onClickCard });
};

SearchListGames.propTypes = {
  children: PropTypes.node.isRequired,
};
