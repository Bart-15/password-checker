//------ Utility functions for password checking ----------//
export const hasMinLength = (password: string): boolean => password.length >= 8;

export const hasNumbers = (password: string): boolean => /\d/.test(password);

export const hasSpecialCharacters = (password: string): boolean =>
  /[!@#$%^&*(),.?":{}|<>]/.test(password);

export const hasUpperAndLower = (password: string): boolean =>
  /[a-z]/.test(password) && /[A-Z]/.test(password);

export function getStrengthPercentage() {}
