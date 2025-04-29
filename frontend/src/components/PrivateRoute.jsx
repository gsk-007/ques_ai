import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />; // You can show a spinner if you want
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
