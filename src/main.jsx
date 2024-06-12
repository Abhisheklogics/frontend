import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import {Routes} from './components/Routes/Routes'
<<<<<<< HEAD
const router = createBrowserRouter(Routes);
=======


let router = createBrowserRouter(Routes);
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider   router={ router}/>
  </React.StrictMode>,
)
