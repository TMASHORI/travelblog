import styles from "./searchBar.module.css";

const searchBar = ({ query, setQuery, setData,filteredData }) => {

  console.log(filteredData)
  
  const sortByTitle = () => {
    const newData = filteredData.filter((place) =>
      place.title.toLowerCase().includes(query).sort()
    );
    setData(newData);
    return setData;
  };

  return (
    <>
      <div className={styles.searchBarBox}>
        <input
          type="text"
          placeholder="Search by Title or Location ..."
          className={styles.search}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <div className={styles.sortByBox}>
          <label htmlFor="sorting" className={styles.label}>
            Sort By:
          </label>

          <select
            className={styles.select}
            name="sorting"
            id="sorting"
            onClick={() => sortByTitle()}
          >
            <option className={styles.option} onClick={() => sortByTitle()}>
              Title
            </option>
            <option className={styles.option}>Location</option>
            <option className={styles.option}>Price</option>
            <option className={styles.option}>Bedrooms</option>
          </select>
        </div> */}
      </div>
    </>
  );
};

export default searchBar;
