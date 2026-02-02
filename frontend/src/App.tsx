import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth-callabck" element={<AuthCallbackPage />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
