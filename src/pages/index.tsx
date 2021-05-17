import Head from 'next/head';
import { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useRouter } from 'next/router';
import Character from "../components/Character";
import styles from '@/styles/Layout.module.scss';
import { graphqlClient } from '@/pages/api/graphql';
import Image from 'next/image';
//import style from '@/styles/Item.module.scss';
import style from '@/styles/Details.module.scss';


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
      <div className={style.wrapper}>
        <div className={style.one}></div>
        <div className={style.two}>
          <div className={style.block}>
            <div className={style.a}>
              <div className={style.title}>ABOUT</div>
            </div>
            <div className={style.b}>
              <div className={style.description}>Rick Sanchez is a male human.
              He is alive and well. Last see. adasdas</div>
            </div>
          </div>

          <div className={style.block}>
            <div className={style.a}>
              <div className={style.title}>ABOUT</div>
            </div>
            <div className={style.b}>
              <div className={style.description}>Rick Sanchez is a male human.
              He is alive and well. Last see. adasdas</div>
            </div>
          </div>



        </div>
      </div>

      {/* <div className={style.wrapper} id="1">
        <div className={style.imageContainer}>
          <Image width="180" height="180" src={"/assets/model.jpg"} objectFit="contain" />
        </div>
        <div className={style.containerDetails}>
          <div className={style.priceContainer}>
            <h2>
              {"location"} <br /> {"origin"} <br /> {"episode"} <br />
            </h2>
          </div>
        </div>
      </div> */}

      {/* <div className={styles.container}>
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
      </div> */}
    </div >
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