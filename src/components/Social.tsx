import { SocialIcon } from "react-social-icons";
import { SOCIAL_ACCOUNT } from "../utils/constants";

export default function Social(): JSX.Element {
  return (
    <div className="social">
      {SOCIAL_ACCOUNT.map((social) => (
        <SocialIcon
          key={social.network}
          url={social.href}
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
          }}
          network={social.network}
          target="_blank"
          rel="noopener"
        />
      ))}
    </div>
  );
}
