const colors = 
                ["IndianRed", "LightCoral", "Salmon", "DarkSalmon", "LightSalmon", "Crimson", "Red", "FireBrick", "DarkRed",
                "Pink", "LightPink", "HotPink", "DeepPink", "MediumVioletRed", "PaleVioletRed", "Coral", "Tomato", "OrangeRed",
                "DarkOrange", "Orange", "Gold", "Yellow", "LightYellow", "LemonChiffon", "LightGoldenrodYellow", "PapayaWhip",
                "Moccasin", "PeachPuff", "PaleGoldenrod", "Khaki", "DarkKhaki", "Lavender", "Thistle", "Plum", "Violet", "Orchid",
                "Fuchsia", "Magenta", "MediumOrchid", "MediumPurple", "RebeccaPurple", "BlueViolet", "DarkViolet", "DarkOrchid",
                "DarkMagenta", "Purple", "Indigo", "SlateBlue", "DarkSlateBlue", "MediumSlateBlue", "GreenYellow", "Chartreuse",
                "LawnGreen", "Lime", "LimeGreen", "PaleGreen", "LightGreen", "MediumSpringGreen", "SpringGreen", "MediumSeaGreen",
                "SeaGreen", "ForestGreen", "Green", "DarkGreen", "YellowGreen", "OliveDrab", "Olive", "DarkOliveGreen", "MediumAquamarine",
                "DarkSeaGreen", "LightSeaGreen", "DarkCyan", "Teal", "Aqua", "Cyan", "LightCyan", "PaleTurquoise", "Aquamarine", "Turquoise",
                "MediumTurquoise", "DarkTurquoise", "CadetBlue", "SteelBlue", "LightSteelBlue", "PowderBlue", "LightBlue", "SkyBlue",
                "LightSkyBlue", "DeepSkyBlue", "DodgerBlue", "CornflowerBlue", "MediumSlateBlue", "RoyalBlue", "Blue", "MediumBlue",
                "DarkBlue", "Navy", "MidnightBlue", "Cornsilk", "BlanchedAlmond", "Bisque", "NavajoWhite", "Wheat", "BurlyWood", "Tan",
                "RosyBrown", "SandyBrown", "Goldenrod", "DarkGoldenrod", "Peru", "Chocolate", "SaddleBrown", "Sienna", "Brown", "Maroon",
                "White", "Snow", "HoneyDew", "MintCream", "Azure", "AliceBlue", "GhostWhite", "WhiteSmoke", "SeaShell", "Beige", "OldLace",
                "FloralWhite", "Ivory", "AntiqueWhite", "Linen", "LavenderBlush", "MistyRose", "Gainsboro", "LightGray", "Silver", "DarkGray",
                "Gray", "DimGray", "LightSlateGray", "SlateGray", "DarkSlateGray", "Black"];

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}