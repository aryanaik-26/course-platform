import { useEffect, useState } from "react";
import { observeAuth } from "./auth";

function useAuth() {
  const [user, setUser] = useState(undefined); // 👈 important

  useEffect(() => {
    const unsubscribe = observeAuth((currentUser) => {
      setUser(currentUser); // null OR user
    });

    return () => unsubscribe();
  }, []);

  return user;
}

export default useAuth;