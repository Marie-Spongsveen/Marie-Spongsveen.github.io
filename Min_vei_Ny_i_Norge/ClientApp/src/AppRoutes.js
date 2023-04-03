import { Home } from "./components/Home";
import { VelgLivssituasjon } from "./components/VelgLivssituasjon";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
    {
        path: '/velg-livssituasjon',
        element: <VelgLivssituasjon />
    }
];

export default AppRoutes;