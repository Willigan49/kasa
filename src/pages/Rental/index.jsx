import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import Rating from "../../components/Rating";
import Tag from "../../components/Tag";
import Dropdown from "../../components/Dropdown";
import { constants } from "../../constants";

export default function Rental() {
  const { id } = useParams();
  const [rental, setRental] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/rentals.json")
      .then((response) => response.json())
      .then((result) => {
        const rental = result.find((rental) => rental.id === id);
        setRental(rental);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);

  if (rental.length === 0) {
    return <h1>loading</h1>;
  }
  return (
    <div className="rental">
      <Slider slides={rental.pictures} />
      <div className="informations">
        <div className="informations__left">
          <h2 className="rental__title">{rental.title}</h2>
          <p className="rental__location">{rental.location}</p>
          <ul className="rental__tags">
            {rental.tags.map((tag, index) => (
              <Tag key={index} tagName={tag} />
            ))}
          </ul>
        </div>
        <div className="informations__right">
          <div className="rental__host">
            <p>{rental.host.name}</p>
            <img
              className="rental__host-picture"
              src={rental.host.picture}
              alt={rental.host.name}
            />
          </div>
          <div className="rental__rating">
            <Rating stars={rental.rating} />
          </div>
        </div>
      </div>
      <div className="dropdowns">
        <Dropdown
          title={constants.DESCRIPTION}
          informations={rental.description}
        />
        <Dropdown
          title={constants.EQUIPMENT}
          informations={rental.equipments}
        />
      </div>
    </div>
  );
}

// right - left: mettre en composant
//rajouter un catch dans fetch et afficher un rendu
