import { styled as s } from "styled-components";
import { breakpoints } from "../utils/MediaBreakpoints";

const TimeStampBox = s.div`
	width:50%;
	padding: 0 3rem;
	text-align: right;
	display: flex;
	flex-direction: column;
	line-height: 1 !important;

	& .dot {
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 100%;

		background-color: var(--color-gray);

		position: absolute;
		top:50%;
		right: 0;
		transform: translateX(50%);
		z-index: 10;
	}

	&:nth-child(odd){
		align-self: flex-end;
		text-align: left;
	}

	&:nth-child(odd) > .dot {
		left: 0;
		transform: translateX(-50%);
	}

	@media (max-width: ${breakpoints.phone}) {
		padding: 0 1.5rem 0 0;

		&:nth-child(odd){
			padding: 0 0 0 1.5rem;
		}
    }
`;

const Experience = s.p`
    color: var(--dark-orange);
    font: var(--tertiary-heading-font);
`;

const Program = s.p`
    font-size: 1rem;

	@media (max-width: ${breakpoints.phone}) {
		font-size: 1.1rem;
	}
`;

const Institute = s.p`
    color: var(--color-black);
    font: var(--tertiary-heading-font);

`;

export interface TimeStampData {
	id: number;
	experience: string;
	program?: string;
	institute: string;
	period: string;
}

const TimeStamp = ({
	id,
	experience,
	program,
	institute,
	period,
}: TimeStampData) => {
	return (
		<TimeStampBox key={id}>
			<div className="dot"></div>
			<Experience>{experience}</Experience>
			{program ? <Program>{program}</Program> : null}
			<Institute>{institute + " | " + period}</Institute>
		</TimeStampBox>
	);
};

export default TimeStamp;
