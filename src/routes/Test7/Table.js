import { useImperativeHandle, forwardRef, useState, useEffect } from "react";
import DATA from "./_data";

const Table = (props, ref) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useImperativeHandle(ref, () => ({
    filter: (val) => {
      setFilter(val);
    },
  }));

  useEffect(() => {
    if (filter) {
      const filterData = DATA.filter((item) => {
        return item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
      });
      setData(filterData);
    } else {
      setData(DATA);
    }
  }, [filter]);


  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((eachrow, idx) => (
          <tr key={idx}>
            <td>{eachrow.name}</td>
            <td>{eachrow.age}</td>
            <td>{eachrow.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default forwardRef(Table);
