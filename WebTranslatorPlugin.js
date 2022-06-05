// ==UserScript==
// @name         网页翻译插件模板
// @namespace    https://github.com/scarletkc/WebTranslatorPlugin
// @version      0.1
// @description  将网页的语言更改为各种其他的语言
// @author       Kc
// @match        *://fog.moe/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license      GPL-2.0 License
// ==/UserScript==

(function() {
    'use strict';
    var chosenLang = "";
    var TranslationsCN = {
        "AnEnglishWord":"翻译后的中文",
        "Hello":"你好"

    };    

    function Replace(className,language) {
        var elements = document.getElementsByClassName(className);         
        var loop = setInterval(function(){
            if(elements.length > 0) {
                for (var i = 0; i < elements.length; i++) {
                    var getText = elements[i].childNodes[0].nodeValue;
                    if(language == "zh-CN") {
                        for(getText in TranslationsCN) {
                            elements[i].childNodes[0].nodeValue = TranslationsCN[getText];
                        }
                    }
                }
                clearInterval(loop);
            }
        },3000);    
        /*setTimeout(function () {
            clearInterval(loop);
        }, 5000);*/                   
    }

    if(true){
        chosenLang = "zh-CN"       
    }

    Replace("The First Element Class Name",chosenLang);
    Replace("The Second Element Class Name",chosenLang);


})();