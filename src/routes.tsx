import Forms from "./pages/Forms";
import Home from "./pages/Home";
import Hooks from "./pages/Hooks";
import { FORMS_ROUTE, HOME_ROUTE, HOOKS_ROUTE } from "./utils/consts";

export const routes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: HOOKS_ROUTE,
    Component: Hooks,
  },
  {
    path: FORMS_ROUTE,
    Component: Forms,
  }
]