import { styled } from "styled-components"

const Div = styled.div`
    width: 100%;
    height: 20px;
    position: absolute;
    background: var(--brown-primary);
`

const Text = styled.p`
    cursor: pointer;
    font-size: 14px;
    color: white;
    text-align: center;
`

function InfoDevs() {
    return (
        <Div>
            <Text></Text>
        </Div>
    )
}

export default InfoDevs 