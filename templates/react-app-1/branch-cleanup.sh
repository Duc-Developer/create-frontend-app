#!/bin/sh

read -p "Are you sure you want to delete all branches except 'test', 'main', 'staging', and 'develop'? (y/n) " -n 1 -r
echo    # move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    git branch | grep -v 'test$' | grep -v 'main$' | grep -v 'staging$' | grep -v 'develop$' | xargs git branch -D
else
    echo "Branch cleanup aborted."
fi