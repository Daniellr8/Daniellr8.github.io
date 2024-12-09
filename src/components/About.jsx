import styled from "styled-components";
import img1 from "../assets/img/pre6.jpg"
import img2 from "../assets/img/regalo.png"
export function About() {
  return (<Container>
   <section class="about section" id="about">
          <div class="shape__small"></div>
          <div class="shape__big"></div>

          <div class="about__container container grid">
            <div class="about__data">

            <img
              src={img2}
              alt="about image2"
              class="about__img2"
            />
            <br></br>
              <h2 class="section__title">
              Regalos <br />
              
              </h2>
           
              <p class="about__description">
              El mejor regalo que podemos recibir es contar con tu presencia. No obstante, si deseas hacernos un obsequio, habrá un buzón de sobres y un QR disponible durante la ceremonia.  </p>

              {/* <a href="https://wa.me/3013073117?text=Confirmo%20mi%20asistencia%20a%20la%20boda!!%20✅💌" class="button">
                Confirmar Asistencia!
              </a> */}
            </div>

            <img
              src={img1}
              alt="about image"
              class="about__img"
            />
          </div>
        </section>
  </Container>);
}
const Container =styled.div`
  .about{
    position: relative;

    &__container{
        row-gap: 3.5rem;

        & .section__title{

        text-align: center;
            margin-bottom: 2rem;
        }
    }
    &__data{
        text-align: center;
    }
    &__description{
      top: 2rem;
        margin-bottom: 2rem;
      color: #6b6b6b;
    }
    &__img{
        width: 300px;
        justify-self: center;
        transition: transform 0.3s;
    }
        &__img2{
        width: 50px;
        justify-self: center;
        transition: transform 0.3s;
       
    }
    & .shape__small{
        top: 2rem;
        right: -3rem;
    }
    & .shape__big{
        bottom: 0;
        left: -8rem;
    }
}
`