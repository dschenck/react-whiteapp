import React from 'react'
import store from '../flux/store'

const Context = React.createContext({})

class Session extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount(){
        store.on("change", () => {
            this.setState(() => {
                return {session:store.session}
            })
        })
    }
    render(){
        return(
            <Context.Provider value={this.state.session}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default { 
    Component:Session, 
    context:Context
}