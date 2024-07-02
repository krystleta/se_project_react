import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  // return isLoggedIn ? children : <Navigate to="/" />;
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}


export default ProtectedRoute;
