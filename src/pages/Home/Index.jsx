import ImageTop from "../../components/ImageTop";
import image from "../../assets/home.jpg";
import RentalCard from "../../components/RentalCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    fetch("rentals.json")
    .then((response) => response.json())
    .then((result) => setRentals(result));
  }, []);

  return (
    <main>
      <ImageTop
        page="home"
        imageLink={image}
        alt="home top image"
        text="Chez vous, partout et ailleurs"
      />
      <div className="rental-container">
        <ul>
          {rentals.map((rental) => (
            <li key={`${rental.title}-${rental.id}`}>
              <Link to={`/rental/${rental.id}`}>
                <RentalCard image={rental.cover} title={rental.title} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
