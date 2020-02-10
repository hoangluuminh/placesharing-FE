const VALIDATOR_TYPE_REQUIRE = 'REQUIRE'
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH'
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH'
const VALIDATOR_TYPE_MIN = 'MIN'
const VALIDATOR_TYPE_MAX = 'MAX'
const VALIDATOR_TYPE_EMAIL = 'EMAIL'
const VALIDATOR_TYPE_FILE = 'FILE'

export const check = {
  REQUIRE: () => ({ type: VALIDATOR_TYPE_REQUIRE }),
  MINLENGTH: val => ({ type: VALIDATOR_TYPE_MINLENGTH, val: val }),
  MAXLENGTH: val => ({ type: VALIDATOR_TYPE_MAXLENGTH, val: val }),
  MIN: val => ({ type: VALIDATOR_TYPE_MIN, val: val }),
  MAX: val => ({ type: VALIDATOR_TYPE_MAX, val: val }),
  EMAIL: () => ({ type: VALIDATOR_TYPE_EMAIL }),
  FILE: () => ({ type: VALIDATOR_TYPE_FILE })
}

export const validate = (value, validators) => {
  let isValid = true
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.val
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.val
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value)
    }
  }
  return isValid
}
