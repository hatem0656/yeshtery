import "./NavBar.scss";

const categories = [
  "Men",
  "Women",
  "Unisex",
  "Kids",
  "Best Sellers",
  "New Arrivals",
  "Offers",
];
const paths = ["Men", "Clothing", "Tops", "Adidas", "Adidas Black T-Shirt"];

const NavBar = () => {
  return (
    <>
      <nav>
        <section className="container">
          <div className="category">
            {categories.map((category) => (
              <a id={category} key={category} href="./">
                {category}
              </a>
            ))}
          </div>
        </section>
      </nav>
      <section className="nav2">
        <section className="container">
          <div className="path">
            {paths.map((path, index) => (
              <>
                <a id={path} key={path} href="./">
                  {path}
                </a>
                {!(index === paths.length - 1) && <span> /</span>}
              </>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default NavBar;
