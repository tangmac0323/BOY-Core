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
import FormationTooltip from '@src/hero_helper/FormationTooltip/FormationTooltip';

// use the import raw data to create the table data list
const constructTableDataList = () => {
  const rawHeroData = Object.entries(RAW_HEROES_DATA);

  return rawHeroData.map(([heroID, heroData]) => {
    const heroFullName = `${heroData[RAW_HERO_CONFIG_KEYS.NAME]} - ${
      heroData[RAW_HERO_CONFIG_KEYS.TITLE]
    }`;

    // get the name of the major formation
    const majorFormmationID =
      heroData[RAW_HERO_CONFIG_KEYS.FORMATION_CONFIG][
        RAW_HERO_FORMATION_CONFIG_KEYS.MAJOR
      ];
    const majorFormationName =
      RAW_FORMATION_DATA[majorFormmationID][RAW_FORMATION_CONFIG_KEYS.NAME];

    const extraFormationList = heroData[RAW_HERO_CONFIG_KEYS.FORMATION_CONFIG][
      RAW_HERO_FORMATION_CONFIG_KEYS.EXTRA
    ].map((extraFormationID) => {
      return {
        id: extraFormationID,
        name: RAW_FORMATION_DATA[extraFormationID][
          RAW_FORMATION_CONFIG_KEYS.NAME
        ],
      };
    });
    return {
      hero: heroFullName,
      majorFormation: {
        id: majorFormmationID,
        name: majorFormationName,
      },
      extraFormations: extraFormationList,
    };
  });
};

const HeroesHelperEntry = () => {
  const [searchTerm, setSearchTerm] = useState('');

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
                <FormationTooltip formation={item.majorFormation} />
              </td>
              <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>
                {item.extraFormations.map((extraFormation) => (
                  <div key={`${item.hero.id}-${extraFormation.id}`}>
                    <FormationTooltip formation={extraFormation} />
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeroesHelperEntry;
