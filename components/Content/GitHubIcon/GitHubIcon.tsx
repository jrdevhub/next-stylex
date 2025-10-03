import Link from "@/components/UI/Link/Link";
import Icon from "@/components/UI/Icon/Icon";
import { Github } from "lucide-react";

const GitHubIcon = () => {
    return (
        <Link href="https://github.com/jrdevhub/next-stylex" ariaLabel="Link to GitHub">
            <Icon bg="secondaryHover" size="large">
                <Github />
            </Icon>
        </Link>
    );
};

export default GitHubIcon;
