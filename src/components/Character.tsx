import React from "react";
import Card from '@/components/Card';
import styles from '@/styles/Card.module.scss';

const Character = ({ characters }) => {
    return (
        <Card>
            {characters.map((character) => {
                return (
                    <div id={character.id} className={styles.box}>
                        <img src={character.image} />
                        <div className={styles.bgtext}>
                            <label>{character.name}</label>
                        </div>
                    </div>
                );
            })}
        </Card>
    );
};

export default Character;