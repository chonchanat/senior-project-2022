import './global.css';

import {
    createBrowserRouter,
    Navigate
} from "react-router-dom";

import { CustomerLogin, StaffLogin } from './pages/Login';

import CustomerHome from './pages/customer/CustomerHome';
import CustomerActivity from './pages/customer/CustomerActivity';
import CustomerBookQueue from './pages/customer/CustomerBookQueue';
import CustomerMap from './pages/customer/CustomerMap';
import CustomerMyActivity from './pages/customer/CustomerMyActivity';
import CustomerScan from './pages/customer/CustomerScan';

import StaffActivity from './pages/staff/StaffActivity';
import StaffAccount from './pages/staff/StaffAccount';
import CustomerAccount from './pages/staff/CustomerAccount';
import InformationActivity from './pages/staff/InformationActivity';
import Setting from './pages/staff/Setting';

import Test from './pages/Test';

const App = createBrowserRouter([
    {
        path: "/customer-login",
        element: <CustomerLogin />,
    },
    {
        path: "/customer-home",
        element: <CustomerHome />,
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
        path: "/staff-login",
        element: <StaffLogin />,
    },
    {
        path: "/staff-activity",
        element: <StaffActivity />,
    },
    {
        path: "/staff-account",
        element: <StaffAccount />,
    },
    {
        path: "/staff-customer-account",
        element: <CustomerAccount />,
    },
    {
        path: "/staff-activity/:id",
        element: <InformationActivity />,
    },
    {
        path: "/staff-setting",
        element: <Setting />,
    },

    {
        path: "/*",
        element: <Navigate to="/customer-login" />,
    },
    {
        path: "/test",
        element: <Test />,
    },
]);

export default App;
