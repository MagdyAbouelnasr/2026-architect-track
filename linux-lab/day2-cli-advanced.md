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