/**
 * regex.constant.ts
 * 
 * This file contains strings constants for commonly used regex expressions. 
 */

/**
 *  The RegexExpression object
 */
export const RegexExpression = {
    // SINGLE FIELD VALIDATORS
   EMAIL_REGEX : /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
   CHAR_ONLY_REGEX : /^[a-zA-Z]+$/,
   DIGITS_ONLY_REGEX : /^[0-9]+$/,
   ALPHANUMERIC_REGEX : /^[a-zA-Z0-9]+$/,
  //one lowercase letter, one uppercase letter, one number, one unique character such as !@#$%^&? and be at least 6 characters long.
   PASSWORD_REGEX : /^.*(?=.{6,})(?=.*d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,
   URL_REGEX : /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
};