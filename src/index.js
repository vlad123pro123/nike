import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from './app'
import './css/style.css'
const app = ReactDOMClient.createRoot(document.getElementById("root"));
app.render(<App/>);
