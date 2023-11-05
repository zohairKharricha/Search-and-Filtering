import {useState} from "react";
import Card from "./components/Cards";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import {data} from "./data";

function App() {
  const [itemsData, setItemsData] = useState(data);
  // filter by category
  const filterCategory = (company) => {
    if (company === "all") {
      setItemsData(data);
    } else {
      let newArr = data.filter((item) => item.company === company);
      setItemsData(newArr);
    }
  };
  // filter by search
  const filterSearch = (word) => {
    if (word !== "") {
      let newArr = data.filter((item) =>
        item.title.toLowerCase().includes(word.toLowerCase())
      );
      setItemsData(newArr);
    }
  };
  return (
    <div>
      <div className="flex ">
        <SideBar />
        <div>
          <NavBar filterSearch={filterSearch} />
          <Card itemsData={itemsData} filterCategory={filterCategory} />
        </div>
      </div>
    </div>
  );
}

export default App;
