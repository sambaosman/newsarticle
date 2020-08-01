function handleSubmit() {
  console.log("In HandleSubmit");
  // check what text was put into the form field
  let url = document.getElementById("name").value;
  if (url) {
    checkForName(url);
    console.log("::: Form Submitted :::");
    fetch("http://localhost:8080/article", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: url }),
    })
      .then((res) => res.json())
      .then(function (res) {
        document.getElementById("polarity").innerHTML = res.polarity;
        document.getElementById("subjectivity").innerHTML = res.subjectivity;
        document.getElementById("excerpt").innerHTML = res.text;
      });
  }
}

export { handleSubmit };

window.handleSubmit = handleSubmit;
