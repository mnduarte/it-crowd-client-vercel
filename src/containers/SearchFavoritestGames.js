import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getUser } from "../redux/User/action";

import { useNavigate } from "react-router-dom";

export const SearchFavoritestGames = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(({ userReducer }) => ({
    ...userReducer,
  }));

  const onClickCard = (code) => navigate(`/detail/${code}`);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return children({ data: user ? user.favorites : [], onClickCard });
};

SearchFavoritestGames.propTypes = {
  children: PropTypes.node.isRequired,
};