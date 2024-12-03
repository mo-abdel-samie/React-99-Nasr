import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setIsAuthed } = useAuth();
  const navigate = useNavigate();

  return (
    <MainLayout>
      Login
      <Button
        onClick={() => {
          setIsAuthed(true);
          navigate("/profile");
        }}
      >
        Login
      </Button>
    </MainLayout>
  );
}
