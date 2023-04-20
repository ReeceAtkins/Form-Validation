
window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button"); // get button thats inside form
    formBtn.onclick = main;
}

function main():void{
    // reset error messages
    resetErrorMessages();

    // validate first name
     isTextPresent("first-name", "First name is required");

    // validate last name
    isTextPresent("last-name", "Last name is required");
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
