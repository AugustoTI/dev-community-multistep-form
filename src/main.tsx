import '@/styles/global.css'

import ReactDOM from 'react-dom/client'
import React from 'react'

import { App } from './App'
import { MultiStepProvider } from './contexts/multi-step-provider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MultiStepProvider steps={4}>
      <App />
    </MultiStepProvider>
  </React.StrictMode>,
)
