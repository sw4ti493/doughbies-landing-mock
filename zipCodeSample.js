
function ValidZipCode(zip) {
var oneValid = /94103/.test(zip);
var twoValid = /94108/.test(zip);
var threeValid = /94158/.test(zip);
    if (oneValid)
        alert('Success!');
    else if (twoValid)
        alert('Success!');
    else if (threeValid)
        alert('Success!');
    else {
        alert('Sorry! Not there yet!');
    }
}
