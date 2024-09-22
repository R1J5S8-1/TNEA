import { useRef, useEffect } from "react";

const MainNav = () => {
  const navRef = useRef(null);

  useEffect(() => {
    // Check if the ref is assigned
    if (navRef.current) {
      // Select all <a> elements within the nav and apply the style
      const links = navRef.current.querySelectorAll("li");
      links.forEach((link) => {
        link.style.color = "white";
        link.addEventListener("mouseover", () => {
          link.style.textDecoration = "underline";
          link.style.color = "#535bf2";
        });
        link.addEventListener("mouseout", () => {
          link.style.textDecoration = "none";
          link.style.color = "white";
        });
        link.addEventListener("click", (e) => {
          const allLinks = navRef.current.querySelectorAll("li");
          allLinks.forEach((l) => {
            l.style.backgroundColor = "";
            l.style.color = "white";
          });
          e.target.style.backgroundColor = "#0d6efd";
          e.target.style.color = "white";
        });
      });
    }
  }, []);
  return (
    <>
      <nav ref={navRef} className="bg-dark ">
        <ul
          className="align-items-center justify-content-center d-flex-col p-5 text-center"
          style={{ listStyleType: "none" }}
        >
          <li>
            <i className="bi bi-house-door-fill"></i>Home
          </li>
          <li>
            <i className="bi bi-list-check"></i>Status
          </li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default MainNav;
