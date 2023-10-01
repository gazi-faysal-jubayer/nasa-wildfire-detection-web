import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const handleLogout = async () => {
  const navigate = useNavigate();
  try {
    // Check if a user is authenticated
    if (auth.currentUser) {
      await signOut(auth);
      navigate("/"); // Redirect user to the login page after logout
    } else {
      console.error("No user is authenticated.");
    }
  } catch (error) {
    console.error("Error signing out:", error);
  }
};