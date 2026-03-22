function o(){return"applescript://com.apple.scripteditor"}function a(t){let{script:e}=t;return`applescript://com.apple.scripteditor?script=${encodeURIComponent(e)}`}const s={script:'display dialog "Hello, World!"'},n={script:`set oldClipboard to the clipboard
tell application "System Events"
	keystroke "c" using command down
	delay 0.3
end tell

set selectedText to the clipboard

if selectedText is "" then
	display dialog "No selected text detected" buttons {"OK"} default button 1
	return
end if

set userNote to text returned of (display dialog "Enter your note:" default answer "")

set nowDate to current date
set timeStr to (year of nowDate as string) & "-" & (month of nowDate as integer) & "-" & (day of nowDate as integer)

tell application "System Events"
	set frontApp to name of first application process whose frontmost is true
end tell

set mdContent to "# Captured Note

"
set mdContent to mdContent & "**Time:** " & timeStr & "
"
set mdContent to mdContent & "**Source App:** " & frontApp & "

"
set mdContent to mdContent & "## Selected Text
> " & selectedText & "

"
set mdContent to mdContent & "## My Note
" & userNote & "

"

set fileName to "note_" & (do shell script "date +%s") & ".md"
set filePath to (path to desktop folder as text) & fileName

set posixPath to POSIX path of filePath
do shell script "echo " & quoted form of mdContent & " > " & quoted form of posixPath

tell application "Safari"
	activate
	open location "file://" & POSIX path of filePath
end tell

set the clipboard to oldClipboard

display notification "Note saved to Desktop" with title "Smart Capture"
`};export{a,s as b,o as e,n as s};
