import React from 'react';
import ReactDOM from 'react-dom/client';

import AppRouter from './Router.jsx';

import { Toaster } from 'sonner';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
    <Toaster position='top-right' richColors />
  </React.StrictMode>,
)
