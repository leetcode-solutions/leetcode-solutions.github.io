const all_formats = {
  subscript: {
    regex: /_{([^\r\n]+?(?<!\\))}/g,
    tag: 'sub',
  },
  superscript: {
    regex: /\^{([^\r\n]+?(?<!\\))}/g,
    tag: 'sup',
  },
  bold: {
    regex: /\*\*{([^\r\n]+?(?<!\\))}\*\*/g,
    tag: 'strong',
  }
};

const transformNode = (node, formats) => {
  let transformed = false;
  const oldValue = node.value;
  node.value = node.value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  for (const {regex, tag} of Object.values(formats)) {
    const matches = [...node.value.matchAll(regex)];

    if(matches.length === 0) continue;

    let jsx = '';
    let ind = 0;
    for (match of matches) {
      const start = match.index, end = match.index + match[0].length;
      jsx = `${jsx}${node.value.substring(ind, start)}<${tag}>${match[1]}</${tag}>`;
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
    exclude = [],
  } = options;

  const formats = exclude.reduce((accum, e) => {
    const {[e]: _, ...rest} = accum;
    return rest;
  }, all_formats);

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