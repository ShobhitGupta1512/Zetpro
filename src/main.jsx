import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { DataProvider } from './Context/DataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <DataProvider>
     {/* <App /><ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <App />
    </ClerkProvider> */}
    {/* </ClerkProvider> */} <App />
    </DataProvider>
  </StrictMode>,
)
