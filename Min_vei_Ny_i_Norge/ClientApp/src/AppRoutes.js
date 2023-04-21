import { Home } from "./components/Home";
import { MinVei } from "./components/MinVei";
import { MeldeFlytte } from "./components/MeldeFlytte";
import { Resultater } from "./components/Resultater";

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
        path: '/resulater',
        element: <Resultater />
    }
];


export default AppRoutes;
