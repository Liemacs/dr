
    // const form = document.getElementById('myForm');
    const errorContainer = document.getElementById('errorContainer');

    // form.on('submit', '.myForm', function(event) {
    //     event.preventDefault(); // Prevent form submission and page refresh

    //     const inputValue = inputElement.value.trim().toLowerCase();

    //     if (inputValue === "rabbit") {
    //         // Show success message
    //         console.log(inputValue);
    //     } else {
    //         // Show error message
    //         showError("Invalid input.");
    //     }
    // });

    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.innerText = message;
        errorDiv.classList.add('error-message');
        $('.container').append(errorDiv);
        setTimeout(() => {
            errorDiv.classList.add('fade-out');
            setTimeout(() => {
                errorDiv.remove();
            }, 1000); // Remove the error message after the fade-out animation (1000 milliseconds)
        }, 1000); // Show the error message for 3 seconds before starting the fade-out animation (3000 milliseconds)
    }

function addNewForm(index, question, answer, color) {
    var formContent = `
        <form class="myForm pop">
            <span onclick="bindCloseButton()">✖</span>
            <h1>${index} вопрос</h1>
            <p>${question}</p>
            <input type="text" id="inputField">
            <div class="button" onclick="controll('${answer}', '${color}' )">Отправить</div>
        </form>
    `;
    // Append the form content to the body of the page
    $('.container').append(formContent);
}


function controll(txt, color) {
    const inputElement = document.getElementById('inputField');
    if (inputElement.value.trim().toLowerCase() === txt) {
                // Show success message
                $(`.present.${color} .number`).addClass('show')
                bindCloseButton()
            } else {
                // Show error message
                showError("Не правельно. 😔😔");
            }
}

function openPopUp(color) {
    if($(`.present.${color} .number`).hasClass('show')) {
        bindCloseButton()
    } else {
        bindCloseButton()
    if(color == 'orange'){
        addNewForm('Первый', 'Где состоялось наше первое официальное свидание?', 'black rabbit', color)
    } else if (color == 'blue') {
        addNewForm('Второй', 'Как я чаще всего тебя называю?', 'солнышко', color)
    } else if (color == 'green') {
        addNewForm('Третий', 'Знак месяца, когда мы начали встречаться?', 'козерог', color)
    }
    $(".pop").fadeIn(300);
    }
    
}

function bindCloseButton() {
    $('.myForm').remove(); // Remove the form element when the close button is clicked

}
   
