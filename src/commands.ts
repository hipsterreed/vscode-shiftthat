import * as vscode from 'vscode';
import * as fs from 'fs';

export async function shiftUserSettings(): Promise<void> { 
	await vscode.commands.executeCommand('workbench.action.openGlobalSettings');
	shiftSettings();
}

export async function shiftWorkspaceSettings(): Promise<void> { 
	await vscode.commands.executeCommand('workbench.action.openWorkspaceSettings');
	shiftSettings();
}

async function shiftSettings(): Promise<void> {
	await vscode.commands.executeCommand('settings.switchToJSON');

	const activeEditor: any = vscode.window.activeTextEditor;
	const settingsUri: string = activeEditor.document.uri.fsPath;

	var settings = await getSettingsObj(settingsUri);
	var sortedSettings = sortObjKeysAlphabetically(settings);

	saveSettings(settingsUri, sortedSettings);
}

async function getSettingsObj(uri: string): Promise<Object> {
	const settingsDocument = await vscode.workspace.openTextDocument(uri);
	const text = settingsDocument.getText();

	return JSON.parse(text);
}

function sortObjKeysAlphabetically(obj: any): Object {
	var ordered: any = {};
	Object.keys(obj).sort().forEach((key) => {
		ordered[key] = obj[key];
	});
	return ordered;
}

function saveSettings(settingsUri: string, settings: Object): void {
	fs.writeFile(settingsUri, JSON.stringify(settings, null, 2), (err: Error) => {
		if(err) {
		  console.error(err);
		} else {
            vscode.window.showInformationMessage('ShiftThat: Settings Shifted!!!');
        }
	}); 
}