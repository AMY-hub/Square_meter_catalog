export function render() {
    const markup = `
                <div id="preloader" class="container">
                    <div class="preloader-holder">
                        <div class ="preloader__message">Подождите, страница загружается...</div>
                        <div class="sk-folding-cube">
                            <div class="sk-cube sk-cube-1"></div>
                            <div class="sk-cube sk-cube-2"></div>
                            <div class="sk-cube sk-cube-4"></div>
                            <div class="sk-cube sk-cube-3"></div>
                        </div>
                    </div>
                </div> 
                `;
console.log('Show');
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
}

export function remove() {
    console.log('Hide');
    document.querySelector('#preloader').remove();
}