import { Home } from "./components/Home";
import  Innlogging  from "./components/Innlogging";

const AppRoutes = [
  {
    index: true,
    element: <Home />
    },
    {
        path: '/innlogging',
        element: <Innlogging/>
    }
];

export default AppRoutes;
