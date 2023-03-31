import { Home } from "./components/Home";
import { MinVei } from "./components/MinVei";
import { FrontPage } from "./components/frontPage";
import { VelgLivssituasjon } from "./components/VelgLivssituasjon";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/min-vei',
    element: <MinVei />
    },
    {
        path: '/frontPage',
        element: <FrontPage/>
    },
    {
    path: '/min-vei',
    element: <MinVei />
    },
    {
        path: '/velg-livssituasjon',
        element: <VelgLivssituasjon />
    }
];

export default AppRoutes;