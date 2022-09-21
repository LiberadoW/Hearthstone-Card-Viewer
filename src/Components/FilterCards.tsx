import * as React from "react";
import { ChangeEvent } from "react";

type Props = {
  setSortByFilter: React.Dispatch<React.SetStateAction<string>>;
  sortByFilter: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const FilterCards = ({ sortByFilter, setSortByFilter,setCurrentPage }: Props) => {
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortByFilter(event.target.value);
    setCurrentPage(1)
  };

  return (
    <div className="fitler-cards-container">
      <label htmlFor="filter-cards">Sort by:</label>
      <select name="filter-cards" id="filter-cards" onChange={handleOnChange} value={sortByFilter}>
        <option value="manaLowFirst">Mana: low to high</option>
        <option value="manaHighFirst">Mana: high to low</option>
        <option value="nameAFirst">Card name: A to Z</option>
        <option value="nameZFirst">Card name Z to A</option>
      </select>
    </div>
  );
};

export default FilterCards;
