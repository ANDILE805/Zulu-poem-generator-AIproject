function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  apiKey = "cd7ff0b39233e546tfae64f37ao44b9a";
  let prompt = `Generate an English poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem AI assistant and love writting short poems and separate each line with a <br />. Your mission is to generate a 5 line poem in basic HTML. Make sure to follow the user instructions. Sing the poem with 'SheCodes AI' inside a <strong> element at the end of the poem  and not at the beginning, remove the word html that gets generated at the beginning of the poem. Strictly in English";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `<div class="generating">⏳ Generating an English poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
