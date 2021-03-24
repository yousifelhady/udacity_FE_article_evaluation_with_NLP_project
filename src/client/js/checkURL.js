function isValidUrl(url) {
    var formula = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
    var regExp = new RegExp(formula);
    return regExp.test(url);
}

export default isValidUrl