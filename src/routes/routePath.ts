export const ROUTE_PATH = {
  HOME: "/",
  DEFAULT_PAYMENT: "/default-payment",
  INTERACTIVE_PAYMENT: {
    BASE: "/interactive-payment",
    BRAND: `brand`,
    EXPIRATION: `expiration`,
    CVC: `cvc`,
    PASSWORD: `password`,
    SUCCESS: `success`,
  },
};

export const generateRouterPath = {
  interactivePaymentBrand: () => `${ROUTE_PATH.INTERACTIVE_PAYMENT.BASE}/${ROUTE_PATH.INTERACTIVE_PAYMENT.BRAND}`,
  interactivePaymentExpiration: () => `${ROUTE_PATH.INTERACTIVE_PAYMENT.BASE}/${ROUTE_PATH.INTERACTIVE_PAYMENT.EXPIRATION}`,
  interactivePaymentCVC: () => `${ROUTE_PATH.INTERACTIVE_PAYMENT.BASE}/${ROUTE_PATH.INTERACTIVE_PAYMENT.CVC}`,
  interactivePaymentPassword: () => `${ROUTE_PATH.INTERACTIVE_PAYMENT.BASE}/${ROUTE_PATH.INTERACTIVE_PAYMENT.PASSWORD}`,
  interactivePaymentSuccess: () => `${ROUTE_PATH.INTERACTIVE_PAYMENT.BASE}/${ROUTE_PATH.INTERACTIVE_PAYMENT.SUCCESS}`,
};