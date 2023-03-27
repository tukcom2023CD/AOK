import react from 'react';
import styled from "styled-components";

interface props{
    btncolor?: string;
    borderRadius?: string;
    borderStyle?: string;
    backgroundcolor?: string;
    width?: string;
    height?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    name?: string;
                                        
}

export const BtnStyle = styled.button<props>`
    font-size: 1rem;
    text-align: center;
    border-radius: ${(props) => props.borderRadius};
    border-style: ${(props) => props.borderStyle};
    color: ${(props) => props.color};
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

export default function Btn(
    btncolor: string,
    borderRadius: string,
    borderStyle: string,
    backgroundcolor: string,
    width: string,
    height: string,
    color: string,
    fontSize: string,
    fontWeight: string,
    marginTop: string,
    marginBottom: string,
    marginLeft: string,
    marginRight: string,
    name?: string

    ) {
    return(
      <BtnStyle
        btncolor={btncolor}
        borderRadius={borderRadius}
        borderStyle={borderStyle}
        backgroundcolor={backgroundcolor}
        width={width}
        height={height}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
      >
        {name}
      </BtnStyle>  
    );
}