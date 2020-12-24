const strategies = [
    {"name":"Strategy A"},
    {"name":"Strategy B"},
    {"name":"Strategy C"},
    {"name":"Strategy D"},
    {"name":"Strategy E"},
    {"name":"Strategy F"}
]

const operators = [
    {"name":"Operator Q"},
    {"name":"Operator R"},
    {"name":"Operator S"},
    {"name":"Operator T"}
]

const project = [{
    type:"operator",
    name:"Operation R",
    children:[]
},{
    type:"operator",
    name:"Operator Q",
    children:[
        {
            type:"strategy",
            name:"Strategy A"
        },
        {
            type:"strategy",
            name:"Strategy B"
        },
        {
            type:"operator",
            name:"Operator R",
            children:[
                {
                    type:"strategy",
                    name:"Strategy C"
                },
                {
                    type:"strategy",
                    name:"Strategy D"
                },
                {
                    type:"operator",
                    name:"Operator S",
                    children:[
                        {
                            type:"strategy",
                            name:"Strategy E"
                        },
                        {
                            type:"strategy",
                            name:"Strategy F"
                        }
                    ]  
                }
            ]  
        },
        {
            type:"operator",
            name:"Operator R",
            children:[
                {
                    type:"strategy",
                    name:"Strategy C"
                },
                {
                    type:"strategy",
                    name:"Strategy D"
                },
                {
                    type:"operator",
                    name:"Operator S",
                    children:[
                        {
                            type:"strategy",
                            name:"Strategy E"
                        },
                        {
                            type:"strategy",
                            name:"Strategy F"
                        }
                    ]  
                }
            ]  
        }
    ]
}]

export default {
    strategies, 
    operators, 
    project
}