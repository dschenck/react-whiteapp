import store from './store'

const confirm = prompt => {
    return new Promise(resolve => {
        store.handle({
            type:"prompts.confirm", 
            prompt:{...prompt, resolve}
        })
    })
}

const prompt = (prompt) => {
    return new Promise(resolve => {
        store.handle({
            type:"prompts.prompt", 
            prompt:{...prompt, resolve}
        })
    })
} 

const dismiss = id => {
    store.handle({
        type:"prompts.dismiss",
        id
    })
}

export default { 
    confirm,
    dismiss,
    prompt
}