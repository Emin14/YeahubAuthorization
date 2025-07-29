export const getPasswordStrength = (password: string): number => {
  let strength = 0;
  if (password.length > 0) strength += 1;
  if (password.length >= 6) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[!@#$%^&*]/.test(password)) strength += 1;
  return strength;
};

export const getStrengthColor = (strength: number): string => {
  return ["#ff0000", "#ff4d4d", "#ffcc00", "#66cc66", "#009900"][strength];
};
