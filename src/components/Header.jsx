import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <header className="p-4 text-center">
      <h1 className="font-serif font-thin pt-12 text-[#54473F] stroke-1 text-7xl">
        <Link to={isLoggedIn ? "/admin" : "/login"}>
        Haunted Musings
        </Link></h1>
    </header>
  );
};

export default Header;
