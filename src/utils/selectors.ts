export const selectors = {
  login: {
    username: 'input[name="username"]',
    password: 'input[name="password"]',
    submit: 'button[type="submit"]',
  },
  dashboard: {
    heading: 'h6:has-text("Dashboard")',
    userMenu: '.oxd-userdropdown-name',
    logout: 'a:has-text("Logout")',
  },
};