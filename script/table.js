let classes = [


    {
        id : "EMPTY",
        schedule : [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ]
    },
    {
        id : "TOAN-1",
        schedule : [
            [1,0,0,0,0,0,0],
            [1,0,0,0,0,0,0],
            [1,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0],
            [0,0,1,0,0,0,0],
            [0,0,1,0,0,0,0]
        ]
    },

    {
        id : "TOAN-2",
        schedule : [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0],
            [1,0,0,0,0,0,0],
            [1,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0],
            [0,1,0,0,0,0,0],
            [0,1,0,0,0,0,0]
        ]
    },
    {
        id : "CNPM-1",
        schedule : [
            [0,1,0,1,0,0,0],
            [0,1,0,1,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ]
    },
    {
        id : "CNPM-2",
        schedule : [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,1,0,1,0,0,0],
            [0,1,0,1,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ]
    },
    {
        id : "CNPM-3",
        schedule : [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,1,0,1,0,0,0],
            [0,1,0,1,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ]
    },

    {
        id : "CNPM-4",
        schedule : [
            [0,0,1,0,1,0,0],
            [0,0,1,0,1,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ]
    },

    {
        id : "CNPM-5",
        schedule : [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,1,0,1,0,0],
            [0,0,1,0,1,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ]
    }
]

let switchButton = document.getElementById("switch")
switchButton.addEventListener("click",function(){
    
    if(this.value == "true"){
        switchButton.value = "false"
    }else{
        switchButton.value = "true"
    }

    console.log(switchButton.value);

})

class Row extends React.Component{

    render(){
        return(
            <tr>
                <th>{this.props.time}</th>
                <td>{this.props.lession[0]}</td>
                <td>{this.props.lession[1]}</td>
                <td>{this.props.lession[2]}</td>
                <td>{this.props.lession[3]}</td>
                <td>{this.props.lession[4]}</td>
                <td>{this.props.lession[5]}</td>
                <td>{this.props.lession[6]}</td>
            </tr>
        )
    }
}

class TableBody extends React.Component{


    state = {
        schedule : [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]
        ],
        scheduleTime : [
            "7h",
            "7h",
            "7h",
            "7h",
            "7h",
            "7h",
            "7h",
            "7h",
            "7h",
            "7h",
            "7h",
            "7h",
        ],
        scheduleTime2 : [
            "8h",
            "8h",
            "8h",
            "7h",
            "7h",
            "7h",
            "7h",
            "7h",
            "7h",
            "7h",
            "7h",
            "7h",
        ]

    }

    
    timeType = (index) => {

        console.log(switchButton.value);

        if(switchButton.value == "true"){
            return this.state.scheduleTime[index]
        }
        else{
            return this.state.scheduleTime2[index]
        }
     
    }

    mergeSchedule = (e) => {
        let newSchedule = [...this.state.schedule]


        // for( let i = 0 ; i < this.props.classes.length ; i++){
     
        //     let newClass = classes.find(x => x.id = this.props.classes[i] )
                    
        //         for( let r = 0 ; r < 12 ; r++){
        //             for(let c = 0 ; c < 7; c++){
        //                 if(newClass.schedule[r][c] != 0){
        //                     newSchedule[r][c] = classes[j].id
        //                 }
        //                 else{
        //                     newSchedule[r][c] = ""
        //                 }
        //             }
        //         }
            
            
        // }
        // this.setState({
        //     schedule : newSchedule
        // })
    }

    render(){
        
        this.mergeSchedule(this.props.classes)
        console.log(switchButton.value);
        return(
            <tbody>
                {this.state.schedule.map((lession,index) => 
                    <Row key={index} stt={index} time={this.timeType(index)} lession={lession} />
                )}
            </tbody>
        )
    }
}

class Table extends React.Component{

    state = {
        classList : [

        ]
    }

    // handleChange = () =>{
        
    //     function update(){
    //         this.setState({
    //             classList : JSON.parse(localStorage.getItem("classList"))
    //         })
    //     }

    //     document.getElementById("addClass").addEventListener("click",update())
    //     document.getElementById("deleteClass").addEventListener("click",update())

    // }

    render(){
        
        // this.setState({ classList : JSON.parse(localStorage.getItem("classList")) } );
        console.log(this.state.classList);
        return(
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
                
                <TableBody stt=""/>
        
            </table>
        )
    }
}


// XỬ LÝ CLASS-LIST



const ClassForm =({handleSubmit}) => {
    return(
        <form  class="search-box" onSubmit={handleSubmit}>  
            <input class="search-txt" type="text" name="class" id="class" placeholder="Add class"></input>
            <button id="addClass" class="btn btn-outline-primary" href="#" type="submit">+</button>
        </form>
    )
}


const ClassComponent = ({handleDelte,name}) => {

    return(
        <div className="class">
            <p>{name}</p>
            <button id="deleteClass" class="btn btn-outline-primary" onClick={ () => handleDelte(name) } ></button>
        </div>
    )
}


class ClassList extends React.Component{


    state = {
        classList : [
            "TOAN-1",
            "CNPM-2",
            "VE-3"
        ]
    }

    
    handleSubmit = (e) =>{

        e.preventDefault();
        const newClass = e.target.elements.class.value;

        // Doan nay lam hoi ngu
        let flag = false
        let noti = "Chưa có lớp này trong hệ thống bạn ơii"
        for( let i in classes){
            if( classes[i].id == newClass){
                flag = true;
            }
        }

        // SU DUNG LOCAL STORAGE ???


        if (this.state.classList.indexOf(newClass) != -1 ){
            flag = false
            noti = "Bạn chọn lớp này rồi bạn ơiii"
        }

        if( flag == false){
            alert(noti)
        }
        if( newClass.trim().length > 0 & flag == true  ){
            
            const newClassList = [

                ...this.state.classList,
                newClass
            ];
            
            this.setState({
                classList : newClassList
            })

            localStorage.setItem("classList", JSON.stringify(newClassList))
                
        }
    }
    
    handleDelete = (nameClass) =>{

        const newClassList = this.state.classList.filter( x => x != nameClass);


        this.setState({
            classList : newClassList    
        })       

        localStorage.setItem("classList", JSON.stringify(newClassList))


    }

    render(){

        
        return(

            <div>

                <ClassForm handleSubmit={this.handleSubmit}/>

                <div id="cls-list" className="cls-list">
                    {this.state.classList.map( (className) => (
                        <ClassComponent name={className} handleDelte={this.handleDelete} />
                    ))}
                </div>
  
                
            </div>
        )
    }
}


ReactDOM.render(<Table/>, document.getElementById("table"))
ReactDOM.render(<ClassList/>,document.getElementById("classListContainer"))