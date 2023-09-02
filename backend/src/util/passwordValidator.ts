export const validatePassword = (pass: string) => {
  if (pass.length < 8) {
    throw new Error("Password should have 8 characters");
  }
  if (!/\d/.test(pass)) {
    throw new Error("Password should contain at least a digit");
  }
  if (!/[!@#$%^&*]/.test(pass)) {
    throw new Error("Password should have atleat one special character");
  }
  if (/\s/.test(pass)) {
    throw new Error("Password should't have white spaces");
  }
  if (!/[A-Z]/.test(pass)) {
    throw new Error(
      "Password should contain at least one uppercase character."
    );
  }
  if (!/[a-z]/.test(pass)) {
    throw new Error("Password should contain at least one lowecase character.");
  }
};
