import styled from "styled-components";
import { BaseStyle } from "../../styles/BaseStyle";
import { parseStyleProps } from "../../utils/helpers";

export interface ButtonStyleProps {
	borderRadius?: string;
	borderWidth?: string;
	borderColor?: string;
	backgroundColor?: string;
	padding?: [string, string, string, string] | string;
	margin?: [string, string, string, string] | string;
	dimensions?: {
		minWidth?: string;
		maxWidth?: string;
		width?: string;
		height?: string;
		minHeight?: string;
		maxHeight?: string;
	};
	color?: string;
}

export interface ButtonProps extends ButtonStyleProps {
	text?: string;
	isEnabled?: boolean;
	type?: "button" | "submit" | "reset";
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DEFAULT_STYLE_PROPS: Required<ButtonStyleProps> = {
	borderRadius: "8px",
	borderWidth: "0",
	borderColor: "transparent",
	backgroundColor: "#77B1D4",
	padding: ["8px", "12px", "8px", "12px"],
	margin: "0",
	dimensions: {
		minWidth: "0",
		maxWidth: "Infinity",
		width: undefined,
		height: undefined,
		minHeight: "0",
		maxHeight: "Infinity",
	},
	color: "white",
};

const StyledButton = styled.button<{ $styleProps: ButtonStyleProps }>`
  ${BaseStyle}
  ${({ $styleProps }) => parseStyleProps($styleProps)}
  &:hover {
	background-color: #57B9FF;
	cursor: pointer;
  }

  &:active {
	background-color: #90D5FF;
  }

  &:disabled {
	background-color: #D3D3D3;
	cursor: not-allowed;
  }
`;

export function Button({
	text = "Button",
	onClick,
	isEnabled = true,
	type = "button",
	...styleProps
}: ButtonProps) {
	const mergedStyleProps = {
		...DEFAULT_STYLE_PROPS,
		...styleProps,
		dimensions: {
			...DEFAULT_STYLE_PROPS.dimensions,
			...(styleProps.dimensions || {}),
		},
	};

	return (
		<>
			<StyledButton
				onClick={onClick}
				$styleProps={mergedStyleProps}
				type={type}
				disabled={!isEnabled}
			>
				{text}
			</StyledButton>
		</>
	);
}
