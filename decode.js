var editPlain = $('#initial-text');
var editEncrypted = $('#finalText');
var editPassword = $('#key');

var btnEncrypt = $('#btn-encode');
var btnDecrypt = $('#btn-decode');

function btnEncrypt_OnClick() {
  var msg = editPlain.val().toUpperCase();
  var password = editPassword.val();

  var key = getKey(password);

  var editEncryptedText = encrypt(msg, key);
  editEncrypted.val(editEncryptedText);
}

function btnDecrypt_OnClick() {
  var msg = editPlain.val().toUpperCase();
  var password = editPassword.val();

  var key = getKey(password);

  var editEncryptedText = decrypt(msg, key);
  editEncrypted.val(editEncryptedText);
}

// Obtain an encryption key by adding the codes of all the letters of the password
function getKey(password) {
  var key = 0;

  if (!password) return key;

  for (var i = 0; i < password.length; i++) {
    var code = password.charCodeAt(i);
    key += code;
  }

  return key;
}

// Decrypt a message by using the same encrypt function
// ... but using the inverse of the key (e.g. rotate in the other direction)
function decrypt(msg, key) {
  return encrypt(msg, key * -1);
}

// Function will implement Caesar Cipher to
// encrypt / decrypt the msg by shifting the letters
// of the message acording to the key
function encrypt(msg, key) {
  var encMsg = "";

  for (var i = 0; i < msg.length; i++) {
    var code = msg.charCodeAt(i);

    // Encrypt only letters in 'A' ... 'Z' interval
    if (code >= 65 && code <= 65 + 26 - 1) {
      code -= 65;
      code = mod(code + key, 26);
      code += 65;
    }

    encMsg += String.fromCharCode(code);
  }

  return encMsg;
}

// Modulo function: n mod p
function mod(n, p) {
  if (n < 0) n = p - Math.abs(n) % p;

  return n % p;
}

function copyToClipboard() {
  var copyText = document.getElementById("finalText");
  copyText.select();
  document.execCommand("copy");
}
