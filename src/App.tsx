import React, {Suspense} from 'react'
import '../../../Downloads/pizza-app-master/src/scss/app.scss'
import {Route, Routes} from 'react-router-dom';
import {MainLayout} from "./layouts/MainLayout";
import {Home} from "./pages/Home";


const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ '../src/pages/Cart'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ './pages/FullPizza'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));

const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={''} element={<Home/>}/>
                <Route path={'cart'} element={
                    <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
                        <Cart/>
                    </Suspense>
                }/>
                <Route path={'pizza/:id'} element={
                    <Suspense fallback={<div>Идёт загрузка...</div>}>
                        <FullPizza/>
                    </Suspense>
                }/>
                <Route path={'*'} element={
                    <Suspense fallback={<div>Идёт загрузка...</div>}>
                        <NotFound/>
                    </Suspense>
                }/>
            </Route>
        </Routes>
    );
}

export default App;
