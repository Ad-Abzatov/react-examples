import { Route, Routes } from "react-router-dom"
import { DND_ROUTE, FORMS_ROUTE, GAME_SORT, HOME_ROUTE, HOOKS_ROUTE } from "../utils/consts"
import Home from "../pages/Home"
import Hooks from "../pages/Hooks"
import Forms from "../pages/Forms"
import DragNDrop from "../pages/DragNDrop"
import GameSort from "../pages/GameSort"

const AppRouter = () => {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={HOOKS_ROUTE} element={<Hooks />} />
      <Route path={FORMS_ROUTE} element={<Forms />} />
      <Route path={DND_ROUTE} element={<DragNDrop />} />
      <Route path={GAME_SORT} element={<GameSort />} />
    </Routes>
  )
}

export default AppRouter
