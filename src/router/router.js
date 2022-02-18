import asyncComponent from "../asyncComponent";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const App = asyncComponent(() => import('../App.js'))
const Login = asyncComponent(() => import('../views/login'))
const Register = asyncComponent(() => import('../views/register.js'))


const BasicRoute = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<App/>}/>
            <Route path='/login' exact element={<Login/>}/>
            <Route path='/register' exact element={<Register/>}/>
        </Routes>
    </BrowserRouter>
)

export default BasicRoute;


// import React, {Suspense,lazy} from ‘react’;

// const App =lazy(() => import('../App.js'))
// const Login =lazy(() => import('../views/login'))
// const Register =lazy(() => import('../views/register.js’))

// const BasicRoute = () => (
//     <BrowserRouter>
//         <Suspense fallback={<div>Loding…</div>}>
//             <Routes>
//                 <Route path='/' exact element={<App/>}/>
//                 <Route path='/login' exact element={<Login/>}/>
//                 <Route path='/register' exact element={<Register/>}/>
//             </Routes>
//         </Suspense>
//     </BrowserRouter>
// )

// export default BasicRoute;