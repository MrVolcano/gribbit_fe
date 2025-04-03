import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ErrorProvider } from "./Contexts/Error.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ErrorProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ErrorProvider>
  </BrowserRouter>
);