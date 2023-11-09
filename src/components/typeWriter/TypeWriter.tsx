import React, { useEffect, useState } from "react";
import "./TypeWriter.scss";
interface Props {
  text: string;
  speed: number;
}
const TypeWriter: React.FC<Props> = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);
  return <p className="writedText">{displayedText}</p>;
};

export default TypeWriter;
