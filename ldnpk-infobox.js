
// ╔══════════════════════════════════════════════════════════╗
// ║                     Add the template                     ║
// ╚══════════════════════════════════════════════════════════╝
const template = document.createElement('template');
template.innerHTML =  /* html */` 

    <link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet">
    <style>

        :host {
            --backgroundColour: #F3F4F6;

            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            padding: 8px;
            border-radius: 8px;
            background: var(--backgroundColour);
            margin-top:16px;
            font-size: 0.5rem;
            padding: 1rem;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        #top-row {
            display: flex;
            flex-direction: row;
            width: 100%
        }

        #bottom-row {
            --lineColour: black;

            display: flex;
            flex-direction: column;
            width: 100%;
            border-top:1px solid var(--lineColour)
        }

        #category {

        }

        #image {
            --size: 400px;
            width: var(--size);
            height: var(--size);
        }

        #glyph {

        }

        #title {
            font-size: 3rem;
            line-height: 6rem;
            margin: 0rem;
        }

        #text-columns {
            display: flex;
            flex-direction: row;
            width: 100%;
            font-size: 1rem;
            line-height: 2rem;
            margin: 0rem;
        }
        #text-column-one {
            text: blue;
            width: 100%
        }
        #text-column-two {
            text: red;
            width: 100%
        }
    </style>

    <div id="top-row">
        <div id="category">category</div>
        <img id="image" src="#" />
        <img id="glyph" src="#" />
    </div>
    <div id="bottom-row">
        <h3 id="title">Title</h3>
        <div id="text-columns">
            <div id="text-column-one"><slot name="text-column-one"></slot></div>
            <div id="text-column-two"><slot name="text-column-two"></slot></div>
        </div>
    </div>
`;



class InfoBox extends HTMLElement {

    // ╔══════════════════════════════════════════════════════════╗
    // ║                    Constructor Method                    ║
    // ╚══════════════════════════════════════════════════════════╝
    constructor() {
        super();
        const clone = template.content.cloneNode(true);
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(clone);

    }

}

customElements.define("ldnpk-infobox", InfoBox);