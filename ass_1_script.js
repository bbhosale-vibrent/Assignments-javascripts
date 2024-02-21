function showAlert()
{
   alert('Alert Message...!')
}

function showPrompt()
{
   var input = prompt('Enter message:');
   if(input!==null)
   {
    alert('Entered value:'+input);
   }
}

function showConfirm()
{
   var input = confirm('Do you want to procced..?')
   if(input)
   {
    alert('Clicked ok...!')
   }
   else
   {
    alert('Clicked Cancel...!')
   }
}

