import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"

import styles from './Header.module.scss'

import { MdOutlineLocalMovies } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

const Header = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!search) return

        navigate(`/search/?q=${search}`)
        setSearch("")
    }

    return (
        <header>
            <div className={styles.nameContainer}>
                <h1>
                    <Link to="/"><MdOutlineLocalMovies />Movies</Link>
                </h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Busque pelo filme..."
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                            <button type="submit"><RiSearch2Line /></button>
                        </form>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header