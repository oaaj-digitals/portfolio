import { styled as s } from "styled-components";

interface SkillData {
	id: number;
	title: string;
	level: number;
}

const SkillBox = s.div`
    width: 40%;
    display: flex;
    flex-direction:column;
    align-items: flex-start;
`;

const SkillTitle = s.p`
    font: var(--tertiary-heading-font);
    color: var(--color-black);
`;

const SkillLevelBox = s.div`
    width: 100%;
    height: 1rem;
    border: 1px solid var(--color-gray);
    overflow: hidden;
    border-radius: 20px;
    `;

const Level = s.div`
    height: 100%;
    background-color: var(--light-blue);
    border-radius: 20px; 
`;

const Skill = ({ id, title, level }: SkillData) => {
	return (
		<SkillBox key={id}>
			<SkillTitle>{title}</SkillTitle>
			<SkillLevelBox>
				<Level style={{ width: level + "%" }} />
			</SkillLevelBox>
		</SkillBox>
	);
};

export default Skill;
