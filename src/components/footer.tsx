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
`;

const SocialMediaBox = s.div`
	display: flex;
	width: 100%;
    justify-content: space-between;
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
`;

const Logo = s.img`
	width: 5vw;
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
					<a href="https://behance.net/oaaj_digital" target="_blank">
						<FontAwesomeIcon icon={faBehance} size="lg" />
					</a>
					<a href="https://github.com/oaaj-digitals" target="_blank">
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
			</div>
			<CenterDiv>
				<Logo src={OaajLogo} alt="Oaaj Logo" title="Oaaj Logo" />
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
