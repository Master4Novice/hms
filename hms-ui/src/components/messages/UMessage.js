import React from 'react';

const UMessage = () => (
  <ul>
    <li>Username Must Have Minimum One Uppercase Letter</li>
    <li>Username Must Have Minimum One Lowercase Letter</li>
    <li>Username Must Have Minimum One Special(_,#) Character</li>
    <li>Username Must Have Minimum One Number</li>
    <li>Username Must Have Minimum 8 Length</li>
    <li>Username Must Have Maximum 16 Length</li>
    <li>User_123, UserName1238, User#Name12</li>
  </ul>
);

export default UMessage;
