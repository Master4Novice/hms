import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '../alerts/Alert';

import { onCloseQuickView } from '../../actions';

function QuickView() {
  const dispatch = useDispatch();
  const { severity, message, openView } = useSelector((state) => state.quickView);

  const handleClose = () => {
    dispatch(onCloseQuickView());
  };

  return (
    <Snackbar open={openView} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>{message}</Alert>
    </Snackbar>
  );
}

export default QuickView;
