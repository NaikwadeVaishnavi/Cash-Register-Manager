const billAmount = document.querySelector("#bill-amount") ;
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000,500,100,20,10,5,1];
checkButton.addEventListener("click",function validateBillAndCashAmount()
{
   hideMessage();
    if (billAmount.value > 0)
    {
        if(cashGiven.value >= billAmount.value)
        {
            const amountToBReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBReturned);            
        }
        else 
        {
            showMessage("The cash provided should atleast equal to bill amount ");
        }
    }
    else
    {
        showMessage("Invalid Bill Amount");
    }
}
);

function calculateChange(amountToBReturned)
{
    //go over all the Available notes
    for(let i=0; i < availableNotes.length ; i++)
    {
        //no. of notes need for denomination
        const numberOfNotes = Math.trunc (amountToBReturned / availableNotes[i]);
        //amount left after calculating the no. of notes needed
        amountToBReturned =amountToBReturned % availableNotes[i];
        //updating no. of notes in the table for the current amount
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage()
{
    message.style.display ="none";
}

function showMessage(msg)
{
    message.style.display ="block";
    message.innerText = msg;
}