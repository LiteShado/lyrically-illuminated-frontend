
// LOGIN OR SIGNUP SCREEN

// const { default: axios } = require("axios")

// const showLoginScreen = () => {
//     userAccount.classList.add('hidden')
//     signUpScreen.classList.add('hidden')
//     loginForm.classList.remove('hidden')
//     success.classList.add('hidden')
//     saved.classList.add('hidden')
//     newInput.classList.add('hidden')
//     newInputForm.classList.add('hidden')

// }
const showSection = (sectionId) => {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'))
    document.querySelector(sectionId).classList.remove('hidden')
}

document.querySelector('home-link').addEventListener('click', () => {
    showSection('#home-content')
})
document.querySelector('signup-link').addEventListener('click', () => {
    showSection('#signup')
})
document.querySelector('login-link').addEventListener('click', () => {
    showSection('#loggingin')
})
document.querySelector('logout-link').addEventListener('click', () => {
    showSection('#logout')
})
document.querySelector('profile-link').addEventListener('click', () => {
    showSection('#editaccount')
})


const showLoggedIn = () => {
    document.querySelector('#signup-link').classList.add('hidden')
    document.querySelector('#login-link').classList.add('hidden')
    document.querySelector('#signup-link').classList.add('hidden')
    document.querySelector('#loggingin').classList.add('hidden')
    document.querySelector('#loginForm').classList.add('hidden')
    document.querySelector('#signuptitle').classList.add('hidden')
    document.querySelector('#signup-form').classList.add('hidden')
}
const showLoggedOut = () => {
    document.querySelector('#profile-link').classList.add('hidden')
    document.querySelector('#logout-link').classList.add('hidden')
    document.querySelector('#home-link').classList.add('hidden')
    document.querySelector('#welcomeback').classList.add('hidden')
    document.querySelector('#editaccount').classList.add('hidden')
    document.querySelector('#success').classList.add('hidden')
    document.querySelector('#userLoggedIn').classList.add('hidden')
    document.querySelector('#userSong').classList.add('hidden')
    document.querySelector('#success').classList.add('hidden')
    document.querySelector('#delete').classList.add('hidden')
    document.querySelector('#home-content').classList.add('hidden')
    document.querySelector('#saved').classList.add('hidden')
    document.querySelector('#welcomeback').classList.add('hidden')
}

if (localStorage.getItem('userId')) {
    document.querySelector('#loggedout').classList.add('hidden')
    document.querySelector('loggingin').classList.add('hidden')
    document.querySelector('#loginForm').classList.add('hidden')
    document.querySelector('.signUpTitle').classList.add('hidden')
    document.querySelector('.logInTitle').classList.add('hidden')


} else {
    document.querySelector('#loggedout').classList.remove('active')
    document.querySelector('#loggedout').classList.add('hidden')
    document.querySelector('#loggingin').classList.remove('hidden')
    document.querySelector('#loggingin').classList.add('active')
    document.querySelector('#loginForm').classList.remove('hidden')
    document.querySelector('#signup-form').classList.remove('active')
    document.querySelector('#welcomeUser').classList.remove('active')
    document.querySelector('#saved').classList.remove('active')
    document.querySelector('#newInputForm').classList.remove('active')
}

////LOGIN CODE
document.querySelector('#loginForm').addEventListener('submit', async (event) => {
    event.preventDefault()

    const email = document.querySelector('#userEmail').value
    const password = document.querySelector('#userPassword').value

    console.log(email)
    console.log(password)

    try  {
        const response = await axios.post('http://localhost:3001/user/login', {
        email: email,
        password: password
    })
    console.log(response)
    const userId = response.data.user.id
    localStorage.setItem('userId', userId)
    showLoggedIn()
}   catch (error) {
    console.log(error)
}
})

////SIGNUP CODE
document.querySelector('#signup-form').addEventListener('submit', async (event) => {
    event.preventDefault()

    const name = document.querySelector('#signupName').value
    const email = document.querySelector('#signupEmail').value
    const password = document.querySelector('#signupPassword').value
    const mood = document.querySelector('#mood').value
    const tag = document.querySelector('#tag').value

    console.log(name)
    console.log(email)
    console.log(password)
    console.log(mood)
    console.log(tag)

    try  {
    const response = await axios.post('http://localhost:3001/user', {
        email: email,
        password: password,
        name: name,
        mood: mood,
        tag: tag
    })
    console.log(response)
    const userId = response.data.user.id
    localStorage.setItem('userId', userId)
    showLoggedIn()
} catch (error) {
    console.log(error)
    alert('email is already taken')
}
})

document.querySelector('#looksgood').addEventListener('submit', async (event) => {
    event.preventDefault()

    const name = document.querySelector('#signupName').value
    const email = document.querySelector('#signupEmail').value
    const password = document.querySelector('#signupPassword').value
    const mood = document.querySelector('#mood').value
    const tag = document.querySelector('#tag').value

    console.log(name)
    console.log(email)
    console.log(password)
    console.log(mood)
    console.log(tag)

    try  {
    const response = await axios.post('http://localhost:3001/user', {
        email: email,
        password: password,
        name: name,
        mood: mood,
        tag: tag
    })
    console.log(response)
    const userId = response.data.user.id
    localStorage.setItem('userId', userId)

} catch (error) {
    console.log(error)
    alert('email is already taken')
}
})


// // SHOW ACCOUNT
// const showAccount = () => {
//     userAccount.classList.add('hidden')
//     userSignUp.classList.add('hidden')
//     loginForm.classList.add('hidden')
//     success.classList.add('hidden')
//     saved.classList.remove('hidden')
//     newInput.classList.add('hidden')
//     newInputForm.classList.add('hidden')


//     let userName = document.querySelector('.userName')
//     let usersName = localStorage.getItem('userName')
//     if(usersName !== undefined) {
//         userName.innerText = usersName
//     }
// }

//     try {
//         const response = await axios.post('http://localhost:3001/user', {
//             name: name,
//             email: email,
//             password: password,
//         })
//         console.log(response)

//         const userId = response.data.user.id
//         console.log(userId)

//         const userName = response.data.user.name
//         console.log(userName)

//         localStorage.setItem('userId', userId)
//         localStorage.setItem('userName', userName)
//         localStorage.setItem('userMood', userMood)
//         localStorage.setItem('userTag', userTag)
//         getAllLocations()
//         switchToLogin()

//     } catch (error) {
//         console.log(error)
//     }
// })

// const loginForm = document.querySelector('.userLogin')
// loginForm.addEventListener('submit', async (e) => {
//     e.preventDefault()
//     const email = document.querySelector('#userLoginEmail').value

//     const password = document.querySelector('#userLoginPassword').value
//     try {
//         const response = await axios.post('http://localhost:3001/user/login', {
//             email: email,
//             password: password
//     })

//     console.log(response)

//     const userId = response.data.id
//     const userName = response.data.name
//     const userMood = response.data.mood
//     const userTag = response.data.tag
//     localStorage.setItem('userName', userName)
//     localStorage.setItem('userId', userId)
//     localStorage.setItem('userMood', userMood)
//     localStorage.setItem('userTag', userTag)
//     getAllLocations()
//     switchToLogin()

//     } catch (error) {
//         console.log(error)
//         alert(error)
//     }
// })

// // LOG IN OR LOG OUT

// const loginButton = document.querySelector('.loginButton')
// loginButton.addEventListener('click', () => {
//     switchToLogin()
// })

// const logoutButton = document.querySelector('.signOutButton')
// logoutButton.addEventListener('click', () => {
//     logout()
// })
// const logout = () => {
//     localStorage.clear()
//     authCheck()
// }

// // Retrieve Music

// let illuminate = document.querySelector('.success')
// illuminate.addEventListener('submit', async(e) => {
//     e.preventDefault()
//     try {
//         const mood = document.querySelector('#successMood').value
//         console.log(mood)

//         const tag = document.querySelector('#successTag').value
//         console.log(tag)

//         const res = await axios.post(`http://localhost:3001/location/search/${searchBar}`)
//         console.log(res.data)

//         showResults(res.data)
//         searchForm.reset()
//     } catch (error) {
//         console.log(error)
//     }
// })

// resultsId = null
// const showResults = (data) => {
//     resultsId = data.id
//     let searchResults = document.querySelector('.searchResults')
//     searchResults.classList.remove('hidden')


//     let resultsLocation = document.querySelector('.resultsLocation')
//     resultsLocation.innerText = data.name

//     let resultsWeather = document.querySelector('.resultsWeather')
//     resultsWeather.innerText = data.weather[0].main
//     let resultsWeather2 = document.querySelector('.resultsWeather2')
//     resultsWeather2.innerText = data.weather[0].description

//     let resultsFeelsLike = document.querySelector('.resultsFeelsLike')
//     resultsFeelsLike.innerText = `Feels like: ${data.main.feels_like}`
//     let resultsHumidity = document.querySelector('.resultsHumidity')
//     resultsHumidity.innerText = `Humidity: ${data.main.humidity}`
//     let resultsMax = document.querySelector('.resultsMax')
//     resultsMax.innerText = `Max: ${data.main.temp_max}`

//     let resultsMin = document.querySelector('.resultsMin')
//     resultsMin.innerText = `Min: ${data.main.temp_min}`

// }

// const saveSearch = document.querySelector('.saveSearch')
// saveSearch.addEventListener('click', async (e) => {
//     e.preventDefault()

//     try {
//         let userId = localStorage.getItem('userId')
//     const res = await axios.post(`http://localhost:3001/location/${userId}/save/${resultsId}`)
//     getAllLocations()
//     closeSearchFunc()
//     console.log(res)
//     } catch (error) {
//         console.log(res)
//     }
// })
// let closeSearch = document.querySelector('.closeSearch')
// let closeSearchFunc = () => {
//     let searchResults = document.querySelector('.searchResults')
//     searchResults.classList.add('hidden')
// }
// closeSearch.addEventListener('click', () => {
//   closeSearchFunc()
// })


// //SHOW SAVED LOCATIONS



// const getAllLocations = async () => {
//     let userId = localStorage.getItem('userId')
//     let locationsContainer = document.querySelector('.locationsContainer')
//     while(locationsContainer.firstChild) {
//         locationsContainer.firstChild.remove()
//     }
//     if(userId) {
//         let res = await axios.get(`http://localhost:3001/user/${userId}/getlocations`)
//         console.log(res.data.locations)
//         addLocations(res.data.locations)
//     }
// }

// let deleteSingle = async (locationId) => {
//     let userId = localStorage.getItem('userId')
//     let res = await axios.delete(`http://localhost:3001/user/${userId}/delete/${locationId}`)
//     console.log(res)
//     getAllLocations()
// }
// const addLocations = async (data) => {
//     let locationsContainer = document.querySelector('.locationsContainer')
//     console.log(data)
//     while(locationsContainer.firstChild) {
//         locationsContainer.firstChild.remove()
//     }
//     for(let location of data) {
//         let res = await axios.get(`http://localhost:3001/location/search/${location.locationId}`)
//         console.log(res.data)
//         console.log(location.id)

//         let div = document.createElement('div')
//         let h1 = document.createElement('h1')
//         let temp = document.createElement('p')
//         let weather = document.createElement('p')
//         temp.classList.add('singleTemp')
//         weather.classList.add('singleWeather')
//         weather.innerText = res.data.weather[0].main
//         temp.innerText = res.data.main.temp
//         div.classList.add('singleLocation')
//         h1.innerText = res.data.name
//         div.append(h1)
//         div.append(temp)
//         div.append(weather)
//         let deleteButton = document.createElement('button')
//         deleteButton.classList.add('deleteSingle')
//         deleteButton.innerText = 'delete'
//         deleteButton.addEventListener('click', (e) => {
//             e.preventDefault()
//             deleteSingle(location.id)
//         })
//         div.append(deleteButton)
//         locationsContainer.append(div)
//     }

// }

// const authCheck = () => {
//     const userId = localStorage.getItem('userId')
//     if (userId) {
//         let userName = document.querySelector('.userName')
//         let usersName = localStorage.getItem('userName')
//         userName.innerText = usersName
//         getAllLocations()
//         switchToDash()
//     } else {
//         switchToLogin()
//     }
// }
