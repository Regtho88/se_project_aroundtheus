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
const profileEditCloseButton = document.querySelector('#close-edit-btn');
const profileAddButton = document.querySelector('#profile')
const addButton = document.querySelector('#add-card-button');
const addModal = document.querySelector('#add-card-modal');
const closeBtn = document.getElementById('closeFormBtn');
const closeAddButton = document.querySelector('#close-add-btn'); 




const profileFormElement = profileEditModal.querySelector('.modal__form');

const nameInput = document.querySelector('#title-input');
const jobInput = document.querySelector('#job-input');


const profileName = document.querySelector('#profile_name');
const profileJob = document.querySelector('#profile_job');
const cardTemplate = document.querySelector('#card-template');
// const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
const cardContainer = document.querySelector('.cards__list');

const addCardForm = document.querySelector('#add-card-form');




/*-----------------------------------------------------------------*/
/*                           Functions                             */
/*-----------------------------------------------------------------*/
function closePopup(modal) {
  modal.classList.remove('modal_opened');
}


function getCardElement(cardData) {
  const cardFragment = cardTemplate.content.cloneNode(true); // clone the template content
  const cardElement = cardFragment.querySelector('.card');   // get the actual card <li>

  // Populate the card content
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const trashButton = cardElement.querySelector('.card__trash-button');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardImage.addEventListener('click', () => {
    imageModalImage.src = cardData.link;
    imageModalImage.alt = cardData.name;
    imageModalCaption.textContent = cardData.name;
    imageModal.classList.add('modal_opened');
  });
  

  // 🗑️ Trash Button
  trashButton.addEventListener('click', () => {
    cardElement.remove(); // removes the actual card
  });

  // ❤️ Like Button
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card__like-button_liked');
  });

  return cardElement; // must return the <li class="card">, not the fragment!
}

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  // Append the card to a container element in the DOM
  cardContainer.appendChild(cardElement);

/*-----------------------------------------------------------------*/
/*                         Event Handlers                        */
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

addButton.addEventListener('click', function () {
  addModal.classList.add('modal_opened');
} ) 

// addCardForm.addEventListener('submit', handleAddCardSubmit);

profileEditCloseButton.addEventListener('click', function () {
  closePopup(profileEditModal);
});

closeAddButton.addEventListener('click', function () {
closePopup(addModal);

})

profileFormElement.addEventListener('submit', handleProfileFormSubmit);


});


  
