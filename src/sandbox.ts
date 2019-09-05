/* eslint-disable */
figma.showUI(__html__)

const findOneTextNode = (row: InstanceNode, name: string) =>
  row.findOne(t => t.type === 'TEXT' && t.name === name) as TextNode

const findAllTextNode = (row: InstanceNode, name: string) =>
  row.findAll(t => t.type === 'TEXT' && t.name === name) as TextNode[]

figma.ui.onmessage = async ({ type, data: { projects } }) => {
  // if (type === 'projects') {
  //   // @ts-ignore
  //   let projectRows = figma.currentPage.selection[0].findAll(
  //     (node: InstanceNode) => node.type === 'INSTANCE' && node.name === PROJECT_ROW,
  //   )
  //   const firstRow = projectRows[0]
  //
  //   // load all fonts once here otherwise figma will error
  //   // @ts-ignore
  //   await figma.loadFontAsync(findOneTextNode(firstRow, 'name').fontName)
  //
  //   // @ts-ignore
  //   await figma.loadFontAsync(findOneTextNode(firstRow, 'key').fontName)
  //
  //   projectRows.forEach((row: InstanceNode, i: number) => {
  //     const { key, name, tags } = projects[i]
  //
  //     findOneTextNode(row, 'name').characters = name
  //     findOneTextNode(row, 'key').characters = key
  //
  //     const tagRows = findAllTextNode(row, 'tag')
  //
  //     const tagCount = Math.min(tags.length, tagRows.length)
  //     for (let j = 0; j < tagCount; j++) {
  //       tagRows[j].characters = tags[j]
  //     }
  //   })
  // }

  figma.closePlugin()
}
