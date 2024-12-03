import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { Navigate, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log("From settime out");
      // navigate("/");
      // navigate(-1); // back 1 step
      // navigate(+1); // forward 1 step
      navigate("/", {
        replace: true
      });
    }, 5000);

    return () => {
      clearTimeout(timeOut)
    };
  }, []);

  return (
    <MainLayout>
      <h1>Ooops Page Not Found</h1>
    </MainLayout>
  );
  // return <Navigate to="/" />;
}
