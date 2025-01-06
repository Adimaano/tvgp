import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Message from './hooks/Message';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hello World!</h1>
    <Message />
  </StrictMode>
)
