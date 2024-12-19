// write your javascript code here!

import "flowbite"
import { initFlowbite } from "flowbite"
 
// There is a special global variable that is already exists it's called DotNet
// This DotNet variable will allow you to call any method from your .razor (e.g Home.razor)

window.initializeFlowbite = () => {
    console.log(DotNet)
    initFlowbite()  
} 
