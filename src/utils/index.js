// 深度拷贝对象
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

// 获得字符串字符长度，中文2，英文1
export function getStrLength(str) {
  let realLength = 0
  let len = str.length
  let charCode = -1
  for (let i = 0; i < len; i++) {
    charCode = str.charCodeAt(i)
    if (charCode >= 0 && charCode <= 128) realLength += 1
    else realLength += 2
  }
  return realLength
}

// 去除字符串左右两边空格
export function trimLR(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

//判断是否为空
export function isNull(o) {
  return (
    o == undefined ||
    o == 'undefined' ||
    (o + '').indexOf('undefined') > -1 ||
    o == null ||
    o == '' ||
    o == 'null' ||
    o == [] ||
    o == 0
  )
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
