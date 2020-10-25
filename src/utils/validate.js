export const validateUser = (users, setUser) => (login, password) => {
  const user = users.find((u) => u.login === login);
  if (user) {
    if (user.password === password) {
      setUser((user) => ({ ...user, login, password, passCheck: true }));
      return true;
    }
  }
  return false;
};

export const validateOtp = (otp, setUser) => (otpValue) => {
  if (otpValue === otp) {
    setUser((user) => ({ ...user, otpCheck: true }));
    return true;
  }
  return false;
};
