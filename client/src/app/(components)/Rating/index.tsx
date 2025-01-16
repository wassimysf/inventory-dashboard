import React from "react";
import { Star } from "lucide-react";

type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          key={index}
          fill={index <= rating ? "#FFC107" : "none"} // Fill the star
          stroke={index <= rating ? "#FFC107" : "#E4E5E9"} // Border color
          className="w-5 h-5"
        />
      ))}
    </div>
  );
};

export default Rating;
