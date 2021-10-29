const Name = ({pp}) => {
	return(
		<span>{pp} &nbsp; &nbsp; </span>
	)
}

class Row extends React.Component {
	render() {

		console.log(this.props.all);
		return (
			<tr>
				<td class="first-col">{this.props.day}</td>
				<td class="second-col">{this.props.time}</td>
				<td class="forth-col">
					{this.props.all.map((pp) => (
						<Name pp={pp}/>
					))}
				</td>

				<td class="third-col">{this.props.todo}</td>
			</tr>
		);
	}
}

class Table extends React.Component {
	state = {
		todoList: [],
	};

	componentDidMount = () => {
		this.setState({
			todoList: JSON.parse(localStorage.getItem("todoList")),
		});
	};

	render() {
		console.log(this.state.todoList);
		return (
			<div className="col todo-table">
				<table>
					<thead>
						<tr>
							<th class="first-col">Ngày</th>
							<th class="second-col">Tiết</th>
							<th class="forth-col">Tham gia</th>

							<th class="third-col">Làm gì</th>
						</tr>
					</thead>
					<tbody>
						{this.state.todoList.map(({day,time,todo,all}, index) => {
							
							return <Row key={index} day={day} time={time} todo={todo} all={all}/>
						}
							
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

class Body extends React.Component {
	render() {
		return (
			<div class="body row ">
				<Table />
			</div>
		);
	}
}

class Container extends React.Component {
	render() {
		return (
			<div class="col-9 main-container">
				<div class="banner">
					<h2>Ghi chú</h2>
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
				<a class="btn btn-outline-primary" href="main.html" role="button">
					<i class="bi bi-house "></i>
				</a>
				<a class="btn btn-outline-primary " href="setting.html" role="button">
					<i class="bi bi-gear "></i>
				</a>

				<a class="btn btn-outline-primary active1" href="note.html" role="button">
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
