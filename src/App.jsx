import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import Home from "./pages/HomePage/Home";
import CounterPage from "./pages/CounterPage";
import ShopPage from "./pages/ShopPage";

import { useRoutes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProduct";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import PrivetRoute from "./components/PrivetRoute";

export default function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/counter",
      element: <CounterPage />,
    },
    {
      element: <PrivetRoute />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/shop",
      element: <ShopPage />,
    },
    {
      path: "/shop/:productId",
      element: <SingleProduct />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return (
    <section>
      {routes}
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/register" element={<ContactPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes> */}

      {/* Home Page */}
      {/* <Home /> */}

      {/* Counter Page */}
      {/* <CounterPage /> */}

      {/* Shop Page */}
      {/* <ShopPage /> */}

      {/* Contact Page */}
      {/* <ContactPage /> */}
    </section>
  );
}
