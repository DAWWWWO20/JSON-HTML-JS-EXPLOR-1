function submitForm(){
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let city = document.getElementById("city").value

    let info = {
        name:name,
        age:age,
        city:city
    }
    let text = JSON.stringify(info,null,2)
    document.getElementById("output").textContent=text    
}
