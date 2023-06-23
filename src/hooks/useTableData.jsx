import { useState, useEffect } from "react";

const useTableData = (url, parseData) => {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [removedItems, setRemoveItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        let parsedData = parseData(data.results);
        setTableData(parsedData);
        setFilteredData([...parsedData]);
      } catch (err) {
        console.log("Error fetching persons");
      }
    };
    fetchData();
  }, [url, parseData]);

  const filterByColumn = (column, q) => {
    if (q && q !== "") {
      let filtered = tableData.filter(
        (item) =>
          item[column].toLowerCase().includes(q) &&
          !removedItems.includes(item.id)
      );
      setFilteredData(filtered);
    } else {
      let allData = tableData.filter((item) => !removedItems.includes(item.id));
      setFilteredData(allData);
    }
  };

  const orderByColumn = (column, flag) => {
    let sortedData = [...filteredData];
    if (flag) {
      sortedData.sort((a, b) => {
        const colValue = a[column].toLowerCase();
        const colValue2 = b[column].toLowerCase();

        if (colValue < colValue2) {
          return -1;
        } else if (colValue > colValue2) {
          return 1;
        } else {
          return 0;
        }
      });
      setFilteredData(sortedData);
    }
  };

  const restoreTableData = () => {
    setFilteredData(tableData);
    setRemoveItems([]);
  };

  const removeItem = (id) => {
    let items = filteredData.filter((item) => item.id !== id);
    removedItems.push(id);
    setFilteredData(items);
  };

  return {
    tableData: filteredData,
    filterByColumn: filterByColumn,
    orderByColumn: orderByColumn,
    restoreTableData: restoreTableData,
    removeItem: removeItem,
  };
};

export default useTableData;
