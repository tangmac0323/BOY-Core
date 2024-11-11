import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './CookieConsent.css'; // Import the CSS file

export const FORMATION_COOKIE_KEY = 'bookofyogcore-usersetupdata';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the cookies
    const cookieConsent = Cookies.get('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    // Set a cookie to remember the user's consent
    Cookies.set('cookieConsent', 'true', { expires: 30 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <p className="cookie-text">
        This website uses cookies to improve your experience. By using this
        site, you agree to our use of cookies.
      </p>
      <button className="cookie-button" onClick={acceptCookies}>
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
