import React from "react";
import Link from "next/link";
import { Menu, Container, Segment } from "semantic-ui-react";
import HomepageHeading from "./HomepageHeading";

export default function Navbar() {
  return (
    <Segment
      inverted
      textAlign="center"
      style={{ minHeight: 75, padding: "1em 0em" }}
      vertical
    >
      <Menu
        fixed={false ? "top" : null}
        inverted={true}
        pointing={true}
        secondary={true}
        size="large"
      >
        <Container>
          <Menu.Item>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/roadmap">
              <a>Raodmap</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/">
              <a>About</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="https://www.seaofthieves.com/">
              <a target="_blank">Offical SoT</a>
            </Link>
          </Menu.Item>
        </Container>
      </Menu>
    </Segment>
  );
}
