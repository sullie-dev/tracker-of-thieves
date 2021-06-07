import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import styles from "/styles/Location.module.css";

export default function LocationCard(props) {
  const { name, grid, region, type } = props;

  return (
    <div className={styles.container}>
      <Segment piled style={{ width: "75%", float: "centre" }}>
        <Container text style={{ padding: "2rem", zIndex: 1 }}>
          <Header as="h2">{name}</Header>
          <p>
            Grid location: <strong>{grid}</strong>
          </p>
          <p>
            Region: <strong>{region}</strong>
          </p>
          <p>
            Location type: <strong>{type}</strong>
          </p>
        </Container>
      </Segment>
    </div>
  );
}
