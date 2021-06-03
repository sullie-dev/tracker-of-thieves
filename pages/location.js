import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import location_data from "../location_data";

export default function location() {
  const router = useRouter();
  const { searchQuery } = router.query;
  const [location, setLocation] = useState({});
  useEffect(
    () =>
      setLocation(
        location_data.find((location) => {
          return location.name == searchQuery;
        }),
      ),
    [],
  );
  return (
    <div>
      <h1>Location page</h1>
      <h4>{location.name}</h4>
    </div>
  );
}
