// 3. Create a function which will accept name and split that name for eg, if Varun is the name - show the length of the
// name and then show each character in <ol><li>

function DisplayName(name) {
    let len = name.length;
    let result = `Length of the name ${name} : ${len}`;
    document.write(`<p>${result}</p>`);
    document.write(" Character in ordered list:");
    document.write("<ol>");
    let letter1 = "";
    for (let i = 0; i < len; i++) {
      const letter = name[i];
      letter1 += ` <li>${letter}</li>`;
    }
     letter1 += "</ol>";
     document.write(letter1);
  }

  
  let name = "Bhagya";
  DisplayName(name);