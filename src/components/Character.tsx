import React from "react";
import Card from '@/components/Card';
import styles from '@/styles/Card.module.scss';
import Link from "./Link";

const Character = ({ characters }) => {
    return (
        <Card>
            {characters.map((character) => {
                return (
                    <Link href={`/api/character/${character.id}`} key={character.id}>
                        <div id={character.id} className={styles.box}>
                            <img src={character.image} />
                            <div className={styles.bgtext}>
                                <label>{character.name}</label>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </Card>
    );
};

export default Character;