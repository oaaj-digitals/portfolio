import { keyframes, styled as s } from "styled-components";

interface Props {
	projectTitle: string;
	onSelectProject: (item: string) => void;
	active: string;
}

const Selector = s.div`
    width: 2rem;
    height: 2rem;
	overflow: hidden;
    backgound-color: red;

    // border: 2px solid var(--color-gray);
    border-radius: 100%;
	box-shadow: inset 1px 1px 6px 1px rgba(0,0,0,0.3);

	cursor: pointer;
`;

const fades = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const SelectorBg = s.div`
	width: 100%;
	height: 100%;
	background-color: var(--dark-orange);

	animation: ${fades} .5s ease;
	animation-fill-mode: forwards;

`;

const ProjectSelector = ({ projectTitle, onSelectProject, active }: Props) => {
	return (
		<Selector
			title={projectTitle}
			onClick={() => {
				onSelectProject(projectTitle);
			}}
		>
			{active == projectTitle ? <SelectorBg></SelectorBg> : null}
		</Selector>
	);
};

export default ProjectSelector;
