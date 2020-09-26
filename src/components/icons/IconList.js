/* eslint-disable no-else-return */
import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import GroupIcon from '@material-ui/icons/Group';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import KingBedIcon from '@material-ui/icons/KingBed';
import FaceIcon from '@material-ui/icons/Face';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import LockIcon from '@material-ui/icons/Lock';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import WorkIcon from '@material-ui/icons/Work';
import ReceiptIcon from '@material-ui/icons/Receipt';
import HelpIcon from '@material-ui/icons/Help';

function IconList({ index }) {
  if (index === 0) {
    return (
      <HomeIcon />
    );
  } else if (index === 1) {
    return (
      <GroupIcon />
    );
  } else if (index === 2) {
    return (
      <GroupIcon />
    );
  } else if (index === 3) {
    return (
      <SingleBedIcon />
    );
  } else if (index === 4) {
    return (
      <KingBedIcon />
    );
  } else if (index === 5) {
    return (
      <FaceIcon />
    );
  } else if (index === 6) {
    return (
      <HowToRegIcon />
    );
  } else if (index === 7) {
    return (
      <LockIcon />
    );
  } else if (index === 8) {
    return (
      <ListAltIcon />
    );
  } else if (index === 9) {
    return (
      <PersonAddIcon />
    );
  } else if (index === 10) {
    return (
      <AssignmentIndIcon />
    );
  } else if (index === 11) {
    return (
      <KeyboardArrowRightIcon />
    );
  } else if (index === 12) {
    return (
      <KeyboardArrowLeftIcon />
    );
  } else if (index === 13) {
    return (
      <WorkIcon />
    );
  } else if (index === 14) {
    return (
      <ReceiptIcon />
    );
  } else if (index === 15) {
    return (
      <HelpIcon />
    );
  } else {
    return (
      <LocalHospitalIcon />
    );
  }
}

IconList.propTypes = {
  index: PropTypes.number,
};

export default IconList;
