const originalWarn = console.warn;
console.warn = function (...args) {
  if (
    args[0] &&
    typeof args[0] === "string" &&
    args[0].includes("Download the React DevTools")
  ) {
    return;
  }
  originalWarn.apply(console, args);
};

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/responsive.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
