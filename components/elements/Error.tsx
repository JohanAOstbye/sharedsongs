import React from 'react';

type props = {
  msg: Error;
};

const Error = ({ msg }: props) => {
  return <div>{msg.message}</div>;
};

export default Error;
