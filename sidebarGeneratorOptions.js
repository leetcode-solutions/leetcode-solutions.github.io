const numberPrefixParser = (filename) => {
  const numberPrefixRegex = /^(?<numberPrefix>\d+)(?<separator>-)(?<suffix>.*)$/;
  const match = numberPrefixRegex.exec(filename);
  const cleanFileName = match?.groups?.suffix ?? filename;
  const numberPrefixString = match?.groups?.numberPrefix;
  const numberPrefix = numberPrefixString
    ? parseInt(numberPrefixString, 10)
    : undefined;
  return {
    filename: cleanFileName,
    numberPrefix,
  };
};

const sidebarItemsGenerator = async ({
  defaultSidebarItemsGenerator,
  ...args
}) => {
  let sidebarItems = await defaultSidebarItemsGenerator({
    ...args,
  });
  let i = 0;
  while (i < sidebarItems.length) {
    const item = sidebarItems[i];
    if (item.type === 'category') {
      sidebarItems.splice(i, 1, ...item.items);
    } else {
      i += 1;
    }
  }
  return sidebarItems;
};

module.exports = {
  numberPrefixParser: numberPrefixParser,
  sidebarItemsGenerator: sidebarItemsGenerator,
};