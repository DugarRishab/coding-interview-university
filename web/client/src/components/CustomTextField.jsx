import React from "react";
import { TextField } from "@mui/material";

const CustomTextField = ({ label, onInput, InputProps, fullWidth, type, helperText, error, value, placeholder }) => {
	return (
		<TextField
			id="outlined-basic"
			label={label}
			onInput={onInput}
			variant="outlined"
			fullWidth={fullWidth}
			value={value}
			InputProps={InputProps}
			type={type}
			helperText={helperText}
			error={error}
			placeholder={placeholder}
			sx={{
				mt: "00px",
				mr: "00px",
				color: "white !important",

				"& .MuiOutlinedInput-root": {
					"& fieldset": {
						borderColor: "rgb(150, 150, 150)",
						color: "white",
						height: "60px",
						borderRadius: "5px",
					},
					"&:hover fieldset": {
						// borderColor: "#ff5252",
					},
					"&:focus fieldset": {
						// borderColor: "#ff5252",
					},
				},
				"& .MuiInputLabel-root": {
					color: "rgb(150, 150, 150)",
				},
				"& .MuiOutlinedInput-input": {
					color: "white",
					bgcolor: "var(--bg)",
					border: "0px solid red",
					height: "100%",
				},
			}}
		/>
	);
};

export default CustomTextField;
