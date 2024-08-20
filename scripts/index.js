const initialCards = [ 

   { name:'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg',
   },

    { name:'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg',
    },

    { name:'Bald Mountains',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg',
    },

    { name:'Latemar',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg',
    },

    { name:'Vanoise National Park',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg',
    },

    { name:'Lago di Braies',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg',
    },
];


/*-----------------------------------------------------------------*/
/*                            Elements                             */
/*-----------------------------------------------------------------*/
const buttonEdit = document.querySelector('#js-edit-button');
const profileEditModal = document.querySelector('#profile-edit-modal');
const closeEditForm = document.querySelector('#close-edit-btn');

const profileFormElement = profileEditModal.querySelector('.modal__form');

const nameInput = document.querySelector('#title-input');
const jobInput = document.querySelector('#job-input');


const profileName = document.querySelector('#profile_name');
const profileJob = document.querySelector('#profile_job');
const cardTemplate = document.querySelector('#card-template').content;
const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
const cardContainer = document.querySelector('.cards__list');





/*-----------------------------------------------------------------*/
/*                           Functions                             */
/*-----------------------------------------------------------------*/
function closePopup() {
  profileEditModal.classList.remove('modal_opened');
}


function getCardElement (cardData) {
    const cardElement = cardTemplate.cloneNode(true); // Clone the template
    const cardTitleTem = cardElement.querySelector('.card__title'); // Select title element
    const cardImageTem = cardElement.querySelector('.card__image'); // Select image element
    

    cardTitleTem.textContent = cardData.name; 
    cardImageTem.src = cardData.link; 
    cardImageTem.alt = cardData.name; // Optionally, set an alt attribute for accessibility

  return cardElement;
}

/*-----------------------------------------------------------------*/
/*                         Event Handlers                          */
/*-----------------------------------------------------------------*/

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}
/*-----------------------------------------------------------------*/
/*                         Event Listeners                         */
/*-----------------------------------------------------------------*/
buttonEdit.addEventListener('click', function () {
  jobInput.value = profileJob.textContent;
  nameInput.value = profileName.textContent;

  profileEditModal.classList.add('modal_opened');

});

closeEditForm.addEventListener('click', function () {
  closePopup();
});

profileFormElement.addEventListener('submit', handleProfileFormSubmit);


initialCards.forEach((cardData) => {
    const cardElement = getCardElement(cardData);
    // Append the card to a container element in the DOM
    cardContainer.appendChild(cardElement);
});



//clone the template element with all its content and store it in a cardElement variable
//access the card title and image and store them in variables
//set the path to the image to the link field of the object
//set the image alt text to the name field of the object
//set the card title to the name field of the object, too
//return the ready HTML element with the filled-in data



  // Example: Select the first and last inputs based on their position
  // const firstInput = inputs[0]; // First input
  // const lastInput = inputs[inputs.length - 1]; // Last input

  // Additional example: Add custom data attributes to the first and last input
  // firstInput.dataset.style = 'first';
  // lastInput.dataset.style = 'last';

  