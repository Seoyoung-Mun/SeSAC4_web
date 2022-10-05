import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from './Main';
import Product from './Product';

const ReactRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <Link to ="/">페이지</Link>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/product" element={<Product />}></Route>
                    <Route path="/product/:id" element={<Product />}></Route>
                    {/* /:로 받은 값은 파람으로 받았음(?로 받은 값은 쿼리) */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter;
