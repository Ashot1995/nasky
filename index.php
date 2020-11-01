<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script
            src="https://code.jquery.com/jquery-1.12.4.min.js"
            integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
            crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>
<div class="d-flex">
    <div class="col-md-8">
        <div class="d-flex justify-content-between m-5 ">
            <button type="button" class="btn btn-outline-info conBut" onclick="conBut('front',false)">Передняя левая нога
            </button>
            <button type="button" class="btn btn-outline-info conBut" onclick="conBut('front',false)">Передняя правая нога
            </button>
            <button type="button" class="btn btn-outline-info conBut" onclick="conBut('back',false)">Назад левая нога</button>
            <button type="button" class="btn btn-outline-info conBut" onclick="conBut('back',false)">Назад правая нога
            </button>
            <button type="button" class="btn btn-outline-info conBut" onclick="conBut('frontBack',false)">Левая нога</button>
            <button type="button" class="btn btn-outline-info conBut right" onclick="conBut('frontBack',true)">Правая нога</button>
        </div>
        <img class="resize-image aaa" src="" style="display: none" alt="image for resizing">

        <div class="constructor">
            <div class="front">
            </div>
            <div class="back">
                <div class="backTop">
                </div>
                <div class="backButton"></div>
            </div>
            <div class="row image_preview_box ">
                <div class="col-md-6 position-relative gago">
                    <img class="image_preview ml-5" src="image/img/ffffff.jpeg" alt="">
                    <img class="choose_iamge" style="display: none" src="" alt="image for resizing">
                </div>
            </div>
        </div>

        <div class="frontBack" style="margin-left: -48px;">
            <div class="par">
                <div class="front2">
                </div>
            </div>
            <div class="par">
                <div class="back2">
                    <div class="backTop"></div>
                    <div class="backButton"></div>
                </div>
            </div>
            <div class="row image_preview_box ">
                <div class="col-md-6 position-relative gago">
                    <img class="image_preview ml-5" src="image/img/ffffff.jpeg" alt="">
                    <img class="choose_iamge" src="" alt="image for resizing">
                </div>
            </div>
        </div>

    </div>
    <div class="col-md-4">
        <div class="isshow">
            <img src="image/add-layer.svg" height="250" width="300" alt="">
            <p>Работа не добавлена<br>
                Поддерживаются только файлы JPG / PNG</p>
            <button type="button" class="btn btn-success conBut m-5 customDesign">Добавит свой дизайн</button>

            <ul>
                <b>Требования к файлу для печати</b>
                <li>Поддерживаются типы файлов JPG и PNG</li>
                <li>Максимальный размер файла 50 МБ</li>
                <li>Рекомендуемый размер 1358 × 3838 пикселей.</li>
            </ul>
        </div>
        <div class="ishide">
            <input type="file" class="custom-file-input">
            <div class="tab">
                <button class="tablinks btn btn-info" onclick="openCity(event, 'London')">Новый Стиль</button>
                <button class="tablinks btn btn-info" onclick="openCity(event, 'Paris')">Моя библиотека</button>
            </div>
            <div id="London" class="tabcontent">
                <button onclick="event.preventDefault(); document.getElementById('file').click();"><img src="image/upload.png" height="100px" width="100px" alt=""> Загрузить картинку, фото</button>
                <input type="file" class="btn js-loadfile " id="file" value="Upload" style="display: none"/>
            </div>

            <div id="Paris" class="tabcontent" style="display: none">
                <h2>Информация о продукте</h2>
                <div class="d-flex justify-content-between">
                    <div><p>Длина носков <span></span></p></div>
                    <div><p class="openModel">Вся длина носков 3</p></div>
                </div>

                <div class="mt-5">
                    <div _ngcontent-ogw-c120="" class="sidebar-scrollable"><h5 _ngcontent-ogw-c120="" class="subtitle">
                        Выберите цвет: </h5>
                        <ul _ngcontent-ogw-c120="" class="list">
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('000000')" class="color-select"
                                        style="background: rgb(0, 0, 0);"></button>
                            </li>
                            <li _ngcontent-ogw-c120=""  class="item">
                                <button _ngcontent-ogw-c120=""  onclick="changeColor('646a6a')" class="color-select"
                                        style="background: rgb(100, 106, 106);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('ffffff')" class="color-select"
                                        style="background: rgb(255, 255, 255);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('b6b5b5')" class="color-select selected"
                                        style="background: rgb(182, 181, 181);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('98989a')" class="color-select"
                                        style="background: rgb(152, 152, 154);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('eb1d26')" class="color-select"
                                        style="background: rgb(235, 29, 38);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('ca1028')" class="color-select"
                                        style="background: rgb(202, 16, 40);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('d173a7')" class="color-select"
                                        style="background: rgb(209, 115, 167);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('c42a86')" class="color-select"
                                        style="background: rgb(196, 42, 134);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('f88033')" class="color-select"
                                        style="background: rgb(248, 128, 51);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('f16220')" class="color-select"
                                        style="background: rgb(241, 98, 32);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('be8042')" class="color-select"
                                        style="background: rgb(190, 128, 66);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('f4bc17')" class="color-select"
                                        style="background: rgb(244, 188, 23);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('6ea748')" class="color-select"
                                        style="background: rgb(110, 167, 72);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('643b13')" class="color-select"
                                        style="background: rgb(100, 59, 19);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('2ba5c7')" class="color-select"
                                        style="background: rgb(43, 165, 199);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('057944')" class="color-select"
                                        style="background: rgb(5, 121, 68);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('0c3f8b')" class="color-select"
                                        style="background: rgb(12, 63, 139);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('73aee3')" class="color-select"
                                        style="background: rgb(115, 174, 227);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('8e69b0')" class="color-select"
                                        style="background: rgb(142, 105, 176);"></button>
                            </li>
                            <li _ngcontent-ogw-c120="" class="item">
                                <button _ngcontent-ogw-c120="" onclick="changeColor('502781')" class="color-select"
                                        style="background: rgb(80, 39, 129);"></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
<button id="submit" class="clearfix btn btn-info" style="margin-left: 60px;">Download</button>



<script src="script.js"></script>
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js
"></script>
<script src="https://superal.github.io/canvas2image/canvas2image.js"></script>

</body>
</html>
