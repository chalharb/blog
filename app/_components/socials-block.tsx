import { Github, Linkedin, MailIcon } from "lucide-react";

const SocialsBlock: React.FC = () => (
  <div className="flex space-x-4 mt-8">
    <a href="https://www.linkedin.com/in/logan-harber-57159a69/">
      <Linkedin size={24} />
    </a>
    <a href="https://github.com/chalharb">
      <Github size={24} />
    </a>
    <a href="mailto:chalharb@gmail.com">
      <MailIcon size={24} />
    </a>
  </div>
);

export default SocialsBlock;
