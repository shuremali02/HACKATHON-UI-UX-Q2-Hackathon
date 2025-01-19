'use client';
import { WatchesXPerfumes } from '@/lib/dataFetching';
import React, { useState } from 'react';



interface Props {
  initialData: WatchesXPerfumes[];
}

function TestingRoute({ initialData }: Props) {
  const [data, setData] = useState<WatchesXPerfumes[]>(initialData);
if(data){
  return (
    <div>
      <h1>Testing Route</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
}
}

export default TestingRoute;