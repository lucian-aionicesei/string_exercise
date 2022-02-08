"use strict";

window.onload = setUp;

// Select the inputBox
let inputBox = document.querySelector("#inputBox");
let inputValue = inputBox.value;

// Select the dropDown mwnu
let dropDown = document.querySelector("#dropDownMenu");

// Select the outputBox
let outputBox = document.querySelector("#outputBox");
let outputValue = outputBox.value;

// Select the button
let generateBtn = document.querySelector("#generateBtn");

generateBtn.addEventListener("click", generateOutput);

// console.log(generateBtn);

function setUp() {
    inputBox.value = '';
    outputBox.value = '';
     dropDown.value = '0';  
}

function generateOutput() {

    let dropDownValue = dropDown.value;

    switch (dropDownValue) {
        case "0":
            // console.log("Case" + dropDownValue);
            outputBox.value = (inputBox.value.charAt(0)).toUpperCase() + (inputBox.value.substring(1)).toLowerCase();
            break;
        case "1":
            outputBox.value = inputBox.value.substring(0, inputBox.value.indexOf(" "));
            break;
        case "2":
            outputBox.value = inputBox.value.substring(0, inputBox.value.indexOf(" ")).length;
            break;
        case "3":
            outputBox.value = 'Start position: ' + (inputBox.value.indexOf(" ") + 1) + ' End position: ' + (inputBox.value.lastIndexOf(" ") - 1) + ' Middle name: ' + inputBox.value.substring(inputBox.value.indexOf(" ") + 1, inputBox.value.lastIndexOf(" "));
            break;
        case "4":
            if (inputBox.value.endsWith('.jpg')) {
                outputBox.value = "This file is a .jpg";
            } else if (inputBox.value.endsWith('.png')) {
                outputBox.value = "This file is a .png";
            } else {
                outputBox.value = "This is neither a .png or .jpg";
            }
            break;
        case "5":
            outputBox.value = '*'.repeat(inputBox.value.length);
            break;
        case "6":
            outputBox.value = inputBox.value.substring(0, 2) + inputBox.value.charAt(2).toUpperCase() + inputBox.value.substring(3);
            break;
        case "7":
            // outputBox.value = inputBox.value.charAt(inputBox.value.indexOf(" ")+1).toUpperCase();

            let stringArray;
            stringArray = inputBox.value.split(" ");
            let newStringArray = [];
            console.log(stringArray);

            stringArray.forEach(function (element) {

                if (element.includes("-")) {
                    element = element.split("-");
                    let tempArr = [];
                    for (let i = 0; i != element.length; i++) {
                        element[i] = (element[i].charAt(0).toUpperCase()) + element[i].substring(1);
                        tempArr.push(element[i] + "-");
                    };
                    tempArr = tempArr.join('');
                    element = tempArr.substring(0, tempArr.length - 1);
                }
                element = (element.charAt(0).toUpperCase()) + element.substring(1);
                newStringArray.push(element);
            })
            outputBox.value = newStringArray.join(' ');
            break;
        default:
            return;
    }
}