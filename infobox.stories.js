import './infobox.js';
import '../button/button.js';

export default {
  title: 'LondonParkour/Infobox',
  component: 'ldnpk-infobox',
  tags: ['autodocs'],
  // Docs Page Description
  parameters: { docs: { description: { component: 
    'The LondonParkour InfoPanel Component.',
  }, }, },


  // ╭─────────────────────────────────────────────────────╮
  // │                 ARGUMENTS (CONTROLS)                │
  // ╰─────────────────────────────────────────────────────╯
  argTypes: {

    shadow: { 
      control: 'boolean',
      description: 'Adds a shadow to the component.',
      table: { defaultValue: { summary: "false" } },
    },

    heading: { 
      control: 'text',
      description: 'Heading of the main text.',
      table: { defaultValue: { summary: "Title" } },
    },

    category: { 
      control: 'text',
      description: 'Category text in top-left corner.',
      table: { defaultValue: { summary: "Category" } },
    },

  // ╭─────────────────────────────────────────────────────╮
  // │                 CUSTOM CSS VARIABLES                │
  // ╰─────────────────────────────────────────────────────╯
    cssBackgroundColour: {
      name: '--backgroundColour',
      control: 'text',
      description: 'Override the default background colour.',
      table: { 
        defaultValue: { summary: "#F3F4F6" }, 
        category: "CSS Custom Properties" 
      },
    },

    cssForegroundColour: {
      name: '--foregroundColour',
      control: 'text',
      description: 'Override the default foreground colour.',
      table: { 
        defaultValue: { summary: "#000000" }, 
        category: "CSS Custom Properties" 
      },
    },

    cssHighlightsColour: {
      name: '--highlightsColour',
      control: 'text',
      description: 'This controls the SVG colour in top right corner.',
      table: { 
        defaultValue: { summary: "#ffffff" }, 
        category: "CSS Custom Properties" 
      },
    },

    cssShadow: {
      name: '--shadow',
      control: 'text',
      description: 'Override the default shadow.',
      table: { 
        defaultValue: { summary: "#F3F4F6" }, 
        category: "CSS Custom Properties" 
      },
    },
  },



  // ╭─────────────────────────────────────────────────────╮
  // │                   ARGUMENT DEFAULTS                 │
  // ╰─────────────────────────────────────────────────────╯
  args: {
    heading:                 'Title',
    category:              'Category',
    shadow:                'true',
    cssBackgroundColour:   '#F3F4F6',
    cssForegroundColour:   '#000000',
    cssHighlightsColour:   '#38bdf8',
    cssShadow:             '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
  },
  


};


// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                                                                           ║
// ║                                  STORIES                                  ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝


// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │                     Default Style                     │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Default = ({heading, category, shadow, cssBackgroundColour, cssForegroundColour, cssHighlightsColour, cssShadow}) => {

  let wordShadow=""; if(shadow){ wordShadow="shadow"; }

  const htmlString = 
  /* html */`
    <style>
        ldnpk-infobox {
            --backgroundColour: ${cssBackgroundColour};
            --foregroundColour: ${cssForegroundColour};
            --highlightsColour: ${cssHighlightsColour};
            --shadow:           ${cssShadow};
            --imageSize:        600px;
        }

        ldnpk-button {
            --backgroundColour: var(--color-violet-500);
            --foregroundColour: var(--color-violet-50);
        }
    </style>
    <ldnpk-infobox 
      ${wordShadow} 
      heading="${heading}" 
      category="${category}"
      columns=1
      >

        <!-- Glyph  -->
        <svg slot="glyph" role="img" aria-label="glyph" style="width:100%;height:100%">
            <use xlink:href="#logo"></use>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
            <symbol viewBox="0 0 185 120" id="logo">
                <path d="M24,24 L24,96 L106.639907,96 L59.9640453,24 L24,24 Z M78.3600926,24 L125.035955,96 L161,96 L161,24 L78.3600926,24 Z"></path>
            </symbol>
        </svg>

        <!-- Image  -->
        <picture slot="image">
            <source media="(max-width: 639px)" srcset="https://londonparkour.com/wp-content/uploads/Essential/Cutouts/thumbnail/Kevin_Fly.png">
            <source media="(min-width: 640px)" srcset="https://londonparkour.com/wp-content/uploads/Essential/Cutouts/medium/Kevin_Fly.png">
            <source media="(min-width: 768px)" srcset="https://londonparkour.com/wp-content/uploads/Essential/Cutouts/large/Kevin_Fly.png">
            <source media="(min-width: 1024px)" srcset="https://londonparkour.com/wp-content/uploads/Essential/Cutouts/Kevin_Fly.png">
            <img class="object-scale-down object-center h-full ls-is-cached lazyloaded" src="https://londonparkour.com/wp-content/uploads/Essential/Cutouts/Kevin_Fly.png" alt="Kevin Flies towards the camera like a hero" width="1280" height="1280">
        </picture>

        <!-- Text  -->
        <div slot="text">As third-generation practitioners with over fifteen years of full-time training and coaching, it gives us unparalleled knowledge & experience to pass onto you.</div>
        <div slot="text">With well over a decade of full-time international parkour and movement coaching, our coaches are among the most accomplished in the world. Instructing all levels of ability, professions and demographics, we’re certain we can help you too.</div>
    
        <!-- Button -->
        <div slot="buttons">
          <ldnpk-button shadow href="https://londonparkour.com" >Find out more</ldnpk-button>
        </div>

      </ldnpk-infobox>
  `

  return htmlString;
};



// Change the argument defaults for this example
Default.args = {
  heading:                'EXPLORE YOUR POTENTIAL',
  category:               'EXPLORER',
  shadow:                 'true',
  cssBackgroundColour:    '#F3F4F6',
  cssForegroundColour:    '#000000',
  cssHighlightsColour:    'var(--color-violet-500)',
  cssShadow:              '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
};
