import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import {Routes} from './components/Routes/Routes'
const router = createBrowserRouter(Routes);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider   router={ router}/>
  </React.StrictMode>,
)
