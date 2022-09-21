import { ChangeEvent } from "react";

const setNames: string[] = ["Core", "Forged in the Barrens" ,"United in Stormwind","Fractured in Alterac Valley","Voyage to the Sunken City","Murder at Castle Nathria"];

type Props = {
  setName: string;
  setSetName: React.Dispatch<React.SetStateAction<string>>;
  playerClassName: string;
  setPlayerClassName: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const SetSelect = ({ setName, setSetName,playerClassName,setPlayerClassName,setCurrentPage}: Props) => {
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSetName(event.target.value);
    if (playerClassName === "") {
      setPlayerClassName("All classes")
    }
    setCurrentPage(1)
  };
  return (
    <div className="set-select-container">
      <label htmlFor="set-select">Choose set:</label>
      <select
        onChange={handleOnChange}
        name="set-select"
        id="set-select"
        value={setName}
      >
        <option value="" disabled>
          Choose set
        </option>
        {setNames.map((set, index) => {
          return (
            <option key={index} value={set}>
              {set}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SetSelect;
