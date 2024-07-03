import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import RootLayout from "./RootLayout";
import Product from "./pages/Product";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />}>
            <Route path="/products/:id" element={<Product />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
