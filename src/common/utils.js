function strinify(data) {
  let result = []
  for (const key in data) {
    let c = data[key]
    //c = JSON.stringify(c)
    c = encodeURIComponent(c)
    result.push(`${encodeURIComponent(key)}=${c}`)
  }
  return result.join('&')
}

function login() {
  let data = {
    src: 'pcw_pointscenter',
    destUrl: window.location.href,
    client: 'web'
  }
  window.location.href = `https://i.360.cn/login?${strinify(data)}`;
}

export {
  login,
}
