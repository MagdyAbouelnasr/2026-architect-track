## Environments

* `printenv`
* Variable expansion: `$USER`
* One-command override: `USER=brian <command>`
* Session variables vs exported variables
* Persistent config files:

  * `~/.bashrc`
  * `~/.bash_profile`
  * Reload: `source ~/.bashrc`

## Processes

* `ps` vs `ps aux`
* PID concept
* Run in background: `&`
* Stop/resume job control:

  * Stop: `Ctrl+Z`
  * List jobs: `jobs` / `jobs -l`
  * Resume in background: `bg`
  * Resume in foreground: `fg`
* Kill processes:

  * `kill -s SIGKILL <pid>` vs `kill -9 <pid>`
  * List signals: `kill -l`
* Filter output:

  * `ps aux | grep <name>`

## Exit codes + operators

* Last exit code: `$?`
* Common exit codes:

  * `0` success
  * `127` command not found
  * `130` interrupted (SIGINT / `Ctrl+C`)
  * `137` killed (SIGKILL)
* Command chaining:

  * `&&` run next only if success
  * `||` run next only if failure
  * `;` run next regardless
* Subcommands
* Command substitution: `$(...)`

  * Example: logging with `$(date ...)` and `$(uptime)`


---------------------

## SSH (Remote CLI)

SSH lets you connect to another Linux machine and run commands remotely. You use it for:

* Admin work on cloud VMs (AWS, Azure, DigitalOcean, Linode)
* Deploying and debugging apps
* Managing servers where the terminal is the main interface

### Create a second VM (Multipass)

On your host machine:

* `multipass launch --name secondary`
* `multipass shell secondary`

### Create a user on the secondary VM

On `secondary`:

* `sudo useradd -s /bin/bash -m -g ubuntu brian`
* `sudo passwd brian`

Flags:

* `-s /bin/bash` set default shell
* `-m` create home directory
* `-g ubuntu` set primary group

---

## SSH Keys (Public/Private)

SSH keys come as:

* **private key**: stays secret (e.g. `~/.ssh/id_rsa`)
* **public key**: safe to share (e.g. `~/.ssh/id_rsa.pub`)

### Generate keys on primary

On `primary`:

* `ssh-keygen -t rsa`

  * Enter (default path)
  * Enter (empty passphrase)
  * Enter (confirm)

Check:

* `ls ~/.ssh`
* `cat ~/.ssh/id_rsa.pub`

---

## Allow primary to connect as brian@secondary

### Put public key into authorized_keys (on secondary as brian)

On `secondary`:

* `su brian`
* `mkdir -p ~/.ssh`
* `chmod 700 ~/.ssh`
* `vi ~/.ssh/authorized_keys`

  * paste `id_rsa.pub` from primary
* `chmod 600 ~/.ssh/authorized_keys`

---

## Get secondary IP + connect

On `secondary`:

* `ifconfig` (or `ip a` if installed)
* look for an `inet` like `192.168.x.x`
* ignore `127.0.0.1` (loopback)

Test:

* `ping <ip>`

Connect from `primary`:

* `ssh brian@<secondary-ip>`

---

## SFTP (Secure File Transfer)

SFTP runs over SSH, so once SSH works, SFTP works.

Connect:

* `sftp brian@<secondary-ip>`

Local vs remote context:

* local commands start with `l`:

  * `lpwd`, `lls`, `lcd`
* remote commands are normal:

  * `pwd`, `ls`, `cd`

Useful commands:

* `put local.txt remote.txt`
* `get remote.txt local.txt`
* `help`

Quick local command inside sftp:

* `!touch file-to-put.txt`

---

## wget (Download a file)

`wget` fetches a URL and saves it to disk.

Example (bash 2048 game):

* `wget https://raw.githubusercontent.com/btholt/bash2048/master/bash2048.sh`
* `chmod 700 bash2048.sh`
* `. bash2048.sh`
  Exit with: `Ctrl+C`

Notes:

* `wget --help` for options
* good for recursive site downloads (one area where `wget` shines)

---

## curl (Network requests, stream-based)

`curl` prints to stdout by default, so it works well with pipes and redirection.

### Quick local server to test against

In one terminal (primary):

* `cd ~`
* `python3 -m http.server 8000 --bind 0.0.0.0`

In another terminal:

* `curl http://localhost:8000`

Save output:

* `curl http://localhost:8000 > output.html`
* `curl -o output.html http://localhost:8000`
* `curl -O http://localhost:8000/file.txt` (keeps remote filename)

### Headers only

* `curl -I http://localhost:8000`

### HTTP verbs

* `curl -X POST http://localhost:8000`
* `curl -X PUT http://localhost:8000`
* `curl -X PATCH http://localhost:8000`
* `curl -X DELETE http://localhost:8000`
* `curl -X OPTIONS http://localhost:8000`

Send a body (implies POST):

* `curl -d "body text" http://localhost:8000`

### Cookies

* `curl -b "name=brian" http://localhost:8000`

### Follow redirects

* `curl http://bit.ly/linux-cli`
* `curl -L http://bit.ly/linux-cli`

### Custom headers

* `curl -H "accept-language: en-US" -H "Authorization: Bearer 12345" http://localhost:8000`

### Browser → curl trick

DevTools Network tab can copy a request as `curl` so you can replay it in terminal with the same headers.

---

## Security note: `curl <url> | bash`

This runs remote code directly on your machine.

Rules I follow:

* Don’t run it unless you trust the source
* Download first, then read it
* Prefer:

  * `curl -L <url> > script.sh`
  * `less script.sh` (or `cat script.sh`)
  * `chmod 700 script.sh`
  * `. ./script.sh`
