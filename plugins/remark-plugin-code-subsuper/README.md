# remark-plugin-code-subsuper

Poorly coded plugin to allow for subscripting and superscripting code in Markdown. Designed for this particular Docusaurus project, as a Remark plugin used before any other Remark plugins to transform inline code blocks into html code blocks.

## Syntax

Subscripts: `a_{subscripted}`

Superscript: `a^{superscripted}`

The parsing is rudimentary and nesting will not work.

Closing braces can be escaped; _all_ instances of `\}` will be replaced with `}` after generating the html jsx is complete.