tinymce.init({
  selector: "#mytextarea",
  height: 400,
  plugins: [
    "advlist autolink lists link image charmap print preview anchor",
    "searchreplace visualblocks code fullscreen",
    "insertdatetime media table paste emoticons"
  ],
  toolbar:
    "styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons",
  skin: "small",
  icons: "",
  setup: function (editor) {
    editor.on("keyup", function (e) {
      updateHTML(editor.getContent());
    });
    editor.on("change", function (e) {
      updateHTML(editor.getContent());
    });
  }
});

function updateHTML(content) {
  cmeditor.getDoc().setValue(content);
}

function updateEditor() {
  if (!tinymce.activeEditor.hasFocus()) {
    tinymce.activeEditor.setContent(cmeditor.getDoc().getValue());
  }
}

var HTMLContainer = document.querySelector(".HTMLContainer");

var cmeditor = CodeMirror(HTMLContainer, {
  lineNumbers: true,
  mode: "htmlmixed"
});

cmeditor.on("change", (editor) => {
  updateEditor();
});
