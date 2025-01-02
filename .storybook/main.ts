import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
		"@storybook/addon-designs",
		"@storybook/addon-storysource",
		"@storybook/addon-themes",
		"@storybook/test-runner",
		"storybook-dark-mode"
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
};
export default config;
