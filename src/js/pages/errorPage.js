export default function() {
    const markup = `<div class="container">
                        <h1 class="not-found">Страница не найдена.</h1>
                        
                        <div class="container single-item-el">
                        <a href="/" class="back-to-main"
                            >← Вернуться на главную</a
                        >
                    </div>
                    </div>`;

    document.querySelector('#app').innerHTML = markup;
}