var key = "";
var tocipher = "";
var todecipher = ""

$("#js-key").on("input", function() {
  key = vm_key.$data.key;
  key = key.replace(/\s+/g, "").toUpperCase().split("");
});

$("#js-tocipher").on("input", function() {
  tocipher = vm_cipher.$data.tocipher;
  tocipher = tocipher.replace(/\s+/g, "").toUpperCase();
  vm_cipher.$data.ciphered = encycrpt(tocipher);
  tocipher = "";
});

$("#js-todecipher").on("input", function() {
  todecipher = vm_decipher.$data.todecipher;
  todecipher = todecipher.replace(/\s+/g, "").toUpperCase();
  vm_decipher.$data.deciphered = decycrpt(todecipher);
  todecipher = "";
});
