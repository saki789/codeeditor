function runCode() {
  const codeInput = document.getElementById("codeInput").value;
  const outputFrame = document.getElementById("outputFrame");

  // Create a new document in the iframe
  const iframeDoc = outputFrame.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(codeInput);
  iframeDoc.close();
}
