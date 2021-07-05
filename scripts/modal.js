

function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('mostrar')
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.className == 'cl_popup') {
                modal.classList.remove('mostrar')
            }
        })
    }
}

const callModal = document.querySelector('.btn-g');
callModal.addEventListener('click', () => iniciaModal('form_modal'));