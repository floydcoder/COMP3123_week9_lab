import React from 'react';
import './Hello.css';

export default function Hello(props) {
  return (
    <>
      <h1 className='Hello'>
        Welcome to Fullstack Development - {props.semester}
      </h1>
      <h2 className='Hello'>{props.desc} Week09 LAB exercise</h2>
    </>
  );
}
