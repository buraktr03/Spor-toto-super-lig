import { useState } from "react";
import "./style.css";

const TeamCard = ({ name, img, statistics, colorCode, url }) => {
  const [visible, setVisible] = useState(true);
  const cardBodyStyle = {
    background: `linear-gradient(${colorCode[0]}, ${colorCode[1]})`,
  };
  return (
    <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 g-5">
      <div onClick={() => setVisible(!visible)} className="card m-auto">
        {visible ? (
          <img src={img} className="card-img-top" alt="..." />
        ) : (
          <ul className="card-second">
            {statistics.map((statistic, index) => (
              <li key={index}>
                <span>⚽ </span>
                {statistic}
              </li>
            ))}
          </ul>
        )}
        <div className="card-body text-center" style={cardBodyStyle}>
          <a
            href={url}
            target="_blank"
            className=" text-decoration-none"
            rel="noopener noreferrer"
          >
            <h5 className="card-title text-light">{name}</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
