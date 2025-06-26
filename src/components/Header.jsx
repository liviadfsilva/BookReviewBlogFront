import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 text-center">
      <h1 className="font-serif font-thin pt-12 text-[#54473F] stroke-1 text-7xl">
        <Link to="/login">Haunted Musings</Link></h1>
    </header>
  );
};

export default Header;
