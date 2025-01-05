export function isValidCssValue(value: string): boolean {
	return /^-?\d+(\.\d+)?(px|em|rem|%|vw|vh|vmin|vmax|ch|ex|in|cm|mm|pt|pc|auto|none)?$/.test(value) || value === "0";
}

export function addDefaultUnit(value: string): string {
	if (!isValidCssValue(value)) {
		console.warn(`Invalid CSS value: "${value}". It will be ignored.`);
		return '';
	} else if (/^-?\d+(\.\d+)?$/.test(value)) {
		return `${value}px`;
	}

	return value;
}

export function processArrayValues(values: string[]): string[] {
	return values.map(addDefaultUnit);
}

export function fromCamelCaseToKebabCase(text: string): string {
	return text.replaceAll(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

export function objectToStyle(propertyName: string, propertyValue: any): string {
	let style = '';

	if (propertyValue === 'Infinity' || propertyValue === undefined) {
		return style;
	}

	if (Array.isArray(propertyValue)) {
		const processedValues = processArrayValues(propertyValue as string[]);
		style += `${fromCamelCaseToKebabCase(propertyName)}: ${processedValues.join(' ')};\n`;
	} else if (typeof propertyValue === 'object' && propertyValue !== null) {
		for (const [key, value] of Object.entries(propertyValue)) {
			style += objectToStyle(key, value);
		}
	} else if (typeof propertyValue === 'string') {
		const processedValue = propertyName.toLowerCase().includes('color') ? propertyValue : addDefaultUnit(propertyValue);
		style += `${fromCamelCaseToKebabCase(propertyName)}: ${processedValue};\n`;
	}

	return style;
}

export function parseStyleProps(props: any): string {
	let style = "";
	for (const i in props) {
		style += objectToStyle(i, props[i]);
	}
	return style;
}