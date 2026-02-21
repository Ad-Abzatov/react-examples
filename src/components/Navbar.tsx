import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const history = useNavigate();

  const handleNavigation = (path) => {
    history.push()
  }
  return (
    <nav>
      <div>
        <li>Главная</li>
        <li onClick={() => }>Хуки</li>
      </div>
    </nav>
  )
}

export default Navbar
