let classes = [
	{
		id: "EMPTY",
		schedule: [
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
		],
	},
	{
		id: "TOAN-1",
		schedule: [
			[1, 0, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0, 0, 0],
			[0, 0, 1, 0, 0, 0, 0],
			[0, 0, 1, 0, 0, 0, 0],
		],
	},

	{
		id: "TOAN-2",
		schedule: [
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0, 0],
		],
	},
	{
		id: "CNPM-1",
		schedule: [
			[0, 1, 0, 1, 0, 0, 0],
			[0, 1, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
		],
	},
	{
		id: "CNPM-2",
		schedule: [
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 1, 0, 1, 0, 0, 0],
			[0, 1, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
		],
	},
	{
		id: "CNPM-3",
		schedule: [
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 1, 0, 1, 0, 0, 0],
			[0, 1, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
		],
	},

	{
		id: "CNPM-4",
		schedule: [
			[0, 0, 1, 0, 1, 0, 0],
			[0, 0, 1, 0, 1, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
		],
	},

	{
		id: "CNPM-5",
		schedule: [
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 1, 0, 1, 0, 0],
			[0, 0, 1, 0, 1, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
		],
	},
];

class TableRow extends React.Component {
	state = {
		time: [
			"7:00-7:50",
			"7:55-8:45",
			"8:50-9:40",
			"9:45-10:35",
			"10:40-11:30",
			"11:35-12:20",
			"12:55-13:45",
			"13:50-14:40",
			"14:45-15:35",
			"15:40-16:30",
			"16:35-17:25",
			"17:30-18:20",
		],
	};

	chooseTime = (showTime, index) => {
		if (showTime === true) {
			return <th>{this.state.time[index]}</th>;
		} else {
			return <th>Tiết {index + 1}</th>;
		}
	};
	render() {
		return (
			<tr>
				{this.chooseTime(this.props.showTime, this.props.index)}
				<td>{this.props.lession[0]}</td>
				<td>{this.props.lession[1]}</td>
				<td>{this.props.lession[2]}</td>
				<td>{this.props.lession[3]}</td>
				<td>{this.props.lession[4]}</td>
				<td>{this.props.lession[5]}</td>
				<td>{this.props.lession[6]}</td>
			</tr>
		);
	}
}

class TableBody extends React.Component {
	render() {
		return (
			<tbody>
				{this.props.scheduleTime.map((lession, index) => (
					<TableRow
						lession={lession}
						key={index}
						index={index}
						showTime={this.props.showTime}
					/>
				))}
			</tbody>
		);
	}
}

class Table extends React.Component {
	render() {
		return (
			<div class="col-8">
				<div id="table" class="table">
					<table>
						<thead>
							<tr>
								<th>|||</th>
								<th>T2</th>
								<th>T3</th>
								<th>T4</th>
								<th>T5</th>
								<th>T6</th>
								<th>T7</th>
								<th>CN</th>
							</tr>
						</thead>

						<TableBody
							classList={this.props.classList}
							scheduleTime={this.props.scheduleTime}
							showTime={this.props.showTime}
						/>
					</table>
				</div>
			</div>
		);
	}
}

class ClassComponent extends React.Component {
	render() {
		return (
			<button class="col-12 btn btn-outline-primary class text-center">
				{this.props.groupName}
			</button>
		);
	}
}

// class ClassForm extends React.Component {
// 	render() {
// 		return (
// 			<form class="search-box" onSubmit={this.props.handleSubmit}>
// 				<input
// 					class="search-txt"
// 					type="text"
// 					name="class"
// 					id="class"
// 					placeholder="Add class"
// 				></input>
// 				<button
// 					id="addClass"
// 					class="btn btn-outline-primary"
// 					href="#"
// 					type="submit"
// 				>
// 					+
// 				</button>
// 			</form>
// 		);
// 	}
// }

class GroupNav extends React.Component {
	render() {
		return (
			<div class="group-nav row">
				<button class="col btn btn-outline-primary">Del</button>
				<button class="col btn btn-outline-primary mid">Home</button>
				<button
					type="button"
					class="btn btn-outline-primary col"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal"
				>
					Add
				</button>

				<div
					class="modal fade"
					id="exampleModal"
					tabindex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5
									class="modal-title"
									id="exampleModalLabel"
								>
									Name your new group
								</h5>

								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div class="modal-body">
								<form
									class="search-box"
									onSubmit={this.props.handleSubmit}
								>
									<input
										class="search-txt"
										type="text"
										name="class"
										id="class"
										placeholder="Your new group"
									></input>
									<button
										id="addClass"
										class="btn btn-outline-primary"
										href="#"
										type="submit"
									>
										+
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class ClassListContainer extends React.Component {
	render() {
		console.log(this.props.groupList);

		return (
			<div class="col-3">
				<GroupNav handleSubmit={this.props.handleSubmit} />
				<div id="cls-list row" className="cls-list">
					{this.props.groupList.map((groupName) => (
						<ClassComponent
							groupName={groupName}
							handleDelete={this.props.handleDelete}
						/>
					))}
				</div>
			</div>
		);
	}
}

class RightBar extends React.Component {
	render() {
		return (
			<div class="col-1 r-col">
				<button
					onClick={this.props.handleChange}
					class="btn btn-outline-primary"
					id="switch"
					value="true"
				>
					Free Time
				</button>
				<button class="btn btn-outline-primary">Same Class</button>
			</div>
		);
	}
}

class Body extends React.Component {
	state = {
		classList: ["TOAN-1", "TOAN-2", "CNPM-1"],
		showTime: false,
		groupList: ["Nhóm CNPM", "Phòng ktx", "SV tình nguyện"],
		scheduleTime: [
			[, , , , , , ,],
			[, , , , , , ,],
			[, , , , , , ,],
			[, , , , , , ,],
			[, , , , , , ,],
			[, , , , , , ,],
			[, , , , , , ,],
			[, , , , , , ,],
			[, , , , , , ,],
			[, , , , , , ,],
			[, , , , , , ,],
			[, , , , , , ,],
		],
	};

	handleChange = () => {
		let newShowTime = !this.state.showTime;
		this.setState({
			showTime: newShowTime,
		});
	};

	// nameScheduleTime = (list) => {
	// 	let scheduleNew = [
	// 		[, , , , , , ,],
	// 		[, , , , , , ,],
	// 		[, , , , , , ,],
	// 		[, , , , , , ,],
	// 		[, , , , , , ,],
	// 		[, , , , , , ,],
	// 		[, , , , , , ,],
	// 		[, , , , , , ,],
	// 		[, , , , , , ,],
	// 		[, , , , , , ,],
	// 		[, , , , , , ,],
	// 		[, , , , , , ,],
	// 	];

	// 	for (let i in list) {
	// 		let ar = classes.find((x) => x.id === list[i]).schedule;

	// 		for (let row in ar) {
	// 			for (let cell = 0; cell < 7; cell++) {
	// 				if (ar[row][cell] === 1) {
	// 					scheduleNew[row][cell] = list[i];
	// 				}
	// 			}
	// 		}
	// 	}

	// 	return scheduleNew;
	// };

	handleDelete = (nameClass) => {
		const newClassList = this.state.classList.filter(
			(x) => x != nameClass
		);

		this.setState({
			classList: newClassList,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const newGroup = e.target.elements.class.value;

		console.log(newGroup);

        let newGroupList = [...this.state.groupList,newGroup]

        console.log(newGroupList);

        this.setState({
            groupList : newGroupList
        })
	};

	render() {
		this.state.classList = JSON.parse(localStorage.getItem("classList"));
		let s = JSON.parse(localStorage.getItem("schedule"))

		return (
			<div class="body row ">
				<ClassListContainer
					groupList={this.state.groupList}
					classList={this.state.classList}
					handleSubmit={this.handleSubmit}
					handleDelete={this.handleDelete}
				/>

				<Table
					classList={this.state.classList}
					scheduleTime={s}
					showTime={this.state.showTime}
				/>
				<RightBar handleChange={this.handleChange} />
			</div>
		);
	}
}

class Container extends React.Component {
	render() {
		return (
			<div class="col-11 main-container">
				<div class="banner">
					<h2>G.E.S</h2>
				</div>
				<Body />
			</div>
		);
	}
}

class Leftbar extends React.Component {
	render() {
		return (
			<div class="col-1 side-bar">
				<a
					class="btn btn-outline-primary active1"
					href="main.html"
					role="button"
				>
					<i class="bi bi-house "></i>
				</a>
				<a
					class="btn btn-outline-primary "
					href="setting.html"
					role="button"
				>
					<i class="bi bi-gear "></i>
				</a>
			</div>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<div class="row">
				<Leftbar />
				<Container />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
