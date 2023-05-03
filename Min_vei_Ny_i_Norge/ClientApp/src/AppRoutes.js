import { Home } from "./components/Home";
import { VelgLivssituasjon } from "./components/VelgLivssituasjon";
import { MinVei } from "./components/MinVei";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
    {
        path: '/velg-livssituasjon',
        element: <VelgLivssituasjon />
    },
    {
        path: 'min-vei',
        element: <MinVei />
    }
];

export default AppRoutes;