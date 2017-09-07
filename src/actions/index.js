/**
 * make our imports
 */
import axios from 'axios';
import { TEST_ACTION } from './types';

/**
 * define our root api route
 */
const API_URL = 'https://www.google.co.in';

/**
 * our test action
 */
export function testAction() {
  return function(dispatch) {
    axios.get({
      url: API_URL,
      headers: {"Access-Control-Allow-Origin": "*"},
    })
    .then(response => {
      dispatch({
        type: TEST_ACTION,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
