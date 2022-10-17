import ImageTop from "../../components/ImageTop";
import image from "../../assets/home.jpg";
import { locations } from "../../api/logements";
import LocationCard from "../../components/LocationCard";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <ImageTop
        page="home"
        imageLink={image}
        alt="home top image"
        text="Chez vous, partout et ailleurs"
      />
      <div className="location-container">
        <ul>
          {locations.map((location) => (
            <li key={`${location.title}-${location.id}`}>
              <Link to={`/location/${location.id}`}>
                <LocationCard image={location.cover} title={location.title} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
