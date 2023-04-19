import { recipeDifficulty } from 'constants';
import PropTypes from 'prop-types';
import { AiOutlineClockCircle, AiOutlinePieChart, AiOutlineBarChart } from "react-icons/ai";
import { Badge, BadgeList, InfoBlock, Name, RecipeInfo } from './RecipeCard.styled';


export const RecipeCard = ({ item: { image, name, time, servings, calories, difficulty } }) => { 
    return (
        <div>
            <img src={image} alt={name} width="300" />
            <Name>{name}</Name>
            <RecipeInfo>
                <InfoBlock>
                    <AiOutlineClockCircle size="24px"/>
                    <span>{time} min </span>
                </InfoBlock>
                <InfoBlock>
                    <AiOutlinePieChart size="24px"/>
                    <span>{servings} servings</span>
                </InfoBlock>
                <InfoBlock>
                     <AiOutlineBarChart size="24px"/>
                    <span>{calories} calories</span>
                </InfoBlock>
            </RecipeInfo>

            
            <h3>Difficulty</h3>
            <BadgeList>
                <Badge active={difficulty === recipeDifficulty.easy} type={recipeDifficulty.easy}>Easy</Badge>
                <Badge active={difficulty === recipeDifficulty.medium} type={recipeDifficulty.medium}>Medium</Badge>
                <Badge active={difficulty === recipeDifficulty.hard} type={recipeDifficulty.hard}>Hard</Badge>
            </BadgeList>
        </div>
    )
};

RecipeCard.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
        servings: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
    }).isRequired,
};