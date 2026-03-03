import { Route, Routes } from "react-router-dom"
import { DND_ROUTE, FORMS_ROUTE, HOME_ROUTE, HOOKS_ROUTE } from "../utils/consts"
import Home from "../pages/Home"
import Hooks from "../pages/Hooks"
import Forms from "../pages/Forms"
import DragNDrop from "../pages/DragNDrop"

const AppRouter = () => {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={HOOKS_ROUTE} element={<Hooks />} />
      <Route path={FORMS_ROUTE} element={<Forms />} />
      <Route path={DND_ROUTE} element={<DragNDrop />} />
    </Routes>
  )
}

export default AppRouter
