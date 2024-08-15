function getElementId(elementId){
    const elementStr = document.getElementById(elementId);
    const element = elementStr.innerText;
    const value = parseInt(element);
    return value;

}

function setElementId(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
