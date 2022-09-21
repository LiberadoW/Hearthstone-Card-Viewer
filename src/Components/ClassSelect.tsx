import { ChangeEvent } from "react";

const classNames: string[] = [
  "All classes",
  "Druid",
  "Hunter",
  "Mage",
  "Paladin",
  "Priest",
  "Rogue",
  "Shaman",
  "Warlock",
  "Warrior",
  "Neutral",
  "Demon Hunter",
];

type Props = {
  playerClassName: string;
  setPlayerClassName: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const ClassSelect = ({
  playerClassName,
  setPlayerClassName,
  setCurrentPage,
}: Props) => {
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPlayerClassName(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="class-select-container">
      <label htmlFor="class-select">Choose class:</label>
      <select
        onChange={handleOnChange}
        name="class-select"
        id="class-select"
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
  );
};

export default ClassSelect;
