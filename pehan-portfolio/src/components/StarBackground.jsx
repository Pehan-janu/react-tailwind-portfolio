import { Star } from "lucide-react";
import { useState, useEffect } from "react";

export const StarBackground = () => {
  const [stars , setStars] = useState([]);

  useEffect( () => {
    generateStars();
  }, []);

  const generateStars = () => {
    const numberOfStarts = Math.floor(window.innerWidth * window.innerHeight / 10000);

    const newStars = []

    for (let i=0 ; i < numberOfStarts ; i++){
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1 ,
        x: Math.random() * 100 ,
        y: Math.random() * 100 ,
        opacity: Math.random() * 0.5 + 0.5 ,
        animationDuration: Math.random() * 4 + 2 ,

      });
    }
    setStars(newStars);
  };
  return (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {stars.map((star) => (
      <div 
      key={star.id} 
      className="star animation-pulse-subtle" 
      style={{
        width: star.size + "px",
        height: star.size + "px",
        left: star.x + "%",
        top: star.y + "%",
        opacity: star.opacity,
        animationDuration: star.animationDuration + "s",

      }}/>
    ))}
  </div>
  );
};