import { styled as s } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

interface Props {
	src: string;
	projectLink?: string;
	tools?: string[];
}

const ImageBox = s.div`
	display: inline-block;
	height: 100%;
    
    &:hover .back-side {
        z-index: 1;
        height: 100%;
    }
`;

const Image = s.img`
    height: 100%;
`;

const Backside = s.div`
    width: 100%;
    height: 0;
    overflow: hidden;
    background: linear-gradient(to right bottom, var(--light-green), var(--dark-green));
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    & > *{
        height: fit-content;
        display: inline;
        color: var(--color-white);
        cursor: pointer;
    }

    & > *:hover{
        color: var(--color-gray);
    }

`;

const ProjectImage = ({ src, projectLink }: Props) => {
	const copyToClipboard = () => {
		projectLink == ("" || undefined)
			? null
			: navigator.clipboard
					.writeText(projectLink)
					.then(() => {
						alert("Link copied to clipboard.");
					})
					.catch(() => {
						alert("Error, unable to copy.");
					});
	};
	return (
		<ImageBox>
			<Image src={src} />
			{projectLink != ("" || undefined) ? (
				<Backside className="back-side">
					<div onClick={copyToClipboard} title="copy">
						<FontAwesomeIcon icon={faCopy} size="2xl" />
					</div>
					<a target="_blank" href={projectLink} title="more">
						<FontAwesomeIcon icon={faExternalLink} size="2xl" />
					</a>
				</Backside>
			) : null}
		</ImageBox>
	);
};

export default ProjectImage;
