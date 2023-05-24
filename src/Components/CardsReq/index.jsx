import "./cardsReq.scss";
import paperPlane from "../../assets/img/paperPlane.png";
import airPlane from "../../assets/img/airplane.png";
import rocket from "../../assets/img/rocket.png";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function CardsReq({ setSelectedCardReq, selectedCardReq }) {
  const cardInfo = [
    {
      id: 1,
      img: paperPlane,
      title: "Necesito los elementos básicos de identidad visual:",
      tier: "basico",
      items: [
        {
          id: 4,
          title: "Logo",
        },
        {
          id: 5,
          title: "Paleta de colores",
        },
        {
          id: 6,
          title: "Tipografía",
        },
      ],
    },
    {
      id: 2,
      img: airPlane,
      title: "Requiero elementos intermedios de identidad visual:",
      tier: "intermedio",
      items: [
        {
          id: 4,
          title: "Variaciones del logo",
        },
        {
          id: 5,
          title: "Aplicaciones digitales",
        },
        {
          id: 6,
          title: "Piezas gráficas para redes",
        },
      ],
    },
    {
      id: 3,
      img: rocket,
      title: "Busco elementos avanzados de identidad visual:",
      tier: "avanzado",
      items: [
        {
          id: 4,
          title: "Narrativa de marca",
        },
        {
          id: 5,
          title: "Arquetipos de marca",
        },
        {
          id: 6,
          title: "Experiencia de marca",
        },
        {
          id: 7,
          title: "Fotografía y animaciones",
        },
      ],
    },
  ];

  const [cards, setCards] = useState([
    {
      id: 1,
      img: paperPlane,
      title: "Necesito los elementos básicos de identidad visual:",
      tier: "basico",
      items: [
        {
          id: 4,
          title: "Logo",
        },
        {
          id: 5,
          title: "Paleta de colores",
        },
        {
          id: 6,
          title: "Tipografía",
        },
      ],
    },
    {
      id: 2,
      img: airPlane,
      title: "Requiero elementos intermedios de identidad visual:",
      tier: "intermedio",
      items: [
        {
          id: 4,
          title: "Variaciones del logo",
        },
        {
          id: 5,
          title: "Aplicaciones digitales",
        },
        {
          id: 6,
          title: "Piezas gráficas para redes",
        },
      ],
    },
    {
      id: 3,
      img: rocket,
      title: "Busco elementos avanzados de identidad visual:",
      tier: "avanzado",
      items: [
        {
          id: 4,
          title: "Narrativa de marca",
        },
        {
          id: 5,
          title: "Arquetipos de marca",
        },
        {
          id: 6,
          title: "Experiencia de marca",
        },
        {
          id: 7,
          title: "Fotografía y animaciones",
        },
      ],
    },
  ]);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (selectedCardReq.length > 0) {
      setCards(cards.filter((card) => card.tier === selectedCardReq));
    } else {
      setCards(cardInfo);
    }
  }, [selectedCardReq]);

  return (
    <div className="cards-req_container">
      {cards.map((card) => (
        <div
          key={card.id}
          className="cards-req"
          onClick={() => {
            setSelectedCardReq(card.tier);
          }}
        >
          <img className="cards-req--img" src={card.img} alt={card.title} />
          <div className="cards-req--right_container">
            <p className="cards-req--title">{card.title}</p>
            {card.items.map((item) => (
              <div key={item.id} className="cards-req--item">
                <p className="cards-req--item_title">
                  <CheckIcon className="cards-req--item--icon" /> {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsReq;
