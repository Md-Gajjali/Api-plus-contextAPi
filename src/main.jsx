import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rootlayout from './Rootlayout.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Servicce from './Pages/Servicce.jsx';
import ContextApi from './ContextApi.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: App },
      { path: "about", Component: About },
      { path: "Contact", Component: Contact },
      { path: "Service", Component: Servicce },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApi>
     <RouterProvider router={router} />
    </ContextApi>
  </StrictMode>,
)
