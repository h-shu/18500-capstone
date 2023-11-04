import "./navbar.css"
import { BrowserRouter, Link } from "react-router-dom"

export default function Navbar() {
    return (
        < BrowserRouter>
 <nav className="nav">
            <ul>
                <li>
                    <a href={`/`}>Live Gameplay</a>
                </li>
                <li>
                    <a href={`/game_history`}>Game History</a>
                </li>
            </ul>
        </nav>
        </BrowserRouter>
       
        
    );
}