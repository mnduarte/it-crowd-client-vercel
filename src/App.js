import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home, Detail, Favorites } from "./pages";
import { useDispatch } from "react-redux";
import { login } from "./redux/User/action";
import { TOKEN } from "./constants/global.contant";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const hasToken = localStorage.getItem(TOKEN);

    if (!hasToken) {
      dispatch(login());
    }
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:code" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
