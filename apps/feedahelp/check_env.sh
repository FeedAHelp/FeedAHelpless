#!/bin/bash

example_file=".env.example"

if [ -f ".env" ]; then
  local_file=".env"
else
  local_file=".env.local"
fi

if [ ! -f "$example_file" ]; then
  echo "Error: .env.example file not found."
  exit 1
fi

if [ ! -f "$local_file" ]; then
  echo "Error: $local_file file not found."
  exit 1
fi

# Extract keys from .env.example and .env.local
example_keys=$(grep -E '^\w+=' "$example_file" | cut -d= -f1)
local_keys=$(grep -E '^\w+=' "$local_file" | cut -d= -f1)

# Check for missing keys in .env.example
missing_in_example=()
for key in $local_keys; do
  grep -q "^$key=" "$example_file" || missing_in_example+=("$key")
done

# Check for missing keys in .env.local
missing_in_local=()
for key in $example_keys; do
  grep -q "^$key=" "$local_file" || missing_in_local+=("$key")
done

if [ ${#missing_in_example[@]} -eq 0 ] && [ ${#missing_in_local[@]} -eq 0 ]; then
  echo "All keys in .env.example exist in .env.local, and vice versa."
else
  if [ ${#missing_in_example[@]} -gt 0 ]; then
    echo "Keys in .env.local missing in .env.example:"
    for missing_key in "${missing_in_example[@]}"; do
      echo "$missing_key"
    done
  fi
  if [ ${#missing_in_local[@]} -gt 0 ]; then
    echo "Keys in .env.example missing in .env.local:"
    for missing_key in "${missing_in_local[@]}"; do
      echo "$missing_key"
    done
  fi
fi

