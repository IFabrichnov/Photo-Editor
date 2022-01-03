let photo;
window.onload = function () {
    photo = new Photo();
}

function selectImage() {
    document.getElementById('photo-file').click();
}

function makeGrayScale() {
    photo.grayscale();
}

function makeBright() {
    photo.makeBright();
}

function makeDark() {
    photo.makeDark();
}

function makeBlur() {
    photo.applyBlurFilter();
}

function makeEmboss() {
    photo.applyEmbossFilter();
}

function makeSharp() {
    photo.applySharpFilter();
}

function download() {
    photo.export();
}

function openColorpicker() {
    document.getElementById('color-picker').click();
}

function makeColorize(elem) {
    let color = elem.value;
    photo.colorize(color);
}

function openColorFilterPicker() {
    document.getElementById('colorize-color-picker').click();
}

function applyColorFilter(elem) {
    let color = elem.value;
    photo.applyColorFilter(color);
}

function makeTransparent() {
    photo.makeTransparent();
}

function crop() {
    photo.cropSelected();
}

function flipVertically() {
    photo.flipVertically();
}

function rotate(elem) {
    photo.rotate(elem.value);
}