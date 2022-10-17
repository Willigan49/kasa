import { useParams } from 'react-router-dom';

export default function Location() {
const { id } = useParams()

  return (
    <div>
      <h1>Fiche location de l'id ${id}</h1>
    </div>
  );
}
