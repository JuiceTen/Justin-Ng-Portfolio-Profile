let download = $('#download')

function pdfDownload() {
fetch("./Assets/Justin-Ng.pdf")
  .then(resp => resp.blob())
  .then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    // the filename you want
    a.download = 'Justin-Ng-Resume.pdf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    console.log('your file has downloaded!');
  })
  .catch(() => console.log('oh no!'));
}
download.on("click", pdfDownload);

