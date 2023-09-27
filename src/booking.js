var button = document.createElement("button");
// button.innerHTML = "Do Something";
button.className = "btn_help";
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
var key = '';
button.addEventListener("click", function () {
  console.log("DATA", key);
  var elem = document.getElementById('786');

  if (elem) {
    elem.parentNode.removeChild(elem);
  }
  else {
    var iframe = document.createElement('iframe');
    iframe.id = "786";
    iframe.className = "iframe_content";
    iframe.src = key.page;
    document.body.appendChild(iframe);
  }
});

function _ohams(params) {
  key = params;
  insertCss(
    `.btn_help {
            position: absolute;
            bottom: 10px;
            right: 10px;
            background-image: url(${key.icon});
            background-repeat: no-repeat;
            background-size: 60px;
            height: 60px;
            width: 60px;
            border: none;
            cursor: pointer;
            background-color: transparent;
          }

          .iframe_content {            
            position: absolute;
            bottom: 85px;
            right: 10px;
            height: 75%;
            border: 1px solid #eee;
            border-radius: 5px;
            width: 30%;
            box-shadow: 5px 5px 25px 0 rgb(46 61 73 / 20%);
          }

          ::-webkit-scrollbar {
            width: 10px;
          }

          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          ::-webkit-scrollbar-thumb {
            background: #888;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          `
  )
}

function insertCss(code) {
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = code;
  } else {
    style.innerHTML = code;
  }
  document.getElementsByTagName("head")[0].appendChild(style);
}
