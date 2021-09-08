alias client-init="git submodule update --init reshub-deploy"

alias rh-cl="docker-compose up client"
alias cl-down="docker-compose down"
alias cl-bash="docker-compose exec client bash"
alias cl-log="docker-compose logs -f --tail 100 client "