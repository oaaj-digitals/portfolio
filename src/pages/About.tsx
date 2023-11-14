import { styled as s } from "styled-components";

import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/footer";

import LogoImg from "../assets/images/logo black.svg";
import Timeline from "../components/Timeline";

const AboutBox = s.div`
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const AboutTextBox = s.div`
	width: 55%;
	display: flex;
	flex-direction:column;

	& p{
		text-align:justify;
		whitespace:nowrap;
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
			id: 4,
			experience: "Git",
			institute: "Scutigen",
			period: "2023",
		},
		{
			id: 5,
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

	return (
		<>
			<Header isFull={false} />
			<main>
				<Section title="About Me" height="90vh" snapScroll={false}>
					<AboutBox>
						<img src={LogoImg} width="25%" />
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

				<Section title="Experince" titlePosition="left" height="70vh">
					<Timeline data={Experience} />
				</Section>
			</main>
			<Footer />
		</>
	);
};

export default About;
