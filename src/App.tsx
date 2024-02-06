import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import MapPage from "./pages/MapPage";
import MapPage2Level from "./pages/MapPage2Level";
import MapPage2Level1 from "./pages/MapPage2Level1";
import MapPage2Level2 from "./pages/MapPage2Level2";
import PolicyComparison from "./pages/PolicyComparison";
import WarningsPage from "./pages/WarningsPage";
import WarningsPage1 from "./pages/WarningsPage1";
import Trends from "./pages/Trends";
import RecordsRespondedTo from "./pages/RecordsRespondedTo";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Vizial";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/map-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/map-page-level-1":
        title = "";
        metaDescription = "";
        break;
      case "/map-page-level-2":
        title = "";
        metaDescription = "";
        break;
      case "/map-page-level-3":
        title = "";
        metaDescription = "";
        break;
      case "/policy-comparison":
        title = "";
        metaDescription = "";
        break;
      case "/warnings-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/warnings-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/trends":
        title = "";
        metaDescription = "";
        break;
      case "/records-responded-to":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/map-page-2" element={<MapPage />} />
      <Route path="/map-page-level-1" element={<MapPage2Level />} />
      <Route path="/map-page-level-2" element={<MapPage2Level1 />} />
      <Route path="/map-page-level-3" element={<MapPage2Level2 />} />
      <Route path="/policy-comparison" element={<PolicyComparison />} />
      <Route path="/warnings-page-1" element={<WarningsPage />} />
      <Route path="/warnings-page-2" element={<WarningsPage1 />} />
      <Route path="/trends" element={<Trends />} />
      <Route path="/records-responded-to" element={<RecordsRespondedTo />} />
    </Routes>
  );
}
export default App;
