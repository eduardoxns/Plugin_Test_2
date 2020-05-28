

//PLUGIN CAMERA

$(document).on("click", "#camera", function()
{
  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
  destinationType: Camera.DestinationType.FILE_URI, correctOrientation: true, saveToPhotoAlbum: true });

  function onSuccess(imageURI) 
  {
    var image = document.getElementById('imagem');
    image.src = imageURI;
  }
  function onFail(message) 
  {
    alert('Failed because: ' + message);
  }
});


//PLUGIN CODIGO DE BARRAS

$(document).on("click", "#codigo", function()
{
  cordova.plugins.barcodeScanner.scan(
    function (result) 
    {
      alert("Código de barras\n" +
            "Resultado: " + result.text + "\n" +
            "Formato: " + result.format + "\n" +
            "Cancelado: " + result.cancelled);
    },
    function (error) 
    {
      alert("Falha no escaneamento: " + error);
    },
    {
      preferFrontCamera : false, // iOS and Android
      showFlipCameraButton : true, // iOS and Android
      showTorchButton : true, // iOS and Android
      torchOn: false, // Android, launch with the torch switched on (if available)
      saveHistory: true, // Android, save scan history (default false)
      prompt : "Place a barcode inside the scan area", // Android
      resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      formats : "QR_CODE,PDF_417,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
      orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
      disableAnimations : true, // iOS
      disableSuccessBeep: false // iOS and Android
    }
  );
});


//PLUGIN TESTE DE CONEXAO

function testarConexao() 
{
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Conexão desconhecida';
    states[Connection.ETHERNET] = 'Conexão Ethernet';
    states[Connection.WIFI]     = 'Conexão WiFi';
    states[Connection.CELL_2G]  = 'Conexão 2G';
    states[Connection.CELL_3G]  = 'Conexão 3G';
    states[Connection.CELL_4G]  = 'Conexão 4G';
    states[Connection.CELL]     = 'Conexão genérica de celular';
    states[Connection.NONE]     = 'Sem conexão com a internet';

    alert('Tipo de conexão: ' + states[networkState]);
}

$(document).on("click", "#conexao", function()
{
  testarConexao();
});