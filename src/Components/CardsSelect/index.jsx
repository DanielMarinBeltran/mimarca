/* eslint-disable react/prop-types */
import { planes } from "../../assets/data/planes";
import "./cardsSelect.scss";
import { ButtonStyled } from "../../styledComponents/ButtonStyled";
import CheckIcon from "@mui/icons-material/Check";

function CardsSelect({ planSelected, setPlanSelected, sendData }) {
  return (
    <div className="cards-select_container">
      <div className="cards-select--header">
        <div
          className={`cards-select--tab ${
            planSelected === "Starter" && planes[0].name
          }`}
          onClick={() => setPlanSelected("Starter")}
        >
          Starter
        </div>
        <div
          className={`cards-select--tab ${
            planSelected === "Visionario" && planes[1].name
          }`}
          onClick={() => setPlanSelected("Visionario")}
        >
          Visionario
        </div>
        <div
          className={`cards-select--tab ${
            planSelected === "Empresario" && planes[2].name
          }`}
          onClick={() => setPlanSelected("Empresario")}
        >
          Empresario
        </div>
      </div>
      {planSelected === "Starter" && (
        <div className="cards-select--body">
          <div className={`card-plan--header ${planes[0].name}`}>
            <img
              className="card-plan--header--img"
              src={planes[0].img}
              alt="starter conSEO"
            />
            <p className="card-plan--header--title">{planes[0].name}</p>
            <p className="card-plan--header--price">{planes[0].price}</p>
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
            {planes[0].items.map((item) => (
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
      )}
      {planSelected === "Visionario" && (
        <div className="cards-select--body">
          <div className={`card-plan--header ${planes[1].name}`}>
            <img
              className="card-plan--header--img"
              src={planes[1].img}
              alt="starter conSEO"
            />
            <p className="card-plan--header--title">{planes[1].name}</p>
            <p className="card-plan--header--price">{planes[1].price}</p>
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
            {planes[1].items.map((item) => (
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
      )}
      {planSelected === "Empresario" && (
        <div className="cards-select--body">
          <div className={`card-plan--header ${planes[2].name}`}>
            <img
              className="card-plan--header--img"
              src={planes[2].img}
              alt="starter conSEO"
            />
            <p className="card-plan--header--title">{planes[2].name}</p>
            <p className="card-plan--header--price">{planes[2].price}</p>
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
            {planes[2].items.map((item) => (
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
      )}
    </div>
  );
}

export default CardsSelect;
