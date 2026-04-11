import { logout } from "../auth/auth";
import "../styles/auth.css";

function Dashboard({ user }) {
  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="dashboard">
      <h1>Welcome, {user.email}</h1>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;