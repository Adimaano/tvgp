import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Message from './hooks/Message';
import Button from './components/Button';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hello World!</h1>
    <Message />
    <Button />
  </StrictMode>
)
