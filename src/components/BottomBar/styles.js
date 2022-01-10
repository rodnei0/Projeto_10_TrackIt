import styled from "styled-components"

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    height: 70px;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    background: #FFFFFF;
`;

const P = styled.p`
    font-size: 17.976px;
    line-height: 22px;

    color: #52B6FF;
`;

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 91px;
    height: 91px;
    margin-bottom: 57px;

    border-radius: 50%;
    background: #52B6FF;

    font-size: 17.976px;
    line-height: 22px;
    color: #FFFFFF;

    div {
        width: 81px;
        height: 81px;
    }
`;

export {
    Footer, P, Div
}