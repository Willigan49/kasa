import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Slider from "../../components/Slider";

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
    <div>
      <Slider slides={rental.pictures} />
      <div>
        <div>
          <h2>{rental.title}</h2>
          <p>{rental.location}</p>
          <ul>
            {rental.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
