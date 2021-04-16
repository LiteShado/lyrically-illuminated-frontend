const backEndUrl = 'http://localhost:3001'

const showLoggedIn = () => {
    document.querySelector('#signup-link').classList.add('hidden')
    document.querySelector('#login-link').classList.add('hidden')
    document.querySelector('#profile-link').classList.remove('hidden')
    document.querySelector('#delete-link').classList.remove('hidden')
    document.querySelector('#logout-link').classList.remove('hidden')
    document.querySelector('#home-link').classList.remove('hidden')
    document.querySelector('#edit-link').classList.remove('hidden')
    let name = localStorage.getItem('name')
    let userId = localStorage.getItem('userId')
  }

  const showLoggedOut = () => {
    document.querySelector('#profile-link').classList.add('hidden')
    document.querySelector('#delete-link').classList.add('hidden')
    document.querySelector('#logout-link').classList.add('hidden')
    document.querySelector('#home-link').classList.add('hidden')
    document.querySelector('#edit-link').classList.add('hidden')
  }


  const showProfile = () => {
    document.querySelector('#profile').classList.remove('hidden')
  }


  if (localStorage.getItem('userId')) {
    showLoggedIn()
  } else {
    showLoggedOut()
    localStorage.clear()
  }

  document.querySelector('#home-link').addEventListener('click', () => {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'))
    document.querySelector('#home-content').classList.remove('hidden')
  })

  document.querySelector('#signup-link').addEventListener('click', () => {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'))
    document.querySelector('#signup-content').classList.remove('hidden')
  })

  document.querySelector('#login-link').addEventListener('click', () => {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'))
    document.querySelector('#login-content').classList.remove('hidden')
  })

  document.querySelector('#logout-link').addEventListener('click', () => {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'))
    document.querySelector('#logout-content').classList.remove('hidden')
    localStorage.removeItem('userId')
  })

  document.querySelector('#profile-link').addEventListener('click', () => {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'))
    document.querySelector('#profile').classList.remove('hidden')
  })

  document.querySelector('#edit-link').addEventListener('click', () => {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'))
    document.querySelector('#editaccount').classList.remove('hidden')
  })

  document.querySelector('#delete-link').addEventListener('click', () => {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'))
    document.querySelector('#delete-content').classList.remove('hidden')
  })



  document.querySelector('#login').addEventListener('submit', async (event) => {
    event.preventDefault()
  const email = document.querySelector('#login-email').value
  const password = document.querySelector('#login-password').value

  try {
      const res = await axios.post(`${backEndUrl}/user/login`, {
      email: email,
      password: password
    })
    let userId = res.data.user.id
    let name = res.data.user.name
    localStorage.setItem('name', name)
    localStorage.setItem('userId', userId)
    let mood = response.data.user.mood
    let tag = response.data.user.tag
    localStorage.setItem('mood', mood)
    localStorage.setItem('tag', tag)
    alert(`${name}, Let's Get iLLuminated!!`)
    showLoggedIn()
    document.querySelector('#login-content').classList.add('hidden')
    showProfile()
  } catch (error) {
      console.log(error)
      alert('login failed')
  }
  })


  document.querySelector('#signup').addEventListener('submit', async (event) => {
      event.preventDefault()

      const name = document.querySelector('#signUpName').value
      const email = document.querySelector('#signUpEmail').value
      const password = document.querySelector('#signUpPassword').value
      const tag = document.querySelector('#tag').value
    const mood = document.querySelector('#mood').value
    const tagSave = document.querySelector('.tagList1')
    const moodSave = document.querySelector('.moodList1')
    const welcome = document.querySelector('#welcomeUser')


    try {
        const res = await axios.post(`${backEndUrl}/user`, {
            name: name,
            email: email,
            password: password,
            mood: mood,
            tag: tag
        })
        let userId = res.data.user.id
        let name = res.data.user.name
        localStorage.setItem('name', name)
        localStorage.setItem('userId', userId)
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        localStorage.setItem('tag', tag)
        localStorage.setItem('mood', mood)
        moodSave.innerText = response.data.user.mood
        tagSave.innerText = response.data.user.tag
        // welcome.innerText = localStorage.getItem(name)
        showLoggedIn()
        alert('Get iLLuminated!!')
        showProfile()
    } catch (error) {
        alert('try again')
        console.log(error)
    }
    showProfile()
})

document.querySelector('#profile-link').addEventListener('click', async (event) => {
  event.preventDefault()
  // const userId = response.data.user.id
  // localStorage.getItem('userId', userId)
  let response = await axios.get(`${backEndUrl}/${userId}/profile`, {}, {
          headers: {
              authorization: userId
          }
  })
  console.log(response)
  showLoggedIn()
})
  document.querySelector('#home-link').addEventListener('click', async (event) => {

      localStorage.getItem('userId', userId)
      event.preventDefault()
      let res = await axios.get(`${backEndUrl}/${userId}/profile`, {}, {
          headers: {
              authorization: userId
            }
        })
    let userId = res.data.user.id
    console.log(response)
    showLoggedIn()
    showProfile()
})

document.querySelector('#delete').addEventListener('submit', async (event) => {
    try {
        const res = await axios.delete(`${backEndUrl}/user/${userId}`, {
            where: {
                id: req.params.id
            }
        })
        event.preventDefault()
        localStorage.clear()
        showLoggedOut()
        let userId = res.data.user.id
        location.reload();
} catch {
console.log(error)
}
showLoggedOut()
})


document.querySelector('#logout-form').addEventListener('submit', async (event) => {
event.preventDefault()
// const userId = response.data.user.id
// localStorage.clearItem('userId', userId)
// localStorage.clear()
location.reload();
showLoggedOut()
})
