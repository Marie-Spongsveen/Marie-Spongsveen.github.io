import { Counter } from "./components/Counter";
import { Home } from "./components/Home";
import { MinVei } from "./components/MinVei";
import { FrontPage } from "./components/frontPage";

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
    },
    {
        path: '/frontPage',
        element: <FrontPage/>
    }
];

export default AppRoutes;
