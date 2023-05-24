/* eslint-disable react/prop-types */
import "./cardPlan.scss";

import { ButtonStyled } from "../../styledComponents/ButtonStyled";

// eslint-disable-next-line react/prop-types
function CardPlan({ dataPlanSelected }) {
  console.log(dataPlanSelected.img);
  return (
    <div className="card-plan_container">
      <div className={`card-plan--header ${dataPlanSelected[0].name}`}>
        <img src={dataPlanSelected[0].img} alt="starter conSEO" />
        <p>{dataPlanSelected[0].name}</p>
        <p>{dataPlanSelected[0].price}</p>
        <p>Por mes</p>
        <ButtonStyled>Adquirir</ButtonStyled>
      </div>
      <div className="card-plan--body"></div>
    </div>
  );
}

export default CardPlan;
