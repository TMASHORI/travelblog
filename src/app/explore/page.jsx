"use client";

import Image from "next/image";
import styles from "./explore.module.css";
import SearchBar from "@/components/searchBar/searchBar";
import PlacesList from "@/components/placesList/placesList";
import { useState } from "react";
import { places } from "@/lib/data";

const page = () => {
  const [query, setQuery] = useState("");

  const filteredData = places.filter(
    (place) =>
      place.title.toLowerCase().includes(query) ||
      place.location.toLowerCase().includes(query)||     
      place.title.includes(query) ||
      place.location.includes(query)
  );

  return (
    <div className={styles.container}>
      <SearchBar
        query={query}
        setQuery={setQuery}
      />
      <div className={styles.resultBox}>
        <PlacesList data={filteredData} query={query} />
      </div>
    </div>
  );
};

export default page;
