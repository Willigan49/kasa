import ImageTop from "../../components/ImageTop";
import image  from "../../assets/home.jpg";

export default function Home() {
  return (
    <div>
      <ImageTop page="home" imageLink={image} alt="home top image" text="Chez vous, partout et ailleurs"/>
    </div>
  );
}
