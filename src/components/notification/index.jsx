import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Notification from './Notification'

export default function show(obj = {}) {

  const div = createComponentContainer()

  renderComponent(Notification, div)

  /**
   *createComponentContainer
   *
   * @returns {Elements} div
   */
  function createComponentContainer() {

    const div = document.createElement('div')
    document.body.appendChild(div)

    return div
  }

  /**
   *destoryComponentContainer
   *
   * @param {Element} ele
   */
  function destoryComponentContainer(ele) {

    ele && ele.parentNode && ele.parentNode.removeChild(ele)
  }

  /**
   * show component 二次渲染  为了 css 动画生效
   */
  function showComponent() {

    let showTimeout = setTimeout(
      () => {
        clearTimeout(showTimeout)
        renderComponent(Notification, div, Object.assign({}, obj, { isShow: true }))
      },
      0
    )

  }

  /**
   *  notification onClose callback
   */
  function closeComponent() {
    let { onClose } = obj

    destoryComponentContainer(div)
    onClose && onClose()
  }

  /**
   *render Component
   *
   * @param {*} Comp
   * @param {*} container
   */
  function renderComponent(Comp, container, params = {}) {

    let { isShow, duration, text, type } = params

    ReactDOM.render(
      <Comp
        isShow={isShow || false}
        type={type}
        duration={duration}
        _compMounted={showComponent}
        onClose={closeComponent}
      >
        {text}
      </Comp>
      ,
      container,
    )

  }

}