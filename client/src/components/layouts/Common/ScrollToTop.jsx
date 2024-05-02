import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top when the pathname changes
  }, [pathname]); // Re-runs the effect whenever the pathname changes

  return null; // This component doesn't render anything in the DOM
};

export default ScrollToTop;
