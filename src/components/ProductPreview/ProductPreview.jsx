import "./ProductPreview.scss";
import main from "../../images/main.PNG";
import arrowOne from "../../images/Path 347.svg";
import arrowTwo from "../../images/Path 346.svg";
const images = ["img1", "img2", "img3", "img4"];

const ProductPreview = () => {
  return (
    <section className="preview">
      <div className="main-image">
        <img src={main} alt="main_image" />
      </div>
      <div className="images">
        <span className="arrowOne">
          <img src={arrowOne} alt="" />
        </span>
        {images.map((img) => (
          <div key={img} id={img} className="wrapper">
            <img src={require(`../../images/${img}.png`)} alt={img} />
          </div>
        ))}
        <span className="arrowTwo">
          <img src={arrowTwo} alt="" />
        </span>
      </div>
    </section>
  );
};

export default ProductPreview;
