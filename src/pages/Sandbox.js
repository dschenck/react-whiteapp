import React from 'react' 
import Clipboard from 'clipboard'

export default class Page extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tableref: React.createRef()
        }
    }
    copy(){
        //console.log(this.state.tableref.current)

        const range = document.createRange();
        const selection = window.getSelection();
        selection.removeAllRanges();
        
        try {
            range.selectNodeContents(this.state.tableref.current);
            selection.addRange(range);
        } 
        catch (e) {
            range.selectNode(this.state.tableref.current);
            selection.addRange(range);
        }
        document.execCommand('Copy');
        selection.removeAllRanges()

    }
    render(){
        return (
            <div>
                <div class="bg-white p-2 border border-gray-200 w-1/2 mx-auto mb-2">
                    <button onClick={this.copy.bind(this)}>copy</button>
                    <table ref={this.state.tableref}>
                        <thead>
                            <tr>
                                <td>header</td>
                                <td>header</td>
                                <td>header</td>
                                <td>header</td>
                                <td>header</td>
                                <td>header</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1,2,3,4,5,6,7,8,9,10].map(i => {
                                    return(
                                        <tr key={i}>
                                            <td>row {i}</td>
                                            <td>row {i}</td>
                                            <td>row {i}</td>
                                            <td>row {i}</td>
                                            <td>row {i}</td>
                                            <td>row {i}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}