export const environment = {
  production: true,
  auth: {
    domain: "dev-1zq6zqr68qpgo2lw.us.auth0.com",
    clientId: "6YXYwgIuXKXpIExT3MHofi7gNHLBhk7q",
    clientSecret: "TKhjozqAjmkJkoTikMcCNoQAoCgX3YUyLFeVkSrj9zTXst-iUnKF5LegKSS0pdYa",
    audience: "https://dev-1zq6zqr68qpgo2lw.us.auth0.com/api/v2/",
    grant_type: "client_credentials",
    scope: 'openid profile email',
  },
  dev: {
    API_URL: "http://127.0.0.1:5000/"
  },
};