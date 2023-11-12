import { styled as s } from "styled-components";
import { ReactNode } from "react";

interface Props {
	title: string;
	titlePosition?: string;
	children: ReactNode;
	height?: string;
}

const SectionBox = s.section`
    width: 100%;
    padding: 2rem 4rem;
    display:flex;
    flex-direction:column;
`;

const SectionTitleBox = s.div`
    align-self:flex-start;
    
    &.left{
        align-self:flex-end;
    }
`;

const SectionTitle = s.h2`
    font: var(--secondary-heading-font);
    color: var(--color-black);
    line-height: .9;
`;

const TitleUnderline = s.div`
    background-color:var(--color-gray);
    width: 70%;
    height: .3rem;
`;

const SectionMain = s.div`
    width:100%;
    flex-grow:1;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Section = ({ title, titlePosition, children, height }: Props) => {
	return (
		<SectionBox id={title} style={{ height: height ? height : "100vh" }}>
			<SectionTitleBox className={titlePosition}>
				<SectionTitle>{title}</SectionTitle>
				<TitleUnderline />
			</SectionTitleBox>

			<SectionMain>{children}</SectionMain>
		</SectionBox>
	);
};

export default Section;
