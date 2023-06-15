// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
// import { Icon } from "@molb/gobiz-styleguide"
// import "@molb/gobiz-styleguide/src/styles/root.scss"
import { createCustomElement, DOMModel, byContentVal, byAttrVal, registerEvent } from "@adobe/react-webcomponent"

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const Hello = () => <h1>Hello</h1>

const HelloWC = createCustomElement(Hello, DOMModel, "container");
console.log(HelloWC);
customElements.define('x-hello', HelloWC)
