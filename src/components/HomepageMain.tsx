import { useState } from "react";
import { styled as s } from "styled-components";

import SkillsCard from "./SkillsCard";
import Section from "./Section";
import FeaturedCard from "./FeaturedCard";

import frontendCardImg from "../assets/images/milad-fakurian-AVnqBjUdteo-unsplash.jpg";
import backendCardImg from "../assets/images/milad-fakurian-2sICkGsJRQY-unsplash.jpg";
import creativeCardImg from "../assets/images/milad-fakurian-FTrDy_oxjmA-unsplash.jpg";
import LogoBgImg from "../assets/images/logo black.svg";
import CreativeBgImg from "../assets/images/layer-group.svg";
import WebBgImg from "../assets/images/globe.svg";
import { Link } from "react-router-dom";

const frontendSkills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
const backendSkills = ["MySQL", "Django", "NodeJS"];
const creativeSkills = [
	"Figma",
	"Blender",
	"CorelDraw",
	"Adobe XD",
	"Adobe Illustrator",
	"Adobe Photoshop",
];

const AboutBox = s.div`
	width: 75%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const AboutTextBox = s.div`
	width: 55%;
	display: flex;
	flex-direction:column;
	gap: 2rem;

	text-align:justify;

	& .btn {
		align-self:flex-start;
		font: var(--tertiary-heading-font);
		letter-spacing: 2px;
		background-color: var(--color-gray);
		color:var(--color-white);
		padding: .5rem 1rem;
		border-radius: .6rem;
		transition: box-shadow .3s ease;
	}

	& .btn:hover{
		background:linear-gradient(to right bottom, var(--light-green), var(--dark-green));
		box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.3);
	}
`;

const HomepageMain = () => {
	const [webDevImgs, setWebDevImgs] = useState([
		{ id: 1, src: frontendCardImg },
		{ id: 2, src: backendCardImg },
		{ id: 3, src: creativeCardImg },
		{ id: 5, src: backendCardImg },
		{ id: 6, src: creativeCardImg },
		{ id: 4, src: frontendCardImg },
	]);

	return (
		<main>
			<Section title="Skills-set" titlePosition="right">
				<SkillsCard
					cardTitle="Frontend Development"
					key="Frontend Development"
					cardImg={frontendCardImg}
					skills={frontendSkills}
				/>
				<SkillsCard
					cardTitle="Backend Development"
					key="Backend Development"
					cardImg={backendCardImg}
					skills={backendSkills}
				/>
				<SkillsCard
					cardTitle="Creative Design"
					key="Creative Design"
					cardImg={creativeCardImg}
					skills={creativeSkills}
				/>
			</Section>

			<Section title="Featured-Works" titlePosition="left">
				<>
					<FeaturedCard
						cardTitle="Web Development"
						cardImg={WebBgImg}
						background="linear-gradient(to right bottom, var(--light-orange), var(--dark-orange))"
						galleryImgs={webDevImgs}
					></FeaturedCard>
					<FeaturedCard
						cardTitle="Logo & Branding"
						cardImg={LogoBgImg}
						background="linear-gradient(to right bottom, var(--light-green), var(--dark-green))"
						galleryImgs={webDevImgs}
					></FeaturedCard>
					<FeaturedCard
						cardTitle="Creative Design"
						cardImg={CreativeBgImg}
						background="linear-gradient(to right bottom, var(--light-blue), var(--dark-blue))"
						galleryImgs={webDevImgs}
					></FeaturedCard>
				</>
			</Section>

			<Section title="About Me" height="70vh">
				<AboutBox>
					<AboutTextBox>
						<p>
							<div>
								I am a Web Developer and Creative Designer based
								in Nigeria.
							</div>
							<div>
								I am highly skilled with more than 2 years
								experience in the industry, I am a dreamer and
								fanatic of all things digital.
							</div>
						</p>
						<Link to="/about" className="btn">
							More
						</Link>
					</AboutTextBox>

					<img src={LogoBgImg} width="30%" />
				</AboutBox>
			</Section>
		</main>
	);
};

export default HomepageMain;
