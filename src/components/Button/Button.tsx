import styled from "styled-components";
import { BaseStyle } from "../../styles/BaseStyle";
import { GlobalStyle } from "../../styles/GlobalStyle";

export interface ButtonProps {
	text?: string;
	borderRadius?: number;
	borderThickness?: number;
	borderColor?: string;
	backgroundColor?: string;
	padding?: [number, number, number, number]; // [top, right, bottom, left]
	margin?: number;
	minWidth?: number;
	maxWidth?: number;
	width?: number;
	height?: number;
	minHeight?: number;
	maxHeight?: number;
	textColor?: string;
}

const StyledButton = styled.button<ButtonProps>`
  ${BaseStyle}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
  ${({ width }) => width && `width: ${width}px;`}
  ${({ height }) => height && `height: ${height}px;`}
  ${({ minWidth }) => minWidth && `min-width: ${minWidth}px;`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px;`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight}px;`}
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}px;`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px;`}
  ${({ padding }) =>
		padding &&
		`padding: ${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px;`}
  ${({ margin }) => margin && `margin: ${margin}px;`}
  ${({ textColor }) => textColor && `color: ${textColor};`}

  ${({ borderThickness, borderColor }) =>
		borderThickness && borderColor
			? `border: ${borderThickness}px solid ${borderColor};`
			: "border: none;"}
`;

export function Button({
	text = "Button",
	borderRadius = 8,
	borderThickness = 0,
	borderColor,
	backgroundColor = "#77B1D4",
	padding = [8, 12, 8, 12],
	margin = 1,
	minWidth,
	maxWidth,
	width,
	height,
	minHeight,
	maxHeight,
	textColor = "white",
	...props
}: ButtonProps) {
	return (
		<>
			<GlobalStyle />
			<StyledButton
				borderRadius={borderRadius}
				borderThickness={borderThickness}
				borderColor={borderColor}
				backgroundColor={backgroundColor}
				padding={padding}
				margin={margin}
				minWidth={minWidth}
				maxWidth={maxWidth}
				width={width}
				height={height}
				minHeight={minHeight}
				maxHeight={maxHeight}
				textColor={textColor}
				{...props}
			>
				{text}
			</StyledButton>
		</>
	);
}
