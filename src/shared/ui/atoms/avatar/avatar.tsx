import styled, { css } from "styled-components";

interface Props {
  src?: string;
}

export const Avatar = styled.div<Props>`
    border-radius: 3px;
    height: 42px;
    min-width: 42px;
    ${({ src }) =>
    src &&
    css`
            background: url(${src}) no-repeat center / cover;
        `}  
    }
`;
