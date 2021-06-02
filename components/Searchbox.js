import React, { useState } from "react";
import location_data from "../location_data";
import { Icon, Form, Input } from "semantic-ui-react";
import styles from "/styles/Searchbox.module.css";

export default function Searchbox() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState();
  const handleChange = (evt) => {
    setSearchQuery(evt.target.value);
  };
  const handleSubmit = () => {
    setLocation({
      ...location_data.find((location) => {
        return location.name == searchQuery;
      }),
    });
  };
  console.log(location);
  return (
    <div className={styles.searchInput}>
      <Form onSubmit={handleSubmit}>
        <Form.Field required>
          <Input
            onChange={handleChange}
            onSubmit={handleSubmit}
            icon={<Icon onClick={handleSubmit} name="search" link />}
            placeholder="Search for your destination..."
          />
        </Form.Field>
      </Form>
    </div>
  );
}
