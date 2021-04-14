
// LOGIN OR SIGNUP SCREEN
// const { default: axios } = require("axios")
const showSection = (sectionId) => {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'))
    document.querySelector(sectionId).classList.remove('hidden')
    document.querySelector(sectionId).classList.add('active')
}

const showLoggedIn = () => {
    document.querySelector('#signup-link').classList.add('hidden')
    document.querySelector('#login-link').classList.add('hidden')
    document.querySelector('#home-link').classList.remove('hidden')
    document.querySelector('#logout-link').classList.remove('hidden')
    document.querySelector('#profile-link').classList.remove('hidden')
    document.querySelector('#loggingin').classList.add('hidden')
    document.querySelector('#loginForm').classList.add('hidden')
    document.querySelector('#signup-form').classList.add('hidden')
    document.querySelector('#editaccount').classList.add('hidden')
    document.querySelector('#delete').classList.remove('hidden')
    document.querySelector('#home-content').classList.remove('hidden')
    document.querySelector('#home-content').classList.add('active')
    document.querySelector('#userSong').classList.remove('hidden')
    document.querySelector('#userSong').classList.add('active')
    document.querySelector('#delete').classList.remove('hidden')
    document.querySelector('#delete').classList.add('active')
    document.querySelector('#edit-form').classList.remove('hidden')
    document.querySelector('#edit-form').classList.add('active')
    document.querySelector('#logout').classList.add('hidden')

    document.querySelector('#logoutt').classList.add('hidden')


}
const showLoggedOut = () => {
    document.querySelector('#profile-link').classList.add('hidden')
    document.querySelector('#logout-link').classList.add('hidden')
    document.querySelector('#login-link').classList.add('hidden')
    document.querySelector('#home-link').classList.add('hidden')
    document.querySelector('#welcomeback').classList.add('hidden')
    document.querySelector('#editaccount').classList.add('hidden')
    document.querySelector('#userSong').classList.add('hidden')
    document.querySelector('#delete').classList.add('hidden')
    document.querySelector('#home-content').classList.add('hidden')
    document.querySelector('#welcomeback').classList.add('hidden')
    document.querySelector('#edit-form').classList.add('hidden')
    document.querySelector('#logout').classList.remove('hidden')
    document.querySelector('#logoutt').classList.add('hidden')
    document.querySelector('#loginForm').classList.add('active')
    document.querySelector('#loggingin').classList.add('active')
    document.querySelector('#signup').classList.add('active')
    document.querySelector('#signup').classList.add('hidden')
    document.querySelector('#signup-form').classList.add('active')
    document.querySelector('#signup-form').classList.add('hidden')

}
const pageRefresh = () => {

    document.querySelector('#loggingin').classList.remove('hidden')
    document.querySelector('#signup').classList.remove('hidden')

    document.querySelector('#logout-link').classList.add('hidden')
    document.querySelector('#home-link').classList.add('hidden')
    document.querySelector('#welcomeback').classList.add('hidden')
    document.querySelector('#editaccount').classList.add('hidden')
    document.querySelector('#userSong').classList.add('hidden')
    document.querySelector('#delete').classList.add('hidden')
    document.querySelector('#home-content').classList.add('hidden')
    document.querySelector('#looksgood').classList.add('hidden')
    document.querySelector('#welcomeback').classList.add('hidden')
    document.querySelector('#edit-form').classList.add('hidden')
}

document.querySelector('#home-link').addEventListener('click', () => {
    // showSection('#home-content')
    showSection('#logout')
    document.querySelector('#login-link').classList.remove('hidden')
    document.querySelector('#profile-link').classList.add('hidden')
    document.querySelector('#signup-link').classList.remove('hidden')


})
document.querySelector('#signup-link').addEventListener('click', () => {
    showSection('#logoutt')
    document.querySelector('#login-link').classList.remove('hidden')

})
document.querySelector('#login-link').addEventListener('click', () => {
    showSection('#logout')

})
document.querySelector('#logout-link').addEventListener('click', () => {
    showSection('#logout')
    document.querySelector('#logout-link').classList.add('hidden')

})

document.querySelector('#profile-link').addEventListener('click', () => {
    document.querySelector('#editaccount').classList.remove('hidden')
    document.querySelector('#home-content').classList.add('hidden')
    document.querySelector('#welcomeback').classList.add('hidden')
    // showSection('#editaccount')
})
const welcome = document.querySelector('#welcomeUser')
const user = localStorage.getItem('name')
welcome.innerText = user

if (localStorage.getItem('userId')) {
    showLoggedIn()
} else {
    showLoggedOut()
    localStorage.clear()
}

////LOGIN CODE
document.querySelector('#loginForm').addEventListener('submit', async (event) => {
    event.preventDefault()
    const email = document.querySelector('#userEmail').value
    const password = document.querySelector('#userPassword').value
    const moodSave = document.querySelector('.moodList1')
    const tagSave = document.querySelector('.tagList1')
    const welcome = document.querySelector('#welcomeUser')
    try  {
        const response = await axios.post('http://localhost:3001/user/login', {
            email: email,
            password: password
        })
        console.log(response)
        console.log(user)

    const userId = response.data.user.id
    const name = response.data.user.name
    const mood = response.data.user.mood
    const tag = response.data.user.tag
    localStorage.setItem('userId', userId)
    localStorage.setItem('email', email)
    localStorage.setItem('name', name)
    localStorage.setItem('password', password)
    document.querySelector('#welcomeback').classList.add('active')
    document.querySelector('#welcomeback').classList.remove('hidden')
    moodSave.innerText = mood
    tagSave.innerText = tag
    welcome.innerText = name
    showLoggedIn()
}   catch (error) {
    console.log(error)
    alert("Bad Password");
}
})

////SIGNUP CODE
document.querySelector('#signup-form').addEventListener('submit', async (event) => {
    event.preventDefault()
    const email = document.querySelector('#signupEmail').value
    const name = document.querySelector('#signupName').value
    const password = document.querySelector('#signupPassword').value
    const tag = document.querySelector('#mood').value
    const mood = document.querySelector('#tag').value
    const moodSave = document.querySelector('.moodList1')
    const tagSave = document.querySelector('.tagList1')
    const welcome = document.querySelector('#welcomeUser')

    try  {
        const response = await axios.post('http://localhost:3001/user', {
            email: email,
            password: password,
            name: name,
            mood: mood,
            tag: tag
        })
        console.log(response)
        console.log(email, name, password, tag, mood)
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        localStorage.setItem('tag', tag)
        localStorage.setItem('mood', mood)
        document.querySelector('#signup-form').classList.add('hidden')
        document.querySelector('#signup-form').classList.remove('active')
        document.querySelector('#welcomeback').classList.add('active')
        document.querySelector('#welcomeback').classList.remove('hidden')
        moodSave.innerText = response.data.user.mood
        tagSave.innerText = response.data.user.tag
        welcome.innerText = response.data.user.name
        showLoggedIn()


} catch (error) {
    console.log(error)
    alert('email is already taken')
}
})

document.querySelector('#edit-form').addEventListener('submit', async (event) => {
    event.preventDefault()
    const name = document.querySelector('#userName').value
    const email = document.querySelector('#userEmail').value
    const password = document.querySelector('#userPassword').value
    const mood = document.querySelector('#mood').value
    const tag = document.querySelector('#tag').value

    try  {
    const response = await axios.put('http://localhost:3001/user/edit', {
        email: email,
        password: password,
        name: name,
        mood: mood,
        tag: tag
    })
    console.log(response)
    alert('Your information has been updated')

} catch (error) {
    console.log(error)
}
})

// LOG OUT CODE

document.querySelector('#logout-link').addEventListener('click', async (event) => {
    event.preventDefault()
    try  {
        const response = await axios.post('http://localhost:3001/user/logout', {
        })
            localStorage.clear()
            localStorage.removeItem('userId')

    console.log(response)
    // showLoggedOut()
    // authCheck()
}   catch (error) {
    console.log(error)
}
})

// const authCheck = () => {
//     const userId = localStorage.getItem('userId')
//     if (userId) {
//         let userEmail = document.querySelector('#userEmail')
//         let usersEmail = localStorage.getItem('resemail')
//         userEmail.innerText = usersEmail
//     } else {
//         showLoggedOut()
//     }
// }
// authCheck()

document.querySelector('#profile-link').addEventListener('click', async (event) => {
    event.preventDefault()
    // userId = localStorage.getItem("userId");
    try  {
        const response = await axios.get('http://localhost:3001/user/profile', {
            where: {
                id: localStorage.getItem("userId")
            }
        })
    console.log(response)
    // console.log(userId)
    showLoggedIn()
    // authCheck()
}   catch (error) {
    console.log(error)
}
})

// document.querySelector('#edit-form').addEventListener('submit', async (event) => {
//     event.preventDefault()
//     try {
//         const user = await models.user.update({
//           where: {
//             id: req.body.id
//         }
//         })
//     console.log(user)
//     showLoggedIn()
// }   catch (error) {
//     console.log(error)
// }
// })

document.querySelector('#delete').addEventListener('submit', async (event) => {
    event.preventDefault()
    // try {
        // let user = await models.user.destroy({
            where: {
                id: localStorage.removeItem('userId', userId)
                id: localStorage.clear()

            }
        // ({
    console.log(userId)
    // showLoggedOut()
// }   catch (error) {
//
    // console.log(error)
        })
        console.log(localStorage)

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
