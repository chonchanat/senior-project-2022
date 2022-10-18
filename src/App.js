import './global.css';

import {
  createBrowserRouter,
} from "react-router-dom";

import Login from './pages/Login.js';
import Home from './pages/Home.js';

const App = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <div>no match</div>,
  }
]);

export default App;
