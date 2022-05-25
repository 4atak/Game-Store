import React from "react";
import { Carousel } from "react-bootstrap";
const Section1 = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          style={{ height: "700px" }}
          className="d-block w-100"
          src="https://cdn.wallpapersafari.com/57/90/BRi1qC.jpg"
          alt="First slide"
        />
         <Carousel.Caption>
          <h3>Онлайн Шутер VOLORANT</h3>
          <p>
            {" "}
            многопользовательская компьютерная игра, разработанная и издаваемая
            компанией Riot Games. Valorant является первой игрой Riot Games в
            жанре шутер от первого лица. Изначально игра была анонсирована под
            названием Project A в октябре 2019 года, анонсирована уже под
            текущим названием 1 марта 2020 года и выпущена для игроков 2 июня
            2020 года.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "700px" }}
          className="d-block w-100"
          src="https://cdn.wallpapersafari.com/39/27/IjWEyF.jpg"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Онлайн Шутер VOLORANT</h3>
          <p>
            {" "}
            многопользовательская компьютерная игра, разработанная и издаваемая
            компанией Riot Games. Valorant является первой игрой Riot Games в
            жанре шутер от первого лица. Изначально игра была анонсирована под
            названием Project A в октябре 2019 года, анонсирована уже под
            текущим названием 1 марта 2020 года и выпущена для игроков 2 июня
            2020 года.
          </p>
        </Carousel.Caption> */}
        <Carousel.Caption>
          <h3>Стратегическая игра DOTA2</h3>
          <p>
            Dota 2 — многопользовательская командная компьютерная игра в жанре
            MOBA, разработанная и изданная корпорацией Valve. Игра является
            продолжением DotA — пользовательской карты-модификации для игры
            Warcraft III: Reign of Chaos и дополнения к ней Warcraft III: The
            Frozen Throne.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "700px" }}
          className="d-block w-100"
          src="https://cdn.wallpapersafari.com/95/89/bF9oLY.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Онлайн шутер WARFACE </h3>
          <p>
          компьютерная игра в жанре массового многопользовательского онлайн-шутера от первого лица (MMOFPS). Игра разработана студиями компании Crytek: украинским филиалом Crytek Kiev (совместно с Crytek Seoul), британским филиалом Crytek UK и турецким филиалом Crytek Istanbul, с 2019 года за неё отвечает студия Blackwood Games. Проект использует игровой движок CryEngine 3.5 и выпущен для персональных компьютеров. Это первая игра на CryEngine 3, которая вышла на Nintendo Switch.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Section1;
