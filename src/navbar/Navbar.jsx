import "./navbar.css"
import { BrowserRouter, Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to={`/`}>Live Gameplay</Link>
                </li>
                <li>
                    <Link to={`/game_history`}>Game History</Link>
                </li>
            </ul>
        </nav>
    );
}