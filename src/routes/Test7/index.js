import { useRef } from "react";
import useRenderLog from "../../hooks/useRenderLog";
import Input from "./Input";
import Table from "./Table";

const Test7 = () => {
  useRenderLog('Test7', 1);
  const refFilter = useRef();

  return(
    <div>
      <ul>
        <li>Please filter the table by name search (after press enter or click search button)</li>
        <li>No rerender allowed in <code>Test7</code> component</li>
      </ul>
      <Input onClick={(val) => {
         refFilter.current.filter(val);
        }}
      />
      <div>
        <Table ref={refFilter} />
      </div>
    </div>
  )
}

export default Test7;