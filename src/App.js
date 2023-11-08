import {useState, useEffect} from "react";
import Card from "./components/Cards";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import {data} from "./data";

function App() {
  const [itemsData, setItemsData] = useState(data);
  const [selectedRadio, setSelectedRadio] = useState(null);
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

  // ============================================
  // ============================================
  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;

    let filteredProductsByCategories = data;

    if (selectedValue !== "all") {
      console.log(selectedValue);
      setSelectedRadio(selectedValue);

      // Filtering logic here, e.g., filter by category
      filteredProductsByCategories = filteredProductsByCategories.filter(
        (prod) => prod.category === selectedValue
      );

      // Update the itemsData state with the filtered data
      setItemsData(filteredProductsByCategories);
    } else {
      setItemsData(data);
    }

    // const selectedValue = event.target.value;
    // console.log("selectedValue:", selectedValue);
    // if (selectedValue === "allPrices") {
    //   console.log("Resetting filter");
    //   setItemsData(data);
    // } else {
    //   setSelectedRadio(selectedValue);
    //   const [minPrice, maxPrice] = selectedValue.split("-");
    //   console.log("minPrice:", minPrice);
    //   console.log("maxPrice:", maxPrice);
    //   const filteredItems = data.filter((item) => {
    //     const itemPrice = parseFloat(item.newPrice);
    //     return itemPrice >= +minPrice && itemPrice <= +maxPrice;
    //   });
    //   console.log("filteredItems:", filteredItems);
    //   setItemsData(filteredItems);
    // }
  };

  // ===========================================
  // ===========================================
  // change radio handler
  // const handleChange = (event) => {
  //   const selectedValue = event.target.value;

  //   if (selectedValue === "allPrices") {
  //     // If "All" is selected, reset the filter
  //     setItemsData(data);
  //   } else {
  //     setSelectedRadio(selectedValue); // Update the selectedRadio state

  //     // Extract the minimum and maximum price from the selected value
  //     const [minPrice, maxPrice] = selectedValue.split("-");

  //     // Filter items based on the selected price range
  //     const filteredItems = data.filter((item) => {
  //       const itemPrice = parseFloat(item.newPrice);
  //       return (
  //         itemPrice >= parseFloat(minPrice) && itemPrice <= parseFloat(maxPrice)
  //       );
  //     });

  //     setItemsData(filteredItems);
  //   }
  // };

  // Filter radio

  // useEffect(() => {
  //   let filteredProductsByCategories = data;

  //   if (selectedRadio !== "all") {
  //     // console.log(selectedRadio);

  //     // Filtering logic here, e.g., filter by category
  //     filteredProductsByCategories = filteredProductsByCategories.filter(
  //       (prod) => prod.category === selectedRadio
  //     );

  //     // Update the itemsData state with the filtered data
  //     setItemsData(filteredProductsByCategories);
  //   } else {
  //     setItemsData(data);
  //   }
  // }, [selectedRadio]);

  // const handleChange = (event) => {
  //   const selectedValue = event.target.value;

  //   if (selectedValue === 'all') {
  //     // If "All" is selected, reset the price filter
  //     setItemsData(data);
  //   } else {
  //     // Extract the minimum and maximum price from the selected value
  //     const [minPrice, maxPrice] = selectedValue.split('-');

  //     // Filter items based on the selected price range
  //     const filteredItems = data.filter((item) => {
  //       const itemPrice = parseFloat(item.price);
  //       return itemPrice >= parseFloat(minPrice) && itemPrice <= parseFloat(maxPrice);
  //     });

  //     setItemsData(filteredItems);
  //   }
  // };

  // const filterPrice = (price) => {
  //   if (selectedRadio)
  // }
  // filter radio
  // const filterRadio = () => {
  //   let filtredProductsByRadio = data;
  //   if (selectedRadio) {
  //     console.log(selectedRadio);
  //     // filtredProductsByRadio = filtredProductsByRadio.filter(
  //     //   (prod) => prod.category === selectedRadio
  //     // );
  //   }
  //   // setItemsData(filtredProductsByRadio);
  // };
  return (
    <div>
      <div className="flex ">
        <SideBar handleCategoryChange={handleCategoryChange} />
        <div>
          <NavBar filterSearch={filterSearch} />
          <Card itemsData={itemsData} filterCategory={filterCategory} />
        </div>
      </div>
    </div>
  );
}

export default App;
