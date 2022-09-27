const generateTeamHTML = (employee) => {
// setting an empty array to hold the generated HTML from each employee added
    teamArrHtml = [];

// each of the following are the same for each separate type of employee selected, filtering the array passed to the function, based on which role it is, then creating the HTML for that role, and pushing each of those to the array created above.
    teamArrHtml.push(
        employee
            .filter((employee) => employee.getRole() === 'Manager')
            .map((employee) => employee.renderHTML())
    );

    teamArrHtml.push(
        employee
            .filter((employee) => employee.getRole() === 'Engineer')
            .map((employee) => employee.renderHTML())
    );

    teamArrHtml.push(
        employee
            .filter((employee) => employee.getRole() === 'Intern')
            .map((employee) => employee.renderHTML())
    );

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
