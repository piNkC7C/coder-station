import { Tabs } from 'antd';
import { useState } from 'react';
import Map from './Map';
import Table from './TablePrac';

function RePrac() {
  const [tabItems, setTabItems] = useState([
    {
      label: 'Map',
      children: <Map />,
    },
    {
        label: 'Table',
        children: <Table />,
      },
  ]);

  return (
    <>
      <Tabs
        type="card"
        items={tabItems.map((item, i) => {
          const id = String(i + 1);
          item.key = id;
          return item;
        })}
      />
      <div style={{ height: '10px' }}></div>
    </>
  );
}

export default RePrac;
