import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = __dirname;
const monorepoRoot = path.join(projectRoot, "../../");

function getPackageIncludePaths(packageName, nodeModulePaths) {
    let packagePath = null;

    for (const nodeModulePath of nodeModulePaths) {
        const packageJsonPath = path.resolve(
            nodeModulePath,
            packageName,
            "package.json",
        );
        if (fs.existsSync(packageJsonPath)) {
            packagePath = path.dirname(packageJsonPath);
            break;
        }
    }
    if (!packagePath) {
        throw new Error(`Could not find package ${packageName}`);
    }

    return [
        path.join(packagePath, "**/*.{js,mjs}"),
        "!" + path.join(packagePath, "node_modules/**/*.{js,mjs}"),
    ];
}

const openPropsIncludePaths = getPackageIncludePaths("@stylexjs/open-props", [
    path.join(projectRoot, "node_modules"),
    path.join(monorepoRoot, "node_modules"),
]);

const dev = process.env.NODE_ENV !== "production";

const postcssConfig = {
    plugins: {
        "@stylexjs/postcss-plugin": {
            include: [
                "app/**/*.{js,jsx,ts,tsx}",
                "components/**/*.{js,jsx,ts,tsx}",
                ...openPropsIncludePaths,
            ],
            babelConfig: {
                babelrc: false,
                parserOpts: {
                    plugins: ["typescript", "jsx"],
                },
                plugins: [
                    [
                        "@stylexjs/babel-plugin",
                        {
                            dev: dev,
                            runtimeInjection: false,
                            treeshakeCompensation: true,
                            aliases: {
                                "@/*": [path.join(__dirname, "*")],
                            },
                            unstable_moduleResolution: {
                                type: "commonJS",
                            },
                        },
                    ],
                ],
            },
            useCSSLayers: true,
        },
        autoprefixer: {},
    },
};

export default postcssConfig;
