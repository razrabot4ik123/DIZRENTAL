# I have implemented a car rental layout
Here you can see the implementation of the layout **[DIZRENTAL](https://www.figma.com/design/Xz2zuX7Uus6inkUqLVdLyI/Landing-page---%D0%90%D1%80%D0%B5%D0%BD%D0%B4%D0%B0-%D0%B0%D0%B2%D1%82%D0%BE-(Copy)?node-id=8021-1173&t=b9N5GIg5bCxTCtAh-0 )**

## Languages ​​in which the layout was implemented

### 1. **css**
code example:
```css
.preloader {
    position: fixed;
    inset: 0;
    z-index: 1001;
    background: #f4f4f4;
}
```
### 2. **html**
code example:
```html
<div class="preloader">
        <div class="preloader__row">
            <h1 class="preloader__title title">Загрузка</h1>
            <div class="preloader__road"></div>
            <div class="preloader__city"></div>
            <div class="preloader__car">
                <img src="img/preloader/car.png" alt="машина прелоадер">
                <div class="preloader__wheels">
                    <img class="preloader__wheel" src="img/preloader/wheel.png" alt="колесо">
                    <img class="preloader__wheel" src="img/preloader/wheel.png" alt="колесо">
                </div>
            </div>
        </div>
    </div>
```
### 3. **js**
code example:
```js
if (window.innerWidth >= 1000) {

        window.onload = function () {
            window.setTimeout(function () {
                document.body.classList.add('loaded_hiding')
                window.setTimeout(function () {
                    document.body.classList.remove('preloader--opened')
                    document.body.classList.add('loaded')
                    document.body.classList.remove('loaded_hiding')
                }, 500)
            }, 2000)
        }
    } else {
        document.body.classList.remove('preloader--opened')
        document.body.classList.add('loaded')
    }
```
## This repository was created to demonstrate my skills
I will be glad to see your ratings
