import './infobox.js';
import '../button/button.js';

export default {
  title: 'LondonParkour/Infobox',
  component: 'ldnpk-infobox'
};

export const Default = () => {

  const htmlString = 
  /* html */`
    <style>
        ldnpk-infobox {
            --shadow:           var(--shadow-xl);
            --backgroundColour: var(--color-green-100);
            --foregroundColour: var(--color-stone-800);
            --highlightsColour: var(--color-green-600);
            --hoverstateColour: var(--color-stone-200);
            --imageSize:        600px;
        }
    </style>
    <ldnpk-infobox heading="Light title" category="Learn to move">

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
        <div slot="text-column-one">As third-generation practitioners with over fifteen years of full-time training and coaching, it gives us unparalleled knowledge & experience to pass onto you.</div>
        <div slot="text-column-two">With well over a decade of full-time international parkour and movement coaching, our coaches are among the most accomplished in the world. Instructing all levels of ability, professions and demographics, we’re certain we can help you too.</div>
    
        <!-- Button -->
        <div slot="buttons"><ldnpk-button shadow href="https://londonparkour.com" >Find out more</ldnpk-button></div>

      </ldnpk-infobox>
  `

  return htmlString;
};


export const Colour = () => {

  const htmlString = 
  /* html */`
    <ldnpk-infobox heading="Colour">
        <div slot="text-column-one">As third-generation practitioners with over fifteen years of full-time training and coaching, it gives us unparalleled knowledge & experience to pass onto you.</div>
        <div slot="text-column-two">With well over a decade of full-time international parkour and movement coaching, our coaches are among the most accomplished in the world. Instructing all levels of ability, professions and demographics, we’re certain we can help you too.</div>
    </ldnpk-infobox>
  `


  return htmlString;
};

export const Dark = () => {

  const htmlString = 
  /* html */`
    <style>
        ldnpk-infobox {
            --backgroundColour: orange;
            --borderColour: white;
        }
    </style>
    <ldnpk-infobox heading="Dark" >
        <div slot="text-column-one">As third-generation practitioners with over fifteen years of full-time training and coaching, it gives us unparalleled knowledge & experience to pass onto you.</div>
        <div slot="text-column-two">With well over a decade of full-time international parkour and movement coaching, our coaches are among the most accomplished in the world. Instructing all levels of ability, professions and demographics, we’re certain we can help you too.</div>
    </ldnpk-infobox>
  `


  return htmlString;
};