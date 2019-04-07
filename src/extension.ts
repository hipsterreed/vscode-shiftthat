import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "shiftthat" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let shiftThatUserDisposable = vscode.commands.registerCommand('extension.shiftThatUser', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Shifted User Settings!!!');
	});

	let shiftThatWorkspaceDisposable = vscode.commands.registerCommand('extension.shiftThatWorkspace', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Shifted Workspace Settings!!!');
	});

	context.subscriptions.push(shiftThatUserDisposable);
	context.subscriptions.push(shiftThatWorkspaceDisposable);

}

// this method is called when your extension is deactivated
export function deactivate() {}
