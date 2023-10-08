
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './components/LayOut/LayOut';
import Home from './components/Home/Home';
import Artist from './components/Artist/Artist';
import NotFound from './components/NotFound/NotFound';
import Gallery from './components/Gallery/Gallery';
import Testimonial from './components/Testimonial/Testimonial';
import AboutParty from './components/AboutParty/AboutParty';
const routes = createBrowserRouter([{
  path: "", element: <LayOut/>, children: [
    {index: true, element: <Home/>},
    {path: "artist", element: <Artist/>},
    {path: "gallery", element: <Gallery/>},
    {path: "test", element: <Testimonial/>},
    {path: "about", element: <AboutParty/>},
    {path: "*", element: <NotFound/>}
  ]
}])

function App() {
  return (
    <RouterProvider router={routes}>
    
    
    </RouterProvider>
  );
}

export default App;
