import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>A propos</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        quia culpa beatae deleniti dignissimos veniam debitis veritatis
        temporibus, repellendus nihil ea omnis cum hic praesentium quisquam ad
        fugiat! Labore ipsa perspiciatis, aut esse odio repellendus distinctio
        doloremque sint provident doloribus blanditiis, quaerat rerum. Facere
        harum in ratione eos, minima blanditiis dicta ad minus quos temporibus
        adipisci excepturi ab exercitationem iure esse enim, natus repellat
        error reiciendis iusto. Dicta quibusdam, ipsum enim doloribus veritatis
        officia voluptas, similique in veniam sed possimus? Magnam voluptates
        reiciendis, non ipsum, fugiat minus quasi architecto deleniti voluptate
        quis officia corporis natus veniam dicta excepturi atque commodi?
      </p>
      <br />
      <p>
        À propos
Infospays est une application web interactive permettant de découvrir les pays du monde entier en un coup d'œil.
Fonctionnalités
Grâce à Infospays, vous pouvez explorer les pays du monde à travers plusieurs filtres :

Filtrer les pays par continent (Afrique, Amérique, Asie, Europe, Océanie)
Trier les pays par population
Contrôler le nombre de pays affichés grâce au slider
Visualiser le drapeau, la capitale et la population de chaque pays

Technologies utilisées

React.js
Axios
Rest Countries API (restcountries.com)

Données
Les données sont fournies en temps réel par l'API Rest Countries, une API gratuite et open source recensant les informations de plus de 250 pays à travers le monde.
      </p>
    </div>
  );
};

export default About;
