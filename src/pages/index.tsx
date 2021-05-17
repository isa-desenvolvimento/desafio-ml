import Head from 'next/head';
import { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useRouter } from 'next/router';
import Character from "../components/Character";
import styles from '@/styles/Layout.module.scss';
import { graphqlClient } from '@/pages/api/graphql';



export default function Home(results) {
  const intialState = results;
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState(intialState.characters);
  const router = useRouter();


  const searchEvt = (e) => {
    if (e.target.value == "") {
      setCharacters(intialState.characters);
      setSearch("");
    } else {
      setSearch(e.target.value);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const results = await fetch("/api/SearchCharacters", {
      method: "post",
      body: search,
    });
    const { characters, error } = await results.json();
    if (error) {
      alert('error');
      //todo colocar um toast
    } else {
      setCharacters(characters);
      //todo isso vai para a página de listagem
    }
  }

  return (
    <div>
      <Head>
        <title>Challenge ML</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <img src="/assets/image-logo.png" className={styles.logo}></img>
        <form
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className={styles.inputContainer}>
            <input
              placeholder="Search characters"
              value={search}
              onChange={(e) => searchEvt(e)}
            ></input>
            <button
              disabled={search === ""}
              type="submit"
            >Search</button>
          </div>
        </form>
        <Character characters={characters} />
      </div>
    </div>
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