import { useEffect, useState } from 'react';

/**
 * @description Check if the email address correspond to the regex
 * @param { string } email attribute
 */
export const validateEmail = (email) => {
  if (email === null || typeof email != 'string') return 'Invalid Email';

  // Regex to validate the email address
  const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  // If the test return false, we assign the string 'Email is not valid', else and empty string ''
  const validation = regex.test(String(email).toLowerCase()) ? '' : 'Email is not valid!';

  return validation;
};

/**
 * @description checks if all items in an array are emails.
 * @param {array} emails
 * @returns false if invalid.
 */
export const validateEmailsArray = (emails) => {
  const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emails.find((email) => !regex.test(String(email).toLowerCase())) ? false : true;
};

/**
 * @description get text and decrises it by the length and adds "..." at the end of
 * the string
 * @param { string } text
 * @param { number } length string length
 */
export const sliceText = (text, length) =>
  text.length > length ? `${text.slice(0, length)}...` : text;

/**
 * @description reduce name
 * @example Antony pascal afonso cantolic Sonso Azevedo => Antony Pascal
 * @param { string } name
 */
export const reduceName = (name) => {
  const fullNameList = name.split(' ');
  return fullNameList.length > 2 ? `${fullNameList[0]} ${fullNameList[1]}` : name;
};

/**
 * @description transform a simple react state to a formdata;
 */
export const stateToFormData = (state) => {
  let formD = new FormData();
  Object.keys(state).forEach((s) => {
    if (Array.isArray(state[s])) {
      formD.append(`${s}[]`, state[s]);
      return;
    }
    formD.append(s, state[s]);
  });

  return formD;
};

/**
 * @description get a number from the string
 * @param {String} str
 * @returns number
*/
export const getNumFromStr = (str) => {
  return parseInt(str)
}

/**
 * @description Check if the user clicked outside the component of where the function is called
 * @param {String} ref
 * @returns boolean
 */
const useOutsideClickAlert = (ref) => {
  const [clickedOut, setclickedOut] = useState(false);

  useEffect(() => {
    // Return true if clicked outside of the ref element
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setclickedOut(false);
      } else {
        setclickedOut(true);
      }
    };
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return clickedOut;
};
export default useOutsideClickAlert;
