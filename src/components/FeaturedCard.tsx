import { Link } from "react-router-dom";
import { styled as s } from "styled-components";
import Gallery from "./Gallery";

export interface GalleryImgObject {
	id: number;
	src: string;
}

interface Props {
	cardTitle: string;
	cardImg: string;
	background: string;
	galleryImgs: GalleryImgObject[];
}

const Card = s.div`
    align-self: flex-end;
    width: calc(100vw/4);
    height: 95%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all .2s ease-in;
    &:hover {
        width: 100%;
        box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.2);
    }
    &.preview-box {
        cursor: pointer;
        width: calc(100vw/3);
        overflow: hidden;
    }
    &:hover .preview-box {
        width: calc(100vw/20);
        z-index: 20;
        box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.2);
    }

    &:hover .preview-box img{
        display:none;
    }

    &:hover > div.gallery-box {
        display: grid;
    }
`;

const CardTitle = s.h3`
    writing-mode: vertical-rl;
    text-orientation: upright;
    color: var(--color-white);

    position: absolute;
    left: 1rem;
    bottom: 2rem;
    letter-spacing: -.4rem;
`;

const CardImg = s.img`
    height: 60%;
	position: absolute;
	bottom: -15%;
	right: -5rem;
	opacity: .2;
	mix-blend-mode: overlay;
	z-index: 0;
`;

const FeaturedCard = ({
	cardTitle,
	cardImg,
	background,
	galleryImgs,
}: Props) => {
	return (
		<Card>
			<Link
				to="/"
				className="preview-box"
				style={{ backgroundImage: background }}
			>
				<CardTitle>{cardTitle}</CardTitle>
				<CardImg src={cardImg}></CardImg>
			</Link>
			<Gallery galleryImgs={galleryImgs} />
		</Card>
	);
};

export default FeaturedCard;
