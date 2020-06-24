////////// Mobile Navigation
const mobileNavigation = (() => {
    const hamburger = document.querySelector(".hamburger");
    const cancel = document.querySelector(".cancel");
    const mobileNav = document.querySelector(".mobileNav");
    const list = document.querySelector(".mobileNav__list").querySelectorAll("a");    
    
    const displayNav =() => mobileNav.classList.remove("noDisplay");
    const hideNav =() => mobileNav.classList.add("noDisplay");
    
    list.forEach(cur => cur.addEventListener("click", hideNav))
    hamburger.addEventListener("click", displayNav);
    cancel.addEventListener("click", hideNav);  
})()

////////// animation of each section
const animateSection = (() => {
    const animate = (section) => {
        const smallPlane = section.querySelector(".heading").querySelector(".heading__img");
        const introPosition = smallPlane.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;
    
        introPosition < screenPosition ? smallPlane.classList.add("moveSmallPlane") : smallPlane.classList.remove("moveSmallPlane")
        introPosition < 0 ? smallPlane.classList.remove("moveSmallPlane") : null
    }

    const allJet = document.querySelectorAll(".heading__img");

    const fleet = () => {
        const element = allJet[0].parentElement.parentElement;
        const introPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;
        
        if (introPosition < screenPosition) {
            element.querySelector(".fleet__img").classList.remove("rotate")
            element.querySelector(".para").classList.remove("enter")
            element.querySelector(".levels").classList.remove("enterR")
        } else {
            element.querySelector(".fleet__img").classList.add("rotate")
            element.querySelector(".para").classList.add("enter")
            element.querySelector(".levels").classList.add("enterR")
        }

        if (introPosition < -200) {
            element.querySelector(".fleet__img").classList.add("rotate")
            element.querySelector(".para").classList.add("enter")
            element.querySelector(".levels").classList.add("enterR")
        }
    }

    const courses = () => {
        const element = allJet[1].parentElement.parentElement;
        const introPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;
        console.log(introPosition, screenPosition)
        const allCourses = element.querySelector(".box").querySelectorAll('.box__item')

        if (introPosition < screenPosition) {
            allCourses.forEach(cur => cur.classList.remove("enterU"))

        } else {
            allCourses.forEach(cur => cur.classList.add("enterU"))
        }
        if (introPosition < -screenPosition*1.5) {
            allCourses.forEach(cur => cur.classList.add("enterU"))
        }
    }

    const students = () => {
        const element = allJet[2].parentElement.parentElement;
        const introPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;
       
        if (introPosition < screenPosition) {
            element.querySelector(".students__img").classList.remove("rotate")
            element.querySelector(".details").classList.remove("enterR")

        } else {
            element.querySelector(".students__img").classList.add("rotate")
            element.querySelector(".details").classList.add("enterR")
        }
        if (introPosition < -screenPosition) {
            element.querySelector(".students__img").classList.add("rotate")
            element.querySelector(".details").classList.add("enterR")
        }

    }

    const expert = () => {
        const element = allJet[3].parentElement.parentElement;
        const introPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;
        // console.log(introPosition, screenPosition)
       
        const allExperts = element.querySelector(".box").querySelectorAll('.box__item')

        if (introPosition < screenPosition) {
            allExperts.forEach(cur => cur.classList.remove("enterU"))

        } else {
            allExperts.forEach(cur => cur.classList.add("enterU"))
        }
        // if (introPosition < -screenPosition*2) {
        //     allExperts.forEach(cur => cur.classList.add("enterU")) 
        // }
    }

    allJet.forEach(jet => {
        const parent = jet.parentElement.parentElement;
        window.addEventListener('scroll', () => {
            animate(parent)
            fleet()
            courses()
            students()
            expert()
        });
    })
})()


/////// Nav bar hide 
const navBar = (() => {
})()
let prevScroll = window.pageYOffset
window.addEventListener("scroll", () => {
    let curScroll = window.pageYOffset
    if(prevScroll < curScroll ) {
        document.querySelector("nav").classList.add("noDisplay")
    } else {
        document.querySelector("nav").classList.remove("noDisplay")
    }

    prevScroll = curScroll
})