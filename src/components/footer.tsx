import { styled as s } from "styled-components";
import OaajLogo from "../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBehance,
	faGithub,
	faInstagram,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { breakpoints } from "../utils/MediaBreakpoints";

const FooterEle = s.footer`
	width: 100%;
	height: 29.9vh;
	padding: 0 3rem;
	background-color: var(--color-black);
    
	display: flex;
	justify-content: space-between;
	align-items: center;
    
    & > div{
        // background-color: red;
        display:flex;
        flex-direction: column;
        align-items:center;
        gap: 1rem;
    }

    & a:hover{
		color: var(--color-white);
	}

	@media (max-width: ${breakpoints.phone}) {
		height: max-content;
		padding: 3rem;
        flex-direction: column;
		gap: 3rem;
		align-items: stretch;

		& > div:first-child {
			order: 3;
		}
    }
`;

const SocialMediaBox = s.div`
	display: flex;
	width: 100%;
    justify-content: space-between;

	@media (max-width: ${breakpoints.phone}) {
		gap: 3rem;
		justify-content: center;
		order: -1;
		margin-bottom: 1rem;
	}
`;

const CopyRight = s.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    line-height: 1.2;  
    
    & .author-box {
        color: var(--color-white);
        font-weight: 700;
    }
    & .author {
        font-size: 1.8rem;
        font-weight: 900;
    }
`;

const CenterDiv = s.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

	@media (max-width: ${breakpoints.phone}) {
		position: static;
		transform: translate(0,0);
    }
`;

const Logo = s.img`
	width: 5rem;
`;

const Nav = s.nav`
	display: flex;
	gap: 4rem;
    font-size: 2rem;
	font-weight: 700 !important;
`;

const Form = s.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;

    & .input-ele {
        width: 20rem;
        height: 2rem;
        text-align: right;
        color: var(--color-gray);
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--color-gray);
        padding-right: 1rem;
        resize: none;
        transition: all .2s linear;
    }

    & .input-ele:focus-visible {
        outline:none;
        border: none;
        border-bottom: 2px solid var(--color-white);
    }

	@media (max-width: ${breakpoints.phone}) {
		width: 90%;

		& .input-ele {
			width: 100%;
			height: 3rem;
		}

		& .input-ele:focus-visible {
			outline:none;
			border: none;
			border-bottom: 2px solid var(--color-white);
		}
	}
`;

const footer = () => {
	return (
		<FooterEle>
			<div>
				<CopyRight>
					<p className="author-box">
						Made with love by <span className="author">OAAJ</span>
					</p>
					<p>Copyright &copy; 2023</p>
				</CopyRight>
				<SocialMediaBox>
					<a
						href="https://behance.net/oaaj_digital"
						target="_blank"
						aria-label="Link to Behance account"
					>
						<FontAwesomeIcon icon={faBehance} size="2xl" />
					</a>
					<a
						href="https://github.com/oaaj-digitals"
						target="_blank"
						aria-label="Link to GitHub account"
					>
						<FontAwesomeIcon icon={faGithub} size="2xl" />
					</a>
					<a
						href="https://instagram.com/oaaj_digital"
						target="_blank"
						aria-label="Link to Instagram account"
					>
						<FontAwesomeIcon icon={faInstagram} size="2xl" />
					</a>
					<a
						href="https://x.com/oaaj_digital"
						target="_blank"
						aria-label="Link to X(Twitter) account"
					>
						<FontAwesomeIcon icon={faXTwitter} size="2xl" />
					</a>
				</SocialMediaBox>
			</div>
			<CenterDiv>
				<Logo src={OaajLogo} alt="Oaaj Logo" title="Oaaj Logo" />
				<Nav>
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
			</CenterDiv>
			<div>
				<Form action="" aria-disabled>
					<legend>Contact Me</legend>
					<input
						className="input-ele"
						type="email"
						placeholder="Email"
						required
					/>
					<input
						className="input-ele"
						type="text"
						placeholder="Name"
						required
					/>
					<textarea
						className="input-ele"
						placeholder="Message"
						required
					></textarea>
				</Form>
			</div>
		</FooterEle>
	);
};

export default footer;
