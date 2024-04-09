import { Link } from 'react-router-dom';
import styles from './MovieCard.module.scss'

import { MdOutlineGrade } from "react-icons/md";
import { IoIosArrowForward, IoIosPeople } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={imageUrl + movie.poster_path} alt="Imagem do filme" />
            </div>
            <div className={styles.data}>
                <div className={styles.content}>
                    <h2>{movie.title}</h2>
                    <div className={styles.details}>
                        <div><MdOutlineGrade />{movie.vote_average}</div>
                        <div><IoIosPeople />{movie.popularity}</div>
                        <div><IoLanguage />{movie.original_language}</div>
                    </div>
                    {showLink && (
                        <Link to={`/movie/${movie.id}`}>Saber mais<IoIosArrowForward /></Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieCard