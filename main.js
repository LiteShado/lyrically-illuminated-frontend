
// LOGIN OR SIGNUP SCREEN

const showLoginScreen = () => {
    userAccount.classList.add('hidden')
    signUpScreen.classList.add('hidden')
    loginForm.classList.remove('hidden')
    success.classList.add('hidden')
    saved.classList.add('hidden')
    newInput.classList.add('hidden')
    newInputForm.classList.add('hidden')

}
loginButton.addEventListener('click', () => {
    switchToLogin()
})


let signUpButton= document.querySelector('.signUpButton')

const switchToSignUp = () => {
    userAccount.classList.add('hidden')
    signUpScreen.classList.remove('hidden')
    loginScreen.classList.add('hidden')
    success.classList.add('hidden')
    saved.classList.add('hidden')
    newInput.classList.add('hidden')
    newInputForm.classList.add('hidden')

}
signUpButton.addEventListener('click', () => {
    switchToSignUp()
})

// const userSignUp = document.querySelector('.userSignUp')
const userSignUp = document.querySelector('.signup-form')

userSignUp.addEventListener('submit', async (e) => {
    e.preventDefault()

    const name = document.querySelector('#userName').value

    const email = document.querySelector('#userEmail').value

    const password = document.querySelector('#userPassword').value

// SHOW ACCOUNT
const showAccount = () => {
    userAccount.classList.add('hidden')
    userSignUp.classList.add('hidden')
    loginForm.classList.add('hidden')
    success.classList.add('hidden')
    saved.classList.remove('hidden')
    newInput.classList.add('hidden')
    newInputForm.classList.add('hidden')


    let userName = document.querySelector('.userName')
    let usersName = localStorage.getItem('userName')
    if(usersName !== undefined) {
        userName.innerText = usersName
    }
}

    try {
        const response = await axios.post('http://localhost:3001/user', {
            name: name,
            email: email,
            password: password,
        })
        console.log(response)

        const userId = response.data.user.id
        console.log(userId)

        const userName = response.data.user.name
        console.log(userName)

        localStorage.setItem('userId', userId)
        localStorage.setItem('userName', userName)
        localStorage.setItem('userMood', userMood)
        localStorage.setItem('userTag', userTag)
        getAllLocations()
        switchToLogin()

    } catch (error) {
        console.log(error)
    }
})

const loginForm = document.querySelector('.userLogin')
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = document.querySelector('#userLoginEmail').value

    const password = document.querySelector('#userLoginPassword').value
    try {
        const response = await axios.post('http://localhost:3001/user/login', {
            email: email,
            password: password
    })

    console.log(response)

    const userId = response.data.id
    const userName = response.data.name
    const userMood = response.data.mood
    const userTag = response.data.tag
    localStorage.setItem('userName', userName)
    localStorage.setItem('userId', userId)
    localStorage.setItem('userMood', userMood)
    localStorage.setItem('userTag', userTag)
    getAllLocations()
    switchToLogin()

    } catch (error) {
        console.log(error)
        alert(error)
    }
})

// LOG IN OR LOG OUT

const loginButton = document.querySelector('.loginButton')
loginButton.addEventListener('click', () => {
    switchToLogin()
})

const logoutButton = document.querySelector('.signOutButton')
logoutButton.addEventListener('click', () => {
    logout()
})
const logout = () => {
    localStorage.clear()
    authCheck()
}

// Retrieve Music

let illuminate = document.querySelector('.success')
illuminate.addEventListener('submit', async(e) => {
    e.preventDefault()
    try {
        const mood = document.querySelector('#successMood').value
        console.log(mood)

        const tag = document.querySelector('#successTag').value
        console.log(tag)

        const res = await axios.post(`http://localhost:3001/location/search/${searchBar}`)
        console.log(res.data)

        showResults(res.data)
        searchForm.reset()
    } catch (error) {
        console.log(error)
    }
})

resultsId = null
const showResults = (data) => {
    resultsId = data.id
    let searchResults = document.querySelector('.searchResults')
    searchResults.classList.remove('hidden')


    let resultsLocation = document.querySelector('.resultsLocation')
    resultsLocation.innerText = data.name

    let resultsWeather = document.querySelector('.resultsWeather')
    resultsWeather.innerText = data.weather[0].main
    let resultsWeather2 = document.querySelector('.resultsWeather2')
    resultsWeather2.innerText = data.weather[0].description

    let resultsFeelsLike = document.querySelector('.resultsFeelsLike')
    resultsFeelsLike.innerText = `Feels like: ${data.main.feels_like}`
    let resultsHumidity = document.querySelector('.resultsHumidity')
    resultsHumidity.innerText = `Humidity: ${data.main.humidity}`
    let resultsMax = document.querySelector('.resultsMax')
    resultsMax.innerText = `Max: ${data.main.temp_max}`

    let resultsMin = document.querySelector('.resultsMin')
    resultsMin.innerText = `Min: ${data.main.temp_min}`

}

const saveSearch = document.querySelector('.saveSearch')
saveSearch.addEventListener('click', async (e) => {
    e.preventDefault()

    try {
        let userId = localStorage.getItem('userId')
    const res = await axios.post(`http://localhost:3001/location/${userId}/save/${resultsId}`)
    getAllLocations()
    closeSearchFunc()
    console.log(res)
    } catch (error) {
        console.log(res)
    }
})
let closeSearch = document.querySelector('.closeSearch')
let closeSearchFunc = () => {
    let searchResults = document.querySelector('.searchResults')
    searchResults.classList.add('hidden')
}
closeSearch.addEventListener('click', () => {
  closeSearchFunc()
})


//SHOW SAVED LOCATIONS



const getAllLocations = async () => {
    let userId = localStorage.getItem('userId')
    let locationsContainer = document.querySelector('.locationsContainer')
    while(locationsContainer.firstChild) {
        locationsContainer.firstChild.remove()
    }
    if(userId) {
        let res = await axios.get(`http://localhost:3001/user/${userId}/getlocations`)
        console.log(res.data.locations)
        addLocations(res.data.locations)
    }
}

let deleteSingle = async (locationId) => {
    let userId = localStorage.getItem('userId')
    let res = await axios.delete(`http://localhost:3001/user/${userId}/delete/${locationId}`)
    console.log(res)
    getAllLocations()
}
const addLocations = async (data) => {
    let locationsContainer = document.querySelector('.locationsContainer')
    console.log(data)
    while(locationsContainer.firstChild) {
        locationsContainer.firstChild.remove()
    }
    for(let location of data) {
        let res = await axios.get(`http://localhost:3001/location/search/${location.locationId}`)
        console.log(res.data)
        console.log(location.id)

        let div = document.createElement('div')
        let h1 = document.createElement('h1')
        let temp = document.createElement('p')
        let weather = document.createElement('p')
        temp.classList.add('singleTemp')
        weather.classList.add('singleWeather')
        weather.innerText = res.data.weather[0].main
        temp.innerText = res.data.main.temp
        div.classList.add('singleLocation')
        h1.innerText = res.data.name
        div.append(h1)
        div.append(temp)
        div.append(weather)
        let deleteButton = document.createElement('button')
        deleteButton.classList.add('deleteSingle')
        deleteButton.innerText = 'delete'
        deleteButton.addEventListener('click', (e) => {
            e.preventDefault()
            deleteSingle(location.id)
        })
        div.append(deleteButton)
        locationsContainer.append(div)
    }

}

const authCheck = () => {
    const userId = localStorage.getItem('userId')
    if (userId) {
        let userName = document.querySelector('.userName')
        let usersName = localStorage.getItem('userName')
        userName.innerText = usersName
        getAllLocations()
        switchToDash()
    } else {
        switchToLogin()
    }
}
