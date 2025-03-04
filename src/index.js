function displayPoem (response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionInput = document.querySelector("#user-instructions")

    let apiKey = "e0ec6b874369tb90f96386aaf483o95a";
    let context = "You are a haiku expert and enjoy writing poems. Your mission is to generate three line haikus in basic html and separate each line with a <br/>. Make sure to follow the user instructions. Sign the poem with  'SheCodes AI' inside a <strong> element. Do not include a title to the poem.";
    let prompt = `User instructions: Generate a poem about ${instructionInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem);

    

}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);