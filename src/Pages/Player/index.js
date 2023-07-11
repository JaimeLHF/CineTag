import Banner from 'components/Banner';
import styles from './Player.module.css'
import Title from 'components/Title';
import { useParams } from 'react-router-dom';
import NotFound from 'Pages/404';
import { useEffect, useState } from 'react';

function Player() {

    const [video, setVideo] = useState();


    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/JaimeLHF/cinetag-api/videos?id=${parametros.id}`)
            .then(resp => resp.json())
            .then(dados => {
                setVideo(...dados)
            })
    }, [])

    const parametros = useParams();

   
    if (!video) {
        return (
            <NotFound />
        )
    }

    return (
        <>
            <Banner imagem='player' />
            <Title>
                <h1>Player</h1>
            </Title>
            <section className={styles.container}>
                <iframe width="560" height="315" src={video.link} title={video.titulo} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </section>

        </>
    )
}

export default Player;