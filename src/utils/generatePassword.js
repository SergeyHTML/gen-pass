export const generatePassword = (length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars) => {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = lowercaseChars.toUpperCase();
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_-+=<>?';

  let allowedChars = '';

  if (includeLowercase) allowedChars += lowercaseChars;
  if (includeUppercase) allowedChars += uppercaseChars;
  if (includeNumbers) allowedChars += numberChars;
  if (includeSpecialChars) allowedChars += specialChars;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}
