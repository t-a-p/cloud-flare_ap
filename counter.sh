#!/bin/bash

counter=1

while true
do
  echo "Counter: $counter"
  ((counter++))
  sleep 1  # optional delay of 1 second between prints
done
