/**
 * 缩放方式
 * 'padding': 默认，使用较小的边作为缩放比例，较大的边会自动空出间距并居中
 * 'width': 等比例缩放，宽度铺满
 * 'height': 等比例缩放，高度铺满
 * 'full': 全屏铺满
 */
export function elementResize(
  element,
  width = '1920',
  height = '1080',
  type = 'padding'
) {
  const parentDom = element.parentElement
  // parentDom.style.width = '100%'
  // parentDom.style.height = '100%'
  const offsetWidth = parentDom.offsetWidth
  const offsetHeight = parentDom.offsetHeight
  let top = 0
  let left = 0
  let scaleX = (offsetWidth / width).toFixed(6)
  let scaleY = (offsetHeight / height).toFixed(6)
  if (type === 'padding') {
    if (scaleX < scaleY) {
      scaleY = scaleX
      top = (offsetHeight - height * scaleX) / 2
    } else if (scaleX > scaleY) {
      scaleX = scaleY
      left = (offsetWidth - width * scaleX) / 2
    } else {
      // 同步放大/缩小
    }
  } else if (type === 'width') {
    scaleY = scaleX
  } else if (type === 'height') {
    scaleX = scaleY
  } else if (type === 'full') {
    // do nothing
  }

  element.style.width = `${width}px`
  element.style.height = `${height}px`
  // element.style.marginLeft = `${left}px`
  // element.style.marginTop = `${top}px`
  element.style.webkitTransformOrigin = 'left top 0px'
  element.style.MozTransformOrigin = 'left top 0px'
  element.style.transformOrigin = 'left top 0px'
  element.style.webkitTransform = `translate(${left}px, ${top}px) scale(${scaleX}, ${scaleY})`
  element.style.MozTransform = `translate(${left}px, ${top}px) scale(${scaleX}, ${scaleY})`
  element.style.transform = `translate(${left}px, ${top}px) scale(${scaleX}, ${scaleY})`
}

export function bodyResize(width = 1920, height = 1080, type = 'padding') {
  elementResize(document.body, ...arguments)
}

// export default bodyResize
