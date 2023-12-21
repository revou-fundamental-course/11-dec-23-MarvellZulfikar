
  const form = document.getElementById("input");
  const name = document.getElementById("name");
  const date = document.getElementById("date");
  const message = document.getElementById("news");
  const submit = document.getElementById("submit");
  const response = document.getElementById("response");


  document.addEventListener("DOMContentLoaded", function() {
    const promt = prompt("Hi, can you write your name here?", "");
    document.getElementById("user").innerHTML = promt;
  });


  form.addEventListener("submit", (e)=> {
    if (name.value == "" || date.value == "" || news.value == "") {
      alert("tidak boleh kosong");
    } else {
      response.innerHTML = name.value;
      response.innerHTML += date.value;
      response.innerHTML += news.value;
    }

    e.preventDefault();
    return false;
  })
