import Head from 'next/head';
import { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import {
  Heading,
  Input,
  Stack,
  Button,
  IconButton,
  Box,
  Flex,
  useToast,
  Image
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";

import Character from "../components/Character";

import styles from "../styles/Home.module.css";

import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
  background: 'none',
});

export default function Home(results) {
  const intialState = results;
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState(intialState.characters);
  const toast = useToast();

  const searchEvt = (e) => {
    if (e.target.value == "") {
      setCharacters(intialState.characters);
      setSearch("");
    } else {
      setSearch(e.target.value);
    }
  };

  return (
    <Flex direction="column" justify="center" align="center" background={theme.background}>
      <Head>
        <title>NextJS Apollo Crash Course</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box mb={4} flexDirection="column" align="center" justify="center" py={8}>
        <Heading as="h1" size="2xl" mb={8}>
          <Image src="/assets/image-logo.png" />
        </Heading>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const results = await fetch("/api/SearchCharacters", {
              method: "post",
              body: search,
            });
            const { characters, error } = await results.json();
            if (error) {
              toast({
                position: "bottom",
                title: "An error occurred.",
                description: error,
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            } else {
              setCharacters(characters);
            }
          }}
        >
          <Stack maxWidth="350px" width="100%" isInline mb={8}>
            <Input
              placeholder="Search characters"
              value={search}
              onChange={(e) => searchEvt(e)}
              color={theme.colors.brand[100]}
            ></Input>
            <Button
              colorScheme="none"
              border="2px"
              disabled={search === ""}
              type="submit"
            >Search</Button>
          </Stack>
        </form>
        {/* <Character characters={characters} /> */}
      </Box>

    </Flex>
  );
}




export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query {
        characters(page: 1) {
          info {
            count
            pages
          }
          results {
            name
            id
            location {
              name
              id
            }
            image
            origin {
              name
              id
            }
            episode {
              id
              episode
              air_date
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      characters: data.characters.results,
    },
  };
}