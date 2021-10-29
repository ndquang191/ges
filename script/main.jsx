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

let user = [
	{
		id: 1001,
		name: "Tu Anh",
		classes: ["TOAN-1", "CNPM-3"],
	},
	{
		id: 1002,
		name: "Trang",
		classes: ["TOAN-1", "TOAN-2", "CNPM-1", "CNPM-2"],
	},
	{
		id: 1003,
		name: "Yen",
		classes: ["TOAN-1", "TOAN-2", "CNPM-1", "CNPM-2"],
	},
	{
		id: 1004,
		name: "Tam",
		classes: ["TOAN-1", "TOAN-2", "CNPM-3", "CNPM-4"],
	},
	{
		id: 1005,
		name: "Tan",
		classes: ["TOAN-1", "TOAN-2", "CNPM-3", "CNPM-4"],
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
				<td className={this.props.colorCodeRow[0]} id="cell">
					{this.props.lession[0]}
				</td>
				<td className={this.props.colorCodeRow[1]} id="cell">
					{this.props.lession[1]}
				</td>
				<td className={this.props.colorCodeRow[2]} id="cell">
					{this.props.lession[2]}
				</td>
				<td className={this.props.colorCodeRow[3]} id="cell">
					{this.props.lession[3]}
				</td>
				<td className={this.props.colorCodeRow[4]} id="cell">
					{this.props.lession[4]}
				</td>
				<td className={this.props.colorCodeRow[5]} id="cell">
					{this.props.lession[5]}
				</td>
				<td className={this.props.colorCodeRow[6]} id="cell">
					{this.props.lession[6]}
				</td>
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
						colorCodeRow={this.props.colorCode[index]}
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
							colorCode={this.props.colorCode}
						/>
					</table>
				</div>
			</div>
		);
	}
}

const Memberlist = ({ groupName, member, addMember, checkedMember }) => {
	return (
		<div className="member-list" id={groupName}>
			{member.map(({ id, name, checked }) => {
				return (
					<button className="col-12 member text-center btn btn-outline-primary">
						<input
							type="checkbox"
							onChange={() =>
								checkedMember(name, groupName)
							}
						></input>
						{name}
					</button>
				);
			})}

			<form className="add-member" onSubmit={(e) => addMember(e)}>
				<div class="row">
					<input type="text" id="member-name" class="col-5" />
					<input type="number" id="member-id" class="col-3" />
					<button
						type="submit"
						className="col-3 btn btn-outline-primary"
					>
						+
					</button>
				</div>
			</form>
		</div>
	);
};

const ClassComponent = ({
	groupName,
	openGroup,
	member,
	checkedMember,
	addMember,
}) => {
	return (
		<div>
			<button
				class="group-list col-12 btn btn-outline-primary class text-center"
				onClick={() => {
					openGroup(groupName);
				}}
			>
				{groupName}
			</button>
			<Memberlist
				addMember={addMember}
				member={member}
				groupName={groupName}
				checkedMember={checkedMember}
			/>
		</div>
	);
};

class ClassListContainer extends React.Component {
	render() {
		return (
			<div class="col-3">
				<GroupNav
					handleSubmit={this.props.handleSubmit}
					openMenu={this.props.openMenu}
				/>
				<div id="cls-list" className="cls-list">
					<div class="row">
						{this.props.groupList.map((group) => (
							<ClassComponent
								addMember={this.props.addMember}
								openGroup={this.props.openGroup}
								groupName={group.groupName}
								handleDelete={this.props.handleDelete}
								member={group.member}
								checkedMember={this.props.checkedMember}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

class GroupNav extends React.Component {
	render() {
		return (
			<div class="group-nav row">
				<button class="col btn btn-outline-primary">Del</button>
				<button
					class="col btn btn-outline-primary mid"
					onClick={this.props.openMenu}
				>
					Home
				</button>
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

class RightBar extends React.Component {

	render() {
		return (
			<div class="col-1 r-col">
				<button
					onClick={this.props.changeShowFree}
					class="btn btn-outline-primary"
					id="free"
				>
					Free Time
				</button>
				<button
					class="btn btn-outline-primary"
					id="same"
				>
					Same Class
				</button>
			</div>
		);
	}
}

class Body extends React.Component {
	state = {
		classList: ["TOAN-1", "TOAN-2", "CNPM-1"],
		showTime: false,
		showSame: false,
		showFree: false,
		groupList: [
			{
				groupName: "KTX",
				showMemember: true,
				member: [
					{
						id: 1,
						name: "Tam",
						checked: false,
					},
					{
						id: 2,
						name: "Yen",
						checked: false,
					},
					{
						id: 3,
						name: "Trang",
						checked: false,
					},
				],
			},
			{
				showMemember: false,
				groupName: "Nhom CNPM",
				member: [
					{
						id: 4,
						name: "Tan",
						checked: false,
					},
					{
						id: 5,
						name: "Tu Anh",
						checked: false,
					},
				],
			},
		],
		scheduleTime: [
			[" ", " ", " ", " ", " ", " ", " "],
			["", "", "", "", "", "", ""],
			["", "", "", "", "", "", ""],
			["", "", "", "", "", "", ""],
			["", "", "", "", "", "", ""],
			["", "", "", "", "", "", ""],
			["", "", "", "", "", "", ""],
			["", "", "", "", "", "", ""],
			["", "", "", "", "", "", ""],
			["", "", "", "", "", "", ""],
			["", "", "", "", "", "", ""],
			["", "", "", "", "", "", ""],
		],
	};

	componentDidUpdate = () => {
		let groupList = this.state.groupList;
		let mems = [];
		groupList.forEach(({ member }) => {
			member.forEach((pp) => {
				if (pp.checked) {
					mems.push(pp.name);
				}
			});
		});

		// 0 la original
		// 1 la van dang ranh
		// 2 = Ten mon
		// 3 da lech nhau va k the sua

		let allClass = [JSON.parse(localStorage.getItem("classList"))];

		let schedule = JSON.parse(localStorage.getItem("schedule"));

		mems.forEach((mem) => {
			let list = user.find((i) => i.name === mem).classes;
			allClass.push(list);
			for (let i in list) {
				let ar = classes.find((x) => x.id === list[i]).schedule;

				for (let row in ar) {
					for (let cell = 0; cell < 7; cell++) {
						if (ar[row][cell] == 1) {
							if (
								schedule[row][cell] == 0 ||
								schedule[row][cell] == list[i]
							) {
								schedule[row][cell] = list[i];
							} else {
								schedule[row][cell] = 3;
							}
						}
					}
				}
			}
		});

		let sameClass = [];

		if (allClass.length != 0) {
			sameClass = allClass.reduce((final, render) => {
				return final.filter((value) => render.includes(value));
			});
		}

		for (let row in schedule) {
			for (let cell = 0; cell < 7; cell++) {
				if (sameClass.includes(schedule[row][cell])) {
					schedule[row][cell] = "S";
				} else {
					if (schedule[row][cell] == 0) {
						schedule[row][cell] = "F";
					} else {
						schedule[row][cell] = "x";
					}
				}
			}
		}

		return schedule;
	};

	changeShowFree = () => {

		let s = !this.state.showFree
		this.setState({
			showFree : s
		});

		console.log("haha");

		if(this.state.showFree == true){

			let cells = Array.from(document.getElementById("cell"))

			console.log(cells);
		}
	};


	// Cần hoàn thiện chỗ nyaf
	addMember = (e) => {
		e.preventDefault();
	};

	openMenu = () => {
		let arr = Array.from(document.getElementsByClassName("group-list"));

		for (let i = 0; i < arr.length; i++) {
			arr[i].style.display = "block";
		}

		let group = Array.from(
			document.getElementsByClassName("member-list")
		);

		for (let i = 0; i < arr.length; i++) {
			group[i].style.display = "none";
		}
	};

	openGroup = (groupName) => {
		let group = document.getElementById(groupName);
		group.style.display = "block";

		let arr = Array.from(document.getElementsByClassName("group-list"));

		for (let i = 0; i < arr.length; i++) {
			arr[i].style.display = "none";
		}
	};

	checkedMember = (name, groupName) => {
		this.setState((prev) => {
			const groupList = [...prev.groupList];

			const i = groupList.findIndex((i) => i.groupName === groupName);
			const index = groupList[i].member.findIndex(
				(i) => i.name === name
			);

			let mem = groupList[i].member[index];

			mem.checked = !mem.checked;
			groupList[i].member.splice(index, 1, mem);

			return {
				...prev,
				groupList,
			};
		});
	};

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

		let newGroupList = [
			...this.state.groupList,
			{
				groupName: newGroup,
				member: [],
			},
		];

		this.setState({
			groupList: newGroupList,
		});
	};

	render() {
		this.state.classList = JSON.parse(localStorage.getItem("classList"));

		let s = JSON.parse(localStorage.getItem("schedule"));

		let colorCode = this.componentDidUpdate();
		return (
			<div class="body row ">
				<ClassListContainer
					addMember={this.addMember}
					openMenu={this.openMenu}
					openGroup={this.openGroup}
					groupList={this.state.groupList}
					classList={this.state.classList}
					handleSubmit={this.handleSubmit}
					handleDelete={this.handleDelete}
					checkedMember={this.checkedMember}
				/>

				<Table
					classList={this.state.classList}
					scheduleTime={s}
					showTime={this.state.showTime}
					colorCode={colorCode}
				/>
				<RightBar
					changeShowFree={this.changeShowFree}
				/>
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
