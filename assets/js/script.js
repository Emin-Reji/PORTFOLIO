function validate()
{
    var username = document.getElementById('name');
    var email = document.getElementById('email');

    if(username.value.trim() =="" ||email.value.trim()=="")
    {
        alert("No blank allowed");
        return false;
    }
    else
    {
        true;
    }
}