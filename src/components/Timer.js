import React from 'react'

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        }
        
        console.log("constructor called")
    }
    
    componentDidMount() {
        console.log("component created")
        
        setInterval(()=>{
            this.incrementTimer()
        }, 1000)
    

    componentWillUnmount(){
        console.log("csinálunk valamit ténylegesen")
    }

    componentDidUpdate() {
        console.log("something changed")
        if (this.state.time === 5) {
            //Ez az if ebben a formában nem csinál semmit, mert a 41. sorban írtuk meg ezt, de ha komplexebb dolgot kéne csinálni, akkor azt itt kéne, nem a 41. sorban. Erre később nézünk példát majd az órán. Ez nem csinál semmit, csak megvizsgál egy feltételt. Ha megváltozik a komponens állapota, akkor történik.
        }
    }

    incrementTimer() {
        this.setState({
            time: this.state.time+1
        })
    }

    render(){
        console.log("render done")
        return (
            <>
                <div className={(this.state.time >= 5) ? "blue" : ""}>
                    {this.state.time}
                </div>
                <button onClick={()=>{this.incrementTimer()}}> Click me
                </button>
            </>
        )
    }
}

export default Timer