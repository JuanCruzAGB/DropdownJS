import { Icon } from "./Icon.js";

/**
 * * Dropdown makes an excellent dropdown.
 * @export
 * @class Dropdown
 */
export class Dropdown{
    /**
     * * Creates an instance of Dropdown.
     * @param {object} properties - Dropdown properties.
     * @param {object} states - Dropdown states.
     * @memberof Dropdown
     */
    constructor(properties = {
        id: 'dropdown-1',
    }, states = {
        open: false,
        active: '',
    }){
        // TODO Edit custom errors.
        this.setProperties(properties);
        this.setStates(states);
        this.setHTML();
        this.setButton();
        this.setIcon();
        this.checkOpenedDropdown();
        this.checkActiveDropdown();
    }

    /**
     * * Set the Dropdown properties.
     * @param {object} properties - Dropdown properties.
     * @memberof Dropdown
     */
    setProperties(properties = {
        id: 'dropdown-1',
    }){
        this.properties = {};
        this.setId(properties);
    }

    /**
     * * Set the Dropdown states.
     * @param {object} states - Dropdown states.
     * @memberof Dropdown
     */
    setStates(states = {
        open: false,
        active: '',
    }){
        this.states = {};
        this.setOpen(states);
        this.setActive(states);
    }

    /**
     * * Set the Dropdown ID.
     * @param {object} properties - Dropdown properties.
     * @memberof Dropdown
     */
    setId(properties = {
        id: 'dropdown-1',
    }){
        this.properties.id = properties.id;
    }

    /**
     * * Set the Dropdown open state.
     * @param {object} states - Dropdown states.
     * @memberof Dropdown
     */
    setOpen(states = {
        open: false,
    }){
        this.states.open = states.open;
    }

    /**
     * * Set the Dropdown active state.
     * @param {object} states - Dropdown states.
     * @memberof Dropdown
     */
    setActive(states = {
        active: '',
    }){
        this.states.active = states.active;
    }

    /**
     * * Set the Dropdown HTML Element.
     * @memberof Dropdown
     */
    setHTML(){
        let dropdowns = document.querySelectorAll('.dropdown');
        for(const dropdown of dropdowns){
            if(dropdown.id == this.properties.id){
                this.html = dropdown;
            }
        }
        this.setChilds();
    }

    /**
     * * Set the btn.
     * @param {object} properties - Dropdown properties.
     * @memberof Dropdown
     */
    setButton(){
        let dropdown = this;
        for(const child of this.html.children){
            if(child.classList.contains('dropdown-title')){
                if(child.children.length){
                    for(const subchild of child.children){
                        if(subchild.classList.contains('dropdown-button')){
                            this.btn = subchild;
                        }
                    }
                }
            }
        }
        this.btn.addEventListener('click', function(e){
            e.preventDefault();
            dropdown.switch();
        });
    }

    /**
     * * Set the Dropdown icon button.
     * @memberof Dropdown
     */
    setIcon(){
        for(const child of this.btn.children){
            if(child.classList.contains('dropdown-icon')){
                this.icon = new Icon(child);
            }
        }
    }

    /**
     * * Set the Dropdown childs.
     * @memberof Dropdown
     */
    setChilds(){
        let dropdown_childs = document.querySelectorAll(`#${this.properties.id} > li > .dropdown-link, #${this.properties.id} > li > .dropdown-buton`);
        this.childs = [];
        for(const dropdown of dropdown_childs){
            this.childs.push(dropdown);
        }
    }

    /**
     * * Switch the Dropdown open state.
     * @returns
     * @memberof Dropdown
     */
    switch(){
        switch(this.states.open){
            case true:
                this.close();
                return false;
            case false:
                this.open();
                return true;
        }
    }

    /**
     * * Open the Dropdown.
     * @memberof Dropdown
     */
    open(){
        this.states.open = true;
        if(this.html.classList.contains('closed')){
            this.html.classList.remove('closed');
        }
        this.html.classList.add('opened');
        this.icon.switch();
    }

    /**
     * * Close the Dropdown.
     * @memberof Dropdown
     */
    close(){
        this.states.open = false;
        if(this.html.classList.contains('opened')){
            this.html.classList.remove('opened');
        }
        this.html.classList.add('closed');
        this.icon.switch();
    }

    /**
     * * Active a Dropdown-link.
     * @memberof Dropdown
     */
    activate(){
        // console.log(this.childs);
        for(const child of this.childs){
            // console.log(child);
        }
    }

    /**
     * * Check if should be a current Dropdown open.
     * @memberof Dropdown
     */
    checkOpenedDropdown(){
        if(this.states.open){
            this.states.open = false;
            this.switch();
        }
    }

    /**
     * * Check if should be a current Dropdown active.
     * @memberof Dropdown
     */
    checkActiveDropdown(){
        if(this.states.active != ''){
            this.activate();
        }
    }
}