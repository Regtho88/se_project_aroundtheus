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

const buttonEdit = document.querySelector('#js-edit-button');
const profileEditModal = document.querySelector('#profile-edit-modal');
const closeEditForm = document.querySelector('#close-edit-btn');

const profileFormElement = profileEditModal.querySelector('.modal__form');

const nameInput = document.querySelector('.modal__heading');
const jobInput = document.querySelector('.modal__description');

const profileName = document.querySelector('#profile_name');
const profileJob = document.querySelector('#profile_job');
const cardTemplate = document.querySelector('#card-template').content;
const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
const cardContainter = document.querySelector('.cards__list');
/*-----------------------------------------------------------------*/
/*                           Functions                             */
/*-----------------------------------------------------------------*/
function closePopup() {
  profileEditModal.classList.remove('modal_opened');
}


function getCardElement (data) {
  const cardImageTem = cardElement.querySelector('.card__image');
  const cardTitleTem = cardElement.querySelector('.card__description');
  cardTitleTem.textContent = data.name;
  cardImageTem.src = data.link;
  cardTitleTem.alt = data.name;
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
  profileEditModal.classList.add('modal_opened');
});

closeEditForm.addEventListener('click', function () {
  closePopup();
});

profileFormElement.addEventListener('submit', handleProfileFormSubmit);


function getCardElement(data) {
  console.log(data);
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
}
