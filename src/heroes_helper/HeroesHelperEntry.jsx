import { useState } from 'react';

// raw data
import {
  RAW_HEROES_DATA,
  RAW_HERO_FORMATION_CONFIG_KEYS,
  RAW_HERO_CONFIG_KEYS,
} from '@src/raw_data/HeroData';
import {
  RAW_FORMATION_DATA,
  RAW_FORMATION_CONFIG_KEYS,
} from '@src/raw_data/FormationData';

// use the import raw data to create the table data list
const constructTableDataList = () => {
  const rawHeroData = Object.entries(RAW_HEROES_DATA);

  console.log(rawHeroData);
  return rawHeroData.map(([heroID, heroData]) => {
    const heroFullName = `${heroData[RAW_HERO_CONFIG_KEYS.NAME]} - ${
      heroData[RAW_HERO_CONFIG_KEYS.TITLE]
    }`;

    console.log(heroData);

    // get the name of the major formation
    const majorFormmationName =
      RAW_FORMATION_DATA[
        heroData[RAW_HERO_CONFIG_KEYS.FORMATION_CONFIG][
          RAW_HERO_FORMATION_CONFIG_KEYS.MAJOR
        ]
      ][RAW_FORMATION_CONFIG_KEYS.NAME];

    const extraFormationNameList = heroData[
      RAW_HERO_CONFIG_KEYS.FORMATION_CONFIG
    ][RAW_HERO_FORMATION_CONFIG_KEYS.EXTRA].map((extraFormationID) => {
      return RAW_FORMATION_DATA[extraFormationID][
        RAW_FORMATION_CONFIG_KEYS.NAME
      ];
    });
    return {
      hero: heroFullName,
      majorFormation: majorFormmationName,
      extraFormationNames: extraFormationNameList.join(', '),
    };
  });
};

const HeroesHelperEntry = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // const data = [
  //   { hero: 'Iron Man', formations: 'Avengers' },
  //   { hero: 'Captain America', formations: 'Avengers' },
  //   { hero: 'Thor', formations: 'Asgardians' },
  //   { hero: 'Hulk', formations: 'Avengers' },
  //   { hero: 'Black Widow', formations: 'Avengers' },
  //   { hero: 'Doctor Strange', formations: 'Masters of the Mystic Arts' },
  // ];

  const tableData = constructTableDataList();

  // Filter the tableData based on the search term
  const filteredData = tableData.filter(
    (item) =>
      item.hero.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.majorFormation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.extraFormationNames.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '10px',
          boxSizing: 'border-box',
        }}
      />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th
              style={{
                borderBottom: '1px solid #ddd',
                textAlign: 'left',
                padding: '8px',
              }}
            >
              Hero
            </th>
            <th
              style={{
                borderBottom: '1px solid #ddd',
                textAlign: 'left',
                padding: '8px',
              }}
            >
              Major Formation
            </th>
            <th
              style={{
                borderBottom: '1px solid #ddd',
                textAlign: 'left',
                padding: '8px',
              }}
            >
              Extra Formations
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>
                {item.hero}
              </td>
              <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>
                {item.majorFormation}
              </td>
              <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>
                {item.extraFormationNames}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeroesHelperEntry;
