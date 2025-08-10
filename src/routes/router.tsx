import { Global, ThemeProvider } from '@emotion/react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import AddCardLayout from '../pages/interfactive-payment/Main';
import StepBrand from '../pages/interfactive-payment/StepBrand';
import StepCardNumber from '../pages/interfactive-payment/StepCardNumber';
import StepCvc from '../pages/interfactive-payment/StepCvc';
import StepExpirationDate from '../pages/interfactive-payment/StepExpirationDate';
import StepSuccess from '../pages/interfactive-payment/StepSuccess';
import MainToPayment from '../pages/MainToPayment';
import Layout from '../shared/components/layouts/Layout';
import { THEME } from '../shared/styles/global';
import reset from '../shared/styles/reset';
import { ROUTE_PATH } from './routePath';

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
      { path: ROUTE_PATH.INTERACTIVE_PAYMENT.BASE, Component: AddCardLayout, children: [
          { index: true, element: <StepCardNumber /> },
          { path: ROUTE_PATH.INTERACTIVE_PAYMENT.BRAND, element: <StepBrand /> },
          { path: ROUTE_PATH.INTERACTIVE_PAYMENT.EXPIRATION, element: <StepExpirationDate /> },
          { path: ROUTE_PATH.INTERACTIVE_PAYMENT.CVC, element: <StepCvc /> },
          { path: ROUTE_PATH.INTERACTIVE_PAYMENT.SUCCESS, element: <StepSuccess /> },
        ] }
    ],
  },
]);

function Router() {
  return <RouterProvider router={routes} />;
}

export default Router;
