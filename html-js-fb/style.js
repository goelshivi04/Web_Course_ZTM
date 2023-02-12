database=[
    {
        username:"abc",
        password:"123"
    },
    {
        username:"cde",
        password:"321"
    },
    {
        username:"fgh",
        password:"789"
    }
];

newsfeed=[
    {
        username:"a",
        timeline:"q"
    },
    {
        username:"b",
        timeline:"w"
    },
    {
        username:"c",
        timeline:"e"
    }
];

function check_user(username,password)
{
    for(var i=0;i<database.length;i++)
    {
        if(username==database[i].username && password==database[i].password)
        return true;
    }
    return false;
}

function check(username,password)
{
    if(check_user(username,password))
    console.log(newsfeed);
    else
    alert("Wrong Username and Password");
}


// var usernamep=prompt("Enter Username: ");
// var passwordp=prompt("Enter Password: ");
// check(usernamep,passwordp);

