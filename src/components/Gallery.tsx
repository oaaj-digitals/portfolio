import { styled as s } from "styled-components";
import { GalleryImgObject } from "./FeaturedCard";
import { breakpoints } from "../utils/MediaBreakpoints";
import GalleryImage from "./GalleryImage";

interface Props {
	galleryImgs: GalleryImgObject[];
}

const GalleryBox = s.div`
    display: none;
    width: 100%;
    height: 100%;
    padding: 4rem 3rem;
    padding-left: calc((100vw/20) + 3rem);
    background-color: var(--color-white);

    position:absolute;
    top: 0;
    right: 0;
    overflow: auto;

    grid-template-columns: repeat(auto-fill,minmax(calc(100%/4), 1fr));
    grid-template-rows: masonry;
    gap: 1rem;
    align-content: center;
    justify-content: center;
    align-items: center;

    @media (max-width: ${breakpoints.phone}) {
        padding: 10rem 3rem 4rem;
        flex-wrap: wrap;
    }
`;

const GalleryImg = ({ galleryImgs }: Props) => {
	return (
		<GalleryBox className="gallery-box">
			{galleryImgs.map((image) => (
				<GalleryImage key={image.id} id={image.id} src={image.src} />
			))}
		</GalleryBox>
	);
};

export default GalleryImg;
