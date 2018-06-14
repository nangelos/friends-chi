import React, { Component } from 'react';

const ChildNotes = (props) => {
  return (
    <div>
      <h1>Here are the child notes</h1>
      <h1>{props.childInitials}</h1>
    </div>
  )
}

export default ChildNotes;
