import { fileURLToPath } from "url";
import { join } from "path";

export default function (api) {
    api.cache(true);

    const dirname = fileURLToPath(new URL(".", import.meta.url));

    const presets = ["next/babel"];
    const plugins = [
        [
            "@stylexjs/babel-plugin",
            {
                // classNamePrefix: "y",
                dev: process.env.NODE_ENV === "development",
                test: process.env.NODE_ENV === "test",
                runtimeInjection: false,
                treeshakeCompensation: true,
                aliases: {
                    "@/*": [join(dirname, "*")],
                },
                unstable_moduleResolution: {
                    type: "commonJS",
                },
            },
        ],
    ];

    return {
        presets,
        plugins,
    };
}
