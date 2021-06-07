import { Header, Container, Segment, Button } from "semantic-ui-react";
import Searchbox from "./Searchbox";
const HomepageHeading = () => (
  <Segment
    inverted
    textAlign="center"
    style={{ minHeight: 550, padding: "1em 0em" }}
    vertical
  >
    <Container text>
      <Header
        as="h1"
        content="Tracker of Thieves"
        inverted
        style={{
          fontSize: "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: "3em",
        }}
      />
      <Header
        as="h2"
        content="Go wherever you want when you want to."
        inverted
        style={{
          fontSize: "1.7em",
          fontWeight: "normal",
          marginTop: "1.5em",
        }}
      />
      <Searchbox />
    </Container>
  </Segment>
);

export default HomepageHeading;
