#!/bin/bash

echo "Current branch is $TRAVIS_BRANCH"
echo "isPullRequest: $TRAVIS_PULL_REQUEST"

if [ "$staging" ]; then
  echo "On $staging, no deployment required"
fi

if [ "$production" ]; then
  # Verifys if branch is master and not a pull request.
  if [ "$TRAVIS_BRANCH" == "master" ] && [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
    echo "Deploying to Firebase hosting"
    firebase deploy --token "$FIREBASE_TOKEN"
  else
    echo "No deployment required"
  fi
fi
