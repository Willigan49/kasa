import PropTypes from "prop-types";

export default function ImageTop({ text, imageLink, alt, page }) {
  return (
    <div className={`image-top ${page}`}>
      <img className="image-top__image" src={imageLink} alt={alt} />
      <p className="image-top__text">{text}</p>
    </div>
  );
}

ImageTop.propTypes = {
  text: PropTypes.string,
  imageLink: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  page: PropTypes.string
}
