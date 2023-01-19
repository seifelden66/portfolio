import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.scss";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </>;
}

export default App;
