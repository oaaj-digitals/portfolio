import { styled as s } from "styled-components";
import { breakpoints } from "../utils/MediaBreakpoints";
import { useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GalleryImageBox = s.div`
    height: 100%;
	width: 100%;
	object-fit: cover;
	display: block;
    z-index: 200;
    cursor: zoom-in;


    @media (max-width: ${breakpoints.phone}) {
        width: 45%;
        height: 30%;
    }
`;

const Image = s.img`
    height: 100%;
	width: 100%;
	object-fit: cover;
	display: block;
`;

const ImgPreview = s.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10000;
	display: flex;
	justify-content: center;
	align-items: center;
	
	background:rgba(0,0,0,0.8);
	backdrop-filter: blur(25px);

	& > img {
		display: inline-block;
		height: 80%;
		cursor: zoom-out;
		object-fit: cover;

		@media (max-width: ${breakpoints.phone}) {
			width: 90%;
			height: auto;
		}
	}
`;

const MenuBtn = s.div`
	position: absolute;
	right: 3vw;
	top: 5vh;
	cursor: pointer;

	@media (max-width: ${breakpoints.phone}) {
		top: 2vh;
	}
`;

interface Props {
	id: number;
	src: string;
}

const GalleryImage = ({ id, src }: Props) => {
	const [isPreview, setIsPreview] = useState(false);

	const handlePreviewClose = (state: boolean) => {
		setIsPreview(!state);
	};

	const handleImagePreview = (state: boolean) => {
		setIsPreview(!state);
	};

	useEffect(() => {
		setIsPreview(false);
	}, []);

	return (
		<>
			<GalleryImageBox
				key={id}
				onClick={() => {
					handleImagePreview(isPreview);
				}}
			>
				<Image src={src} />
			</GalleryImageBox>
			{isPreview ? (
				<ImgPreview>
					<MenuBtn
						onClick={() => {
							handlePreviewClose(isPreview);
						}}
					>
						<FontAwesomeIcon icon={faXmark} size="3x" />
					</MenuBtn>
					<img
						src={src}
						alt=""
						onClick={() => {
							handlePreviewClose(isPreview);
						}}
					/>
				</ImgPreview>
			) : null}
		</>
	);
};

export default GalleryImage;
