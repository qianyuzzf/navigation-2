const $lastList = $('.lastList')
const $siteList = $('.siteList')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap = xObject || [
  {
    logo: 'https://www.timtadder.com/favicon.ico',
    url: 'https://www.timtadder.com'
  },
  {
    logo: 'https://qianduan.net/favicon.ico',
    url: 'https://qianduan.net'
  },
  {
    logo: 'https://codepen.io/favicon.ico',
    url: 'https://codepen.io'
  },
  {
    logo: 'https://github.com/favicon.ico',
    url: 'https://github.com'
  },
  {
    logo: 'https://www.quanjing.com/favicon.ico',
    url: 'https://www.quanjing.com'
  },
  {
    logo: 'https://iconfever.com/favicon.ico',
    url: 'https://iconfever.com'
  },
  {
    logo: 'https://www.bilibili.com/favicon.ico',
    url: 'https://www.bilibili.com'
  },
  {
    logo: 'https://www.baidu.com/favicon.ico',
    url: 'https://www.baidu.com'
  }
]

const simplifyUrl = url => {
  return url.replace('http://', '').replace('https://', '').replace('www.', '').replace(/\/.*/, '')
}

const render = () => {
  $siteList.find('li:not(.lastList)').remove()
  hashMap.forEach((node, index) => {
    let $li = $(`
      <li>
        <div class="site">
          <div class="logo">
            <img src=${hashMap[index].logo} onerror="this.onerror='';this.src='https://www.baidu.com/favicon.ico'" alt="">
          </div>
          <div class="link">${simplifyUrl(node.url)}</div>
          <div class="close">
            <svg class = "icon">
              <use xlink:href = "#icon-Close"></use>
            </svg>
          </div>
        </div>
      </li>`).insertBefore($lastList)

    $li.on('click', () => {
      window.open(node.url)
    })

    $li.on('click', '.close', e => {
      e.stopPropagation()
      hashMap.splice(index, 1)
      render()
      const string = JSON.stringify(hashMap)
      localStorage.setItem('x', string)
    })
  })
}

render()

$('.addButton').on('click', () => {
  let url = window.prompt(`请问你要添加的网址是什么？`)
  if (url.indexOf('http') === -1) {
    url = 'https://' + url
  }
  hashMap.push({
    logo: url + '/favicon.ico',
    url: url
  })
  render()
  const string = JSON.stringify(hashMap)
  localStorage.setItem('x', string)
})
