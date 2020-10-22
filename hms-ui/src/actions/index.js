/**
 * make our imports
 */
import axios from 'axios';
import { TEST_ACTION } from './types';

/**
 * our test action
 */
export function testAction() {
  return function(dispatch) {
    axios.get('http://localhost:6060/test')
    .then(response => {
      dispatch({
        type: TEST_ACTION,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
