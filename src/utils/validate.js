const saveUSerToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const validateUser = (users, setUser) => (login, password) => {
  const user = users.find((u) => u.login === login);
  if (user) {
    if (user.password === password) {
      setUser((user) => ({ ...user, login, password, passCheck: true }));
      const user = { login, password, passCheck: true };
      saveUSerToLocalStorage(user);
      return true;
    }
  }
  return false;
};

export const validateOtp = (otp, setUser) => (otpValue) => {
  if (otpValue === otp) {
    setUser((user) => ({ ...user, otpCheck: true }));
    const user = getUserFromLocalStorage('user');
    const userWithOtpCheck = { ...user, otpCheck: true };
    saveUSerToLocalStorage(userWithOtpCheck);
    return true;
  }
  return false;
};
