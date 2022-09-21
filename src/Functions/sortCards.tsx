import CardObject from "../Functions/CardObject";

const sortCards = (array: CardObject[], sortByFilter: string) => {
    switch (sortByFilter) {
      case "manaLowFirst": {
        array.sort((a: CardObject, b: CardObject) => a.cost - b.cost);
        break;
      }
      case "manaHighFirst": {
        array.sort((a: CardObject, b: CardObject) => b.cost - a.cost);
        break;
      }
      case "nameAFirst": {
        array.sort((a: CardObject, b: CardObject) =>
          a.name.localeCompare(b.name)
        );
        break;
      }
      case "nameZFirst": {
        array.sort((a: CardObject, b: CardObject) =>
          b.name.localeCompare(a.name)
        );
        break;
      }
    }
    return array;
  };

  export default sortCards