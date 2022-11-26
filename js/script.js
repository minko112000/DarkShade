const emptyVd = `
                <div id="empty">
                  <img src="../images/giphy.gif">
                  <h1>No videos yet.</h1>
                </div>
                `
                
const loading = `
                <div class="loading">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
            `

const pulseRate = `
                   <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 300.000000 173.000000"  preserveAspectRatio="xMidYMid meet">  
                   <g transform="translate(0.000000,173.000000) scale(0.100000,-0.100000)"> 
                   <path class='draw' d="M1205 1428 c-2 -7 -6 -67 -8 -133 -3 -125 -34 -612 -45 -725 -5 -50 -8 -18 -15 145 -5 121 -13 215 -19 223 -9 10 -16 8 -37 -12 -22 -21 -32 -24 -69 -19 -37 5 -47 12 -73 49 -16 24 -34 44 -38 44 -13 0 -29 -23 -36 -53 -8 -29 -15 -32 -102 -42 -48 -5 -53 -4 -53 14 0 29 -34 45 -54 25 -15 -14 -17 -14 -32 0 -19 20 -54 5 -54 -23 0 -21 55 -101 70 -101 5 0 17 11 25 24 13 20 28 25 105 33 97 11 120 22 120 59 0 31 14 31 28 0 15 -33 47 -52 101 -60 32 -5 48 -3 61 9 16 14 17 10 23 -72 3 -49 11 -207 18 -353 11 -241 18 -295 34 -278 3 3 10 104 16 224 11 248 47 816 53 821 2 2 6 -38 10 -89 12 -167 47 -532 51 -536 8 -8 25 10 25 27 0 10 11 54 25 97 14 43 30 96 36 117 7 26 15 37 29 37 10 0 26 10 34 21 l15 22 25 -28 c45 -49 56 -29 85 165 11 75 17 44 30 -158 6 -90 14 -168 18 -174 11 -19 21 21 23 87 1 33 4 77 8 99 l7 38 22 -46 c28 -57 50 -59 91 -9 l30 38 19 -32 c10 -18 23 -33 30 -33 6 0 17 26 23 58 16 82 16 82 24 27 10 -73 21 -86 45 -56 15 20 19 21 24 7 8 -21 45 -21 69 0 16 16 18 16 24 0 12 -31 24 -15 24 33 0 56 17 76 55 67 30 -8 65 -44 65 -67 0 -33 19 -30 36 6 22 47 59 75 98 75 47 0 76 -25 76 -64 0 -39 -45 -85 -138 -141 -35 -20 -68 -45 -74 -55 -10 -16 -14 -12 -34 30 -12 27 -31 53 -43 59 -34 19 -36 12 -6 -19 15 -16 38 -59 50 -95 21 -61 23 -64 30 -38 9 39 39 68 115 114 105 63 130 91 130 149 0 46 -21 76 -65 90 -46 15 -97 -9 -133 -62 -23 -35 -27 -38 -33 -20 -11 29 -58 62 -90 62 -32 0 -59 -31 -59 -67 0 -13 -6 -23 -14 -23 -8 0 -16 -7 -20 -15 -3 -8 -16 -15 -30 -15 -27 0 -38 27 -29 71 3 17 1 29 -5 29 -6 0 -13 -15 -17 -32 -20 -99 -33 -84 -41 50 -4 56 -11 102 -16 102 -4 0 -8 -12 -8 -27 0 -16 -7 -67 -16 -116 l-16 -87 -20 25 c-11 14 -24 25 -28 25 -5 0 -24 -16 -41 -35 -18 -19 -36 -35 -41 -35 -4 0 -20 25 -35 55 -15 30 -30 55 -34 55 -10 0 -19 -40 -19 -89 0 -89 -10 -31 -20 120 -17 250 -27 260 -59 62 -13 -76 -25 -148 -28 -160 l-5 -23 -25 20 c-33 25 -49 25 -63 0 -8 -15 -17 -19 -31 -15 -22 7 -29 -5 -60 -120 -11 -44 -24 -84 -28 -88 -5 -4 -11 40 -15 100 -4 59 -18 224 -31 368 -14 143 -25 263 -25 268 0 12 -20 8 -25 -5z"/> 
                   </g> 
                   </svg> 
`

let username = ''
let shareUrl = ''

let homeMute = () => {
  $('#home-page').css({
    opacity: '.3'
  })
}

let homeActive = () => {
  $('#home-page').css({
    opacity: '1'
  })
}

let categoriesBoxHeight = categories.offsetHeight + 'px'
let categoriesBoxHeightAndSearchBoxHeight = categories.offsetHeight + 50 + 'px'

$('.box-container').css({
  height: `calc(100% - ${categoriesBoxHeightAndSearchBoxHeight})`
})

const topAlertShow = (msg, bg) => {
  $('.top-alert').text(msg)
  $('.top-alert').css({
    transform: 'translateY(0%)',
    background: bg
  })
  setTimeout(function() {
    $('.top-alert').css({
      transform: 'translateY(-110%)'
    })
  }, 3000);
}

$('#gold').click(function () {
  alert('gold member only')
})

$('#brand').click(function () {
  location.reload()
})


$('#home-page').mousemove(function () {
  profilePageHide()
  shareBoxHide()
})



const profilePageShow = () => {
  username = localStorage.getItem('username')
  if (username != null) {
    $('#profile-page').show()
    homeMute()
    getUserData()
  } else {
    loginBoxShow()
  }
}

const profilePageHide = () => {
  $('#profile-page').hide()
  homeActive()
}

const video = document.querySelector('#play-box video')
let dur = ''
let cur = ''

const formatTime = time => {
  let sec = Math.floor(time % 60)
  let min = Math.floor(time / 60) % 60
  let hour = Math.floor(time / 3600)
  sec = sec < 10 ? `0${sec}` : sec
  min = min < 10 ? `0${min}` : min
  hour = hour < 10 ? `0${hour}` : hour
  return `${hour}:${min}:${sec}`
}


video.addEventListener('timeupdate', e => {
  dur = e.target.duration
  cur = e.target.currentTime
  r = (cur / dur) * 100
  $('#progress').css({
    width: `${r}%`
  })
  $('.cur').text(formatTime(cur))
  if (dur == cur) {
    videoPause()
  }
})

video.addEventListener('loadeddata', e => {
  dur = e.target.duration
  $('.dur').text(formatTime(dur))
})

const progressBar = document.getElementById('progress-bar')
const draggableProgressBar = e => {
  let progressWidth = progressBar.clientWidth
  let progressLeft = e.offsetX
  $('#progress').css({
    width: `${progressLeft}px`
  })
  video.currentTime = (progressLeft / progressWidth) * video.duration
}

progressBar.addEventListener('click', e => {
  let progressWidth = progressBar.clientWidth
  let progressLeft = e.offsetX
  video.currentTime = (progressLeft / progressWidth) * video.duration
})

progressBar.addEventListener('mousedown', () => {
  progressBar.addEventListener('mousemove', draggableProgressBar)
})

progressBar.addEventListener('mouseup', () => {
  progressBar.addEventListener('mousemove', draggableProgressBar)
})

progressBar.addEventListener('mousemove', e => {
  let x = e.offsetX
  $('#progress').css({
    width: `${x}px`
  })
  let progressWidth = progressBar.clientWidth
  video.currentTime = (x / progressWidth) * video.duration
  $('#progress span').text(formatTime(video.currentTime))
})


$('#volume').click(function () {
  if (!$(this).hasClass('fa-volume-xmark')) {
    $('#play-box video').prop('volume', 0)
    $(this).addClass('fa-volume-xmark')
    $(this).removeClass('fa-volume-high')
  } else {
    $('#play-box video').prop('volume', 1)
    $(this).addClass('fa-volume-high')
    $(this).removeClass('fa-volume-xmark')
  }
})

$('#backward').click(function () {
  video.currentTime -= 5
})

const videoPlay = () => {
  $('#play-box video').trigger('play')
  $('#play').addClass('fa-pause')
  $('#play').removeClass('fa-play')
}
const videoPause = () => {
  $('#play-box video').trigger('pause')
  $('#play').addClass('fa-play')
  $('#play').removeClass('fa-pause')
}
$('#play').click(function () {
  if (!$(this).hasClass('fa-pause')) { // to pause
    videoPlay()
  } else { // to play
    videoPause()
  }
})

$('#forward').click(function () {
  video.currentTime += 5
})


const customerVdShow = (title) => {
  $('#search').show()
  $('#search input').val('')
  $('#search input').addClass('customer-vd')
  $('#play-box-close-btn').addClass('customer-vd')
  searchEmptyValue()
  $('#categories').hide()
  $('#play-box-close-btn').click()
  $('#title').show().text(title)
  $('.box-container').css({
    height: `calc(100% - 100px)`
  })
}

const customerVdHide = () => {
  profilePageHide()
  $('#search').show()
  $('#search input').val('')
  $('#search input').removeClass('customer-vd')
  $('#categories').show()
  $('#title').hide()
  $('#play-box-close-btn').removeClass('customer-vd')
  $('#play-box-close-btn').click()
  $('.box-container').css({
    height: `calc(100% - categoriesBoxHeightAndSearchBoxHeight)`
  })
  $('#categories span')[0].click()
}

$('.tr').each(function () {
  $(this).click(function () {
    $('.tr').removeClass('tr-active')
    $(this).addClass('tr-active')
  })
})

let customerVd = ''

const getCustomerVd = customerVd => {
  username = localStorage.getItem('username')
  $('.box-container').html(loading)
  $.ajax({
    url: '../php/get_customer_vd.php',
    type: 'GET',
    data: `username=${username}&customer_vd=${customerVd}`,
    contentType: false,
    processData: false,
    success: function (r) {
      if (r == '') {
      $('.box-container').html(emptyVd)
      } else {
        $('.box-container').html(r)
        boxEvent()
      }
    }
  })
}

$('.love-div').click(function () {
  profilePageHide()
  customerVd = 'Loves'
  getCustomerVd(customerVd)
  customerVdShow('Loves')
})

$('.history-div').click(function () {
  profilePageHide()
  customerVd = 'History'
  getCustomerVd(customerVd)
  customerVdShow('History')
})

$('.watch-later-div').click(function () {
  profilePageHide()
  customerVd = 'Watch later'
  getCustomerVd(customerVd)
  customerVdShow('Watch later')
})

$('.home-div').click(function () {
  customerVdHide()
})

const getUserData = () => {
  $.ajax({
      url: '../php/user.php',
      type: 'GET',
      data: 'username='+username,
      dataType: 'json',
      contentType: false,
      processData: false,
      success: function (r) {
        if (r.name.length >= 20) {
          $('#profile-name').text(r.name.slice(0, 20) + '...')
        } else {
          $('#profile-name').text(r.name)
        }
        if (r.email.length >= 20) {
          $('#profile-email').text(r.email.slice(0, 20) + '...')
        } else {
          $('#profile-email').text(r.email)
        }
        $('.profile-box b').text(r.name.slice(0, 1))
      }
    })
}

$('#profile').click(function () {
  profilePageShow()
})

const logOutBoxShow = () => {
  $('#logout-box').show()
  homeMute()
}

const logOutBoxHide = () => {
  $('#logout-box').hide()
  homeActive()
}

logOutBoxHide()

$('.logout-div').click(function () {
  profilePageHide()
  logOutBoxShow()
})

$('#logout').click(function () {
  localStorage.removeItem('username')
  logOutBoxHide()
  $('.home-div').click()
  topAlertShow('Log out successful','#363e46')
})

$('#no-logout').click(logOutBoxHide)


const searchEmptyValue = () => {
  $('#search-icon').addClass('fa-search')
  $('#search-icon').removeClass('fa-xmark')
  $('#play-box-close-btn').removeClass('play-box-close-btn-check')
  if ($('#search input').hasClass('customer-vd')) {
    $('#categories').hide()
    $('#search').show()
    $('#title').show()
    $('.box-container').css({
      height: `calc(100% - 100px)`
    })
    getCustomerVd(customerVd)
  } else {
    $('#categories').show()
    $('#categories span')[0].click()
    $('.box-container').css({
      height: `calc(100% - ${categoriesBoxHeightAndSearchBoxHeight})`
    })
  }
}

$('#search input').keyup(function () {
  if ($(this).val() != '') {
    username = localStorage.getItem('username')
    $('#search-icon').removeClass('fa-search')
    $('#search-icon').addClass('fa-xmark')
    $('#search-icon').click(function () {
      $('#search input').val('')
      searchEmptyValue()
    })
    $('#play-box-close-btn').addClass('play-box-close-btn-check')
    $('.box-container').html(loading)
    $('#categories').hide()
    let text = $(this).val()
    let data = ''
    if (!$('#search input').hasClass('customer-vd')) {
      $('.box-container').css({
        height: `calc(100% - 50px)`
      })
      if (username != null) {
        data = `text=${text}&username=${username}`
      } else {
        data = 'text='+text
      }
    } else {
      $('.box-container').css({
        height: `calc(100% - 100px)`
      })
      $('#title').show()
      username = localStorage.getItem('username')
      data = `text=${text}&customer_vd=${customerVd}&username=${username}`
    }
    $.ajax({
      url: '../php/search.php',
      type: 'GET',
      data: data,
      contentType: false,
      processData: false,
      success: function (r) {
        $('.box-container').html(r)
        boxEvent()
        if (r == '') {
        $('.box-container').html(emptyVd)
        }
      }
    })
  } else {
    searchEmptyValue()
  }
})

const boxEvent = () => {
  playBoxShow()
  addLove()
  addHistory()
  addWatchLater()
  shareBoxShow()
}

const getCategoryData = category => {
  username = localStorage.getItem('username')
  let data = ''
  if (username == null) {
    data = 'category='+category
  } else {
    data = `category=${category}&username=${username}`
  }
  $('.box-container').html(loading)
  $.ajax({
    url: '../php/get_category_data.php',
    type: 'GET',
    data: data,
    contentType: false,
    processData: false,
    success: function (r) {
      if (r == '') {
      $('.box-container').html(emptyVd)
      } else {
        $('.box-container').html(r)
        boxEvent()
      }
    }
  })
}

let category = 'All'
window.addEventListener('load', () => {
  getCategoryData(category)
})



$('#title').hide()



$('#categories span').each(function () {
  $(this).click(function () {
    $('#categories span').removeClass('active')
    $(this).addClass('active')
    category = $(this).text()
    getCategoryData(category)
  })
})



$('#play-box').hide()

const playBoxShow = () => {
  $('.play').each(function () {
    $(this).click(function () {
      if (!$(this).hasClass('play-now')) {
        $('.play').text('Play')
        videoPause()
        $('.play').removeClass('play-now')
        $('.play').css({
          pointerEvents: 'auto'
        })
        
        $(this).addClass('play-now')
        $(this).html(pulseRate)
        let link = $(this).attr('id')
        $('#play-box').show()
        $('#play-box video').attr('src', link)
        $('#categories').hide()
        $('#search').hide()
        $('#title').hide()
        $('.box-container').css({
          height: 'calc(100% - 400px)'
        })
      } else {
        $(this).css({
          pointerEvents: 'none'
        })
      }
      
    })
  })
}

$('#play-box-close-btn').click(function () {
  $('#play-box').hide()
  videoPause()
  $('.play').removeClass('play-now')
  $('.play').text('Play')
  
  if ($('#play-box-close-btn').hasClass('play-box-close-btn-check')) {
    $('#categories').hide()
    $('#search').show()
    $('.box-container').css({
      height: `calc(100% - ${categoriesBoxHeight})`
    })
  }
  
  if ($('#play-box-close-btn').hasClass('customer-vd')) {
    $('#categories').hide()
    $('#search').show()
    $('#title').show()
    $('.box-container').css({
      height: `calc(100% - 100px)`
    })
  }
  
  if (!$('#play-box-close-btn').hasClass('customer-vd') && !$('#play-box-close-btn').hasClass('play-box-close-btn-check') ) {
    $('#categories').show()
    $('#search').show()
    $('.box-container').css({
      height: `calc(100% - ${categoriesBoxHeightAndSearchBoxHeight})`
    })
  }
  
})


$('#login-box').hide()
const loginBoxShow = () => {
  $('#login-box').show()
  homeMute()
}

const loginBoxHide = () => {
  $('#login-form input').val('')
  $('#login-box').hide()
  homeActive()
}



const addLove = () => {
  $('button, i, .btn-div, #categories span').click(function () {
      navigator.vibrate(50)
  })
  if ($('#home-page').hasClass('homeMute')) {
    $('.play').css({
      pointerEvents: 'none'
    })
  }
  
  $('.love').each(function () {
    $(this).click(function () {
      navigator.vibrate(50)
      username = localStorage.getItem('username')
      if (username != null) {
        let edit = ''
        let id = $(this).parent().attr('id')
        let loveCountId = $('#love-count-id-'+id)
        let loveCount = parseInt(loveCountId.text(), 10)
        if ($(this).hasClass('fa-solid')) {
          $(this).removeClass('animate')
          $(this).removeClass('fa-solid')
          $(this).addClass('fa-regular')
          loveCount --
          edit = 'decrease'
        } else {
          $(this).addClass('animate')
          $(this).addClass('fa-solid')
          $(this).removeClass('fa-regular')
          loveCount ++
          edit = 'increase'
        }
        $.ajax({
          url: '../php/love_count_edit.php',
          type: 'GET',
          data: `love_count=${loveCount}&id=${id}&username=${username}&edit=${edit}`,
          contentType: false,
          processData: false,
          success: function (r) {
            loveCountId.text(loveCount)
          }
        })
        
      } else {
        loginBoxShow()
      }
    })
  })
}

const addHistory = () => {
  $('.play').each(function () {
    $(this).click(function () {
      username = localStorage.getItem('username')
      if (username != null) {
        vdId = $(this).parent().attr('id')
        $.ajax({
          url: '../php/add_history.php',
          type: 'GET',
          data: `vd_id=${vdId}&username=${username}`,
          contentType: false,
          processData: false,
          success: function (r) {
            if (r == 'success') {
              
            }
          }
        })
      }
    })
  })
}

const addWatchLater = () => {
  $('.watch-later').each(function () {
    $(this).click(function () {
      username = localStorage.getItem('username')
      if (username != null) {
        let edit = ''
        let id = $(this).parent().attr('id')
        if ($(this).hasClass('fa-solid')) {
          $(this).removeClass('fa-solid')
          $(this).addClass('fa-regular')
          edit = 'decrease'
        } else {
          $(this).addClass('fa-solid')
          $(this).removeClass('fa-regular')
          edit = 'increase'
        }
        $.ajax({
          url: '../php/watch_later_edit.php',
          type: 'GET',
          data: `id=${id}&username=${username}&edit=${edit}`,
          contentType: false,
          processData: false,
          success: function (r) {
            
          }
        })
        
      } else {
        loginBoxShow()
      }
    })
  })
}



$('#login-box-close-btn').click(function () {
  loginBoxHide()
})

$('#login').click(function () {
  if ($('#name').val() != '' && $('#email').val() != '') {
    const form = document.getElementById('login-form')
    const data = new FormData(form)
    $.ajax({
      url: '../php/login.php',
      type: 'POST',
      data: data,
      contentType: false,
      processData: false,
      success: function (r) {
        if (r != '') {
          username = r
          localStorage.setItem('username', username)
          topAlertShow('Login successful', '#363e46')
          loginBoxHide()
          $('#categories span')[0].click()
        }
      }
    })
  } else {
    topAlertShow('Something wrong', '#dd1d1d')
  }
})

const shareSocial = () => {
  $("#share").jsSocials({
    url: shareUrl,
    text: "Welcome to Dark Shade",
    showLabel: false,
    shares: ["twitter", "facebook", "telegram", "viber", "linkedin", "stumbleupon"]
  })
}

const shareBoxShow = () => {
  $('.share').each(function () {
    $(this).click(function () {
      parentId = $(this).parent().attr('id')
      shareUrl = $(`#${parentId} button`).attr('id')
      $('#url').text(shareUrl)
      shareSocial()
      homeMute()
      $('#share-box').css({
        transform: 'translateY(0)'
      })
    })
  })
}

const shareBoxHide = () => {
  homeActive()
  shareUrl = ''
  $('#url').text('')
  $('#share-box').css({
    transform: 'translateY(110%)'
  })
}



$('#copy-url').click(function () {
  navigator.vibrate(50)
  navigator.clipboard.writeText(shareUrl)
  $('#copy-url i').removeClass('fa-clipboard')
  $('#copy-url i').addClass('fa-check-double')
  $('#copy-url').css({
    pointerEvents: 'none'
  })
  setTimeout(function() {
    $('#copy-url i').addClass('fa-clipboard')
    $('#copy-url i').removeClass('fa-check-double')
    $('#copy-url').css({
      pointerEvents: 'auto'
    })
  }, 3000);
})

