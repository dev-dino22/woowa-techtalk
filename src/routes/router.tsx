import { Global, ThemeProvider } from '@emotion/react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import InteractivePayment from '../pages/InteractivePayment';
import Layout from '../shared/components/layouts/Layout';
import { THEME } from '../shared/styles/global';
import reset from '../shared/styles/reset';
import { ROUTE_PATH } from './routePath';
import MainToPayment from '../pages/MainToPayment';
import DefaultPayment from '../pages/DefaultPayment';

function Wrapper() {
  return (
    <>
      <Global styles={reset} />
      <ThemeProvider theme={THEME}>
        <Layout>
          <Outlet />
        </Layout>
      </ThemeProvider>
    </>
  );
}

const routes = createBrowserRouter([
  {
    Component: Wrapper,
    children: [
      { path: ROUTE_PATH.HOME, Component: MainToPayment },
      { path: ROUTE_PATH.INTERACTIVE_PAYMENT, Component: InteractivePayment },
      { path: ROUTE_PATH.DEFAULT_PAYMENT, Component: DefaultPayment },
    ],
  },
]);

function Router() {
  return <RouterProvider router={routes} />;
}

export default Router;
