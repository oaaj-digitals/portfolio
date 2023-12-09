import { styled as s } from "styled-components";

import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/footer";

import LogoImg from "../assets/images/logo black.svg";
import Timeline from "../components/Timeline";
import Skill from "../components/Skill";
import { breakpoints } from "../utils/MediaBreakpoints";

const AboutBox = s.div`
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > img {
		width: 25%;
	}

	@media (max-width: ${breakpoints.phone}) {
		width: 100%;
		flex-direction: column;
		gap: 4rem;

		& > img {
			width: 60%;
		}
	}
`;

const AboutTextBox = s.div`
	width: 55%;
	display: flex;
	flex-direction:column;

	& p{
		text-align:justify;
		whitespace:nowrap;
	}

	@media (max-width: ${breakpoints.phone}) {
		width: 100%;
	}
`;

const SkillBox = s.div`	
	width:60%;
	padding 2rem 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 3rem;

	@media (max-width: ${breakpoints.tabPort}) {
		width: 70%
	}

	@media (max-width: ${breakpoints.phone}) {
		width: 100%;
	}
`;

const About = () => {
	const Education = [
		{
			id: 1,
			experience: "Computer Science",
			program: "National Diploma",
			institute: "Lagos State Polytechnic",
			period: "2021",
		},
		{
			id: 2,
			experience: "Responsive Web Design",
			institute: "FreeCodeCamp",
			period: "2022",
		},
		{
			id: 3,
			experience: "Python",
			institute: "NIIT",
			period: "2022",
		},
		{
			id: 4,
			experience: "Web Development",
			institute: "NIIT",
			period: "2022",
		},
		{
			id: 5,
			experience: "Soft Skills",
			institute: "Jobberman",
			period: "2022",
		},
		{
			id: 6,
			experience: "Git",
			institute: "Scutigen",
			period: "2023",
		},
		{
			id: 7,
			experience: "Computer Science",
			program: "Higher National Diploma",
			institute: "Yaba College of Technology",
			period: "in-view",
		},
	];

	const Experience = [
		{
			id: 1,
			experience: "IT Specialist",
			institute: "Thosadam Ventures",
			period: "2020 - 2021",
		},
		{
			id: 2,
			experience: "Web Development Facilitator",
			institute: "NIIT",
			period: "2022 - 2023",
		},
		{
			id: 3,
			experience: "Freelancing",
			institute: "OAAJ Studios",
			period: "2019 - Present",
		},
	];

	const Skills = [
		{ id: 1, title: "HTML", level: 85 },
		{ id: 2, title: "CSS", level: 85 },
		{ id: 3, title: "JavaScript", level: 70 },
		{ id: 4, title: "TypeScript", level: 60 },
		{ id: 5, title: "React", level: 65 },
		{ id: 6, title: "Django", level: 60 },
		{ id: 7, title: "MySQL", level: 70 },
		{ id: 8, title: "Figma", level: 60 },
		{ id: 9, title: "Adobe XD", level: 70 },
		{ id: 10, title: "Adobe Illustrator", level: 75 },
		{ id: 11, title: "Adobe Photoshop", level: 75 },
		{ id: 12, title: "CorelDraw", level: 65 },
		{ id: 13, title: "Blender", level: 70 },
		{ id: 14, title: "Git", level: 75 },
	];

	return (
		<>
			<Header isFull={false} />
			<main>
				<Section title="About Me" height="90vh" snapScroll={false}>
					<AboutBox>
						<img src={LogoImg} alt="Oaaj Logo" />
						<AboutTextBox>
							<p>
								Hello, I am{" "}
								<span
									style={{
										fontWeight: 700,
										fontSize: "1.8rem",
									}}
								>
									Japhet Oluwadamilola Akintade
								</span>
								.
							</p>
							<p>
								A Web Developer and Creative Designer based in
								Nigeria.I am highly skilled with more than 2
								years experience in the industry,having an
								in-depth knowledge on web development, logo
								design, branding and creative design. I am a
								dreamer and fanatic of all things digital.
							</p>
						</AboutTextBox>
					</AboutBox>
				</Section>

				<Section
					title="Educational Background /Certifications"
					titlePosition="left"
				>
					<Timeline data={Education} />
				</Section>

				<Section title="Professional Skills">
					<SkillBox>
						{Skills.map((skill) => (
							<Skill
								id={skill.id}
								key={skill.id}
								title={skill.title}
								level={skill.level}
							></Skill>
						))}
					</SkillBox>
				</Section>

				<Section title="Experince" titlePosition="left" height="70vh">
					<Timeline data={Experience} />
				</Section>
			</main>
			<Footer />
		</>
	);
};

export default About;
