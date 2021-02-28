import React   from 'react'
import store   from './store'
import actions from './actions'
import utils   from '../../utilities'

class Prompt extends React.Component{
    onClick(e){
        this.props.resolve(e)
        actions.dismiss(this.props.id)
    }
    render(){
        return(
            <div class="bg-white border border-gray-300 p-2 w-full">
                <utils.If test={this.props.title}>
                    <h1 class="font-bold border-b border-gray-200">
                        {this.props.title}
                    </h1>
                </utils.If>
                <p class="mb-4 py-4 border-b border-gray-200">{this.props.message}</p>
                <div class="flex justify-between text-sm">
                    <button 
                        class="w-24 p-1 border mx-1 focus:outline-none" 
                        onClick={() => this.onClick("no")}>
                        no
                    </button>
                    <button 
                        class="w-24 p-1 border mx-1 focus:outline-none" 
                        onClick={() => this.onClick("yes")}>
                        yes
                    </button>
                </div>
            </div>
        )
    }
}

export default class Component extends React.Component{
    constructor(props){
        super(props)
        this.state = {prompts:[]}
    }
    componentDidMount(){
        store.on("change", () => {
            this.setState(() => {
                return {prompts:store.prompts || []}
            })
        })
    }
    render(){
        if(this.state.prompts.length == 0){
            return null
        }

        const prompts = this.state.prompts.map((prompt, i) => {
            return <Prompt {...prompt} key={prompt.id} />
        })

        return(
            <div class="flex absolute w-full h-full z-40 bg-gray-800 bg-opacity-50">
                <div class="mx-auto my-auto w-1/3">
                    {prompts}
                </div>
            </div>
        )
    }
}