"use client";

import { Card } from "./style";

interface HobbyCardProps {
  title: string;
  bgImage: string;
  onClick: () => void;
  cursor: string;
}

const HobbyCard: React.FC<HobbyCardProps> = ({ title, bgImage, onClick, cursor }) => {
  return (
    <Card bgImage={bgImage} onClick={onClick} cursor={cursor}>
      {title}
    </Card>
  );
};

export default HobbyCard;
