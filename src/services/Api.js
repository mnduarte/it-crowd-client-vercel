import axios from "../utils/axios";

const instanceWithoutToken = axios.instanceWithoutToken;
const instance = axios.instance;

const login = () => instanceWithoutToken.post("/auth/login", {});

const getUser = () => instance.get("/user");

const getGames = ({ name }) =>
  instance.get("/game/search", { params: { name } });

const getGame = ({ id }) => instance.get("/game", { params: { id } });
const addFavorite = ({ id }) =>
  instance.put("/user/add-favorite", { gameId: id });
const removeFavorite = ({ id }) =>
  instance.put("/user/remove-favorite", { gameId: id });

const Api = {
  login,
  getUser,
  getGames,
  getGame,
  addFavorite,
  removeFavorite,
};

export default Api;
