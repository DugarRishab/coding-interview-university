import React, { useEffect } from "react";
import {
	Box,
	Paper,
	Stack,
	Typography,
	Chip,
	Divider,
	TextField,
	InputAdornment,
	Button,
	Avatar,
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Checkbox,
} from "@mui/material";
import "./style.css";
import { markComplete } from "../services/api";
import { alert } from "../components/CustomAlert/alert";
import { useState } from "react";

const Flutter = ({ user }) => {
	const handleLinkClick = () => {};
	const { innerWidth: width, innerHeight: height } = window;

	const [checked, setChecked] = useState(Array(500).fill(false));

	const handleCheckClick = async function (e) {
		const copyChecked = [...checked];
		copyChecked[+e.target.id] = e.target.checked;
		// console.log(checked, copyChecked);
		setChecked(copyChecked);
		try {
			await markComplete({
				taskId: e.target.id,
				status: e.target.checked,
				cat: 'flutter'
			});
			// console.log(e.target.id);

			// alert({ message: "Item marked complete", type: "success" });
		} catch (err) {
			alert({ message: err.response.data.message, type: "error" });
		}
	};

	useEffect(() => {
		if (user) {
			const copyChecked = [...checked];
			user.tasks.forEach((task) => {
				if (task.cat === 'flutter') {
					copyChecked[+task.id] = task.status;
				}
				
			});
			setChecked(copyChecked);
			// console.log("updated Check => ", checked);
		}
	}, [user]);

	return (
		<div className="flutter">
			<div className="content">
				<h1 id="coding-interview-university">
					Coding Interview University
				</h1>
				<h3 id="flutter-checklist">Flutter checklist</h3>
				Copied from the video by FreeCodeCamp:{" "}
				<a href="https://www.youtube.com/watch?v=VPvVD8t02U8&t=35s">
					https://www.youtube.com/watch?v=VPvVD8t02U8&t=35s
				</a>
				<ul>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="1"
							checked={checked[1]}
							size="medium"
						/>{" "}
						<a href="#">
							What Powers Instagram: Hundreds of Instances, Dozens
							of Technologies
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="2"
							checked={checked[2]}
							size="medium"
						/>{" "}
						⌨️ (00:00:00) Introduction
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="3"
							checked={checked[3]}
							size="medium"
						/>{" "}
						⌨️ (00:02:57) Developer Accounts
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="4"
							checked={checked[4]}
							size="medium"
						/>{" "}
						⌨️ (00:39:12) Setup
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="5"
							checked={checked[5]}
							size="medium"
						/>{" "}
						⌨️ (01:14:42) Introduction to Dart
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="6"
							checked={checked[6]}
							size="medium"
						/>{" "}
						⌨️ (02:01:26) Dart Control Statements and Collections
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="7"
							checked={checked[7]}
							size="medium"
						/>{" "}
						⌨️ (02:46:44) Sound Null safety in Dart
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="8"
							checked={checked[8]}
							size="medium"
						/>{" "}
						⌨️ (03:27:12) Dart Enumerations, Classes and Objects
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="9"
							checked={checked[9]}
							size="medium"
						/>{" "}
						⌨️ (04:18:36) Advanced Dart
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="10"
							checked={checked[10]}
							size="medium"
						/>{" "}
						⌨️ (05:00:41) Project Setup
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="11"
							checked={checked[11]}
							size="medium"
						/>{" "}
						⌨️ (05:48:30) iOS App Setup
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="12"
							checked={checked[12]}
							size="medium"
						/>{" "}
						⌨️ (06:59:32) Android App Setup
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="13"
							checked={checked[13]}
							size="medium"
						/>{" "}
						⌨️ (07:31:31) Firebase Backend Setup
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="14"
							checked={checked[14]}
							size="medium"
						/>{" "}
						⌨️ (08:01:20) Basic Registration Screen
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="15"
							checked={checked[15]}
							size="medium"
						/>{" "}
						⌨️ (09:04:54) Login View
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="16"
							checked={checked[16]}
							size="medium"
						/>{" "}
						⌨️ (09:53:10) Separating App Initialization from Login
						and Register Screens
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="17"
							checked={checked[17]}
							size="medium"
						/>{" "}
						⌨️ (10:19:47) Setting up Git and GitHub
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="18"
							checked={checked[18]}
							size="medium"
						/>{" "}
						⌨️ (11:10:34) Email Verification View
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="19"
							checked={checked[19]}
							size="medium"
						/>{" "}
						⌨️ (11:44:45) Link Between Login and Register Views
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="20"
							checked={checked[20]}
							size="medium"
						/>{" "}
						⌨️ (12:18:01) Logout View
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="21"
							checked={checked[21]}
							size="medium"
						/>{" "}
						⌨️ (13:13:46) Go From Login to Notes View
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="22"
							checked={checked[22]}
							size="medium"
						/>{" "}
						⌨️ (13:36:43) Cleaning Up our Routes
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="23"
							checked={checked[23]}
							size="medium"
						/>{" "}
						⌨️ (13:51:17) Error Handling in Login View
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="24"
							checked={checked[24]}
							size="medium"
						/>{" "}
						⌨️ (14:16:21) Error Handling in Register View, Next
						Screen After Registration
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="25"
							checked={checked[25]}
							size="medium"
						/>{" "}
						⌨️ (14:44:45) Confirming Identity Before Going to Main
						UI
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="26"
							checked={checked[26]}
							size="medium"
						/>{" "}
						⌨️ (14:52:21) Auth Service
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="27"
							checked={checked[27]}
							size="medium"
						/>{" "}
						⌨️ (15:55:22) Migrating to Auth Service
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="28"
							checked={checked[28]}
							size="medium"
						/>{" "}
						⌨️ (16:33:41) Unit Testing our AuthService
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="29"
							checked={checked[29]}
							size="medium"
						/>{" "}
						⌨️ (17:43:42) CRUD Local Storage
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="30"
							checked={checked[30]}
							size="medium"
						/>{" "}
						⌨️ (19:30:57) Working with Streams in Notes Service
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="31"
							checked={checked[31]}
							size="medium"
						/>{" "}
						⌨️ (20:04:32) Preparing Notes View to Read All Notes
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="32"
							checked={checked[32]}
							size="medium"
						/>{" "}
						⌨️ (20:39:21) Preparing to Create New Notes
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="33"
							checked={checked[33]}
							size="medium"
						/>{" "}
						⌨️ (21:00:16) Creating New Notes
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="34"
							checked={checked[34]}
							size="medium"
						/>{" "}
						⌨️ (21:35:42) Displaying Notes in Notes View
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="35"
							checked={checked[35]}
							size="medium"
						/>{" "}
						⌨️ (21:56:04) Deleting Existing Notes in Notes View
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="36"
							checked={checked[36]}
							size="medium"
						/>{" "}
						⌨️ (22:40:46) Updating Existing Notes
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="37"
							checked={checked[37]}
							size="medium"
						/>{" "}
						⌨️ (23:14:12) Protecting NotesService with Current User
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="38"
							checked={checked[38]}
							size="medium"
						/>{" "}
						⌨️ (23:40:44) Writing Notes to Cloud Firestore
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="39"
							checked={checked[39]}
							size="medium"
						/>{" "}
						⌨️ (24:58:08) Migrating to our Firestore Service
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="40"
							checked={checked[40]}
							size="medium"
						/>{" "}
						⌨️ (25:22:35) Sharing Notes
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="41"
							checked={checked[41]}
							size="medium"
						/>{" "}
						⌨️ (25:37:43) Introduction to Bloc
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="42"
							checked={checked[42]}
							size="medium"
						/>{" "}
						⌨️ (26:24:31) Converting our Auth Process to Bloc
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="43"
							checked={checked[43]}
							size="medium"
						/>{" "}
						⌨️ (27:31:17) Handling Auth Bloc Exceptions During Login
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="44"
							checked={checked[44]}
							size="medium"
						/>{" "}
						⌨️ (28:52:45) Moving to Bloc for Routing and Dialogs
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="45"
							checked={checked[45]}
							size="medium"
						/>{" "}
						⌨️ (28:58:23) Loading Screens
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="46"
							checked={checked[46]}
							size="medium"
						/>{" "}
						⌨️ (29:48:31) Final Touches Before App Release
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="47"
							checked={checked[47]}
							size="medium"
						/>{" "}
						⌨️ (30:43:03) App Icons and App Name
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="48"
							checked={checked[48]}
							size="medium"
						/>{" "}
						⌨️ (31:06:34) Splash Screen
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="49"
							checked={checked[49]}
							size="medium"
						/>{" "}
						⌨️ (31:56:58) Sending our iOS app to App Store Connect
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="50"
							checked={checked[50]}
							size="medium"
						/>{" "}
						⌨️ (32:55:44) Releasing our iOS App
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="51"
							checked={checked[51]}
							size="medium"
						/>{" "}
						⌨️ (33:20:31) Fixing Firebase Security Rules and
						Resubmitting the iOS App
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="52"
							checked={checked[52]}
							size="medium"
						/>{" "}
						⌨️ (33:50:07) Releasing our Android App
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="53"
							checked={checked[53]}
							size="medium"
						/>{" "}
						⌨️ (34:55:19) Localization in Flutter
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="54"
							checked={checked[54]}
							size="medium"
						/>{" "}
						⌨️ (36:33:57) Outro
					</li>
				</ul>
				;
			</div>
		</div>
	);
};

export default Flutter;
