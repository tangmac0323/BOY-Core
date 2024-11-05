import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Error</h1>
      <p>Something went wrong. Please try again later.</p>
      <Link to="/">Go back to home page</Link>
    </div>
  );
};

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to home page</Link>
    </div>
  );
};

export default NotFound;
