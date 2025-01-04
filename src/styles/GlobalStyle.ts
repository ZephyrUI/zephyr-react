import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

	:root {
		--primary-color: #57B9FF;
		--secondary-color: #90D5FF;
		--tertiary-color-one: #77B1D4;
		--tertiary-color-two: #517891;
	}

	*,
	*::after,
	*::before {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: Inter, serif;
		font-weight: 500;
		font-size: 14px;
	}
`;