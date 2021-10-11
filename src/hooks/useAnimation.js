import { useEffect } from "react"

export const useAnimationTitle = () => {
    useEffect(() => {        
        const title = document.getElementsByClassName('title-main');        
        setTimeout(() => {
            Array.prototype.forEach.call(title, (element) => {
                element.classList.add('animation-title-main');
            })                 
        }, 1500);                 
    }, []);
}

export const useAnimationBackground = () => {
    const background = document.getElementsByClassName('background-main')[0];
    const flag = background.classList.contains('change-background')
    const flag1 = background.classList.contains('change-background1')
    if(flag && flag1) {
        background.classList.remove('change-background')
        background.classList.remove('change-background1')        
    }else if(flag) {                       
        background.classList.add('change-background1');
        background.classList.remove('change-background') 
    }else if(flag1) {
        background.classList.remove('change-background1')                       
    }else background.classList.add('change-background'); 
}