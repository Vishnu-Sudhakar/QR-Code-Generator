function generateQRCode() {
    // Get the input value
    const inputValue = document.getElementById('text-input').value;

    // Get the element where the QR code will be displayed
    const qrcodeContainer = document.getElementById('qrcode');

    // Clear any existing QR code
    qrcodeContainer.innerHTML = '';

    // Generate the QR code
    const qrcode = new QRCode(qrcodeContainer, {
        text: inputValue,
        width: 100,
        height: 100
    });
}
