#!/bin/bash
cd /home/kavia/workspace/code-generation/autosparehub-26431-527559f3/auto_sparehub
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

