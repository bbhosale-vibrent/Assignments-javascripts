// 3. Create a function which will accept name and split that name for eg, if Varun is the name - show the length of the
// name and then show each character in <ol><li>

function displayname(name)
{
    let len = name.length;
    console.log('Length of the name is :',len);
    console.log("Character in ordered list:");
    console.log("<ol>");
    for(let i=0;i<len;i++)
    {
        console.log('<li>'+name[i]+'</li>');
    }
    console.log("</ol>");
}
let name = "Bhagya";
displayname(name);