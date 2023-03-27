import { Home } from "./components/Home";
import { MinVei } from "./components/MinVei";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/min-vei',
    element: <MinVei />
  }
];

export default AppRoutes;
