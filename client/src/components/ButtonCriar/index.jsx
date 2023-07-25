import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { CriarLojaRoute } from "../../pages/CreateStore";
import { Plus } from 'react-bootstrap-icons'

export const Button = styled(Link)`
    background-color: var(--green-primary);
    border: 1px solid var(--shadow-primary) ;
    color: var(--white);
    position: relative;
    margin-left: 2rem;
    margin-right: auto;
    padding: 4px 10px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    max-width: 120px;
    transition: background .1s;

    &:hover {
        color: var(--white);
        background: var(--green-primary-hover);
    }
`


function ButtonCriar() {
    return (
        <Button
            to={CriarLojaRoute}>
            <p>Criar</p>
            <Plus size={26} />
        </Button>
    )
}

export default ButtonCriar