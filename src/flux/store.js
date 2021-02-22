import { EventEmitter } from 'events'
import dispatcher       from './dispatcher'

class Store extends EventEmitter{
    handles(event){
        switch(event.type){
            case "authentication.registered":
                this.session = {user:event.user}
                this.emit("change")
                break
            case "authentication.authenticated":
                this.session = {user:event.user}
                this.emit("change")
                break
            case "authentication.unauthenticated":
                this.session = undefined
                this.emit("change")
                break
        }
    }
}

const store = new Store()
dispatcher.register(store.handles.bind(store))

export default store
