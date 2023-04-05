import React from "react";

interface IProps {
  value: string;
  squareIdx: number;
}
const Square: React.FC<IProps> = (props) => {
  const { value, squareIdx } = props;
  return <div>{value}</div>;
};

export default Square;
