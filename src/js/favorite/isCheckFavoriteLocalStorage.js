import { LOCALSTORAGE_KEYS, setLowerText } from "./addToLocalStorage"
import { changeLikeImg } from "./changeLikeImg";
import { getLocalStorage } from "./getToLocalStorage"



export function isCheckFavoriteLocalStorage(data) {
    console.log("is check favorite localStorage")
    try {
        const arrLocalStorage = getLocalStorage(LOCALSTORAGE_KEYS.favorite) || [];
        const arrTitle = arrLocalStorage.map(item => setLowerText(item.title));
     
        if (!!arrTitle.length) {
            for (const item of data) {

                const [elementImgWrapperm, elementDescription] = [...item.children];

                [...elementDescription.children].map(item2 => {
                    if (item2.classList.contains("card__title")) {
                        
                        if (arrTitle.includes(item2.textContent.trim().toLowerCase())) {
                            item.dataset.isFavorite = 1
                            const elementImg = elementImgWrapperm.firstElementChild.firstElementChild;
                            elementImg.src = changeLikeImg().like
                        }
                       
                    } 
                })
            }
        }

    } catch (err) {
        console.log(err)
    }
}



// export function toggleCardLike(data, toggleLike, arrTitle) {
//     console.log("function get title")
//     console.log(data)
//     const [elementImgWrapperm, elementDescription] = data;

//     [...elementDescription.children].map(item2 => {
//         if (item2.classList.contains("card__title")) {
//             if (arrTitle.includes(item2.textContent.trim().toLowerCase())) {
//                 let elementImg = null;
//                 switch(toggleLike) {
//                     case "add" :
//                             data.dataset.isFavorite = 1;
//                             elementImg = elementImgWrapperm.firstElementChild.firstElementChild;
//                             elementImg.src = changeLikeImg().like

//                         break;
//                     // case "delete" :
//                     //     data.dataset.isFavorite = 0;
//                     //     elementImg = elementImgWrapperm.firstElementChild.firstElementChild;
//                     //     elementImg.src = changeLikeImg().dislike
//                     //     break;
//                 }
//             }
//         }
//     })


// }