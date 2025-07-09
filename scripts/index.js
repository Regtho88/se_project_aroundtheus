document.addEventListener('DOMContentLoaded', () => {
  const initialCards = [ 
    { name: 'Yosemite Valley', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg' },
    { name: 'Lake Louise', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg' },
    { name: 'Bald Mountains', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg' },
    { name: 'Latemar', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg' },
    { name: 'Vanoise National Park', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg' },
    { name: 'Lago di Braies', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg' }
  ];

  // ⬇️ DOM selections and event listeners below this point:
  const buttonEdit = document.querySelector('#js-edit-button');
  const profileEditModal = document.querySelector('#profile-edit-modal');
  const profileEditCloseButton = document.querySelector('#close-edit-btn');
  const addButton = document.querySelector('#add-card-button');
  const addModal = document.querySelector('#add-card-modal');
  const closeAddButton = document.querySelector('#close-add-btn');
  const profileFormElement = profileEditModal.querySelector('.modal__form');
  const addCardForm = document.querySelector('#add-card-form');

  const nameInput = document.querySelector('#title-input');
  const jobInput = document.querySelector('#job-input');
  const profileName = document.querySelector('#profile_name');
  const profileJob = document.querySelector('#profile_job');

  const cardTemplate = document.querySelector('#card-template');
  const cardContainer = document.querySelector('.cards__list');

  const closeImageButton = document.getElementById('close-image-btn');
  const imageModal = document.getElementById('image-modal');
  const imageModalImage = imageModal.querySelector('.modal__image');
  const imageModalCaption = imageModal.querySelector('.modal__caption');

  function openPopup(modal) {
    modal.classList.add('modal_opened');
  }

  function closePopup(modal) {
    modal.classList.remove('modal_opened');
  }

  function getCardElement(cardData) {
    const cardFragment = cardTemplate.content.cloneNode(true);
    const cardElement = cardFragment.querySelector('.card');

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
      openPopup(imageModal);
    });

    trashButton.addEventListener('click', () => {
      cardElement.remove();
    });

    likeButton.addEventListener('click', () => {
      likeButton.classList.toggle('card__like-button_liked');
    });

    return cardElement;
  }

  function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(profileEditModal);
  }

  function handleAddCardSubmit(evt) {
    evt.preventDefault();
    const title = addCardForm.elements['title'].value.trim();
    const imageUrl = addCardForm.elements['description'].value.trim();

    if (!title || !imageUrl) {
      alert('Please enter both a title and an image URL.');
      return;
    }

    const newCard = getCardElement({ name: title, link: imageUrl });
    cardContainer.prepend(newCard);
    addCardForm.reset();
    closePopup(addModal);
  }

  // 🔁 Render initial cards
  initialCards.forEach((cardData) => {
    const cardElement = getCardElement(cardData);
    cardContainer.appendChild(cardElement);
  });

  // 🔗 Event listeners
  buttonEdit.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(profileEditModal);
  });

  profileEditCloseButton.addEventListener('click', () => closePopup(profileEditModal));
  closeAddButton.addEventListener('click', () => closePopup(addModal));
  closeImageButton.addEventListener('click', () => closePopup(imageModal));
  addButton.addEventListener('click', () => openPopup(addModal));

  profileFormElement.addEventListener('submit', handleProfileFormSubmit);
  addCardForm.addEventListener('submit', handleAddCardSubmit);
});




  
