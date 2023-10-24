import { InputNumber, Table } from 'antd';
import { useState } from 'react';

const { Column, ColumnGroup } = Table;
function TablePrac() {
  const [tableTotal, setTableTotal] = useState(0);
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      name: '辣条',
      single: 1.56,
      num: 0,
      total: 0,
    },
    {
      key: '2',
      name: '泡面',
      single: 2.99,
      num: 0,
      total: 0,
    },
  ]);

  const columns = [
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '商品单价',
      dataIndex: 'single',
      key: 'single',
    },
    {
      title: '商品数量',
      dataIndex: 'num',
      key: 'num',
      render: (num, record, index) => (
        <>
          <InputNumber
            min={0}
            defaultValue={num}
            onChange={(value) => onChange(value, record, index)}
          />
        </>
      ),
    },
    {
      title: '商品总价',
      dataIndex: 'total',
      key: 'total',
      render: (total) => {
        let result = total.toFixed(2);
        return <>{result}</>;
      },
    },
  ];

  const onChange = (value, record, index) => {
    if (typeof value === 'number') {
      const arr = [...dataSource];
      arr[index].num = value;
      arr[index].total = arr[index].single * arr[index].num;
      setDataSource(arr);
      let total = 0;
      for (let i = 0; i < arr.length; i++) {
        total += arr[i].total;
      }
      let result = total.toFixed(2);
      setTableTotal(result);
    }
  };

  return (
    <>
      <Table dataSource={dataSource} columns={columns}></Table>
      <div style={{ height: '10px' }}></div>
      <h3>合计：{tableTotal}</h3>
    </>
  );
}

export default TablePrac;
