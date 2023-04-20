var text = document.getElementById("harga");
var drop = document.getElementById("event");
drop.addEventListener("change", function (e) {
  text.textContent = "Rp. " + e.target.value;
});
