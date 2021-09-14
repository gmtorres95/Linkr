import styled from "styled-components";
import {IoIosArrowDown} from 'react-icons/all';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [showNavBar, setShowNavBar] = useState(false);

    return (
        <>
            <HeaderWrapper showNavBar={showNavBar}>
                <Link to="/timeline">linkr</Link>
                <div onClick={() => showNavBar ? setShowNavBar(false) : setShowNavBar(true)}>
                    <IoIosArrowDown />
                    <img src="https://loucosporgeek.com.br/wp-content/uploads/2020/09/edward-elric-1-1.jpg" alt="" />
                </div>
            </HeaderWrapper>
            <DropDownWindow showNavBar={showNavBar}>
                <Link to="/my-posts">My posts</Link>
                <Link to="/my-likes">My likes</Link>
                <Link to="/">Logout</Link>
            </DropDownWindow>
            {showNavBar ? <Blank onClick={() => setShowNavBar(false)}/> : ""}
        </>
    );
}

const Blank = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
`;

const DropDownWindow = styled.nav`
    width: 150px;
    height: 109px;
    background: #171717;
    border-radius: ${({showNavBar}) => showNavBar ? `0px 0px 20px 20px` : `5px`};
    position: fixed;
    z-index: 2;
    top: ${({showNavBar}) => showNavBar ? `72px` : `-37px`};
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 17px;
    transition: 0.3s;

    a {
        font-size: 17px;
        line-height: 20px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        text-decoration: none;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
    }

`;

const HeaderWrapper= styled.header`
    height: 72px;
    width: 100%;
    background: #151515;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;

    a {
        color: #FFFFFF;
        margin-left: 28px;
        font-weight: bold;
        font-size: 49px;
        text-decoration: none;
        letter-spacing: 0.05em;
        font-family: 'Passion One', cursive;
    }

    div {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-right: 17px;
        color: #FFFFFF;
        font-size: 25px;
    }

    svg {
        transform: rotate(${({showNavBar}) => showNavBar ? `180deg` : `0deg`});
        transition: 0.3s;
    }

    img {
        width: 53px;
        height: 53px;
        border-radius: 26.5px;
        object-fit: cover;
    }

    @media(max-width: 800px) {

        button {
        margin-left: 0px;
        margin-top: 10px;
        }
`;
