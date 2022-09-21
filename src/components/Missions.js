import React from 'react';
import Title from './Title';

class Missions extends React.Component {
  render() {
    const missionTitle = 'Missões';

    return (
      <div data-testid="missions">
        <Title headline={ missionTitle } />
      </div>
    );
  }
}

export default Missions;
