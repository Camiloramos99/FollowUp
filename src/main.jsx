import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if (window.innerWidth < 1024) {
  document.body.innerHTML = `
    <div style="
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      text-align:center;
      padding: 20px;
      height:100vh;
      font-size:20px;
      font-family: sans-serif;
      color: white;
      background: #0d1117;
    ">
      📵 This application is only available on the desktop.<br>
      Please log in from a larger device.
    </div>
  `;
} else {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
