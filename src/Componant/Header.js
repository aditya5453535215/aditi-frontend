import { useEffect, useState } from "react";


const linkStyle = {
  textDecoration: "none",
  fontFamily: "Optima, Segoe UI, sans-serif",
  fontSize: "0.8rem",
  fontWeight: "500",
  position: "relative",
  display: "inline-block",
};

const liStyle = {
  margin: "0 15px",
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header Section */}
      <header
        className={`py-3 ${scrolled ? "scrolled-header" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10%",
          backgroundColor: scrolled ? "white" : "transparent",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
        }}
      >
        {/* Logo Transition */}
        <div style={{ position: "relative", height: "60px", width: "auto" }}>
          {/* White Logo */}
          <img
            src="/ADITI%20ECO%20-%20LOGO%20WHITE.png"
            alt="White Logo"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "60px",
              transition: "opacity 0.5s ease, transform 0.5s ease",
              opacity: scrolled ? 0 : 1,
              transform: scrolled ? "translateY(-20px)" : "translateY(0)",
            }}
          />
          {/* Black Logo */}
          <img
            src="/ADITI ECO - LOGO.png"
            alt="Black Logo"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "60px",
              transition: "opacity 0.5s ease, transform 0.5s ease",
              opacity: scrolled ? 1 : 0,
              transform: scrolled ? "translateY(0)" : "translateY(20px)",
            }}
          />
        </div>

        {/* Navigation Menu */}
        <nav className="header-navigation">
          <ul
            className="navigation"
            style={{
              listStyleType: "none",
              display: "flex",
              margin: 0,
              padding: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {[
              "HOME",
              "ABOUT",
              "SERVICES",
              "PROJECTS",
              "EMPLOYEE OWNER",
              "CONTECT",
            ].map((label) => (
              <li key={label} style={liStyle}>
                <a
                  href="#"
                  className="font-alt-2"
                  style={{
                    ...linkStyle,
                    color: scrolled ? "black" : "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Slider Section */}
    
    </>
  );
}