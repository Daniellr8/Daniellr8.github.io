import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Categorias } from "./Categorias";
import { About } from "./About";
import { Productos } from "./Productos";
import { Party } from "./Party";
import img1 from "../assets/img/FLOR4.png";
import img2 from "../assets/img/pngwing.com (62).png";
import img3 from "../assets/img/rama1.PNG";
import img4 from "../assets/img/floral2.png";
import backgroundMusic from "../assets/Music/Thousand_Years.mp3";

export function Main() {
  const weddingDate = new Date("February 23, 2025 15:30:00").getTime();

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0, 
    seconds: 0,
  });

  useEffect(() => {
    const countdownFunction = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(countdownFunction);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeRemaining({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(countdownFunction);
  }, [weddingDate]);

  return (
    <Container>
      <main className="main">
        <section className="home section" id="home">
          <div className="shape__small"></div>
          <div className="shape__big"></div>

          <div className="home__container container grid">
            <div className="home__data">
              <h1 className="home__title">
                {/* <p className="home__text">23.02.2025</p> */}
                <span>Daniel <br />
                & <br />
                 Maria Isabel</span>
                {/* <img src={img1} alt="home image" className="home__title-img-1" />
                <img src={img1} alt="home image" className="home__title-img-2" /> */}
              </h1>
              <p className="home__text">23.02.2025</p>
            </div>

            <div className="home__img2">
            <img src={img3} alt="home image" className="" />
            </div>

         
            <div className="home__data">
              <h1 className="home__title2">
                
                <span>¡Estas Invitado!</span>
                {/* <img src={img1} alt="home image" className="home__title-img-1" />
                <img src={img1} alt="home image" className="home__title-img-2" /> */}
              </h1>
              <p className="home__description">Nos encanta y estamos emocionados de compartir este momento especial contigo</p>
              {/* <br/>
              <p className="home__description">¡Falta poco!</p> */}
            </div>
          

            <div className="home__img">
              <img src={img4} alt="home image" className="" />
              <CountdownContainer>
                <h2>Faltan</h2>
                <div className="time">
                  <div>
                    <span>{timeRemaining.days}</span>
                    <small>días</small>
                  </div>
                  <div>
                    <span>{timeRemaining.hours}</span>
                    <small>hs</small>
                  </div>
                  <div>
                    <span>{timeRemaining.minutes}</span>
                    <small>min</small>
                  </div>
                  <div>
                    <span>{timeRemaining.seconds}</span>
                    <small>seg</small>
                  </div>
                </div>
              </CountdownContainer>
            </div>

            <br/>
            <div className="home__data">
              <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+de+Daniel+y+Mar%C3%ADa+Isabel&dates=20250223T200000Z/20250223T240000Z&details=Estamos+muy+emocionados+de+celebrar+este+d%C3%ADa+con+ustedes.&location=Loma+Linda-Sal%C3%B3n+Franc%C3%A9s,+9G8R%2BG4,+Girardota,+Antioquia,+Colombia&sf=true&output=xml
" className="button">Agregar a mi agenda</a>
            </div>
             

           {/* <img src={img1} alt="home image" className="home__tree-1" />
            <img src={img3} alt="home image" className="home__tree-2" /> */}
           
          </div>
        </section>

        <Categorias />
        <Productos />
        <About />
        
        <Party />
      </main>
    </Container>
  );
}

const Container = styled.div`
  .home__img-container {
    position: relative;
    display: inline-block;

  }

  .days-counter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    color: #2f4f4f;
    font-weight: bold;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.7); /* Fondo semitransparente */
    padding: 10px;
    border-radius: 10px;
    font-family: Arial, sans-serif;

  }

  .home {
    position: relative;

    &__container {
      padding-top: 3.5rem;
    }

    &__text {
      color: #6b6b6b;
      font-size: var(--secondBig-font-size);
    }

    &__data {
      text-align: center;
    }
    &__title2 {
      position: relative;
      font-size: var(--biggest-font-size2);
      line-height: 140%;
      width: max-content;
      margin: 0 auto 0.5rem;

      & span {
        display: block;
        font-family: var(--second-font);
        font-weight: initial;
        color: var(--first-color);
      }

      &-img-1,
      &-img-2 {
        width: 40px;
        position: absolute;
      }

      &-img-1 {
        top: -1rem;
        left: -1.5rem;
        transform: rotate(-15deg);
        animation: animate-star-1 5s infinite ease-in-out;
      }

      &-img-2 {
        bottom: 2.75rem;
        right: -1.5rem;
        transform: rotate(15deg);
        animation: animate-star-2 5s infinite ease-in-out;
      }
    }
    &__title {
      position: relative;
      font-size: var(--biggest-font-size);
      line-height: 140%;
      width: max-content;
      margin: 0 auto 0.5rem;

      & span {
        display: block;
        font-family: var(--second-font);
        font-weight: initial;
        color: var(--first-color);
      }

      &-img-1,
      &-img-2 {
        width: 40px;
        position: absolute;
      }

      &-img-1 {
        top: -1rem;
        left: -1.5rem;
        transform: rotate(-15deg);
        animation: animate-star-1 5s infinite ease-in-out;
      }

      &-img-2 {
        bottom: 2.75rem;
        right: -1.5rem;
        transform: rotate(15deg);
        animation: animate-star-2 5s infinite ease-in-out;
      }
    }

    &__description {
      margin-bottom: 2.5rem;
      color: #6b6b6b;
    }

    &__img {
      width: 300px;
      justify-self: center;
      margin-top: 1.5rem;
      animation: flotar 1.9s ease-in-out infinite alternate;
    }
       &__img2 {
      width: 300px;
      justify-self: center;
      margin-top: 1.5rem;
      animation: ease-in-out infinite alternate;
    }

    &__tree-1,
    &__tree-2 {
      width: 120px;
      position: absolute;
      top: 18rem;
    }

    &__tree-1 {
      left: -2rem;
    }

    &__tree-2 {
      right: -2rem;
    }

    & .shape__small {
      top: -3rem;
      left: -3rem;
    }

    & .shape__big {
      bottom: 5rem;
      right: -10rem;
    }

    @keyframes flotar {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 15px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }

    @keyframes animate-star-1 {
      0% {
        transform: scale(0.7) rotate(-15deg);
        opacity: 0.2;
      }
      50% {
        transform: scale(1) rotate(-15deg);
        opacity: 1;
      }
      100% {
        transform: scale(0.7) rotate(-15deg);
        opacity: 0.2;
      }
    }

    @keyframes animate-star-2 {
      0% {
        transform: scale(1) rotate(15deg);
        opacity: 1;
      }
      50% {
        transform: scale(0.7) rotate(15deg);
        opacity: 0.2;
      }
      100% {
        transform: scale(1) rotate(15deg);
        opacity: 1;
      }
    }
  }
`;

const CountdownContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #2f4f4f;

  h2 {
    font-size: 1.5rem;
    color: #4b8f8c;
    margin-bottom: 0.5rem;
  }

  .time {
    display: flex;
    gap: 1rem;
  }

  .time div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .time span {
    font-size: 2rem;
    font-weight: bold;
    color: #2f4f4f;
  }

  .time small {
    font-size: 0.8rem;
    color: #6b6b6b;
  }
`;
export default Main;
