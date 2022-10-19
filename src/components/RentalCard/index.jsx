export default function RentalCard({ title, image }) {
  return (
    <div className="rental-card">
      <img className="rental-card__image" src={image} alt="aperçu de la location" />
      <p className="rental-card__title">{title}</p>
    </div>
  );
}
