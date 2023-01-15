/* eslint-disable */
(function (global, factory) {
	typeof exports === "object" && typeof module !== "undefined"
		? factory(exports, require("react"))
		: typeof define === "function" && define.amd
		? define(["exports", "react"], factory)
		: ((global =
				typeof globalThis !== "undefined"
					? globalThis
					: global || self),
		  factory((global["react-custom-alert"] = {}), global.React));
})(this, function (exports, React) {
	"use strict";

	function _interopDefaultLegacy(e) {
		return e && typeof e === "object" && "default" in e
			? e
			: { default: e };
	}

	var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

	/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

	function __spreadArray(to, from, pack) {
		if (pack || arguments.length === 2)
			for (var i = 0, l = from.length, ar; i < l; i++) {
				if (ar || !(i in from)) {
					if (!ar) ar = Array.prototype.slice.call(from, 0, i);
					ar[i] = from[i];
				}
			}
		return to.concat(ar || Array.prototype.slice.call(from));
	}

	var Icon = function (_a) {
		var type = _a.type;
		switch (type) {
			case "success":
				return React__default["default"].createElement(Success, null);
			case "warning":
				return React__default["default"].createElement(Warning, null);
			case "error":
				return React__default["default"].createElement(Error, null);
			default:
				return React__default["default"].createElement(Info, null);
		}
	};
	var Success = function () {
		return React__default["default"].createElement(
			"svg",
			{
				viewBox: "64 64 896 896",
				focusable: "false",
				"data-icon": "check-circle",
				width: "1em",
				height: "1em",
				fill: "#52c41a",
				"aria-hidden": "true",
			},
			React__default["default"].createElement("path", {
				d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z",
			})
		);
	};
	var Info = function () {
		return React__default["default"].createElement(
			"svg",
			{
				viewBox: "64 64 896 896",
				focusable: "false",
				"data-icon": "info-circle",
				width: "1em",
				height: "1em",
				fill: "#1890ff",
				"aria-hidden": "true",
			},
			React__default["default"].createElement("path", {
				d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z",
			})
		);
	};
	var Warning = function () {
		return React__default["default"].createElement(
			"svg",
			{
				viewBox: "64 64 896 896",
				focusable: "false",
				"data-icon": "exclamation-circle",
				width: "1em",
				height: "1em",
				fill: "#faad14",
				"aria-hidden": "true",
			},
			React__default["default"].createElement("path", {
				d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z",
			})
		);
	};
	var Error = function () {
		return React__default["default"].createElement(
			"svg",
			{
				viewBox: "64 64 896 896",
				focusable: "false",
				"data-icon": "close-circle",
				width: "1em",
				height: "1em",
				fill: "#ff4d4f",
				"aria-hidden": "true",
			},
			React__default["default"].createElement("path", {
				d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z",
			})
		);
	};

	var AlertContainer = function (_a) {
		var _b = _a.floatingTime,
			floatingTime = _b === void 0 ? 3000 : _b,
			alertStyle = _a.alertStyle,
			containerStyle = _a.containerStyle;
		var _c = React.useState([]),
			alerts = _c[0],
			setAlerts = _c[1];
		var handler = React.useCallback(function (_a) {
			var detail = _a.detail;
			setAlerts(function (prevAlerts) {
				return __spreadArray(
					__spreadArray([], prevAlerts, true),
					[detail],
					false
				);
			});
			setTimeout(function () {
				setAlerts(function (prevAlerts) {
					return prevAlerts.slice(1, prevAlerts.length);
				});
			}, floatingTime);
		}, []);
		React.useEffect(function () {
			window.addEventListener("toastAlert", handler);
			return function () {
				window.removeEventListener("toastAlert", handler);
			};
		}, []);
		return React__default["default"].createElement(
			"div",
			{ id: `--react--toast-container`, style: containerStyle },
			alerts.map(function (_a, idx) {
				var message = _a.message,
					type = _a.type;
				return React__default["default"].createElement(
					"div",
					{
						className: `--react--toast-alert-${_a.type}`,
						key: idx,
						style: alertStyle,
					},
					React__default["default"].createElement(Icon, {
						type: type,
					}),
					React__default["default"].createElement("p", null, message)
				);
			})
		);
	};

	var alert = function (detail) {
		window.dispatchEvent(
			new CustomEvent("toastAlert", {
				detail: detail,
			})
		);
	};

	exports.AlertContainer = AlertContainer;
	exports.alert = alert;

	Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=index.js.map
