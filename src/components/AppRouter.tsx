import { Route, Routes } from "react-router-dom"
import { FORMS_ROUTE, HOME_ROUTE, HOOKS_ROUTE } from "../utils/consts"
import Home from "../pages/Home"
import Hooks from "../pages/Hooks"
import Forms from "../pages/Forms"

const AppRouter = () => {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={HOOKS_ROUTE} element={<Hooks />} />
      <Route path={FORMS_ROUTE} element={<Forms />} />
    </Routes>
  )
}

export default AppRouter
