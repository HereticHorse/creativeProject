import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Title from "./Title";

import DateTimeRangePicker from "react-datetime-range-picker";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 400
	}
}));

export default function Report() {
	const classes = useStyles();
	const [value, setValue] = React.useState("Controlled");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div>
			<Title>Uusi Raportti</Title>
			<form className={classes.container} noValidate autoComplete="off">
				<div>
					<DateTimeRangePicker
						id="datetime-local"
						label="Next appointment"
						type="datetime-local"
						defaultValue="2017-05-24T10:30"
						className={classes.textField}
						InputLabelProps={{
							shrink: true
						}}
					/>
				</div>
				<div>
					<TextField
						id="filled-multiline-static"
						label="Raportti"
						multiline
						rows="4"
						defaultValue="Kirjoita raporttisi tähän"
						className={classes.textField}
						margin="flex-wrap: flex"
						variant="filled"
					/>
				</div>
			</form>
		</div>
	);
}
