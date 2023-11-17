import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled as s } from "styled-components";

import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/footer";
import ProjectSelector from "../components/ProjectSelector";

import frontendCardImg from "../assets/images/milad-fakurian-AVnqBjUdteo-unsplash.jpg";
import backendCardImg from "../assets/images/milad-fakurian-2sICkGsJRQY-unsplash.jpg";
import creativeCardImg from "../assets/images/milad-fakurian-FTrDy_oxjmA-unsplash.jpg";
import ProjectImage from "../components/ProjectImage";

const ProjectsGallery = s.div`
	width: 100%;
	height: 70%;
	margin-right: 3rem;
	margin-top: 5vh;
	padding-bottom: 1rem ;
	align-self: flex-start;

	display: flex;
	align-items: center;
	overflow-x: auto;
	overflow-y: hidden;
	gap: 10px;
	scroll-behavior: smooth;
	transition: all .3s ease-in;


	&::-webkit-scrollbar {
		height: 8px;
	}

	&::-webkit-scrollbar-button {
		display: none;
	}

	&::-webkit-scrollbar-track {
		border-radius: 8px;
		overflow: hidden;
		background-color: rgb(230,230,230);
		box-shadow: inset 1px 1px 5px 1px rgba(0,0,0,0.5); 
	}
	
	&::-webkit-scrollbar-thumb {
		border-radius: 8px;
		background-color: var(--light-orange);
		box-shadow: inset 0 0 20px rgba(0,0,0,0.3);
    	transition: all .3s ease;
	}
	
	&::-webkit-scrollbar-thumb:hover {
		box-shadow: 0 0 2px 1px rgba(0,0,0,0);
		scale: 1.5; 
	}

`;

const ProjectSelectorBox = s.div`
	position: absolute;
	right: -10px;
	top: calc((100vh/2) - 20vh);
	transform: translateY(-50%);

	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const BgText = s.p`
	position: absolute;
	bottom: 25px;
	right: -20px;
	font-weight: 900;
	font-size: 7rem;
	color: transparent;
	background-color: var(--color-gray);
	text-shadow: 5px 5px 5px rgba(255, 255,255,.5);
	background-clip: text;
	-webkit-background-clip: text;
	opacity: .3;
	z-index: -1;

`;

type ProjectsData = {
	[key: string]: { id: number; src: string }[];
};

const projectSet: ProjectsData = {
	WebDevelopment: [
		{ id: 0, src: frontendCardImg },
		{ id: 2, src: backendCardImg },
		{ id: 3, src: creativeCardImg },
	],
	LogoBranding: [
		{ id: 2, src: backendCardImg },
		{ id: 0, src: frontendCardImg },
		{ id: 3, src: creativeCardImg },
	],
	CreativeDesign: [
		{ id: 3, src: creativeCardImg },
		{ id: 0, src: frontendCardImg },
		{ id: 2, src: backendCardImg },
	],
};

const Projects = () => {
	const hash = useLocation().hash;
	const [projectTitle, setProjectTitle] = useState("Web Development");
	const [projects, setProjects] = useState(projectSet["WebDevelopment"]);

	const selectedProject = hash
		.substring(2, hash.length - 1)
		.replace(/%20/g, " ");
	const charToReplace: RegExp = /[\s&]/g;
	const handleSelectProject = (title: string) => {
		setProjectTitle(title);
	};

	useEffect(() => {
		hash == "" ? null : setProjectTitle(selectedProject);

		hash == ""
			? null
			: history.replaceState({}, document.title, location.pathname);
	}, []);

	useEffect(() => {
		const project = projectSet[projectTitle.replace(charToReplace, "")];
		setProjects(project);
	}, [projectTitle]);

	return (
		<>
			<Header isFull={false} />

			<Section title="Projects" height="90vh" snapScroll={false}>
				<ProjectsGallery id="gallery">
					{projects.map((project) => (
						<ProjectImage
							key={project.id}
							src={project.src}
							projectLink={project.src}
						/>
					))}
				</ProjectsGallery>
				<ProjectSelectorBox>
					<ProjectSelector
						projectTitle="Web Development"
						onSelectProject={handleSelectProject}
						active={projectTitle}
					></ProjectSelector>
					<ProjectSelector
						projectTitle="Logo & Branding"
						onSelectProject={handleSelectProject}
						active={projectTitle}
					></ProjectSelector>
					<ProjectSelector
						projectTitle="Creative Design"
						onSelectProject={handleSelectProject}
						active={projectTitle}
					></ProjectSelector>
				</ProjectSelectorBox>
				<BgText>{projectTitle}</BgText>
			</Section>

			<Footer />
		</>
	);
};

export default Projects;
