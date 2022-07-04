const vscode = require("vscode");

function activate(context) {
  console.log(
    'Congratulations, your extension "rest-api-tester" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "rest-api-tester.helloWorld",
    function () {
      vscode.window.showInformationMessage("Hello World from REST API Tester!");
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
