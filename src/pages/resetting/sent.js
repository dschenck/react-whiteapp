import React          from 'react'
import { withRouter } from 'react-router-dom'
import actions        from '../../flux/actions'

class Page extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div class="h-full flex items-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1565213804504-ce974456b98b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1404&q=80')"}}>
                <div class="shadow-sm bg-white p-2 w-full md:w-4/12 mx-auto">
                    <h1 class="text-2xl text-gray-600 border-b border-gray-200 mb-2">Request sent</h1>
                    <p class="text-sm text-gray-700 mb-2 p-2 bg-gray-100">
                        You will shortly receive a link to define a new password. 
                    </p>
                </div>
            </div>
        )
    }
}

export default withRouter(Page)