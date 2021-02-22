import React from 'react'

export default class Main extends React.Component{
    render(){
        return(
            <div class="bg-gray-100 flex-grow min-w-full mx-auto">
                {this.props.children}
            </div>
        )
    }
}