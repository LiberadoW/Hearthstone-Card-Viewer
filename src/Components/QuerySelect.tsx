import * as React from "react";
import { ChangeEvent } from "react";

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const QuerySelect = ({ setQuery,setCurrentPage }: Props) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value.toLowerCase());
    setCurrentPage(1)
  };

  return (
    <div className="query-select-container">
      <label htmlFor="query-select">Search:</label>
      <input type="text" onChange={handleOnChange} id="query-select" />
    </div>
  );
};

export default QuerySelect;
