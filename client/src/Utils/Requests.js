/* eslint-disable no-new, consistent-return */
import 'whatwg-fetch';

export const requestAPI = async (url, options) => {
  try {
    const data = await fetch(url, options)
      .then(async (response) => {
        const result = await response.json();
        if (result.error) {
          const error = new Error(result.message);
          error.error = result;
          throw error;
        }
        return result;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return data;
  } catch (error) {
    throw error || { message: 'Some error' };
  }
};
