import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.render(
	<div>
		<GlobalStyle />
		<App />
	</div>,
	document.getElementById("root")
);
