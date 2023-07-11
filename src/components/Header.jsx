import img from "../assets/spor-toto.png";
import "./style.css"

const Header = ({setSearch}) => {
  return (
    <div className="text-center sticky-top">
      <img src={img} className="header-img" alt="" />
      <h1 className="m-3">2022-2023 Türkiye Spor Toto Süper Ligi</h1>
      <input
        className="form-control w-25 mx-auto"
        type="search"
        name="name"
        id="name"
        placeholder="Search Team..."
        onChange={(e)=>setSearch(e.target.value)}
      />
    </div>
  );
};

export default Header;
