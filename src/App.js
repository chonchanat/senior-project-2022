import './global.css';

import {
    createBrowserRouter,
} from "react-router-dom";

import Login from './pages/Login.js';
import Home from './pages/Home.js';
import CustomerActivity from './pages/customer/CustomerActivity';
import CustomerBookQueue from './pages/customer/CustomerBookQueue';
import CustomerMap from './pages/customer/CustomerMap';
import CustomerMyActivity from './pages/customer/CustomerMyActivity';
import CustomerScan from './pages/customer/CustomerScan';

const App = createBrowserRouter([
    {
        path: "/customer-login",
        element: <Login />,
    },
    {
        path: "/customer-home",
        element: <Home />,
    },
    {
        path: "/customer-activity",
        element: <CustomerActivity />,
    },
    {
        path: "/customer-bookqueue",
        element: <CustomerBookQueue />,
    },
    {
        path: "/customer-map",
        element: <CustomerMap />,
    },
    {
        path: "/customer-myactivity",
        element: <CustomerMyActivity />,
    },
    {
        path: "/customer-scan",
        element: <CustomerScan />,
    },
    {
        path: "*",
        element: <div className="text-center">no match</div>,
    },
]);

export default App;
