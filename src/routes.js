import FavoritosProvider from "Context/Favoritos";
import NotFound from "Pages/404";
import Favoritos from "Pages/Favoritos";
import Home from "Pages/Home";
import PageBase from "Pages/PageBase";
import Player from "Pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase />}>
                    <Route index element={<Home />} />
                    <Route path='favoritos' element={<Favoritos />} />
                    <Route path='videos/:id' element={<Player />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes;