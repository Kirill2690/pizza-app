import React, {Suspense} from 'react'
import '../../../Downloads/pizza-app-master/src/scss/app.scss'
import {Route, Routes} from 'react-router-dom';
import {Home} from '../../../Downloads/pizza-app-master/src/pages/Home';
import {MainLayout} from '../../../Downloads/pizza-app-master/src/layouts/MainLayout';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ '../../../Downloads/pizza-app-master/src/pages/Cart'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ '../../../Downloads/pizza-app-master/src/pages/FullPizza'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ '../../../Downloads/pizza-app-master/src/pages/NotFound'));

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
