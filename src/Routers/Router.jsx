import { lazy, memo, Suspense } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { PATH_HOME, PATH_LOGIN, PATH_MENU } from "./Path";
import LandingPage from "../User/Pages/LandingPage/LandingPage";
import Menu from "../User/Pages/Menu/Menu";
import Cart from "../User/Pages/Cart/Cart";
const Login = lazy(() => import("../User/Components/LoginForm/LoginForm"));

export const normalRoutes = [PATH_HOME];
export const authRoutes = [];

function Router() {
  const location = useLocation();
  const routes = [
    {
      path: "/",
      element: (
        <Suspense fallback={<p className="suspense_loading">Loading...</p>}>
          <LandingPage />
        </Suspense>
      ),
    },
    {
      path: PATH_LOGIN,
      element: (
        <Suspense fallback={<p className="suspense_loading">Loading...</p>}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: PATH_MENU,
      element: (
        <Suspense fallback={<p className="suspense_loading">Loading...</p>}>
          <Menu />
        </Suspense>
      ),
    },
    {
      path: "/cart",
      element: (
        <Suspense fallback={<p className="suspense_loading">Loading...</p>}>
          <Cart />
        </Suspense>
      ),
    },
  ];

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={300} classNames="fade">
        {useRoutes(routes)}
      </CSSTransition>
    </TransitionGroup>
  );
}

export default memo(Router);
