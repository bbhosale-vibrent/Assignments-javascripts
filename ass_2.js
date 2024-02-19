function displayname(name)
{
    let len = name.length;
    let result = `Length of the name ${name} : ${len}`;
    // console.log('Length of the name is :',len);
    console.log("Character in ordered list:");
    console.log("<ol>");
    for(let i=0;i<len;i++)
    {
        const letter = name[i];
        const color = getcolor(letter);
        // console.log('<li>'+name[i]+'</li>')
        // console.log(`'<li>',+name[i]+'</li>`)
        result += `\n <li> style="color:${color}">${letter}</li>`;
    }
    // console.log("</ol>");
    result += `\n </ol>`;
    console.log(result);
}

function getcolor(letter)
{
    const color ={
        'B': 'Blue',
        'H' : 'None',
        'A' : 'None',
        'G' : 'Green',
        'Y' : 'Yellow',
    };
    //  return color[letter];
     return color[letter.toUpperCase()];

}
let name = "Bhagya";
displayname(name);
    

