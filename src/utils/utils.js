export const validateFieldData = (values) => {
  const updatedValues = { ...values };
  let isValid = true;

  const errors = {};

  console.log({ updatedValues });
  Object.keys(updatedValues).forEach((key) => {
    const field = updatedValues[key];
    let error = false;
    console.log({ field });

    switch (key) {
      case "name":
        error = field.value.trim().length < 3;
        break;
      case "username":
        error = !/^[a-zA-Z0-9]+$/.test(field.value);
        break;
      case "email":
        error = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
        break;
      case "password":
        error =
          field.value.length < 8 ||
          !/[0-9]/.test(field.value) ||
          !/[!@#$%^&*]/.test(field.value);
        break;
      case "dateOfBirth":
        error = !field.value || new Date(field.value) >= new Date();
        break;
      case "presentAddress":
      case "permanentAddress":
        error = field.value.trim() === "";
        break;
      case "city":
        error = field.value.trim() === "";
        break;
      case "postalCode":
        error = !/^\d+$/.test(field.value);
        break;
      case "country":
        error = field.value.trim() === "";
        break;
      default:
        break;
    }

    errors[key] = error;

    if (error) {
      isValid = false;
    }
  });

  Object.keys(updatedValues).forEach((key) => {
    updatedValues[key].error = errors[key];
  });

  return { updatedValues, isValid };
};
