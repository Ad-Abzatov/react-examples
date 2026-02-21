import { Route, Routes } from "react-router-dom"
import { HOME_ROUTE, HOOKS_ROUTE } from "../utils/consts"
import Home from "../pages/Home"
import Hooks from "../pages/Hooks"

const AppRouter = () => {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={HOOKS_ROUTE} element={<Hooks />} />
    </Routes>
  )
}

export default AppRouter
