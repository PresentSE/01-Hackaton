import "./styles.css";
import { ContextMenu } from "./menu";
import {cursor} from "@/cursor";


new ContextMenu(".menu").add();

let menuItems = document.querySelectorAll('.menu-item');


document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})