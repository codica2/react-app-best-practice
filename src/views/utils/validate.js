export const required = value => (value ? undefined : "Required");
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
export const date = value =>
  value && /\d{2}\/\d{2}\/\d{4}/i.test(value) ? "Invalid date" : undefined;
export const number = value =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const maxLength = max => value =>
  value && value.length > max
    ? `Must be less then ${max} characters`
    : undefined;
export const minLength2 = minLength(2);
export const minLength8 = minLength(8);
export const maxLength4 = maxLength(4);
export const maxLength20 = maxLength(20);
export const maxLength30 = maxLength(30);
export const maxLength50 = maxLength(50);
export const maxLength80 = maxLength(80);
export const maxLength260 = maxLength(260);
export const maxLength500 = maxLength(500);
export const creditCard = value =>
  value && /[0-9]{*}/i.test(value)
    ? "Card number contains invalid symbols"
    : value.length === 16
    ? undefined
    : "Must be 16 numbers";
export const formatCurrency = value =>
  value
    ? String(value % 1 === 0 ? value : value.toFixed(2)).replace(
        /(\d)(?=(\d{3})+(?!\d))/g,
        "$1 "
      )
    : "0";

export const validatePasswords = values => {
  const errors = {};
  if (!values.password) {
    errors.password = "Required";
  }

  if (values.password ? values.password.length < 8 : false) {
    errors.password = "Must be 8 characters or more";
  }

  if (!values.password_confirmation) {
    errors.password_confirmation = "Required";
  }

  if (values.password !== values.password_confirmation) {
    errors.password_confirmation = "Passwords do not match.";
  }

  return errors;
};
