import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivetRoute() {
  const { isAuthed } = useAuth();

  return isAuthed ? <Outlet /> : <Navigate to="/login" />;
}
