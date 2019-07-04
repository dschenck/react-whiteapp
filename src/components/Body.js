import React from 'react'

class Body extends React.Component{
    render(){
        return(
            <main role="main" class="container" style={{minHeight:"80vh"}}>
                <div class="row">
                    <div class="col-12">
                        <div style={{textAlign:"center", padding:"3em"}}>
                            <h1>Bootstrap starter template</h1>
                            <p class="lead">Use this document as a way to quickly start any new project.<br/> All you get is this text and a mostly barebones HTML document.</p>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Body