import styled from "styled-components";

const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: gray;
    }
`;

export default Button;
