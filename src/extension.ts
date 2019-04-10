import * as vscode from 'vscode';
import { shiftUserSettings, shiftWorkspaceSettings } from './commands';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "shiftthat" is now active!');

	const shiftUserDisp = vscode.commands.registerCommand('extension.shiftThatUser', shiftUserSettings);
    const shiftWorkspaceDisp = vscode.commands.registerCommand('extension.shiftThatWorkspace', shiftWorkspaceSettings);

	context.subscriptions.push(shiftUserDisp, shiftWorkspaceDisp);
}

// this method is called when your extension is deactivated
export function deactivate() {}
