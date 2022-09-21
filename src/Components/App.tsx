
import SetSelect from "./SetSelect";
import ClassSelect from "./ClassSelect";
import { useState, useEffect } from "react";
import DisplayCards from "./DisplayCards";
import QuerySelect from "./QuerySelect";
import FilterCards from "./FilterCards";
import { ClipLoader } from "react-spinners";
import CardObject from "../Functions/CardObject";



function App() {
  const [setName, setSetName] = useState("");
  const [playerClassName, setPlayerClassName] = useState("");
  const [query, setQuery] = useState("");
  const [sortByFilter, setSortByFilter] = useState("mana1");
  const [loadingInProgress, setLoading] = useState(false);
  const [cards, setCards] = useState<CardObject[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (setName !== "") {
      setLoading(true);
      fetch(
        `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${setName}?collectible=1`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "0ecee4585fmsh033f34690b7ff7bp15e48ejsna3b64b419bc1",
            "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setCards(data);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [setName]);

  return (
    <div className="site">
      <div className="main-content">
        <div className="select-container">
          <SetSelect
            setName={setName}
            setSetName={setSetName}
            playerClassName={playerClassName}
            setPlayerClassName={setPlayerClassName}
            setCurrentPage={setCurrentPage}
          />
          <ClassSelect
            playerClassName={playerClassName}
            setPlayerClassName={setPlayerClassName}
            setCurrentPage={setCurrentPage}
          />
          <QuerySelect setQuery={setQuery} setCurrentPage={setCurrentPage} />
          <FilterCards
            sortByFilter={sortByFilter}
            setSortByFilter={setSortByFilter}
            setCurrentPage={setCurrentPage}
           
          />
        </div>
        {loadingInProgress ? (
          <div className="loader-container">
            <ClipLoader color={"black"} size={50} />
          </div>
        ) : (
          <DisplayCards
            cards={cards}
            query={query}
            setName={setName}
            playerClassName={playerClassName}
            sortByFilter={sortByFilter}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
 
    </div>
  );
}

export default App;
