import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    const theTitle = 'Planetas';

    return (
      <div data-testid="solar-system">
        <Title headline={ theTitle } />
      </div>
    );
  }
}

export default SolarSystem;
