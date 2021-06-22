import os
import argparse
import re

BASE_PATH = './z_lc'

MD_TEMPLATE = '''---
slug: .
tags: [{% DIFFICULTY_TAG}, TODO]
---

# {% TITLE}

<Difficulty {% DIFFICULTY} />

https://leetcode.com/problems/{% FILENAME}/

## Problem



:::example

<VAlign>

| | |
:--|:--
**Input**       | ``
**Output**      | ``
**Explanation** | 

</VAlign>

:::

**Constraints:**
- 

## Solution



<VAlign>

| | |
:--|:--
**Time Complexity:**    |   $O()$
**Space Complexity:**   |   $O()$

</VAlign>

```md codetabs

{% SOLUTIONS}

```

## Similar Questions

'''

def main(title, id, difficulty, languages):
    file_name = re.sub(
        '\s',
        '-',
        title.strip().lower()
    )
    directory_name = f'{id}-{file_name}'
    os.mkdir(f'{BASE_PATH}/{directory_name}')
    print(f'created directory {BASE_PATH}/{directory_name}')
    for lang, ext in languages:
        with open(f'{BASE_PATH}/{directory_name}/{file_name}.{ext}', 'w') as f: pass
        print(f'created file {BASE_PATH}/{directory_name}/{file_name}.{ext}')

    to_tag = {
        'e': 'easy',
        'm': 'medium',
        'h': 'hard',
    }
    solutions = '\n'.join([f'```{lang} file="{directory_name}/{file_name}.{ext}"' for lang, ext in languages])
    md_contents = MD_TEMPLATE \
        .replace('{% TITLE}', title) \
        .replace('{% DIFFICULTY}', difficulty) \
        .replace('{% DIFFICULTY_TAG}', to_tag[difficulty]) \
        .replace('{% FILENAME}', file_name) \
        .replace('{% SOLUTIONS}', solutions)
    
    with open(f'{BASE_PATH}/{directory_name}/{file_name}.md', 'w') as f:
        f.write(md_contents)
        print(f'create md template {BASE_PATH}/{directory_name}/{file_name}.md')

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="generate the files for a leetcode question")
    parser.add_argument('-t', '--title', required=True, type=str, help='name of the problem')
    parser.add_argument('-id', '--id', required=True, type=int, help='problem id')
    parser.add_argument('-d', '--difficulty', required=True, type=str, help='the problem difficulty (e/m/h)')
    parser.add_argument('-langs', '--languages', nargs='+', default=['python', 'cpp', 'rust'], help='list of languages of solutions to generate')
    parser.add_argument('-exts', '--extensions', nargs='+', default=['py', 'cpp', 'rs'], help='list of file extensions for languages to generate')
    
    args, unknown = parser.parse_known_args()
    
    assert len(args.languages) == len(args.extensions)
    
    main(args.title, args.id, args.difficulty, list(zip(args.languages, args.extensions)))