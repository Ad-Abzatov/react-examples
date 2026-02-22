import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { HOME_ROUTE, HOOKS_ROUTE } from "../utils/consts";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  }

  return (
    <nav>
      <div>
        <li onClick={() => handleNavigation(HOME_ROUTE)}>Главная</li>
        <li onClick={() => handleNavigation(HOOKS_ROUTE)}>Хуки</li>
      </div>
    </nav>
  )
}

export default Navbar
