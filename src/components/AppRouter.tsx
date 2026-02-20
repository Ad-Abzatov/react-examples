import { Route, Routes } from "react-router-dom"
import { HOME_ROUTE } from "../utils/consts"
import Home from "../pages/Home"

const AppRouter = () => {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
    </Routes>
  )
}

export default AppRouter
