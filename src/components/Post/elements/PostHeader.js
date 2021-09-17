import PostContext from "../../../contexts/PostContext";
import UserContext from "../../../contexts/UserContext";
import DataEvaluationContext from "../../../contexts/DataEvaluationContext";
import Modal from "../../Modal";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { useContext, useState } from "react";

export default function PostHeader({setIsEditing, isEditing, cancelDeletion}) {
    const {isDataBeingEvaluated} = useContext(DataEvaluationContext)
    const { id, user } = useContext(PostContext);
    const {login} = useContext(UserContext);
    const [openModal, setOpenModal] = useState(false);

    return (
        <Wrapper>
            <Link to={`/user/${id}`}>
                {user.username}
            </Link>
            {(Number(login.user.id) === Number(user.id)) ? 
                <>
                    <IconButton right = {"25px"} onClick={() => isEditing ? cancelDeletion() : setIsEditing(!isEditing)} disabled={isDataBeingEvaluated}>
                        <RiPencilFill />
                    </IconButton>
                    <IconButton right = {"0px"} onClick={() => setOpenModal(true)} disabled={isDataBeingEvaluated}>
                        <FaTrash />
                    </IconButton>
                </>
            : ""}
            {openModal&&<Modal openModal={openModal} setOpenModal={setOpenModal} id={id} token ={login.token} />}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    font-size: 19px;
    line-height: 25px;
    font-weight: 400;
    color: #FFFFFF;
    position: relative;
    & a {
            display: inline-block;
            width: 85%;
        }
    @media(max-width: 937px) {
        font-size: 17px;
        line-height: 20px;
    }
`;

const IconButton = styled.button`
    font-size: 18px;
    color: #FFFFFF;
    position: absolute;
    right: ${ ({right}) => right };
    top: 0;
    cursor: pointer;
    @media(max-width: 937px) {
        font-size: 15px;
    }
`;

