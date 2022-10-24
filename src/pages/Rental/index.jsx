import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import Rating from "../../components/Rating";

export default function Rental() {
  const { id } = useParams();
  const [rental, setRental] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/rentals.json")
      .then((response) => response.json())
      .then((result) => {
        const rental = result.find((rental) => rental.id === id);
        console.log(rental);
        setRental(rental);
      });
  }, [id]);

  if (rental.length === 0) {
    return <h1>loading</h1>;
  }
  return (
    <div className="rental">
      <Slider slides={rental.pictures} />
      <div>
        <div className="left-informations">
          <h2 className="rental__name">{rental.title}</h2>
          <p className="rental__location">{rental.location}</p>
          <ul className="rental__tags">
            {rental.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="right-informations">
          <div className="rental__host">
            <p>{rental.host.name}</p>
            <img src={rental.host.picture} alt={rental.host.name} />
          </div>
          <div className="rental__note">
            <Rating stars={rental.rating} />
          </div>
        </div>
      </div>
      <div>dropDowns</div>
    </div>
  );
}
