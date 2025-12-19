import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // current route path

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // instant scroll, smooth pan optional
    });
  }, [pathname]); // jya pan route change thase, scroll top

  return null;
};

export default ScrollToTop;
