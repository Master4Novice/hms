const INITIAL_STATE = {
  severity: '',
  message: '',
  openView: false
};

const quickViewReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'SUCCESS':
      return { ...state, severity: 'success', message: payload.message, openView: payload.openView };
    case 'INFO':
      return { ...state, severity: 'info', message: payload.message, openView: payload.openView };
    case 'WARNING':
      return { ...state, severity: 'warning', message: payload.message, openView: payload.openView };
    case 'ERROR':
      return { ...state, severity: 'error', message: payload.message, openView: payload.openView };
    case 'CLOSE_QUICK_VIEW':
      return { ...state, severity: '', message: payload.message, openView: payload.openView };
    default:
      return state;
  }
};

export default quickViewReducer;
