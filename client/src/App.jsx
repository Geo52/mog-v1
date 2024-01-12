import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="flex justify-center">
      <div className=" max-w-lg w-full">
        <BrowserRouter>
          <Navbar />
          <div className=" h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}
