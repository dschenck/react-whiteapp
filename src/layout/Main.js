import React from 'react'

export default class Main extends React.Component{
    render(){
        return(
            <div class="container mx-auto">
                {this.props.children}
            </div>
        )
    }
}