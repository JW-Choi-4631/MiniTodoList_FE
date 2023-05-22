import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Complete from "../pages/complete/Complete";
import Detail from "../pages/detail/Detail";
import SignUp from "../pages/signup/SignUp";

function Router() {
  return (
    <BrowserRouter>
      {/* <header>
        <h1>Mini Project</h1>
      </header> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* <footer>
        <h3>pages</h3>
      </footer> */}
    </BrowserRouter>
  );
}

export default Router;
