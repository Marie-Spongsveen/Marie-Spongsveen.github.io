import { Home } from "./components/Home";
import Innlogging from "./components/Innlogging";
import Testhook from "./components/Testhook";

const AppRoutes = [
  {
    index: true,
    element: <Home />
    },
    {
        path: '/innlogging',
        element: <Innlogging/>
    },
    {
        path: '/testhook',
        element: <Testhook/>
    }
];

export default AppRoutes;
