/* eslint-disable react/prop-types */
import "./planFinishedCard.scss";

function PlanFinishedCard({ dataPlanSelected }) {
  console.log(dataPlanSelected);
  return (
    <div className={`plan-finished_container ${dataPlanSelected.name}`}>
      <div className="img_container">
        <img src={dataPlanSelected.img} alt="" />
      </div>
      <p className="plan-finished--name">{dataPlanSelected.name}</p>
      <p className="plan-finished--price">{dataPlanSelected.price}</p>
      <p className="plan-finished--month">Por mes</p>
      <p className="plan-finished--subscribed">Suscrito</p>
    </div>
  );
}

export default PlanFinishedCard;
