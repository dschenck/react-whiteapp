import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'

import './index.css'

import * as Layout from './Layout'
import * as Pages  from './pages'

class App extends React.Component {
    render(){
        return(
            <Router>
                <div class="bg-gray-200 min-h-screen">
                    <Layout.Navbar />
                    <Layout.Main>
                        <Route path="/" exact component={Pages.Home} />
                        <Route path="/layout" exact component={Pages.Layout} />
                        <Route path="/utilities" exact component={Pages.Utilities} />
                        <Route path="/tree" component={Pages.Tree} />
                        <Route path="/sandbox" component={Pages.Sandbox} />
                        <Route path="/contact" component={Pages.Contact} />
                    </Layout.Main>
                    <Layout.Footer />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById("root")
)