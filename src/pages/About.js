import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>A propos</h1>

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
