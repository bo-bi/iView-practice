let apiAddress;

if(location.host == 'ops.vfinemusic.com') {
  apiAddress = 'https://app.jf.360.cn'
} else {
  apiAddress = 'https://tapp.jf.360.cn'
}

window.API_ADDRESS = apiAddress

export default apiAddress
