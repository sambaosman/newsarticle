function handleSubmit() {
    console.log("In HandleSubmit");
    // check what text was put into the form field
    let url = document.getElementById('name').value
    if (url) {
        checkForName(url)
        console.log("::: Form Submitted :::")
        fetch("/article", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: url })
          })
        .then(res => res.json())
        .then(function(res) {
            console.log(res);
            document.getElementById('results').innerHTML = res.toString();
        })
    }
    
}

export { handleSubmit }

window.handleSubmit = handleSubmit;