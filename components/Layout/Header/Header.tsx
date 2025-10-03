import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Header.stylex";
import Link from "@/components/UI/Link/Link";
import ThemeToggler from "@/components/Core/ThemeToggler/ThemeToggler";
import Logo from "@/components/Content/Logo/Logo";
import GitHubIcon from "@/components/Content/GitHubIcon/GitHubIcon";
import Flex from "@/components/UI/Flex/Flex";

type HeaderProps = {
    as?: "header" | "div";
};

const Header = ({ as = "header" }: HeaderProps) => {
    const Component = as;
    const role = as === "div" ? "banner" : undefined;

    return (
        <Component {...stylex.props(baseStyles.header)} {...(role && { role })}>
            <Flex gap={2}>
                <Link
                    href="/"
                    ariaLabel="Link to Homepage"
                    styles={[baseStyles.logo]}
                >
                    <Logo />
                </Link>
            </Flex>
            <Flex gap={2}>
                <GitHubIcon />
                <ThemeToggler />
            </Flex>
        </Component>
    );
};

export default Header;
