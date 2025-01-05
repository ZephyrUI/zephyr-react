import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		text: {
			description: "Text to display inside the button.",
			defaultValue: "Button",
			control: "text",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "Button" },
			},
		},
		borderRadius: {
			description: "Radius of the button corners in pixels.",
			defaultValue: "8px",
			control: "text",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "8px" },
			},
		},
		borderWidth: {
			description: "Thickness of the button border in pixels.",
			defaultValue: "0",
			control: "text",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "0" },
			},
		},
		borderColor: {
			description: "Color of the button border.",
			defaultValue: "transparent",
			control: "color",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "transparent" },
			},
		},
		backgroundColor: {
			description: "Background color of the button.",
			defaultValue: "#77B1D4",
			control: "color",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "#77B1D4" },
			},
		},
		padding: {
			description:
				"Padding inside the button specified as [top, right, bottom, left] in pixels.",
			defaultValue: ["8px", "8px", "8px", "8px"],
			control: "object",
			table: {
				type: { summary: "array | string" },
				defaultValue: { summary: "['8px', '12px', '8px', '12px']" },
			},
		},
		margin: {
			description: "Margin outside the button in pixels.",
			defaultValue: 0,
			control: "object",
			table: {
				type: { summary: "array | string" },
				defaultValue: { summary: "0" },
			},
		},
		dimensions: {
			description: "Object containing width, height, and size constraints.",
			defaultValue: {
				minWidth: "0",
				maxWidth: "Infinity",
				width: undefined,
				height: undefined,
				minHeight: "0",
				maxHeight: "Infinity",
			},
			control: "object",
			table: {
				type: { summary: "object" },
				defaultValue: {
					summary: `{
        minWidth: '0',
        maxWidth: 'Infinity',
        width: undefined,
        height: undefined,
        minHeight: '0',
        maxHeight: 'Infinity',
      }`,
				},
			},
		},
		color: {
			description: "Color of the button text.",
			defaultValue: "white",
			control: "color",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "white" },
			},
		},
	},
	args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Rounded: Story = {
	args: {
		text: "Rounded Button",
		borderRadius: "24px",
	},
};

export const Bordered: Story = {
	args: {
		text: "Bordered Button",
		borderWidth: "2px",
		borderColor: "#007BFF",
	},
};

export const CustomDimensions: Story = {
	args: {
		text: "Custom Size",
		dimensions: { width: "150px", height: "50px" },
		borderRadius: "16px",
		backgroundColor: "#28A745",
	},
};

export const TransparentBackground: Story = {
	args: {
		text: "Transparent",
		backgroundColor: "transparent",
		color: "#DC3545",
		borderWidth: "1px",
		borderColor: "#DC3545",
	},
};
