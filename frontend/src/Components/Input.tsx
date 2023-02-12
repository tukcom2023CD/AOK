import React from "react";
import styled from "styled-components";

interface props{
    inputcolor?: string;
    border?: string;
    borderRadius?: string;
    borderStyle?: string;
    backgroundcolor?: string;
    width?: string;
    height?: string;
    fontSize?: string;
    fontWeight?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    name?: string;

}

export const Input = styled.input<props>`
    font-size: 12pt;
    text-align: center;
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderRadius};
    border-style: ${(props) => props.borderStyle};
    color: ${(props) => props.inputcolor};
    background-color: ${(props) => props.backgroundcolor};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
    margin-left: ${(props) => props.marginLeft};
    margin-right: ${(props) => props.marginRight};
`;

