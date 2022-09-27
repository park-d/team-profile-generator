const generateTeamHTML = (employee) => {
    //creating variables to do custom sorting of employee roles, removing the first item (manager), so I can sort the others without ruining the order.
    let managerItem = employee.shift();

    employee.sort((a, b) => {
        if(b.getRole() < a.getRole()) {return 1;}
        if(b.getRole() > a.getRole()) {return -1;}
        return 0;
    });
    // adding the manager item back to the first item in the arry
    employee.unshift(managerItem);

    // empty arry to push the rendered HTML for each employee entered
    let teamArrHtml = [];
    //for each item in the arry, render the html and push it to the empty array
    for(obj of employee) {
        teamArrHtml.push(
            obj.renderHTML()
        );
    }

    //joining each of the items in the array, and returning it as the output of the function to pass to the function below
    return teamArrHtml.join('');
};

//raw HTML structure with variable that holds the output of the above function, which is also HTML code but generated from each Class
const generateAllHtml = (teamHtml) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" integrity="sha384-xeJqLiuOvjUBq3iGOjvSQSIlwrpqjSHXpduPd6rQpuiM3f5/ijby8pCsnbu5S81n" crossorigin="anonymous">
    <title>Team Profile Generator</title>
</head>
<body>
<div class="container-fluid pb-5">
    <div class="row d-flex justify-content-center">
        <div class="col-12 jumbotron bg-danger text-white py-5">
            <h1 class="text-center">My Team</h1>
        </div>
    </div>
</div>   
<div class="container col-10">
    <div class="row d-flex justify-content-center">              
    <!--rendered content here-->
    ${generateTeamHTML(teamHtml)}
    </div>
</div>     
</body>
</html>`;
};

module.exports = {generateAllHtml};
