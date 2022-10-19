import ImageTop from "../../components/ImageTop";
import aboutImage from "../../assets/about.jpg";

export default function About() {
  return (
    <div>
      <ImageTop imageLink={aboutImage} alt="image d'une montagne" page="about" />
    </div>
  );
}
