import style from "./style.module.css";
import Button from "../Button";
import ironLogo from "../../images/ironhack-logo-xs.png";
import menu from "../../images/menu-top-xs.png";

function Head() {
    return (
        <div className={style.head}>
            <div className={style.logo}>
                <img src={ironLogo} alt="logo"/>
                <img src={menu} alt="menu"/>
            </div>
            <h1 className={style.title}>Say hello to ReactJS</h1>
            <p className={style.text}>You will learn how to use the most popular frontend library and become a super Ninja developer</p>
            <div className={style.button}>
                <Button />
            </div>
        </div>
    )
}

export default Head;