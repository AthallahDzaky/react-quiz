import { useState } from "react";
import Input from "./Input";
import Table from "./Table";
import DATA from "./_data";

const Test4 = () => {
  let originData = DATA
  const [search, setSearch] = useState('')
  const [currentData, setCurrentData] = useState(originData)
  const handleSearchProcess = (searchValue) => {
    if (searchValue === '') {
      setCurrentData(originData)
    } else {
      setCurrentData(
        originData.filter(data => data.name === searchValue)
      )
    }
  }

  return(
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input
        search={search}
        setSearch={setSearch}
        triggerSearchProcess={handleSearchProcess}
      />
      <div>
        <Table 
          data={currentData}
        />
      </div>
    </div>
  )
}

export default Test4;