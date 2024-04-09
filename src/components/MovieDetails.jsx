import styles from './MovieDetails.module.scss'

const imageUrl = import.meta.env.VITE_IMG

import { MdAttachMoney } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { IoTimeOutline } from "react-icons/io5";
import { GrOverview } from "react-icons/gr";

const MovieDetails = ({ movie }) => {
    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
    }

    return (
        <>
            <div className={styles.image}>
                <img src={imageUrl + movie.backdrop_path} alt="Imagem do filme" />
            </div>
            <div className={styles.container}>
                <div className={styles.data}>
                    <div className={styles.content}>
                        <h1>{movie.title}</h1>
                        <h4 className={styles.tagline}>{movie.tagline}</h4>
                        <p><MdAttachMoney />Orçamento:<span> {formatCurrency(movie.budget)}</span></p>
                        <p><TbReportMoney />Receita:<span> {formatCurrency(movie.revenue)}</span></p>
                        <p><IoTimeOutline />Duração:<span> {movie.runtime} minutos</span></p>
                        <div><GrOverview />Descrição: <h4>{movie.overview}</h4></div>
                    </div>
                </div>
                <div className={styles.mainImage}>
                    <img src={imageUrl + movie.poster_path} alt="Imagem do filme" />
                </div>
            </div>
        </>
    )
}

export default MovieDetails