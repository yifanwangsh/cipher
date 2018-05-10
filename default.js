var key = "";
var tocipher = "";
var todecipher = ""

$("#js-key").on("input", function() {
  key = vm.$data.key;
  key = key.replace(/\s+/g, "").toUpperCase().split("");
});

$("#js-tocipher").on("input", function() {
  tocipher = vm.$data.tocipher;
  vm.$data.ciphered = encycrpt(tocipher);
  tocipher = "";
});

$("#js-todecipher").on("input", function() {
  todecipher = vm.$data.todecipher;
  vm.$data.deciphered = decycrpt(todecipher);
  todecipher = "";
});
