import { styled as s } from "styled-components";

import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/footer";

import LogoImg from "../assets/images/logo black.svg";

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
			</main>
			<Footer />
		</>
	);
};

export default About;
