// write your javascript code here!

import "flowbite"
import { initFlowbite } from "flowbite"

let dotNet = null // this variable will help invoke any method from .razor file (e.g Home.razor)

window.initializeFlowbite = (dotnet) => { 
    dotNet = dotnet
    initFlowbite()
}