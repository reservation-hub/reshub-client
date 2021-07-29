alias client-init="git submodule update --init reshub-deploy"

alias rhcl="docker-compose up client"
alias rhcl-down="docker-compose down"
alias rhcl-bash="docker-compose exec client bash"
alias rhcl-log="docker-compose logs -f --tail 100 client "