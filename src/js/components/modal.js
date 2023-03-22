// M O D A L  CLOSE
let contactsModalClose = document.querySelector('.contacts-modal__close');
let contactsModal = document.querySelector('.contacts-modal');

contactsModalClose.addEventListener('click', function(){
	contactsModalClose.classList.toggle('active');
	contactsModal.classList.toggle('active');
})
