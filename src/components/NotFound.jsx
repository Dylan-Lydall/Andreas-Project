import { Link } from "react-router-dom";
import "../css/not-found.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="text-container">
        <h2>404 - Not Found</h2>
        <p>Sorry, we could not find the page that you were looking for...</p>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};
export default NotFound;
