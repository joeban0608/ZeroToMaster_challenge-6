// Question 3: Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats 
// so that if you enter HEX color format it returns RGB and 
// if you enter RGB color format it returns HEX.

// #ffffff // RGB(255,255,255)
// RGB(255,255,255) // #ffffff

// hex to rgb
function hexToRgb(hex="#ffffff") {
    let RgbObject = {};
    RgbObject["R"] = "0x" + hex[1] + hex[2];
    RgbObject["G"] = "0x" + hex[3] + hex[4]; 
    RgbObject["B"] = "0x" + hex[5] + hex[6];
    // RgbObject = {R:"0xff", G:"0xff", C:"0xff"}
    // change "0xff" to number
    Object.entries(RgbObject).forEach(keyValue => {
            RgbObject[keyValue[0]] = parseInt(keyValue[1], 16);
    })

    // console.log(RgbObject)
    return `RGB(${RgbObject.R}, ${RgbObject.G}, ${RgbObject.B})`;
}

// RgbToHex
function RgbToHex(RgbString='rgb(255, 255, 255)') {
    // str.replace //255,255,255
    RgbString = RgbString.replace(/rgb/ , "").replace(/\s*/g,"").replace(/[()]/g,"");
    // str to arr ["255", "255", "255"]
    let RgbArray = RgbString.split(',') 
    // array.value str to num ["255", "255", "255"] to [255, 255, 255]
    RgbArray = Object.values(RgbArray).map(string => parseInt(string, 10)) 

    let hex = "#"
    // const tempArray = RgbArray.map(color => {
    //     if (color > 255 || color < 0) {
    //         return undefined
    //     } else {
    //         return (color).toString(16)
    //     }
    // })
    
    const tempArray = RgbArray.map(color => (color > 255 || color < 0 || !color) ?
                                            undefined : (color).toString(16)
                                  )
    tempArray.forEach(item => {
        hex = hex + item
    })

    // check hex
    // if (hex.includes("undefined")) {
    //     return `Rgb number was wrong`
    // } else {
    //     return hex
    // }
    const checkHex = (hex.includes("undefined")) ? `Rgb number was wrong` : hex
    return checkHex
    // console.log(tempArray) ["ff", "ff", "ff"]
}

//---------------------------------------------------------
// cleaner code

// autoCovertColor
const input = prompt("please input Rgb or hex" +
                    "\n" +
                    `RgbFormat:"rgb(255,255,255)"` +
                    "\n" +
                    `hexFormat:"#ffffff"`
                    )
function autoCovertColor(input) {
    let convertFormat = 'Invaid color format'
    if (input[0] === "#") {
        alert(`your Hex: ${input}` +
              "\n" + 
              `RgbResult: ${hexToRgb(input)}`
             ) 
    } else if (input.substr(0,3).toUpperCase() === "rgb".toUpperCase()) {
        alert(`your Rgb: ${input}` +
        "\n" + 
        `HexResult: ${RgbToHex(input)}`
       ) 
    } else {
        return alert(convertFormat)
    }
}

// hex to rgb
const hexToRgb = (hex="#ffffff") => {
    let RgbObject = {};
    // RgbObject = {R:"0xff", G:"0xff", C:"0xff"}
    RgbObject["R"] = "0x" + hex[1] + hex[2];
    RgbObject["G"] = "0x" + hex[3] + hex[4]; 
    RgbObject["B"] = "0x" + hex[5] + hex[6];

    // change "0xff" to number
    const StringToNumber = Object.entries(RgbObject).forEach(keyValue => {
            RgbObject[keyValue[0]] = parseInt(keyValue[1], 16);
    })

    // console.log(RgbObject)
    return `RGB(${RgbObject.R}, ${RgbObject.G}, ${RgbObject.B})`;
}

// RgbToHex
const RgbToHex = (RgbString='rgb(255, 255, 255)') => {
    RgbString = RgbString.replace(/rgb/ , "").replace(/\s*/g,"").replace(/[()]/g,"");
    let RgbArray = RgbString.split(',') 
    RgbArray = Object.values(RgbArray).map(string => parseInt(string, 10)) 

    let hex = "#"
    // tempArray ["ff", "ff","ff"] || ["undefined", 255, 255]
    const tempArray = RgbArray.map(color => (color > 255 || color < 0 || !color) ?
                                            undefined : (color).toString(16)
                                  )
    // padHex "#" + "ff" +"ff" +"ff"
    const padHex = tempArray.forEach(item => {
        hex = hex + item
    })

    // checkHex  if hex.includes "#undefinedffff" return wrong else return hex
    const checkHex = (hex.includes("undefined")) ? `Rgb number was wrong` : hex
    return checkHex
}

autoCovertColor(input)