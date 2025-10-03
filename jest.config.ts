import type { Config } from "jest";

const config: Config = {
    clearMocks: true,
    collectCoverage: true,
    testEnvironment: "jsdom",
};

export default config;
