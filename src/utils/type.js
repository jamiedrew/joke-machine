const typeSpeed = 50;

const type = (string, callback) => {
    string = string.toLowerCase();
    let i = 0;
    let tempString = "";
    const filter = /[!?.',]/;

    while (i < string.length) {
      write(i);
      i++;
    }

    function write (i) {
      setTimeout(() => {
        if (!string[i].match(filter)) {
          tempString += string[i];
          callback(tempString);
        }
      }, typeSpeed * i);
    }
}


module.exports = type;