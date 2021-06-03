import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import location_data from "../location_data";
import LocationCard from "../components/LocationCard";

export default function location() {
  const router = useRouter();
  const { searchQuery } = router.query;
  const [location, setLocation] = useState({});
  useEffect(() => {
    setLocation(
      location_data.find((location) => {
        return location.name == searchQuery;
      }),
    );
  }, []);

  if (!location) {
    return <h1>Oh no</h1>;
  } else {
    return (
      <div>
        <LocationCard
          name={location.name}
          grid={location.grid}
          region={location.region}
          type={location.type}
        />
      </div>
    );
  }
}
