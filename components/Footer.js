import React from "react";
import {
  Segment,
  Header,
  Grid,
  List,
  Container,
  Button,
  Icon,
} from "semantic-ui-react";
import { Link } from "next/link";
import { Router, useRouter } from "next/router";
export default function Footer() {
  const router = useRouter();
  return (
    <div>
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 85, padding: "1em 0em" }}
        vertical
      >
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Sitemap</List.Item>
                  <List.Item as="a">Contact Us</List.Item>
                  <List.Item as="a">Religious Ceremonies</List.Item>
                  <List.Item as="a">Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Banana Pre-Order</List.Item>
                  <List.Item as="a">DNA FAQ</List.Item>
                  <List.Item as="a">How To Access</List.Item>
                  <List.Item as="a">Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header as="h4" inverted>
                  Contribute below
                </Header>
                <p>
                  <Button
                    color="grey"
                    onClick={() => {
                      router.push(
                        "https://github.com/sullie-dev/tracker-of-thieves",
                      );
                    }}
                  >
                    <Icon name="github" /> Github
                  </Button>
                </p>
              </Grid.Column>
              <Grid.Column width={3}></Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}
