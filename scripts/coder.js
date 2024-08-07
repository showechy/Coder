function arrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

function base64ToArrayBuffer(base64) {
  const binary_string = window.atob(base64);
  const len = binary_string.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

async function encryptMessage(key, message) {
  try {
    const enc = new TextEncoder();
    const encodedMessage = enc.encode(message);

    const keyData = enc.encode(key).slice(0, 32);
    const cryptoKey = await window.crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "AES-GCM" },
      false,
      ["encrypt"]
    );

    const iv = window.crypto.getRandomValues(new Uint8Array(12)); // Initial Vector
    const encryptedBuffer = await window.crypto.subtle.encrypt(
      {
        name: "AES-GCM",
        iv: iv,
      },
      cryptoKey,
      encodedMessage
    );

    const ivBase64 = arrayBufferToBase64(iv);
    const encryptedMessageBase64 = arrayBufferToBase64(encryptedBuffer);

    const result = {
      iv: ivBase64,
      message: encryptedMessageBase64,
    };

    return JSON.stringify(result);
  } catch {
    return undefined;
  }
}

async function decryptMessage(key, message) {
  const result = JSON.parse(message);
  const iv = base64ToArrayBuffer(result.iv);
  const encryptedMessage = base64ToArrayBuffer(result.message);

  const enc = new TextEncoder();
  const keyData = enc.encode(key).slice(0, 32);
  const cryptoKey = await window.crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "AES-GCM" },
    false,
    ["decrypt"]
  );

  try {
    const decryptedBuffer = await window.crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: new Uint8Array(iv),
      },
      cryptoKey,
      new Uint8Array(encryptedMessage)
    );
    const dec = new TextDecoder();
    const decryptedMessage = dec.decode(decryptedBuffer);
    return decryptedMessage;
  } catch {
    return undefined;
  }
}
