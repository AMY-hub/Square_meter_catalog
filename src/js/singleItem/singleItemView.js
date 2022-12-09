export function renderItem(item, isFaved) {
    const container = document.querySelector('#app');
    const favBtnClass = isFaved ? 'button-favourite--active button-favourite' : 'button-favourite';
    const favBtnText = isFaved ? 'В избранном' : 'В избранное';

    const markup =`<div class="container p-0 pt-5 single-item-el">
                        <div class="heading-1">
                            ${item.title}, ${item.square} м2 за ${item.price_total} ₽
                        </div>

                        <!-- object -->
                        <div class="object">
                            <!-- object__photo -->
                            <div class="object__photo">
                                <div class="object__photo-wrapper">
                                    <img src=${item.image} alt="" />
                                </div>
                            </div>
                            <!-- // object__photo -->

                            <!-- object__desc -->
                            <div class="object__desc">
                                <div class="object__desc-sector">
                                    ЖК ${item.complex_name}
                                </div>

                                <div class="object__desc-name">
                                    <div class="object__desc-title">
                                    ${item.title}, ${item.square} м2
                                    </div>
                                    <div class="object__desc-art">${item.scu}</div>

                                    <!-- Добавить в избранное -->
                                    <button class="${favBtnClass}">
                                        <i class="fas fa-heart"></i> <span>${favBtnText}</span>
                                    </button>

                                </div>

                                <div class="object__desc-details">
                                    <!-- params -->
                                    <div class="params">
                                        <div class="params__item">
                                            <div class="params__definition">Корпус</div>
                                            <div class="params__value">${item.building}</div>
                                        </div>
                                        <div class="params__item">
                                            <div class="params__definition">Этаж</div>
                                            <div class="params__value">${item.floor}</div>
                                        </div>
                                        <div class="params__item">
                                            <div class="params__definition">Номер</div>
                                            <div class="params__value">${item.flat_number}</div>
                                        </div>
                                        <div class="params__item">
                                            <div class="params__definition">Комнат</div>
                                            <div class="params__value">${item.rooms}</div>
                                        </div>
                                    </div>
                                    <!-- // params -->
                                </div>

                                <div class="details">
                                    <div class="details__row">
                                        <div class="details__name">Стоимость</div>
                                        <div
                                            class="details__value details__value--price"
                                        >
                                        ${item.price_total} ₽
                                        </div>
                                    </div>
                                    <div class="details__row">
                                        <div class="details__name">Цена за м2</div>
                                        <div class="details__value">${item.price_sq_m} ₽/м2</div>
                                    </div>
                                    <div class="details__row">
                                        <div class="details__name">Площадь</div>
                                        <div class="details__value">${item.square} м2</div>
                                    </div>
                                </div>

                                <button class="button-order">Забронировать</button>
                                <!-- <button class="button-preview">Записаться на просмотр</button> -->
                            </div>
                            <!-- // object__desc -->
                        </div>
                        <!-- // object -->
                    </div>

                    <!--Slider-->

                    <div class="container">
                        <div class="heading-slider">Галерея комплекса</div>
                    </div>

                    <div class="slider">
                            <div class="slider__photo-wrapper">
                                <div class="slider__photo">
                                    <img src="img/gallery/img.jpg" alt="" />
                                </div>
                                <div class="slider__photo none">
                                    <img src="img/gallery/img2.jpg" alt="" />
                                </div>
                                <div class="slider__photo none">
                                    <img src="img/gallery/img3.jpg" alt="" />
                                </div>
                            </div>
                            <div id="btnPrev" class="slider__control slider__control--prev"
                            >
                                <img src="img/gallery/gallery-prev.png" alt="" />
                            </div>
                            <div id="btnNext" class="slider__control slider__control--next">
                                <img src="img/gallery/gallery-next.png" alt="" />
                            </div>
                        </div>
                    <!-- // Slider-->

                    <div class="container single-item-el">
                        <a href="/" class="back-to-results"
                            >← Вернуться к результатам поиска</a
                        >
                    </div>
                </div>`;

    const formModalMarkup = `<div id="formModal" class="modal-wrapper none">
                        <div class="modal">
                            <div class="modal__header">
                                <div class="modal__title">
                                    Заявка на бронирование
                                </div>
                                <div class="modal__details">
                                    Квартира <span>96</span> в Первом квартале Дом 5
                                    <div class="modal__details-art">ГЕН-112-42</div>
                                </div>
                            </div>

                            <form class="modal__form">
                                <div class="modal__form-content">
                                    <!-- formgroup -->
                                    <div class="formgroup">
                                        <label
                                            class="modal__form-input-label"
                                            for="form-phone"
                                        >
                                            Имя
                                        </label>
                                        <input
                                            type="text"
                                            
                                            id="form-name"
                                            class="modal__form-input"
                                            placeholder="Введите имя"
                                        />
                                    </div>
                                    <!-- // formgroup -->
                                    <!-- formgroup -->
                                    <div class="formgroup">
                                        <label
                                            class="modal__form-input-label"
                                            for="form-phone"
                                        >
                                            Телефон
                                        </label>
                                        <input
                                            type="text"
                                            
                                            id="form-phone"
                                            class="modal__form-input"
                                            placeholder="+7 (XXX) XXX-XX-XX"
                                        />
                                    </div>
                                    <!-- // formgroup -->

                                    <div class="formgroup formgroup--checkbox">
                                        <input type="checkbox" id="policy" checked />
                                        <label class="policy-text" for="policy"
                                            >Я согласен на обработку моих персональных
                                            данных. С Политикой в отношении обработки
                                            персональных данных ознакомлен и
                                            согласен.</label
                                        >
                                    </div>
                                </div>
                                <input
                                    class="modal__submit"
                                    type="submit"
                                    value="Отправить заявку"
                                />
                            </form>
                            <button id="formClose" class="modal__close">
                                Закрыть
                            </button>
                        </div>
                    </div>`;

    container.insertAdjacentHTML('beforeend', markup);
    container.insertAdjacentHTML('beforeend', formModalMarkup);
}

export function showFormModal() {
    document.querySelector('#formModal').classList.remove('none');
}

export function hideFormModal() {
    document.querySelector('#formModal').classList.add('none');
}

export function getFormData() {
    const formData = {};
    formData.name = document.querySelector('#form-name').value;
    formData.phone = document.querySelector('#form-phone').value;
    formData.policy = document.querySelector('#policy').checked;
    return formData;
}

export function clearFormFields() {
    document.querySelector('#form-name').value = '';
    document.querySelector('#form-phone').value = '';
}

export function toggleFavBtn(isFaved) {
    const btn = document.querySelector('.button-favourite');
    const btnTextSpan = btn.querySelector('span');
    if( isFaved ) {
        btn.classList.add('button-favourite--active');
        btnTextSpan.innerText = 'В избранном';
    } else {
        btn.classList.remove('button-favourite--active');
        btnTextSpan.innerText = 'В избранное';
    }
}