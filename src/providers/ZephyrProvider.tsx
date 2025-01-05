import type { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
`;

export function ZephyrProvider({ children }: { children: ReactNode }) {
	return (
		<>
			<GlobalStyle />
			{children}
		</>
	);
}
