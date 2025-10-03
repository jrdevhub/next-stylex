import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Feed.stylex";

type FeedProps = {
    children: React.ReactNode;
    as?: "main" | "div";
};

const Feed = ({ children, as = "main" }: FeedProps) => {
    const Component = as;

    return (
        <Component
            {...(as === "div" ? { role: "main" } : {})}
            {...stylex.props(baseStyles.feed)}
        >
            {children}
        </Component>
    );
};

export default Feed;
