import TeamCard from "./TeamCard";
import { data } from "../helper/data.js";
import "./style.css";

const CardContainer = ({ search }) => {
  return (
    <div className="row m-5 g-5 m">
      {data
        .filter((team) =>
          team.name
            .toLocaleLowerCase()
            .includes(search.trim().toLocaleLowerCase())
        )
        .map((team, i) => (
          <TeamCard key={i} {...team} />
        ))}
    </div>
  );
};

export default CardContainer;
