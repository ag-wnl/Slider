import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import About from './pages/About';
import Explore from './pages/Explore';



// import { hydrate, render } from "react-dom";

// const APP = (<GeistProvider themeType='light'>
// <CssBaseline /> 
// <BrowserRouter>
//     <Routes>
//       <Route index element={<Home />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
// </BrowserRouter>
// </GeistProvider>);

// const rootElement = document.getElementById("root")!;
// if (rootElement.hasChildNodes()) {
//   hydrate(APP, rootElement);
// } else {
//   render(APP, rootElement);
// }

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <GeistProvider themeType='light'>
    <CssBaseline /> 
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
    </BrowserRouter>
  </GeistProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
