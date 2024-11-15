import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
