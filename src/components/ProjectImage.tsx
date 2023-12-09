import { styled as s } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import {
	faHtml5,
	faReact,
	faCss3,
	faGit,
	faFigma,
	faNodeJs,
	faJs,
} from "@fortawesome/free-brands-svg-icons";
import { ReactNode } from "react";
import { breakpoints } from "../utils/MediaBreakpoints";

interface ToolsType {
	[key: string]: ReactNode;
}

const TOOLS: ToolsType = {
	HTML: <FontAwesomeIcon icon={faHtml5} />,
	CSS: <FontAwesomeIcon icon={faCss3} />,
	JavaScript: <FontAwesomeIcon icon={faJs} />,
	TypeScript: <FontAwesomeIcon icon={faReact} />,
	React: <FontAwesomeIcon icon={faReact} />,
	Django: <FontAwesomeIcon icon={faReact} />,
	MySQL: <FontAwesomeIcon icon={faReact} />,
	Figma: <FontAwesomeIcon icon={faFigma} />,
	AdobeXd: <FontAwesomeIcon icon={faReact} />,
	AdobePhotoshop: <FontAwesomeIcon icon={faReact} />,
	AdobeIllstrautor: <FontAwesomeIcon icon={faReact} />,
	CorelDraw: <FontAwesomeIcon icon={faReact} />,
	Blender: <FontAwesomeIcon icon={faReact} />,
	Git: <FontAwesomeIcon icon={faGit} />,
	NodeJs: <FontAwesomeIcon icon={faNodeJs} />,
};

interface Props {
	previewImg: string;
	projectLink?: string;
	tools?: string[];
}

const ImageBox = s.div`
	display: inline-block;
	height: 10%;
    overflow: hidden;
	flex-shrink: 0;
    
    &:hover .back-side {
        opacity: 1;
    }

	@media (max-width: ${breakpoints.tabPort}) {
		width: 92%;
	}
`;

const Image = s.img`
	display: block;
    height: 100%;

	@media (max-width: ${breakpoints.tabPort}) {
		width: 100%;
		height: auto;
	}
`;

const Backside = s.div`
    width: 100%;
    height: 100%;
	padding: 0 2vh 1vh;
    overflow: hidden;
    background: linear-gradient(to right bottom, var(--color-black), rgba(0,0,0,0.4));
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all .5s ease;
    display: flex;
	flex-direction: column;
    justify-content: space-between;
    gap: 3rem;

    & > a{
        height: max-content;
        display: inline;
        color: var(--color-white);
        cursor: pointer;
		align-self: flex-start;
    }

    & > a:hover{
        color: var(--dark-green);
    }

`;

const ProjectTools = s.div`
    display: flex;
    gap: 1rem;
    align-self: flex-end;
`;

const Tool = s.div`
    min-width: 3rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-gray);
    background-color: var(--color-white);
	clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0% 80%);
    box-shadow: inset 2px 2px 4px 1px rgba(0,0,0,0.3);
    font-size: 2rem;
`;

const ProjectImage = ({ previewImg, projectLink, tools }: Props) => {
	return (
		<ImageBox>
			<Image src={previewImg} />
			{projectLink != ("" || undefined) ? (
				<Backside className="back-side">
					{tools && (
						<ProjectTools>
							{tools.map((tool) => (
								<Tool>{TOOLS[tool]}</Tool>
							))}
						</ProjectTools>
					)}

					{projectLink && (
						<a
							target="_blank"
							href={projectLink}
							title="View Project"
							aria-label="Link to view the detailed project"
						>
							<FontAwesomeIcon icon={faExternalLink} size="2xl" />
						</a>
					)}
				</Backside>
			) : null}
		</ImageBox>
	);
};

export default ProjectImage;
