export function success(message) {
  return function (dispatch) {
    dispatch({
      type: 'SUCCESS',
      payload: { message, openView: true },
    });
  };
}

export function info(message) {
  return function (dispatch) {
    dispatch({
      type: 'INFO',
      payload: { message, openView: true },
    });
  };
}

export function warning(message) {
  return function (dispatch) {
    dispatch({
      type: 'WARNING',
      payload: { message, openView: true },
    });
  };
}

export function error(message) {
  return function (dispatch) {
    dispatch({
      type: 'ERROR',
      payload: { message, openView: true },
    });
  };
}

export function onCloseQuickView() {
  return function (dispatch) {
    dispatch({
      type: 'CLOSE_QUICK_VIEW',
      payload: { message: '', openView: false },
    });
  };
}
