import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFFFF;
    padding: 2px 12px;
    min-width: 120px;
    max-width: 300px;
    width: 100%;

    cursor: pointer;

    ${({ variant }) => variant !== "primary" && css`
        min-width: 167px;
        height:33px;
        
        background: #E41850;

        &:hover {
            opacity: 0.8;
            cursor: pointer;
        }

        &::after {
            content: "";
            position: absolute;
            border: 1px solid #E41850;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}

`