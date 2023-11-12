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
import { useEffect, useState } from "react";

const HeaderEle = s.header`
	width: 100%;
	height: 100vh;
	background-color: var(--color-black);
	padding: 3rem;
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
	height: 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const LogoBox = s.div`
	height: 100%;
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
	& > a:hover{
		color: var(--color-white);
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
`;

const SocialMediaBox = s.div`
	display: flex;
	gap: 2rem;
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

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [slides.length]);

	return (
		<HeaderEle style={isFull == false ? { height: "15vh" } : {}}>
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

				<Nav>
					<Link className="nav__link" to="/">
						Home
					</Link>
					<Link className="nav__link" to="/projects">
						Projects
					</Link>
					<Link className="nav__link" to="/about">
						About Me
					</Link>
				</Nav>
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

					<BgLogo src={OaajLogo} alt=" " />

					<SocialMediaBox>
						<a
							href="https://behance.net/oaaj_digital"
							target="_blank"
						>
							<FontAwesomeIcon icon={faBehance} size="lg" />
						</a>
						<a
							href="https://github.com/oaaj-digitals"
							target="_blank"
						>
							<FontAwesomeIcon icon={faGithub} size="lg" />
						</a>
						<a
							href="https://instagram.com/oaaj_digital"
							target="_blank"
						>
							<FontAwesomeIcon icon={faInstagram} size="lg" />
						</a>
						<a href="https://x.com/oaaj_digital" target="_blank">
							<FontAwesomeIcon icon={faXTwitter} size="lg" />
						</a>
					</SocialMediaBox>
				</>
			)}
		</HeaderEle>
	);
}

export default Header;
