import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import RequireAuth from "./pages/auth/RequireAuth";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* PUBLIC ROUTE ---------------------------->*/}
          <Route path="login" element={<Auth />} />
          {/*<---------------------------- PUBLIC ROUTE */}
          {/* USER ROUTE ---------------------------->*/}
          <Route element={<RequireAuth />}>
            <Route path="" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Route>
          {/*<---------------------------- USER ROUTE*/}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
