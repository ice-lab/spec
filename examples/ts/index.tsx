import React from 'react';

let actions;
function A() {
  switch (true) {
    case true:
      actions = (
        <div>
          下一步
        </div>
      );
      break;
    default:
      break;
  }
  return (
    <React.Fragment></React.Fragment>
  )
}
