
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
        const response = await axios.post('https://lyrically-backend.herokuapp.com/user/login', {
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
        const response = await axios.post('https://lyrically-backend.herokuapp.com/user', {
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
    const response = await axios.put('https://lyrically-backend.herokuapp.com/user/edit', {
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
        const response = await axios.post('https://lyrically-backend.herokuapp.com/user/logout', {
        })
            localStorage.clear()
            localStorage.removeItem('userId')

    console.log(response)
    document.querySelector('#profile-link').classList.remove('active')
    document.querySelector('#profile-link').classList.add('hidden')
    showLoggedOut()
    document.querySelector('#signup-link').classList.remove('hidden')
    document.querySelector('#signup-link').classList.add('active')


    // showLoggedOut()
    // authCheck()
}   catch (error) {
    console.log(error)
    document.querySelector('#profile-link').classList.remove('active')
    document.querySelector('#profile-link').classList.add('hidden')
    showLoggedOut()
    document.querySelector('#signup-link').classList.remove('hidden')
    document.querySelector('#signup-link').classList.add('active')
}
})

document.querySelector('#profile-link').addEventListener('click', async (event) => {
    event.preventDefault()
    // userId = localStorage.getItem("userId");
    try  {
        const response = await axios.get('https://lyrically-backend.herokuapp.com/user/profile', {
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
const deleted = document.querySelector('#delete')
deleted.addEventListener('submit', async (e) => {
    event.preventDefault()
    console.log("delete")
    try {
        const userId = localStorage.getItem('userId')
        // const deleteUser = (userId, () => {
        let res = await axios.delete(`https://lyrically-backend.herokuapp.com/user/${userId}/delete`)
        console.log(res)
        localStorage.removeItem('userId', userId)
        localStorage.clear()
        showLoggedOut()
    } catch (error) {
        console.log(error)
    }
})



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



const authCheck = () => {
    const userId = localStorage.getItem('userId')
    if (userId) {
        let userName = document.querySelector('.userName')
        let usersName = localStorage.getItem('userName')
        userName.innerText = usersName
        getAllLocations()
        showLoggedIn()
    } else {
        showLoggedOut()
    }
}
