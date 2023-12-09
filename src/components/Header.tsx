import { Link } from "react-router-dom";
import { styled as s, keyframes } from "styled-components";
import OaajLogo from "../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBehance,
	faGithub,
	faInstagram,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { breakpoints } from "../utils/MediaBreakpoints";

const HeaderEle = s.header`
	width: 100%;
	height: 100vh;
	background-color: var(--color-black);
	padding: 4rem 3rem;
	overflow: hidden;
	display:flex;
	flex-direction: column;
	justify-content:space-between;

`;

const BgLogo = s.img`
	height: 70vh;
	position: absolute;
	bottom: -20vh;
	right: -5rem;
	opacity: .5;
	mix-blend-mode: overlay;
	z-index: 0;
`;

const HeaderTop = s.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const LogoBox = s.div`
	height: 4rem;
	display:flex;
	align-items: center;
	gap: 1rem;
	cursor: pointer;
`;

const Logo = s.img`
	height: 100%;
`;

const Title = s.p`
	font-family: 'Aquire';
	font-size: 3rem;
	color: var(--color-white);
`;

const Nav = s.nav`
	display: flex;
	gap: 4rem;
	font-weight: 700 !important;
	width: fit-content;
	height: fit-content;
	transition: all 0.5s ease;

	& > a:hover{
		color: var(--color-white);
	}

	@media (max-width: ${breakpoints.tabPort}) {
		display: none;
		width:100%;
		height:100%;
		position: fixed;
		top: 0;
		right: 0;
		z-index: 90;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 5rem;
		padding: 20rem 4rem 4rem;		
		
		background:rgba(0,0,0,0.8);
		backdrop-filter: blur(25px);

		& > a{
			width: 100%;
			height: fit-content;
			padding: 2rem 0;
			text-align: center;
			font-size: 4rem;
		}
		
		& > a:hover {
			color: var(--color-black);
			background: var(--color-white);
		}
	}
`;

const MenuBtn = s.div`
	display: none;
	z-index: 100;
	@media (max-width: ${breakpoints.tabPort}) {
		display: block;
	}
`;

const fades = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const HeaderMain = s.h1`
	padding-left: 15vw;
	color: var(--color-white);
	display: flex;
	flex-direction: column;
	& span {
		font: var(--secondary-heading-font);
	}
	& span.slide{
		animation: ${fades} 2s ease-in-out infinite alternate;
	}
	& > span.main {
		font: var(--primary-heading-font);
		letter-spacing: .2rem;
		line-height: .8;
	}

	@media (max-width: ${breakpoints.tabLand}) {
		padding-left: 10vw;
	}

	@media (max-width: ${breakpoints.tabPort}) {
		
	}

	@media (max-width: ${breakpoints.phone}) {

	}
`;

const SocialMediaBox = s.div`
	display: flex;
	gap: 3rem;
	& > a:hover{
		color: var(--color-white);
	}
`;

const slides = ["oaaj", "a Web Developer", "a Creative Designer"];

interface Props {
	isFull: boolean;
}

function Header({ isFull }: Props) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuOpen = (state: boolean) => {
		setIsMenuOpen(!state);
	};

	useEffect(() => {
		setIsMenuOpen(false);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [slides.length]);

	return (
		<HeaderEle style={isFull == false ? { height: "auto" } : {}}>
			<HeaderTop>
				<Link to="/">
					<LogoBox>
						<Logo
							src={OaajLogo}
							alt="Oaaj Logo"
							title="Oaaj Logo"
						/>
						<Title>OAAJ</Title>
					</LogoBox>
				</Link>

				<div>
					<MenuBtn
						onClick={() => {
							handleMenuOpen(isMenuOpen);
						}}
					>
						<FontAwesomeIcon
							icon={isMenuOpen ? faXmark : faBars}
							size="3x"
						/>
					</MenuBtn>

					<Nav style={isMenuOpen ? { display: "flex" } : {}}>
						<Link
							className="nav__link"
							to="/"
							aria-label="Link to Homepage"
						>
							Home
						</Link>
						<Link
							className="nav__link"
							to="/projects"
							aria-label="Link to Projects page"
						>
							Projects
						</Link>
						<Link
							className="nav__link"
							to="/about"
							aria-label="Link to About page"
						>
							About Me
						</Link>
					</Nav>
				</div>
			</HeaderTop>

			{isFull && (
				<>
					<HeaderMain>
						<span className="main">Hello,</span>
						<span className="sub">
							I am{" "}
							<span className="slide">
								{slides[currentSlide]}
							</span>
						</span>
					</HeaderMain>

					<BgLogo src={OaajLogo} alt="" />

					<SocialMediaBox>
						<a
							href="https://behance.net/oaaj_digital"
							target="_blank"
							aria-label="Link to Behance account"
						>
							<FontAwesomeIcon icon={faBehance} size="2x" />
						</a>
						<a
							href="https://github.com/oaaj-digitals"
							target="_blank"
							aria-label="Link to GitHub account"
						>
							<FontAwesomeIcon icon={faGithub} size="2x" />
						</a>
						<a
							href="https://instagram.com/oaaj_digital"
							target="_blank"
							aria-label="Link to Instagram account"
						>
							<FontAwesomeIcon icon={faInstagram} size="2x" />
						</a>
						<a
							href="https://x.com/oaaj_digital"
							target="_blank"
							aria-label="Link to X(Twitter) account"
						>
							<FontAwesomeIcon icon={faXTwitter} size="2x" />
						</a>
					</SocialMediaBox>
				</>
			)}
		</HeaderEle>
	);
}

export default Header;
