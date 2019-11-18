import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Title from "./Title";
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

import DateTimeRangePicker from "react-datetime-range-picker";
import { Button } from "@material-ui/core";

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

function save() {
	alert("hyvää työtä!")
}

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

			</form>

			<Button
				variant="contained"
				color="primary"
				size="large"
				className={classes.button}
				startIcon={<SaveIcon />}
				onClick={save}
			>
				Tallenna
      </Button>
		</div>
	);
}
