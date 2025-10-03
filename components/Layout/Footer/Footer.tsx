import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Footer.stylex";
import Text from "@/components/UI/Text/Text";
import Flex from "@/components/UI/Flex/Flex";

type FooterProps = {
    as?: "footer" | "div";
};

const Footer = ({ as = "footer" }: FooterProps) => {
    const Component = as;

    return (
        <Component
            {...(as === "div" ? { role: "contentinfo" } : {})}
            {...stylex.props(baseStyles.footer)}
        >
            <Flex gap={1} wrap="wrap" align="center" justify="center">
                <Text as="small" size={8} color="secondary">
                    License MIT
                </Text>
                <Text as="small" size={8} color="secondary">
                    &bull;
                </Text>
                <Text as="small" size={8} color="secondary">
                    v1.0.0
                </Text>
            </Flex>
        </Component>
    );
};

export default Footer;
