import { Home } from "./components/Home";
import { MinVei } from "./components/MinVei";
import { MeldeFlytte } from "./components/MeldeFlytte";
import { Resultater } from "./components/Resultater";
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
        path: '/meldeFytte',
        element: <MeldeFlytte />
    },
    {
        path: '/resultater',
        element: <Resultater />
    },
    {
        path: '/velg-livssituasjon',
        element: <VelgLivssituasjon />
    }
];

export default AppRoutes;
