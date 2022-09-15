import { ChangeEvent } from "react";

const classNames:string[] = ["All","Druid","Hunter","Mage","Paladin","Priest","Rogue","Shaman","Warlock","Warrior","Neutral","Demon Hunter"];

type Props = {
    playerClassName: string;
    setPlayerClassName: Function;
  };

const ClassSelect = ({playerClassName,setPlayerClassName}:Props) => {
    const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setPlayerClassName(event.target.value);
      };
return (
<div>
      <select
        onChange={handleOnChange}
        name="set-select"
        id="set-select"
        value={playerClassName}
      >
        <option value="" disabled>
          Choose class
        </option>
        {classNames.map((playerClass, index) => {
          return (
            <option key={index} value={playerClass}>
              {playerClass}
            </option>
          );
        })}
      </select>
    </div>
)
}

export default ClassSelect