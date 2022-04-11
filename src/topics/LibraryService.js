import {makeAutoObservable} from "mobx";

export default class LibraryService{
    constructor(){
        this._lists = []
        makeAutoObservable(this)
    }
    setLists(list){
        this._lists = list
    }
    get lists(){
        return this._lists
    }


}