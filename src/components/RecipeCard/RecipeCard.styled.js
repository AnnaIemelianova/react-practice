import { recipeDifficulty } from 'constants';
import styled from 'styled-components';

export const Name = styled.h2`
margin-top: 8px;
margin-bottom: 12px;

:hover {
    color: orange;
}
`;

export const RecipeInfo = styled.div`
display: flex;
gap: 5px;
`;

export const InfoBlock = styled.p`
display: flex;
align-items: center;
gap: 5px;

svg {
    color: red;
}
`;

export const BadgeList = styled.div`
display: flex;
gap: 8px
`;

export const Badge = styled.span`
padding: 8px;
border-radius: ${p => p.theme.radius.sm};
border: 1px solid ${p => p.theme.colors.black};

background-color: ${({active, theme, type}) => {
    if (!active) {
        return theme.colors.white;
    }
    
    switch (type) {
        case recipeDifficulty.easy:
            return 'green';
        case recipeDifficulty.medium:
            return 'orange';
        case recipeDifficulty.hard:
            return 'red';
        default:
            throw new Error(`Unknown badge type ${type}`);
    }
}};
    

color: ${props => {
        return props.active ? props.theme.colors.white : props.theme.colors.black;
    }};
`;

/* export const Badge = styled.span`
padding: 8px;
border-radius: ${p => p.theme.radius.sm};
border: 1px solid ${p => p.theme.colors.black};

background-color: ${props => {
        return props.active ? props.theme.colors.accent : props.theme.colors.white;
    }};

color: ${props => {
        return props.active ? props.theme.colors.white : props.theme.colors.black;
    }};
`; */