
window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button"); // get button thats inside form
    formBtn.onclick = main;
}

function main():void{
    // inserting a h1 onto the document.
    let msgHeading = document.createElement("h2");
    msgHeading.innerText = "Precessing form";
    msgHeading.setAttribute("class", "message")
    msgHeading.onclick = changeHeading;

    let h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", msgHeading);

    setTimeout(function(){
        msgHeading.remove();
    }, 5000)

    // reset error messages
    resetErrorMessages();

    // validate first name
     isTextPresent("first-name", "First name is required");

    // validate last name
    isTextPresent("last-name", "Last name is required");

    // validate date
    CheckValidDate();
}

function changeHeading(){
    let heading = <HTMLElement>this;
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);
    let color = "rgb(" + red + "," + green + "," + blue + ")";
    heading.style.color = color;
}

function CheckValidDate() {
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if (!isValidDate) {
        dobBox.nextElementSibling.innerHTML = "Format should be mm/dd/yyyy";
    }
}

function isValidDate(input:string):boolean{
    // Validating mm/dd/yyyy and m/d/yyyy
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    return pattern.test(input);
}

/**
 * Resets all the spans
 */
function resetErrorMessages():void{
    let allSpans = document.querySelectorAll("form span");
    for(let i = 0; i< allSpans.length; i++){
        let currSpan = <HTMLElement>allSpans[i];

        if(currSpan.hasAttribute("data-required")){
            currSpan.innerText = "*";
        }
        else{
            currSpan.innerText = "";
        }
    }
}

/**
 * Returns true if the text box with the given id
 * has some text inside it
 * @param id The id of the <input type="text"> to validate
 * @param errMsg The message to display in the sibling span of
 * the text box
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let txtBox = document.getElementById(id);
    <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.ariaValueMax;
    if (txtBoxValue == "") {
        let errSpan = <HTMLSpanElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false
    }
    return true
}
