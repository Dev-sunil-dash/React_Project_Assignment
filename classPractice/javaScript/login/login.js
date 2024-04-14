const dataObj = {
}

function handleLogin() {
    console.log(dataObj)
}

function handleChange(eve) {
    dataObj[eve.target.id] = eve.target.value
}
