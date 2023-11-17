import { styled as s } from "styled-components";
import { ReactNode } from "react";
import { breakpoints } from "../utils/MediaBreakpoints";

interface Props {
	title: string;
	titlePosition?: string;
	children: ReactNode;
	height?: string;
	snapScroll?: boolean;
}

const SectionBox = s.section<{ height?: string; scrollSnapAlign?: boolean }>`
    width: 100%;
	height: ${(props) => (props.height ? props.height : "100vh")};
	max-height: max-content;
	scroll-snap-align: ${(props) =>
		props.scrollSnapAlign === false ? "none" : "start"};
    padding: 4rem;
    display:flex;
    flex-direction:column;

	@media (max-width: ${breakpoints.tabPort}) {
		height: max-content;
	}
`;

const SectionTitleBox = s.div`
	flex-shrink: 0;
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
	min-height: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

	@media (max-width: ${breakpoints.tabPort}) {
		padding: 5rem 0 0;
		flex-direction: column;
		justify-content: flex-start;
		gap: 5rem;
	}
`;

const Section = ({
	title,
	titlePosition,
	children,
	height,
	snapScroll,
}: Props) => {
	return (
		<SectionBox id={title} height={height} scrollSnapAlign={snapScroll}>
			<SectionTitleBox className={titlePosition}>
				<SectionTitle>{title}</SectionTitle>
				<TitleUnderline />
			</SectionTitleBox>

			<SectionMain>{children}</SectionMain>
		</SectionBox>
	);
};

export default Section;
