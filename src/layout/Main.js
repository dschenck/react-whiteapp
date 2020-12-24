import React from 'react'

export default class Main extends React.Component{
    render(){
        return(
            <div class="container mx-auto px-4 min-h-screen">
                {this.props.children}
            </div>
        )
    }
}