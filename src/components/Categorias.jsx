import styled from "styled-components";
import img1 from "../assets/img/pngwing.com (55).png";
import img2 from "../assets/img/pngwing.com (50).png";
import img3 from "../assets/img/pngwing.com (57).png";
import img4 from "../assets/img/pngwing.com (59).png";
import img5 from "../assets/img/pre5.jpg";
import { ItemsCategorias } from "../components/ItemsCategorias";
import { datacategorias } from "../data/DataEstatica";
export function Categorias() {
  return (
    <Container>
      <section class="category section">
        <div class="shape__small"></div>

        <div className="pre__img">
        <img src={img5} alt="home image" className="" />
        <p class="pre__description">
          <br />
          Grábame como un sello sobre tu corazón; llévame como una marca sobre tu brazo. Fuerte es el amor, como la muerte; el celo, inconmovible como el sepulcro. Como llama divina es el fuego ardiente del amor.
          <br/>
          Corintios 8:6
        </p>
          </div>
          
         
          

    
        
        <h1 class="section__title">
          <br />
          Ceremonia y Celebracion
        </h1>

       
       
        <div  class="category__container container grid">

          {datacategorias.map((item, index) => {
            return <ItemsCategorias  key={index} item={item}/>;
          })}
        
        </div>
      </section>
    </Container>
  );
}
const Container = styled.div`
  .category {
    position: relative;

     &__description {
      margin-bottom: 2.5rem;
      color: #6b6b6b;
    }

    &__container {
      padding-top: 4rem;
      grid-template-columns: 228px;
      justify-content: center;
      row-gap: 6rem;
    }
     
    &__card {
      position: relative;
      background-color: var(--container-color);
      border-radius: 2rem;
      padding: 4.5rem 2.25rem 2rem;
      box-shadow: 0 4px 16px hsla(22, 10%, 2%, 0.3);
      text-align: center;
      transition: background 0.3s;

      &:hover .category__img {
        transform: translateY(-0.5rem);
      }
    }
    &__img {
      width: 120px;
      position: absolute;
      inset: 0;
      margin: 0 auto;
      top: -3.5rem;
      transition: transform 0.3s;
    }
    &__title {
     
      font-size: var(--h2-font-size);
      font-weight: var(--font-semi-bold);
      color: var(--first-color);
      margin-bottom: 0.5rem;
      line-height: 200%;
    }
    &__titlesec {
     
      font-size: var(--biggest-font-size2);
      font-weight: var(--font-semi-bold);
      color: var(--first-color);
      margin-bottom: 0.5rem;
      line-height: 200%;
    }
  
    &__description {
      font-size: var(--small-font-size);
    }
    &__star {
      width: 40px;
      position: absolute;
      top: 3.5rem;
      right: 0.5rem;
      transform: rotate(15deg);
    }
    & .shape__small {
      top: 25rem;
      left: -4rem;
    }
  }
  .pre{
  
  &__img {
      width: 350px;
      justify-self: center;
      margin-top: 5.0 rem;
      transition: transform 0.3s;
      transition: transform 0.3s;
      transition: background 0.3s;
      row-gap: 6rem;
      

      
    }
        &__description{
      top: 2rem;
        margin-bottom: 2rem;
      color: #6b6b6b;
      text-align: center;
    }
  }
`;
