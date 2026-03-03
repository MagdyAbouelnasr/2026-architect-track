🟢 CLI Search

-history | grep something
-CTRL + R reverse search
-tail ~/.bash_history

What I learned:

-Search is essential for logs
-History stores everything
-Be careful with secrets

🟢 CLI Shortcuts

-↑ / ↓ for command history
-CTRL + A start of line
-CTRL + E end of line
-CTRL + K delete after cursor
-CTRL + U delete before cursor
-!! repeat last command
-clear / CTRL + L

What I learned:

-Keyboard speed matters
-Terminal fluency = productivity

🟢 Signals

-CTRL + C → SIGINT
-CTRL + D → exit shell
-kill <pid> → SIGTERM
-kill -9 <pid> → SIGKILL
-yes + CTRL + C test
-sleep 60 & background process

What I learned:

-Processes respond to signals
-Docker containers rely on SIGTERM/SIGINT
-Kill hierarchy matters

Security Note:

-.bash_history stores commands
-Avoid secrets in CLI
-Delete history if needed

.

🟢 Nano
What Nano Is

-Lightweight terminal editor
-Default on many Linux systems
-Simple and beginner-friendly

How to open
nano filename.txt

Important Shortcuts:

CTRL + O → Save (Write Out)
-ENTER → Confirm filename
-CTRL + X → Exit
-CTRL + G → Help

Key Concept

-File stays in buffer until saved
-Must explicitly save before exit

My Takeaway:
-Nano is good for quick edits in servers and Docker containers.

🟢 Vim
What Vim Is

-Modal editor (Command mode / Insert mode)
-Extremely powerful
-Steep learning curve

Open File
vim finename.txt

Modes
Default: Command Mode

to type:
press i
to exit:
press esc

Save/Quit Commands:

:w save
:q quit
:wq save and quit
:q! quit without saving
:qa! force quit everything

Navigation:
h left
j down
k up
l right
:d delete line
x delete character
:d3 delete 3 lines from cursor
