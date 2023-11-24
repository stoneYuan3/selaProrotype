
import '../styles/nav.css'
import { Link, Outlet } from "react-router-dom";
import { useReducer } from "react";

function setLangUI(currentPage,setPage){
    switch(setPage){
        case "ENG":
            return {
                ENG:true,
                HEB:false,
            };
        case "HEB":
            return {
                ENG:false,
                HEB:true,
            };  
        default:
            return currentPage;
    }
}

export const NavMain = (props) => {
    var navStructure;
    var homelink;
    if(props.homelink!=null){
        homelink=props.homelink;
    }
    else{
        homelink="/"
    }
    var langSwitch;
    switch(props.lang){
        case "ENG":
            console.log('eng')
            langSwitch = (
                <Link className="lang" to="/HEB">
                    <p className="selected">ENG</p>
                    <p className="">HEB</p>
                </Link>
            )
            break;
        case "HEB":
            console.log('heb')
            langSwitch = (
                <Link className="lang" to="/">
                    <p className="">ENG</p>
                    <p className="selected">HEB</p>
                </Link>
            )
            break;
        default:
            console.log('def')
            langSwitch = (
                <Link className="lang" to="/HEB">
                    <p className="selected">ENG</p>
                    <p className="">HEB</p>
                </Link>
            )
            break;
    }

    // const initState = {
    //     ENG:true,
    //     HEB:false
    // }
    // const [currentLang, setPage] = useReducer(setLangUI, initState);

    navStructure=(
        <>
        <nav className="navMain nav">
            <div className="navGroupMain left">
                {langSwitch}
                {/* <Link 
                    onClick={currentLang.ENG ? setLangUI("HEB") : setLangUI("ENG")} 
                    className="lang" 
                    to={currentLang.ENG ? "/HEB" : "/"}
                >
                    <p className={currentLang.ENG ? "selected" : ""}>ENG</p>
                    <p className={currentLang.HEB ? "selected" : ""}>HEB</p>
                </Link> */}
                <div className="chapter">
                {/* https://www.simplilearn.com/tutorials/reactjs-tutorial/how-to-create-functional-react-dropdown-menu */}
                    <select>
                        <option value="Pslam 29">Pslam 29</option>
                        <option value="Pslam 30">Pslam 30</option>
                        <option value="Pslam 31">Pslam 31</option>
                    </select>
                </div>
                <nav className="navOptions">
                    <Link to={homelink}>Default</Link>
                    <Link to="structure">Structure</Link>
                    <a href="">Motif</a>
                    <a href="">Syntax</a>
                    <a href="">Sounds</a>
                </nav>
            </div>
            <div className='navGroupMain right'>
                <img className="logo" src="/img/selaLogo.png"/>
            </div>
        </nav>
        <Outlet/>
        </>
    )
    return navStructure;
}


export const NavTools = (props) => {
    //adjust right side buttons on the secondary nav based on which page the user is in
    var navStanzaEdit;
    if(props.page!=null){
        if(props.page=="structure"){
            navStanzaEdit=(<NavStanzaEdit page="structure"/>)
        }
    }
    else{
        navStanzaEdit=(<NavStanzaEdit />)
    }
    var navStructure = (
        <nav className="navTools nav">
            <NavBasicTools />
            {navStanzaEdit}
        </nav>
    )
    return navStructure;
}

const NavBasicTools = () => {
    return (
        <div className="basicTools">
            <div>
                <img src="/img/navTools/undo.png" />
                <img src="/img/navTools/redo.png" />
            </div>
            <div>
                <img src="/img/navTools/zoomin.png" />
            </div>
            <div>
                <img src="/img/navTools/bg.png" />
                <img src="/img/navTools/border.png" />
                <img src="/img/navTools/text.png" />
            </div>
        </div>
    )
}
const NavStanzaEdit = (props) => {
    var navStructure;
    if(props.page!=null){
        navStructure=(
            <div className="stanzaEdit">
                <NavToolsStanzaEdit page={props.page}/>
            </div>
        )
        return navStructure;
    }
    else{
        return navStructure;
    }
}

export const NavToolsStanzaEdit = (props) => {
    var navStructure;
    if(props.page!=null){
        if(props.page=="structure"){
            navStructure=(
                <div>
                    <NavToolsButton title="New Stanza"/>
                    <NavToolsButton title="New Strophe"/>
                    <NavToolsButton title="Move Up"/>
                    <NavToolsButton title="Move Down"/>
                    <NavToolsButton title="Indent"/>
                    <NavToolsButton title="Block Size"/>
                </div>
            )
            return navStructure;
        }
    }
    else{
        return navStructure;
    }
}

const NavToolsButton = (props) => {
    return (
        <button className="">{props.title}</button>
    );
}