import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Layout from './components/Layout/Layout';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import Profile from './components/Profile/Profile';
import { useContext, useEffect } from 'react';
import { tokenContext } from './context/tokenContext';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import SendMessage from './components/SendMessage/SendMessage';

const routes = createBrowserRouter([
  {path: "", element: <Layout/>, children: [
    {path: "register", element: <Register/>},
    {path: "login", element: <Login/>},
    {path: "profile", element:<ProtectedRoutes> <Profile/> </ProtectedRoutes> },
    {path: "send/:userId", element:<ProtectedRoutes> <SendMessage/> </ProtectedRoutes>},
    {path: "*", element: <Notfound/>}
    
  ]}
])
function App() {
  let {setToken} = useContext(tokenContext)
  useEffect(() => {
    if(localStorage.getItem("userToken")) {
      setToken(localStorage.getItem("userToken"))
    }
  }, [])
  return (
    <RouterProvider router={routes}>
    
    </RouterProvider>
  );
}

export default App;
