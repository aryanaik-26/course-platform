import { useState } from "react";
import useAuth from "./auth/useAuth";

import LoginUI from "./pages/LoginUI";
import SignupUI from "./pages/SignupUI";
import Dashboard from "./pages/Dashboard";

function App() {
  const user = useAuth();
  const [isSignup, setIsSignup] = useState(false);

  // 🔥 FIXED LOGIC
  if (user === undefined) return <h2>Loading...</h2>;

  if (user) return <Dashboard user={user} />;

  return isSignup ? (
    <SignupUI switchToLogin={() => setIsSignup(false)} />
  ) : (
    <LoginUI switchToSignup={() => setIsSignup(true)} />
  );
}

export default App;