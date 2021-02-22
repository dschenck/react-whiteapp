import dispatcher from './dispatcher'
import apis       from '../apis'

const authentication = {
    register:(user) => {
        return apis.register(user).then(response => {
            dispatcher.dispatch({
                type:"authentication.registered", 
                user:response.data
            })
            return Promise.resolve(response)
        }).catch(response => {
            return Promise.reject(response)
        })
    },
    login:(credentials) => {
        return apis.auth.authenticate(credentials).then(response => {
            dispatcher.dispatch({
                type:"authentication.authenticated",
                user:response.data
            })
            return Promise.resolve(response)
        }).catch(response => {
            return Promise.reject(response)
        })
    },
    logout:() => {
        dispatcher.dispatch({
            type:"authentication.unauthenticated"
        })
        return Promise.resolve()
    },
    resetting:{
        request:(request) => {
            return apis.auth.resetting.request(request).then(response => {
                return Promise.resolve({})
            }).catch(response => {
                return Promise.reject(response)
            })
        }, 
        reset:(credentials) => {
            return apis.auth.resetting.reset(credentials).then(response => {
                dispatcher.dispatch({
                    type:"authentication.authenticated",
                    user:response.data
                })
                return Promise.resolve(response)
            }).catch(response => {
                return Promise.reject(response)
            })
        }
    }
}

export default { 
    authentication
}