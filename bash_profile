# Setting PATH for Python 3.8
# The original version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.8/bin:${PATH}"
export PATH

# opam configuration
test -r /Users/emilio/.opam/opam-init/init.sh && . /Users/emilio/.opam/opam-init/init.sh > /dev/null 2> /dev/null || true

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

alias gomp="python3 $Users/emilio/Library/Python/3.8/lib/python/site-packages"


#ClI Theme

parse_git_branch() {
     git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

SHORT_NAME=$(whoami | cut -d "." -f 1)

#brew install jq
amplify_env () {
    PROJECT_DIR=$(git rev-parse --show-toplevel 2>/dev/null) 

    ENV=$PROJECT_DIR/amplified_todo/amplify/.config/local-env-info.json 

    if [ -f "$ENV" ]; then
        env_info=$(cat $ENV | jq -r ".envName") 
        echo "($env_info)"
    fi
}

export PS1="$SHORT_NAME \[\033[32m\]\w\[\033[36m\]\$(parse_git_branch)\033[31m\] \$(amplify_env)\[\033[00m\] $ "

# Added by Amplify CLI binary installer
export PATH="$HOME/.amplify/bin:$PATH"
