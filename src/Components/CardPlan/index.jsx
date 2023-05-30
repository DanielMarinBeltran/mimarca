/* eslint-disable react/prop-types */
import "./cardPlan.scss";
import CheckIcon from "@mui/icons-material/Check";

import { ButtonStyled } from "../../styledComponents/ButtonStyled";

// eslint-disable-next-line react/prop-types
function CardPlan({ dataPlanSelected, sendData }) {
  return (
    <div className="card-plan_container">
      <div className={`card-plan--header ${dataPlanSelected[0].name}`}>
        <img
          className="card-plan--header--img"
          src={dataPlanSelected[0].img}
          alt="starter conSEO"
        />
        <p className="card-plan--header--title">{dataPlanSelected[0].name}</p>
        <p className="card-plan--header--price">{dataPlanSelected[0].price}</p>
        <p className="card-plan--header--month">Por mes</p>
        <ButtonStyled
          sx={{
            minWidth: "12rem",
            background: "transparent",
            border: "1px solid #ffffff",
            color: "#ffffff",
          }}
          onClick={sendData}
        >
          Adquirir
        </ButtonStyled>
      </div>
      <div className="card-plan--body">
        {dataPlanSelected[0].items.map((item) => (
          <p className="card-plan--body--text" key={item.id}>
            <CheckIcon
              sx={{
                color: "#69B1ED",
                marginRight: "0.5rem",
              }}
            />{" "}
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default CardPlan;
