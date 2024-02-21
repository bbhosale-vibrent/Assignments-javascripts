function DisplayName(name) {
    let len = name.length;
    let result = `Length of the name ${name} : ${len}`;
    console.log(result);
    document.write(`<p>${result}</p>`);
    document.write("<p> Character in ordered list:</p>");
    document.write("<ol>");
    let letter1 = "";
    for (let i = 0; i < len; i++) {
      const letter = name[i];
      const color = getcolor(letter);
      letter1 += ` <li style="color:${color}">${letter}</li>`;
    }
    letter1 += "</ul>";
    document.write(letter1);
  }

  function getcolor(letter) {
    const color = {
      R: "Red",
      O: "Orange",
      Y: "Yellow",
      P: "Purple",
    };
    return color[letter.toUpperCase()];
  }
  let name = "rop";
  DisplayName(name);
  