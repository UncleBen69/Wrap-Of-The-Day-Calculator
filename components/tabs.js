const wraps = [
	["Monday", "Veggie"],
	["Tuesday", "Garlic"],
	["Wednesday", "Spicy Chicken"],
];

class Tabs extends React.Component {
	constructor(props) {
		super(props);
		// This should be dynamic. The current day.
		this.state = {
			day: "Monday",
			wrap: "Veggie",
		};
	}

	changeDay(newDay, newWrap) {
		this.setState({
			day: newDay,
			wrap: newWrap,
		});
	}

	render() {
		return (
			<>
				{/* Buttons */}
				<div className="tab">
					{wraps.map((day, key) => (
						<button
							className="tablinks"
							key={key}
							onClick={() => this.changeDay(day[0], day[1])}
							/* Need to add conditional active class */
						>
							{day[0]}
						</button>
					))}
				</div>

				<Content day={this.state.key} wrap={this.state.wrap} />

				<style jsx global>{`
					.tab {
						overflow: hidden;
						border: 1px solid #ccc;
						background-color: #f1f1f1;
					}

					/* Style the buttons that are used to open the tab content */
					.tab button {
						background-color: inherit;
						float: left;
						border: none;
						outline: none;
						cursor: pointer;
						padding: 14px 16px;
						transition: 0.3s;
					}

					/* Change background color of buttons on hover */
					.tab button:hover {
						background-color: #ddd;
					}

					/* Create an active/current tablink class */
					.tab button.active {
						background-color: #ccc;
					}

					/* Style the tab content */
					.tabcontent {
						padding: 6px 12px;
						border: 1px solid #ccc;
						border-top: none;
					}
				`}</style>
			</>
		);
	}
}

class Content extends React.Component {
	render() {
		return (
			<div className="tabcontent">
				<h3>{this.props.day}</h3>
				<h3>{this.props.wrap}</h3>
			</div>
		);
	}
}

export default Tabs;
