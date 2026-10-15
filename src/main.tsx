import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/responsive.css'
import App from './App'

const originalWarn = console.warn
console.warn = function (...args: unknown[]) {
  if (args[0] && typeof args[0] === 'string' && args[0].includes('Download the React DevTools')) {
    return
  }

  originalWarn.apply(console, args)
}

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element #root was not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
