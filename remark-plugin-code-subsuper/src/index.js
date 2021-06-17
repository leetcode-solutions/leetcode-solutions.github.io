const AVAILABLE_FORMATS = [
  'subscript',
  'superscript',
];

const
  subscriptRegex = /_{([^\r\n]+?(?<!\\))}/g,
  superscriptRegex = /\^{([^\r\n]+?(?<!\\))}/g;

const regexes = {
  subscript: subscriptRegex,
  superscript: superscriptRegex,
};

const tags = {
  subscript: 'sub',
  superscript: 'sup',
};

const transformNode = (node, formats) => {
  let transformed = false;
  const oldValue = node.value;
  node.value = node.value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  for (const format of formats) {
    const matches = [...node.value.matchAll(regexes[format])];

    if(matches.length === 0) continue;

    let jsx = '';
    let ind = 0;
    for (match of matches) {
      const start = match.index, end = match.index + match[0].length;
      jsx = `${jsx}${node.value.substring(ind, start)}<${tags[format]}>${match[1]}</${tags[format]}>`;
      ind = end;
    }
    if (node.value.substring(ind)) {
      jsx = `${jsx}${node.value.substring(ind)}`;
    }

    node.value = jsx;
    
    transformed = true;
  }

  return transformed
    ? (
      {
        type: 'jsx',
        value: `<code>${node.value.replace(/\\}/g, '}')}</code>`
      }
    ) : (
      {
        ...node,
        value: oldValue
      }
    );
  ;
}

const isCodeNode = (node) => node.type === 'inlineCode';

const attacher = (options = {}) => {
  const {
    exclude = {},
  } = options;

  const formats = AVAILABLE_FORMATS.filter((format) => !(format in exclude));

  const transformer = (node) => {
    if (isCodeNode(node)) {
      return transformNode(node, formats);
    }
    if (Array.isArray(node.children)) {
      for (let index = 0; index < node.children.length; ++index) {
        const result = transformer(node.children[index]);
        if (result) {
          node.children[index] = result;
        }
      }
    }
    return undefined;
  };
  return transformer;
};

module.exports = attacher;