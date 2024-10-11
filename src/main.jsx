import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './Layout';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//   },
//   {
//     path: "/generate",
//     element: <QrCodeGenerator/>,
//   },
//   {
//     path: "/scan",
//     element: <QrCodeGenerator/>,
//   },
// ]);

// console.log(Layout);

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>,
)
