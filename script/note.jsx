

const Table = () => {



    
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
					Note
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
				
                <Table/>

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

				<a
					class="btn btn-outline-primary"
					href="note.html"
					role="button"
				>
					<i class="bi bi-card-text"></i>
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
