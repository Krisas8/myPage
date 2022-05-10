import "./contact.scss";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="innerContent">
        <div className="footerMain">
          <span className="contactMe">Contact Me</span>
          <ul className="contactUl">
            <li>chris_schulze1985@web.de</li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/chris-schulze-655931170"
                rel="noreferrer"
              >
                <span className="linkedSpan">
                  <LinkedInIcon className="linkedInLogo" />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footerBottom">
          <small>&copy; Copyright {new Date().getFullYear()}</small>
        </div>
      </div>
    </div>
  );
}
