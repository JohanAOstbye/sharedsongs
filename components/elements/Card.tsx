import React, { ReactNode } from 'react';

type props = {
  children?: ReactNode;
};

const Card = ({ children }: props) => {
  return <div>{children}</div>;
};

export default Card;
