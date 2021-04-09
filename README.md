# Lyrically iLLuminated

## Goals

#### Providing user with platform to save a list of 3 tags and moods that reflect the type of song lyrics that they want to inspire them.

#### User can create an account, and based upon their tag and mood choices, will be fed a list of 4-line quotes from popular songs.

#### User can delete tags, mood, and even account whenever they choose.###


# User Story

#### When I visit the website, I am asked if I want to sign up or log in.

#### When I sign up, I am asked my email address, name, password

#### When I am in my account, I am prompted to provided up to 3 tags and 3 moods reflecting my mood.

#### Once I provide these tags and moods, I am given a list of song lyrics.


## HTTP Routes

* GET'/login', user sign in
* GET'/user/new', user sign out page
* POST'/user', user can sign up 
* GET'/user/:id/, user can access lyrics that are tailored to their mood/tag
* PUT'/user/:id/edit', user account edit page
* GET'/tag', user can view their saved tags
* GET'/mood', user can view their saved moods
* POST'/user/:id/tag' user can add tags
* POST '/user/:id/mood' user can add moods
* DELETE '/user/:id/', user can delete account
* GET'/logout', user can sign out of the account

