import { SocialIcon } from "react-social-icons";
import { PROFILE } from "../utils/profile";
import { SocialAccount } from "../types/profile";

export default function Social(): JSX.Element {
  return (
    <div className="social">
      {PROFILE.socialAccounts.map((social: SocialAccount) => (
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
