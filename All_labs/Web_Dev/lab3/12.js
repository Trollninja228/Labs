function showMessage(from, text) {
    // If the value of text is falsy, assign the default value
    // this assumes that text == "" is the same as no text at all
    text = text || 'no text given';
    console.log(from+text);
}

showMessage('yay ');



