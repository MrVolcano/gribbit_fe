import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ErrorProvider } from "./Contexts/ErrorContext.jsx";
import { UserProvider } from "./Contexts/UserContexts.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ErrorProvider>
      <UserProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </UserProvider>
    </ErrorProvider>
  </BrowserRouter>
);
