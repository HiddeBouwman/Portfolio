import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { ProjectDetail } from "./components/ProjectDetail";
import { LightboxProvider } from "./components/Lightbox";

export default function App() {
  function AppRouter() {
    const location = useLocation();
    const hideHero = location.pathname.startsWith("/project/");

    return (
      <>
        <main className="layout-main">
          {!hideHero ? <Hero /> : null}
          <div className="main-content w95-desktop-pattern">
            <div className="main-content__inner">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <About />
                      <Projects />
                      <Skills />
                    </>
                  }
                />
                <Route path="/project/:slug" element={<ProjectDetail />} />
              </Routes>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <LightboxProvider>
        <AppRouter />
      </LightboxProvider>
    </Router>
  );
}
