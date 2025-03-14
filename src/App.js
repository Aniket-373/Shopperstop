
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart'
import Login from './pages/Login';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
import { productsData } from './api/Api';
import Product from './components/Product';

const Layout = () =>{
  return(
    <div>
      <Navbar/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/", element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home />,
        loader: productsData
      },

      {
        path:"/product/:id",
        element:<Product/>
      },

      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/login",
        element:<Login/>
      },
    ]
  }
])

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
