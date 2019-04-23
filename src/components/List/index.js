import React from 'react';
import { FixedSizeList } from 'react-window';

import CharacterCard from '../CharacterCard';

const Row = ({ data, index, style }) => (
  <div style={style}>
    <CharacterCard {...data[index]} />
  </div>
);

const List = ({ data }) => (
  <FixedSizeList
    height={window.screen.height - 20}
    itemCount={data.length}
    itemData={data}
    itemSize={200}
    width='100%'
  >
    {Row}
  </FixedSizeList>
);

export default List;
