import type { TPasswordStrength } from '@/types/const.types';

//------ Utility functions for password checking ----------//
export const hasMinLength = (password: string): boolean => password.length >= 8;

export const hasNumbers = (password: string): boolean => /\d/.test(password);

export const hasSpecialCharacters = (password: string): boolean =>
  /[!@#$%^&*(),.?":{}|<>]/.test(password);

export const hasUpperAndLowerCase = (password: string): boolean =>
  /[a-z]/.test(password) && /[A-Z]/.test(password);

export function evaluatePasswordStrength(password: string): TPasswordStrength {
  const checks = [
    hasMinLength(password),
    hasNumbers(password),
    hasSpecialCharacters(password),
    hasUpperAndLowerCase(password),
  ];

  const passedChecks = checks.filter(Boolean).length;
  if (passedChecks <= 1) return 'weak';
  if (passedChecks <= 3) return 'medium';

  return 'strong';
}

export function getStrengthPercentage(strength: TPasswordStrength): string {
  const percentages = {
    weak: '33%',
    medium: '66%',
    strong: '100%',
  };

  return percentages[strength];
}
