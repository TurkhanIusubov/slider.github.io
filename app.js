const sliderArea = document.getElementById('slider-area')

const rightArr = document.getElementById('right-arr')
const leftArr = document.getElementById('left-arr')

sliderArea.scrollTo(sliderArea.scrollWidth,0)

var sliderAreaChildrens = sliderArea.childNodes

function createSlideContentPre(x){
    const slideDiv = document.createElement('div')
    slideDiv.classList.add('slider-content')
    slideDiv.setAttribute('style', 'min-width: 0px;')
    const slideImg = document.createElement('img')
    slideImg.src = x

    slideDiv.appendChild(slideImg)
    sliderArea.prepend(slideDiv)
}

function createSlideContentAppe(x){
    const slideDiv = document.createElement('div')
    slideDiv.classList.add('slider-content')
    slideDiv.setAttribute('style', 'min-width: 0px; transform: translateX(300px);')
    const slideImg = document.createElement('img')
    slideImg.setAttribute('style', 'width: 100%;')
    slideImg.src = x

    slideDiv.appendChild(slideImg)
    sliderArea.appendChild(slideDiv)
}


rightArr.addEventListener('click', () => {
    // console.log('right')
    sliderArea.scrollTo(400,0)

    rightArr.setAttribute('style', 'pointer-events: none;')
    
    sliderArea.children[sliderArea.children.length - 2].setAttribute('style', ' position: relative; z-index: 1; object-fit:cover; height: 300px; margin-right: 0;')
    sliderArea.children[sliderArea.children.length - 2].children[0].setAttribute('style', 'filter: blur(0px); width: 100%;')

    sliderArea.children[sliderArea.children.length - 1].setAttribute('style', ' position: relative; z-index: 0; height: 265px; min-width: 0px !important; margin:0px;')
    sliderArea.children[sliderArea.children.length - 1].children[0].setAttribute('style', 'filter: blur(10px) grayscale(100); width: 320px;')
    
    
    setTimeout(() => {
        sliderArea.children[sliderArea.children.length - 1].remove()
        rightArr.setAttribute('style', 'pointer-events: all;')
        }, 300);


    createSlideContentPre(sliderArea.children[sliderArea.children.length - 1].children[0].src)
    setTimeout(() => {
        sliderArea.children[0].setAttribute('style', 'min-width: 350px;')
    }, 10);
    sliderArea.scrollTo(sliderArea.scrollWidth,0)
})


leftArr.addEventListener('click', () => {
    
    sliderArea.children[sliderArea.children.length - 1].setAttribute('style', 'height: 265px; min-width: 350px;')
    sliderArea.children[sliderArea.children.length - 1].children[0].setAttribute('style', 'filter: blur(10px) grayscale(100); width: 320;')
    createSlideContentAppe(sliderArea.children[0].children[0].src)
    
    setTimeout(() => {
        sliderArea.children[sliderArea.children.length - 1].setAttribute('style', 'min-width: 350px; height:300px; object-fit:cover; margin-right: 0;')
        setTimeout(() => {
            sliderArea.scrollTo(sliderArea.scrollWidth,0)
        }, );
    }, 10);
    sliderArea.children[0].remove()
})














