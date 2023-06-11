# ldnpk-infobox WebComponent

## How to use:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
        #first {
            --backgroundColour: orange;
            --borderColour: white;
            --imageSize: 200px;
        }
    </style>


    <ldnpk-infobox id="first" value="test">
        <div slot="text-column-one">Column 1 text</div>
        <div slot="text-column-two">Column 2 text</div>
    </ldnpk-infobox>


    <script src="./ldnpk-infobox/ldnpk-infobox.js"></script>
</body>
</html>
```