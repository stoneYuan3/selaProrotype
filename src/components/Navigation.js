
import '../styles/nav.css'
import { Link, Outlet } from "react-router-dom";

export const NavMain = () => {
    var navStructure;
    navStructure=(
        <nav className="navMain">
            <div className="navGroupMain left">
                <div className="lang">
                    <a href="" className='selected'>ENG</a>
                    <a href="">HEB</a>
                </div>
                <div className="chapter">
                {/* https://www.simplilearn.com/tutorials/reactjs-tutorial/how-to-create-functional-react-dropdown-menu */}
                    <select>
                        <option value="Pslam 29">Pslam 29</option>
                        <option value="Pslam 30">Pslam 30</option>
                        <option value="Pslam 31">Pslam 31</option>
                    </select>
                </div>
                <nav className="navOptions">
                    <a href="">Default</a>
                    <a href="">Structure</a>
                    <a href="">Motif</a>
                    <a href="">Syntax</a>
                    <a href="">Sounds</a>
                </nav>
            </div>
            <div className='navGroupMain right'>
                <img className="logo" src="/img/selaLogo.png"/>
            </div>
        </nav>
    )
    return navStructure;
}