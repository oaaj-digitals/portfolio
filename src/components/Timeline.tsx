import { styled as s } from "styled-components";
import TimeStamp, { TimeStampData } from "./TimeStamp";

interface Props {
	data: TimeStampData[];
}

const TimelineBox = s.div`
	width:100%;
	padding 2rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;

	& hr {
		height: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
		border-color: var(--color-gray);
		border-width:2px;
		border-style: solid;
	}
`;

const Timeline = ({ data }: Props) => {
	return (
		<TimelineBox>
			<hr />
			{data.map((item) => (
				<TimeStamp
					id={item.id}
					experience={item.experience}
					program={item.program}
					institute={item.institute}
					period={item.period}
				/>
			))}
		</TimelineBox>
	);
};

export default Timeline;
