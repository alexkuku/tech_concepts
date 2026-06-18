#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sys

# Read the file
with open('/Users/kubo/Documents/k8s_concepts/exam/questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Chinese quotes with English quotes
content = content.replace('"', '"')
content = content.replace('"', '"')

# Write back
with open('/Users/kubo/Documents/k8s_concepts/exam/questions.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Replaced Chinese quotes with English quotes')
