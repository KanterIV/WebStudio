(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', handleBackdropClick);
  window.addEventListener('keydown', handleEscapePress);

  function toggleModal() {
    const isHidden = refs.modal.classList.toggle('is-hidden');
    const scrollLockMethod = isHidden
      ? 'enableBodyScroll'
      : 'disableBodyScroll';

    if (!isHidden) {
      document.body.style.paddingRight = '16px';
    } else {
      document.body.style.paddingRight = '';
    }
    if (typeof bodyScrollLock !== 'undefined') {
      bodyScrollLock[scrollLockMethod](document.body);
    }
  }

  function handleBackdropClick(event) {
    if (event.target === refs.modal) {
      toggleModal();
    }
  }

  function handleEscapePress(event) {
    if (
      event.code === 'Escape' &&
      !refs.modal.classList.contains('is-hidden')
    ) {
      toggleModal();
    }
  }
})();
