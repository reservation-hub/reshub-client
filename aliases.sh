alias client-init="git submodule update --init reshub-deploy"

alias rh-cl="cl-build && docker-compose up client"
alias cl-build="docker-compose build client"
alias cl-down="docker-compose down"
alias cl-bash="docker-compose exec client bash"
alias cl-log="docker-compose logs -f --tail 100 client "

alias cl-prd-build="docker-compose build prod"
alias cl-prd="rm -rf app/build && cl-prd-build && docker-compose run prod"
alias cl-prd-deploy="cl-prd && scp -r app/build/build/* it-project:reshub-prod/client"
