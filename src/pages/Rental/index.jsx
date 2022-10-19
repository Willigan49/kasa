import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Rental() {
  const { id } = useParams();
  const [rental, setRental] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/rentals.json")
      .then((response) => response.json())
      .then((result) => {
        const rental = result.find((rental) => rental.id === id);
        setRental(rental);
      });
  }, [id]);

  return (
    <div>
      <h1>Fiche location {rental.title}</h1>
    </div>
  );
}
