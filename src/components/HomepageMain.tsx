import SkillsCard from "./SkillsCard";
import frontendCardImg from "../assets/images/milad-fakurian-AVnqBjUdteo-unsplash.jpg";
import backendCardImg from "../assets/images/milad-fakurian-2sICkGsJRQY-unsplash.jpg";
import creativeCardImg from "../assets/images/milad-fakurian-FTrDy_oxjmA-unsplash.jpg";
import Section from "./Section";

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

const HomepageMain = () => {
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
		</main>
	);
};

export default HomepageMain;
