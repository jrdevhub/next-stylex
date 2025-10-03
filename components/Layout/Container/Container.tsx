import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Container.stylex";

type ContainerProps = {
    children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => (
    <div {...stylex.props(baseStyles.container)}>{children}</div>
);

export default Container;
