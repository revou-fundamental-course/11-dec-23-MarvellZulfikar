
  const form = document.getElementById("input");
  const namee = document.getElementById("name");
  const date = document.getElementById("date");
  const message = document.getElementById("news");
  const submit = document.getElementById("submit");
  const response = document.getElementById("response");


  document.addEventListener("DOMContentLoaded", function() {
    const promt = prompt("Hi, can you write your name here?", "");
    document.getElementById("user").innerHTML = promt;
  });


  form.addEventListener("submit", (e)=> {
    if (namee.value == "" || date.value == "" || news.value == "") {
      alert("tidak boleh kosong");
    } else {
      const rusername = document.getElementById("response-name");
      const rdate = document.getElementById("response-date");
      const rmessage = document.getElementById("response-message");

      rusername.innerHTML = namee.value;
      rdate.innerHTML = date.value;
      rmessage.innerHTML = news.value;
    }

    e.preventDefault();
    return false;
  })
