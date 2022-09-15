import { ChangeEvent } from "react";

const setNames: string[] = ["Core", "Forged in the Barrens" ,"United in Stormwind","Fractured in Alterac Valley","Voyage to the Sunken City","Murder at Castle Nathria"];

type Props = {
  setName: string;
  setSetName: Function;
  setPlayerClassName: Function;
};

const SetSelect = ({ setName, setSetName,setPlayerClassName }: Props) => {
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSetName(event.target.value);
    setPlayerClassName("All")
  };
  return (
    <div>
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
