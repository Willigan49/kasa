import { Star } from "@ricons/fa";

export default function Rating({ stars }) {
  const totalStars = 5;
  const activeStars = parseInt(stars);

  return (
    <div className="rating">
      {[...new Array(totalStars)].map((arr, index) => {
         return index < activeStars ? <Star key={index} className="rating__active-star" /> : <Star key={index} className="rating__star"/>;
      })}
    </div>
  );
}
