import { Home } from "./components/Home";
import { MinVei } from "./components/MinVei";
import { MeldeFlytte } from "./components/MeldeFlytte";

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
    }
];


export default AppRoutes;
