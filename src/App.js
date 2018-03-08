import React, { Component } from 'react';
import './App.css';
import TableDiff from "./TableDiff";

class App extends Component {
  render() {
      let tableLHS = {
          'displayName': 'old',
          'aonlyinold': '1',
          'complex-name': 'Londonold',
          'country': 'UK',
          'postal-code': '1243124124',
          'city': 'London',
          'physical-location-id': 'hny_17dd7084-1377-4f49-9c72-f0_location3',
          'resource-version': '1508270999824',
          'street1': 'asdjhajksd',
          'street2': 'iadiojad',
          'state': 'jidjasd',
          'physical-location-type': 'site',
          'region': 'Europe',
          'uri1': 'cloud-infrastructure/complexes/complex/hny_17dd7084-1377-4f49-9c72-f0_location3'
      };

      let tableRHS = {
          'displayName': 'new',
          'aonlyinNew': '2',
          'complex-name': 'Londonew',
          'country': 'UK',
          'postal-code': '1243124124',
          'city': 'London',
          'physical-location-id': 'hny_17dd7084-1377-4f49-9c72-f0_location3',
          'resource-version': '1508270999824',
          'street1': 'asdjhajksd',
          'street2': 'iadiojad',
          'state': 'jidjasd',
          'physical-location-type': 'site',
          'region': 'Europe',
          'uri2': 'cloud-infrastructure/complexes/complex/hny_17dd7084-1377-4f49-9c72-f0_location3'
      };

      return (
      <div className="App">
          <TableDiff tableRHS={tableRHS} tableLHS={tableLHS}/>
      </div>
    );
  }
}

export default App;
