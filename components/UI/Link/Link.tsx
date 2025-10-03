import NextLink from "next/link";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Link.stylex";

type LinkProps = {
    href: string;
    children: React.ReactNode;
    ariaLabel: string;
    styles?: stylex.StyleXStyles[];
};

const isExternalLink = (href: string) => {
    return (
        /^https?:\/\//.test(href) ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
    );
};

const Link = ({ href, children, ariaLabel, styles = [] }: LinkProps) => {
    const external = isExternalLink(href);

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                role="link"
                tabIndex={0}
                {...stylex.props(baseStyles.link, ...styles)}
            >
                {children}
            </a>
        );
    }

    return (
        <NextLink
            href={href}
            aria-label={ariaLabel}
            role="link"
            tabIndex={0}
            {...stylex.props(baseStyles.link, ...styles)}
        >
            {children}
        </NextLink>
    );
};

export default Link;
