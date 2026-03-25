export const uploadFileParams = (isWindows: boolean) => {
  return {
    filePath: isWindows ? 'C:\\Users\\Public\\Pictures\\test.png' : '/Users/Public/Pictures/test.png',
  }
}
