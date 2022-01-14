import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import Alert from 'react-bootstrap/Alert'
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <Alert variant="primary">oh shit!</Alert>
              <p>Page not found!</p>
            </main>
          }
        />
      </Route>
    </Routes>

  </BrowserRouter>,
  rootElement
);