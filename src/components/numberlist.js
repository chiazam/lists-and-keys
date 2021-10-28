import React from 'react';

import { ListItem } from './listitem';

export const numbers = [1, 2, 3, 4, 5];

export function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}