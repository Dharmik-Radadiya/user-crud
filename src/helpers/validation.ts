/**
 * Validates the input value based on the given type.
 *
 * @param {string} type - The type of validation to be performed.
 * @param {string} fieldName - The name of the field being validated.
 * @param {string} value - The value to be validated.
 * @return {object} An object with a status and message indicating the result of the validation.
 */
export const isValid = (type: string, fieldName: string, value: string) => {
  let regex = /^[a-zA-Z]*$/;
  if (type === "email") {
    regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  } else if (type === "phone") {
    regex = /^[0-9]*$/;
  }

  if (value === "" || value === undefined || value === null) {
    return {
      status: false,
      message: `Please enter ${fieldName}`,
    };
  } else if (!regex.test(value) && type !== "status") {
    return {
      status: false,
      message: `Please enter valid ${fieldName}`,
    };
  } else {
    return {
      status: true,
      message: "",
    };
  }
};
