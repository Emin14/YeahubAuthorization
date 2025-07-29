export const passwordValidation = {
  required: "Обязательное поле",
  validate: {
    hasUpperCase: (value) =>
      /[A-Z]/.test(value) || "Добавьте хотя бы одну заглавную букву",
    hasNumber: (value) => /[0-9]/.test(value) || "Добавьте хотя бы одну цифру",
    hasSpecialChar: (value) =>
      /[!@#$%^&*]/.test(value) || "Добавьте спецсимвол (!@#$%^&*)",
  },
  minLength: { value: 6, message: "Минимум 6 символов" },
};

export const emailValidation = {
  required: "Обязательное поле",
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Введите корректный email (пример: user@example.com)",
  },
};

export const fitstNameValidation = {
  required: "Обязательное поле",
  minLength: {
    value: 3,
    message: "Имя должно быть не менее 3 символов",
  },
  pattern: {
    value: /^[a-zA-Zа-яА-Я0-9]+$/,
    message: "Имя может содержать только буквы и цифры",
  },
};

export const lastNameValidation = {
  pattern: {
    value: /^[a-zA-Zа-яА-Я0-9]+$/,
    message: "Фамилия содержать только буквы и цифры",
  },
};

export const telValidation = {
  required: "Обязательное поле",
  pattern: {
    value: /^\+?[0-9]+$/,
    message: "Телефон может содержать только цифры и знак плюс",
  },
};
