import React, { useState } from "react";
import Link from "next/link";
import { Icon, Form, Input } from "semantic-ui-react";

export default function Searchbox() {
  const [searchQuery, setSearchQuery] = useState("");
  const [link, setLink] = useState("");

  return (
    <div>
      <Form>
        <Form.Field required>
          <Input
            size="huge"
            onChange={(evt) => {
              const newValue = evt.target.value;
              setSearchQuery(newValue);
              setLink(evt.target.value.replace(/\s/g, "-").toLowerCase());
            }}
            icon={
              <Link
                type="submit"
                href={{
                  pathname: "/location",
                  query: { searchQuery: searchQuery },
                }}
                as={`/${link}`}
              >
                <Icon name="search" link />
              </Link>
            }
            placeholder="Search for your destination..."
          />
        </Form.Field>
      </Form>
    </div>
  );
}
