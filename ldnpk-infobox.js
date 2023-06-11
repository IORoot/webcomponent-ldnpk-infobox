
// ╔══════════════════════════════════════════════════════════╗
// ║                     Add the template                     ║
// ╚══════════════════════════════════════════════════════════╝
const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: flex;
            align-items: center;
            gap: 10px; 
        }
        button {
            --size: 60px;
            width: var(--size);
            height: var(--size);
            /* use variables to allow penetration of the shadowDOM */
            background-color: var(--counterButtonColour, aqua);
            border-radius: 50%;
            border: 0;
        }
        h3 {
            margin: 0px;
            font-family: monospace;
        }
    </style>

    <button id="subtract">-</button>
    <h3></h3>
    <button id="add">+</button>
`;



class Card extends HTMLElement {


    // ╔══════════════════════════════════════════════════════════╗
    // ║                    Constructor Method                    ║
    // ╚══════════════════════════════════════════════════════════╝
    constructor() {
        super();

        // set some consts
        // const template = document.getElementById('template');
        
        const clone = template.content.cloneNode(true);

        // bind the 'this' context to your components functions
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);

        // Create a shadowDOM for the component
        this.attachShadow({ mode: "open" });

        // Attach the template clone to the shadowDOM
        this.shadowRoot.appendChild(clone);

        // Set the H3 to the value
        this.valueHeader = this.shadowRoot.querySelector("h3");
        this.valueHeader.innerHTML = this.value;

        // Get the buttons from the template
        this.subtractButton = this.shadowRoot.querySelector("#subtract");
        this.addButton = this.shadowRoot.querySelector("#add");
    }


    // ╔══════════════════════════════════════════════════════════╗
    // ║             Getters / Setters for attributes             ║
    // ╚══════════════════════════════════════════════════════════╝

    get value() {
        return this.getAttribute("value");
    }

    set value(newValue) {
        this.setAttribute("value", newValue);
    }

    get min() {
        return this.getAttribute("min");
    }

    set min(newValue) {
        this.setAttribute("min", newValue);
    }

    get max() {
        return this.getAttribute("max");
    }

    set max(newValue) {
        this.setAttribute("max", newValue);
    }

    // ╔══════════════════════════════════════════════════════════╗
    // ║                     Lifecycle events                     ║
    // ╚══════════════════════════════════════════════════════════╝

    // Event: What to do when attribute is updated. (change the valueHeader html)
    attributeChangedCallback(attributeName, oldValue, newValue){ 
        this.valueHeader.innerHTML = this.value;
    }

    // Return array of attributes to observe (watch like react)
    static get observedAttributes(){ 
        return ["value"]
    }

    // Event: When element started
    connectedCallback(){ 
        this.subtractButton.addEventListener("click", this.subtract);
        this.addButton.addEventListener("click", this.add);
    }

    // Event: When element is rmeoved - remove eventlisteners
    disconnectedCallback(){ 
        this.subtractButton.removeEventListener("click", this.subtract);
        this.addButton.removeEventListener("click", this.add);
    }


    // ╔══════════════════════════════════════════════════════════╗
    // ║                     Custom functions                     ║
    // ╚══════════════════════════════════════════════════════════╝
    
    // custom function -
    subtract(){
        // this.value is a string
        // +this.value converts a string to a number
        let min = this.getAttribute("min");
        if (!min){ this.min = 0}
        if (+this.value > +this.min)
        {
            this.value = +this.value - 1
        }
    }           
    
    // custom function +
    add(){
        let max = this.getAttribute("max");
        if (!max){ this.max = 10}

        if (+this.value < +this.max)
        {
            this.value = +this.value + 1
        }
    }
}

customElements.define("ldnpk-counter", Card);