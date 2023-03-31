import { Home } from "./components/Home";
import { MinVei } from "./components/MinVei";
import { VelgLivssituasjon } from "./components/VelgLivssituasjon";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/min-vei',
    element: <MinVei />
  }
];

export default AppRoutes;