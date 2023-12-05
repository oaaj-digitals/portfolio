import { Link } from "react-router-dom";
import { styled as s } from "styled-components";
import Gallery from "./Gallery";
import { breakpoints } from "../utils/MediaBreakpoints";

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
    & .preview-box {
        cursor: pointer;
        width: calc(100vw/3);
        padding: 3rem 1.5rem;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
    }
    &:hover .preview-box {
        width: max-content;
        z-index: 20;
        box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.2);
    }

    &:hover .preview-box img{
        display:none;
    }

    &:hover > div.gallery-box {
        display: grid;
    }

    &:hover  h3 {
        position: relative;
        bottom: 0;
        left: 0;
    }

    @media (max-width: ${breakpoints.tabPort}) {
        width: 80%;
        height: 50vh;
        align-self: center;

        & .preview-box {
            width: 100%;
            height: 100%;
        }
	}

    @media (max-width: ${breakpoints.phone}) {
        width: 90%;
        height: 70vh;

        &:hover {
            width: 90%;
            box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.2);
        }

        &:hover .preview-box {
            width: 100%;
            height: max-content;
            padding: 2rem;
            display: flex;
            justify-content: center;
        }

        &:hover > div.gallery-box {
            display: flex;
        }

        &:hover  h3 {
            position: relative;
            bottom: 0;
            left: 0;
        }
	}
`;

const CardTitle = s.h3`
    writing-mode: vertical-rl;
    text-orientation: upright;
    color: var(--color-white);


    letter-spacing: -.4rem;

    @media (max-width: ${breakpoints.phone}) {
        position: absolute;
        left: 3rem;
        bottom: 4rem;
        font-size: 2rem;
        letter-spacing: 2px;
        writing-mode: horizontal-tb;
    }
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
				to={"/projects#'" + cardTitle + "'"}
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
