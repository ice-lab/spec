import React, { useState } from 'react';

let actions;

function A() {
  const a = 1;
  switch (a) {
    case 1:
      actions = (
        <div>
          下一步
        </div>
      );
      break;
    case 0:
      break;
    default:
      break;
  }
  return (
    <React.Fragment></React.Fragment>
  )
}

const a = actions ? {
  c: 1,
} : { d: 2 };
const g = actions
  ? {
    c: 1,
  } : { d: 2 };
