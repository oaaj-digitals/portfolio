import { styled as s } from "styled-components";
import { breakpoints } from "../utils/MediaBreakpoints";

interface Props {
	cardTitle: string;
	cardImg: string;
	skills: string[];
}

const Card = s.div`
    width: 20%;
    height: 70%;
    border-radius: 2rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    cursor: pointer;
    box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.1);
    
    @media (max-width: ${breakpoints.tabPort}) {
        width: 35vw;
        height: 50vw;
        box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.2);
	}

    @media (max-width: ${breakpoints.phone}) {
        width: 60vw;
        height: 90vw;
	}
`;

const CardImgBox = s.div`
    width: 100%;
    height: 35%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-black);
`;

const CardImg = s.img`
    width: 100%;
    height:100%;
    object-fit: cover;
    blend-mode: overlay;
    opacity: .8;
    scale: 1.1;
`;

const CardTitle = s.h3`
    position: absolute;
    right: 1rem;
    bottom: .5rem;
    font: var(--tertiary-heading-font);
    color: var(--color-white);
    `;

const CardMain = s.ul`
    flex-grow: 1;
    padding: 2rem ;
    backface-visibility: hidden;

    display:flex;
    flex-direction:column;
    gap: .6rem;


    & li{
        font-weight: 700;
        list-style-position: inside;
        list-style-type: circle;
        // background-color:red;
    }
`;

const SkillsCard = ({ cardTitle, cardImg, skills }: Props) => {
	return (
		<Card>
			<CardImgBox>
				<CardImg src={cardImg} />
				<CardTitle>{cardTitle}</CardTitle>
			</CardImgBox>
			<CardMain>
				{skills.map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</CardMain>
		</Card>
	);
};

export default SkillsCard;
