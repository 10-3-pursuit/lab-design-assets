document.addEventListener("DOMContentLoaded", function () {
    var projectLinks = document.querySelectorAll(".project-link");
    var projectDetails = document.getElementById("projectDetails");
    var projectButtonsContainer = document.getElementById("projectButtonsContainer");

    projectLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            // Prevent the default link behavior

            // Get the project name from the clicked link
            var projectName = this.innerText;

            // Get the project details and links based on the project name
            var { details, githubLink, websiteLink } = getProjectDetails(projectName);

            // Update the project details content
            projectDetails.innerHTML = details;

            // Clear existing buttons in the container
            projectButtonsContainer.innerHTML = "";

            // Create GitHub and Website buttons
            createButton("GitHub", githubLink, projectButtonsContainer);
            createButton("Website", websiteLink, projectButtonsContainer);
        });
    });

    // Function to create a button
    function createButton(label, link, container) {
        var button = document.createElement("button");
        button.innerText = label;
        button.addEventListener("click", function () {
            window.open(link, "_blank");
        });
        container.appendChild(button);
    }

    // Function to get project details and links based on the project name
    function getProjectDetails(projectName) {
        var details = "";
        var githubLink = "";
        var websiteLink = "";

        switch (projectName) {
            case "Online Game store simulator":
                details = "Welcome to an incredible web application that brings the virtual game store management experience to life. This remarkable tool allows users to simulate game store functionalities with precision, effortlessly keeping track of inventory. Users can seamlessly add new games, complete with immersive images, enhancing the overall gaming experience. The project's considerate design ensures a visually appealing presentation, even when a game image URL is missing or invalid. Beyond its user-friendly interface, the application empowers effective game collection management, enabling easy removal of games and providing an intuitive 'In Stock' toggle for availability status. With detailed inputs for game name, price, image URL, age rating, and descriptions, users can curate a comprehensive and informative virtual game store. Dive into this exceptional project for a seamless and immersive journey in creating and managing your virtual game store.";
                githubLink = "https://github.com/MichaelARestrepoross/game-inventory-web-application";
                websiteLink = "https://michaelarestrepoross.github.io/game-inventory-web-application/";
                break;
            case "Trivia questions":
                details = "Explore a dynamic web application that generates random trivia questions tailored to your preferred difficulty level—easy, normal, or hard. With an extensive range of topics to choose from, you can enjoy trivia sessions spanning diverse categories. Whether you're a history buff, a science enthusiast, or a pop culture connoisseur, this application has you covered. The easy-to-use selector allows you to pick your desired topic, making each trivia session a personalized and engaging experience. Test your knowledge across a variety of subjects and challenge yourself with questions that cater to your chosen difficulty level. Get ready for a fun and educational journey through the world of random trivia!";
                githubLink = "https://github.com/MichaelARestrepoross/lab-api-calls-with-promises-and-fetch";
                websiteLink = "https://michaelarestrepoross.github.io/lab-api-calls-with-promises-and-fetch";
                break;
            case "Game Store application with buying functionality":
                details = "It is a digital simulation of a game store where users will be able to create, delete, or update games, saving them in the store. The system also contains a library of over 100 games with preset prices, although they are not necessary. If a user wants to add a game that is not on the list of set prices, it will still work with a default price.Using the Game Store Project, users will also be able to simulate purchasing a game by adding games to a cart, which is saved until the purchase is complete. They can check out using a customer account that will be saved for future use.The Game Store Project may also create, delete, or show these users with a randomized 4-characterID , name, their current balance, and whether they have a membership, which gives them a 10% discount.";
                githubLink = "https://github.com/MichaelARestrepoross/Game-Store";
                websiteLink = "https://example.com/game-store";
                break;
            case "Simple Color Grid with reset":
                details = "Immerse yourself in the creative world of a web application featuring a simple color grid. This interactive platform allows you to unleash your artistic side by drawing images using a palette of carefully selected colors. The intuitive design enables you to effortlessly switch between colors, and the current color is prominently displayed for your convenience. The application also offers a convenient 'Clear the Board' function, providing a quick reset option without the need to reload the page. Whether you're a seasoned artist or just exploring your artistic flair, this color grid application offers a seamless and enjoyable drawing experience, allowing you to bring your imagination to life with a palette of vibrant hues.";
                githubLink = "https://github.com/MichaelARestrepoross/lab-events";
                websiteLink = "https://michaelarestrepoross.github.io/lab-events/pixel-painter/index.html";
                break;
            default:
                details = "No details available.";
        }

        return { details, githubLink, websiteLink };
    }
});
