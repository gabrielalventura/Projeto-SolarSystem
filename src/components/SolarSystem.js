import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const theTitle = 'Planetas';

    return (
      <>
        <div data-testid="solar-system">
          <Title headline={ theTitle } />
        </div>
        { planets
          .map((planet) => (<PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />)) }
      </>
    );
  }
}

export default SolarSystem;
