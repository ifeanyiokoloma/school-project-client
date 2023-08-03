import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UtilitiesContext } from "../Providers/UtilitiesProvider";


function Protected({ children }) {
  const { isSignedIn } = useContext(UtilitiesContext);
  const navigate = useNavigate();

  if (!isSignedIn) {
    return <Navigate to="/Resume" replace />;
    }
    
  // navigate(`/students/${user.facialId}`, {
  //   replace: true,
  // });
}
export default Protected;
