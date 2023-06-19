
// ╔══════════════════════════════════════════════════════════╗
// ║                     Add the template                     ║
// ╚══════════════════════════════════════════════════════════╝
const template = document.createElement('template');


// ╔══════════════════════════════════════════════════════════╗
// ║                INCLUDES / LINKS / SCRIPTS                ║
// ╚══════════════════════════════════════════════════════════╝
let html = /* html */` 
    <link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet">
`;


// ╔══════════════════════════════════════════════════════════╗
// ║                        STYLESHEET                        ║
// ╚══════════════════════════════════════════════════════════╝
html += /* html */` 
    <style>

        :host {
            /* Variables  */
            --backgroundColour: #F3F4F6;
            --foregroundColour: #000000;
            --highlightsColour: #38bdf8;
            --imageSize:        400px;
            --shadow:           0 4px 6px -1px rgb(0 0 0 / 0.1), 
                                0 2px 4px -2px rgb(0 0 0 / 0.1);

            
        }

        #infobox {
            /* Position */
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;

            /* Size  */
            padding: 2.5rem;
            border-radius: 8px;

            /* Presentation  */
            background: var(--backgroundColour);
            color: var(--foregroundColour);
            font-size: 1rem;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }


        #top-row {
            /* Position  */
            display: flex;
            flex-direction: row;

            /* Size  */
            width: 100%;
        }

        #bottom-row {
            /* Position  */
            display: flex;
            flex-direction: column;

            /* Size  */
            padding-top:1rem;
            width: 100%;
            border-top:2px solid;

            /* Presentation  */
            border-color: var(--foregroundColour);
        }

        #image-wrapper {
            /* Position  */
            display: flex;

            /* Size  */
            width: 100%;
        }

        #image {
            /* Position  */
            margin-left: auto;
            margin-right: auto;

            /* Size  */
            width: var(--imageSize);
            height: var(--imageSize);
        }

        #title {

            /* Size  */
            margin: 0rem;

            /* Presentation  */
            font-size: 1.875rem;
            line-height: 2.25rem;
        }

        #text-columns {
            /* Position  */
            display: flex;
            flex-direction: row;

            /* Size  */
            width: 100%;
            margin: 0rem;
            padding-top:1.5rem;
            gap: 2rem;

            /* Presentation  */
            font-size: 1rem;
            line-height: 1.5rem;
            
        }

        #text-columns ::slotted(*) {
            width: 100%;
        }

        #text-column-one {
            /* Size  */
            width: 100%
        }
        #text-column-two {
            /* Size  */
            width: 100%
        }

        #category { 
            /* Position */
            position: absolute;
            top: 2rem;
            left: 2.5rem;

            /* Presentation  */
            display: block;
            font-size: 1rem;
            color: var(--foregroundColour);
        }

        #glyph {
            /* Position */
            position: absolute;
            top: 1rem;
            right: 2.5rem;

            /* Size  */
            width: 4rem;
            height: 5rem;

            /* Presentation  */ 
            fill: var(--highlightsColour);
        }

        #buttons {
            /* Position */
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }

        #button {
            /* Position */
            margin-right: auto;

            /* Size */
            padding: 1rem 2.5rem;

            /* Presentation */
            background-color: var(--highlightsColour);
            color: var(--foregroundColour);
            border-radius: 1rem;
            text-transform: uppercase;

        }

        .shadow {
            /* Presentation */
            box-shadow: var(--shadow);
        }

    /*  ╭──────────────────────────────────────────────────────────╮
        │                       HOVER STATES                       │
        ╰──────────────────────────────────────────────────────────╯ */

        #infobox:hover {
            background: var(--foregroundColour);
            color: var(--backgroundColour);
        }

        #infobox:hover #category {
            color: var(--backgroundColour);
        }
        #infobox:hover #bottom-row {
            border-color: var(--backgroundColour);
        }


    </style>
`;


// ╔══════════════════════════════════════════════════════════╗
// ║                         TEMPLATE                         ║
// ╚══════════════════════════════════════════════════════════╝
html += /* html */`
    <div id="infobox">
        <div id="top-row">
            <div id="category">category</div>
            <div id="image-wrapper">
                <div id="image">
                    <slot name="image"></slot>
                </div>
            </div>
            <div id="glyph"><slot name="glyph"></slot></div>
        </div>
        <div id="bottom-row">
            <h3 id="title">Title</h3>
            <div id="text-columns">
                <slot name="text"></slot>
            </div>
            <div id="buttons">
                <slot name="buttons"></slot>
            </div>
        </div>
    </div>
`;


// ╔══════════════════════════════════════════════════════════╗
// ║                     ADD TO TEMPLATE                      ║
// ╚══════════════════════════════════════════════════════════╝
template.innerHTML =  html


// ╔══════════════════════════════════════════════════════════╗
// ║                   DEFINE WEBCOMPONENT                    ║
// ╚══════════════════════════════════════════════════════════╝
class InfoBox extends HTMLElement {

    constructor() {

        // SETUP 
        super();
        const clone = template.content.cloneNode(true);
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(clone);

        const element = this.shadowRoot.querySelector("#infobox");

        // Title
        this.shadowRoot.querySelector("h3").innerHTML = this.titleAttribute;

        // Category
        this.shadowRoot.querySelector("#category").innerHTML = this.categoryAttribute;

        // shadow
        if (this.hasAttribute('shadow')){
            element.classList.add("shadow");
        }

        // Click-To-Action
        let CTA = "Learn More"
        if (this.ctaAttribute){
            CTA=this.ctaAttribute;
        }

        // Columns
        if (this.hasAttribute('columns')){
            
        }

    }

    // ╭──────────────────────────────────────────────────────────╮
    // │                    GETTERS / SETTERS                     │
    // ╰──────────────────────────────────────────────────────────╯
    get titleAttribute() {
        return this.getAttribute("heading");
    }

    get categoryAttribute() {
        return this.getAttribute("category");
    }

    get linkAttribute() {
        return this.getAttribute("link");
    }

    get ctaAttribute() {
        return this.getAttribute("cta");
    }

    get columnsAttribute() {
        return this.getAttribute("columns");
    }
}

customElements.define("ldnpk-infobox", InfoBox);