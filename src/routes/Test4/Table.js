// import DATA from "./_data";

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
        {props.data.map((item, index) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </thead>
    </table>
  )
}

export default Table;
