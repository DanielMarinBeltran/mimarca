import { useEffect, useState } from "react";
import "./form.scss";
import { ButtonStyled } from "../../styledComponents/ButtonStyled";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import CardsReq from "../CardsReq";
import { planes } from "../../assets/data/planes";
import CardPlan from "../CardPlan";

function Form() {
  const [name, setName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [nameCompanySubmitted, setNameCompanySubmitted] = useState(false);

  const [secondStepSubmitted, setSecondStepSubmitted] = useState(false);
  const [thridStepSubmitted, setThridStepSubmitted] = useState(false);
  const [fourthStepSubmitted, setFourStepSubmitted] = useState(false);
  const [fifthStepSubmitted, setFithStepSubmitted] = useState(false);
  const [sixthStepSubmitted, setSixthStepSubmitted] = useState(false);
  const [seventhStepSubmitted, setSeventhStepSubmitted] = useState(false);
  const [eightStepSubmitted, setEightStepSubmitted] = useState(false);
  const [inColombiaSubmitted, setInColombiaSubmitted] = useState(false);
  const [dataPlanSelected, setDataPlanSelected] = useState([]);
  const [placeWhereSubmitted, setPlaceWhereSubmitted] = useState("");
  const [alignment, setAlignment] = useState("");
  const [alignmentNameCompany, setAlignmentNameCompany] = useState("");
  const [alignmentHelpName, setAlignmentHelpName] = useState("");
  const [nameCompany, setNameCompany] = useState("");
  const [selectedCardReq, setSelectedCardReq] = useState("");
  const [amountMoney, setAmountMoney] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [planSelected, setPlanSelected] = useState("");

  const jsonSend = {
    name: name,
    placeWhereSubmitted: placeWhereSubmitted,
    alignment: alignment,
    alignmentNameCompany: alignmentNameCompany,
  };

  useEffect(() => {
    if (amountMoney === "$400.000 - $750.000") {
      setPlanSelected("Starter");
    } else if (amountMoney === "$750.000 - 1.500.000") {
      setPlanSelected("Visionario");
    } else if (amountMoney === "$1.500.000 - 3.000.000") {
      setPlanSelected("Empresario");
    }
  }, [amountMoney]);

  useEffect(() => {
    setDataPlanSelected(planes.filter((plan) => plan.name === planSelected));
  }, [planSelected]);

  console.log(dataPlanSelected);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleChangeNameCompany = (event, newAlignment) => {
    setAlignmentNameCompany(newAlignment);
  };
  const handleChangeHelpName = (event, newAlignment) => {
    setAlignmentHelpName(newAlignment);
  };

  return (
    <div className="form_container">
      <div>
        <div className="form--title_container">
          <p className="form--title">¡Bienvenido a ConSEO!</p>
        </div>
        <div className="form--title_container">
          <p className="form--subtitle">
            Aquí encontrarás toda la ayuda y la información que necesitas para
            hacer tu experiencia con nosotros excepcional.
          </p>
        </div>
      </div>
      <form action="">
        <div className="form--input_container">
          <label className="form--input-label" htmlFor="name">
            Escribe tu nombre
          </label>
          {nameSubmitted ? (
            <div>
              <p className="form--input--data">{name}</p>
              <p className="form--text">
                Nos enorgullece contar con una amplia gama de servicios
                diseñados para satisfacer tus necesidades específicas.
              </p>
              {!secondStepSubmitted && (
                <div className="form--input--button_container">
                  <ButtonStyled
                    onClick={(e) => {
                      e.preventDefault();
                      setSecondStepSubmitted(true);
                    }}
                    type="submit"
                  >
                    Continuar
                  </ButtonStyled>
                </div>
              )}
            </div>
          ) : (
            <>
              <input
                type="text"
                name="name"
                placeholder="Escribe la respuesta"
                className="form--input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="form--input--button_container">
                <ButtonStyled
                  disabled={name.length === 0}
                  onClick={(e) => {
                    e.preventDefault();
                    setNameSubmitted(true);
                  }}
                  type="submit"
                >
                  Continuar
                </ButtonStyled>
              </div>
            </>
          )}
        </div>
        {secondStepSubmitted && (
          <div className="form--input_container">
            <p className="form--titles">¿Estás en Colombia?</p>
            <div className="form--toggle_container">
              {inColombiaSubmitted ? (
                <>
                  {alignment === "si" ? (
                    <p
                      className="form--input--data"
                      style={{ textTransform: "capitalize" }}
                    >
                      {alignment}
                    </p>
                  ) : (
                    <>
                      <p
                        className="form--input--data"
                        style={{ textTransform: "capitalize" }}
                      >
                        {alignment}
                      </p>
                      <p className="form--titles">¿Donde estás?</p>
                      {(placeWhereSubmitted.length > 0) & thridStepSubmitted ? (
                        <p
                          className="form--input--data"
                          style={{
                            textTransform: "capitalize",
                            marginTop: "1rem",
                          }}
                        >
                          {placeWhereSubmitted}
                        </p>
                      ) : (
                        <form action="">
                          <input
                            type="text"
                            name="name"
                            placeholder="Escribe el lugar donde te encuentras"
                            className="form--input"
                            style={{ width: "100%", marginTop: "1rem" }}
                            value={placeWhereSubmitted}
                            onChange={(e) =>
                              setPlaceWhereSubmitted(e.target.value)
                            }
                          />

                          <div className="form--input--button_container">
                            <ButtonStyled
                              disabled={placeWhereSubmitted.length === 0}
                              onClick={(e) => {
                                e.preventDefault();
                                setThridStepSubmitted(true);
                              }}
                              type="submit"
                            >
                              Continuar
                            </ButtonStyled>
                          </div>
                        </form>
                      )}
                    </>
                  )}
                </>
              ) : (
                <>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                  >
                    <ToggleButton value="si">Si</ToggleButton>
                    <ToggleButton value="no">No</ToggleButton>
                  </ToggleButtonGroup>
                  <div className="form--input--button_container">
                    <ButtonStyled
                      onClick={(e) => {
                        e.preventDefault();
                        setInColombiaSubmitted(true);
                        if (alignment === "si") {
                          setThridStepSubmitted(true);
                        }
                      }}
                      type="submit"
                    >
                      Continuar
                    </ButtonStyled>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        {thridStepSubmitted && (
          <>
            <div className="form--input_container">
              <p className="form--titles">¿Ya le tienes nombre a tu negocio?</p>
              {nameCompanySubmitted ? (
                <p
                  className="form--input--data"
                  style={{
                    textTransform: "capitalize",
                    marginTop: "1rem",
                  }}
                >
                  {alignmentNameCompany}
                </p>
              ) : (
                <>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignmentNameCompany}
                    exclusive
                    onChange={handleChangeNameCompany}
                    aria-label="Platform"
                    sx={{ marginTop: "1rem", gap: "1rem" }}
                  >
                    <ToggleButton value="si">Si</ToggleButton>
                    <ToggleButton value="no">No</ToggleButton>
                  </ToggleButtonGroup>
                  <div className="form--input--button_container">
                    <ButtonStyled
                      disabled={alignmentNameCompany.length === 0}
                      onClick={(e) => {
                        e.preventDefault();
                        setNameCompanySubmitted(true);
                      }}
                      type="submit"
                    >
                      Continuar
                    </ButtonStyled>
                  </div>
                </>
              )}
            </div>
          </>
        )}
        <div className="form--input_container">
          {(alignmentNameCompany === "si") & nameCompanySubmitted ? (
            <>
              <label className="form--input-label" htmlFor="nameCompany">
                ¿Cómo es el nombre?
              </label>
              {fourthStepSubmitted ? (
                <p
                  className="form--input--data"
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {nameCompany}
                </p>
              ) : (
                <>
                  <input
                    type="text"
                    name="nameCompany"
                    placeholder="Escribe la respuesta"
                    className="form--input"
                    value={nameCompany}
                    onChange={(e) => setNameCompany(e.target.value)}
                  />
                  <div className="form--input--button_container">
                    <ButtonStyled
                      disabled={name.length === 0}
                      onClick={(e) => {
                        e.preventDefault();
                        setFourStepSubmitted(true);
                      }}
                      type="submit"
                    >
                      Continuar
                    </ButtonStyled>
                  </div>
                </>
              )}
            </>
          ) : null}
          {(alignmentNameCompany === "no") & nameCompanySubmitted ? (
            <>
              <p className="form--titles">
                ¿Quieres ayuda para identificar el nombre perfecto?
              </p>
              <>
                {(alignmentHelpName.length > 0) & fourthStepSubmitted ? (
                  <>
                    <p
                      className="form--input--data"
                      style={{ textTransform: "capitalize", marginTop: "1rem" }}
                    >
                      {alignmentHelpName}
                    </p>
                    <p className="form--text">
                      {alignmentHelpName === "si" &&
                        "¡Con mucho gusto, te ayudaremos! Sabemos lo importante que es elegir el nombre adecuado para tu negocio."}
                      {alignmentHelpName === "no" &&
                        "De acuerdo, si necesitas ayuda en otro tema o tienes alguna otra pregunta, estaremos encantados de asistirte."}
                    </p>
                  </>
                ) : (
                  <>
                    <ToggleButtonGroup
                      color="primary"
                      value={alignmentHelpName}
                      exclusive
                      onChange={handleChangeHelpName}
                      aria-label="Platform"
                      sx={{ marginTop: "1rem", gap: "1rem" }}
                    >
                      <ToggleButton value="si">Si</ToggleButton>
                      <ToggleButton value="no">No</ToggleButton>
                    </ToggleButtonGroup>
                    <div className="form--input--button_container">
                      <ButtonStyled
                        disabled={name.length === 0}
                        onClick={(e) => {
                          e.preventDefault();
                          setFourStepSubmitted(true);
                        }}
                        type="submit"
                      >
                        Continuar
                      </ButtonStyled>
                    </div>
                  </>
                )}
              </>
            </>
          ) : null}
        </div>
        {fourthStepSubmitted ? (
          <>
            <div className="form--input_container">
              <p className="form--titles">
                Cuando te imaginas la marca ideal para tu negocio, ¿con qué
                afirmación te identificas?
              </p>
              <p className="form--text">
                Selecciona la opción que más se ajuste a tu requerimiento.
              </p>
              <CardsReq
                selectedCardReq={selectedCardReq}
                setSelectedCardReq={setSelectedCardReq}
              />
              {(selectedCardReq.length > 0) & !fifthStepSubmitted ? (
                <div
                  className="form--input--button_container"
                  style={{ gap: "1rem" }}
                >
                  <ButtonStyled
                    disabled={name.length === 0}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedCardReq("");
                    }}
                    type="submit"
                    style={{
                      marginTop: "1rem",
                      background: "transparent",
                      border: "1px solid",
                    }}
                  >
                    Volver
                  </ButtonStyled>
                  <ButtonStyled
                    disabled={name.length === 0}
                    onClick={(e) => {
                      e.preventDefault();
                      setFithStepSubmitted(true);
                    }}
                    type="submit"
                    style={{
                      marginTop: "1rem",
                    }}
                  >
                    Continuar
                  </ButtonStyled>
                </div>
              ) : null}
              {selectedCardReq.length === 0 ? (
                <div className="form--input--button_container">
                  <ButtonStyled
                    disabled={name.length === 0}
                    onClick={(e) => {
                      e.preventDefault();
                      setFourStepSubmitted(false);
                    }}
                    type="submit"
                    style={{
                      marginTop: "1rem",
                      background: "transparent",
                      border: "1px solid",
                    }}
                  >
                    Volver
                  </ButtonStyled>
                </div>
              ) : null}
            </div>
          </>
        ) : null}
        {fifthStepSubmitted && (
          <div className="form--input_container">
            <p className="form--titles">
              ¿Cuánto pagarías por elementos intermedios de identidad visual?
            </p>

            {amountMoney.length > 0 ? (
              <>
                <p
                  className="form--input--data"
                  style={{ textTransform: "capitalize", marginTop: "1rem" }}
                >
                  {amountMoney}
                </p>
                {!sixthStepSubmitted && (
                  <div
                    className="form--input--button_container"
                    style={{ gap: "1rem" }}
                  >
                    <ButtonStyled
                      onClick={(e) => {
                        e.preventDefault();
                        setAmountMoney("");
                      }}
                      type="submit"
                      style={{
                        marginTop: "1rem",
                        background: "transparent",
                        border: "1px solid",
                      }}
                    >
                      Volver
                    </ButtonStyled>
                    <ButtonStyled
                      onClick={(e) => {
                        e.preventDefault();
                        setSixthStepSubmitted(true);
                      }}
                      type="submit"
                      style={{
                        marginTop: "1rem",
                      }}
                    >
                      Continuar
                    </ButtonStyled>
                  </div>
                )}
              </>
            ) : (
              <>
                <ButtonStyled
                  onClick={() => setAmountMoney("$400.000 - $750.000")}
                  sx={{
                    marginTop: "1rem",
                    border: "1px solid #71B0E5",
                    background: "transparent",
                    color: "#71B0E5",
                  }}
                >
                  $400.000 - $750.000
                </ButtonStyled>
                <ButtonStyled
                  sx={{
                    marginTop: "1rem",
                    border: "1px solid #71B0E5",
                    background: "transparent",
                    color: "#71B0E5",
                  }}
                  onClick={() => setAmountMoney("$750.000 - 1.500.000")}
                >
                  $750.000 - 1.500.000
                </ButtonStyled>
                <ButtonStyled
                  sx={{
                    marginTop: "1rem",
                    border: "1px solid #71B0E5",
                    background: "transparent",
                    color: "#71B0E5",
                  }}
                  onClick={() => setAmountMoney("$1.500.000 - 3.000.000")}
                >
                  $1.500.000 - 3.000.000
                </ButtonStyled>
                <div className="form--input--button_container">
                  <ButtonStyled
                    disabled={name.length === 0}
                    onClick={(e) => {
                      e.preventDefault();
                      setFithStepSubmitted(false);
                    }}
                    type="submit"
                    style={{
                      marginTop: "1rem",
                      background: "transparent",
                      border: "1px solid",
                    }}
                  >
                    Volver
                  </ButtonStyled>
                </div>
              </>
            )}
          </div>
        )}
        {sixthStepSubmitted && (
          <div className="form--input_container">
            <p className="form--titles">
              ¿A qué correo te enviamos la cotización en los próximos 5 minutos?
            </p>
            {seventhStepSubmitted ? (
              <p className="form--input--data" style={{ marginTop: "1rem" }}>
                {emailAddress}
              </p>
            ) : (
              <input
                type="email"
                name="email"
                placeholder="Escribe tu correo electrónico"
                className="form--input"
                value={emailAddress}
                style={{ marginTop: "1rem" }}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            )}
            {!seventhStepSubmitted && (
              <div
                className="form--input--button_container"
                style={{ gap: "1rem" }}
              >
                <ButtonStyled
                  onClick={(e) => {
                    e.preventDefault();
                    setSixthStepSubmitted(false);
                  }}
                  type="submit"
                  style={{
                    marginTop: "1rem",
                    background: "transparent",
                    border: "1px solid",
                  }}
                >
                  Volver
                </ButtonStyled>
                <ButtonStyled
                  onClick={(e) => {
                    e.preventDefault();
                    setSeventhStepSubmitted(true);
                  }}
                  type="submit"
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  Continuar
                </ButtonStyled>
              </div>
            )}
          </div>
        )}
        {seventhStepSubmitted && (
          <div className="form--input_container">
            <p className="form--titles">
              ¿A qué WhatsApp te enviamos la confirmación de envío del correo?
            </p>
            <input
              type="number"
              name="number"
              placeholder="Escribe tu número de contacto"
              className="form--input no-arrows"
              value={contactNumber}
              style={{ marginTop: "1rem" }}
              onChange={(e) => setContactNumber(e.target.value)}
            />
            {!eightStepSubmitted && (
              <div
                className="form--input--button_container"
                style={{ gap: "1rem" }}
              >
                <ButtonStyled
                  onClick={(e) => {
                    e.preventDefault();
                    setSeventhStepSubmitted(false);
                  }}
                  type="submit"
                  style={{
                    marginTop: "1rem",
                    background: "transparent",
                    border: "1px solid",
                  }}
                >
                  Volver
                </ButtonStyled>
                <ButtonStyled
                  onClick={(e) => {
                    e.preventDefault();
                    setEightStepSubmitted(true);
                  }}
                  type="submit"
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  Continuar
                </ButtonStyled>
              </div>
            )}
          </div>
        )}
        {eightStepSubmitted && (
          <div className="form--input_container">
            <p className="form--titles">
              Con base en tus respuestas, el plan perfecto para ti es:
            </p>
            <p>{planSelected}</p>
            <CardPlan dataPlanSelected={dataPlanSelected} />
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
