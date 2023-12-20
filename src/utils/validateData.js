export const validateSignInData = (email, password) => {
  const emailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwordValidate =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );
  if (!emailValidate) {
    return "Email id is Invalid";
  }
  if (!passwordValidate) {
    return `Password is Invalid`;
  }
};

export const validateSignupEmail = (email) => {
  const emailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if (!emailValidate) return "Email is Invalid";
};
export const validateSignupPassword = (password) => {
  const passwordValidate =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );
  if (!passwordValidate) return "Password is Invalid ex.Abcd@123";
};
