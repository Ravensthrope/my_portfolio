import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Project, Contact, About } from "./pages";
import { MouseFollower, Navbar, Socials } from "./components";
import { ThemeProvider, useTheme } from "./context/theme";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  useEffect(() => {
    switch (location.pathname) {
      case "/about":
        document.title = "About | Aafaq Sayed";
        break;
      case "/project":
        document.title = "Projects | Aafaq Sayed";
        break;
      case "/contact":
        document.title = "Contact | Aafaq Sayed";
        break;
      default:
        document.title = "Home | Aafaq Sayed";
    }
  }, [location.pathname]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        {/* Place MouseFollower outside AnimatePresence but inside ThemeProvider */}
        <div className="md:block hidden">
          <MouseFollower />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={themeMode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`app-container ${themeMode}`}
          >
            <Navbar currentPath={location.pathname} />
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/project"
                element={
                  <PageWrapper>
                    <Project />
                  </PageWrapper>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageWrapper>
                    <Contact />
                  </PageWrapper>
                }
              />
              <Route
                path="/about"
                element={
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                }
              />
            </Routes>
            <Socials />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default App;
