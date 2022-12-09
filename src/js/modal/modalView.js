export default function render(args) {
    const markup = `
            <div class="modal__content">
                    <div class="modal__title modal__title-message">
                        ${args[0]}
                    </div>
                <div class="modal__message">${args[1]}</div>
            </div>
    `;

    const modalContainer = document.createElement('div');
    modalContainer.id = 'messageModal';
    modalContainer.classList.add('modal-wrapper');

    const modalBody = document.createElement('div');
    modalBody.classList.add('modal');

    const closeBtn = document.createElement('button');
    closeBtn.id = 'messageModalClose';
    closeBtn.classList.add('modal__close');
    closeBtn.innerText = 'Закрыть';

    closeBtn.addEventListener( 'click', () => {modalContainer.remove()} );

    modalContainer.insertAdjacentElement('afterbegin', modalBody);
    modalBody.insertAdjacentHTML('afterbegin', markup);
    modalBody.insertAdjacentElement('beforeend', closeBtn);

    document.querySelector('body').insertAdjacentElement('beforeend', modalContainer)
}
