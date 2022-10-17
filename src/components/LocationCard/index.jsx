export default function LocationCard({ title, image }) {
  return (
    <div className="location-card">
      <img className="location-card__image" src={image} alt="aperçu de la location" />
      <p className="location-card__title">{title}</p>
    </div>
  );
}
