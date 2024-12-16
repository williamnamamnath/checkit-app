export interface Item {
    //The keys below refer to the getters and setters
    id: string,
    item: string,
    checked: boolean
}

export default class ListItem implements Item {

    constructor(
        private _id: string = '',
        private _item: string = '',
        private _checked: boolean = false,
    ) {} //We don't need to provide the assignments in this case as they are already defined above

    //We need to declare the getters and setters for the 3 keys defined in the Item class
    get id(): string {
        return this._id
    }

    set id(id: string) {
        this._id = id
    }

    get item(): string {
        return this._item
    }

    set item(item: string) {
        this._item = item
    }

    get checked(): boolean {
        return this._checked
    }

    set checked(checked: boolean) {
        this._checked = checked
    }
}